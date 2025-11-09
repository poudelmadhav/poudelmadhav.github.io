"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`section-fade-in ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experience & <span className="gradient-text">Skills</span>
          </h2>

          <Card className="bg-card border-border shadow-lg mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground text-center">Core Competencies</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">●</span> Leadership & Management
                  </h4>
                  <p className="text-muted-foreground text-sm pl-5">
                    Team leadership, project management, technical mentoring, Agile/Scrum methodologies
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">●</span> Ruby on Rails Development
                  </h4>
                  <p className="text-muted-foreground text-sm pl-5">
                    Building scalable web applications, RESTful APIs, database design, performance optimization
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">●</span> Full-Stack Web Development
                  </h4>
                  <p className="text-muted-foreground text-sm pl-5">
                    JavaScript, HTML/CSS, Bootstrap, Tailwind CSS, responsive design, UI/UX implementation
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">●</span> Database & Cloud
                  </h4>
                  <p className="text-muted-foreground text-sm pl-5">
                    PostgreSQL, MySQL, AWS, Google Cloud Platform, CI/CD pipelines, Docker
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">●</span> Collaboration & Tools
                  </h4>
                  <p className="text-muted-foreground text-sm pl-5">
                    Git/GitHub, Jira, code reviews, knowledge sharing, cross-functional teamwork
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">●</span> Problem Solving
                  </h4>
                  <p className="text-muted-foreground text-sm pl-5">
                    Debugging complex issues, performance optimization, technical decision-making
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground text-center">
                Professional Experience
              </h3>

              <div className="space-y-8">
            {/* Chulo Solutions - Principal Engineer */}
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-semibold text-card-foreground">Principal Engineer</h4>
                    <p className="text-base text-muted-foreground font-medium">Chulo Solutions Pvt. Ltd.</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="block sm:text-right">Jul 2023 - Present</span>
                    <span className="block sm:text-right text-xs">Kathmandu, Nepal</span>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Spearheaded successful launch of web app for Japanese client, exceeding quality and cultural expectations.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Guided team of 5 devs, ensuring seamless collaboration and client delight.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Chulo Solutions - Project Manager */}
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-semibold text-card-foreground">Project Manager</h4>
                    <p className="text-base text-muted-foreground font-medium">Chulo Solutions Pvt. Ltd.</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="block sm:text-right">Feb 2021 - Jul 2023</span>
                    <span className="block sm:text-right text-xs">Kathmandu, Nepal</span>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Led development of highly scalable Ruby on Rails web features handling millions of daily requests, taking lead roles in several key projects.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Chulo Solutions - Software Engineer */}
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-semibold text-card-foreground">Software Engineer</h4>
                    <p className="text-base text-muted-foreground font-medium">Chulo Solutions Pvt. Ltd.</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="block sm:text-right">Jul 2020 - Jul 2021</span>
                    <span className="block sm:text-right text-xs">Kathmandu, Nepal</span>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Built interactive web applications using Ruby on Rails, crafting REST APIs and back-end logic.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Integrated front-end, championed code reviews & and knowledge sharing.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Debugged complex issues, ensured top-notch app performance.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Techrise - Associate Software Engineer */}
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-semibold text-card-foreground">Associate Software Engineer</h4>
                    <p className="text-base text-muted-foreground font-medium">Techrise Pvt. Ltd.</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="block sm:text-right">Feb 2019 - Jul 2020</span>
                    <span className="block sm:text-right text-xs">Kathmandu, Nepal</span>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Proactively engaged with experienced Rails developers, fostering rapid skill growth.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mastered HTML/CSS/JS, seamlessly integrating front-end expertise for comprehensive web development.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Techrise - Intern */}
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-semibold text-card-foreground">Software Developer Intern</h4>
                    <p className="text-base text-muted-foreground font-medium">Techrise Pvt. Ltd.</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="block sm:text-right">Oct 2018 - Jan 2019</span>
                    <span className="block sm:text-right text-xs">Kathmandu, Nepal</span>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Developed dynamic Rails projects featuring user authentication, follow functionalities, and comprehensive review systems with guidance of mentors.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

              <p className="text-sm text-muted-foreground text-center mt-8 pt-6 border-t border-border">
                <span className="inline-flex flex-wrap items-center justify-center gap-1">
                  Note: The above companies are the branch of{" "}
                  <a
                    href="https://namespace.jp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Namespace Inc., Japan
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

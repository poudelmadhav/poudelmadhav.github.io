"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Professional Experience</h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-lg font-semibold text-card-foreground">Principal Engineer</h4>
                    <p className="text-primary font-medium">Chulo Solutions Pvt. Ltd.</p>
                    <p className="text-muted-foreground text-sm mb-2">2020 - Present</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Leading engineering teams in developing scalable software solutions. Architecting cloud-native
                      applications and implementing best practices for code quality and team productivity.
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-6">
                    <h4 className="text-lg font-semibold text-card-foreground">Senior Software Developer</h4>
                    <p className="text-primary font-medium">Previous Role</p>
                    <p className="text-muted-foreground text-sm mb-2">2018 - 2020</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Developed and maintained web applications using modern frameworks. Collaborated with
                      cross-functional teams to deliver high-quality software products.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Core Competencies</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Leadership & Management</h4>
                    <p className="text-muted-foreground text-sm">
                      Team leadership, project management, technical mentoring
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Architecture & Design</h4>
                    <p className="text-muted-foreground text-sm">System architecture, microservices, cloud solutions</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Full-Stack Development</h4>
                    <p className="text-muted-foreground text-sm">
                      Frontend frameworks, backend services, database design
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">DevOps & Cloud</h4>
                    <p className="text-muted-foreground text-sm">CI/CD pipelines, containerization, cloud platforms</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

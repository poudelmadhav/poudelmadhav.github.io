"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Users, Lightbulb, Target, Zap, Database, Globe, Smartphone } from "lucide-react"

export default function AboutSection() {
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

  const technicalSkills = [
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "MongoDB", icon: "🍃" },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`section-fade-in ${isVisible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate engineer with a vision for innovative solutions and team excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main story card */}
            <div className="lg:col-span-2">
              <Card className="card-hover bg-card border-border shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground">My Journey</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    As a Principal Engineer at Chulo Solutions Pvt. Ltd., I lead engineering teams in developing
                    cutting-edge software solutions. With a strong foundation in Computer Science and Information
                    Technology, I specialize in creating scalable applications and innovative web development.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    My passion lies in mobile app development, web design, and building effective cloud solutions for
                    companies of all sizes. I believe in continuous learning and staying at the forefront of technology
                    trends to deliver exceptional results.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Leadership
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Innovation
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Scalability
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Team Building
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats/highlights card */}
            <div className="space-y-6">
              <Card className="card-hover bg-primary text-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 mx-auto mb-3 text-white" />
                  <h4 className="font-bold text-lg mb-2 text-white">Current Role</h4>
                  <p className="text-sm text-white/90">Principal Engineer</p>
                  <p className="text-xs text-white/75 mt-1">Chulo Solutions Pvt. Ltd.</p>
                </CardContent>
              </Card>

              <Card className="card-hover bg-card border-border shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h4 className="font-bold text-lg mb-2 text-card-foreground">Team Leadership</h4>
                  <p className="text-sm text-muted-foreground">
                    Leading cross-functional teams to deliver exceptional software solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover bg-card border-border shadow-lg">
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h4 className="font-bold text-lg mb-2 text-card-foreground">Innovation Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Driving technological advancement and creative problem-solving
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              Technical <span className="gradient-text">Skills</span>
            </h3>
            <Card className="card-hover bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {technicalSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group text-center p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover bg-card border-border shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">Web Development</h4>
                <p className="text-sm text-muted-foreground">Modern web applications with cutting-edge technologies</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-card border-border shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">Mobile Apps</h4>
                <p className="text-sm text-muted-foreground">Cross-platform mobile solutions for iOS and Android</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-card border-border shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">Cloud Solutions</h4>
                <p className="text-sm text-muted-foreground">Scalable cloud infrastructure and deployment strategies</p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-card border-border shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-2">Team Leadership</h4>
                <p className="text-sm text-muted-foreground">Mentoring developers and driving technical excellence</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
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

  const projects = [
    {
      title: "Enterprise Web Application",
      description:
        "Led the development of a scalable enterprise web application serving 10,000+ users. Implemented microservices architecture with React frontend and Node.js backend.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      image: "/modern-web-dashboard.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Mobile App Development",
      description:
        "Architected and developed cross-platform mobile applications with real-time features. Focused on performance optimization and user experience.",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      image: "/mobile-app-interface.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Cloud Infrastructure Solution",
      description:
        "Designed and implemented cloud infrastructure solutions for multiple clients. Achieved 99.9% uptime and reduced operational costs by 40%.",
      technologies: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Monitoring"],
      image: "/cloud-infrastructure-diagram.png",
      github: "#",
      demo: "#",
    },
    {
      title: "API Gateway & Microservices",
      description:
        "Built a comprehensive API gateway handling 1M+ requests daily. Implemented authentication, rate limiting, and service discovery.",
      technologies: ["Spring Boot", "Java", "Redis", "MongoDB", "GraphQL"],
      image: "/api-architecture-diagram.jpg",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`section-fade-in ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="p-0">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 text-card-foreground">{project.title}</CardTitle>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

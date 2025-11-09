"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-balance">
              I'm <span className="gradient-text">Madhav Paudel</span>
            </h1>

            <div className="mb-8">
              <p className="text-lg md:text-xl lg:text-2xl text-primary font-semibold mb-2">Principal Engineer</p>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">Software Developer & Team Leader</p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl text-pretty leading-relaxed mx-auto lg:mx-0">
              Passionate about creating innovative solutions and leading engineering teams to build scalable, efficient
              software systems that make a real impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToAbout}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 pulse-on-hover w-full sm:w-auto"
              >
                Explore My Work
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="icon"
                className="card-hover border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                asChild
              >
                <a href="https://linkedin.com/in/poudelmadhav143" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="card-hover border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                asChild
              >
                <a href="https://github.com/poudelmadhav" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="card-hover border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                asChild
              >
                <a href="mailto:contact@poudelmadhav.com.np">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="float-animation">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30 scale-110"></div>
                <img
                  src="/software-engineer-headshot.png"
                  alt="Madhav Paudel"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-background shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToAbout}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}

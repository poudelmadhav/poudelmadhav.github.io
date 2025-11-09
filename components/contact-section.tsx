"use client"

import { useEffect, useRef, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Linkedin, Github, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [state, handleSubmit] = useForm("xkgkwqaw")

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
    <section id="contact" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`section-fade-in ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <a
                      href="mailto:contact@poudelmadhav.com.np"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@poudelmadhav.com.np
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-muted-foreground">Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="font-medium text-card-foreground mb-4">Connect with me</p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="https://linkedin.com/in/poudelmadhav143"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="https://github.com/poudelmadhav"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub Profile"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {state.succeeded ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <div className="rounded-full bg-green-500/10 p-4">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground text-center">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                        Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        className="bg-background border-border focus:border-primary transition-colors"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or idea..."
                        required
                        rows={5}
                        className="bg-background border-border focus:border-primary transition-colors resize-none"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <Button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-lg transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {state.submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="animate-spin">⏳</span> Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message <span>→</span>
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

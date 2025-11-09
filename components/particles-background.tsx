"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    particlesJS: any
  }
}

export default function ParticlesBackground() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
    script.async = true

    script.onload = () => {
      setTimeout(() => {
        if (window.particlesJS && document.getElementById("particles-js")) {
          try {
            window.particlesJS("particles-js", {
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: ["#3b82f6", "#06b6d4", "#8b5cf6"],
                },
                shape: {
                  type: "circle",
                },
                opacity: {
                  value: 0.9,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.5,
                    sync: false,
                  },
                },
                size: {
                  value: 6,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 2,
                    size_min: 2,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#3b82f6",
                  opacity: 0.8,
                  width: 2,
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab",
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 200,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  repulse: {
                    distance: 250,
                    duration: 1,
                  },
                },
              },
              retina_detect: true,
            })
            console.log("[v0] Particles.js initialized successfully")
          } catch (error) {
            console.error("[v0] Error initializing particles:", error)
          }
        } else {
          console.error("[v0] Particles.js not loaded or container not found")
        }
      }, 100)
    }

    script.onerror = () => {
      console.error("[v0] Failed to load particles.js from CDN")
    }

    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div
      id="particles-js"
      className="fixed inset-0 z-[1]"
      style={{
        background: "transparent",
        pointerEvents: "auto",
        width: "100vw",
        height: "100vh",
      }}
    />
  )
}

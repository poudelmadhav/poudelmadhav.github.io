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
                  value: 40,
                  density: {
                    enable: true,
                    value_area: 1000,
                  },
                },
                color: {
                  value: ["#3b82f6", "#06b6d4", "#8b5cf6"],
                },
                shape: {
                  type: "circle",
                },
                opacity: {
                  value: 0.3,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    size_min: 1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 120,
                  color: "#3b82f6",
                  opacity: 0.2,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: true,
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
                    mode: "bubble",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 150,
                    line_linked: {
                      opacity: 0.6,
                    },
                  },
                  bubble: {
                    distance: 200,
                    size: 6,
                    duration: 2,
                    opacity: 0.5,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
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

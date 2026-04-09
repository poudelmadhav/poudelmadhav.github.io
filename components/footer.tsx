"use client"

import { useState, useEffect } from "react"

export default function Footer() {
  const [year, setYear] = useState<string>("")

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="w-full bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">© {year} Madhav Paudel. All rights reserved.</p>
      </div>
    </footer>
  )
}

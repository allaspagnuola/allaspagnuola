"use client"

import { useEffect, useState } from "react"
import { ArrowDown, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "I create innovative websites, and drive AI innovation to make a real-world impact."

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 80)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          Hello, I'm <span className="text-primary">Chloe</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground min-h-[2.5rem]">
          {typedText}
          <span className="animate-pulse">|</span>
        </h2>
        <span className="text-muted-foreground max-w-xl mx-auto">
          <p>UI/UX Designer and Web Developer creating clean, intuitive digital experiences.</p> 
          <p>Skilled at grasping people's needs and delivering user-friendly solutions.</p>
          <p>Passionate about tech and always eager to learn.</p> 
          <p>A thinker who enjoys philosophy and travel.</p> 
        </span>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" onClick={() => handleScroll("projects")}>
            View My Work
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Check Resume
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={() => handleScroll("contact")}>
            Get In Touch
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <button
          onClick={() => handleScroll("about")}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll Down</span>
        </button>
      </div>
    </section>
  )
}


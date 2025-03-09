import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui-unused/card"
import { Code, Figma, Globe, Palette } from "lucide-react"

export default function About() {
  const skills = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Development",
      description: "Building responsive and performant web applications with modern frameworks and technologies.",
    },
    {
      icon: <Figma className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and meaningful experiences that solve real problems.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Visual Design",
      description: "Crafting visually appealing designs with attention to typography, color, and composition.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Strategy",
      description: "Developing comprehensive web strategies that align with business goals and user needs.",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Profile"
                width={500}
                height={500}
                className="rounded-2xl object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-2xl border border-primary/20 -m-3 z-[-1]"></div>
            </div>
          </div>
          <div className="w-full md:w-3/5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="text-muted-foreground">
              I'm a passionate web developer and UI/UX designer with a focus on creating clean, user-friendly, and
              accessible digital experiences. With a background in both design and development, I bridge the gap between
              aesthetics and functionality.
            </p>
            <p className="text-muted-foreground">
              My approach combines minimalist design principles with interactive elements to create engaging user
              experiences. I believe in the power of simplicity and thoughtful design to solve complex problems.
            </p>
            <div className="pt-4">
              <Button asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12">My Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{skill.title}</h4>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


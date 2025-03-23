import Image from "next/image"
import { Button } from "@/components/ui/button"
import {  FaReact, FaFigma, FaDocker, FaGithub, FaPython, FaJava } from "react-icons/fa"
import { SiAuth0, SiVercel, SiNextdotjs, SiMongodb, SiExpress, SiMysql, SiTypescript, SiJavascript } from "react-icons/si"
import SkillCarousel from "./ui/skillCarousel"


export default function About() {
  const skills = [
    { icon: <SiJavascript className="h-6 w-6" />, title: "JavaScript" },
    { icon: <SiTypescript className="h-6 w-6" />, title: "TypeScript" },
    { icon: <FaPython className="h-6 w-6" />, title: "Python" },
    { icon: <FaJava className="h-6 w-6" />, title: "Java" },
    { icon: <SiMysql className="h-6 w-6" />, title: "SQL" },
    { icon: <FaReact className="h-6 w-6" />, title: "React" },
    { icon: <SiExpress className="h-6 w-6" />, title: "Express" },
    { icon: <FaFigma className="h-6 w-6" />, title: "Figma" },
    { icon: <SiNextdotjs className="h-6 w-6" />, title: "Next.js" },
    { icon: <SiAuth0 className="h-6 w-6" />, title: "Auth0" },
    { icon: <FaDocker className="h-6 w-6" />, title: "Docker" },
    { icon: <SiVercel className="h-6 w-6" />, title: "Vercel" },
    { icon: <SiMongodb className="h-6 w-6" />, title: "MongoDB" },
    { icon: <FaGithub className="h-6 w-6" />, title: "Git" }
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

        <SkillCarousel skills={skills} /> 
        
      </div>
    </section>
  )
}


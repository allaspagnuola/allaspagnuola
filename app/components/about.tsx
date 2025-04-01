import Image from "next/image"
import { Button } from "@/components/ui/button"
import {  FaReact, FaFigma, FaDocker, FaGithub, FaPython, FaJava } from "react-icons/fa"
import { SiAuth0, SiVercel, SiNextdotjs, SiMongodb, SiExpress, SiMysql, SiTypescript, SiJavascript } from "react-icons/si"
import SkillCarousel from "./ui/skillCarousel"
import portfolioImage from "../../public/portfolio.jpg"


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
                src={portfolioImage}
                alt="Profile"
                loading="lazy"
                width={500}
                height={500}
                className="rounded-2xl object-cover"
              />
              <div className="absolute inset-0 rounded-2xl border border-primary/20 -m-3 z-[-1]"></div>
            </div>
          </div>
          <div className="w-full md:w-3/5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="text-muted-foreground">
            I’m a curious and tech-driven Computer Science graduate from The University of Melbourne, where I earned High Distinction and multiple scholarships. Alongside my major, I studied finance and mathematics, drawn to problem-solving and analytics. I love exploring AI tools and technology, always looking for ways to apply them to real life. Outside of tech, you’ll find me reading Albert Camus, traveling, or getting lost in Japanese anime—all of which fuel my creativity and curiosity.
            </p>
            <p className="text-muted-foreground">
            On the coding side, I specialize in full-stack development with React, Next.js, and Node.js, building scalable and user-friendly web apps. I’ve led Agile Scrum teams, ensuring smooth collaboration between developers and non-tech users. My passion lies in AI, automation, and emerging tech, always experimenting with new tools to push boundaries and create impactful solutions.
            </p>
            <div className="pt-4">
              <Button asChild>
                <a href="/Resume_ChloeZhou.pdf" target="_blank" rel="noopener noreferrer">
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


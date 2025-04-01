"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import packingListImage from "../../public/Packing_list.png"
import recipeFinderImage from "../../public/Recipe_finder.png"
import mobilePrototypeImage from "../../public/Mobile_prototype.png"
import webPrototypeImage from "../../public/Web_prototype.png"
import lmsImage from "../../public/LMS.png"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "LMS Website",
      description: "A learning management system designed for psychologist training.",
      image: lmsImage,
      tags: ["Web Development", "UI/UX", "React.js", "Node.js"],
      category: "development",
    },
    {
      id: 2,
      title: "Packing List",
      description: "A packing list app with CRUD, filtering, and sorting features.",
      image: packingListImage,
      tags: ["Web Development", "UI/UX", "React.js", "Vercel"],
      category: "development",
      demoUrl: "https://packing-list-client-nsdpist7j-anthonys-projects-c51cd965.vercel.app/",
      githubUrl: "https://github.com/any11-development-center/packing-list",
    },
    {
      id: 3,
      title: "Recipe Finder",
      description: "A fridge inventory app that suggests recipes based on available ingredients, with CRUD and user accounts.",
      image: recipeFinderImage,
      tags: ["Web Development", "Javascript", "Python", "Flask"],
      category: "development",
    },
    {
      id: 4,
      title: "Mobile Prototype",
      description: "A university-focused social media prototype.",
      image: mobilePrototypeImage,
      tags: ["UI/UX", "Design System", "Mobile", "Figma"],
      category: "design",
    },
    {
      id: 5,
      title: "Web Prototype",
      description: "A web prototype for a learning management system.",
      image: webPrototypeImage,
      tags: ["UI/UX", "Design System", "Web", "Figma"],
      category: "design",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            A selection of my recent work spanning web development and UI/UX design.
          </p>
        </div>


        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {["all", "development", "design"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="capitalize"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-background rounded-lg overflow-hidden shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="font-normal text-xs px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="group">
              View More on GitHub
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}


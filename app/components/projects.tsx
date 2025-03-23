"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui-unused/badge"
import { motion, AnimatePresence } from "framer-motion"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A modern e-commerce platform with a focus on user experience and performance.",
      image: "/Portfolio/placeholder.svg?height=600&width=800",
      tags: ["Web Development", "UI/UX", "E-commerce"],
      category: "development",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "A clean and intuitive banking application designed for ease of use and security.",
      image: "/Portfolio/placeholder.svg?height=600&width=800",
      tags: ["UI/UX", "Mobile", "Fintech"],
      category: "design",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creative professionals.",
      image: "/Portfolio/placeholder.svg?height=600&width=800",
      tags: ["Web Development", "Template", "Open Source"],
      category: "development",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Travel App UI Kit",
      description: "A comprehensive UI kit for travel and booking applications.",
      image: "/Portfolio/placeholder.svg?height=600&width=800",
      tags: ["UI/UX", "Design System", "Mobile"],
      category: "design",
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/Portfolio/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background text-foreground hover:bg-primary hover:text-primary-foreground p-2 rounded-full transition-colors"
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredId === project.id ? 1 : 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">View Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background text-foreground hover:bg-primary hover:text-primary-foreground p-2 rounded-full transition-colors"
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredId === project.id ? 1 : 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">View Code</span>
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-1 mb-2"
                  >
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="font-normal text-xs px-2 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </motion.div>

                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </div>

                {/* Bottom Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

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


"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Briefcase } from "lucide-react"

export default function Timeline() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  // Combine education and experience into a single timeline, sorted by date
  const timelineEvents = [
    {
      id: 1,
      title: "Senior UI/UX Designer",
      organization: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Lead the design of digital products from concept to launch, collaborating with cross-functional teams to deliver exceptional user experiences.",
      detailedDescription: [
        "Led a team of 4 designers in creating user-centered design solutions",
        "Implemented design system that reduced design inconsistencies by 60%",
        "Conducted user research and usability testing with over 500 participants",
        "Increased user engagement by 40% through redesigned user flows",
      ],
      type: "experience",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "Master of Design",
      organization: "Design University",
      period: "2018 - 2020",
      description: "Specialized in User Experience Design with a focus on digital interfaces and interactive systems.",
      detailedDescription: [
        "Thesis: 'The Impact of Microinteractions on User Engagement'",
        "GPA: 3.95/4.0",
        "Led 3 award-winning design projects",
        "Published research paper on UI animation patterns",
      ],
      type: "education",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Web Developer",
      organization: "Creative Agency",
      period: "2019 - 2021",
      description:
        "Developed responsive websites and web applications for clients across various industries, focusing on performance and accessibility.",
      detailedDescription: [
        "Built 20+ responsive websites using modern web technologies",
        "Reduced load times by 60% through optimization techniques",
        "Implemented CI/CD pipelines reducing deployment time by 75%",
        "Mentored 3 junior developers",
      ],
      type: "experience",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      id: 4,
      title: "Bachelor of Computer Science",
      organization: "Tech University",
      period: "2014 - 2018",
      description: "Studied software development, algorithms, and web technologies with a minor in graphic design.",
      detailedDescription: [
        "Dean's List all semesters",
        "Led the Web Development Club",
        "Completed 3 internships",
        "Developed an award-winning campus navigation app",
      ],
      type: "education",
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ].sort((a, b) => {
    const aYear = Number.parseInt(a.period.split(" - ")[1] === "Present" ? "2024" : a.period.split(" - ")[1])
    const bYear = Number.parseInt(b.period.split(" - ")[1] === "Present" ? "2024" : b.period.split(" - ")[1])
    return bYear - aYear
  })

  return (
    <section id="timeline" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">My Journey</h2>
          <p className="text-muted-foreground">A chronological timeline of my education and professional experience.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                onHoverStart={() => setHoveredId(event.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <TimelineItem {...event} isLeft={index % 2 === 0} isHovered={hoveredId === event.id} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  title,
  organization,
  period,
  description,
  detailedDescription,
  type,
  icon,
  isLeft,
  isHovered,
}) {
  return (
    <div className={`flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      {/* Timeline Dot */}
      <motion.div
        className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full z-10 shadow-md transition-colors duration-300 flex items-center justify-center ${
          isHovered ? "bg-primary scale-150" : "bg-background border-2 border-primary"
        }`}
        animate={{ scale: isHovered ? 1.5 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-primary-foreground"
        >
          {icon}
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className={`w-5/12 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}
        animate={{
          scale: isHovered ? 1.05 : 1,
          zIndex: isHovered ? 20 : 10,
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`
            bg-card border border-border shadow-sm hover:shadow-lg transition-all p-6 rounded-lg relative 
            ${isLeft ? "rounded-tr-none" : "rounded-tl-none"}
          `}
        >
          {/* Arrow */}
          <div
            className={`
              absolute top-6 
              ${isLeft ? "right-[-10px]" : "left-[-10px]"} 
              w-0 h-0 border-solid 
              ${isLeft ? "border-l-[10px]" : "border-r-[10px]"} 
              border-y-[10px] border-y-transparent 
              ${isLeft ? "border-l-border" : "border-r-border"}
            `}
          />

          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {period}
            </span>
            <span
              className={`inline-block px-2 py-1 text-xs rounded-full ${
                type === "education" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
              }`}
            >
              {type}
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <h4 className="text-primary font-medium mb-3">{organization}</h4>
          <p className="text-muted-foreground text-sm">{description}</p>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden"
              >
                <ul className={`space-y-2 text-sm ${isLeft ? "text-right" : "text-left"}`}>
                  {detailedDescription.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-muted-foreground"
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Empty space for the other side */}
      <div className="w-5/12"></div>
    </div>
  )
}


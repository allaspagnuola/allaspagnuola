"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Briefcase } from "lucide-react"

// Create a custom event for programmatic scrolling
const SCROLL_EVENT_NAME = "programmaticScroll"

// Export this function to be used by other components
export function triggerProgrammaticScroll() {
  // Create and dispatch a custom event
  const event = new CustomEvent(SCROLL_EVENT_NAME)
  window.dispatchEvent(event)
}

export default function Timeline() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isProgrammaticScrolling, setIsProgrammaticScrolling] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Listen for our custom programmatic scroll event
    const handleProgrammaticScroll = () => {
      setIsProgrammaticScrolling(true)

      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Reset after scrolling animation is likely complete
      scrollTimeoutRef.current = setTimeout(() => {
        setIsProgrammaticScrolling(false)
      }, 1000) // Adjust timing based on your scroll animation duration
    }

    window.addEventListener(SCROLL_EVENT_NAME, handleProgrammaticScroll)

    return () => {
      window.removeEventListener(SCROLL_EVENT_NAME, handleProgrammaticScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  // Only set hovered ID if not during programmatic scrolling
  const handleHoverStart = (id: number) => {
    if (!isProgrammaticScrolling) {
      setHoveredId(id)
    }
  }

  // Combine education and experience into a single timeline, sorted by date
  const timelineEvents = [
    {
      id: 1,
      title: "System Administrator",
      organization: "Bapcor Limited",
      period: "Mar 2025 - Present",
      description:
        "Provided IT support to over 5,500 staff, managing domain migration and maintaining enterprise systems.",
      detailedDescription: [
        "Resolved complex tickets related to authentication and configuration",
        "Migrated email systems with minimal user disruption",
        "Documented workflows to enhance future migration processes",
        "Worked across domains with multiple teams to ensure system stability"
      ],
      type: "experience",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Full Stack Developer",
      organization: "Virtual Adults (Deakin University)",
      period: "Jun 2024 - Nov 2024",
      description:
        "Led development of an AI-powered psychology learning platform using Agile and full-stack tech.",
      detailedDescription: [
        "Delivered early prototype within days to guide project direction",
        "Implemented AI chat features (text & voice) using OpenAI API",
        "Applied secure authentication with Auth0 and JWT",
        "Reduced AI cost by 70% through optimization"
      ],
      type: "experience",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Associate Strategy Consultant Intern",
      organization: "Efinity Consulting Group",
      period: "Aug 2023 – Nov 2023",
      description:
        "Supported strategic expansion planning through market analysis and executive engagement.",
      detailedDescription: [
        "Conducted market research and industry analysis",
        "Delivered insights that influenced client strategy",
        "Built rapport with stakeholders to guide recommendations"
      ],
      type: "experience",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      id: 4,
      title: "Bachelor of Science (Computing & Software Systems)",
      organization: "University of Melbourne",
      period: "Feb 2022 – Nov 2024",
      description:
        "Graduated with High Distinction and multiple academic scholarships.",
      detailedDescription: [
        "Melbourne Global Scholars Award 2024",
        "Bachelor of Commerce Global Scholarship (Top 50 Students)",
        "Melbourne International Undergraduate Scholarship (Top 5% International Students)",
        "Peer Mentor, awarded for People Leadership",
      ],
      type: "education",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      id: 5,
      title: "Contract Web Developer",
      organization: "Gr8 Building Service",
      period: "Feb 2023 – July 2023",
      description:
        "Managed end-to-end web development using WordPress and GoDaddy tools.",
      detailedDescription: [
        "Increased business performance by 20% through optimized site design",
        "Provided ongoing site maintenance",
        "Handled all hosting, registration, and deployment"
      ],
      type: "experience",
      icon: <Briefcase className="h-5 w-5" />
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
                onHoverStart={() => handleHoverStart(event.id)}
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


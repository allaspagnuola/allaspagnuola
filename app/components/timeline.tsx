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
        "• Achieved Top 5 teammate ranking by consistently resolving high-complexity tickets related to domain authentication and user access issues with high quality standards.",
        "• Proactively detected and escalated critical infrastructure and cybersecurity vulnerabilities during daily ticket resolution, supporting early intervention by the infrastructure team.",
        "• Created standardized migration documentation, improving team scalability and reducing onboarding time for new technicians.",
        "• Actively collaborated with cross-functional teams during the dynamic migration period by sharing real-time updates, aligning workflows, and proactively solving emerging issues to ensure smooth transitions."
      ],
      type: "experience",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Product Owner / Full Stack Developer",
      organization: "Virtual Adults (Deakin University)",
      period: "Jun 2024 - Nov 2024",
      description:
        "Led the end-to-end development of an AI-driven web platform for psychology training, combining product leadership and technical execution.",
      detailedDescription: [
        "• Delivered a high-quality prototype within days based on client-stated use cases, and led Agile Scrum processes to ensure clear communication, rapid iteration, and timely delivery aligned to evolving client needs",
        "• Reduced AI operation costs by 70% through proactive optimization, enabled real-time AI communication (text and voice), and achieved 99% user requirement alignment with a smooth final handover.",
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
        "Supported executives in crafting strategic business plans for client companies’ horizontal and vertical expansion through negotiation, problem-solving, and comprehensive market analysis.",
      detailedDescription: [
        "• Conducted in-depth industry/market analysis, culminating in an impactful research report that informed client decision-making.",
        "• Delivered customized marketing strategies, earning commendation from executives and clients for actionable insights.",
        "• Demonstrated adaptability by identifying growth opportunities and aligning recommendations with client objectives, driving measurable business outcomes."
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
        "• Melbourne Global Scholars Award 2024",
        "• Bachelor of Commerce Global Scholarship (Top 50 Students)",
        "• Melbourne International Undergraduate Scholarship (Top 5% International Students)",
        "• Peer Mentor, awarded for People Leadership",
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
        "Managed the end-to-end website development lifecycle using GoDaddy and WordPress, including domain registration, implementation, and maintenance.",
      detailedDescription: [
        "• Designed and deployed a user-friendly, optimized website that contributed to a 20% increase in company performance and profits within six months.",
        "• Provided ongoing website maintenance and updates, ensuring optimal functionality and alignment with business goals.",
      ],
      type: "experience",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      id: 6,
      title: "Peer Mentor",
      organization: "University of Melbourne",
      period: "Feb 2023 – Jun 2023",

      detailedDescription: [
        "• Demonstrated leadership skills by organizing and spearheading various activities and events to support a group of students.",
        "• Encourage and motivate new students to succeed in their university lives."
      ],
      type: "experience",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      id: 7,
      title: "Business Development Coordinator",
      organization: "AIESEC Australia Ltd",
      period: "Jan 2022 – Jun 2022",
      description:
        "Business Development Coordinator at the University of Melbourne Branch of the world largest youth-run organisation.",
      detailedDescription: [
        "• Exhibited strong customer service skills by effectively utilizing B2B sales techniques, including direct mail and cold calling, to engage and convert clients.",
        "• Demonstrated interpersonal and organizational strengths through direct meetings with industry leaders and management of strategic partnerships, fostering long-term collaboration and trust."
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


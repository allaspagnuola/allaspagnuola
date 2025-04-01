"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"

type Skill = {
  icon: React.ReactNode,
  title: string,
}

type SkillSet = Skill[]

const SkillsCarousel: React.FC<{ skills: SkillSet }> = ({ skills }) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [mousePosition, setMousePosition] = useState(0)
  const [isTouching, setIsTouching] = useState(false)
  const [touchStartX, setTouchStartX] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Handle mouse movement for direction-based scrolling
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return

    const { left, width } = carouselRef.current.getBoundingClientRect()
    const mouseX = e.clientX - left
    const position = mouseX / width
    setMousePosition(position)
  }

  // Handle touch events for mobile scrolling
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsTouching(true)
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isTouching || !carouselRef.current) return

    const touchDelta = touchStartX - e.touches[0].clientX
    carouselRef.current.scrollLeft += touchDelta / 5
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    setIsTouching(false)
  }

  useEffect(() => {
    let animationId: number
    let lastTimestamp = 0
    const scrollSpeed = 0.1 // pixels/ms
  
    const autoScroll = (timestamp: number) => {
      if (!carouselRef.current) return
  
      if (lastTimestamp) {
        const delta = timestamp - lastTimestamp
  
        if (isMouseOver && !isTouching) {
          const direction = mousePosition > 0.5 ? 1 : -1
          const intensity = Math.abs(mousePosition - 0.5) * 1.5
          carouselRef.current.scrollLeft += direction * intensity * scrollSpeed * delta
        } else if (!isTouching) {
          carouselRef.current.scrollLeft += scrollSpeed * delta
        }
  
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
  
        // If scrolled near the end, reset seamlessly
        if (scrollLeft >= scrollWidth - clientWidth) {
          carouselRef.current.scrollLeft = 0
        }
  
        setScrollPosition(carouselRef.current.scrollLeft)
      }
  
      lastTimestamp = timestamp
      animationId = requestAnimationFrame(autoScroll)
    }
  
    animationId = requestAnimationFrame(autoScroll)
  
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isMouseOver, mousePosition, isTouching])
  

  return (
    <div className="w-full overflow-hidden py-8">
      <h3 className="text-2xl font-bold text-center mb-12">My Expertise</h3>
      <div
        ref={carouselRef}
        className="flex overflow-x-hidden gap-6 py-4 px-2"
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Duplicate skills for infinite scrolling effect */}
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="p-6 space-y-4 bg-white rounded-lg hover:bg-gray-100">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center mx-auto justify-center text-primary">
              {skill.icon}
            </div>
            <h4 className="font-semibold text-center">{skill.title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SkillsCarousel;


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = ["about", "projects", "timeline", "contact"]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Chloe.Z
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm uppercase tracking-wider hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(item)
                if (element) {
                  const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  })
                  setIsMenuOpen(false)
                }
              }}
            >
              {item}
            </a>
          ))}
          <Button variant="outline" size="sm" className="ml-4" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 uppercase text-sm">
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md md:hidden">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="px-6 py-3 text-sm uppercase tracking-wider hover:bg-muted transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById(item)
                    if (element) {
                      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100
                      window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth",
                      })
                      setIsMenuOpen(false)
                    }
                  }}
                >
                  {item}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm uppercase tracking-wider hover:bg-muted transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}


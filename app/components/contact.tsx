"use client"

import Image from "next/image"
import { Mail, MapPin, Phone, Linkedin, Github, Twitter, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "chloe.siyi.zhou@gmail.com",
      link: "mailto:chloe.siyi.zhou@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "0466-177-972",
      link: "tel:+61466177972",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Melbourne, Australia",
      link: null,
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/siyi-chloe-zhou/",
      color: "hover:bg-[#0077B5] hover:border-[#0077B5]",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/allaspagnuola",
      color: "hover:bg-[#333] hover:border-[#333]",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8">
          {/* LinkedIn Profile Preview */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/10">
                  <Image
                    src="/small_portfolio.jpeg?height=200&width=200"
                    alt="Profile"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">Chloe Zhou</h3>
                  <p className="text-primary mb-1">Software Engineer</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Creating digital experiences that combine beauty with functionality
                  </p>
                  <Button asChild>
                    <a
                      href="https://www.linkedin.com/in/siyi-chloe-zhou/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-4 w-4" />
                      Connect on LinkedIn
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </Button>
                </div>
                <div className="hidden md:block border-l border-border h-24" />
                <div className="text-center md:text-left">
                  <div className="text-sm text-muted-foreground mb-2">LinkedIn Stats</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold">250+</div>
                      <div className="text-muted-foreground">Connections</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                        {item.icon}
                      </div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`h-12 w-12 rounded-full border border-border bg-background flex items-center justify-center hover:text-white transition-all duration-300 ${social.color}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


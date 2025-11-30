"use client"

import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Open to Work
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Hi, I'm <span className="text-primary">Ohm Patel</span>
              </h1>

              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">Full-Stack Web Developer</h2>

              <p className="text-muted-foreground leading-relaxed max-w-lg text-pretty">
                I build accessible, pixel-perfect digital experiences for the web. Specializing in creating dynamic,
                user-focused applications with modern technologies.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
                  <a href="ohmpatel_resume.pdf" download>
                    <Download size={18} />
                      Download Resume
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-secondary gap-2 bg-transparent"
                  asChild
                >
                  <a href="#projects">
                    View Projects
                    <ArrowDown size={18} />
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-6">
                <a
                  href="https://github.com/ohmp1015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary"
                  aria-label="GitHub Profile"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ohm-patel-3b1636350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="mailto:ohmp1015@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary"
                  aria-label="Email Me"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1">
                <div className="w-full h-full rounded-full bg-card overflow-hidden border-2 border-primary/30">
                  <img
                    src="/ohmPatel.JPG"
                    alt="Ohm Patel - Web Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

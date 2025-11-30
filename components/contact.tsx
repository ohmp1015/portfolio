"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MessageSquare, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Handle form submission - you can integrate with email service
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my
            best to get back to you!
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Your Name"
                className="pl-10 bg-secondary/30 border-border focus:border-primary h-12"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="email"
                placeholder="Your Email"
                className="pl-10 bg-secondary/30 border-border focus:border-primary h-12"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-muted-foreground" size={18} />
              <Textarea
                placeholder="Your Message"
                className="pl-10 bg-secondary/30 border-border focus:border-primary min-h-[150px] resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              <Send size={18} />
              Send Message
            </Button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Or reach out directly:</p>
            <a href="mailto:ohmp1015@gmail.com" className="text-primary hover:underline font-medium">
               ohmp1015@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

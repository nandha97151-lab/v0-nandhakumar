'use client'

import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative snap-section py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent rounded-full mix-blend-screen opacity-10 animate-pulse"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary rounded-full mix-blend-screen opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-4">
                Let's Create
                <span className="gradient-text block">Something Great</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always excited to collaborate, learn, and discuss AI, data science, and innovative solutions. Whether you have a project in mind or just want to chat, feel free to reach out!
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
              <div className="space-y-3">
                <a href="mailto:nandha97151@gmail.com" className="flex items-center gap-3 group">
                  <div className="p-3 glass-effect rounded-lg group-hover:bg-white/20 transition-all">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium group-hover:text-accent transition-colors">nandha97151@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+919715177130" className="flex items-center gap-3 group">
                  <div className="p-3 glass-effect rounded-lg group-hover:bg-white/20 transition-all">
                    <Linkedin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium group-hover:text-accent transition-colors">+91 9715177130</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Social Links */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-xl space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Connect with Me</h3>
              <p className="text-muted-foreground">Follow my journey and stay updated with my latest projects and insights.</p>

              <div className="space-y-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 glass-effect rounded-lg group hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-accent" />
                    <span className="font-medium text-foreground">GitHub</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://www.linkedin.com/in/nandha-kumar-41b7ba380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 glass-effect rounded-lg group hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-accent" />
                    <span className="font-medium text-foreground">LinkedIn</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              <div className="border-t border-white/10 pt-6">
                <a
                  href="mailto:nandha97151@gmail.com"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-purple-500 text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/40 transition-all"
                >
                  Send Me an Email
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

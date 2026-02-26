'use client'

import { Code2, Cpu, Database, Zap } from 'lucide-react'

export default function About() {
  const skills = [
    { name: 'Python', icon: Code2 },
    { name: 'Machine Learning', icon: Cpu },
    { name: 'Data Analysis', icon: Database },
    { name: 'Statistics', icon: Zap },
  ]

  return (
    <section id="about" className="relative snap-section py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Me</span>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-4">
                Passionate about
                <span className="gradient-text block">AI & Innovation</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a first-year student at KPRIET pursuing a degree in Artificial Intelligence and Data Science. My journey into tech began with a curiosity about how data shapes our world and decisions.
              </p>
              <p>
                I'm passionate about exploring machine learning, data analytics, and building intelligent solutions. Every day is an opportunity to learn something new and push the boundaries of what's possible with AI.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Core Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div key={skill.name} className="glass-effect p-4 rounded-lg flex items-center gap-3 group hover:bg-white/20 transition-all">
                      <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                      <span className="text-foreground font-medium">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Education */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="glass-effect p-8 rounded-xl space-y-6">
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Education</h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-foreground">B.Tech AI & Data Science</p>
                  <p className="text-muted-foreground">KPRIET, Karaikudi</p>
                  <p className="text-sm text-accent">2025 - 2029</p>
                </div>
              </div>

              <div className="border-b border-white/10 pb-6">
                <h3 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Focus Areas</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Machine Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Deep Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Data Visualization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    NLP & Computer Vision
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-accent font-semibold mb-3">Location</h3>
                <p className="text-foreground">Aviashi-Coimbatore Road, Arasur, Uthupalayam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

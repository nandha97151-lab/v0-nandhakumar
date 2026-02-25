'use client'

import { CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Student - AI & Data Science',
      company: 'KPRIET, Karaikudi',
      period: '2024 - Present',
      description: 'Currently pursuing B.Tech in Artificial Intelligence & Data Science. Building strong foundation in machine learning, statistics, and data analysis.',
      highlights: ['Machine Learning', 'Data Analysis', 'Python', 'Statistics'],
    },
    {
      title: 'Relevant Coursework',
      company: 'KPRIET',
      period: 'Ongoing',
      description: 'Engaging with foundational courses in AI, mathematics for data science, databases, and programming. Participating in practical labs and hands-on projects.',
      highlights: ['Algorithms', 'Database Management', 'Mathematics', 'Programming'],
    },
    {
      title: 'Self-Learning & Projects',
      company: 'Personal Development',
      period: '2024 - Present',
      description: 'Actively learning through online courses, tutorials, and building personal projects. Exploring areas like neural networks and AI applications.',
      highlights: ['Online Learning', 'Project Building', 'AI Exploration', 'Community'],
    },
  ]

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Experience</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-4">
            My Journey
            <span className="gradient-text block">So Far</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative glass-effect p-8 rounded-xl hover:bg-white/20 transition-all duration-300">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent to-transparent rounded-l-xl group-hover:w-1.5 transition-all"></div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1 space-y-2">
                  <p className="text-accent font-semibold text-sm uppercase tracking-wider">{exp.period}</p>
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-muted-foreground font-medium">{exp.company}</p>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <p className="text-foreground leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((skill) => (
                      <span key={skill} className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 text-accent rounded-full text-sm font-medium">
                        <CheckCircle2 className="w-3 h-3" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#',
      github: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team workspaces, and progress tracking.',
      tags: ['Next.js', 'TypeScript', 'WebSocket', 'Tailwind'],
      link: '#',
      github: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive analytics dashboard for business intelligence with real-time data visualization and custom reports.',
      tags: ['React', 'D3.js', 'GraphQL', 'AWS'],
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media App',
      description: 'Social networking platform with user profiles, messaging, and content feed using modern web technologies.',
      tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'Vercel'],
      link: '#',
      github: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-border bg-background rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-foreground mb-4 leading-relaxed text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                >
                  Live Demo
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                >
                  Code
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

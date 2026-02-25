'use client'

import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Data Analysis Project',
      description: 'Exploratory data analysis on a real-world dataset, including data cleaning, visualization, and statistical analysis. Generated insights and created visualizations using Python.',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Statistics'],
      link: '#',
      github: '#',
    },
    {
      title: 'Machine Learning Model',
      description: 'Implemented a classification model using scikit-learn to predict outcomes from structured data. Included feature engineering, model evaluation, and hyperparameter tuning.',
      tags: ['Python', 'Scikit-learn', 'ML', 'NumPy'],
      link: '#',
      github: '#',
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Created interactive visualizations of datasets using Python libraries. Focused on presenting complex data in an understandable and visually appealing manner.',
      tags: ['Python', 'Matplotlib', 'Seaborn', 'Data Viz'],
      link: '#',
      github: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Built this professional portfolio website to showcase skills, projects, and experience. Demonstrates front-end development capabilities and modern design aesthetic.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      link: '#',
      github: '#',
    },
  ]

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-4">
            Featured
            <span className="gradient-text block">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative glass-effect rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-purple-500 group-hover:h-1.5 transition-all"></div>

              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 text-accent text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-accent hover:text-pink-400 transition-colors font-medium group/link"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-accent hover:text-pink-400 transition-colors font-medium group/link"
                  >
                    GitHub
                    <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

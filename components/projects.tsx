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
      description: 'Built this professional portfolio website to showcase skills, projects, and experience. Demonstrates front-end development capabilities and design aesthetic.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
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

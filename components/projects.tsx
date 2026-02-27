'use client'

import { ExternalLink, Github, Plus, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  github: string
  image?: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([
    {
      title: 'Data Analysis Project',
      description: 'Exploratory data analysis on a real-world dataset, including data cleaning, visualization, and statistical analysis. Generated insights and created visualizations using Python.',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Statistics'],
      link: '#',
      github: '#',
      image: undefined,
    },
    {
      title: 'Machine Learning Model',
      description: 'Implemented a classification model using scikit-learn to predict outcomes from structured data. Included feature engineering, model evaluation, and hyperparameter tuning.',
      tags: ['Python', 'Scikit-learn', 'ML', 'NumPy'],
      link: '#',
      github: '#',
      image: undefined,
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Created interactive visualizations of datasets using Python libraries. Focused on presenting complex data in an understandable and visually appealing manner.',
      tags: ['Python', 'Matplotlib', 'Seaborn', 'Data Viz'],
      link: '#',
      github: '#',
      image: undefined,
    },
    {
      title: 'Portfolio Website',
      description: 'Built this professional portfolio website to showcase skills, projects, and experience. Demonstrates front-end development capabilities and modern design aesthetic.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      link: '#',
      github: '#',
      image: undefined,
    },
  ])

  const handleImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const updatedProjects = [...projects]
        updatedProjects[index].image = reader.result as string
        setProjects(updatedProjects)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = (index: number) => {
    const updatedProjects = [...projects]
    updatedProjects[index].image = undefined
    setProjects(updatedProjects)
  }

  return (
    <section id="projects" className="relative snap-section py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
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
              className="group relative glass-effect rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 flex flex-col"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-purple-500 group-hover:h-1.5 transition-all z-10"></div>

              {/* Image Section */}
              <div className="relative w-full h-48 bg-white/5 overflow-hidden group/image">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 p-1.5 bg-destructive text-destructive-foreground rounded-lg hover:opacity-90 transition-opacity z-20"
                      title="Remove image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <label className="w-full h-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors group/upload">
                    <div className="flex flex-col items-center gap-2">
                      <Plus className="w-8 h-8 text-accent group-hover/upload:scale-110 transition-transform" />
                      <span className="text-xs text-muted-foreground font-medium">Add Image</span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(index, e)}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              <div className="p-8 space-y-6 flex-1 flex flex-col">
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
                <div className="flex gap-3 pt-4 border-t border-white/10 mt-auto">
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

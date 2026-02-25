'use client'

export default function Experience() {
  const experiences = [
    {
      title: 'Student - AI & Data Science',
      company: 'KPRIET, Karaikudi',
      period: '2024 - Present',
      description: 'Currently pursuing B.Tech in Artificial Intelligence & Data Science. Building strong foundation in machine learning, statistics, and data analysis. Actively learning cutting-edge AI technologies.',
      highlights: ['Machine Learning', 'Data Analysis', 'Python', 'Statistics'],
    },
    {
      title: 'Relevant Coursework',
      company: 'KPRIET',
      period: 'Ongoing',
      description: 'Engaging with foundational courses in AI, mathematics for data science, databases, and programming. Participating in practical labs and hands-on projects to apply theoretical concepts.',
      highlights: ['Algorithms', 'Database Management', 'Mathematics', 'Programming'],
    },
    {
      title: 'Self-Learning & Projects',
      company: 'Personal Development',
      period: '2024 - Present',
      description: 'Actively learning through online courses, tutorials, and building personal projects. Exploring areas like neural networks, data visualization, and AI applications.',
      highlights: ['Online Learning', 'Project Building', 'AI Exploration', 'Community'],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-accent pl-6 pb-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                  <p className="text-lg text-accent">{exp.company}</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-2 py-1 bg-secondary text-sm text-foreground rounded"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

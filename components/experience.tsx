'use client'

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description: 'Leading frontend development for enterprise applications. Building scalable React components and optimizing application performance.',
      highlights: ['React & Next.js', 'Team Leadership', 'UI/UX Optimization'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2021 - 2023',
      description: 'Developed and maintained full-stack web applications using React and Node.js. Collaborated with cross-functional teams to deliver features.',
      highlights: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'Junior Developer',
      company: 'Startup Hub',
      period: '2019 - 2021',
      description: 'Contributed to building customer-facing web applications. Learned modern web development practices and best practices.',
      highlights: ['JavaScript', 'React', 'CSS', 'Git'],
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

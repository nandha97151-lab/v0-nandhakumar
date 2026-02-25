'use client'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-lg text-foreground leading-relaxed">
              I&apos;m a first-year student at KPRIET (Karaikudi Pandian Ramasamy Institute of Engineering and Technology) pursuing a degree in Artificial Intelligence and Data Science. I&apos;m passionate about exploring the intersection of AI, machine learning, and data analytics.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              My journey in tech began with a curiosity about how data shapes decision-making. I&apos;m enthusiastic about learning cutting-edge technologies, solving real-world problems with AI, and collaborating on innovative projects that make a difference.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'Data Analysis', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Statistics'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Education</h3>
              <div className="border-l-2 border-accent pl-4 py-2">
                <p className="font-semibold text-foreground">B.Tech in Artificial Intelligence & Data Science</p>
                <p className="text-muted-foreground">KPRIET, Karaikudi • 2024-2028</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-lg text-foreground leading-relaxed">
              I&apos;m a passionate full-stack developer with 5+ years of experience building web applications. I love creating intuitive user interfaces and robust backend systems that work seamlessly together.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              My journey started with a curiosity about how websites work, and it evolved into a career dedicated to solving complex problems with elegant code. I believe in continuous learning and staying updated with the latest technologies.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'GraphQL', 'AWS'].map((skill) => (
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
                <p className="font-semibold text-foreground">Bachelor of Science in Computer Science</p>
                <p className="text-muted-foreground">State University • 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

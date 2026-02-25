import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
            Hi, I&apos;m NANDHAKUMAR N
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            First-year student at KPRIET, pursuing Artificial Intelligence & Data Science. Passionate about machine learning, data analysis, and building intelligent solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:nandha97151@gmail.com"
              className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors flex items-center justify-center gap-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

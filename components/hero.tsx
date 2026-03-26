import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {

  return (
    <section className="relative snap-section flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent rounded-full mix-blend-screen opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary rounded-full mix-blend-screen opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-screen opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">AI & Data Science Explorer</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="block text-foreground">NANDHAKUMAR</span>
              <span className="gradient-text">N</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              First-year student at KPRIET exploring the frontiers of AI and Data Science. Building intelligent solutions, one line of code at a time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="#projects"
              className="group relative px-8 py-3 bg-gradient-to-r from-accent to-purple-500 text-accent-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <a
              href="mailto:nandha97151@gmail.com"
              className="px-8 py-3 glass-effect rounded-full font-semibold text-foreground hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get in Touch
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground pt-8 border-t border-white/10">
            <a href="tel:+919715177130" className="hover:text-foreground transition-colors">
              +91 9715177130
            </a>
            <span className="hidden sm:block">•</span>
            <a href="mailto:nandha97151@gmail.com" className="hover:text-foreground transition-colors">
              nandha97151@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

'use client'

import { ArrowRight, Sparkles, Plus, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [profileImage, setProfileImage] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setProfileImage(null)
  }

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
          {/* Profile Picture with Upload */}
          <div className="flex justify-center">
            <div className="relative group">
              {profileImage ? (
                <>
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent shadow-lg shadow-accent/50">
                    <Image
                      src={profileImage}
                      alt="Profile"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 p-2 bg-destructive text-destructive-foreground rounded-full hover:opacity-90 transition-opacity shadow-lg z-10"
                    title="Remove photo"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <label className="absolute bottom-0 right-0 p-2 bg-accent text-accent-foreground rounded-full hover:bg-purple-500 transition-all cursor-pointer shadow-lg">
                    <Plus className="w-4 h-4" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </>
              ) : (
                <label className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-accent/50 cursor-pointer hover:shadow-accent/70 transition-all group/upload">
                  <div className="flex flex-col items-center gap-1">
                    <Plus className="w-8 h-8 group-hover/upload:scale-110 transition-transform" />
                    <span className="text-xs font-semibold opacity-80">NK</span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

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

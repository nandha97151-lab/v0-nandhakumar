'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm opacity-80">
              © {currentYear} NANDHAKUMAR N. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">
                About
              </a>
              <a href="#projects" className="opacity-80 hover:opacity-100 transition-opacity">
                Projects
              </a>
              <a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

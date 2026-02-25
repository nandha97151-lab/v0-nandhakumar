'use client'

import { Plus, X } from 'lucide-react'
import { useState } from 'react'

interface Certification {
  id: number
  title: string
  issuer: string
  date: string
}

export default function Certifications() {
  const [certifications, setCertifications] = useState<Certification[]>([
    {
      id: 1,
      title: 'Python for Data Science',
      issuer: 'Coursera',
      date: '2024',
    },
    {
      id: 2,
      title: 'Machine Learning Basics',
      issuer: 'edX',
      date: '2024',
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ title: '', issuer: '', date: '' })

  const addCertification = () => {
    if (formData.title && formData.issuer && formData.date) {
      const newCert: Certification = {
        id: Math.max(...certifications.map(c => c.id), 0) + 1,
        ...formData,
      }
      setCertifications([...certifications, newCert])
      setFormData({ title: '', issuer: '', date: '' })
      setShowForm(false)
    }
  }

  const removeCertification = (id: number) => {
    setCertifications(certifications.filter(cert => cert.id !== id))
  }

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Certifications</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            aria-label="Add certification"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>

        {showForm && (
          <div className="mb-8 p-6 border border-border rounded-lg bg-background">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Certification Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="text"
                placeholder="Issuing Organization"
                value={formData.issuer}
                onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="text"
                placeholder="Year (e.g., 2024)"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <div className="flex gap-3">
                <button
                  onClick={addCertification}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Add Certification
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border border-border bg-background rounded-lg p-6 hover:shadow-lg transition-shadow relative"
            >
              <button
                onClick={() => removeCertification(cert.id)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-destructive transition-colors"
                aria-label="Remove certification"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-lg font-bold text-primary mb-2 pr-8">{cert.title}</h3>
              <p className="text-accent font-medium mb-2">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm">{cert.date}</p>
            </div>
          ))}
        </div>

        {certifications.length === 0 && !showForm && (
          <div className="text-center py-12 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground mb-4">No certifications yet</p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Plus className="w-4 h-4" />
              Add Your First Certification
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

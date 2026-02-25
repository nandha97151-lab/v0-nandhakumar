'use client'

import { Plus, X, Upload } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface Certification {
  id: number
  title: string
  issuer: string
  startDate: string
  endDate: string
  image?: string
}

export default function Certifications() {
  const [certifications, setCertifications] = useState<Certification[]>([
    {
      id: 1,
      title: 'Python for Data Science',
      issuer: 'Coursera',
      startDate: '2024-01',
      endDate: '2024-03',
      image: undefined,
    },
    {
      id: 2,
      title: 'Machine Learning Basics',
      issuer: 'edX',
      startDate: '2024-02',
      endDate: '2024-04',
      image: undefined,
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ title: '', issuer: '', startDate: '', endDate: '', image: '' })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const addCertification = () => {
    if (formData.title && formData.issuer && formData.startDate && formData.endDate) {
      const newCert: Certification = {
        id: Math.max(...certifications.map(c => c.id), 0) + 1,
        ...formData,
      }
      setCertifications([...certifications, newCert])
      setFormData({ title: '', issuer: '', startDate: '', endDate: '', image: '' })
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
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Start Date</label>
                  <input
                    type="month"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">End Date</label>
                  <input
                    type="month"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
              
              <div className="border-2 border-dashed border-border rounded-lg p-4">
                <label className="flex flex-col items-center justify-center cursor-pointer">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Upload className="w-6 h-6 text-accent" />
                    <div className="text-center">
                      <p className="text-sm font-medium text-foreground">Upload Certificate Image</p>
                      <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                    </div>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {formData.image && (
                <div className="relative w-full h-40 bg-input rounded-lg overflow-hidden border border-border">
                  <Image
                    src={formData.image}
                    alt="Certificate preview"
                    fill
                    className="object-contain"
                  />
                  <button
                    onClick={() => setFormData({ ...formData, image: '' })}
                    className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded hover:opacity-90"
                    type="button"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={addCertification}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Add Certification
                </button>
                <button
                  onClick={() => {
                    setShowForm(false)
                    setFormData({ title: '', issuer: '', startDate: '', endDate: '', image: '' })
                  }}
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
              className="border border-border bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative"
            >
              <button
                onClick={() => removeCertification(cert.id)}
                className="absolute top-4 right-4 z-10 p-1 bg-destructive text-destructive-foreground rounded hover:opacity-90"
                aria-label="Remove certification"
              >
                <X className="w-5 h-5" />
              </button>
              
              {cert.image && (
                <div className="relative w-full h-48 bg-input">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-2">{cert.title}</h3>
                <p className="text-accent font-medium mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{new Date(cert.startDate + '-01').toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
                  <span className="text-xs">•</span>
                  <span>{new Date(cert.endDate + '-01').toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
                </div>
              </div>
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

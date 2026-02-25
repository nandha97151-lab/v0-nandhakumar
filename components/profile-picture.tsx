'use client'

import { Plus, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function ProfilePicture() {
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      processImage(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('image/')) {
      processImage(file)
    }
  }

  const processImage = (file: File) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setProfileImage(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="flex justify-center mb-8">
      {profileImage ? (
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent bg-input flex items-center justify-center">
            <Image
              src={profileImage}
              alt="Profile picture"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={() => setProfileImage(null)}
            className="absolute bottom-0 right-0 p-2 bg-destructive text-destructive-foreground rounded-full hover:opacity-90 transition-opacity shadow-lg"
            aria-label="Remove profile picture"
          >
            <X className="w-5 h-5" />
          </button>
          <label
            htmlFor="profile-upload"
            className="absolute top-0 right-0 p-2 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
            aria-label="Change profile picture"
          >
            <Plus className="w-5 h-5" />
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      ) : (
        <label
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-dashed border-accent flex items-center justify-center cursor-pointer transition-colors ${
            isDragging ? 'bg-accent/20 border-accent' : 'bg-input hover:bg-secondary'
          }`}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <Plus className="w-8 h-8 text-accent" />
            <span className="text-sm font-medium text-foreground text-center px-2">Add Profile Photo</span>
          </div>
        </label>
      )}
    </div>
  )
}

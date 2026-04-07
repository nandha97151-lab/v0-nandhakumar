'use client'

import { useEffect, useState } from 'react'

export default function CursorAnime() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Outer glow ring */}
      {isVisible && (
        <div
          className="fixed pointer-events-none z-50 mix-blend-screen"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-8 h-8 border-2 border-accent rounded-full opacity-50 animate-pulse" />
        </div>
      )}

      {/* Inner dot with glow */}
      {isVisible && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-2 h-2 bg-accent rounded-full shadow-lg shadow-accent/60" />
        </div>
      )}

      {/* Trail effect */}
      {isVisible && (
        <div
          className="fixed pointer-events-none z-40"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-1 h-1 bg-accent rounded-full opacity-30 animate-ping" />
        </div>
      )}
    </>
  )
}

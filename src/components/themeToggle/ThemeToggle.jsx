'use client'

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const ThemeToggle = () => {
  const { toggleMode, mode } = useContext(ThemeContext)
  return (
    <div
      className="min-w-max border-2 border-text_light rounded-3xl flex justify-between items-center relative p-0.5 cursor-pointer"
      onClick={toggleMode}
    >
      <div className="text-xs">🌙</div>
      <div className="text-xs">☀️</div>
      <div
        className={`w-4 h-4 rounded-full absolute ${
          mode === 'light' ? 'bg-accent_primary' : 'bg-accent_secondary'
        }`}
        style={mode === 'dark' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  )
}

export default ThemeToggle

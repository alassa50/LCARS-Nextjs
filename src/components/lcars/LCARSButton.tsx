import React from 'react'

interface LCARSButtonProps {
  children: React.ReactNode
  variant?: 'purple' | 'magenta' | 'cyan' | 'yellow' | 'pink' | 'teal' | 'violet' | 'lime' | 'orange' | 'blue' | 'red' | 'tan' | 'peach' | 'lightblue'
  onClick?: () => void
  className?: string
}

const LCARSButton: React.FC<LCARSButtonProps> = ({ 
  children, 
  variant = 'purple', 
  onClick,
  className = '' 
}) => {
  const colorClasses = {
    purple: 'bg-lcars-purple',
    magenta: 'bg-lcars-magenta',
    cyan: 'bg-lcars-cyan',
    yellow: 'bg-lcars-yellow',
    pink: 'bg-lcars-pink',
    teal: 'bg-lcars-teal',
    violet: 'bg-lcars-violet',
    lime: 'bg-lcars-lime',
    // Legacy colors
    orange: 'bg-lcars-orange',
    blue: 'bg-lcars-blue',
    red: 'bg-lcars-red',
    tan: 'bg-lcars-tan',
    peach: 'bg-lcars-peach',
    lightblue: 'bg-lcars-lightblue',
  }

  return (
    <button
      onClick={onClick}
      className={`${colorClasses[variant]} text-black font-bold py-4 px-6 
        rounded-3xl text-sm uppercase tracking-wider hover:opacity-90 
        hover:scale-105 transition-all duration-200 w-full text-left 
        shadow-lg hover:shadow-xl ${className}`}
    >
      {children}
    </button>
  )
}

export default LCARSButton

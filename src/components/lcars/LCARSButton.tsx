import React from 'react'

interface LCARSButtonProps {
  children: React.ReactNode
  variant?: 'orange' | 'blue' | 'purple' | 'red' | 'yellow' | 'tan' | 'peach' | 'lightblue'
  onClick?: () => void
  className?: string
}

const LCARSButton: React.FC<LCARSButtonProps> = ({ 
  children, 
  variant = 'orange', 
  onClick,
  className = '' 
}) => {
  const colorClasses = {
    orange: 'bg-lcars-orange',
    blue: 'bg-lcars-blue',
    purple: 'bg-lcars-purple',
    red: 'bg-lcars-red',
    yellow: 'bg-lcars-yellow',
    tan: 'bg-lcars-tan',
    peach: 'bg-lcars-peach',
    lightblue: 'bg-lcars-lightblue',
  }

  return (
    <button
      onClick={onClick}
      className={`${colorClasses[variant]} text-black font-bold py-3 px-6 
        rounded-full text-sm uppercase tracking-wider hover:opacity-80 
        transition-opacity w-full text-left ${className}`}
    >
      {children}
    </button>
  )
}

export default LCARSButton

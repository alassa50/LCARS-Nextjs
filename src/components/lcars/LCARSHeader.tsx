import React from 'react'

interface LCARSHeaderProps {
  title: string
  subtitle?: string
}

const LCARSHeader: React.FC<LCARSHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-lcars-panel border-b-4 border-lcars-magenta p-6 rounded-b-3xl">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-36 h-20 bg-gradient-to-r from-lcars-purple to-lcars-magenta rounded-3xl flex items-center justify-center shadow-lg">
            <span className="text-black font-bold text-2xl tracking-wider">LCARS</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-lcars-cyan">{title}</h1>
            {subtitle && (
              <p className="text-sm text-lcars-teal mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="w-24 h-14 bg-lcars-cyan rounded-3xl shadow-lg lcars-glow"></div>
          <div className="w-24 h-14 bg-lcars-magenta rounded-3xl shadow-lg lcars-glow"></div>
          <div className="w-24 h-14 bg-lcars-yellow rounded-3xl shadow-lg lcars-glow"></div>
        </div>
      </div>
    </div>
  )
}

export default LCARSHeader

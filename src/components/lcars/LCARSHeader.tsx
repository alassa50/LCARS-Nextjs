import React from 'react'

interface LCARSHeaderProps {
  title: string
  subtitle?: string
}

const LCARSHeader: React.FC<LCARSHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-lcars-panel border-b-4 border-lcars-orange p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-32 h-16 bg-lcars-orange rounded-r-full flex items-center justify-center">
            <span className="text-black font-bold text-xl">LCARS</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-lcars-orange">{title}</h1>
            {subtitle && (
              <p className="text-sm text-lcars-blue">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="w-20 h-12 bg-lcars-blue rounded-full"></div>
          <div className="w-20 h-12 bg-lcars-purple rounded-full"></div>
          <div className="w-20 h-12 bg-lcars-red rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default LCARSHeader

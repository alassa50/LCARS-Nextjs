import React from 'react'

interface LCARSPanelProps {
  title?: string
  children: React.ReactNode
  className?: string
}

const LCARSPanel: React.FC<LCARSPanelProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`lcars-panel border-2 border-lcars-orange p-6 ${className}`}>
      {title && (
        <div className="mb-4 pb-2 border-b border-lcars-orange">
          <h2 className="text-xl font-bold text-lcars-orange uppercase">{title}</h2>
        </div>
      )}
      <div className="text-lcars-tan">
        {children}
      </div>
    </div>
  )
}

export default LCARSPanel

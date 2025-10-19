import React from 'react'

interface LCARSPanelProps {
  title?: string
  children: React.ReactNode
  className?: string
}

const LCARSPanel: React.FC<LCARSPanelProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`lcars-panel border-3 border-lcars-purple p-8 rounded-3xl shadow-2xl ${className}`}>
      {title && (
        <div className="mb-6 pb-3 border-b-2 border-lcars-magenta">
          <h2 className="text-2xl font-bold text-lcars-cyan uppercase tracking-wide">{title}</h2>
        </div>
      )}
      <div className="text-lcars-purple">
        {children}
      </div>
    </div>
  )
}

export default LCARSPanel

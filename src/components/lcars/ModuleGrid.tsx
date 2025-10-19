'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface Module {
  id: string
  name: string
  description: string
  icon: string
  color: string
  route: string
}

const modules: Module[] = [
  {
    id: 'api',
    name: 'API INTERFACE',
    description: 'Call and manage external APIs',
    icon: '⚡',
    color: 'bg-lcars-orange',
    route: '/modules/api'
  },
  {
    id: 'sftp',
    name: 'SFTP BROWSER',
    description: 'Access and manage SFTP files',
    icon: '📁',
    color: 'bg-lcars-blue',
    route: '/modules/sftp'
  },
  {
    id: 'storage',
    name: 'CLOUD STORAGE',
    description: 'Manage cloud buckets and storage',
    icon: '☁️',
    color: 'bg-lcars-purple',
    route: '/modules/storage'
  },
  {
    id: 'kubernetes',
    name: 'KUBERNETES',
    description: 'Monitor and manage GCP K8s clusters',
    icon: '⚙️',
    color: 'bg-lcars-red',
    route: '/modules/kubernetes'
  },
  {
    id: 'github',
    name: 'GITHUB',
    description: 'Access GitHub repositories',
    icon: '🔧',
    color: 'bg-lcars-yellow',
    route: '/modules/github'
  },
  {
    id: 'gdrive',
    name: 'GOOGLE DRIVE',
    description: 'Access Google Drive files',
    icon: '📄',
    color: 'bg-lcars-peach',
    route: '/modules/gdrive'
  },
  {
    id: 'web',
    name: 'WEB ACCESS',
    description: 'Browse and access web resources',
    icon: '🌐',
    color: 'bg-lcars-lightblue',
    route: '/modules/web'
  },
  {
    id: 'ai',
    name: 'AI ASSISTANT',
    description: 'Interact with AI intelligence',
    icon: '🤖',
    color: 'bg-lcars-tan',
    route: '/modules/ai'
  }
]

const ModuleGrid: React.FC = () => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-2 gap-4">
      {modules.map((module) => (
        <Link
          key={module.id}
          href={module.route}
          onMouseEnter={() => setHoveredModule(module.id)}
          onMouseLeave={() => setHoveredModule(null)}
          className={`${module.color} p-6 rounded-lg cursor-pointer 
            transition-all duration-300 transform 
            ${hoveredModule === module.id ? 'scale-105 lcars-glow' : ''}`}
        >
          <div className="flex items-center space-x-4">
            <span className="text-4xl">{module.icon}</span>
            <div>
              <h3 className="text-black font-bold text-lg">{module.name}</h3>
              <p className="text-black text-sm opacity-80">{module.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ModuleGrid

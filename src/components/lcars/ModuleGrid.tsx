'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Module } from '@/types'

const modules: Module[] = [
  {
    id: 'api',
    name: 'API INTERFACE',
    description: 'Call and manage external APIs',
    icon: '⚡',
    color: 'bg-lcars-magenta',
    route: '/modules/api'
  },
  {
    id: 'sftp',
    name: 'SFTP BROWSER',
    description: 'Access and manage SFTP files',
    icon: '📁',
    color: 'bg-lcars-cyan',
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
    color: 'bg-lcars-pink',
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
    color: 'bg-lcars-teal',
    route: '/modules/gdrive'
  },
  {
    id: 'web',
    name: 'WEB ACCESS',
    description: 'Browse and access web resources',
    icon: '🌐',
    color: 'bg-lcars-violet',
    route: '/modules/web'
  },
  {
    id: 'ai',
    name: 'AI ASSISTANT',
    description: 'Interact with AI intelligence',
    icon: '🤖',
    color: 'bg-lcars-lime',
    route: '/modules/ai'
  }
]

const ModuleGrid: React.FC = () => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-2 gap-5">
      {modules.map((module) => (
        <Link
          key={module.id}
          href={module.route}
          onMouseEnter={() => setHoveredModule(module.id)}
          onMouseLeave={() => setHoveredModule(null)}
          className={`${module.color} p-7 rounded-3xl cursor-pointer 
            transition-all duration-300 transform shadow-lg
            ${hoveredModule === module.id ? 'scale-105 lcars-glow shadow-2xl' : ''}`}
        >
          <div className="flex items-center space-x-4">
            <span className="text-5xl">{module.icon}</span>
            <div>
              <h3 className="text-black font-bold text-xl">{module.name}</h3>
              <p className="text-black text-sm opacity-80">{module.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ModuleGrid

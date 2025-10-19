'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import LCARSHeader from '@/components/lcars/LCARSHeader'
import LCARSPanel from '@/components/lcars/LCARSPanel'
import LCARSButton from '@/components/lcars/LCARSButton'

interface Repository {
  name: string
  description: string
  stars: number
  language: string
}

export default function GitHubModule() {
  const [repos] = useState<Repository[]>([
    { name: 'project-alpha', description: 'Main application repository', stars: 42, language: 'TypeScript' },
    { name: 'project-beta', description: 'API backend service', stars: 18, language: 'Python' },
    { name: 'project-gamma', description: 'Mobile application', stars: 31, language: 'React Native' },
  ])

  return (
    <main className="min-h-screen bg-lcars-background">
      <LCARSHeader title="GITHUB" subtitle="Source Code Repository Access" />
      
      <div className="container mx-auto p-6">
        <Link href="/">
          <LCARSButton variant="yellow" className="mb-6 w-56">← BACK TO MAIN</LCARSButton>
        </Link>

        <LCARSPanel title="REPOSITORIES">
          <div className="space-y-4">
            {repos.map((repo, index) => (
              <div
                key={index}
                className="p-5 bg-lcars-panel border-3 border-lcars-yellow rounded-2xl hover:bg-opacity-50 hover:border-lcars-magenta transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-lcars-cyan">🔧 {repo.name}</h3>
                    <p className="text-sm mt-1 text-lcars-purple">{repo.description}</p>
                    <div className="text-sm mt-2 text-lcars-yellow">
                      ⭐ {repo.stars} stars • {repo.language}
                    </div>
                  </div>
                  <div className="space-x-3">
                    <LCARSButton variant="yellow" className="w-32">VIEW</LCARSButton>
                    <LCARSButton variant="teal" className="w-32">CLONE</LCARSButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </LCARSPanel>
      </div>
    </main>
  )
}

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
      
      <div className="container mx-auto p-4">
        <Link href="/">
          <LCARSButton variant="yellow" className="mb-4 w-48">← BACK TO MAIN</LCARSButton>
        </Link>

        <LCARSPanel title="REPOSITORIES">
          <div className="space-y-3">
            {repos.map((repo, index) => (
              <div
                key={index}
                className="p-4 bg-lcars-panel border-2 border-lcars-yellow rounded hover:bg-opacity-50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-lcars-yellow">🔧 {repo.name}</h3>
                    <p className="text-sm mt-1">{repo.description}</p>
                    <div className="text-sm mt-2">
                      ⭐ {repo.stars} stars • {repo.language}
                    </div>
                  </div>
                  <div className="space-x-2">
                    <LCARSButton variant="yellow" className="w-32">VIEW</LCARSButton>
                    <LCARSButton variant="blue" className="w-32">CLONE</LCARSButton>
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

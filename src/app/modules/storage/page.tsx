'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import LCARSHeader from '@/components/lcars/LCARSHeader'
import LCARSPanel from '@/components/lcars/LCARSPanel'
import LCARSButton from '@/components/lcars/LCARSButton'

interface Bucket {
  name: string
  size: string
  files: number
  created: string
}

export default function StorageModule() {
  const [buckets] = useState<Bucket[]>([
    { name: 'production-data', size: '15.8 GB', files: 1234, created: '2024-01-10' },
    { name: 'backup-storage', size: '42.3 GB', files: 3456, created: '2024-01-05' },
    { name: 'media-assets', size: '128.5 GB', files: 8901, created: '2023-12-20' },
  ])

  return (
    <main className="min-h-screen bg-lcars-background">
      <LCARSHeader title="CLOUD STORAGE" subtitle="Bucket Management System" />
      
      <div className="container mx-auto p-6">
        <Link href="/">
          <LCARSButton variant="purple" className="mb-6 w-56">← BACK TO MAIN</LCARSButton>
        </Link>

        <LCARSPanel title="AVAILABLE BUCKETS">
          <div className="space-y-4">
            {buckets.map((bucket, index) => (
              <div
                key={index}
                className="p-5 bg-lcars-panel border-3 border-lcars-purple rounded-2xl hover:bg-opacity-50 hover:border-lcars-magenta transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-lcars-cyan">☁️ {bucket.name}</h3>
                    <div className="text-sm mt-2 space-y-1 text-lcars-purple">
                      <div>Size: {bucket.size} • Files: {bucket.files}</div>
                      <div>Created: {bucket.created}</div>
                    </div>
                  </div>
                  <div className="space-x-3">
                    <LCARSButton variant="purple" className="w-32">BROWSE</LCARSButton>
                    <LCARSButton variant="magenta" className="w-32">MANAGE</LCARSButton>
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

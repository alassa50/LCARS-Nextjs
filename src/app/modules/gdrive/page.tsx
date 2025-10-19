'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import LCARSHeader from '@/components/lcars/LCARSHeader'
import LCARSPanel from '@/components/lcars/LCARSPanel'
import LCARSButton from '@/components/lcars/LCARSButton'

interface DriveFile {
  name: string
  type: string
  size: string
  modified: string
}

export default function GDriveModule() {
  const [files] = useState<DriveFile[]>([
    { name: 'Project Documentation', type: 'Folder', size: '-', modified: '2024-01-15' },
    { name: 'Presentation.pptx', type: 'Presentation', size: '5.2 MB', modified: '2024-01-14' },
    { name: 'Data Analysis.xlsx', type: 'Spreadsheet', size: '1.8 MB', modified: '2024-01-13' },
    { name: 'Report.pdf', type: 'PDF', size: '3.4 MB', modified: '2024-01-12' },
  ])

  const getIcon = (type: string) => {
    switch (type) {
      case 'Folder': return '📁'
      case 'Presentation': return '📊'
      case 'Spreadsheet': return '📈'
      case 'PDF': return '📄'
      default: return '📄'
    }
  }

  return (
    <main className="min-h-screen bg-lcars-background">
      <LCARSHeader title="GOOGLE DRIVE" subtitle="Cloud Document Access" />
      
      <div className="container mx-auto p-4">
        <Link href="/">
          <LCARSButton variant="peach" className="mb-4 w-48">← BACK TO MAIN</LCARSButton>
        </Link>

        <LCARSPanel title="MY DRIVE">
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="p-3 bg-lcars-panel border border-lcars-peach rounded flex items-center justify-between hover:bg-opacity-50"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getIcon(file.type)}</span>
                  <div>
                    <div className="font-bold">{file.name}</div>
                    <div className="text-sm opacity-70">
                      {file.type} • {file.size} • Modified: {file.modified}
                    </div>
                  </div>
                </div>
                <div className="space-x-2">
                  <LCARSButton variant="peach" className="w-32">OPEN</LCARSButton>
                  <LCARSButton variant="blue" className="w-32">SHARE</LCARSButton>
                </div>
              </div>
            ))}
          </div>
        </LCARSPanel>
      </div>
    </main>
  )
}

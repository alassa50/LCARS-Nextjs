'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import LCARSHeader from '@/components/lcars/LCARSHeader'
import LCARSPanel from '@/components/lcars/LCARSPanel'
import LCARSButton from '@/components/lcars/LCARSButton'

interface FileItem {
  name: string
  type: 'file' | 'directory'
  size?: number
  modified?: string
}

export default function SFTPModule() {
  const [host, setHost] = useState('')
  const [connected, setConnected] = useState(false)
  const [currentPath, setCurrentPath] = useState('/')
  const [files, setFiles] = useState<FileItem[]>([])

  const handleConnect = () => {
    // Mock connection
    setConnected(true)
    setFiles([
      { name: 'documents', type: 'directory', modified: '2024-01-15' },
      { name: 'images', type: 'directory', modified: '2024-01-14' },
      { name: 'config.json', type: 'file', size: 1024, modified: '2024-01-15' },
      { name: 'readme.txt', type: 'file', size: 2048, modified: '2024-01-13' },
    ])
  }

  return (
    <main className="min-h-screen bg-lcars-background">
      <LCARSHeader title="SFTP BROWSER" subtitle="Secure File Transfer Protocol" />
      
      <div className="container mx-auto p-6">
        <Link href="/">
          <LCARSButton variant="cyan" className="mb-6 w-56">← BACK TO MAIN</LCARSButton>
        </Link>

        <div className="grid grid-cols-1 gap-6">
          <LCARSPanel title="CONNECTION SETTINGS">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-lcars-cyan font-bold">HOST</label>
                <input
                  type="text"
                  value={host}
                  onChange={(e) => setHost(e.target.value)}
                  placeholder="sftp.example.com"
                  className="w-full p-4 bg-lcars-panel border-3 border-lcars-purple text-lcars-cyan rounded-2xl focus:border-lcars-cyan focus:outline-none"
                />
              </div>

              <button
                onClick={handleConnect}
                className="bg-lcars-teal text-black font-bold py-4 px-10 rounded-3xl hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {connected ? 'CONNECTED' : 'CONNECT'}
              </button>
            </div>
          </LCARSPanel>

          {connected && (
            <LCARSPanel title={`CURRENT PATH: ${currentPath}`}>
              <div className="space-y-3">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-lcars-panel border-2 border-lcars-cyan rounded-2xl hover:bg-opacity-50 hover:border-lcars-magenta transition-all"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{file.type === 'directory' ? '📁' : '📄'}</span>
                      <div>
                        <div className="font-bold text-lcars-cyan">{file.name}</div>
                        <div className="text-sm opacity-70 text-lcars-purple">
                          {file.size ? `${(file.size / 1024).toFixed(2)} KB` : 'Directory'} • {file.modified}
                        </div>
                      </div>
                    </div>
                    <LCARSButton variant="cyan" className="w-32">OPEN</LCARSButton>
                  </div>
                ))}
              </div>
            </LCARSPanel>
          )}
        </div>
      </div>
    </main>
  )
}

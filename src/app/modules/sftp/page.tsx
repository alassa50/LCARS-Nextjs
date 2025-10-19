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
      
      <div className="container mx-auto p-4">
        <Link href="/">
          <LCARSButton variant="blue" className="mb-4 w-48">← BACK TO MAIN</LCARSButton>
        </Link>

        <div className="grid grid-cols-1 gap-4">
          <LCARSPanel title="CONNECTION SETTINGS">
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-lcars-orange">HOST</label>
                <input
                  type="text"
                  value={host}
                  onChange={(e) => setHost(e.target.value)}
                  placeholder="sftp.example.com"
                  className="w-full p-3 bg-lcars-panel border-2 border-lcars-blue text-lcars-tan rounded"
                />
              </div>

              <button
                onClick={handleConnect}
                className="bg-lcars-orange text-black font-bold py-3 px-8 rounded-full hover:opacity-80"
              >
                {connected ? 'CONNECTED' : 'CONNECT'}
              </button>
            </div>
          </LCARSPanel>

          {connected && (
            <LCARSPanel title={`CURRENT PATH: ${currentPath}`}>
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-lcars-panel border border-lcars-blue rounded hover:bg-opacity-50"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{file.type === 'directory' ? '📁' : '📄'}</span>
                      <div>
                        <div className="font-bold">{file.name}</div>
                        <div className="text-sm opacity-70">
                          {file.size ? `${(file.size / 1024).toFixed(2)} KB` : 'Directory'} • {file.modified}
                        </div>
                      </div>
                    </div>
                    <LCARSButton variant="blue" className="w-32">OPEN</LCARSButton>
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

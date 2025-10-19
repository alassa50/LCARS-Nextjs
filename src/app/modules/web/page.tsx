'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import LCARSHeader from '@/components/lcars/LCARSHeader'
import LCARSPanel from '@/components/lcars/LCARSPanel'
import LCARSButton from '@/components/lcars/LCARSButton'

export default function WebModule() {
  const [url, setUrl] = useState('')
  const [history, setHistory] = useState<string[]>([])

  const handleNavigate = () => {
    if (url && !history.includes(url)) {
      setHistory([...history, url])
    }
  }

  return (
    <main className="min-h-screen bg-lcars-background">
      <LCARSHeader title="WEB ACCESS" subtitle="Internet Resource Browser" />
      
      <div className="container mx-auto p-6">
        <Link href="/">
          <LCARSButton variant="violet" className="mb-6 w-56">← BACK TO MAIN</LCARSButton>
        </Link>

        <div className="grid grid-cols-1 gap-6">
          <LCARSPanel title="NAVIGATION">
            <div className="space-y-6">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleNavigate()}
                  placeholder="https://example.com"
                  className="flex-1 p-4 bg-lcars-panel border-3 border-lcars-purple text-lcars-cyan rounded-2xl focus:border-lcars-violet focus:outline-none"
                />
                <button
                  onClick={handleNavigate}
                  className="bg-lcars-violet text-black font-bold py-4 px-10 rounded-3xl hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  GO
                </button>
              </div>

              <div className="bg-black p-8 rounded-2xl h-96 flex items-center justify-center border-2 border-lcars-purple">
                <div className="text-center text-lcars-violet">
                  <div className="text-7xl mb-4">🌐</div>
                  <div className="text-2xl font-bold">WEB VIEWER</div>
                  <div className="text-sm mt-3 opacity-70 text-lcars-purple">
                    Enter a URL to browse external resources
                  </div>
                </div>
              </div>
            </div>
          </LCARSPanel>

          {history.length > 0 && (
            <LCARSPanel title="BROWSING HISTORY">
              <div className="space-y-2">
                {history.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 bg-lcars-panel border-2 border-lcars-violet rounded-2xl text-sm text-lcars-cyan hover:border-lcars-magenta transition-all"
                  >
                    {item}
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

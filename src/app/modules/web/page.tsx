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
      
      <div className="container mx-auto p-4">
        <Link href="/">
          <LCARSButton variant="lightblue" className="mb-4 w-48">← BACK TO MAIN</LCARSButton>
        </Link>

        <div className="grid grid-cols-1 gap-4">
          <LCARSPanel title="NAVIGATION">
            <div className="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleNavigate()}
                  placeholder="https://example.com"
                  className="flex-1 p-3 bg-lcars-panel border-2 border-lcars-lightblue text-lcars-tan rounded"
                />
                <button
                  onClick={handleNavigate}
                  className="bg-lcars-lightblue text-black font-bold py-3 px-8 rounded-full hover:opacity-80"
                >
                  GO
                </button>
              </div>

              <div className="bg-black p-4 rounded h-96 flex items-center justify-center">
                <div className="text-center text-lcars-lightblue">
                  <div className="text-6xl mb-4">🌐</div>
                  <div className="text-xl">WEB VIEWER</div>
                  <div className="text-sm mt-2 opacity-70">
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
                    className="p-2 bg-lcars-panel border border-lcars-lightblue rounded text-sm"
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

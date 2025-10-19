'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import LCARSHeader from '@/components/lcars/LCARSHeader'
import LCARSPanel from '@/components/lcars/LCARSPanel'
import LCARSButton from '@/components/lcars/LCARSButton'

export default function APIModule() {
  const [url, setUrl] = useState('')
  const [method, setMethod] = useState('GET')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAPICall = async () => {
    if (!url) return
    
    setLoading(true)
    try {
      const res = await fetch(url, { method })
      const data = await res.json()
      setResponse(JSON.stringify(data, null, 2))
    } catch (error) {
      setResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-lcars-background">
      <LCARSHeader title="API INTERFACE" subtitle="External API Communication" />
      
      <div className="container mx-auto p-6">
        <Link href="/">
          <LCARSButton variant="magenta" className="mb-6 w-56">← BACK TO MAIN</LCARSButton>
        </Link>

        <div className="grid grid-cols-1 gap-6">
          <LCARSPanel title="API REQUEST CONFIGURATION">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-lcars-cyan font-bold">REQUEST URL</label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://api.example.com/endpoint"
                  className="w-full p-4 bg-lcars-panel border-3 border-lcars-purple text-lcars-cyan rounded-2xl focus:border-lcars-magenta focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-lcars-cyan font-bold">METHOD</label>
                <select
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                  className="w-full p-4 bg-lcars-panel border-3 border-lcars-purple text-lcars-cyan rounded-2xl focus:border-lcars-magenta focus:outline-none"
                >
                  <option>GET</option>
                  <option>POST</option>
                  <option>PUT</option>
                  <option>DELETE</option>
                </select>
              </div>

              <button
                onClick={handleAPICall}
                disabled={loading}
                className="bg-lcars-cyan text-black font-bold py-4 px-10 rounded-3xl hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {loading ? 'EXECUTING...' : 'EXECUTE REQUEST'}
              </button>
            </div>
          </LCARSPanel>

          {response && (
            <LCARSPanel title="RESPONSE DATA">
              <pre className="bg-black p-6 rounded-2xl overflow-auto max-h-96 text-lcars-cyan border-2 border-lcars-purple">
                {response}
              </pre>
            </LCARSPanel>
          )}
        </div>
      </div>
    </main>
  )
}

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
      
      <div className="container mx-auto p-4">
        <Link href="/">
          <LCARSButton variant="orange" className="mb-4 w-48">← BACK TO MAIN</LCARSButton>
        </Link>

        <div className="grid grid-cols-1 gap-4">
          <LCARSPanel title="API REQUEST CONFIGURATION">
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-lcars-orange">REQUEST URL</label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://api.example.com/endpoint"
                  className="w-full p-3 bg-lcars-panel border-2 border-lcars-orange text-lcars-tan rounded"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-lcars-orange">METHOD</label>
                <select
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                  className="w-full p-3 bg-lcars-panel border-2 border-lcars-orange text-lcars-tan rounded"
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
                className="bg-lcars-blue text-black font-bold py-3 px-8 rounded-full hover:opacity-80"
              >
                {loading ? 'EXECUTING...' : 'EXECUTE REQUEST'}
              </button>
            </div>
          </LCARSPanel>

          {response && (
            <LCARSPanel title="RESPONSE DATA">
              <pre className="bg-black p-4 rounded overflow-auto max-h-96 text-lcars-blue">
                {response}
              </pre>
            </LCARSPanel>
          )}
        </div>
      </div>
    </main>
  )
}

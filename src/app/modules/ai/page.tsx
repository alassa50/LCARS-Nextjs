'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import LCARSHeader from '@/components/lcars/LCARSHeader'
import LCARSPanel from '@/components/lcars/LCARSPanel'
import LCARSButton from '@/components/lcars/LCARSButton'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function AIModule() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages([...messages, userMessage])
    setInput('')
    setLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        role: 'assistant',
        content: 'Computer acknowledges. This is a demonstration interface. To enable full AI functionality, configure your API key in the settings.'
      }
      setMessages(prev => [...prev, aiMessage])
      setLoading(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-lcars-background">
      <LCARSHeader title="AI ASSISTANT" subtitle="Artificial Intelligence Interface" />
      
      <div className="container mx-auto p-4">
        <Link href="/">
          <LCARSButton variant="tan" className="mb-4 w-48">← BACK TO MAIN</LCARSButton>
        </Link>

        <LCARSPanel title="AI COMMUNICATION CHANNEL">
          <div className="space-y-4">
            <div className="h-96 overflow-y-auto bg-black p-4 rounded space-y-3">
              {messages.length === 0 && (
                <div className="text-center text-lcars-blue opacity-50 py-8">
                  READY FOR INPUT...
                </div>
              )}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded ${
                    message.role === 'user'
                      ? 'bg-lcars-blue text-black ml-12'
                      : 'bg-lcars-orange text-black mr-12'
                  }`}
                >
                  <div className="font-bold mb-1">
                    {message.role === 'user' ? 'USER' : 'COMPUTER'}
                  </div>
                  <div>{message.content}</div>
                </div>
              ))}
              {loading && (
                <div className="text-lcars-orange animate-pulse">
                  PROCESSING...
                </div>
              )}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Enter your query..."
                className="flex-1 p-3 bg-lcars-panel border-2 border-lcars-orange text-lcars-tan rounded"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-lcars-orange text-black font-bold py-3 px-8 rounded-full hover:opacity-80"
              >
                SEND
              </button>
            </div>
          </div>
        </LCARSPanel>
      </div>
    </main>
  )
}

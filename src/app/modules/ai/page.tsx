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
      
      <div className="container mx-auto p-6">
        <Link href="/">
          <LCARSButton variant="lime" className="mb-6 w-56">← BACK TO MAIN</LCARSButton>
        </Link>

        <LCARSPanel title="AI COMMUNICATION CHANNEL">
          <div className="space-y-6">
            <div className="h-96 overflow-y-auto bg-black p-6 rounded-2xl space-y-4 border-2 border-lcars-purple">
              {messages.length === 0 && (
                <div className="text-center text-lcars-purple opacity-50 py-8 text-xl">
                  READY FOR INPUT...
                </div>
              )}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl shadow-lg ${
                    message.role === 'user'
                      ? 'bg-lcars-cyan text-black ml-12'
                      : 'bg-lcars-magenta text-black mr-12'
                  }`}
                >
                  <div className="font-bold mb-1">
                    {message.role === 'user' ? 'USER' : 'COMPUTER'}
                  </div>
                  <div>{message.content}</div>
                </div>
              ))}
              {loading && (
                <div className="text-lcars-magenta animate-pulse text-lg">
                  PROCESSING...
                </div>
              )}
            </div>

            <div className="flex space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Enter your query..."
                className="flex-1 p-4 bg-lcars-panel border-3 border-lcars-purple text-lcars-cyan rounded-2xl focus:border-lcars-magenta focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-lcars-magenta text-black font-bold py-4 px-10 rounded-3xl hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg"
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

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import LCARSHeader from '@/components/lcars/LCARSHeader'
import LCARSPanel from '@/components/lcars/LCARSPanel'
import LCARSButton from '@/components/lcars/LCARSButton'

interface Pod {
  name: string
  namespace: string
  status: 'Running' | 'Pending' | 'Failed'
  restarts: number
}

export default function KubernetesModule() {
  const [pods] = useState<Pod[]>([
    { name: 'frontend-abc123', namespace: 'production', status: 'Running', restarts: 0 },
    { name: 'backend-def456', namespace: 'production', status: 'Running', restarts: 2 },
    { name: 'database-ghi789', namespace: 'production', status: 'Running', restarts: 0 },
    { name: 'worker-jkl012', namespace: 'staging', status: 'Pending', restarts: 1 },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Running': return 'text-lcars-teal'
      case 'Pending': return 'text-lcars-yellow'
      case 'Failed': return 'text-lcars-pink'
      default: return 'text-lcars-purple'
    }
  }

  return (
    <main className="min-h-screen bg-lcars-background">
      <LCARSHeader title="KUBERNETES" subtitle="GCP Cluster Management" />
      
      <div className="container mx-auto p-6">
        <Link href="/">
          <LCARSButton variant="pink" className="mb-6 w-56">← BACK TO MAIN</LCARSButton>
        </Link>

        <LCARSPanel title="CLUSTER STATUS">
          <div className="space-y-3">
            {pods.map((pod, index) => (
              <div
                key={index}
                className="p-4 bg-lcars-panel border-2 border-lcars-pink rounded-2xl flex items-center justify-between hover:bg-opacity-50 hover:border-lcars-magenta transition-all"
              >
                <div>
                  <div className="font-bold text-lcars-cyan">⚙️ {pod.name}</div>
                  <div className="text-sm opacity-70 text-lcars-purple">
                    Namespace: {pod.namespace} • Restarts: {pod.restarts}
                  </div>
                </div>
                <div className={`font-bold text-lg ${getStatusColor(pod.status)}`}>
                  {pod.status}
                </div>
              </div>
            ))}
          </div>
        </LCARSPanel>
      </div>
    </main>
  )
}

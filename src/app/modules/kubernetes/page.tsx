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
      case 'Running': return 'text-green-400'
      case 'Pending': return 'text-yellow-400'
      case 'Failed': return 'text-red-400'
      default: return 'text-lcars-tan'
    }
  }

  return (
    <main className="min-h-screen bg-lcars-background">
      <LCARSHeader title="KUBERNETES" subtitle="GCP Cluster Management" />
      
      <div className="container mx-auto p-4">
        <Link href="/">
          <LCARSButton variant="red" className="mb-4 w-48">← BACK TO MAIN</LCARSButton>
        </Link>

        <LCARSPanel title="CLUSTER STATUS">
          <div className="space-y-2">
            {pods.map((pod, index) => (
              <div
                key={index}
                className="p-3 bg-lcars-panel border border-lcars-red rounded flex items-center justify-between"
              >
                <div>
                  <div className="font-bold">⚙️ {pod.name}</div>
                  <div className="text-sm opacity-70">
                    Namespace: {pod.namespace} • Restarts: {pod.restarts}
                  </div>
                </div>
                <div className={`font-bold ${getStatusColor(pod.status)}`}>
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

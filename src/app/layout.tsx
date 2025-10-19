import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LCARS Interface',
  description: 'Star Trek LCARS Interface - Advanced Computer System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

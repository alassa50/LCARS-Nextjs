import LCARSHeader from '@/components/lcars/LCARSHeader'
import LCARSPanel from '@/components/lcars/LCARSPanel'
import LCARSButton from '@/components/lcars/LCARSButton'
import ModuleGrid from '@/components/lcars/ModuleGrid'

export default function Home() {
  return (
    <main className="min-h-screen bg-lcars-background">
      <LCARSHeader title="COMPUTER INTERFACE" subtitle="LCARS LOWER DECKS v24.8" />
      
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-12 gap-4">
          {/* Left Sidebar */}
          <div className="col-span-2 space-y-3">
            <LCARSButton variant="purple">MAIN</LCARSButton>
            <LCARSButton variant="cyan">STATUS</LCARSButton>
            <LCARSButton variant="magenta">DATA</LCARSButton>
            <LCARSButton variant="pink">ALERT</LCARSButton>
            <LCARSButton variant="yellow">SYSTEMS</LCARSButton>
          </div>
          
          {/* Main Content */}
          <div className="col-span-8">
            <LCARSPanel title="SYSTEM MODULES">
              <ModuleGrid />
            </LCARSPanel>
          </div>
          
          {/* Right Sidebar */}
          <div className="col-span-2 space-y-3">
            <LCARSButton variant="cyan">COMM</LCARSButton>
            <LCARSButton variant="teal">NAV</LCARSButton>
            <LCARSButton variant="violet">ENG</LCARSButton>
            <LCARSButton variant="magenta">OPS</LCARSButton>
            <LCARSButton variant="purple">SCI</LCARSButton>
          </div>
        </div>
      </div>
    </main>
  )
}

import LCARSHeader from '@/components/lcars/LCARSHeader'
import LCARSPanel from '@/components/lcars/LCARSPanel'
import LCARSButton from '@/components/lcars/LCARSButton'
import ModuleGrid from '@/components/lcars/ModuleGrid'

export default function Home() {
  return (
    <main className="min-h-screen bg-lcars-background">
      <LCARSHeader title="COMPUTER INTERFACE" subtitle="LCARS v24.8" />
      
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-12 gap-4">
          {/* Left Sidebar */}
          <div className="col-span-2 space-y-2">
            <LCARSButton variant="orange">MAIN</LCARSButton>
            <LCARSButton variant="blue">STATUS</LCARSButton>
            <LCARSButton variant="purple">DATA</LCARSButton>
            <LCARSButton variant="red">ALERT</LCARSButton>
            <LCARSButton variant="yellow">SYSTEMS</LCARSButton>
          </div>
          
          {/* Main Content */}
          <div className="col-span-8">
            <LCARSPanel title="SYSTEM MODULES">
              <ModuleGrid />
            </LCARSPanel>
          </div>
          
          {/* Right Sidebar */}
          <div className="col-span-2 space-y-2">
            <LCARSButton variant="lightblue">COMM</LCARSButton>
            <LCARSButton variant="peach">NAV</LCARSButton>
            <LCARSButton variant="tan">ENG</LCARSButton>
            <LCARSButton variant="orange">OPS</LCARSButton>
            <LCARSButton variant="blue">SCI</LCARSButton>
          </div>
        </div>
      </div>
    </main>
  )
}

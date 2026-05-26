'use client'

import { useState, useRef } from 'react'
import { Hero } from '@/components/sections/hero'
import { TrustIndicators } from '@/components/sections/trust-indicators'
import { KeyBenefits } from '@/components/sections/key-benefits'
import { VideoDemo } from '@/components/sections/video-demo'
import { FocusedShowcase } from '@/components/sections/focused-showcase'
import { Pipeline } from '@/components/sections/pipeline'
import { Analytics } from '@/components/sections/analytics'
import { Dashboard } from '@/components/sections/dashboard'
import { DetailModal } from '@/components/sections/detail-modal'
import { UploadSection } from '@/components/sections/upload'
import { type JobRecord } from '@/lib/data'

export default function Home() {
  const [selectedJob, setSelectedJob] = useState<JobRecord | null>(null)
  const [showUpload, setShowUpload] = useState(false)
  const dashboardRef = useRef<HTMLDivElement>(null)

  const handleViewDemo = () => {
    dashboardRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleBookDemo = () => {
    // Placeholder for Calendly integration
    window.open('https://calendly.com', '_blank')
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero onViewDemo={handleViewDemo} onBookDemo={handleBookDemo} />

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Key Benefits */}
      <KeyBenefits />

      {/* Video Demo */}
      <VideoDemo />

      {/* Before/After Showcase */}
      <FocusedShowcase />

      {/* Pipeline Section */}
      <Pipeline />

      {/* Analytics Section */}
      <Analytics />

      {/* Dashboard Section */}
      <div ref={dashboardRef}>
        <Dashboard onSelectJob={setSelectedJob} />
      </div>

      {/* Detail Modal */}
      <DetailModal
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />

      {/* Upload Modal */}
      {showUpload && (
        <UploadSection onClose={() => setShowUpload(false)} />
      )}

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Strucxio</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered data transformation platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Strucxio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

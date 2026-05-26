'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'

interface HeroProps {
  onViewDemo: () => void
  onBookDemo: () => void
}

export function Hero({ onViewDemo, onBookDemo }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm">
          <Zap className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-muted-foreground">
            Questra Data Extractor
          </span>
        </div>

        {/* Main headline */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Stop copying data manually. Let Strucxio turn any messy file into clean, searchable structured data.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
            Upload any document (resumes, invoices, job listings, contracts). Strucxio&apos;s Questra data extractor extracts job titles, skills, locations, and experience – ready for your database or dashboard.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            onClick={onViewDemo}
            className="gap-2 h-12 px-8 text-base"
          >
            Watch Demo <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onBookDemo}
            className="h-12 px-8 text-base"
          >
            Book a Demo
          </Button>
        </div>

        {/* Subtext */}
        <p className="text-sm text-muted-foreground pt-4">
          Process 50+ files with 95% accuracy. Start instantly.
        </p>
      </div>
    </section>
  )
}

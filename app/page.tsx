'use client'

import { Button } from '@/components/ui/button'
import { SimpleExample } from '@/components/sections/simple-example'
import { ValueProps } from '@/components/sections/value-props'
import { Pipeline } from '@/components/sections/pipeline'
import { TrustIndicators } from '@/components/sections/trust-indicators'
import Link from 'next/link'
import { ArrowRight, Briefcase, Scale, Shield, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Stop copying data manually.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            Strucxio extracts structured data from any document—PDFs, images, spreadsheets—in seconds. Zero manual work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/demo">
              <Button size="lg" className="gap-2 h-12 px-8 text-base">
                See How It Works <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                Book a Demo
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            No credit card required. See real examples instantly.
          </p>
        </div>
      </section>

      {/* Trust Stats */}
      <TrustIndicators />

      {/* Simple Example */}
      <SimpleExample />

      {/* Value Props */}
      <ValueProps />

      {/* Pipeline */}
      <Pipeline />

      {/* Who Is It For */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Who is it for?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <Briefcase className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2">HR & Recruitment</h3>
            <p className="text-sm text-muted-foreground">Extract candidate data from resumes, applications, and job postings instantly.</p>
          </div>
          <div className="p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <Scale className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Legal</h3>
            <p className="text-sm text-muted-foreground">Process contracts, documents, and agreements to extract key terms and clauses.</p>
          </div>
          <div className="p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <Shield className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Finance</h3>
            <p className="text-sm text-muted-foreground">Extract financial data from invoices, receipts, and statements for accounting.</p>
          </div>
          <div className="p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <Zap className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2">E-Commerce</h3>
            <p className="text-sm text-muted-foreground">Organize product data from suppliers, catalogs, and market listings.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to transform your data?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore how Strucxio works or book a personalized demo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/demo">
            <Button size="lg">Learn More</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">Schedule Demo</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

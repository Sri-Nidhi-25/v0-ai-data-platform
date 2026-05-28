'use client'

import { Button } from '@/components/ui/button'
import { SimpleExample } from '@/components/sections/simple-example'
import { ValueProps } from '@/components/sections/value-props'
import { Pipeline } from '@/components/sections/pipeline'
import { TrustIndicators } from '@/components/sections/trust-indicators'
import Link from 'next/link'
import { ArrowRight, Briefcase, Scale, Shield, Zap, FileSearch, Layers, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <main className="pb-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by teams worldwide
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Transform messy documents into clean, structured data
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
            Stop manual data entry forever. Upload any document—PDFs, images, spreadsheets—and get
            structured, searchable data in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/demo">
              <Button size="lg" className="gap-2 h-12 px-8 text-base">
                See It In Action <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                Book a Demo
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground pt-2">
            No setup required. Start processing files instantly.
          </p>
        </div>
      </section>

      {/* Trust Stats */}
      <TrustIndicators />

      {/* Simple Example */}
      <SimpleExample />

      {/* What Can You Do Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What can Strucxio do for you?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful data extraction for every industry and use case
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 hover:shadow-lg transition-all">
            <FileSearch className="w-10 h-10 text-blue-500 mb-6" />
            <h3 className="font-semibold text-xl mb-3">Extract Key Data</h3>
            <p className="text-muted-foreground leading-relaxed">
              Automatically identify and extract names, dates, amounts, addresses, and
              any structured information from unstructured documents.
            </p>
          </div>
          <div className="p-8 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 hover:shadow-lg transition-all">
            <Layers className="w-10 h-10 text-blue-500 mb-6" />
            <h3 className="font-semibold text-xl mb-3">Normalize & Clean</h3>
            <p className="text-muted-foreground leading-relaxed">
              Standardize formats, correct typos, and unify inconsistent data patterns
              across thousands of documents in one go.
            </p>
          </div>
          <div className="p-8 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 hover:shadow-lg transition-all">
            <Zap className="w-10 h-10 text-blue-500 mb-6" />
            <h3 className="font-semibold text-xl mb-3">Export Instantly</h3>
            <p className="text-muted-foreground leading-relaxed">
              Download clean JSON, CSV, or Excel files. Connect directly to your
              database or integrate with your existing workflows via API.
            </p>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <ValueProps />

      {/* Pipeline */}
      <Pipeline />

      {/* Who Is It For */}
      <section className="py-20 px-4 max-w-6xl mx-auto bg-muted/30 rounded-lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for teams that need accurate data</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powering data extraction across industries
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-md transition-all">
              <Briefcase className="w-9 h-9 text-blue-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">HR & Recruitment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Parse resumes, job applications, and candidate profiles at scale.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-md transition-all">
              <Scale className="w-9 h-9 text-blue-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Legal</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Extract clauses, parties, and dates from contracts and agreements.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-md transition-all">
              <Shield className="w-9 h-9 text-blue-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Finance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Process invoices, receipts, bank statements, and expense reports.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border/50 bg-card hover:shadow-md transition-all">
              <Zap className="w-9 h-9 text-blue-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">E-Commerce</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Organize product catalogs, supplier data, and order information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center p-12 rounded-xl border border-border/50 bg-card">
          <div className="text-4xl mb-6">"</div>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed italic">
            Strucxio saved us weeks of manual data entry. What used to take our team 40 hours
            now takes 40 minutes. The extraction quality is remarkable.
          </p>
          <div>
            <p className="font-semibold text-lg">Sarah Chen</p>
            <p className="text-sm text-muted-foreground">Head of Operations, TechCorp</p>
          </div>
        </div>
      </section>

      {/* Dashboard Access Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 dark:border-blue-900/50 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access your dashboard to process files, view analytics, and manage your data extraction at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="gap-2">
                Access Dashboard <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">See your documents transform</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          From messy PDFs to clean, structured JSON—all in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/demo">
            <Button size="lg" className="gap-2">
              Try It Now <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">Schedule a Demo</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

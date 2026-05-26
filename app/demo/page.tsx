'use client'

import { FocusedShowcase } from '@/components/sections/focused-showcase'
import { Dashboard } from '@/components/sections/dashboard'
import { type JobRecord } from '@/lib/data'
import { useState } from 'react'
import { DetailModal } from '@/components/sections/detail-modal'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DemoPage() {
  const [selectedJob, setSelectedJob] = useState<JobRecord | null>(null)

  return (
    <main className="bg-background">
      {/* How It Works Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">How Strucxio Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From messy documents to clean, structured data in seconds.
          </p>
        </div>

        {/* 5-Step Process */}
        <div className="space-y-12">
          {[
            {
              num: 1,
              title: 'Upload Your Document',
              desc: 'Any format: PDF, image, spreadsheet, or text file.'
            },
            {
              num: 2,
              title: 'AI Analyzes Content',
              desc: 'Our AI reads and interprets the data, handling OCR, formatting issues, and inconsistencies.'
            },
            {
              num: 3,
              title: 'Extract & Normalize',
              desc: 'Key fields are identified, standardized, and validated with confidence scores.'
            },
            {
              num: 4,
              title: 'Verify & Refine',
              desc: 'Review extracted data with options to manually correct before export.'
            },
            {
              num: 5,
              title: 'Export & Integrate',
              desc: 'Get JSON, CSV, or integrate directly with your database. Ready to use immediately.'
            }
          ].map((step) => (
            <div key={step.num} className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                  {step.num}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Understanding The Examples */}
      <section className="py-20 px-4 max-w-6xl mx-auto bg-blue-50/50 dark:bg-blue-950/20 rounded-lg border border-blue-200/50">
        <h2 className="text-3xl font-bold mb-6">Understanding The Examples</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Left Side: Raw Input</h3>
            <p className="text-muted-foreground">
              Shows the messy, unstructured data as it appears in the original document—with formatting issues, OCR errors, or inconsistent layouts.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Right Side: Clean Output</h3>
            <p className="text-muted-foreground">
              The structured, normalized result. Each field is extracted, validated, and ready for database storage or analysis.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Confidence Score</h3>
            <p className="text-muted-foreground">
              Shows accuracy of extraction (90-99%). Higher scores mean more reliable data. You can always review and correct.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Examples */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Real Examples</h2>
          <p className="text-xl text-muted-foreground">
            Click to see three real transformations from different source types.
          </p>
        </div>
        <FocusedShowcase />
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Common Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'HR & Recruitment',
              items: ['Resume parsing', 'Job posting extraction', 'Skill identification', 'Location analysis']
            },
            {
              title: 'Finance & Accounting',
              items: ['Invoice processing', 'Receipt OCR', 'Contract data extraction', 'Expense categorization']
            },
            {
              title: 'Legal & Compliance',
              items: ['Document classification', 'Clause extraction', 'Entity recognition', 'Audit trail']
            },
            {
              title: 'E-Commerce & Retail',
              items: ['Product data entry', 'Inventory updates', 'Supplier information', 'Catalog management']
            }
          ].map((useCase) => (
            <div key={useCase.title} className="p-6 border border-border/50 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-4">{useCase.title}</h3>
              <ul className="space-y-2">
                {useCase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Browse All Extracted Records</h2>
        <Dashboard onSelectJob={setSelectedJob} />
      </section>

      {/* Detail Modal */}
      <DetailModal
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />

      {/* CTA */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to see Strucxio in action?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Book a personalized demo and let us show you how Strucxio can transform your data workflows.
        </p>
        <Link href="/contact">
          <Button size="lg">Book a Demo</Button>
        </Link>
      </section>
    </main>
  )
}

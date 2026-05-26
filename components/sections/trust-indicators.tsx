'use client'

import { Check } from 'lucide-react'

export function TrustIndicators() {
  const stats = [
    {
      number: '50+',
      label: 'Files Processed',
      description: 'In real test batch',
    },
    {
      number: '95%',
      label: 'Extraction Accuracy',
      description: 'Average confidence',
    },
    {
      number: '10+',
      label: 'Supported Formats',
      description: 'PDF, PNG, DOCX, CSV, XML, and more',
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-border/100 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

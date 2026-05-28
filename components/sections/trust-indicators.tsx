'use client'

import { Check } from 'lucide-react'

export function TrustIndicators() {
  const stats = [
    {
      number: '50+',
      label: 'Document Formats',
      description: 'PDF, images, spreadsheets, and more',
    },
    {
      number: '1000s',
      label: 'Files Processed',
      description: 'By teams worldwide',
    },
    {
      number: '95%',
      label: 'Time Saved',
      description: 'Compared to manual entry',
    },
  ]

  return (
    <section className="py-16 px-4 border-y border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

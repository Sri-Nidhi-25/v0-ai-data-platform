'use client'

import { FileText, Zap, Search, Database } from 'lucide-react'

export function KeyBenefits() {
  const benefits = [
    {
      icon: FileText,
      title: '10+ Formats',
      description: 'PDF, PNG, DOCX, CSV, XML, TXT, HTML, JPG, and more',
    },
    {
      icon: Zap,
      title: '95% Accuracy',
      description: 'AI extracts fields with high confidence scores on every file',
    },
    {
      icon: Search,
      title: 'Instant Search & Filter',
      description: 'Find candidates, skills, locations in seconds',
    },
    {
      icon: Database,
      title: 'Ready to Use Data',
      description: 'Export to CSV, JSON, or integrate via API',
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Why choose Strucxio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for teams that need to process unstructured data at scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <div
                key={i}
                className="p-8 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-border/100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

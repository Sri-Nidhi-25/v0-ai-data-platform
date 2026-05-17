'use client'

import { Card } from '@/components/ui/card'
import {
  FileText,
  Zap,
  Database,
  Search,
  CheckCircle,
} from 'lucide-react'

export function Pipeline() {
  const stages = [
    {
      icon: FileText,
      title: 'File Upload',
      description: 'PDF, DOCX, CSV, XML, Images, Text',
      step: 1,
    },
    {
      icon: Zap,
      title: 'AI Extraction',
      description: 'OCR & intelligent data extraction',
      step: 2,
    },
    {
      icon: Database,
      title: 'Normalization',
      description: 'Validate & standardize data',
      step: 3,
    },
    {
      icon: Search,
      title: 'Indexing',
      description: 'Build search & filter indexes',
      step: 4,
    },
    {
      icon: CheckCircle,
      title: 'Output',
      description: 'Clean, structured dataset',
      step: 5,
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Processing Pipeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automated, intelligent data transformation from raw files to clean datasets
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Pipeline stages */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon
              return (
                <div key={idx} className="flex flex-col items-center space-y-4">
                  {/* Step circle */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 flex items-center justify-center group hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 cursor-pointer">
                      <Icon className="w-10 h-10 text-blue-500" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {stage.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    <h3 className="font-semibold text-lg">{stage.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {stage.description}
                    </p>
                  </div>

                  {/* Arrow (except last) */}
                  {idx < stages.length - 1 && (
                    <div className="hidden md:flex md:absolute md:top-1/3 md:left-[60%] md:w-[80%] md:justify-center md:pointer-events-none">
                      <svg
                        className="w-full h-8 text-border animate-pulse"
                        viewBox="0 0 40 40"
                        fill="none"
                        stroke="currentColor"
                      >
                        <line x1="0" y1="50%" x2="90%" y2="50%" strokeWidth="1.5" />
                        <polygon points="100%,50% 85%,45% 90%,50% 85%,55%" />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Features grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Smart Extraction',
              description:
                'Advanced AI models automatically extract structured data from any document format',
              icon: '🤖',
            },
            {
              title: 'Instant Normalization',
              description:
                'Automatically standardize and validate all extracted data against templates',
              icon: '⚙️',
            },
            {
              title: 'Full-Text Search',
              description:
                'Index and make all data searchable and filterable in real-time',
              icon: '🔎',
            },
          ].map((feature, idx) => (
            <Card
              key={idx}
              className="p-6 hover:border-border transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

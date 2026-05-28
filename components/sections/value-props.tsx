'use client'

import { Card } from '@/components/ui/card'
import { Zap, Clock, ChartBar as BarChart3, FileOutput } from 'lucide-react'

export function ValueProps() {
  const props = [
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Upload a file and get structured data in seconds. No training, no setup, no waiting.'
    },
    {
      icon: FileOutput,
      title: 'Multiple Formats',
      description: 'Works with PDFs, images, Word docs, spreadsheets, and more. One platform for all your documents.'
    },
    {
      icon: Clock,
      title: 'Save Hours of Work',
      description: 'Eliminate manual data entry. What takes days by hand takes minutes with Strucxio.'
    },
    {
      icon: BarChart3,
      title: 'Export Anywhere',
      description: 'Download JSON, CSV, or Excel. Connect directly to your database via API. Ready to use immediately.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why teams choose Strucxio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fast, reliable, and built for real-world data chaos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((prop) => {
            const Icon = prop.icon
            return (
              <Card key={prop.title} className="p-6 hover:shadow-lg transition-shadow border-border/50 bg-card">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{prop.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

import { Card } from '@/components/ui/card'
import { Zap, Clock, BarChart3 } from 'lucide-react'

export function ValueProps() {
  const props = [
    {
      icon: Zap,
      title: '95% Accuracy',
      description: 'AI-powered extraction gets it right the first time, with confidence scores for every field.'
    },
    {
      icon: Clock,
      title: 'Extract in Seconds',
      description: 'No more manual data entry. Process one file or 1000 files—instantly structured.'
    },
    {
      icon: BarChart3,
      title: 'Ready for Analysis',
      description: 'Clean JSON exports, CSV downloads, or direct database integration. Use it immediately.'
    }
  ]

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {props.map((prop) => {
          const Icon = prop.icon
          return (
            <Card key={prop.title} className="p-8 hover:shadow-lg transition-shadow">
              <Icon className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
              <p className="text-muted-foreground">{prop.description}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

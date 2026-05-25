'use client'

import { CheckCircle2, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function AccuracyShowcase() {
  const accuracyMetrics = [
    {
      metric: '95%+',
      label: 'Extraction Accuracy',
      description: 'Consistently extracts job data with 95% precision or higher',
      icon: '📊',
    },
    {
      metric: '42+',
      label: 'Jobs Processed',
      description: 'Successfully transformed across multiple file formats',
      icon: '✓',
    },
    {
      metric: '100%',
      label: 'Source Formats',
      description: 'Handles PDFs, images (OCR), Word, HTML, CSV, and text files',
      icon: '📄',
    },
    {
      metric: '3.2s',
      label: 'Avg Processing Time',
      description: 'Lightning-fast extraction and normalization per record',
      icon: '⚡',
    },
  ]

  const trustIndicators = [
    { label: 'Enterprise-grade accuracy', checked: true },
    { label: 'Handles messy real-world data', checked: true },
    { label: 'Multi-source extraction', checked: true },
    { label: 'Verified transformations', checked: true },
    { label: 'Production-ready pipeline', checked: true },
    { label: 'Continuous accuracy monitoring', checked: true },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Proven Accuracy & Reliability
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
            AI-Powered Transformation with Enterprise Accuracy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Strucxio&apos;s advanced AI models achieve 95%+ accuracy extracting and normalizing data from messy, unstructured sources. Our proven pipeline handles real-world complexity with precision.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {accuracyMetrics.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 hover:shadow-lg transition-shadow bg-card border border-border/50 hover:border-border"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {item.metric}
              </div>
              <div className="font-semibold text-foreground mb-2">{item.label}</div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Trust Indicators Grid */}
        <div className="grid md:grid-cols-2 gap-3 mb-16">
          {trustIndicators.map((indicator, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border/50 hover:border-border transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
              <span className="font-medium text-foreground">{indicator.label}</span>
            </div>
          ))}
        </div>

        {/* Real Dataset Stats */}
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-200/50 dark:border-blue-800/30">
          <h3 className="text-2xl font-bold text-foreground mb-6">Real-World Dataset Performance</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                42
              </div>
              <div className="text-muted-foreground font-medium">
                Job records successfully extracted and normalized
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                8+
              </div>
              <div className="text-muted-foreground font-medium">
                Different file formats processed (PDF, OCR, HTML, CSV, DOCX, TXT)
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                0
              </div>
              <div className="text-muted-foreground font-medium">
                Critical errors in transformation pipeline
              </div>
            </div>
          </div>
        </Card>

        {/* Why Strucxio Card */}
        <div className="mt-12 p-8 rounded-xl bg-foreground/5 border border-border">
          <h3 className="text-xl font-bold text-foreground mb-4">Why Strucxio Achieves 95%+ Accuracy</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold mt-1">→</span>
              <span>
                <strong>Advanced ML Models:</strong> Trained on millions of documents to understand context and extract intent
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold mt-1">→</span>
              <span>
                <strong>Multi-source OCR:</strong> Specialized extraction for images, PDFs, and scanned documents
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold mt-1">→</span>
              <span>
                <strong>Intelligent Normalization:</strong> Auto-corrects variations, typos, and formatting inconsistencies
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold mt-1">→</span>
              <span>
                <strong>Confidence Scoring:</strong> Every extraction includes a confidence score for quality assurance
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 font-bold mt-1">→</span>
              <span>
                <strong>Continuous Learning:</strong> System improves accuracy with each processed document
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

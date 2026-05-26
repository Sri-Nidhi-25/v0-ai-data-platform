'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FocusedShowcase() {
  const [activeExample, setActiveExample] = useState(0)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const examples = [
    {
      job_id: 'JOB_001',
      title: 'Software Engineer',
      location: 'Chennai',
      experience: '2 years',
      skills: ['Python', 'SQL'],
      source_type: 'Text',
      source_file: 'JOB_001.txt',
      confidence: 90,
      raw_text: `Job Title: Software Engineer

Location: Chennai

Experience Required: 2+ years

Skills: Python, SQL, REST APIs

Employment: Full-time

Job Description: Develop backend services...`,
    },
    {
      job_id: 'JOB_009',
      title: 'DevOps Engineer',
      location: 'Pune',
      experience: '3 years',
      skills: ['AWS', 'CI/CD', 'Kubernetes'],
      source_type: 'PDF',
      source_file: 'JOB_009.pdf',
      confidence: 94,
      raw_text: `Hiring: DevOps Engineer 
 
Location: Pune 
 
Experience: 3 years 
 
Skills Required: 
AWS, Kubernetes, CI/CD pipelines 
 
Role Description: 
Manage cloud infrastructure and deployment pipelines. 
 
Responsibilities: 
• Automate deployments 
• Monitor systems 
• Ensure scalability 
 
Note: 
Weekend support may be required occasionally.`,
    },
    {
      job_id: 'JOB_025',
      title: 'Data Analyst',
      location: 'Mumbai',
      experience: '2 years',
      skills: ['SQL', 'Tableau'],
      source_type: 'Image (OCR)',
      source_file: 'JOB_25.png',
      confidence: 92,
      raw_text: `Data Analyst Role

📍 Location: Mumbai

👤 Experience: 2 Years

📊 Skills:
• SQL
• Tableau

Mail your resume to
talent@dataframe.com`,
    },
  ]

  const current = examples[activeExample]

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveExample((prev) => (prev === 0 ? examples.length - 1 : prev - 1))
    } else {
      setActiveExample((prev) => (prev === examples.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Before & After Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Strucxio extracts clean, structured data from messy real-world documents
          </p>
        </div>

        {/* Example selector */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {examples.map((example, idx) => (
            <button
              key={idx}
              onClick={() => setActiveExample(idx)}
              className={`px-6 py-3 rounded-lg font-medium transition-all border ${
                activeExample === idx
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'border-border/50 bg-card/50 text-muted-foreground hover:border-border/100'
              }`}
            >
              {example.job_id}
            </button>
          ))}
        </div>

        {/* Main showcase */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Messy Input */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Messy Raw Input</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-500 font-medium">
                {current.source_type}
              </span>
            </div>
            <div className="relative">
              <pre className="p-6 rounded-lg bg-destructive/5 border border-destructive/20 text-sm text-muted-foreground overflow-auto max-h-96 font-mono">
                {current.raw_text}
              </pre>
              <button
                onClick={() => handleCopy(current.raw_text, 0)}
                className="absolute top-4 right-4 p-2 rounded-md bg-card/80 hover:bg-card border border-border/50 transition-colors"
                title="Copy raw text"
              >
                {copiedIndex === 0 ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <p className="text-sm text-muted-foreground">Source: {current.source_file}</p>
          </div>

          {/* Right: Clean Output */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Clean Structured Data</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-500 font-medium">
                {current.confidence}% Confidence
              </span>
            </div>
            <div className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm space-y-6">
              {/* Job Title */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-1">Job Title</p>
                <h4 className="text-2xl font-bold">{current.title}</h4>
              </div>

              {/* Location */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-1">Location</p>
                <p className="text-lg font-medium">{current.location}</p>
              </div>

              {/* Experience */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-1">
                  Experience Required
                </p>
                <p className="text-lg font-medium">{current.experience}</p>
              </div>

              {/* Skills */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {current.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* JSON */}
              <div className="pt-4 border-t border-border/50">
                <details className="group cursor-pointer">
                  <summary className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    View JSON
                  </summary>
                  <div className="relative mt-3">
                    <pre className="p-3 rounded-md bg-muted/50 text-xs text-muted-foreground overflow-auto max-h-48 font-mono">
                      {JSON.stringify(
                        {
                          job_id: current.job_id,
                          title: current.title,
                          location: current.location,
                          experience_years: parseInt(current.experience),
                          skills: current.skills,
                          confidence: current.confidence,
                        },
                        null,
                        2
                      )}
                    </pre>
                    <button
                      onClick={() =>
                        handleCopy(
                          JSON.stringify(
                            {
                              job_id: current.job_id,
                              title: current.title,
                              location: current.location,
                              experience_years: parseInt(current.experience),
                              skills: current.skills,
                              confidence: current.confidence,
                            },
                            null,
                            2
                          ),
                          1
                        )
                      }
                      className="absolute top-2 right-2 p-2 rounded-md bg-card/80 hover:bg-card border border-border/50 transition-colors"
                      title="Copy JSON"
                    >
                      {copiedIndex === 1 ? (
                        <Check className="w-3 h-3 text-green-500" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate('prev')}
            className="h-10 w-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <span className="text-sm text-muted-foreground">
            Example {activeExample + 1} of {examples.length}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate('next')}
            className="h-10 w-10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ArrowRight, Copy, Check } from 'lucide-react'

export function Showcase() {
  const [showJson, setShowJson] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const messyInput = `SOFWARE ENGINR - CHENAI

We are looking for a Software Enginr with experiance in Apis, Python, and SQL.

LOCATION: Chenai, TN
EXPERIANCE: 2 yrs
EMPLOYMNT: Full‑time

RESPONSIBILITEES:
- Develop web applications
- Build REST apis  
- Database optimisation`

  const structuredOutput = {
    job_id: 'JOB_001',
    job_title: 'Software Engineer',
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    experience_years: 2,
    experience_level: 'Junior',
    employment_type: 'Full-time',
    skills: ['Python', 'REST APIs', 'SQL'],
    role_category: 'General',
  }

  const handleCopy = (field: string) => {
    navigator.clipboard.writeText(field)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            AI-Powered Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how Strucxio instantly transforms messy, unstructured data into
            clean, searchable records
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Messy Input */}
          <Card className="p-8 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/20 dark:to-orange-950/20 border-red-200/30 dark:border-red-900/30">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <h3 className="text-lg font-semibold">Messy Raw Input</h3>
              </div>
              <div className="bg-background/50 rounded-lg p-6 border border-border/50 font-mono text-sm whitespace-pre-wrap break-words text-muted-foreground max-h-96 overflow-y-auto">
                {messyInput}
              </div>
              <p className="text-sm text-muted-foreground text-center pt-4">
                From PDF, OCR, screenshots, or corrupted text files
              </p>
            </div>
          </Card>

          {/* Structured Output */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200/30 dark:border-green-900/30">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <h3 className="text-lg font-semibold">Structured Output</h3>
                </div>

                {/* Display fields */}
                <div className="space-y-4">
                  {/* Job Title */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase">
                      Job Title
                    </p>
                    <div
                      className="flex items-center justify-between gap-2 p-3 rounded-lg bg-background/50 border border-border/50 cursor-pointer hover:bg-background transition-colors group"
                      onClick={() => handleCopy(structuredOutput.job_title)}
                    >
                      <p className="font-semibold">{structuredOutput.job_title}</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        {copiedField === structuredOutput.job_title ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase">
                      Location
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">
                        {structuredOutput.city}
                      </Badge>
                      <Badge variant="outline">
                        {structuredOutput.state}
                      </Badge>
                      <Badge variant="outline">
                        {structuredOutput.country}
                      </Badge>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase">
                      Experience
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200/30 dark:border-blue-900/30">
                        {structuredOutput.experience_level}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {structuredOutput.experience_years} years
                      </span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase">
                      Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {structuredOutput.skills.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200/30 dark:border-purple-900/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Employment Type */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase">
                      Employment Type
                    </p>
                    <Badge variant="secondary">{structuredOutput.employment_type}</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* JSON Toggle */}
            <button
              onClick={() => setShowJson(!showJson)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors text-sm font-medium"
            >
              <ArrowRight
                className={`w-4 h-4 transition-transform ${
                  showJson ? 'rotate-90' : ''
                }`}
              />
              {showJson ? 'Hide JSON' : 'View JSON'}
            </button>

            {showJson && (
              <Card className="p-6 bg-background/50 border-border/50 animate-in fade-in-50 duration-300">
                <pre className="text-xs overflow-x-auto font-mono text-muted-foreground leading-relaxed">
                  {JSON.stringify(structuredOutput, null, 2)}
                </pre>
              </Card>
            )}
          </div>
        </div>

        {/* Transformation Flow */}
        <div className="mt-16 grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
          {[
            { label: 'Unstructured', icon: '📄' },
            { label: 'Extracted', icon: '✨' },
            { label: 'Normalized', icon: '🔧' },
            { label: 'Indexed', icon: '🔍' },
            { label: 'Queryable', icon: '⚡' },
          ].map((step, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-3xl md:text-4xl">{step.icon}</div>
              <p className="text-xs md:text-sm font-medium text-muted-foreground">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { Card } from '@/components/ui/card'
import { Copy, CircleCheck as CheckCircle2, Zap } from 'lucide-react'
import { useState } from 'react'

export function SimpleExample() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const messy = `Data Analyst Role
📍 Location: Mumbai
⏱️ Experience: 2 Years
🎯 Skills: SQL Tableau`

  const clean = {
    job_title: 'Data Analyst',
    location: 'Mumbai',
    experience_years: 2,
    skills: ['SQL', 'Tableau']
  }

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Watch data transform in real-time</h2>
        <p className="text-xl text-muted-foreground">
          See how messy, unstructured documents become clean, structured records
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Messy Input */}
        <Card className="p-8 border-red-200/50 bg-red-50/30 dark:bg-red-950/20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <h3 className="font-semibold text-sm">Raw Input (Messy)</h3>
          </div>
          <div className="bg-background/60 p-4 rounded border border-border/50 font-mono text-sm text-muted-foreground mb-4 whitespace-pre-wrap break-words">
            {messy}
          </div>
          <button
            onClick={() => handleCopy(messy, 'raw')}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied === 'raw' ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </button>
        </Card>

        {/* Clean Output */}
        <Card className="p-8 border-green-200/50 bg-green-50/30 dark:bg-green-950/20">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-green-500" />
            <h3 className="font-semibold text-sm">Structured Output</h3>
          </div>
          <div className="space-y-3 mb-6">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Job Title</p>
              <p className="text-lg font-semibold">{clean.job_title}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
              <p className="text-lg font-semibold">{clean.location}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Experience</p>
              <p className="text-lg font-semibold">{clean.experience_years} years</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Skills</p>
              <div className="flex gap-2 mt-2">
                {clean.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-950/50 text-blue-900 dark:text-blue-100 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={() => handleCopy(JSON.stringify(clean, null, 2), 'json')}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied === 'json' ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy JSON
              </>
            )}
          </button>
        </Card>
      </div>

      <div className="mt-12 p-6 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          <strong>Want to see how this works in detail?</strong> Visit our <a href="/demo" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">How It Works</a> page for a complete walkthrough.
        </p>
      </div>
    </section>
  )
}

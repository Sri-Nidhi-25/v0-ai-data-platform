'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { type JobRecord } from '@/lib/data'
import { X, Copy, Check, ChevronDown } from 'lucide-react'

interface DetailModalProps {
  job: JobRecord | null
  isOpen: boolean
  onClose: () => void
}

export function DetailModal({ job, isOpen, onClose }: DetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'raw' | 'json' | 'metadata'>('overview')
  const [copiedText, setCopiedText] = useState<string | null>(null)

  if (!isOpen || !job) return null

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(type)
    setTimeout(() => setCopiedText(null), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border-border/50">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border/50 bg-card/50">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{job.display_title}</h2>
            <p className="text-sm text-muted-foreground">{job.source_file}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors ml-4"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 px-6 border-b border-border/50 bg-muted/30 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'raw', label: 'Raw Input' },
            { id: 'json', label: 'Structured JSON' },
            { id: 'metadata', label: 'Metadata' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Title */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
                    Job Title
                  </p>
                  <p className="text-lg font-semibold">{job.job_title}</p>
                </div>

                {/* Experience */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
                    Experience
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200/30 dark:border-blue-900/30">
                      {job.experience_level}
                    </Badge>
                    <span className="text-sm">{job.experience_years} years</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
                  Location
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{job.city}</Badge>
                  <Badge variant="outline">{job.state}</Badge>
                  <Badge variant="outline">{job.country}</Badge>
                </div>
              </div>

              {/* Skills */}
              {job.skills.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
                    Skills (Normalized)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200/30 dark:border-purple-900/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Raw Skills */}
              {job.skills_raw.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
                    Skills (Raw/Extracted)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills_raw.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-orange-600 dark:text-orange-400 border-orange-200/30 dark:border-orange-900/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Details */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-1">
                    Employment Type
                  </p>
                  <p className="text-sm">{job.employment_type}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-1">
                    Role Category
                  </p>
                  <p className="text-sm">{job.role_category}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-1">
                    Method
                  </p>
                  <p className="text-sm capitalize">{job.method_used}</p>
                </div>
              </div>

              {/* Tags */}
              {job.tags.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
                    All Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Raw Input Tab */}
          {activeTab === 'raw' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Original Raw Input</h3>
                {job.raw_input && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopy(job.raw_input || '', 'raw')}
                    className="gap-2"
                  >
                    {copiedText === 'raw' ? (
                      <>
                        <Check className="w-4 h-4" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" /> Copy
                      </>
                    )}
                  </Button>
                )}
              </div>
              <div className="bg-background/50 rounded-lg p-6 border border-border/50 font-mono text-sm whitespace-pre-wrap break-words text-muted-foreground max-h-96 overflow-y-auto">
                {job.raw_input || 'No raw input available'}
              </div>
            </div>
          )}

          {/* JSON Tab */}
          {activeTab === 'json' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Structured JSON Output</h3>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    handleCopy(
                      JSON.stringify(
                        {
                          job_id: job.job_id,
                          job_title: job.job_title,
                          city: job.city,
                          state: job.state,
                          country: job.country,
                          experience_years: job.experience_years,
                          experience_level: job.experience_level,
                          employment_type: job.employment_type,
                          role_category: job.role_category,
                          skills: job.skills,
                          source_type: job.source_type,
                          source_file: job.source_file,
                          method_used: job.method_used,
                        },
                        null,
                        2
                      ),
                      'json'
                    )
                  }
                  className="gap-2"
                >
                  {copiedText === 'json' ? (
                    <>
                      <Check className="w-4 h-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Copy
                    </>
                  )}
                </Button>
              </div>
              <div className="bg-background/50 rounded-lg p-6 border border-border/50 font-mono text-sm whitespace-pre-wrap break-words text-muted-foreground max-h-96 overflow-y-auto">
                {JSON.stringify(
                  {
                    job_id: job.job_id,
                    job_title: job.job_title,
                    city: job.city,
                    state: job.state,
                    country: job.country,
                    experience_years: job.experience_years,
                    experience_level: job.experience_level,
                    employment_type: job.employment_type,
                    role_category: job.role_category,
                    skills: job.skills,
                    skills_raw: job.skills_raw,
                    source_type: job.source_type,
                    source_file: job.source_file,
                    method_used: job.method_used,
                    tags: job.tags,
                    search_tokens: job.search_tokens,
                  },
                  null,
                  2
                )}
              </div>
            </div>
          )}

          {/* Metadata Tab */}
          {activeTab === 'metadata' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-4 bg-muted/30 border-border/50">
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
                    Source File
                  </p>
                  <p className="font-mono text-sm">{job.source_file}</p>
                </Card>

                <Card className="p-4 bg-muted/30 border-border/50">
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
                    Source Type
                  </p>
                  <p className="font-mono text-sm">{job.source_type}</p>
                </Card>

                <Card className="p-4 bg-muted/30 border-border/50">
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
                    Processing Method
                  </p>
                  <p className="font-mono text-sm capitalize">{job.method_used}</p>
                </Card>

                <Card className="p-4 bg-muted/30 border-border/50">
                  <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
                    Job ID
                  </p>
                  <p className="font-mono text-sm">{job.job_id}</p>
                </Card>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Data Transformation</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50">
                    <span className="text-sm">Raw Skills Count</span>
                    <Badge variant="outline">{job.skills_raw.length}</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50">
                    <span className="text-sm">Normalized Skills Count</span>
                    <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-200/30 dark:border-green-900/30">
                      {job.skills.length}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50">
                    <span className="text-sm">Generated Tags</span>
                    <Badge variant="outline">{job.tags.length}</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50">
                    <span className="text-sm">Search Tokens</span>
                    <Badge variant="outline">{job.search_tokens.length}</Badge>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

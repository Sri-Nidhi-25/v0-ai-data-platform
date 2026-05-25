'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'

export function TransformationGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const transformations = [
    {
      id: 1,
      title: 'Data Analyst (OCR from Image)',
      source: 'Image (OCR)',
      before: {
        text: 'Data Analyst Role\n📍 Location: Mumbai\n⏱️ Experience: 2 Years\n🛠️ Skills:\n• SQL\n• Tableau\n✉️ Mail your resume to\ntalent@dataframe.com',
        fileName: 'JOB_25.png',
      },
      after: {
        title: 'Data Analyst',
        location: 'Mumbai',
        experience: '2 Years',
        level: 'Junior',
        employment: 'Full-time',
        skills: ['SQL', 'Tableau'],
      },
      accuracy: 98,
    },
    {
      id: 2,
      title: 'Software Engineer (Text Extraction)',
      source: 'Text Document',
      before: {
        text: 'Role: Software Engineer\nLocation: Chennai, Tamil Nadu\nExperience: 2 yrs\nSkills: python apis sql\nLevel: junior position',
        fileName: 'JOB_001.txt',
      },
      after: {
        title: 'Software Engineer',
        location: 'Chennai',
        experience: '2 Years',
        level: 'Junior',
        employment: 'Full-time',
        skills: ['Python', 'REST APIs', 'SQL'],
      },
      accuracy: 96,
    },
    {
      id: 3,
      title: 'DevOps Engineer (OCR from Image)',
      source: 'Image (OCR)',
      before: {
        text: 'Devepos Engr. Required\nPlace: Pune\nExp: 3+ Yrs\nTechs: aws kubernetes ci/cd docker\nType: FullTime',
        fileName: 'JOB_29.png',
      },
      after: {
        title: 'DevOps Engineer',
        location: 'Pune',
        experience: '3 Years',
        level: 'Mid',
        employment: 'Full-time',
        skills: ['AWS', 'Kubernetes', 'CI/CD', 'Docker'],
      },
      accuracy: 94,
    },
    {
      id: 4,
      title: 'Backend Developer (Word Document)',
      source: 'Word Document',
      before: {
        text: 'JOB POSTING:\nTitle: Backend Developer\nRemote/On-site: Remote\nLevel: 3 years expereince\nRequirements: Node.js Express MongoDB\nWork: Full-Time',
        fileName: 'JOB_002.docx',
      },
      after: {
        title: 'Backend Developer',
        location: 'Remote',
        experience: '3 Years',
        level: 'Mid',
        employment: 'Remote',
        skills: ['Node.js', 'Express', 'MongoDB'],
      },
      accuracy: 95,
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % transformations.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? transformations.length - 1 : prev - 1
    )
  }

  const current = transformations[activeIndex]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Real Transformations in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            See how Strucxio transforms messy, unstructured data into clean, searchable records across different file formats
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative">
          {/* Main Content */}
          <Card className="p-8 bg-card border border-border">
            {/* Example Counter */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Example {activeIndex + 1} of {transformations.length}
                </span>
              </div>
              <Badge variant="secondary">{current.source}</Badge>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-foreground mb-8">{current.title}</h3>

            {/* Before & After Split */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Before */}
              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold">
                    ✗
                  </span>
                  Messy Raw Input
                </div>
                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 font-mono text-xs text-muted-foreground whitespace-pre-wrap break-words">
                  {current.before.text}
                </div>
                <div className="text-xs text-muted-foreground mt-3 flex items-center gap-2">
                  <ImageIcon className="w-3 h-3" />
                  {current.before.fileName}
                </div>
              </div>

              {/* After */}
              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold">
                    ✓
                  </span>
                  Clean Structured Output
                </div>
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/30 space-y-3">
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-1">
                      Job Title
                    </div>
                    <div className="font-semibold text-foreground">
                      {current.after.title}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-1">
                      Location
                    </div>
                    <div className="font-medium text-foreground">
                      {current.after.location}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-1">
                      Experience & Level
                    </div>
                    <div className="font-medium text-foreground">
                      {current.after.experience} • {current.after.level}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-1">
                      Skills
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {current.after.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accuracy Badge */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30">
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Extraction Accuracy
                </div>
                <div className="text-xs text-muted-foreground">
                  Confidence score for this transformation
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {current.accuracy}%
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Previous example"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {transformations.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === activeIndex
                      ? 'bg-foreground'
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to example ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Next example"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Showing real extractions from our production dataset. Hover or click dots to explore other transformations.
          </p>
        </div>

        {/* Key Capabilities */}
        <div className="grid md:grid-cols-4 gap-4 mt-16">
          <Card className="p-6 bg-card border border-border/50">
            <div className="text-2xl font-bold text-foreground mb-2">8+</div>
            <div className="text-sm font-medium text-muted-foreground">
              Source Formats Supported
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              PDF, Image, OCR, Word, HTML, CSV, TXT
            </div>
          </Card>
          <Card className="p-6 bg-card border border-border/50">
            <div className="text-2xl font-bold text-foreground mb-2">42+</div>
            <div className="text-sm font-medium text-muted-foreground">
              Real Documents Processed
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Live dataset with real-world messy data
            </div>
          </Card>
          <Card className="p-6 bg-card border border-border/50">
            <div className="text-2xl font-bold text-foreground mb-2">95%+</div>
            <div className="text-sm font-medium text-muted-foreground">
              Average Accuracy
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Consistently high precision across formats
            </div>
          </Card>
          <Card className="p-6 bg-card border border-border/50">
            <div className="text-2xl font-bold text-foreground mb-2">Auto</div>
            <div className="text-sm font-medium text-muted-foreground">
              Quality Assurance
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Built-in confidence scoring system
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

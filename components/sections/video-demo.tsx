'use client'

import { Play } from 'lucide-react'

export function VideoDemo() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            See Strucxio in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how Strucxio transforms messy files into structured, searchable data
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden border border-border/50">
          {/* Video placeholder with play button */}
          <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center group cursor-pointer relative">
            {/* Placeholder for embedded video */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1"
              title="Strucxio Data Extraction Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Embedded demo video (YouTube). Shows: Upload messy file → See raw OCR text → View structured JSON with confidence scores
        </p>
      </div>
    </section>
  )
}

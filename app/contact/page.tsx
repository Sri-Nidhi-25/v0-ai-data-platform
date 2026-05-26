'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'strucxio-demo-discovery-call' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (integrate with email service)
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions about Strucxio? Want to see a custom demo? We're here to help.
        </p>
      </section>



      {/* Contact Form & Calendly */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background resize-none"
                  placeholder="Tell us about your data needs..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                {submitted ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Cal.com Embed */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Schedule a Demo</h2>
            <div className="bg-card border border-border/50 rounded-lg overflow-hidden">
              <div style={{ width: '100%', height: '600px', overflow: 'hidden' }}>
                <Cal 
                  namespace="strucxio-demo-discovery-call"
                  calLink="srinidhi25/strucxio-demo-discovery-call"
                  style={{ width: '100%', height: '100%', overflow: 'auto' }}
                  config={{ layout: 'month_view', useSlotsViewOnSmallScreen: true }}
                />
              </div>
              <p className="text-xs text-muted-foreground p-4 text-center border-t border-border/50">
                Typical demo is 30 minutes. You can cancel or reschedule anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How accurate is Strucxio?',
              a: 'Strucxio achieves 95%+ accuracy across different document types. Each extraction includes a confidence score, and you can always review and correct before export.'
            },
            {
              q: 'What file formats do you support?',
              a: 'We support PDF, images (JPG, PNG), spreadsheets (CSV, XLS), text files, Word documents, and HTML. If you need another format, contact us.'
            },
            {
              q: 'How quickly can I start?',
              a: 'Strucxio works immediately. Upload a document, and get structured data in seconds. No setup, training, or onboarding required.'
            },
            {
              q: 'Is my data secure?',
              a: 'Yes. Data is encrypted in transit and at rest. We do not store documents longer than needed for processing. Enterprise security is available.'
            },
            {
              q: 'Can I integrate with my existing tools?',
              a: 'Absolutely. Strucxio exports to JSON, CSV, and integrates via API. Works with databases, BI tools, and custom workflows.'
            },
            {
              q: 'Whats included in a demo?',
              a: 'A 30-minute walkthrough covering how Strucxio works, real examples specific to your use case, Q&A, and pricing discussion.'
            }
          ].map((faq, idx) => (
            <details key={idx} className="border border-border/50 rounded-lg p-6 cursor-pointer group hover:bg-card/50 transition-colors">
              <summary className="font-semibold flex justify-between items-center">
                {faq.q}
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}

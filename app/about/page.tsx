import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Target, Users, Zap, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">About Strucxio</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We&apos;re building the simplest way to transform messy documents into clean, structured data.
        </p>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Data extraction shouldn&apos;t be a bottleneck. Companies spend thousands of hours manually copying information from documents, spreadsheets, and forms—work that machines should handle instantly.
            </p>
            <p className="text-lg text-muted-foreground">
              Strucxio exists to eliminate that waste. We make it effortless for organizations to extract, normalize, and structure data from any document in seconds with 95%+ accuracy.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-border/50">
            <Target className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Focus on what matters</h3>
            <p className="text-muted-foreground">
              Stop wasting time on manual data entry. Let Strucxio handle the extraction so your team can focus on strategy and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <Zap className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Simplicity</h3>
            <p className="text-muted-foreground">
              Technology should be invisible. Strucxio works instantly without setup, training, or complex configurations.
            </p>
          </div>
          <div className="p-8 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <TrendingUp className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Reliability</h3>
            <p className="text-muted-foreground">
              Your data is critical. We achieve 95%+ accuracy and give you confidence scores for every extraction.
            </p>
          </div>
          <div className="p-8 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <Users className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Support</h3>
            <p className="text-muted-foreground">
              Your success is our success. We provide hands-on support and continuous improvements based on your feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border border-border/50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Built by Accentuators</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strucxio is developed by Accentuators, a team passionate about solving real business problems with smart technology.
          </p>
        </div>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
          <p>
            We understand the pain of manual data workflows. Our team has worked across HR, Finance, Legal, and E-Commerce industries, helping companies streamline their processes. That experience led us to build Strucxio.
          </p>
          <p>
            Today, we&apos;re focused on making Strucxio the most reliable and user-friendly data extraction platform. We listen to our customers, iterate quickly, and continuously improve the product.
          </p>
        </div>
      </section>

      {/* Why Strucxio */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Strucxio?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-500 text-white">
                ✓
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Zero Setup Required</h3>
              <p className="text-muted-foreground">
                Start extracting data in seconds. No API keys, no training, no onboarding. Just upload and go.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-500 text-white">
                ✓
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">95%+ Accuracy</h3>
              <p className="text-muted-foreground">
                Every extraction includes a confidence score. Review and correct with one click if needed.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-500 text-white">
                ✓
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Instant Integration</h3>
              <p className="text-muted-foreground">
                Export to JSON, CSV, or connect via API to your database, CRM, or BI tool.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-500 text-white">
                ✓
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Secure & Compliant</h3>
              <p className="text-muted-foreground">
                Data encrypted in transit and at rest. Enterprise security available. We don&apos;t store documents longer than needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to transform your data?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          See Strucxio in action with a personalized demo or start extracting data today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/demo">
            <Button size="lg" className="gap-2">
              See How It Works <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Book a Demo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

'use client'

import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Upload, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'

const batches = [
  {
    id: 1,
    name: 'Q4 Recruitment Drive',
    description: 'Resume and job listing extraction',
    files: 45,
    accuracy: 96.2,
    status: 'completed',
    date: '2024-05-20',
    successRate: 44,
  },
  {
    id: 2,
    name: 'Invoice Processing Batch',
    description: 'Financial document extraction',
    files: 67,
    accuracy: 94.8,
    status: 'completed',
    date: '2024-05-18',
    successRate: 66,
  },
  {
    id: 3,
    name: 'Contract Analysis',
    description: 'Legal document extraction',
    files: 30,
    accuracy: 95.1,
    status: 'completed',
    date: '2024-05-15',
    successRate: 29,
  },
]

export default function BatchesPage() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Batches</h1>
            <p className="text-muted-foreground mt-1">Manage your data extraction batches</p>
          </div>
          <Button className="gap-2">
            <Upload className="w-4 h-4" />
            New Batch
          </Button>
        </div>

        <div className="space-y-4">
          {batches.map((batch) => (
            <Card key={batch.id} className="p-6 border-border/50 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{batch.name}</h3>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Completed
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{batch.description}</p>
                  
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Files Processed</p>
                      <p className="text-lg font-semibold">{batch.files}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Accuracy</p>
                      <p className="text-lg font-semibold">{batch.accuracy}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Success Rate</p>
                      <p className="text-lg font-semibold">{batch.successRate}/{batch.files}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Date</p>
                      <p className="text-lg font-semibold text-sm">{batch.date}</p>
                    </div>
                  </div>
                </div>

                <div className="ml-4">
                  <Link href={`/dashboard/batches/${batch.id}`}>
                    <Button>View Details</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

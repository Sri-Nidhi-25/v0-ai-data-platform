'use client'

import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { label: 'Total Batches', value: '3', icon: FileText, color: 'blue' },
  { label: 'Successful Extractions', value: '142', icon: CheckCircle, color: 'green' },
  { label: 'Avg Accuracy', value: '95.3%', icon: CheckCircle, color: 'green' },
  { label: 'Pending Review', value: '8', icon: AlertCircle, color: 'yellow' },
]

const recentBatches = [
  {
    id: 1,
    name: 'Q4 Recruitment Drive',
    files: 45,
    accuracy: 96.2,
    status: 'completed',
    date: '2024-05-20',
  },
  {
    id: 2,
    name: 'Invoice Processing Batch',
    files: 67,
    accuracy: 94.8,
    status: 'completed',
    date: '2024-05-18',
  },
  {
    id: 3,
    name: 'Contract Analysis',
    files: 30,
    accuracy: 95.1,
    status: 'completed',
    date: '2024-05-15',
  },
]

export default function DashboardHome() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back, admin</p>
          </div>
          <Button className="gap-2">
            <Upload className="w-4 h-4" />
            New Batch
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            const bgColor = stat.color === 'blue' ? 'bg-blue-50 dark:bg-blue-950/20' : 
                           stat.color === 'green' ? 'bg-green-50 dark:bg-green-950/20' : 
                           'bg-yellow-50 dark:bg-yellow-950/20'
            const iconColor = stat.color === 'blue' ? 'text-blue-500' : 
                            stat.color === 'green' ? 'text-green-500' : 
                            'text-yellow-500'

            return (
              <Card key={stat.label} className={`p-6 ${bgColor} border-border/50`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
              </Card>
            )
          })}
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Recent Batches</h2>
            <Link href="/dashboard/batches">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </div>
          
          <div className="bg-card border border-border/50 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-muted/30">
                  <th className="text-left px-6 py-3 text-sm font-semibold">Name</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold">Files</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold">Accuracy</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold">Status</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold">Date</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentBatches.map((batch) => (
                  <tr key={batch.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4 text-sm">{batch.name}</td>
                    <td className="px-6 py-4 text-sm">{batch.files}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400">
                        <CheckCircle className="w-3 h-3" />
                        {batch.accuracy}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 text-xs font-medium">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{batch.date}</td>
                    <td className="px-6 py-4 text-sm">
                      <Link href={`/dashboard/batches/${batch.id}`}>
                        <Button variant="ghost" size="sm">View</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

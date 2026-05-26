'use client'

import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Card } from '@/components/ui/card'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const accuracyData = [
  { month: 'Jan', accuracy: 92.5 },
  { month: 'Feb', accuracy: 93.2 },
  { month: 'Mar', accuracy: 94.1 },
  { month: 'Apr', accuracy: 94.8 },
  { month: 'May', accuracy: 95.3 },
]

const volumeData = [
  { date: 'Week 1', files: 120, extracted: 118 },
  { date: 'Week 2', files: 150, extracted: 147 },
  { date: 'Week 3', files: 180, extracted: 175 },
  { date: 'Week 4', files: 200, extracted: 197 },
]

const docTypeData = [
  { name: 'Resumes', value: 285, color: '#3b82f6' },
  { name: 'Invoices', value: 245, color: '#10b981' },
  { name: 'Contracts', value: 180, color: '#f59e0b' },
  { name: 'Others', value: 90, color: '#8b5cf6' },
]

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Analytics</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border-border/50">
            <p className="text-sm text-muted-foreground mb-1">Total Files Processed</p>
            <p className="text-3xl font-bold">800</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-2">+12% from last month</p>
          </Card>
          <Card className="p-6 border-border/50">
            <p className="text-sm text-muted-foreground mb-1">Avg Extraction Time</p>
            <p className="text-3xl font-bold">2.3s</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-2">-0.5s improvement</p>
          </Card>
          <Card className="p-6 border-border/50">
            <p className="text-sm text-muted-foreground mb-1">Success Rate</p>
            <p className="text-3xl font-bold">98.5%</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-2">+1.2% improvement</p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="p-6 border-border/50">
            <h3 className="font-semibold mb-4">Accuracy Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={accuracyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[90, 96]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 border-border/50">
            <h3 className="font-semibold mb-4">Processing Volume</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="files" fill="#3b82f6" />
                <Bar dataKey="extracted" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 border-border/50 md:col-span-2">
            <h3 className="font-semibold mb-4">Document Type Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={docTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {docTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

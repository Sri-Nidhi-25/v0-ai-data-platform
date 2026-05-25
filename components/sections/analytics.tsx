'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getAnalyticsData } from '@/lib/data'
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export function Analytics() {
  const analytics = getAnalyticsData()

  const skillData = Object.entries(analytics.skillFrequency)
    .map(([skill, count]) => ({
      name: skill,
      value: count,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8)

  const experienceData = Object.entries(analytics.experienceLevelCount).map(
    ([level, count]) => ({
      name: level,
      value: count,
    })
  )

  const sourceTypeData = Object.entries(analytics.sourceTypeCount).map(
    ([type, count]) => ({
      name: type,
      value: count,
    })
  )

  const COLORS = [
    '#3b82f6',
    '#8b5cf6',
    '#ec4899',
    '#f59e0b',
    '#10b981',
    '#06b6d4',
    '#f97316',
    '#6366f1',
  ]

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Dataset Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep analytics on your processed data
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          <Card className="p-6 border-border/50">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Total Records
            </p>
            <p className="text-4xl font-bold">{analytics.totalJobs}</p>
            <p className="text-xs text-muted-foreground mt-2">Processed jobs</p>
          </Card>
          <Card className="p-6 border-border/50">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Unique Skills
            </p>
            <p className="text-4xl font-bold">{analytics.uniqueSkills}</p>
            <p className="text-xs text-muted-foreground mt-2">Extracted</p>
          </Card>
          <Card className="p-6 border-border/50">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Locations
            </p>
            <p className="text-4xl font-bold">{analytics.uniqueLocations}</p>
            <p className="text-xs text-muted-foreground mt-2">Geographic</p>
          </Card>
          <Card className="p-6 border-border/50">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Accuracy
            </p>
            <p className="text-4xl font-bold">{analytics.accuracy}%</p>
            <p className="text-xs text-muted-foreground mt-2">Extraction</p>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Skills Chart */}
          <Card className="p-6 border-border/50">
            <h3 className="text-lg font-semibold mb-6">Top Skills</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Experience Level */}
          <Card className="p-6 border-border/50">
            <h3 className="text-lg font-semibold mb-6">Experience Levels</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={experienceData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {experienceData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Source Types and Employment Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Source Types */}
          <Card className="p-6 border-border/50">
            <h3 className="text-lg font-semibold mb-6">Source Types</h3>
            <div className="space-y-3">
              {sourceTypeData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge
                      className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200/30 dark:border-blue-900/30"
                      variant="outline"
                    >
                      {item.name}
                    </Badge>
                  </div>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Employment Types */}
          <Card className="p-6 border-border/50">
            <h3 className="text-lg font-semibold mb-6">Employment Types</h3>
            <div className="space-y-3">
              {Object.entries(analytics.employmentTypeCount).map(
                ([type, count]) => (
                  <div key={type} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge
                        className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200/30 dark:border-purple-900/30"
                        variant="outline"
                      >
                        {type}
                      </Badge>
                    </div>
                    <span className="font-semibold">{count}</span>
                  </div>
                )
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

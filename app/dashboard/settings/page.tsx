'use client'

import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const [copiedKey, setCopiedKey] = useState(null)

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  return (
    <DashboardLayout>
      <div className="p-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground mb-8">Manage your account and integrations</p>

        {/* Profile Settings */}
        <Card className="p-6 border-border/50 mb-8">
          <h2 className="text-xl font-bold mb-6">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                value="admin"
                disabled
                className="w-full px-4 py-2 border border-border rounded-lg bg-muted/50 disabled:opacity-60"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="admin@strucxio.com"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button className="w-full md:w-auto">Save Changes</Button>
          </div>
        </Card>

        {/* API Keys */}
        <Card className="p-6 border-border/50 mb-8">
          <h2 className="text-xl font-bold mb-6">API Keys</h2>
          <p className="text-sm text-muted-foreground mb-4">Use these keys to authenticate API requests</p>
          
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg border border-border/50">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">Production Key</p>
                <span className="text-xs px-2 py-1 rounded-full bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400">Active</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-sm bg-background px-3 py-2 rounded border border-border/50 truncate">
                  sk_live_a1b2c3d4e5f6g7h8i9j0
                </code>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard('sk_live_a1b2c3d4e5f6g7h8i9j0', 'prod')}
                >
                  {copiedKey === 'prod' ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg border border-border/50">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">Test Key</p>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400">Test</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-sm bg-background px-3 py-2 rounded border border-border/50 truncate">
                  sk_test_x1y2z3a4b5c6d7e8f9g0
                </code>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard('sk_test_x1y2z3a4b5c6d7e8f9g0', 'test')}
                >
                  {copiedKey === 'test' ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Webhooks */}
        <Card className="p-6 border-border/50">
          <h2 className="text-xl font-bold mb-6">Webhooks</h2>
          <p className="text-sm text-muted-foreground mb-4">Configure webhooks to receive real-time notifications</p>
          
          <div className="p-4 bg-muted/50 rounded-lg border border-dashed border-border/50 text-center">
            <p className="text-sm text-muted-foreground mb-4">No webhooks configured</p>
            <Button variant="outline">Add Webhook</Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}

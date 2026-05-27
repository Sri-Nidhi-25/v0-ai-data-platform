'use client'

import { useAuth } from '@/hooks/use-auth'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FileText, BarChart3, Settings, LogOut, ChevronDown, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { useState, useEffect } from 'react'

export function Sidebar() {
  const { logout, user } = useAuth()
  const pathname = usePathname()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Load sidebar state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('sidebar_collapsed')
    if (saved) setIsCollapsed(JSON.parse(saved))
  }, [])

  const toggleSidebar = () => {
    const newState = !isCollapsed
    setIsCollapsed(newState)
    localStorage.setItem('sidebar_collapsed', JSON.stringify(newState))
  }

  const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Batches', href: '/dashboard/batches', icon: FileText },
    { label: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { label: 'Settings', href: '/dashboard/settings', icon: Settings },
  ]

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <aside className={`bg-card border-r border-border/50 h-screen fixed left-0 top-0 flex flex-col transition-all duration-300 ease-out ${
      isCollapsed ? 'w-20' : 'w-64'
    }`}>
      <div className={`p-6 border-b border-border/50 flex items-center justify-between ${isCollapsed ? 'p-4' : ''}`}>
        <Link href="/dashboard" className={`flex items-center gap-2 font-bold hover:opacity-80 transition-opacity ${isCollapsed ? 'justify-center w-full' : 'text-lg'}`}>
          <Logo className="w-5 h-5" />
          {!isCollapsed && <span>Strucxio</span>}
        </Link>
        {!isCollapsed && (
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-lg hover:bg-muted/50 transition-colors"
            title="Collapse sidebar"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              title={isCollapsed ? item.label : ''}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors justify-center ${
                isCollapsed ? 'w-12 h-12 mx-auto' : ''
              } ${
                isActive(item.href)
                  ? 'bg-blue-500 text-white'
                  : 'text-muted-foreground hover:bg-muted/50'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      <div className={`border-t border-border/50 space-y-4 ${isCollapsed ? 'p-2' : 'p-4'}`}>
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            title={isCollapsed ? user?.username : ''}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-muted/50 transition-colors text-left ${
              isCollapsed ? 'justify-center px-2' : 'justify-between'
            }`}
          >
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user?.username}</p>
                <p className="text-xs text-muted-foreground">Admin</p>
              </div>
            )}
            {!isCollapsed && <ChevronDown className={`w-4 h-4 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />}
            {isCollapsed && <LogOut className="w-4 h-4" onClick={logout} title="Logout" />}
          </button>

          {showUserMenu && !isCollapsed && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-popover border border-border/50 rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={logout}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-left"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

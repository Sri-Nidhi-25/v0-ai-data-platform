'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

export interface User {
  username: string
}

export function useAuth() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('strucxio_user')
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser)
        setUser(userData)
        setIsAuthenticated(true)
      } catch (error) {
        localStorage.removeItem('strucxio_user')
        setIsAuthenticated(false)
      }
    }
    setLoading(false)
  }, [])

  const login = useCallback((username: string, password: string) => {
    // Static credentials
    if (username === 'admin' && password === 'Questra') {
      const userData: User = { username }
      localStorage.setItem('strucxio_user', JSON.stringify(userData))
      setUser(userData)
      setIsAuthenticated(true)
      router.push('/dashboard')
      return true
    }
    return false
  }, [router])

  const logout = useCallback(() => {
    localStorage.removeItem('strucxio_user')
    setUser(null)
    setIsAuthenticated(false)
    router.push('/login')
  }, [router])

  return {
    user,
    loading,
    isAuthenticated,
    login,
    logout
  }
}

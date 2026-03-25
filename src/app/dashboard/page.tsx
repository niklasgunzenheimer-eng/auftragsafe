'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function DashboardPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      setEmail(user.email || '')
    }

    checkUser()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-6 mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Angemeldet als {email}</p>
          </div>

          <button
            onClick={handleLogout}
            className="border border-black px-4 py-2 rounded-xl"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <button className="bg-black text-white px-5 py-3 rounded-xl">
            Neuer Regiebericht
          </button>
        </div>
      </div>
    </main>
  )
}
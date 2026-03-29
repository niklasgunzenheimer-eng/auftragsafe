'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      setLoading(false)
    }

    checkUser()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div>Lädt...</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="absolute top-4 left-4">
        <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
          BETA
        </div>
      </div>

      <header className="w-full border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-gray-300 flex items-center justify-center text-xs text-gray-400">
              LOGO
            </div>
            <span className="font-semibold">AuftragSafe</span>
          </div>

         <div className="flex gap-3">
  <Link
    href="/regieberichte/neu"
    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
  >
    Neuer Regiebericht
  </Link>

  <Link
    href="/kunden"
    className="border px-4 py-2 rounded-lg text-sm"
  >
    Kunden
  </Link>

  <button
    onClick={handleLogout}
    className="border px-4 py-2 rounded-lg text-sm"
  >
    Logout
  </button>
</div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="border rounded-xl p-6 bg-gray-50">
            <div className="text-sm text-gray-500">Offene Berichte</div>
            <div className="text-2xl font-bold mt-2">0</div>
          </div>

          <div className="border rounded-xl p-6 bg-gray-50">
            <div className="text-sm text-gray-500">Abgeschlossene Berichte</div>
            <div className="text-2xl font-bold mt-2">0</div>
          </div>

          <div className="border rounded-xl p-6 bg-gray-50">
            <div className="text-sm text-gray-500">Gesamt</div>
            <div className="text-2xl font-bold mt-2">0</div>
          </div>
        </div>

        <div className="mt-10 border rounded-xl p-10 text-center bg-gray-50">
          <h2 className="text-lg font-semibold">
            Noch keine Regieberichte vorhanden
          </h2>

          <p className="mt-2 text-gray-600">
            Erstelle deinen ersten Bericht und lege direkt los
          </p>

          <Link
            href="/regieberichte/neu"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Ersten Regiebericht erstellen
          </Link>
        </div>
      </section>
    </main>
  )
}

'use client'

export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

type UserMeta = {
  full_name?: string
  firm_name?: string
}

export default function DashboardPage() {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [userName, setUserName] = useState('')
  const [firmName, setFirmName] = useState('')

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push('/login')
        return
      }

      const meta = (user.user_metadata || {}) as UserMeta
      setUserName(meta.full_name || '')
      setFirmName(meta.firm_name || '')
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
      <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="text-gray-500">Lade Dashboard ...</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="absolute top-4 left-4">
        <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
          BETA
        </div>
      </div>

      <header className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border-2 border-dashed border-gray-400 flex items-center justify-center text-xs font-medium text-gray-500 rounded-md">
              LOGO
            </div>
            <span className="font-bold text-lg tracking-tight">AuftragSafe</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            >
              Neuer Regiebericht
            </Link>

            <Link
              href="#"
              className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
            >
              Kunden
            </Link>

            <button
              onClick={handleLogout}
              className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-3 text-gray-600">
            Willkommen zurück
            {userName ? `, ${userName}` : ''}.
            {firmName ? ` ${firmName}` : ''} ist angemeldet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-sm font-medium text-gray-500">Offene Berichte</div>
            <div className="mt-3 text-3xl font-bold">0</div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-sm font-medium text-gray-500">Abgeschlossene Berichte</div>
            <div className="mt-3 text-3xl font-bold">0</div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-sm font-medium text-gray-500">Gesamte Berichte</div>
            <div className="mt-3 text-3xl font-bold">0</div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Letzte Regieberichte</h2>
              <p className="mt-2 text-gray-600">
                Hier erscheinen deine zuletzt erfassten Berichte.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
            <h3 className="text-lg font-semibold">Noch keine Regieberichte vorhanden</h3>
            <p className="mt-2 text-gray-600">
              Starte mit deinem ersten Bericht und erfasse Leistungen direkt digital.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="#"
                className="bg-blue-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
              >
                Ersten Regiebericht erstellen
              </Link>

              <Link
                href="#"
                className="border border-gray-300 px-5 py-3 rounded-xl font-medium hover:bg-gray-50 transition"
              >
                Kunden öffnen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

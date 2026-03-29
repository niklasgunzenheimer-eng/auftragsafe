'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setMessage('Login fehlgeschlagen. Bitte prüfe deine Daten.')
      return
    }

    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="absolute top-4 left-4">
        <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
          BETA
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Link href="/" className="text-sm text-gray-500 hover:text-blue-600">
            ← Zurück zur Startseite
          </Link>

          <h1 className="mt-6 text-4xl font-bold leading-tight">
            Willkommen zurück
            <br />
            <span className="text-blue-600">Jetzt einloggen</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-md">
            Melde dich an und verwalte deine digitalen Regieberichte direkt in AuftragSafe.
          </p>

          <div className="mt-8 space-y-4 text-sm text-gray-600">
            <div>Saubere Dokumentation ohne Papier</div>
            <div>Unterschrift direkt vor Ort</div>
            <div>Sofort nachvollziehbare Berichte</div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Login</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              required
            />

            <input
              type="password"
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              required
            />

            {message && (
              <div className="text-sm text-red-600">{message}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white rounded-xl px-4 py-3 font-medium"
            >
              {loading ? 'Lädt...' : 'Einloggen'}
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500">
            Noch kein Konto?{' '}
            <Link href="/register" className="underline">
              Jetzt registrieren
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

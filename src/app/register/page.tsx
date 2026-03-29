'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function RegisterPage() {
  const router = useRouter()

  const [firmName, setFirmName] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')

    if (password !== passwordConfirm) {
      setMessage('Passwörter stimmen nicht überein')
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firm_name: firmName,
          full_name: name,
        },
      },
    })

    setLoading(false)

    if (error) {
      setMessage(error.message)
      return
    }

    router.push('/login?registered=true')
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* BETA */}
      <div className="absolute top-4 left-4">
        <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
          BETA
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">

        {/* LINKS TEXT */}
        <div>
          <Link href="/" className="text-sm text-gray-500 hover:text-blue-600">
            ← Zurück zur Startseite
          </Link>

          <h1 className="mt-6 text-4xl font-bold leading-tight">
            Konto erstellen
            <br />
            <span className="text-blue-600">Direkt loslegen</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-md">
            Lege dein Konto an und beginne sofort mit der digitalen Erfassung
            deiner Regieberichte.
          </p>

          <div className="mt-8 space-y-4 text-sm text-gray-600">
            <div>Saubere Dokumentation ohne Papier</div>
            <div>Unterschrift direkt vor Ort</div>
            <div>Sofort abrechenbare Berichte</div>
          </div>
        </div>

        {/* RECHTS FORM */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

          <h2 className="text-xl font-semibold mb-6">Registrierung</h2>

          <form onSubmit={handleRegister} className="space-y-4">

            <input
              type="text"
              placeholder="Firmenname"
              value={firmName}
              onChange={(e) => setFirmName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              required
            />

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              required
            />

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

            <input
              type="password"
              placeholder="Passwort bestätigen"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
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
              {loading ? 'Lädt...' : 'Konto erstellen'}
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500">
            Bereits registriert?{' '}
            <Link href="/login" className="underline">
              Zum Login
            </Link>
          </p>
        </div>

      </div>
    </main>
  )
}

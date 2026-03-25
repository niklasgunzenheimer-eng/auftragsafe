'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

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
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-bold mb-6">Anmelden</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
            required
          />

          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white rounded-xl px-4 py-3"
          >
            {loading ? 'Lädt...' : 'Login'}
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-red-600">{message}</p>}

        <p className="mt-6 text-sm text-gray-600">
          Noch kein Konto?{' '}
          <Link href="/register" className="underline">
            Jetzt registrieren
          </Link>
        </p>
      </div>
    </main>
  )
}
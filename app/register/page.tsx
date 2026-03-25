'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

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
      setMessage('Die Passwörter stimmen nicht überein.')
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

    setMessage('Registrierung erfolgreich. Bitte prüfe deine E-Mails.')
    router.push('/login')
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-bold mb-6">Registrierung</h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Firmenname"
            value={firmName}
            onChange={(e) => setFirmName(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
            required
          />

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
            required
          />

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

          <input
            type="password"
            placeholder="Passwort bestätigen"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white rounded-xl px-4 py-3"
          >
            {loading ? 'Lädt...' : 'Registrieren'}
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-red-600">{message}</p>}

        <p className="mt-6 text-sm text-gray-600">
          Bereits registriert?{' '}
          <Link href="/login" className="underline">
            Zum Login
          </Link>
        </p>
      </div>
    </main>
  )
}
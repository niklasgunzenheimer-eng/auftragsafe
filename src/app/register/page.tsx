'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function RegisterPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')
    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setMessage('Registrierung fehlgeschlagen.')
      return
    }

    setMessage('Registrierung erfolgreich. Bitte bestätige deine E-Mail.')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-10">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur md:grid-cols-2">

          {/* LEFT */}
          <div className="hidden md:flex flex-col justify-between bg-white/5 p-10">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/80">
                AuftragSafe
              </div>

              <h1 className="mb-4 text-4xl font-bold leading-tight">
                Neues Konto erstellen.
              </h1>

              <p className="max-w-md text-white/70">
                Registriere dich und starte mit digitalen Regieberichten,
                klarer Dokumentation und sauberer Abrechnung.
              </p>
            </div>

            <div className="space-y-3 text-sm text-white/70">
              <div>Regieberichte digital erfassen</div>
              <div>Direkt unterschreiben lassen</div>
              <div>Alles an einem Ort</div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white p-8 text-neutral-900 md:p-10">
            <div className="mx-auto w-full max-w-md">
              <div className="mb-8">
                <h2 className="text-3xl font-bold">Registrieren</h2>
                <p className="mt-2 text-sm text-neutral-500">
                  Erstelle deinen AuftragSafe Zugang.
                </p>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">E-Mail</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@firma.de"
                    className="w-full rounded-2xl border border-neutral-200 px-4 py-3"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Passwort</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Passwort wählen"
                    className="w-full rounded-2xl border border-neutral-200 px-4 py-3"
                    required
                  />
                </div>

                {message && (
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-neutral-950 px-4 py-3 font-medium text-white hover:bg-neutral-800 disabled:opacity-60"
                >
                  {loading ? 'Registrierung läuft ...' : 'Jetzt registrieren'}
                </button>
              </form>

              <p className="mt-6 text-sm text-neutral-500">
                Schon ein Konto?{' '}
                <Link href="/login" className="font-medium text-neutral-900 underline">
                  Jetzt einloggen
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

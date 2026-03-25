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
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')

    if (!acceptedPrivacy) {
      setMessage('Bitte bestätige die Datenschutz- und Nutzungsbedingungen.')
      return
    }

    if (password !== passwordConfirm) {
      setMessage('Die Passwörter stimmen nicht überein.')
      return
    }

    if (password.length < 6) {
      setMessage('Das Passwort muss mindestens 6 Zeichen lang sein.')
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

    router.push('/login?registered=1')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-10">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur md:grid-cols-2">
          <div className="hidden md:flex flex-col justify-between bg-white/5 p-10">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/80">
                AuftragSafe
              </div>

              <h1 className="mb-4 text-4xl font-bold leading-tight">
                Sauber dokumentieren.
                <br />
                Sicher abrechnen.
              </h1>

              <p className="max-w-md text-white/70">
                Erstelle Regieberichte digital, lass direkt vor Ort unterschreiben
                und vermeide Diskussionen bei der Abrechnung.
              </p>
            </div>

            <div className="space-y-3 text-sm text-white/70">
              <div>• Digitale Regieberichte</div>
              <div>• Unterschrift direkt vor Ort</div>
              <div>• PDF und Versand im nächsten Schritt</div>
            </div>
          </div>

          <div className="bg-white p-8 text-neutral-900 md:p-10">
            <div className="mx-auto w-full max-w-md">
              <div className="mb-8">
                <h2 className="text-3xl font-bold">Registrieren</h2>
                <p className="mt-2 text-sm text-neutral-500">
                  Erstelle deinen Zugang für AuftragSafe.
                </p>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Firmenname
                  </label>
                  <input
                    type="text"
                    value={firmName}
                    onChange={(e) => setFirmName(e.target.value)}
                    placeholder="z. B. Muster Elektrotechnik GmbH"
                    className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-neutral-400"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Vor- und Nachname"
                    className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-neutral-400"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">E-Mail</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@firma.de"
                    className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-neutral-400"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Passwort</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mindestens 6 Zeichen"
                    className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-neutral-400"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Passwort bestätigen
                  </label>
                  <input
                    type="password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    placeholder="Passwort wiederholen"
                    className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-neutral-400"
                    required
                  />
                </div>

                <label className="flex items-start gap-3 rounded-2xl border border-neutral-200 p-4 text-sm text-neutral-600">
                  <input
                    type="checkbox"
                    checked={acceptedPrivacy}
                    onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                    className="mt-0.5 h-4 w-4"
                  />
                  <span>
                    Ich bestätige die Datenschutz- und Nutzungsbedingungen.
                  </span>
                </label>

                {message && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-neutral-950 px-4 py-3 font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Registrierung läuft ...' : 'Jetzt registrieren'}
                </button>
              </form>

              <p className="mt-6 text-sm text-neutral-500">
                Bereits registriert?{' '}
                <Link href="/login" className="font-medium text-neutral-900 underline">
                  Zum Login
                </Link>
              </p>

              <p className="mt-3 text-xs text-neutral-400">
                Hinweis: Je nach Supabase-Einstellung kann eine E-Mail-Bestätigung nötig sein.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
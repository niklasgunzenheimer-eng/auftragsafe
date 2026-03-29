'use client'

import Link from 'next/link'

export default function KundenPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* BETA */}
      <div className="absolute top-4 left-4">
        <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
          BETA
        </div>
      </div>

      {/* HEADER */}
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
              href="/dashboard"
              className="border px-4 py-2 rounded-lg text-sm"
            >
              Dashboard
            </Link>

            <Link
              href="/regieberichte/neu"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Neuer Regiebericht
            </Link>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Kunden</h1>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            Kunde hinzufügen
          </button>
        </div>

        {/* LISTE */}
        <div className="mt-8 border rounded-xl p-10 text-center bg-gray-50">
          <h2 className="text-lg font-semibold">
            Noch keine Kunden vorhanden
          </h2>

          <p className="mt-2 text-gray-600">
            Lege deinen ersten Kunden an, um Regieberichte sauber zuzuordnen.
          </p>
        </div>
      </section>
    </main>
  )
}

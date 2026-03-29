'use client'

import Link from 'next/link'

export default function NeuerKundePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <h1 className="text-3xl font-bold mb-6">Neuer Kunde</h1>

      <div className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Firmenname"
          className="w-full border px-4 py-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Ansprechpartner"
          className="w-full border px-4 py-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Adresse"
          className="w-full border px-4 py-3 rounded-lg"
        />

        <button className="bg-blue-600 text-white px-4 py-3 rounded-lg w-full">
          Speichern
        </button>

        <Link
          href="/kunden"
          className="block text-center text-sm text-gray-500 underline"
        >
          Zurück
        </Link>
      </div>
    </main>
  )
}

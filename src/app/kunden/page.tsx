'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function KundenPage() {
  const [search, setSearch] = useState('')

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="absolute top-4 left-4">
        <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
          BETA
        </div>
      </div>

      <header className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-gray-300 flex items-center justify-center text-xs text-gray-400 rounded">
              LOGO
            </div>
            <span className="font-semibold">AuftragSafe</span>
          </div>

          <div className="flex gap-3">
            <Link
              href="/dashboard"
              className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-50"
            >
              Dashboard
            </Link>

            <Link
              href="/kunden/neu"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
            >
              Kunde hinzufügen
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Kunden</h1>
            <p className="mt-2 text-gray-600">
              Hier verwaltest du deinen Kundenstamm.
            </p>
          </div>

          <div className="w-full md:w-80">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Kunde suchen"
              className="w-full border border-gray-300 px-4 py-3 rounded-xl bg-white"
            />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 text-sm font-semibold text-gray-500 border-b border-gray-200">
            <div className="col-span-4">Firma</div>
            <div className="col-span-3">Ansprechpartner</div>
            <div className="col-span-2">Ort</div>
            <div className="col-span-2">Telefon</div>
            <div className="col-span-1 text-right">Aktion</div>
          </div>

          <div className="border border-gray-200 rounded-2xl bg-white p-5 md:p-4">
            <div className="grid md:grid-cols-12 gap-3 md:gap-4 items-center">
              <div className="md:col-span-4">
                <div className="text-sm text-gray-400 md:hidden">Firma</div>
                <div className="font-semibold">Musterkunde GmbH</div>
              </div>

              <div className="md:col-span-3">
                <div className="text-sm text-gray-400 md:hidden">Ansprechpartner</div>
                <div>Max Mustermann</div>
              </div>

              <div className="md:col-span-2">
                <div className="text-sm text-gray-400 md:hidden">Ort</div>
                <div>Bamberg</div>
              </div>

              <div className="md:col-span-2">
                <div className="text-sm text-gray-400 md:hidden">Telefon</div>
                <div>0951 123456</div>
              </div>

              <div className="md:col-span-1 md:text-right">
                <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                  Öffnen
                </button>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl bg-white p-5 md:p-4">
            <div className="grid md:grid-cols-12 gap-3 md:gap-4 items-center">
              <div className="md:col-span-4">
                <div className="text-sm text-gray-400 md:hidden">Firma</div>
                <div className="font-semibold">Elektro Beispiel AG</div>
              </div>

              <div className="md:col-span-3">
                <div className="text-sm text-gray-400 md:hidden">Ansprechpartner</div>
                <div>Julia Beispiel</div>
              </div>

              <div className="md:col-span-2">
                <div className="text-sm text-gray-400 md:hidden">Ort</div>
                <div>Forchheim</div>
              </div>

              <div className="md:col-span-2">
                <div className="text-sm text-gray-400 md:hidden">Telefon</div>
                <div>09191 987654</div>
              </div>

              <div className="md:col-span-1 md:text-right">
                <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                  Öffnen
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border rounded-2xl p-8 text-center bg-white border-gray-200">
          <h2 className="text-lg font-semibold">Noch nicht mit echten Kundendaten verbunden</h2>
          <p className="mt-2 text-gray-600">
            Im nächsten Schritt binden wir die Kundenseite an echte Daten an.
          </p>

          <Link
            href="/kunden/neu"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Neuen Kunden anlegen
          </Link>
        </div>
      </section>
    </main>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function NeuerKundePage() {
  const [form, setForm] = useState({
    kundennummer: '',
    firma: '',
    ansprechpartner: '',
    telefon: '',
    email: '',
    strasse: '',
    plz: '',
    ort: '',
    objekt: '',
    notizen: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

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

          <Link
            href="/kunden"
            className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-50"
          >
            Zurück zu Kunden
          </Link>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">Kunde anlegen</h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">Kundendaten</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="kundennummer"
                  value={form.kundennummer}
                  onChange={handleChange}
                  placeholder="Kundennummer"
                  className="w-full border px-4 py-3 rounded-lg"
                />

                <input
                  name="firma"
                  value={form.firma}
                  onChange={handleChange}
                  placeholder="Firma"
                  className="w-full border px-4 py-3 rounded-lg"
                />

                <input
                  name="ansprechpartner"
                  value={form.ansprechpartner}
                  onChange={handleChange}
                  placeholder="Ansprechpartner"
                  className="w-full border px-4 py-3 rounded-lg"
                />

                <input
                  name="telefon"
                  value={form.telefon}
                  onChange={handleChange}
                  placeholder="Telefon"
                  className="w-full border px-4 py-3 rounded-lg"
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="E-Mail"
                  className="w-full border px-4 py-3 rounded-lg md:col-span-2"
                />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Adresse</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="strasse"
                  value={form.strasse}
                  onChange={handleChange}
                  placeholder="Straße + Hausnummer"
                  className="w-full border px-4 py-3 rounded-lg md:col-span-2"
                />

                <input
                  name="plz"
                  value={form.plz}
                  onChange={handleChange}
                  placeholder="PLZ"
                  className="w-full border px-4 py-3 rounded-lg"
                />

                <input
                  name="ort"
                  value={form.ort}
                  onChange={handleChange}
                  placeholder="Ort"
                  className="w-full border px-4 py-3 rounded-lg"
                />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Objekt / Hinweise</h2>

              <div className="space-y-4">
                <input
                  name="objekt"
                  value={form.objekt}
                  onChange={handleChange}
                  placeholder="Objekt / Einsatzort / Baustelle"
                  className="w-full border px-4 py-3 rounded-lg"
                />

                <textarea
                  name="notizen"
                  value={form.notizen}
                  onChange={handleChange}
                  placeholder="Zusätzliche Hinweise, Besonderheiten, Zugang, Absprachen"
                  className="w-full border px-4 py-3 rounded-lg min-h-[140px]"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                Kunde speichern
              </button>

              <Link
                href="/kunden"
                className="border px-6 py-3 rounded-lg hover:bg-gray-50"
              >
                Abbrechen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

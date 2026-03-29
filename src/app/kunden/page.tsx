'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function NeuerKundePage() {
  const [form, setForm] = useState({
    firma: '',
    ansprechpartner: '',
    telefon: '',
    email: '',
    strasse: '',
    plz: '',
    ort: '',
    notizen: '',
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center py-10">
      <div className="w-full max-w-3xl bg-white p-10 rounded-2xl shadow">

        <h1 className="text-3xl font-bold mb-8">Neuer Kunde</h1>

        <div className="space-y-6">

          {/* FIRMA */}
          <div>
            <h2 className="font-semibold mb-2">Allgemein</h2>
            <div className="space-y-3">
              <input
                name="firma"
                placeholder="Firmenname"
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg"
              />

              <input
                name="ansprechpartner"
                placeholder="Ansprechpartner"
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg"
              />
            </div>
          </div>

          {/* KONTAKT */}
          <div>
            <h2 className="font-semibold mb-2">Kontakt</h2>
            <div className="grid md:grid-cols-2 gap-3">
              <input
                name="telefon"
                placeholder="Telefon"
                onChange={handleChange}
                className="border px-4 py-3 rounded-lg"
              />

              <input
                name="email"
                placeholder="E-Mail"
                onChange={handleChange}
                className="border px-4 py-3 rounded-lg"
              />
            </div>
          </div>

          {/* ADRESSE */}
          <div>
            <h2 className="font-semibold mb-2">Adresse</h2>
            <div className="space-y-3">
              <input
                name="strasse"
                placeholder="Straße + Hausnummer"
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg"
              />

              <div className="grid grid-cols-3 gap-3">
                <input
                  name="plz"
                  placeholder="PLZ"
                  onChange={handleChange}
                  className="border px-4 py-3 rounded-lg"
                />

                <input
                  name="ort"
                  placeholder="Ort"
                  onChange={handleChange}
                  className="col-span-2 border px-4 py-3 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* NOTIZEN */}
          <div>
            <h2 className="font-semibold mb-2">Notizen</h2>
            <textarea
              name="notizen"
              placeholder="Besonderheiten, Hinweise..."
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg min-h-[120px]"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Kunde speichern
            </button>

            <Link
              href="/kunden"
              className="border px-6 py-3 rounded-lg"
            >
              Abbrechen
            </Link>
          </div>

        </div>
      </div>
    </main>
  )
}

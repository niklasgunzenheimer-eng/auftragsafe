'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import Auftraggeber from '../../../components/regiebericht/Auftraggeber'
import Projekt from '../../../components/regiebericht/Projekt'
import Leistungsbeschreibung from '../../../components/regiebericht/Leistungsbeschreibung'
import Material from '../../../components/regiebericht/Material'
import Fahrt from '../../../components/regiebericht/Fahrt'
import AnmerkungenFotos from '../../../components/regiebericht/AnmerkungenFotos'
type PhotoItem = {
  name: string
  url: string
}

const inputClass = 'rounded-xl border border-gray-300 px-4 py-3'
const textareaClass = 'rounded-xl border border-gray-300 px-4 py-3'

export default function NeuerRegieberichtPage() {
  const [kunde, setKunde] = useState('')
  const [ansprechpartner, setAnsprechpartner] = useState('')
  const [kundeStrasse, setKundeStrasse] = useState('')
  const [kundePlzOrt, setKundePlzOrt] = useState('')
  const [kundeTelefon, setKundeTelefon] = useState('')
  const [kundeEmail, setKundeEmail] = useState('')

  const [projekt, setProjekt] = useState('')
  const [leistungszeitraum, setLeistungszeitraum] = useState('')
  const [einsatzStrasse, setEinsatzStrasse] = useState('')
  const [einsatzOrt, setEinsatzOrt] = useState('')

  const [leistungsbeschreibung, setLeistungsbeschreibung] = useState('')
  const [zusatzarbeiten, setZusatzarbeiten] = useState('')

  const [mitarbeiter, setMitarbeiter] = useState('')
  const [rolle, setRolle] = useState('')
  const [stunden, setStunden] = useState('')

  const [maschinen, setMaschinen] = useState('')
  const [material, setMaterial] = useState('')

  const [anmerkungen, setAnmerkungen] = useState('')
  const [photos, setPhotos] = useState<PhotoItem[]>([])

  const [fahrtStart, setFahrtStart] = useState('')
  const [fahrtZiel, setFahrtZiel] = useState('')
  const [fahrtKm, setFahrtKm] = useState('')
  const [fahrtZeit, setFahrtZeit] = useState('')

  const [arbeitsstatus, setArbeitsstatus] = useState<'abgeschlossen' | 'folgearbeiten'>('abgeschlossen')

  const [ort, setOrt] = useState('')
  const [datum, setDatum] = useState(() => new Date().toISOString().slice(0, 10))

  const mapsUrl = useMemo(() => {
    if (!fahrtZiel.trim()) return ''
    const origin = encodeURIComponent(fahrtStart.trim())
    const destination = encodeURIComponent(fahrtZiel.trim())
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`
  }, [fahrtStart, fahrtZiel])

  const handleOpenMaps = () => {
    if (!mapsUrl) return
    window.open(mapsUrl, '_blank', 'noopener,noreferrer')
  }

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    const newPhotos: PhotoItem[] = Array.from(files).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }))

    setPhotos((prev) => [...prev, ...newPhotos])
  }

  const handlePrint = () => {
    window.print()
  }

  const handlePdfPlaceholder = () => {
    alert('PDF-Erstellung kommt als nächster Schritt.')
  }

  const handleSavePlaceholder = () => {
    alert('Speichern kommt als nächster Schritt.')
  }

  const handleSendPlaceholder = () => {
    alert('Versand kommt als nächster Schritt.')
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="absolute top-4 left-4">
        <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
          BETA
        </div>
      </div>

      <header className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border-2 border-dashed border-gray-400 flex items-center justify-center text-xs font-medium text-gray-500 rounded-md">
              LOGO
            </div>
            <span className="font-bold text-lg tracking-tight">AuftragSafe</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
            >
              Zurück zum Dashboard
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Neuer Regiebericht</h1>
          <p className="mt-3 text-gray-600">
            Leistungen, Zeiten, Material und Anmerkungen sauber dokumentieren.
          </p>
        </div>

        <div className="space-y-8">
          <Auftraggeber
            kunde={kunde}
            setKunde={setKunde}
            ansprechpartner={ansprechpartner}
            setAnsprechpartner={setAnsprechpartner}
            kundeStrasse={kundeStrasse}
            setKundeStrasse={setKundeStrasse}
            kundePlzOrt={kundePlzOrt}
            setKundePlzOrt={setKundePlzOrt}
            kundeTelefon={kundeTelefon}
            setKundeTelefon={setKundeTelefon}
            kundeEmail={kundeEmail}
            setKundeEmail={setKundeEmail}
          />

          <Projekt
            projekt={projekt}
            setProjekt={setProjekt}
            leistungszeitraum={leistungszeitraum}
            setLeistungszeitraum={setLeistungszeitraum}
            einsatzStrasse={einsatzStrasse}
            setEinsatzStrasse={setEinsatzStrasse}
            einsatzOrt={einsatzOrt}
            setEinsatzOrt={setEinsatzOrt}
          />

          <Leistungsbeschreibung
            leistungsbeschreibung={leistungsbeschreibung}
            setLeistungsbeschreibung={setLeistungsbeschreibung}
            zusatzarbeiten={zusatzarbeiten}
            setZusatzarbeiten={setZusatzarbeiten}
          />

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Mitarbeiter / Zeit</h2>

            <div className="grid md:grid-cols-3 gap-4">
              <input
                value={mitarbeiter}
                onChange={(e) => setMitarbeiter(e.target.value)}
                placeholder="Mitarbeiter"
                className={inputClass}
              />
              <input
                value={rolle}
                onChange={(e) => setRolle(e.target.value)}
                placeholder="Rolle"
                className={inputClass}
              />
              <input
                value={stunden}
                onChange={(e) => setStunden(e.target.value)}
                placeholder="Stunden"
                className={inputClass}
              />
            </div>
          </div>

<Material
  maschinen={maschinen}
  setMaschinen={setMaschinen}
  material={material}
  setMaterial={setMaterial}
/>

          <Fahrt
  fahrtStart={fahrtStart}
  setFahrtStart={setFahrtStart}
  fahrtZiel={fahrtZiel}
  setFahrtZiel={setFahrtZiel}
  fahrtKm={fahrtKm}
  setFahrtKm={setFahrtKm}
  fahrtZeit={fahrtZeit}
  setFahrtZeit={setFahrtZeit}
  handleOpenMaps={handleOpenMaps}
/>

          <AnmerkungenFotos
  anmerkungen={anmerkungen}
  setAnmerkungen={setAnmerkungen}
  photos={photos}
  handlePhotoUpload={handlePhotoUpload}
/>

            {photos.length > 0 && (
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                  <div
                    key={`${photo.name}-${index}`}
                    className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50"
                  >
                    <img
                      src={photo.url}
                      alt={photo.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="px-3 py-2 text-xs text-gray-500 truncate">{photo.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Arbeitsstatus</h2>

            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="arbeitsstatus"
                  checked={arbeitsstatus === 'abgeschlossen'}
                  onChange={() => setArbeitsstatus('abgeschlossen')}
                />
                <span>Arbeiten abgeschlossen</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="arbeitsstatus"
                  checked={arbeitsstatus === 'folgearbeiten'}
                  onChange={() => setArbeitsstatus('folgearbeiten')}
                />
                <span>Folgearbeiten noch zu erledigen</span>
              </label>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Unterschrift / Abschluss</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                value={ort}
                onChange={(e) => setOrt(e.target.value)}
                placeholder="Ort"
                className={inputClass}
              />
              <input
                type="date"
                value={datum}
                onChange={(e) => setDatum(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-gray-500">
                Unterschrift Auftraggeber
              </div>

              <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-gray-500">
                Unterschrift Auftragnehmer
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleSavePlaceholder}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
              >
                Speichern
              </button>

              <button
                type="button"
                onClick={handlePdfPlaceholder}
                className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition"
              >
                PDF erzeugen
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition"
              >
                Drucken
              </button>

              <button
                type="button"
                onClick={handleSendPlaceholder}
                className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition"
              >
                Senden
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

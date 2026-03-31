type Props = {
  projekt: string
  setProjekt: (v: string) => void
  leistungszeitraum: string
  setLeistungszeitraum: (v: string) => void
  einsatzStrasse: string
  setEinsatzStrasse: (v: string) => void
  einsatzOrt: string
  setEinsatzOrt: (v: string) => void
}

export default function Projekt({
  projekt,
  setProjekt,
  leistungszeitraum,
  setLeistungszeitraum,
  einsatzStrasse,
  setEinsatzStrasse,
  einsatzOrt,
  setEinsatzOrt,
}: Props) {
  const inputClass = 'rounded-xl border border-gray-300 px-4 py-3'

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Projekt / Objekt</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          value={projekt}
          onChange={(e) => setProjekt(e.target.value)}
          placeholder="Projekt / Bezeichnung"
          className={inputClass}
        />
        <input
          value={leistungszeitraum}
          onChange={(e) => setLeistungszeitraum(e.target.value)}
          placeholder="Leistungszeitraum"
          className={inputClass}
        />
        <input
          value={einsatzStrasse}
          onChange={(e) => setEinsatzStrasse(e.target.value)}
          placeholder="Einsatz Straße / Nr."
          className={inputClass}
        />
        <input
          value={einsatzOrt}
          onChange={(e) => setEinsatzOrt(e.target.value)}
          placeholder="Einsatz Ort"
          className={inputClass}
        />
      </div>
    </div>
  )
}

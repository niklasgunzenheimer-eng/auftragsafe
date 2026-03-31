type Props = {
  fahrtStart: string
  setFahrtStart: (v: string) => void
  fahrtZiel: string
  setFahrtZiel: (v: string) => void
  fahrtKm: string
  setFahrtKm: (v: string) => void
  fahrtZeit: string
  setFahrtZeit: (v: string) => void
  handleOpenMaps: () => void
}

export default function Fahrt({
  fahrtStart,
  setFahrtStart,
  fahrtZiel,
  setFahrtZiel,
  fahrtKm,
  setFahrtKm,
  fahrtZeit,
  setFahrtZeit,
  handleOpenMaps,
}: Props) {
  const inputClass = 'rounded-xl border border-gray-300 px-4 py-3'

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Fahrt / Kilometer</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          value={fahrtStart}
          onChange={(e) => setFahrtStart(e.target.value)}
          placeholder="Startadresse"
          className={inputClass}
        />
        <input
          value={fahrtZiel}
          onChange={(e) => setFahrtZiel(e.target.value)}
          placeholder="Zieladresse"
          className={inputClass}
        />
        <input
          value={fahrtKm}
          onChange={(e) => setFahrtKm(e.target.value)}
          placeholder="Kilometer"
          className={inputClass}
        />
        <input
          value={fahrtZeit}
          onChange={(e) => setFahrtZeit(e.target.value)}
          placeholder="Fahrzeit"
          className={inputClass}
        />
      </div>

      <div className="mt-4">
        <button
          type="button"
          onClick={handleOpenMaps}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          In Maps öffnen
        </button>
      </div>
    </div>
  )
}

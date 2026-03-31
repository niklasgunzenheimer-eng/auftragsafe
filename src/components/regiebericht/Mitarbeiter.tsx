type Props = {
  mitarbeiter: string
  setMitarbeiter: (v: string) => void
  rolle: string
  setRolle: (v: string) => void
  stunden: string
  setStunden: (v: string) => void
}

export default function Mitarbeiter({
  mitarbeiter,
  setMitarbeiter,
  rolle,
  setRolle,
  stunden,
  setStunden,
}: Props) {
  const inputClass = 'rounded-xl border border-gray-300 px-4 py-3'

  return (
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
  )
}

type Props = {
  ort: string
  setOrt: (v: string) => void
  datum: string
  setDatum: (v: string) => void
}

export default function Abschluss({
  ort,
  setOrt,
  datum,
  setDatum,
}: Props) {
  const inputClass = 'rounded-xl border border-gray-300 px-4 py-3'

  return (
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
  )
}

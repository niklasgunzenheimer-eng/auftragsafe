type Props = {
  leistungsbeschreibung: string
  setLeistungsbeschreibung: (v: string) => void
  zusatzarbeiten: string
  setZusatzarbeiten: (v: string) => void
}

export default function Leistungsbeschreibung({
  leistungsbeschreibung,
  setLeistungsbeschreibung,
  zusatzarbeiten,
  setZusatzarbeiten,
}: Props) {
  const textareaClass = 'rounded-xl border border-gray-300 px-4 py-3'

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Leistungsbeschreibung</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <textarea
          value={leistungsbeschreibung}
          onChange={(e) => setLeistungsbeschreibung(e.target.value)}
          placeholder="Was wurde gemacht?"
          className={`min-h-[180px] ${textareaClass}`}
        />
        <textarea
          value={zusatzarbeiten}
          onChange={(e) => setZusatzarbeiten(e.target.value)}
          placeholder="Zusatzarbeiten"
          className={`min-h-[180px] ${textareaClass}`}
        />
      </div>
    </div>
  )
}

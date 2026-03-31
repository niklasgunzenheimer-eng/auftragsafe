type Props = {
  maschinen: string
  setMaschinen: (v: string) => void
  material: string
  setMaterial: (v: string) => void
}

export default function Material({
  maschinen,
  setMaschinen,
  material,
  setMaterial,
}: Props) {
  const textareaClass = 'rounded-xl border border-gray-300 px-4 py-3'

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Material / Maschinen</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <textarea
          value={maschinen}
          onChange={(e) => setMaschinen(e.target.value)}
          placeholder="Maschinen / Geräte"
          className={`min-h-[140px] ${textareaClass}`}
        />
        <textarea
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          placeholder="Materialverbrauch"
          className={`min-h-[140px] ${textareaClass}`}
        />
      </div>
    </div>
  )
}

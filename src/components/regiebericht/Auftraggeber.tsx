type Props = {
  kunde: string
  setKunde: (v: string) => void
  ansprechpartner: string
  setAnsprechpartner: (v: string) => void
  kundeStrasse: string
  setKundeStrasse: (v: string) => void
  kundePlzOrt: string
  setKundePlzOrt: (v: string) => void
  kundeTelefon: string
  setKundeTelefon: (v: string) => void
  kundeEmail: string
  setKundeEmail: (v: string) => void
}

export default function Auftraggeber({
  kunde,
  setKunde,
  ansprechpartner,
  setAnsprechpartner,
  kundeStrasse,
  setKundeStrasse,
  kundePlzOrt,
  setKundePlzOrt,
  kundeTelefon,
  setKundeTelefon,
  kundeEmail,
  setKundeEmail,
}: Props) {
  const inputClass = 'rounded-xl border border-gray-300 px-4 py-3'

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Auftraggeber</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input value={kunde} onChange={(e) => setKunde(e.target.value)} placeholder="Kunde / Firma" className={inputClass} />
        <input value={ansprechpartner} onChange={(e) => setAnsprechpartner(e.target.value)} placeholder="Ansprechpartner" className={inputClass} />
        <input value={kundeStrasse} onChange={(e) => setKundeStrasse(e.target.value)} placeholder="Straße / Nr." className={inputClass} />
        <input value={kundePlzOrt} onChange={(e) => setKundePlzOrt(e.target.value)} placeholder="PLZ / Ort" className={inputClass} />
        <input value={kundeTelefon} onChange={(e) => setKundeTelefon(e.target.value)} placeholder="Telefon" className={inputClass} />
        <input value={kundeEmail} onChange={(e) => setKundeEmail(e.target.value)} placeholder="E-Mail" className={inputClass} />
      </div>
    </div>
  )
}

type Props = {
  arbeitsstatus: 'abgeschlossen' | 'folgearbeiten'
  setArbeitsstatus: (v: 'abgeschlossen' | 'folgearbeiten') => void
}

export default function Arbeitsstatus({
  arbeitsstatus,
  setArbeitsstatus,
}: Props) {
  return (
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
  )
}

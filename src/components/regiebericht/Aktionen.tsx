type Props = {
  onSave: () => void
  onPdf: () => void
  onPrint: () => void
  onSend: () => void
}

export default function Aktionen({
  onSave,
  onPdf,
  onPrint,
  onSend,
}: Props) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="flex flex-wrap gap-4">
        <button
          type="button"
          onClick={onSave}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Speichern
        </button>

        <button
          type="button"
          onClick={onPdf}
          className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition"
        >
          PDF erzeugen
        </button>

        <button
          type="button"
          onClick={onPrint}
          className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition"
        >
          Drucken
        </button>

        <button
          type="button"
          onClick={onSend}
          className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition"
        >
          Senden
        </button>
      </div>
    </div>
  )
}

type PhotoItem = {
  name: string
  url: string
}

type Props = {
  anmerkungen: string
  setAnmerkungen: (v: string) => void
  photos: PhotoItem[]
  handlePhotoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function AnmerkungenFotos({
  anmerkungen,
  setAnmerkungen,
  photos,
  handlePhotoUpload,
}: Props) {
  const textareaClass = 'rounded-xl border border-gray-300 px-4 py-3'

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Anmerkungen / Fotos</h2>

      <textarea
        value={anmerkungen}
        onChange={(e) => setAnmerkungen(e.target.value)}
        placeholder="Anmerkungen"
        className={`w-full min-h-[140px] ${textareaClass}`}
      />

      <div className="mt-6">
        <label className="inline-flex items-center bg-blue-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-blue-700 transition cursor-pointer">
          Foto hinzufügen
          <input
            type="file"
            accept="image/*"
            capture="environment"
            multiple
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </label>
      </div>

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
              <div className="px-3 py-2 text-xs text-gray-500 truncate">
                {photo.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

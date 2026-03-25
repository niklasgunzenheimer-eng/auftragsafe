import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold">AuftragSafe</h1>

        <div className="space-x-4">
          <Link href="/register" className="bg-black text-white px-4 py-2 rounded">
            Registrieren
          </Link>

          <Link href="/login" className="border px-4 py-2 rounded">
            Login
          </Link>
        </div>
      </div>
    </main>
  )
}
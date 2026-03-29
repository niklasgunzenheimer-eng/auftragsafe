import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 relative">
      <div className="absolute top-4 left-4 z-50">
        <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md shadow">
          BETA
        </div>
      </div>

      <header className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border-2 border-dashed border-gray-400 flex items-center justify-center text-xs font-medium text-gray-500 rounded-md">
              LOGO
            </div>
            <span className="font-bold text-lg tracking-tight">AuftragSafe</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#funktionen" className="hover:text-blue-600 transition">
              Funktionen
            </a>
            <a href="#vorteile" className="hover:text-blue-600 transition">
              Vorteile
            </a>
            <a href="#bewertungen" className="hover:text-blue-600 transition">
              Bewertungen
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            >
              Kostenlos testen
            </Link>
            <Link
              href="/login"
              className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium mb-6">
            Für Handwerker, die sauber dokumentieren wollen
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            DIGITALE REGIEBERICHTE
            <br />
            <span className="text-blue-600">DIREKT VOR ORT</span>
            <br />
            <span className="text-gray-700">SAUBER ERFASST</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            Erfasse Leistungen, Arbeitszeiten und Material ohne Papierchaos.
            Lass den Kunden direkt unterschreiben und erstelle den Bericht sofort
            als PDF.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/register"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Jetzt kostenlos starten
            </Link>

            <Link
              href="/login"
              className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition"
            >
              Zum Login
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-gray-50 border border-gray-200 px-4 py-4">
              <div className="text-sm font-semibold">Digital erfassen</div>
              <div className="text-sm text-gray-500 mt-1">Ohne Zettelwirtschaft</div>
            </div>

            <div className="rounded-xl bg-gray-50 border border-gray-200 px-4 py-4">
              <div className="text-sm font-semibold">Direkt unterschreiben</div>
              <div className="text-sm text-gray-500 mt-1">Vor Ort bestätigt</div>
            </div>

            <div className="rounded-xl bg-gray-50 border border-gray-200 px-4 py-4">
              <div className="text-sm font-semibold">Sofort als PDF</div>
              <div className="text-sm text-gray-500 mt-1">Schnell versendbar</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-white">
            <img
              src="/BILD1.png"
              alt="Handwerker mit Tablet"
              className="w-full h-[460px] object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 bg-white border border-gray-200 rounded-2xl shadow-lg px-5 py-4">
            <div className="text-xs uppercase tracking-wide text-gray-400 font-semibold">
              Status
            </div>
            <div className="font-semibold text-gray-900 mt-1">
              Direkt vor Ort dokumentiert
            </div>
          </div>

          <div className="absolute -top-5 -right-5 bg-blue-600 text-white rounded-2xl shadow-lg px-5 py-4">
            <div className="text-xs uppercase tracking-wide text-blue-100 font-semibold">
              Vorteil
            </div>
            <div className="font-semibold mt-1">Sauber abrechnen</div>
          </div>
        </div>
      </section>

      <section id="funktionen" className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Was AuftragSafe kann</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Entwickelt für den echten Alltag auf Baustelle, im Service und beim Kunden.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold">Leistungen sauber festhalten</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Tätigkeiten, Arbeitszeiten und Zusatzarbeiten direkt digital erfassen.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold">Material direkt eintragen</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Verbrauchtes Material ohne Nacharbeit dokumentieren.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold">Bericht sofort abschließen</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Kundenunterschrift einholen und den Auftrag ohne Diskussionen abschließen.
            </p>
          </div>
        </div>
      </section>

      <section id="vorteile" className="bg-blue-50 py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Mehr Sicherheit. Weniger Papier. Weniger Stress.
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            AuftragSafe hilft dir dabei, Arbeitsleistungen nachvollziehbar zu dokumentieren
            und Berichte direkt dort abzuschließen, wo die Arbeit gemacht wurde.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8">
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Beispiel Ablauf
            </div>
            <h2 className="mt-3 text-2xl font-bold">So einfach funktioniert es</h2>

            <div className="mt-6 space-y-5">
              <div>
                <div className="font-semibold">1. Auftrag öffnen</div>
                <div className="text-gray-600 mt-1">
                  Kunde auswählen und Regiebericht starten.
                </div>
              </div>

              <div>
                <div className="font-semibold">2. Arbeit erfassen</div>
                <div className="text-gray-600 mt-1">
                  Leistungen, Zeiten und Material eintragen.
                </div>
              </div>

              <div>
                <div className="font-semibold">3. Unterschrift holen</div>
                <div className="text-gray-600 mt-1">
                  Kunde bestätigt direkt vor Ort auf Handy oder Tablet.
                </div>
              </div>

              <div>
                <div className="font-semibold">4. Bericht abschließen</div>
                <div className="text-gray-600 mt-1">
                  PDF erstellen und direkt weiterverarbeiten.
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Für wen?
            </div>
            <h2 className="mt-3 text-2xl font-bold">Gemacht für den Handwerker-Alltag</h2>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium">
                Elektro
              </span>
              <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium">
                SHK
              </span>
              <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium">
                Service
              </span>
              <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium">
                Montage
              </span>
              <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium">
                Kundendienst
              </span>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              AuftragSafe richtet sich an Betriebe, die weniger Papierkram wollen und
              ihre Arbeit sauber dokumentieren müssen.
            </p>
          </div>
        </div>
      </section>

      <section id="bewertungen" className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Rückmeldungen aus der Praxis</h2>
          <p className="mt-3 text-gray-600">
            Platz für echte Kundenbewertungen und erste Erfahrungen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-gray-700 leading-relaxed">
              Saubere Lösung für den Alltag. Dokumentation läuft deutlich strukturierter.
            </p>
            <p className="mt-4 text-sm font-medium text-gray-500">Elektro</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-gray-700 leading-relaxed">
              Spart Zeit und macht die Abrechnung nachvollziehbarer.
            </p>
            <p className="mt-4 text-sm font-medium text-gray-500">Service</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold">Bewertung abgeben</h3>
          <p className="mt-2 text-gray-600">
            Dieser Bereich ist als Platzhalter für spätere echte Bewertungen vorgesehen.
          </p>

          <div className="mt-5 grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name oder Firma"
              className="rounded-xl border border-gray-300 px-4 py-3"
              disabled
            />
            <input
              type="text"
              placeholder="Titel"
              className="rounded-xl border border-gray-300 px-4 py-3"
              disabled
            />
          </div>

          <textarea
            placeholder="Deine Bewertung"
            className="mt-4 w-full rounded-xl border border-gray-300 px-4 py-3 min-h-[120px]"
            disabled
          />

          <button
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium opacity-60 cursor-not-allowed"
            disabled
          >
            Bewertung absenden
          </button>
        </div>
      </section>
    </main>
  )
}

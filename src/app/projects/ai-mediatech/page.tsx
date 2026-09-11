import Image from "next/image";
import Link from "next/link";

const demoUrl =
  "https://drive.google.com/file/d/1xMTpwXh-UqR0c7JEIKGWYjmdBnLSF-_e/view?usp=drive_link";

export default function AiMediatechPage() {
  return (
    <main className="min-h-screen bg-paper px-6 py-10 text-ink sm:py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#proyek"
          className="text-sm font-semibold text-teal transition hover:text-coral"
        >
          ← Kembali ke proyek
        </Link>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-coral">
              Project detail · 01
            </p>
            <h1 className="font-display text-5xl font-semibold leading-tight sm:text-7xl">
              AI Mediatech
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              Platform AI untuk membantu RRI menyajikan pengalaman informasi
              yang lebih modern, terstruktur, dan mudah digunakan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-coral px-6 py-3 font-semibold text-paper transition hover:-translate-y-0.5"
              >
                Lihat demo
              </a>
              <span className="rounded-full bg-teal/15 px-5 py-3 text-sm font-semibold text-teal">
                Next.js · Web Design
              </span>
            </div>
          </div>

          <div className="rotate-2 rounded-xl border-4 border-ink bg-teal/10 p-3 shadow-[8px_8px_0_rgba(33,28,52,0.12)]">
            <Image
              src="/assets/cover_mediatech.png"
              alt="Preview proyek AI Mediatech"
              width={800}
              height={600}
              className="aspect-[4/3] rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t-2 border-ink/10 pt-10 sm:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Peran
            </p>
            <p className="mt-3 text-lg font-semibold">
              Front-End developer &amp; UI design
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold">
              Tentang proyek
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
              Proyek ini berfokus pada perancangan tampilan dan alur aplikasi
              berbasis AI. Disini para user bisa meminta konten yang mereka inginkan.
             Struktur halaman dibuat agar informasi penting mudah
              ditemukan, sementara visualnya tetap terasa ramah untuk pengguna.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

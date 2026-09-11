import Image from "next/image";
import Link from "next/link";

const demoUrl =
  "https://drive.google.com/file/d/171xFZedGbjH--DUPx3adSagwstJc3OiJ/view?usp=drive_link";

const cobaproyek = "https://verifai-ten-inky.vercel.app/";

export default function VerifaiPage() {
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-grape">
              Project detail · 02
            </p>
            <h1 className="font-display text-5xl font-semibold leading-tight sm:text-7xl">
              VERIFAI
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              Platform literasi digital berbasis AI yang membantu generasi muda
              mengenali hoaks dan memverifikasi informasi secara interaktif.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-grape px-6 py-3 font-semibold text-paper transition hover:-translate-y-0.5"
              >
                Lihat demo
              </a>
              <span className="rounded-full bg-grape/15 px-5 py-3 text-sm font-semibold text-grape">
                Next.js · Web Design
              </span>
              <a
                href={cobaproyek}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-grape px-6 py-3 font-semibold text-paper transition hover:-translate-y-0.5"
              >
                Cobain proyeknya yu
              </a>
            </div>
          </div>

          <div className="-rotate-2 rounded-3xl border-4 border-ink bg-grape/10 p-3 shadow-[8px_8px_0_rgba(33,28,52,0.12)]">
            <Image
              src="/assets/cover_verifai.png"
              alt="Preview proyek VERIFAI"
              width={800}
              height={600}
              className="aspect-[4/3] rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t-2 border-ink/10 pt-10 sm:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-grape">
              Peran
            </p>
            <p className="mt-3 text-lg font-semibold">
              Web Developer &amp; UI Design
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold">
              Tentang proyek
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
              VERIFAI dirancang sebagai ruang belajar yang praktis dan tidak
              menggurui. Pengguna diajak memahami ciri informasi palsu melalui
              alur yang interaktif, jelas, dan dekat dengan kebiasaan digital
              sehari-hari.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

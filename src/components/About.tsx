import Image from "next/image";

const chips = [
  { label: "Suka bikin hal baru", color: "bg-coral/15 text-coral" },
  { label: "Belajar sambil praktik", color: "bg-teal/15 text-teal" },
  { label: "Detail-oriented", color: "bg-grape/15 text-grape" },
  { label: "Kolaboratif", color: "bg-sunshine/25 text-ink" },
];

export default function About() {
  return (
    <section id="tentang" className="relative px-6 py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 sm:grid-cols-[0.7fr_1.3fr]">
        <div className="relative mx-auto w-48 rotate-[-4deg] sm:w-full">
          <div className="rounded-3xl border-4 border-ink bg-teal/10 p-3 shadow-[6px_6px_0_rgba(33,28,52,0.15)]">
            <Image
              src="/avatar-koko.svg"
              alt="Foto koko"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
          <span className="absolute -right-4 -top-4 rotate-6 rounded-full bg-sunshine px-3 py-1 text-xs font-semibold text-ink shadow-[3px_3px_0_rgba(33,28,52,0.2)]">
            halooooo!
          </span>
        </div>

        <div>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Tentang aku
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/75">
            Aku adalah seorang Front-End Engineer yang berfokus
            pada membangun aplikasi web yang responsif,
            fungsional, dan mudah digunakan.

            Aku berpengalaman menggunakan React, Next.js, dan
            TypeScript untuk membangun aplikasi web yang interaktif
            dan responsif.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {chips.map((chip) => (
              <span
                key={chip.label}
                className={`rounded-full px-4 py-2 text-sm font-medium ${chip.color}`}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

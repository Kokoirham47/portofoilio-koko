import Image from "next/image";
import Link from "next/link";

const demoPlaceholder_ai =
  "https://drive.google.com/file/d/1xMTpwXh-UqR0c7JEIKGWYjmdBnLSF-_e/view?usp=drive_link";
const demoPlaceholder_verifai =
  "https://drive.google.com/file/d/171xFZedGbjH--DUPx3adSagwstJc3OiJ/view?usp=drive_link";

const projects = [
  [
    "AI Mediatech",
    "Berkontribusi dalam pengembangan platform AI untuk RRI",
    ["Next.js", "Web Design"],
    "/assets/cover_mediatech.png",
    "/projects/ai-mediatech",
    demoPlaceholder_ai,
  ],
  [
    "VERIFAI",
    "Platform literasi digital berbasis AI yang membantu generasi muda mengenali hoaks, memahami informasi, dan belajar melakukan verifikasi secara interaktif",
    ["Next.js", "Web Design"],
    "/assets/cover_verifai.png",
    "/projects/verifai",
    demoPlaceholder_verifai,
  ],
] as const;

export default function Projects() {
  return (
    <section
      id="proyek"
      className="relative overflow-hidden bg-paper px-6 py-24 text-ink"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="flex items-end justify-center gap-6">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Beberapa proyek yang pernah aku kerjakan
            </h2>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {projects.map(([title, description, tags, image, link, demo]) => (
            <article
              key={title}
              className= "group flex min-h-[455px] w-full max-w-[470px] flex-col rounded-2xl border-2 border-ink/10 bg-white/70 p-6 shadow-[5px_5px_0_rgba(33,28,52,0.1)] transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-white"
            >
              <div className="relative aspect-[1.78] overflow-hidden rounded-xl bg-teal/10">
                <Image
                  src={image}
                  alt={`Preview proyek ${title}`}
                  width={600}
                  height={440}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink/70">
                {description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between gap-4 pt-7 text-sm font-semibold">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal transition hover:text-coral"
                >
                  Lihat Demo{" "}
                </a>
                <Link
                  href={link}
                  className="rounded-lg bg-ink/5 px-4 py-2.5 text-ink/80 transition hover:bg-ink/10 hover:text-ink"
                >
                  Details{" "}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

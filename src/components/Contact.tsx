"use client";

import { useState } from "react";

const otherChannels = [
  {
    name: "File Portofolio (PDF)",
    href: "https://drive.google.com/file/d/1GMACEJCRqRiuoQaioIe6iSra8KCMm3A8/view?usp=drive_link",
  },
  {
    name: "GitHub",
    href: "https://github.com/Kokoirham47",
  },
];

function getDrivePreviewUrl(url: string) {
  const fileId = url.match(/drive\.google\.com\/file\/d\/([^/]+)/)?.[1];

  return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
}

export default function Contact() {
  const [activePortfolio, setActivePortfolio] = useState<string | null>(null);

  return (
    <>
      <section id="kontak" className="relative px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] border-2 border-ink/10 bg-grape/10 px-8 py-14 text-center sm:px-16">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Yuk, ngobrol!
          </h2>

          <p className="mx-auto mt-4 max-w-md text-lg text-ink/75">
            Kalau mau ngobrol, kolaborasi, atau sekadar menyapa, kamu bisa
            menghubungiku lewat tombol di bawah ini yaa!
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            {/* Email */}
            <a
              href="mailto:radenirhamr@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full bg-coral px-7 py-3.5 text-base font-semibold text-paper shadow-[0_4px_0_rgba(33,28,52,0.25)] transition-transform hover:-translate-y-0.5"
            >
              radenirhamr@gmail.com
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/koko_irham047"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full bg-coral px-7 py-3.5 text-base font-semibold text-paper shadow-[0_4px_0_rgba(33,28,52,0.25)] transition-transform hover:-translate-y-0.5"
            >
              @koko_irham047 di Instagram
            </a>

            {/* Other channels */}
            <div className="mt-2 flex flex-wrap justify-center gap-2.5">
              {otherChannels.map((channel) =>
                channel.name === "File Portofolio (PDF)" ? (
                  <button
                    key={channel.name}
                    type="button"
                    onClick={() => setActivePortfolio(channel.href)}
                    className="focus-ring rounded-full border border-ink/20 bg-white/50 px-4 py-1.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-ink/40 hover:bg-white"
                  >
                    {channel.name}
                  </button>
                ) : (
                  <a
                    key={channel.name}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-ink/20 bg-white/50 px-4 py-1.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-ink/40 hover:bg-white"
                  >
                    {channel.name}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {activePortfolio && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-2 backdrop-blur-sm sm:p-4"
          role="presentation"
          onClick={() => setActivePortfolio(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-modal-title"
            className="relative flex h-[calc(100dvh-1rem)] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-paper shadow-2xl sm:h-[min(88vh,760px)] sm:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-16 items-center justify-between gap-3 border-b border-ink/10 px-4 py-3 sm:px-5 sm:py-4">
              <h2
                id="portfolio-modal-title"
                className="font-display text-base font-semibold text-ink sm:text-lg"
              >
                File Portofolio (PDF)
              </h2>
              <button
                type="button"
                aria-label="Tutup preview portofolio"
                onClick={() => setActivePortfolio(null)}
                className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink/5 text-xl text-ink transition hover:bg-coral hover:text-paper"
              >
                ×
              </button>
            </div>
            <iframe
              src={getDrivePreviewUrl(activePortfolio)}
              title="Preview PDF portofolio"
              className="min-h-0 flex-1 border-0 bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
}

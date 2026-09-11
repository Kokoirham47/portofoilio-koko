"use client";

import { useState } from "react";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#proyek", label: "Proyek" },
  { href: "#sertifikat", label: "Sertifikat" },
  { href: "#kontak", label: "Kontak" },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <nav className="relative flex w-full max-w-3xl items-center justify-between rounded-2xl border border-ink/10 bg-paper/90 px-4 py-2.5 shadow-[0_4px_0_rgba(33,28,52,0.08)] backdrop-blur sm:rounded-full sm:px-5">
        <a
          href="#beranda"
          onClick={() => setIsMenuOpen(false)}
          className="focus-ring rounded-full font-display text-base font-semibold text-ink sm:text-lg"
        >
          Portofolio Irham<span className="text-coral">.</span>
        </a>
        <ul className="hidden items-center gap-1 sm:flex sm:gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring rounded-full px-3 py-1.5 text-sm font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink sm:text-base"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink transition hover:bg-ink/10 sm:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-0.5 w-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
        {isMenuOpen && (
          <ul className="absolute left-0 right-0 top-[calc(100%+0.5rem)] rounded-2xl border border-ink/10 bg-paper/95 p-2 shadow-[0_8px_0_rgba(33,28,52,0.08)] backdrop-blur sm:hidden">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="focus-ring block rounded-xl px-4 py-3 text-sm font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

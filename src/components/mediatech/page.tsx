import Card3D from "@/components/card3d/Card3DClient";
export default function Mediatech() {

  return (
    <section
      id="beranda"
      className="relative overflow-hidden px-6 pt-36 pb-24 sm:pt-44"
    >
      <div
        className="blob float-slow left-[-80px] top-24 h-64 w-64 bg-sunshine/70"
        aria-hidden
      />
      <div
        className="blob float-slow right-[-60px] top-64 h-72 w-72 bg-teal/25"
        style={{ animationDelay: "1.5s" }}
        aria-hidden
      />
      <div
        className="blob float-slow left-1/2 bottom-[-120px] h-80 w-80 bg-grape/15"
        style={{ animationDelay: "3s" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-5xl items-start gap-12 sm:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 text-base font-medium text-ink/70">
            HALOOOOO, KENALINNN NAMA LENGKAP AKU
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-6xl">
            Raden Muhammad
            <br />
            <span className="squiggle-underline text-coral">
              Irham Ramadhan
              <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden>
                <path
                  d="M0 12 Q 25 2, 50 12 T 100 12 T 150 12 T 200 12 T 250 12 T 300 12"
                  fill="none"
                  stroke="#FFC93C"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink/75">
            Aku suka membuat hal-hal baru dan belajar sambil bereksperimen.
            Halaman ini tempat aku mengumpulkan cerita dan karya yang sedang
            aku kerjakan yaaaw
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyek"
              className="focus-ring rounded-full bg-coral px-6 py-3 text-base font-semibold text-paper shadow-[0_4px_0_rgba(33,28,52,0.25)] transition-transform hover:-translate-y-0.5"
            >
              Lihat proyek
            </a>
            <a
              href="#kontak"
              className="focus-ring rounded-full border-2 border-ink px-6 py-3 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Hubungi aku
            </a>
          </div>
        </div>

        {/* sm:-mt-* menarik kolom ini ke atas sendiri (independen dari
            pt-36/pt-44 milik section) supaya kartunya nempel di bawah navbar.
            Kalau masih ada sedikit celah atau malah ketutup navbar, tinggal
            perbesar/perkecil angka -mt di bawah ini (misal -mt-24, -mt-32). */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm sm:-mt-28">
          <div className="h-[500px] sm:h-[500px]">
            <Card3D />
          </div>
        </div>
      </div>
    </section>
  );
}

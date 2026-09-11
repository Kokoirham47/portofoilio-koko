const otherChannels = [
  {
    name: "File Portofolio (PDF)",
    href: "https://drive.google.com/file/d/16z-7J52DiLHDy6J9n43gUqjpWImGX1Un/view?usp=drive_link",
  },
  {
    name: "GitHub",
    href: "https://github.com/Kokoirham47",
  },
];

export default function Contact() {
  return (
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
            {otherChannels.map((channel) => (
              <a
                key={channel.name}
                href={channel.href}
                target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  channel.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="rounded-full border border-ink/20 bg-white/50 px-4 py-1.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-ink/40 hover:bg-white"
              >
                {channel.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
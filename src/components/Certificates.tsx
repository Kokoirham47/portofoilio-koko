"use client";

import { useState } from "react";

const certificates = [
  {
    title: "Sertifikat Juara 2 PerlombaanUI/UX Design",
    issuer: "Universitas Pendidikan Indonesia",
    year: "2025",
    accent: "bg-sunshine",
    driveUrl:
      "https://drive.google.com/file/d/15mT9v9fqvXxSY_zG7mYvh7kwAqNEuwtU/view?usp=drive_link",
  },
  {
    title:
      "Sertifikat Praktik Kerja Lapangan (PKL) sebagai Front-End Developer",
    issuer: "PT Svara Inovasi Indonesia",
    year: "2025",
    accent: "bg-sunshine",
    driveUrl:
      "https://drive.google.com/file/d/1LA_6cIHdOTmZZkKf_iAAtC2DWHOhl2lO/view?usp=drive_link",
  },
  {
    title: "Sertfikat Penghargaan sebagai Ketua English Club",
    issuer: "English Club - SMK Negeri 1 Cimahi",
    year: "2025",
    accent: "bg-sunshine",
    driveUrl:
      "https://drive.google.com/file/d/1EqDa356Cgjpie-g9D0H6RZcQo43jK12w/view?usp=drive_link",
  },
  {
    title: "Sertfikat TOEFL Prediction Test",
    issuer: "Central Course",
    year: "2025",
    accent: "bg-sunshine",
    driveUrl:
      "https://drive.google.com/file/d/1Q6_4isQCIBJmxSRlRVH1n9IBc1rKPFT8/view?usp=drive_link",
  },
  {
    title: "Sertfikat Pembinaan Fisik dan Mental",
    issuer: "SMK Negeri 1 Cimahi",
    year: "2024",
    accent: "bg-sunshine",
    driveUrl:
      "https://drive.google.com/file/d/1J-sS-FKiaI3tDrX0oOd2ciNUDlvn7F32/view?usp=drive_link",
  },
  {
    title: "Penghargaan Sertifikat Java Programming",
    issuer: "Oracle Academy",
    year: "2024",
    accent: "bg-sunshine",
    driveUrl:
      "https://drive.google.com/file/d/1kx5kTrso_f6SCIBsQJuEPA4K7e3jmOcv/view?usp=drive_link",
  },
  {
    title:
      "Sertfikat Penghargaan sebagai koordinator divisi Publikasi dan Dokumentasi",
    issuer: "Jurusan Rekayasa Perangkat Lunak SMK Negeri 1 Cimahi",
    year: "2024",
    accent: "bg-sunshine",
    driveUrl:
      "https://drive.google.com/file/d/1568pHuI3Z3RPkvNF1yM4lFJHtbW1qrm7/view?usp=drive_link",
  },
  {
    title: "Sertfikat Penghargaan kursus Bahasa Korea",
    issuer: "Koica",
    year: "2024",
    accent: "bg-sunshine",
    driveUrl:
      "https://drive.google.com/file/d/1Jmh-rOO1KGaSp2tNZ5fjU6_fBHpLa0t2/view?usp=drive_link",
  },
  {
    title: "Sertfikat Peserta lomba Olimpiade bidang Bahasa Inggris",
    issuer: "LKP ASTIKOM & DEEHATI GLOBAL LOOP",
    year: "2024",
    accent: "bg-sunshine",
    driveUrl:
      "https://drive.google.com/file/d/1_NPpFPE53TJ9hv_U2Zfq1r9HXeh2408K/view?usp=drive_link",
  },
];

function getDriveFileId(url: string) {
  return url.match(/drive\.google\.com\/file\/d\/([^/]+)/)?.[1];
}

function getDriveThumbnailUrl(url: string) {
  const fileId = getDriveFileId(url);

  if (fileId) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1200`;
  }

  return null;
}

function getDrivePreviewUrl(url: string) {
  const fileId = getDriveFileId(url);

  return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
}

export default function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState<
    (typeof certificates)[number] | null
  >(null);

  return (
    <>
      <section
        id="sertifikat"
        className="relative overflow-hidden bg-paper px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                Sertifikat dan pencapaian
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
                Koleksi sertifikat yang mendukung perjalanan belajar dan
                pengembangan kemampuanku.
              </p>
            </div>
            <span className="hidden text-sm font-medium text-ink/50 sm:block">
              {certificates.length} certificates
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {certificates.map((certificate) => (
              <article
                key={certificate.title}
                className="group flex min-w-0 flex-col rounded-2xl border-2 border-ink/10 bg-paper p-3 shadow-[4px_4px_0_rgba(33,28,52,0.1)] transition duration-300 hover:-translate-y-1 hover:border-teal/40 sm:p-4 sm:shadow-[5px_5px_0_rgba(33,28,52,0.1)]"
              >
                <div className="relative aspect-[1.35] overflow-hidden rounded-xl border border-ink/10 bg-white">
                  <div
                    className={`absolute inset-x-0 top-0 z-10 h-2 ${certificate.accent}`}
                  />
                  {getDriveThumbnailUrl(certificate.driveUrl) ? (
                    <div
                      role="img"
                      aria-label={`Preview ${certificate.title}`}
                      className="h-full w-full bg-contain bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${getDriveThumbnailUrl(certificate.driveUrl)})`,
                      }}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center px-5 text-center text-sm text-ink/55">
                      Tambahkan link Google Drive untuk menampilkan preview.
                    </div>
                  )}
                </div>
                <h3 className="mt-4 break-words font-display text-base font-semibold leading-snug text-ink sm:mt-5 sm:text-lg">
                  {certificate.title}
                </h3>
                <div className="mt-2 flex items-start justify-between gap-3 text-xs text-ink/60 sm:text-sm">
                  <span className="min-w-0 break-words">
                    {certificate.issuer}
                  </span>
                  <span className="shrink-0">{certificate.year}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCertificate(certificate)}
                  className="mt-4 inline-flex min-h-10 items-center text-sm font-semibold text-teal transition hover:text-coral sm:mt-5"
                >
                  Lihat Sertifikat{" "}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeCertificate && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-2 backdrop-blur-sm sm:p-4"
          role="presentation"
          onClick={() => setActiveCertificate(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            className="relative flex h-[calc(100dvh-1rem)] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-paper shadow-2xl sm:h-[min(88vh,760px)] sm:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-16 items-center justify-between gap-3 border-b border-ink/10 px-4 py-3 sm:px-5 sm:py-4">
              <h2
                id="certificate-modal-title"
                className="min-w-0 break-words pr-2 font-display text-base font-semibold leading-snug text-ink sm:text-lg"
              >
                {activeCertificate.title}
              </h2>
              <button
                type="button"
                aria-label="Tutup preview sertifikat"
                onClick={() => setActiveCertificate(null)}
                className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink/5 text-xl text-ink transition hover:bg-coral hover:text-paper"
              >
                ×
              </button>
            </div>
            <iframe
              src={getDrivePreviewUrl(activeCertificate.driveUrl)}
              title={`Preview PDF ${activeCertificate.title}`}
              className="min-h-0 flex-1 border-0 bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
}

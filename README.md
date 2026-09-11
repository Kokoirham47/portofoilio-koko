# Portofolio — Raden Muhammad Irham Ramadhan

Website portofolio satu halaman, dibuat dengan Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur

- `src/app/page.tsx` — merangkai semua section
- `src/components/` — `Nav`, `Hero`, `About`, `Projects`, `Contact`, `Footer`
- `src/app/globals.css` — token warna & font (ubah di sini kalau mau ganti palet)
- `public/` — avatar & thumbnail proyek (masih placeholder SVG, tinggal ganti)

## Yang masih perlu kamu isi

1. **Foto di kartu 3D** — ganti `public/assets/photo-placeholder.jpg` dengan foto kamu (disarankan rasio potret ~3:4, minimal 600×800px), nama filenya bisa sama atau beda. Kalau namanya beda, update prop di `Hero.tsx`: `<Card3D photoSrc="/assets/nama-file-kamu.jpg" />`.
2. **Foto di section About** — ganti `public/avatar-placeholder.svg` dengan foto kamu, lalu update `src="/avatar-placeholder.svg"` di `About.tsx`.
3. **Bio** — edit paragraf di `About.tsx`.
4. **Proyek** — edit array `projects` di `Projects.tsx` (judul, deskripsi, tag, gambar, dan tambahkan link kalau perlu).
5. **Kontak** — di `Contact.tsx`, channel selain Instagram masih ditandai "segera hadir". Ganti jadi link aktif begitu email/LinkedIn/GitHub kamu siap.

## Tentang kartu 3D di Hero

Section Hero menampilkan kartu ID 3D interaktif (bisa ditarik/diayun dengan mouse atau jari) — diadaptasi dari [fattahmaulana/3D_CARD](https://github.com/fattahmaulana/3D_CARD), dibangun dengan `three.js` + `@react-three/fiber` + `@react-three/rapier` (simulasi fisika tali).

- Komponennya ada di `src/components/card3d/Card3D.tsx`, dibungkus lewat `Card3DClient.tsx` supaya dimuat hanya di browser (`dynamic import`, `ssr: false`) karena WebGL tidak bisa dirender di server.
- Foto kamu ditempel otomatis ke permukaan kartu lewat prop `photoSrc`.
- Model 3D kartu (`public/assets/kartu.glb`) dan tekstur tali (`public/assets/bandd.png`) diambil dari repo aslinya — kalau suatu saat mau ganti bentuk/warna kartunya, kamu perlu mengedit ulang model `.glb`-nya (misal lewat Blender).

## Deploy ke Vercel

**Cara termudah (lewat GitHub):**
1. Push folder ini ke repository GitHub baru.
2. Buka [vercel.com](https://vercel.com), login/daftar, klik **Add New → Project**.
3. Pilih repo GitHub kamu, biarkan pengaturan default (Vercel otomatis mendeteksi Next.js).
4. Klik **Deploy** — selesai dalam waktu singkat, dapat URL `xxx.vercel.app`.

**Cara cepat lewat CLI:**
```bash
npm i -g vercel
vercel
```
Ikuti instruksi di terminal, lalu jalankan `vercel --prod` untuk deploy ke production.

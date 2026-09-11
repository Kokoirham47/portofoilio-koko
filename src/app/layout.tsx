import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Irham Ramadhan — Portofolio",
  description:
    "Portofolio Raden Muhammad Irham Ramadhan — proyek, cerita, dan cara menghubungi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={
          {
            "--font-fredoka": "'Fredoka', sans-serif",
            "--font-jakarta": "'Plus Jakarta Sans', sans-serif",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}

"use client";

import dynamic from "next/dynamic";

const Card3D = dynamic(() => import("@/components/card3d/Card3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[380px] w-full items-center justify-center text-sm text-ink/40 sm:h-[460px]">
      Memuat kartu…
    </div>
  ),
});

export default function Card3DClient() {
  return <Card3D />;
}

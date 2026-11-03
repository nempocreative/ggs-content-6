import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { feedTemplates, templatesFor, FEED_W, FEED_H, type FeedKind } from "@/lib/feed-templates";
import type { Brand } from "@/lib/content-plan";
import { FeedCard } from "@/components/feed/FeedCard";

const HEAD = { fontFamily: "'Trebuchet MS', sans-serif" };

type KindFilter = FeedKind | "semua";
type BrandFilter = Brand | "semua";

function FilterBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
        active ? "bg-ggs-pink text-white" : "bg-secondary text-secondary-foreground hover:bg-accent"
      }`}
    >
      {children}
    </button>
  );
}

function GalleryItem({ id }: { id: string }) {
  const t = feedTemplates.find((x) => x.id === id)!;
  const ref = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const scale = 0.32;

  async function download() {
    const node = ref.current?.querySelector<HTMLElement>(`[data-feed-card="${t.id}"]`);
    if (!node) return;
    setBusy(true);
    try {
      const url = await toPng(node, { pixelRatio: 1, width: FEED_W, height: FEED_H });
      const a = document.createElement("a");
      a.href = url;
      a.download = `${t.id}-1080x1440.png`;
      a.click();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={ref}
        className="overflow-hidden rounded-xl border border-border shadow-lg"
        style={{ width: FEED_W * scale, height: FEED_H * scale }}
      >
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}>
          <FeedCard t={t} />
        </div>
      </div>
      <div className="flex items-center justify-between gap-2" style={{ width: FEED_W * scale }}>
        <div className="text-sm font-medium text-foreground">{t.title}</div>
        <button
          onClick={download}
          disabled={busy}
          className="shrink-0 rounded-full bg-ggs-pink px-4 py-1.5 text-xs font-bold text-white disabled:opacity-50"
        >
          {busy ? "..." : "Unduh PNG"}
        </button>
      </div>
    </div>
  );
}

export function FeedGallery() {
  const [kind, setKind] = useState<KindFilter>("semua");
  const [brand, setBrand] = useState<BrandFilter>("semua");
  const list = templatesFor(kind, brand);

  return (
    <div className="min-h-screen bg-background px-8 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-black text-foreground" style={HEAD}>
          Desain Feed Instagram GGS
        </h1>
        <p className="pt-2 text-muted-foreground">
          Ukuran 1080 × 1440 piksel (rasio 3:4). Klik "Unduh PNG" untuk menyimpan desain siap posting.
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-6">
          <FilterBtn active={kind === "semua"} onClick={() => setKind("semua")}>Semua</FilterBtn>
          <FilterBtn active={kind === "promo"} onClick={() => setKind("promo")}>Promo</FilterBtn>
          <FilterBtn active={kind === "harian"} onClick={() => setKind("harian")}>Konten Harian</FilterBtn>
          <span className="mx-2 h-6 w-px bg-border" />
          <FilterBtn active={brand === "semua"} onClick={() => setBrand("semua")}>Dua Brand</FilterBtn>
          <FilterBtn active={brand === "beauty"} onClick={() => setBrand("beauty")}>GGS Beauty</FilterBtn>
          <FilterBtn active={brand === "hair"} onClick={() => setBrand("hair")}>GGS Hair Studio</FilterBtn>
        </div>

        <div className="flex flex-wrap gap-8 pt-8">
          {list.map((t) => (
            <GalleryItem key={t.id} id={t.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

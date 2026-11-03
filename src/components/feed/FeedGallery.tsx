import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { feedTemplates, FEED_W, FEED_H } from "@/lib/feed-templates";
import type { Brand } from "@/lib/content-plan";
import { FeedCard } from "@/components/feed/FeedCard";
import { FeedFrame } from "@/components/feed/FeedFrame";

const HEAD = { fontFamily: "'Trebuchet MS', sans-serif" };

/** Skala pratinjau: sebesar mungkin sampai batas maksimal, ikut lebar layar. */
const MAX_SCALE = 0.62;

function usePreviewScale() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      setScale(Math.min(MAX_SCALE, Math.max(0.25, w / FEED_W)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return { wrapRef, scale };
}

function GalleryItem({ id, master }: { id: string; master?: Brand }) {
  const t = master
    ? { id: `master-${master}`, title: "Master header & footer", brand: master }
    : feedTemplates.find((x) => x.id === id)!;
  const ref = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const { wrapRef, scale } = usePreviewScale();

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
    <div ref={wrapRef} className="w-full">
      <div
        className="mx-auto flex flex-col items-center gap-4"
        style={{ width: FEED_W * scale }}
      >
        <div
          ref={ref}
          className="overflow-hidden rounded-xl border border-border shadow-xl"
          style={{ width: FEED_W * scale, height: FEED_H * scale }}
        >
          <div style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}>
            {master ? (
              <FeedFrame id={t.id} brand={master}>
                <div className="m-[72px] flex flex-1 items-center justify-center rounded-[28px] border-4 border-dashed border-ggs-gray/40 text-[40px] text-ggs-gray">
                  Area isi konten
                </div>
              </FeedFrame>
            ) : (
              <FeedCard t={t as (typeof feedTemplates)[number]} />
            )}
          </div>
        </div>
        <button
          onClick={download}
          disabled={busy}
          className="rounded-full bg-ggs-pink px-7 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {busy ? "Menyiapkan..." : "Unduh PNG 1080×1440"}
        </button>
      </div>
    </div>
  );
}

export function FeedGallery() {
  const [brand, setBrand] = useState<Brand>("hair");

  return (
    <div className="min-h-screen bg-background px-8 py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-black text-foreground" style={HEAD}>
          Desain Feed Instagram GGS
        </h1>

        <div className="flex gap-2 border-b border-border pt-6">
          {(["hair", "beauty"] as const).map((b) => (
            <button
              key={b}
              onClick={() => setBrand(b)}
              className={`-mb-px border-b-4 px-6 py-3 text-base font-bold ${
                brand === b
                  ? "border-ggs-pink text-foreground"
                  : "border-transparent text-muted-foreground"
              }`}
            >
              {b === "hair" ? "Cowok — GGS Hair Studio" : "Cewek — GGS Beauty"}
            </button>
          ))}
        </div>
        <div className="pt-8">
          <GalleryItem key={`m-${brand}`} id="" master={brand} />
        </div>
      </div>
    </div>
  );
}

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./slides";

export function Deck() {
  const [i, setI] = useState(0);
  const [scale, setScale] = useState(0.5);

  const go = useCallback((d: number) => {
    setI((cur) => Math.min(slides.length - 1, Math.max(0, cur + d)));
  }, []);

  useEffect(() => {
    const onResize = () => {
      setScale(Math.min((window.innerWidth - 32) / 1280, (window.innerHeight - 120) / 720));
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") go(1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") go(-1);
      if (e.key === "Home") setI(0);
      if (e.key === "End") setI(slides.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const Slide = slides[i]!.el;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ggs-dark py-6">
      <div className="overflow-hidden rounded-lg shadow-2xl" style={{ width: 1280 * scale, height: 720 * scale }}>
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}>
          <Slide />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => go(-1)}
          disabled={i === 0}
          aria-label="Slide sebelumnya"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-1.5">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-6 bg-ggs-gold" : "w-2 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          disabled={i === slides.length - 1}
          aria-label="Slide berikutnya"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="text-xs text-white/40">
        Slide {i + 1} / {slides.length} — gunakan tombol panah ← → di keyboard
      </div>
    </div>
  );
}

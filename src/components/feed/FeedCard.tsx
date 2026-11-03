import type { FeedTemplate } from "@/lib/feed-templates";
import { FeedFrame } from "@/components/feed/FeedFrame";

const HEAD = { fontFamily: "'Trebuchet MS', sans-serif" };

/** Satu desain feed IG 1080×1440, dirender 1:1 lalu di-scale oleh galeri. */
export function FeedCard({ t }: { t: FeedTemplate }) {
  const dark = t.dark;
  return (
    <FeedFrame id={t.id} brand={t.brand} dark={dark} badge={t.badge} footer={t.footer}>
      {/* headline */}
      <div className="px-[72px] pt-[88px]">
        <div
          className={`text-[96px] font-black leading-[1.05] tracking-tight ${dark ? "text-white" : "text-ggs-ink"}`}
          style={HEAD}
        >
          {t.headline}
        </div>
        <div
          className={`pt-[20px] text-[40px] font-semibold ${t.brand === "beauty" ? "text-ggs-pink" : "text-ggs-gold"}`}
        >
          {t.sub}
        </div>
      </div>

      {/* isi */}
      <div className="flex flex-col gap-[28px] px-[72px] pt-[64px]">
        {t.body.map((line) => (
          <div key={line} className="flex items-start gap-[24px]">
            <div
              className={`mt-[14px] h-[18px] w-[18px] shrink-0 rounded-full ${
                t.brand === "beauty" ? "bg-ggs-pink" : "bg-ggs-gold"
              }`}
            />
            <div className={`text-[38px] leading-snug ${dark ? "text-white/85" : "text-ggs-ink"}`}>{line}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-auto px-[72px]">
        <div
          className={`rounded-[28px] py-[34px] text-center text-[40px] font-bold tracking-wide ${
            t.brand === "beauty" ? "bg-ggs-pink text-white" : "bg-ggs-gold text-ggs-dark"
          }`}
          style={HEAD}
        >
          {t.cta}
        </div>
      </div>
    </FeedFrame>
  );
}

import type { FeedTemplate } from "@/lib/feed-templates";
import { FEED_W, FEED_H } from "@/lib/feed-templates";
import logoBeauty from "@/assets/ggs-beauty-logo.jpg";
import logoHair from "@/assets/ggs-hair-studio-logo.png";

const HEAD = { fontFamily: "'Trebuchet MS', sans-serif" };
const BODY = { fontFamily: "Calibri, sans-serif" };

/** Satu desain feed IG 1080×1440, dirender 1:1 lalu di-scale oleh galeri. */
export function FeedCard({ t }: { t: FeedTemplate }) {
  const logo = t.brand === "beauty" ? logoBeauty : logoHair;
  const dark = t.dark;
  return (
    <div
      data-feed-card={t.id}
      className={`relative flex shrink-0 flex-col overflow-hidden ${dark ? "bg-ggs-dark" : "bg-ggs-pink-soft"}`}
      style={{ width: FEED_W, height: FEED_H, ...BODY }}
    >
      {/* aksen atas */}
      <div className={`h-[18px] w-full ${t.brand === "beauty" ? "bg-ggs-pink" : "bg-ggs-gold"}`} />

      {/* header: logo + nama brand */}
      <div className="flex items-center gap-[28px] px-[72px] pt-[56px]">
        <img
          src={logo}
          alt="logo"
          className={`h-[120px] w-[120px] rounded-full object-cover ring-4 ${dark ? "ring-white/20" : "ring-ggs-pink/20"}`}
        />
        <div>
          <div className={`text-[34px] font-bold tracking-wide ${dark ? "text-white" : "text-ggs-ink"}`} style={HEAD}>
            {t.brand === "beauty" ? "GGS BEAUTY" : "GGS HAIR STUDIO"}
          </div>
          <div className={`text-[24px] ${dark ? "text-white/60" : "text-ggs-gray"}`}>Garut, Jawa Barat</div>
        </div>
        {t.badge && (
          <div
            className={`ml-auto rounded-full px-[36px] py-[16px] text-[26px] font-bold tracking-widest ${
              t.brand === "beauty" ? "bg-ggs-pink text-white" : "bg-ggs-gold text-ggs-dark"
            }`}
            style={HEAD}
          >
            {t.badge}
          </div>
        )}
      </div>

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
      <div className="mt-auto px-[72px] pb-[40px]">
        <div
          className={`rounded-[28px] py-[34px] text-center text-[40px] font-bold tracking-wide ${
            t.brand === "beauty" ? "bg-ggs-pink text-white" : "bg-ggs-gold text-ggs-dark"
          }`}
          style={HEAD}
        >
          {t.cta}
        </div>
        <div className={`pt-[32px] text-center text-[26px] ${dark ? "text-white/50" : "text-ggs-gray"}`}>
          {t.footer} • Nempo.id
        </div>
      </div>
    </div>
  );
}

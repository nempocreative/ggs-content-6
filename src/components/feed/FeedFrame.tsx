import type { ReactNode } from "react";
import type { Brand } from "@/lib/content-plan";
import { FEED_W, FEED_H } from "@/lib/feed-templates";
import logoBeauty from "@/assets/ggs-beauty-logo.jpg";
import logoHair from "@/assets/ggs-hair-studio-logo.png";
import bgBeauty from "@/assets/feed-bg-beauty.jpg";
import bgHair from "@/assets/feed-bg-hair.jpg";

/** Font display buat nama brand + tagline; body tetap Calibri biar aman di Office. */
const DISPLAY = { fontFamily: "'Fraunces', 'Trebuchet MS', serif" };
const BODY = { fontFamily: "Calibri, sans-serif" };

const TAGLINE_LINE1 = "Grooming";
const TAGLINE_LINE2 = "is better";

/** Layer gelap/terang biar tulisan tetap kebaca di atas foto dekor. */
const SCRIM_LIGHT =
  "linear-gradient(180deg, rgba(255,255,255,.80) 0%, rgba(255,255,255,.30) 28%, rgba(255,255,255,.22) 62%, rgba(255,255,255,.86) 100%)";
const SCRIM_DARK =
  "linear-gradient(180deg, rgba(10,10,12,.80) 0%, rgba(10,10,12,.32) 28%, rgba(10,10,12,.24) 62%, rgba(10,10,12,.86) 100%)";

/** Master header + footer feed IG 1080×1440 dengan background dekor AI. */
export function FeedFrame({
  id, brand, dark, badge, footer, children,
}: { id: string; brand: Brand; dark?: boolean | undefined; badge?: string | undefined; footer?: string | undefined; children?: ReactNode }) {
  const beauty = brand === "beauty";
  const logo = beauty ? logoBeauty : logoHair;
  const bg = beauty ? bgBeauty : bgHair;
  const isDark = dark ?? brand === "hair";
  const accentBg = beauty ? "bg-ggs-pink" : "bg-ggs-gold";
  const accentText = beauty ? "text-ggs-pink" : "text-ggs-gold";
  const ink = isDark ? "text-white" : "text-ggs-ink";
  const muted = isDark ? "text-white/70" : "text-ggs-gray";
  const line = isDark ? "bg-white/25" : "bg-ggs-ink/15";
  const panel = isDark
    ? "bg-black/45 ring-1 ring-white/15 backdrop-blur-[10px]"
    : "bg-white/65 ring-1 ring-white/80 backdrop-blur-[10px]";
  const handle = footer ?? (beauty ? "@ggsbeauty" : "@ggshairstudio");

  return (
    <div
      data-feed-card={id}
      className={`relative flex shrink-0 flex-col overflow-hidden ${isDark ? "bg-ggs-dark" : "bg-ggs-pink-soft"}`}
      style={{ width: FEED_W, height: FEED_H, ...BODY }}
    >
      {/* background dekor AI (area kasir / meja salon) */}
      <img src={bg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: isDark ? SCRIM_DARK : SCRIM_LIGHT }} />

      {/* HEADER */}
      <div className="relative px-[52px] pt-[46px]">
        <div className={`relative overflow-hidden rounded-[36px] ${panel}`}>
          <div className={`absolute inset-y-0 left-0 w-[12px] ${accentBg}`} />

          <div className="flex items-center gap-[28px] py-[30px] pl-[46px] pr-[38px]">
            {/* logo dikasih cincin warna brand */}
            <div className={`shrink-0 rounded-full p-[7px] ${accentBg}`}>
              <img src={logo} alt="logo" className="h-[104px] w-[104px] rounded-full object-cover" />
            </div>

            {/* nama brand */}
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <div
                className={`whitespace-nowrap text-[54px] font-black uppercase leading-[0.9] tracking-[-0.01em] ${ink}`}
                style={DISPLAY}
              >
                {beauty ? "GGS Beauty" : "GGS Hair Studio"}
              </div>
              <div className="mt-[18px] flex items-center gap-[14px]">
                <div className={`h-[6px] w-[76px] rounded-full ${accentBg}`} />
                <div className={`h-[2px] flex-1 ${line}`} />
                <div className={`h-[12px] w-[12px] rotate-45 ${accentBg}`} />
              </div>
            </div>

            {/* tagline */}
            <div className="flex shrink-0 flex-col items-end">
              {badge && (
                <span
                  className={`mb-[10px] -rotate-2 rounded-full px-[26px] py-[9px] text-[22px] font-bold uppercase tracking-[0.18em] ${beauty ? "bg-ggs-pink text-white" : "bg-ggs-gold text-ggs-dark"}`}
                  style={BODY}
                >
                  {badge}
                </span>
              )}
              <span className={`text-[46px] italic leading-[0.95] ${ink}`} style={DISPLAY}>
                {TAGLINE_LINE1}
              </span>
              <span className={`text-[46px] italic leading-[0.95] ${ink}`} style={DISPLAY}>
                {TAGLINE_LINE2}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>

      {/* FOOTER */}
      <div className="relative px-[52px] pb-[44px]">
        <div className={`rounded-[34px] px-[34px] py-[26px] ${panel}`}>
          <div className="mb-[22px] flex items-center gap-[16px]">
            <div className={`h-[12px] w-[12px] rotate-45 ${accentBg}`} />
            <div className={`h-[2px] flex-1 ${line}`} />
            <div className={`h-[6px] w-[90px] rounded-full ${accentBg}`} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[16px]">
              <span className={`flex h-[48px] w-[48px] items-center justify-center rounded-full text-[24px] font-black ${accentBg} ${beauty ? "text-white" : "text-ggs-dark"}`} style={BODY}>@</span>
              <span className={`text-[28px] font-bold ${ink}`} style={BODY}>{handle}</span>
            </div>
            <span className={`text-[22px] font-bold uppercase tracking-[0.3em] ${accentText}`} style={BODY}>Booking via DM</span>
            <span className={`text-[22px] ${muted}`}>Nempo.id</span>
          </div>
        </div>
      </div>
    </div>
  );
}

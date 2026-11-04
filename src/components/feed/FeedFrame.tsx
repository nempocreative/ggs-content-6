import type { ReactNode } from "react";
import type { Brand } from "@/lib/content-plan";
import { FEED_W, FEED_H } from "@/lib/feed-templates";
import logoBeauty from "@/assets/ggs-beauty-logo.jpg";
import logoHair from "@/assets/ggs-hair-studio-logo.png";
import bgBeauty from "@/assets/feed-bg-beauty.jpg";
import bgHair from "@/assets/feed-bg-hair.jpg";

const HEAD = { fontFamily: "'Trebuchet MS', sans-serif" };
const BODY = { fontFamily: "Calibri, sans-serif" };

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
      <div className="relative px-[52px] pt-[48px]">
        <div className={`rounded-[34px] px-[34px] py-[28px] ${panel}`}>
          <div className="flex items-center gap-[26px]">
            <div className={`rounded-full p-[6px] ${accentBg}`}>
              <img src={logo} alt="logo" className="h-[104px] w-[104px] rounded-full object-cover" />
            </div>
            <div className="flex flex-col">
              <div className={`text-[20px] font-bold uppercase tracking-[0.4em] ${accentText}`} style={HEAD}>
                {beauty ? "Nail · Lash · Beauty" : "Barber · Hair · Style"}
              </div>
              <div className={`text-[44px] font-black leading-none tracking-tight ${ink}`} style={HEAD}>
                {beauty ? "GGS BEAUTY" : "GGS HAIR STUDIO"}
              </div>
              <div className={`mt-[6px] text-[22px] ${muted}`}>Garut, Jawa Barat</div>
            </div>
            {badge && (
              <div className={`ml-auto -rotate-3 rounded-[18px] px-[30px] py-[14px] text-[26px] font-black uppercase tracking-widest shadow-lg ${beauty ? "bg-ggs-pink text-white" : "bg-ggs-gold text-ggs-dark"}`} style={HEAD}>
                {badge}
              </div>
            )}
          </div>
          <div className="mt-[26px] flex items-center gap-[16px]">
            <div className={`h-[6px] w-[90px] rounded-full ${accentBg}`} />
            <div className={`h-[2px] flex-1 ${line}`} />
            <div className={`h-[12px] w-[12px] rotate-45 ${accentBg}`} />
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
              <span className={`flex h-[48px] w-[48px] items-center justify-center rounded-full text-[24px] font-black ${accentBg} ${beauty ? "text-white" : "text-ggs-dark"}`} style={HEAD}>@</span>
              <span className={`text-[28px] font-bold ${ink}`} style={HEAD}>{handle}</span>
            </div>
            <span className={`text-[22px] font-bold uppercase tracking-[0.3em] ${accentText}`} style={HEAD}>Booking via DM</span>
            <span className={`text-[22px] ${muted}`}>Nempo.id</span>
          </div>
        </div>
      </div>
    </div>
  );
}

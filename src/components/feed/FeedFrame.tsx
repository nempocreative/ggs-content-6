import type { ReactNode } from "react";
import type { Brand } from "@/lib/content-plan";
import { FEED_W, FEED_H } from "@/lib/feed-templates";
import logoBeauty from "@/assets/ggs-beauty-logo.jpg";
import logoHair from "@/assets/ggs-hair-studio-logo.png";

const HEAD = { fontFamily: "'Trebuchet MS', sans-serif" };
const BODY = { fontFamily: "Calibri, sans-serif" };

/** Master header + footer feed IG 1080×1440. Semua desain memakai bingkai ini. */
export function FeedFrame({
  id, brand, dark, badge, footer, children,
}: { id: string; brand: Brand; dark?: boolean | undefined; badge?: string | undefined; footer?: string | undefined; children?: ReactNode }) {
  const beauty = brand === "beauty";
  const logo = beauty ? logoBeauty : logoHair;
  const accentBg = beauty ? "bg-ggs-pink" : "bg-ggs-gold";
  const accentText = beauty ? "text-ggs-pink" : "text-ggs-gold";
  const ink = dark ? "text-white" : "text-ggs-ink";
  const muted = dark ? "text-white/60" : "text-ggs-gray";
  const line = dark ? "bg-white/15" : "bg-ggs-ink/10";
  const handle = footer ?? (beauty ? "@ggsbeauty" : "@ggshairstudio");
  return (
    <div
      data-feed-card={id}
      className={`relative flex shrink-0 flex-col overflow-hidden ${dark ? "bg-ggs-dark" : "bg-ggs-pink-soft"}`}
      style={{ width: FEED_W, height: FEED_H, ...BODY }}
    >
      {/* corner glow */}
      <div className={`pointer-events-none absolute -right-[220px] -top-[220px] h-[520px] w-[520px] rounded-full opacity-20 blur-[40px] ${accentBg}`} />
      <div className={`pointer-events-none absolute -bottom-[240px] -left-[200px] h-[480px] w-[480px] rounded-full opacity-15 blur-[40px] ${accentBg}`} />

      {/* HEADER */}
      <div className="relative px-[64px] pt-[56px]">
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
        <div className="mt-[34px] flex items-center gap-[16px]">
          <div className={`h-[6px] w-[90px] rounded-full ${accentBg}`} />
          <div className={`h-[2px] flex-1 ${line}`} />
          <div className={`h-[12px] w-[12px] rotate-45 ${accentBg}`} />
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>

      {/* FOOTER */}
      <div className="relative px-[64px] pb-[48px]">
        <div className="mb-[26px] flex items-center gap-[16px]">
          <div className={`h-[12px] w-[12px] rotate-45 ${accentBg}`} />
          <div className={`h-[2px] flex-1 ${line}`} />
          <div className={`h-[6px] w-[90px] rounded-full ${accentBg}`} />
        </div>
        <div className={`flex items-center justify-between rounded-full px-[36px] py-[20px] ${dark ? "bg-white/10" : "bg-white/70"}`}>
          <div className="flex items-center gap-[16px]">
            <span className={`flex h-[48px] w-[48px] items-center justify-center rounded-full text-[24px] font-black ${accentBg} ${beauty ? "text-white" : "text-ggs-dark"}`} style={HEAD}>@</span>
            <span className={`text-[28px] font-bold ${ink}`} style={HEAD}>{handle}</span>
          </div>
          <span className={`text-[22px] font-bold uppercase tracking-[0.3em] ${accentText}`} style={HEAD}>Booking via DM</span>
          <span className={`text-[22px] ${muted}`}>Nempo.id</span>
        </div>
      </div>
    </div>
  );
}

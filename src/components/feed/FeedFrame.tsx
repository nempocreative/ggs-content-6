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
  const accent = beauty ? "bg-ggs-pink" : "bg-ggs-gold";
  return (
    <div
      data-feed-card={id}
      className={`relative flex shrink-0 flex-col overflow-hidden ${dark ? "bg-ggs-dark" : "bg-ggs-pink-soft"}`}
      style={{ width: FEED_W, height: FEED_H, ...BODY }}
    >
      <div className={`h-[18px] w-full ${accent}`} />
      <div className="flex items-center gap-[28px] px-[72px] pt-[56px]">
        <img src={logo} alt="logo" className={`h-[120px] w-[120px] rounded-full object-cover ring-4 ${dark ? "ring-white/20" : "ring-ggs-pink/20"}`} />
        <div>
          <div className={`text-[34px] font-bold tracking-wide ${dark ? "text-white" : "text-ggs-ink"}`} style={HEAD}>
            {beauty ? "GGS BEAUTY" : "GGS HAIR STUDIO"}
          </div>
          <div className={`text-[24px] ${dark ? "text-white/60" : "text-ggs-gray"}`}>Garut, Jawa Barat</div>
        </div>
        {badge && (
          <div className={`ml-auto rounded-full px-[36px] py-[16px] text-[26px] font-bold tracking-widest ${beauty ? "bg-ggs-pink text-white" : "bg-ggs-gold text-ggs-dark"}`} style={HEAD}>
            {badge}
          </div>
        )}
      </div>
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      <div className={`flex items-center justify-between px-[72px] pb-[44px] pt-[24px] text-[26px] ${dark ? "text-white/50" : "text-ggs-gray"}`}>
        <span>{footer ?? (beauty ? "@ggsbeauty" : "@ggshairstudio")}</span>
        <span>Nempo.id</span>
      </div>
      <div className={`h-[18px] w-full ${accent}`} />
    </div>
  );
}

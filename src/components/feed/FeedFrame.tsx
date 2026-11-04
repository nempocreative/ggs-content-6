import type { ReactNode } from "react";
import type { Brand } from "@/lib/content-plan";
import { FEED_W, FEED_H } from "@/lib/feed-templates";
import logoBeauty from "@/assets/ggs-beauty-logo.jpg";
import logoHair from "@/assets/ggs-hair-studio-logo.png";
import bgHair from "@/assets/feed-bg-hair-clean.jpg";

/** Font display buat nama brand + tagline; body tetap Calibri biar aman di Office. */
const DISPLAY = { fontFamily: "'Fraunces', 'Trebuchet MS', serif" };
const BODY = { fontFamily: "Calibri, sans-serif" };

const TAGLINE_LINE1 = "Grooming";
const TAGLINE_LINE2 = "is better";

/** Layer gelap biar tulisan tetap kebaca di atas foto dekor cowok. */
const SCRIM_DARK =
  "linear-gradient(180deg, rgba(10,10,12,.80) 0%, rgba(10,10,12,.32) 28%, rgba(10,10,12,.24) 62%, rgba(10,10,12,.86) 100%)";

/** Awan lembut di atas pink cewek biar tidak flat. */
const PINK_SOFT_CLOUDS =
  "radial-gradient(120% 80% at 18% 8%, rgba(255,255,255,.28), transparent 62%)," +
  "radial-gradient(100% 70% at 88% 32%, rgba(255,255,255,.18), transparent 66%)," +
  "radial-gradient(90% 60% at 42% 92%, rgba(255,255,255,.14), transparent 62%)";

/** Tile logo cewek: putih di atas, pink menyala di bawah (sesuai acuan). */
const PINK_TILE = "linear-gradient(180deg, #ffffff 0%, var(--color-ggs-pink-hot) 100%)";

/** Ikon Instagram (garis) — dipakai di footer. */
function IgIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2.1} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.6" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.4" cy="6.6" r="1.35" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Ikon WhatsApp (isi) — dipakai di footer. */
function WaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.83 9.83 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0 11.89 11.89 0 0 0 .16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45 11.89 11.89 0 0 0 11.89-11.89c0-3.17-1.24-6.15-3.48-8.41Z" />
    </svg>
  );
}

/** Master header + footer feed IG 1080×1440. Cowok: foto barbershop gelap. Cewek: tone pink sesuai acuan. */
export function FeedFrame({
  id, brand, dark, badge, footer, children,
}: { id: string; brand: Brand; dark?: boolean | undefined; badge?: string | undefined; footer?: string | undefined; children?: ReactNode }) {
  const beauty = brand === "beauty";

  /** Kontak asli per brand: Instagram + WhatsApp. */
  const ig = beauty ? "@ggsbeauty.hair.co" : "@hairstudio.ggs.bdg";
  const wa = beauty ? "0823-4277-7723" : "0813-3335-9200";
  const handle = footer ?? ig;

  // ============ CEWEK: tone pink (acuan user) ============
  if (beauty) {
    return (
      <div
        data-feed-card={id}
        className="relative flex shrink-0 flex-col overflow-hidden bg-ggs-pink-brand"
        style={{ width: FEED_W, height: FEED_H, ...BODY }}
      >
        <div className="absolute inset-0" style={{ background: PINK_SOFT_CLOUDS }} />

        {/* HEADER */}
        <div className="relative px-[52px] pt-[46px]">
          <div className="flex items-center gap-[30px]">
            <div className="shrink-0 rounded-[30px] p-[14px]" style={{ background: PINK_TILE }}>
              <img src={logoBeauty} alt="logo" className="h-[104px] w-[104px] rounded-full object-cover" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <div className="whitespace-nowrap text-[36px] font-bold uppercase leading-[1] tracking-[0.01em] text-white" style={DISPLAY}>
                GGS Beauty
              </div>
              <div className="mt-[14px] flex items-center gap-[12px]">
                <div className="h-[4px] w-[62px] rounded-full bg-white" />
                <div className="h-[1px] flex-1 bg-white/45" />
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-end">
              {badge && (
                <span className="mb-[10px] rounded-full bg-white px-[26px] py-[9px] text-[22px] font-bold uppercase tracking-[0.18em] text-ggs-pink-deep" style={BODY}>
                  {badge}
                </span>
              )}
              <span className="text-[30px] italic leading-[1.05] text-white" style={DISPLAY}>{TAGLINE_LINE1}</span>
              <span className="text-[30px] italic leading-[1.05] text-white" style={DISPLAY}>{TAGLINE_LINE2}</span>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>

        {/* FOOTER: bar pink tua + pill putih */}
        <div className="relative px-[52px] pb-[34px]">
          <div className="flex items-center justify-between gap-[18px] rounded-[30px] bg-ggs-pink-deep px-[26px] py-[20px]">
            <span className="flex items-center gap-[10px] rounded-full bg-white px-[20px] py-[10px] text-[20px] font-bold text-ggs-pink-deep" style={BODY}>
              <IgIcon className="h-[20px] w-[20px]" />
              {handle}
            </span>
            <span className="shrink-0 text-[18px] font-black uppercase tracking-[0.16em] text-white" style={BODY}>
              Booking Now
            </span>
            <span className="flex items-center gap-[10px] rounded-full bg-white px-[20px] py-[10px] text-[20px] font-bold text-ggs-pink-deep" style={BODY}>
              <WaIcon className="h-[19px] w-[19px]" />
              {wa}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ============ COWOK: foto barbershop gelap + emas ============
  const isDark = dark ?? true;
  const panel = isDark
    ? "bg-black/45 ring-1 ring-white/15 backdrop-blur-[10px]"
    : "bg-white/65 ring-1 ring-white/80 backdrop-blur-[10px]";
  const ink = isDark ? "text-white" : "text-ggs-ink";
  const line = isDark ? "bg-white/25" : "bg-ggs-ink/15";

  return (
    <div
      data-feed-card={id}
      className="relative flex shrink-0 flex-col overflow-hidden bg-ggs-dark"
      style={{ width: FEED_W, height: FEED_H, ...BODY }}
    >
      <img src={bgHair} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: isDark ? SCRIM_DARK : "transparent" }} />

      {/* HEADER */}
      <div className="relative px-[52px] pt-[46px]">
        <div className={`relative overflow-hidden rounded-[36px] ${panel}`}>
          <div className="absolute inset-y-0 left-0 w-[12px] bg-ggs-gold" />

          <div className="flex items-center gap-[36px] py-[30px] pl-[46px] pr-[38px]">
            <div className="shrink-0 rounded-full p-[7px] bg-ggs-gold">
              <img src={logoHair} alt="logo" className="h-[104px] w-[104px] rounded-full object-cover" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <div className={`whitespace-nowrap text-[36px] font-bold uppercase leading-[1] tracking-[0.01em] ${ink}`} style={DISPLAY}>
                GGS Hair Studio
              </div>
              <div className="mt-[14px] flex items-center gap-[12px]">
                <div className="h-[4px] w-[62px] rounded-full bg-ggs-gold" />
                <div className={`h-[1px] flex-1 ${line}`} />
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-end">
              {badge && (
                <span className="mb-[10px] -rotate-2 rounded-full bg-ggs-gold px-[26px] py-[9px] text-[22px] font-bold uppercase tracking-[0.18em] text-ggs-dark" style={BODY}>
                  {badge}
                </span>
              )}
              <span className={`text-[30px] italic leading-[1.05] ${ink}`} style={DISPLAY}>{TAGLINE_LINE1}</span>
              <span className={`text-[30px] italic leading-[1.05] ${ink}`} style={DISPLAY}>{TAGLINE_LINE2}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>

      {/* FOOTER */}
      <div className="relative px-[52px] pb-[34px]">
        <div className={`rounded-[26px] px-[26px] py-[18px] ${panel}`}>
          <div className="mb-[14px] flex items-center gap-[12px]">
            <div className={`h-[1px] flex-1 ${line}`} />
            <div className="h-[3px] w-[58px] rounded-full bg-ggs-gold" />
          </div>

          {/* baris 1: Instagram + tombol booking */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[12px]">
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-ggs-gold text-ggs-dark">
                <IgIcon className="h-[21px] w-[21px]" />
              </span>
              <span className={`text-[22px] font-bold ${ink}`} style={BODY}>{handle}</span>
            </div>
            <span className="rounded-full bg-ggs-gold px-[20px] py-[8px] text-[16px] font-black uppercase tracking-[0.16em] text-ggs-dark" style={BODY}>
              Booking Now
            </span>
          </div>

          {/* baris 2: WhatsApp */}
          <div className="mt-[12px] flex items-center gap-[12px]">
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-ggs-gold text-ggs-dark">
              <WaIcon className="h-[19px] w-[19px]" />
            </span>
            <span className={`text-[21px] font-bold tracking-[0.02em] ${ink}`} style={BODY}>{wa}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

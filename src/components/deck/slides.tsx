import type { ReactNode } from "react";
import { briefs, catalogService, scheduledBrief, SERVICE_SOURCE, type Brand } from "@/lib/content-plan";
import { PILLARS, TARGET, JAPAN_DAYS, JAPAN_TARGET, SLOTS, days, schedBeauty, schedHair, schedJapan, weekRanges, shortName, pillarName, dualName, type PillarKey } from "@/lib/schedule";
import { captions, captionRules, hashtags } from "@/lib/captions";
import { hookBank, hookFormulas, hookRules, japanHooks } from "@/lib/hooks";
import { episodeFlow, talkClips, talkEpisodes, talkFlow, talkMeta, talkQuestions, talkRules } from "@/lib/talk";

import logoBeauty from "@/assets/ggs-beauty-logo.jpg";
import logoHair from "@/assets/ggs-hair-studio-logo.png";
import salonBeauty from "@/assets/salon_beauty.jpg";
import salonHair from "@/assets/salon_hair.jpg";
import salonClosing from "@/assets/salon_closing.jpg";

const HEAD = { fontFamily: "'Trebuchet MS', sans-serif" };
const BODY = { fontFamily: "Calibri, sans-serif" };

function Stage({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`slide-content relative h-[720px] w-[1280px] shrink-0 overflow-hidden ${dark ? "bg-ggs-dark" : "bg-background"}`}
      style={BODY}
    >
      {children}
      <div className={`pointer-events-none absolute inset-x-0 bottom-[8px] z-10 text-center text-[14px] font-bold ${dark ? "text-ggs-gold/70" : "text-ggs-gray/70"}`}>
        Nempo.id
      </div>
    </div>
  );
}

function Footer({ n, dark }: { n: number; dark?: boolean }) {
  return (
    <div className={`absolute right-12 bottom-6 text-[13px] ${dark ? "text-white/40" : "text-ggs-gray"}`}>
      Jadwal Konten GGS • {n}
    </div>
  );
}

function RoundLogo({ src, size = 96, ring = "ring-white/20" }: { src: string; size?: number; ring?: string }) {
  return (
    <img
      src={src}
      alt="logo"
      className={`rounded-full object-cover ring-2 ${ring}`}
      style={{ width: size, height: size }}
    />
  );
}

function Kicker({ children, color }: { children: ReactNode; color: "pink" | "gold" }) {
  return (
    <div
      className={`text-[15px] font-bold tracking-[0.25em] ${color === "pink" ? "text-ggs-pink" : "text-ggs-gold"}`}
      style={BODY}
    >
      {children}
    </div>
  );
}

// Tanda jenis konten: video (rekam) vs design (foto/carousel).
function TypeFlag({ k }: { k: string }) {
  const video = PILLARS.find((p) => p.key === k)?.video ?? false;
  return (
    <span
      className={`content-type-flag ${video ? "bg-ggs-gold-soft text-ggs-ink" : "bg-ggs-pink-soft text-ggs-pink"}`}
    >
      {video ? "VIDEO" : "DESIGN"}
    </span>
  );
}

// ---- 1. Cover ----
function CoverSlide() {
  return (
    <Stage>
      <div className="absolute top-0 left-0 h-full w-[18px] bg-ggs-pink" />
      <div className="absolute top-0 right-0 h-full w-[18px] bg-ggs-gold" />
      <div className="absolute top-0 right-[18px] flex h-[360px] w-[382px] flex-col items-center justify-center gap-5 bg-ggs-pink-soft">
        <RoundLogo src={logoBeauty} size={112} ring="ring-ggs-pink/30" />
        <span className="text-[13px] font-bold tracking-[0.25em] text-ggs-pink">GGS BEAUTY</span>
      </div>
      <div className="absolute top-[360px] right-[18px] flex h-[360px] w-[382px] flex-col items-center justify-center gap-5 bg-ggs-dark">
        <RoundLogo src={logoHair} size={112} ring="ring-ggs-gold/40" />
        <span className="text-[13px] font-bold tracking-[0.25em] text-ggs-gold">GGS HAIR STUDIO</span>
      </div>
      <div className="absolute top-[150px] left-[90px] text-[17px] tracking-[0.3em] text-ggs-pink">
        RENCANA KONTEN 4 MINGGU • 4 NOV – 1 DES 2026
      </div>
      <h1 className="slide-title-lg absolute top-[212px] left-[90px] font-bold text-ggs-ink" style={HEAD}>
        Jadwal Konten
      </h1>
      <div className="slide-subtitle absolute top-[340px] left-[90px] w-[700px]" style={HEAD}>
        <span className="font-bold text-ggs-pink">GGS Beauty</span>
        <span className="text-ggs-gray/50"> × </span>
        <span className="font-bold text-ggs-gold">GGS Hair Studio</span>
      </div>
      <div className="absolute top-[430px] left-[90px] h-[3px] w-[120px] bg-ggs-gold" />
      <div className="absolute top-[470px] left-[90px] text-[18px] text-ggs-gray">
        3 konten per hari • Podcast tiap Jumat • 2 akun, 1 strategi
      </div>
      <div className="absolute bottom-[50px] left-[90px] text-[14px] tracking-[0.15em] text-ggs-gray">
        NOVEMBER 2026
      </div>
    </Stage>
  );
}

// ---- 2. Overview stats ----
function StatsSlide() {
  const stats = [
    { n: "168", l: "konten salon (84 per akun)", c: "text-ggs-pink" },
    { n: "3", l: "konten per hari untuk tiap akun", c: "text-ggs-gold" },
    { n: "2", l: "video maksimal per hari — selalu di-mix", c: "text-ggs-pink" },
    { n: "28", l: "hari tayang, 4 Nov – 1 Des 2026", c: "text-ggs-gold" },
  ];
  return (
    <Stage>
      <div className="absolute top-[64px] left-[76px]">
        <Kicker color="pink">01 — RINGKASAN</Kicker>
      </div>
      <h2 className="slide-title absolute top-[104px] left-[76px] font-bold text-ggs-ink" style={HEAD}>
        Sekilas Rencana
      </h2>
      <div className="absolute top-[230px] left-[76px] grid w-[1128px] grid-cols-4 gap-[40px]">
        {stats.map((s) => (
          <div key={s.n + s.l} className="min-w-0">
            <div className={`slide-stat font-bold ${s.c}`} style={HEAD}>
              {s.n}
            </div>
            <div className="mt-4 text-[16px] leading-snug text-ggs-gray">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[110px] left-[76px] flex w-[1128px] items-center border-l-[10px] border-ggs-pink bg-ggs-pink-soft px-8 py-6">
        <p className="text-[16px] leading-relaxed text-ggs-ink">
          Tim salon tetap produksi 3 konten per hari per akun. Jadwal owner di Jepang terpisah: 27 materi
          personal branding & lotion pada 16–24 November. Podcast libur selama owner di Jepang.
        </p>
      </div>
      <Footer n={2} />
    </Stage>
  );
}

// ---- 3. Pillars ----
function PillarsSlide() {
  const mainPillars = PILLARS.filter((p) => p.key !== "jpn" && p.key !== "lotion");
  return (
    <Stage>
      <div className="absolute top-[64px] left-[76px]">
        <Kicker color="pink">02 — PILAR KONTEN</Kicker>
      </div>
      <h2 className="slide-title absolute top-[104px] left-[76px] font-bold text-ggs-ink" style={HEAD}>
        5 Pilar Konten
      </h2>
      <div className="absolute top-[188px] left-[76px] w-[1128px]">
        {mainPillars.map((p, i) => (
          <div key={p.key} className="grid h-[78px] grid-cols-[44px_360px_1fr_100px] items-center gap-6 border-b border-border">
            <div
              className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full text-[16px] font-bold text-primary-foreground ${p.video ? "bg-ggs-gold" : "bg-ggs-pink"}`}
              style={HEAD}
            >
              0{i + 1}
            </div>
            <div className="slide-body font-bold text-ggs-ink" style={HEAD}>
              {p.full}
            </div>
            <div className="text-[15px] leading-[1.45] text-ggs-gray">{p.desc}</div>
            <div className="flex justify-end"><TypeFlag k={p.key} /></div>
          </div>
        ))}
      </div>
      <div className="absolute top-[600px] left-[76px] flex w-[1128px] items-center gap-8 border-l-2 border-ggs-gold pl-5">
        <div className="shrink-0 text-[14px] font-bold text-ggs-ink">KHUSUS 16–24 NOV</div>
        <div className="text-[15px] leading-relaxed text-ggs-gray">Japan Diaries — personal branding owner<br />Promo Lotion Tone Up — foto produk & carousel</div>
      </div>
      <Footer n={3} />
    </Stage>
  );
}

// ---- 4. Rhythm ----
function RhythmSlide() {
  const times = [
    { t: "11:00", d: "Promo pagi — foto atau carousel menu salon", dark: false },
    { t: "16:00", d: "Podcast Ngopi Sore — tiap Jumat, satu episode", dark: true },
    { t: "19:30", d: "Prime time — video utama atau Ngobras", dark: false },
  ];
  const rules = [
    "Maksimal 2 video per hari — tiap hari selalu ada Promo design (foto atau carousel).",
    "Komedi tampil lebih jarang (12x): Si Elis di GGS Beauty, Comedy di GGS Hair Studio — supaya tetap segar.",
  ];
  return (
    <Stage>
      <div className="absolute top-[64px] left-[76px]">
        <Kicker color="pink">03 — RITME TAYANG</Kicker>
      </div>
      <h2 className="slide-title absolute top-[104px] left-[76px] font-bold text-ggs-ink" style={HEAD}>
        Satu Hari, Tiga Slot Tayang
      </h2>
      <div className="absolute top-[220px] left-[76px] flex gap-[28px]">
        {times.map((it) => (
          <div
            key={it.t}
            className={`h-[220px] w-[357px] rounded-lg p-8 ${it.dark ? "bg-ggs-pink" : "bg-muted"}`}
          >
            <div className={`slide-title font-bold ${it.dark ? "text-primary-foreground" : "text-ggs-ink"}`} style={HEAD}>
              {it.t}
            </div>
            <div className={`mt-5 text-[15px] ${it.dark ? "text-white/85" : "text-ggs-gray"}`}>{it.d}</div>
          </div>
        ))}
      </div>
      <div className="absolute top-[490px] left-[76px] flex w-[1128px] flex-col gap-5">
        {rules.map((r, i) => (
          <div key={r} className="flex items-center gap-4">
            <div className={`h-[18px] w-[18px] shrink-0 ${i === 0 ? "bg-ggs-pink" : "bg-ggs-gold"}`} />
            <div className="text-[17px] text-ggs-ink">{r}</div>
          </div>
        ))}
      </div>
      <Footer n={4} />
    </Stage>
  );
}

// ---- 5. Section Beauty ----
function SectionBeauty() {
  return (
    <Stage>
      <img src={salonBeauty} alt="GGS Beauty" className="absolute top-0 left-0 h-full w-[580px] object-cover" />
      <div className="absolute top-[200px] left-[660px]">
        <Kicker color="pink">BAGIAN 01</Kicker>
      </div>
      <h2 className="slide-title absolute top-[250px] left-[660px] font-bold text-ggs-ink" style={HEAD}>
        GGS Beauty
      </h2>
      <p className="absolute top-[380px] left-[660px] text-[18px] leading-relaxed text-ggs-gray">
        84 konten • putih-pink • 4 minggu
        <br />
        Jadwal mingguan di halaman berikutnya.
      </p>
      <div className="absolute bottom-[80px] left-[660px]">
        <RoundLogo src={logoBeauty} size={100} />
      </div>
    </Stage>
  );
}

// ---- Week table ----
function WeekTable({ sched, start, light }: { sched: string[][]; start: number; light: boolean }) {
  const headerCls = light ? "bg-ggs-pink text-white" : "bg-ggs-gold text-ggs-ink";
  const dayCls = light ? "bg-ggs-pink-soft text-ggs-pink" : "bg-ggs-dark-card text-ggs-gold";
  const cellCls = light ? "bg-background text-ggs-ink" : "bg-ggs-dark-card text-primary-foreground/90";
  const borderCls = light ? "border-neutral-200" : "border-white/10";
  return (
    <table className={`w-full table-fixed border-collapse text-[15px] ${borderCls}`}>
      <thead>
        <tr>
          {["Hari", ...SLOTS].map((h) => (
            <th key={h} className={`border ${borderCls} ${headerCls} px-3 py-2 text-center text-[15px] font-bold ${h === "Hari" ? "w-[155px]" : ""}`}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sched.slice(start, start + 7).map((cells, d) => (
          <tr key={d} className="h-[65px]">
            <td className={`border ${borderCls} ${dayCls} px-3 py-2 text-left text-[14px] font-bold`}>
              {days[start + d]}
            </td>
            {cells.map((k, s) => (
              <td key={s} className={`border ${borderCls} ${cellCls} px-3.5 py-1.5 text-left align-middle`}>
                <div className={`schedule-cell-heading ${light ? "text-ggs-gray" : "text-primary-foreground/60"}`}><span>{shortName(k, light ? "beauty" : "hair")}</span><TypeFlag k={k} /></div>
                <div className="mt-1 text-[13px] leading-[1.25]">{scheduledBrief(light ? "beauty" : "hair", sched, start + d, s)?.topic}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function WeekSlide({ w, brand }: { w: number; brand: "beauty" | "hair" }) {
  const light = brand === "beauty";
  return (
    <Stage dark={!light}>
      <div className="absolute top-[56px] left-[64px]">
        <Kicker color={light ? "pink" : "gold"}>
          PRODUKSI SALON • {light ? "GGS BEAUTY" : "GGS HAIR STUDIO"}
        </Kicker>
      </div>
      <h2
        className={`slide-title absolute top-[96px] left-[64px] font-bold ${light ? "text-ggs-ink" : "text-primary-foreground"}`}
        style={HEAD}
      >
        Minggu {w + 1}
      </h2>
      <div className={`absolute top-[112px] right-[64px] text-[17px] ${light ? "text-ggs-gray" : "text-white/50"}`}>
        {weekRanges[w]}
      </div>
      <div className="absolute top-[170px] left-[64px] w-[1152px]">
        <WeekTable sched={light ? schedBeauty : schedHair} start={w * 7} light={light} />
      </div>
      <div className={`absolute bottom-[26px] left-[64px] text-[12px] ${light ? "text-ggs-gray" : "text-white/40"}`}>
        {w === 1 || w === 2
          ? "16–24 November: tim salon tetap produksi • Podcast libur • konten owner & lotion ada di jadwal Jepang terpisah"
          : "Podcast Ngopi Sore tiap Jumat jam 16:00 • topik diputar per layanan • harga/promo wajib dikonfirmasi"}
      </div>
    </Stage>
  );
}

function JapanScheduleSlide({ part }: { part: number }) {
  const start = part === 0 ? 0 : 5;
  const end = part === 0 ? 5 : 9;
  return (
    <Stage>
      <div className="absolute top-[56px] left-[64px]"><Kicker color="gold">PRODUKSI JEPANG • OWNER & PRODUK</Kicker></div>
      <h2 className="slide-title absolute top-[96px] left-[64px] font-bold text-ggs-ink" style={HEAD}>Jadwal Jepang {part + 1}</h2>
      <div className="absolute top-[112px] right-[64px] text-[17px] text-ggs-gray">{part === 0 ? "16–20" : "21–24"} November 2026</div>
      <div className="absolute top-[180px] left-[64px] w-[1152px]">
        <table className="w-full table-fixed border-collapse">
          <thead><tr>{["Hari", "Lotion Tone Up • Foto / Carousel", "Owner • Personal Branding", "Lotion Tone Up • Foto / Carousel"].map((label, i) => <th key={`${i}-${label}`} className={`border border-border bg-ggs-gold-soft px-4 py-3 text-[15px] text-ggs-ink ${i === 0 ? "w-[155px]" : ""}`}>{label}</th>)}</tr></thead>
          <tbody>{schedJapan.slice(start, end).map((row, offset) => {
            const day = start + offset;
            return <tr key={day} className="h-[72px]">
              <td className="border border-border px-4 text-[14px] font-bold text-ggs-ink">{days[JAPAN_DAYS[0] + day]}</td>
              {row.map((key, slot) => <td key={slot} className="border border-border px-4 py-2 text-left align-middle">
                <div className="schedule-cell-heading text-ggs-gray"><span>{shortName(key)}</span><TypeFlag k={key} /></div>
                <div className="mt-1 text-[14px] leading-[1.35] text-ggs-ink">{scheduledBrief("beauty", schedJapan, day, slot)?.topic}</div>
              </td>)}
            </tr>;
          })}</tbody>
        </table>
      </div>
      <div className="absolute bottom-[66px] left-[64px] w-[1152px] text-[14px] leading-relaxed text-ggs-gray">27 materi produksi owner: {JAPAN_TARGET.jpn} vlog + {JAPAN_TARGET.lotion} foto/carousel Lotion Tone Up; terpisah dari 168 konten salon.<br />Ide lokasi menyesuaikan perjalanan aktual; nama, manfaat & harga lotion dikonfirmasi. Penempatan tayang dikoordinasikan dengan tim salon.</div>
      <Footer n={18 + part} />
    </Stage>
  );
}

// ---- 10. Section Hair ----
function SectionHair() {
  return (
    <Stage dark>
      <img src={salonHair} alt="GGS Hair Studio" className="absolute top-0 right-0 h-full w-[580px] object-cover" />
      <div className="absolute top-[200px] left-[90px]">
        <Kicker color="gold">BAGIAN 02</Kicker>
      </div>
      <h2 className="slide-title absolute top-[250px] left-[90px] font-bold text-primary-foreground" style={HEAD}>
        GGS Hair Studio
      </h2>
      <p className="absolute top-[375px] left-[90px] text-[18px] leading-relaxed text-white/50">
        84 konten • hitam-gold • 4 minggu
        <br />
        Jadwal mingguan di halaman berikutnya.
      </p>
      <div className="absolute bottom-[80px] left-[90px]">
        <RoundLogo src={logoHair} size={100} />
      </div>
    </Stage>
  );
}

// ---- 15. Distribution ----
function DistributionSlide() {
  const max = Math.max(...Object.values(TARGET)) * 1.15;
  return (
    <Stage>
      <div className="absolute top-[64px] left-[76px]">
        <Kicker color="pink">07 — DISTRIBUSI</Kicker>
      </div>
      <h2 className="slide-title absolute top-[104px] left-[76px] font-bold text-ggs-ink" style={HEAD}>
        Distribusi Konten Salon per Akun
      </h2>
      <div className="absolute top-[210px] left-[76px] grid h-[360px] w-[760px] grid-cols-5 items-end gap-4 border-b-2 border-border pb-0">
        {PILLARS.filter((p) => p.key !== "jpn" && p.key !== "lotion").map((p) => (
          <div key={p.key} className="flex min-w-0 flex-col items-center gap-3">
            <div className="flex h-[300px] items-end gap-2">
              {(["beauty", "hair"] as const).map((b) => (
                <div key={b} className="flex w-[30px] flex-col items-center">
                  <span className="mb-1 text-[12px] font-bold text-ggs-ink">{TARGET[p.key]}</span>
                  <div
                    className={`w-full rounded-t ${b === "beauty" ? "bg-ggs-pink" : "bg-ggs-gold"}`}
                    style={{ height: `${(TARGET[p.key] / max) * 280}px` }}
                  />
                </div>
              ))}
            </div>
            <span className="flex h-[40px] w-full items-start justify-center text-center text-[13px] leading-[1.35] text-ggs-gray">{dualName(p.key)}</span>
          </div>
        ))}
      </div>
      <div className="absolute top-[600px] left-[76px] flex gap-6 text-[13px] text-ggs-gray">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-ggs-pink" /> GGS Beauty
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-ggs-gold" /> GGS Hair Studio
        </span>
      </div>
      <div className="absolute top-[220px] right-[76px] w-[280px]">
        <div className="slide-stat font-bold text-ggs-pink" style={HEAD}>
          84
        </div>
        <div className="mt-3 text-[15px] text-ggs-gray">konten per akun dalam 28 hari</div>
        <div className="mt-8 border-l-2 border-ggs-gold pl-5 text-[14px] leading-relaxed text-ggs-ink">
          Komedi sengaja 12x — Si Elis di Beauty, Comedy di Hair Studio.
          <br /><br />Jepang terpisah: 9 vlog + 18 foto/carousel lotion. Tidak dihitung dalam 84 konten salon per akun.
        </div>
      </div>
      <Footer n={20} />
    </Stage>
  );
}

// ---- 20. Closing ----
function ClosingSlide() {
  return (
    <Stage dark>
      <img src={salonClosing} alt="GGS" className="absolute top-0 right-0 h-full w-[610px] object-cover" />
      <h2 className="slide-title absolute top-[240px] left-[90px] font-bold text-primary-foreground" style={HEAD}>
        Terima Kasih
      </h2>
      <div className="absolute top-[365px] left-[90px] text-[24px] text-ggs-gold italic">Grooming is Better</div>
      <div className="absolute bottom-[70px] left-[90px] text-[15px] text-white/40">
        Jadwal Konten GGS • 4 Nov – 1 Des 2026
      </div>
    </Stage>
  );
}

// ---- 7-8. Content ideas per service ----
function ContentIdeasSlide({ brand, num }: { brand: Brand; num: number }) {
  const isBeauty = brand === "beauty";
  const selections: Record<PillarKey, number> = { talk: 3, elis: 3, cine: 3, ngobras: 3, promo: 3, jpn: 0, lotion: 0 };
  return (
    <Stage dark={!isBeauty}>
      <div className="absolute top-[42px] left-[64px]">
        <Kicker color={isBeauty ? "pink" : "gold"}>
          {isBeauty ? "04 — GGS BEAUTY" : "05 — GGS HAIR STUDIO"} • LAYANAN & PENGAMBILAN
        </Kicker>
      </div>
      <h2 className={`slide-title absolute top-[80px] left-[64px] font-bold ${isBeauty ? "text-ggs-ink" : "text-primary-foreground"}`} style={HEAD}>
        Layanan Nyata, Cerita yang Spesifik
      </h2>
      <div className="absolute top-[158px] left-[64px] w-[1152px]">
        {PILLARS.filter((p) => p.key !== "jpn" && p.key !== "lotion").map((pillar) => {
          const brief = briefs[brand][pillar.key][selections[pillar.key]];
          if (!brief) return null;
          return (
            <div key={pillar.key} className={`grid h-[96px] grid-cols-[210px_1fr] items-center gap-8 border-b py-2 ${isBeauty ? "border-border" : "border-primary-foreground/15"}`}>
              <div>
                <div className={`text-[18px] font-bold ${isBeauty ? "text-ggs-pink" : "text-ggs-gold"}`} style={HEAD}>{pillarName(pillar.key, brand)}</div>
                <div className={`mt-1 text-[13px] ${isBeauty ? "text-ggs-gray" : "text-primary-foreground/65"}`}>{brief.format}</div>
              </div>
              <div>
                <div className={`text-[18px] font-bold ${isBeauty ? "text-ggs-ink" : "text-primary-foreground"}`}>{brief.topic}</div>
                <div className={`mt-0.5 text-[12px] ${isBeauty ? "text-ggs-pink" : "text-ggs-gold"}`}>
                  Layanan: {catalogService(brand, brief)?.category} · {brief.service}
                </div>
                <div className={`mt-1 text-[14px] leading-[1.3] ${isBeauty ? "text-ggs-gray" : "text-primary-foreground/75"}`}>{brief.flow}</div>
              </div>
            </div>
          );
        })}
      </div>
      <a href={SERVICE_SOURCE} target="_blank" rel="noreferrer" className={`absolute bottom-[48px] left-[64px] text-[12px] underline underline-offset-4 ${isBeauty ? "text-ggs-gray" : "text-primary-foreground/65"}`}>
        Acuan: daftar layanan di GitHub • harga dan promo aktif dikonfirmasi ke salon sebelum tayang
      </a>
      <Footer n={num} dark={!isBeauty} />
    </Stage>
  );
}

// ---- 9. Production flow ----
function FlowSlide() {
  const steps = [
    {
      n: "01",
      t: "Brief tiap Senin",
      d: "Cocokkan menu GitHub dengan salon, validasi harga, pilih topik dari jadwal dan siapkan naskah.",
    },
    {
      n: "02",
      t: "Syuting batch",
      d: "Izin pelanggan dahulu; rekam kondisi awal, detail proses dan hasil. Foto/carousel diambil pada sesi yang sama.",
    },
    {
      n: "03",
      t: "Editing H-1",
      d: "Pilih footage, potong klip podcast dan siapkan foto Promo. Hindari filter before–after dan klaim medis.",
    },
    {
      n: "04",
      t: "Tayang sesuai slot",
      d: "11:00, 16:00 (podcast tiap Jumat), 19:30 — caption selalu membawa CTA booking.",
    },
    {
      n: "05",
      t: "Evaluasi mingguan",
      d: "Salon menyetujui hasil dan harga sebelum tayang; evaluasi respons dan pertanyaan booking tiap minggu.",
    },
  ];
  return (
    <Stage>
      <div className="absolute top-[64px] left-[76px]">
        <Kicker color="pink">06 — ALUR PRODUKSI</Kicker>
      </div>
      <h2 className="slide-title absolute top-[104px] left-[76px] font-bold text-ggs-ink" style={HEAD}>
        Dari Brief Sampai Tayang
      </h2>
      <div className="absolute top-[222px] left-[76px] grid w-[1128px] grid-cols-5 items-start gap-6">
        {steps.map((s, i) => (
          <div key={s.n} className="relative flex min-w-0 flex-col gap-5">
            <div
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-full text-[17px] font-bold text-primary-foreground ${i % 2 === 0 ? "bg-ggs-pink" : "bg-ggs-gold"}`}
              style={HEAD}
            >
              {s.n}
            </div>
            <div className="text-[18px] font-bold text-ggs-ink" style={HEAD}>
              {s.t}
            </div>
            <div className="text-[15px] leading-[1.5] text-ggs-gray">{s.d}</div>
            {i < steps.length - 1 && (
              <div className="absolute top-[23px] left-[64px] h-[2px] w-[152px] bg-border" />
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-[120px] left-[76px] flex w-[1128px] items-center border-l-[10px] border-ggs-gold bg-ggs-gold-soft px-8 py-6">
        <p className="text-[16px] leading-relaxed text-ggs-ink">
          Menu di GitHub adalah acuan awal, bukan konfirmasi promo aktif. Jangan mengarang diskon, hasil pasti, atau isi paket.
        </p>
      </div>
      <Footer n={7} />
    </Stage>
  );
}

// ---- Caption & hashtag guide ----
function CaptionSlide({ brand, num }: { brand: Brand; num: number }) {
  const b = brand === "beauty";
  const accent = b ? "text-ggs-pink" : "text-ggs-gold";
  const ink = b ? "text-ggs-ink" : "text-primary-foreground";
  const muted = b ? "text-ggs-gray" : "text-primary-foreground/65";
  const line = b ? "border-border" : "border-primary-foreground/15";
  const chip = b ? "bg-ggs-pink-soft text-ggs-pink" : "bg-ggs-gold-soft text-ggs-ink";
  const localRing = b ? "ring-1 ring-ggs-pink/40" : "ring-1 ring-ggs-gold/45";
  const tags = hashtags[brand];
  return (
    <Stage dark={!b}>
      <div className="absolute top-[42px] left-[64px]">
        <Kicker color={b ? "pink" : "gold"}>{b ? "GGS BEAUTY" : "GGS HAIR STUDIO"} • ACUAN CAPTION & HASHTAG</Kicker>
      </div>
      <h2 className={`slide-title absolute top-[80px] left-[64px] font-bold ${ink}`} style={HEAD}>Caption Siap Pakai</h2>
      <div className="absolute top-[160px] left-[64px] w-[760px]">
        {captions[brand].map((c) => (
          <div key={c.pillar} className={`grid h-[88px] grid-cols-[170px_1fr] items-center gap-5 border-b ${line}`}>
            <div className={`text-[15px] font-bold ${accent}`} style={HEAD}>{c.pillar}</div>
            <div className="text-[13px] leading-[1.35]">
              <div className={`font-bold ${ink}`}>{c.hook}</div>
              <div className={muted}>{c.body}</div>
              <div className={accent}>{c.cta}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-[140px] left-[864px] w-[352px] space-y-3">
        {([
          ["Hashtag lokal — selalu pakai", tags.local, true],
          ["Hashtag inti", tags.core, false],
          ["Rotasi (pilih 3–4)", tags.rotate, false],
          ["Minggu Jepang", hashtags.japan.core, false],
        ] as const).map(([t, list, isLocal]) => (
          <div key={t}>
            <div className={`mb-1.5 text-[11px] font-bold tracking-[0.14em] uppercase ${muted}`}>
              {t}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {list.map((h) => (
                <span key={h} className={`rounded px-2 py-[3px] text-[11.5px] font-bold ${chip} ${isLocal ? localRing : ""}`}>{h}</span>
              ))}
            </div>
          </div>
        ))}
        <ul className={`space-y-1 border-t pt-3 text-[11.5px] leading-[1.3] ${line} ${muted}`}>
          {captionRules.map((r) => <li key={r}>• {r}</li>)}
        </ul>
      </div>
      <Footer n={num} dark={!b} />
    </Stage>
  );
}

// ---- Hook guide ----
function HookSlide({ brand, num }: { brand: Brand; num: number }) {
  const b = brand === "beauty";
  const accent = b ? "text-ggs-pink" : "text-ggs-gold";
  const ink = b ? "text-ggs-ink" : "text-primary-foreground";
  const muted = b ? "text-ggs-gray" : "text-primary-foreground/65";
  const line = b ? "border-border" : "border-primary-foreground/15";
  const chip = b ? "bg-ggs-pink-soft text-ggs-pink" : "bg-ggs-gold-soft text-ggs-ink";
  return (
    <Stage dark={!b}>
      <div className="absolute top-[42px] left-[64px]">
        <Kicker color={b ? "pink" : "gold"}>{b ? "GGS BEAUTY" : "GGS HAIR STUDIO"} • ACUAN HOOK</Kicker>
      </div>
      <h2 className={`slide-title absolute top-[80px] left-[64px] font-bold ${ink}`} style={HEAD}>Hook 3 Detik Pertama</h2>
      <div className="absolute top-[160px] left-[64px] w-[760px]">
        {hookBank[brand].map((h) => (
          <div key={h.pillar} className={`grid h-[88px] grid-cols-[170px_1fr] items-center gap-5 border-b ${line}`}>
            <div className={`text-[15px] font-bold ${accent}`} style={HEAD}>{h.pillar}</div>
            <div className="space-y-[3px] text-[13px] leading-[1.35]">
              {h.lines.map((l, i) => (
                <div key={l} className="flex gap-2">
                  <span className={`shrink-0 pt-[2px] text-[10px] font-bold ${accent}`}>{i + 1}</span>
                  <span className={ink}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-[140px] left-[864px] w-[352px] space-y-3">
        <div>
          <div className={`mb-1.5 text-[11px] font-bold tracking-[0.14em] uppercase ${muted}`}>Pola hook yang jalan</div>
          <div className="flex flex-wrap gap-1.5">
            {hookFormulas.map((f) => (
              <span key={f} className={`rounded px-2 py-[3px] text-[11.5px] font-bold ${chip}`}>{f}</span>
            ))}
          </div>
        </div>
        <ul className={`space-y-1 border-t pt-3 text-[11.5px] leading-[1.3] ${line} ${muted}`}>
          {hookRules.map((r) => <li key={r}>• {r}</li>)}
        </ul>
        <div className={`border-t pt-3 ${line}`}>
          <div className={`mb-1.5 text-[11px] font-bold tracking-[0.14em] uppercase ${muted}`}>Hook minggu Jepang</div>
          <ul className="space-y-1 text-[11.5px] leading-[1.3]">
            {japanHooks.map((h) => <li key={h} className={ink}>• {h}</li>)}
          </ul>
        </div>
      </div>
      <Footer n={num} dark={!b} />
    </Stage>
  );
}

// ---- GGS Talk (podcast Ngopi Sore) guide ----
function TalkSlide({ brand, num }: { brand: Brand; num: number }) {
  const b = brand === "beauty";
  const accent = b ? "text-ggs-pink" : "text-ggs-gold";
  const ink = b ? "text-ggs-ink" : "text-primary-foreground";
  const muted = b ? "text-ggs-gray" : "text-primary-foreground/65";
  const line = b ? "border-border" : "border-primary-foreground/15";
  const panel = b ? "bg-ggs-pink-soft" : "bg-ggs-gold-soft";
  return (
    <Stage dark={!b}>
      <div className="absolute top-[42px] left-[64px]">
        <Kicker color={b ? "pink" : "gold"}>{b ? "GGS BEAUTY" : "GGS HAIR STUDIO"} • ACUAN GGS TALK</Kicker>
      </div>
      <h2 className={`slide-title absolute top-[80px] left-[64px] font-bold ${ink}`} style={HEAD}>Podcast Ngopi Sore</h2>
      <div className={`absolute top-[134px] left-[64px] w-[760px] text-[13.5px] ${muted}`}>
        Owner ngobrol santai — pertanyaan di kiri cuma pemantik, bukan naskah yang dibaca.
      </div>

      <div className="absolute top-[172px] left-[64px] w-[760px] space-y-4">
        {talkQuestions[brand].map((g) => (
          <div key={g.group}>
            <div className={`mb-1.5 text-[11px] font-bold tracking-[0.14em] uppercase ${muted}`}>{g.group}</div>
            <ul className={g.items.length > 3 ? "grid grid-cols-2 gap-x-6 gap-y-1" : "space-y-1"}>
              {g.items.map((q) => (
                <li key={q} className="flex gap-2 text-[13px] leading-[1.35]">
                  <span className={`shrink-0 pt-[2px] text-[11px] font-bold ${accent}`}>—</span>
                  <span className={ink}>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={`border-t pt-3 ${line}`}>
          <div className={`mb-1.5 text-[11px] font-bold tracking-[0.14em] uppercase ${muted}`}>Biar ngobrolnya ngalir</div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-[11px] leading-[1.3]">
            {talkRules.map((r) => <li key={r} className={muted}>• {r}</li>)}
          </ul>
        </div>
      </div>

      <div className="absolute top-[140px] left-[864px] w-[352px] space-y-3">
        <div>
          <div className={`mb-1.5 text-[11px] font-bold tracking-[0.14em] uppercase ${muted}`}>Episode yang tayang</div>
          <div className="space-y-1.5">
            {talkEpisodes[brand].map((e) => (
              <div key={e.day} className={`rounded-md px-2.5 py-1.5 ${panel}`}>
                <div className="text-[12.5px] font-bold leading-[1.3] text-ggs-ink" style={HEAD}>{e.air} — {e.topic}</div>
                <div className="text-[11px] text-ggs-ink/70">Tamu: {e.guest}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={`border-t pt-3 ${line}`}>
          <div className={`mb-1.5 text-[11px] font-bold tracking-[0.14em] uppercase ${muted}`}>Alur longgar {talkMeta.duration}</div>
          <ul className="space-y-1 text-[11px] leading-[1.3]">
            {talkFlow.map((s) => (
              <li key={s.t} className={muted}>
                <span className={`font-bold ${accent}`}>{s.t}</span> — {s.name}: {s.note}
              </li>
            ))}
          </ul>
        </div>
        <div className={`border-t pt-3 ${line}`}>
          <div className={`mb-1.5 text-[11px] font-bold tracking-[0.14em] uppercase ${muted}`}>Bahan turunan</div>
          <ul className="space-y-1 text-[11px] leading-[1.3]">
            {talkClips.map((c) => <li key={c} className={ink}>• {c}</li>)}
          </ul>
        </div>
      </div>

      <Footer n={num} dark={!b} />
    </Stage>
  );
}

function TalkEpisodeSlide({ brand, num }: { brand: Brand; num: number }) {
  const b = brand === "beauty";
  const accent = b ? "text-ggs-pink" : "text-ggs-gold";
  const ink = b ? "text-ggs-ink" : "text-primary-foreground";
  const muted = b ? "text-ggs-gray" : "text-primary-foreground/65";
  const line = b ? "border-border" : "border-primary-foreground/15";
  const panel = b ? "bg-ggs-pink-soft" : "bg-ggs-gold-soft";
  return (
    <Stage dark={!b}>
      <div className="absolute top-[42px] left-[64px]">
        <Kicker color={b ? "pink" : "gold"}>{b ? "GGS BEAUTY" : "GGS HAIR STUDIO"} • ALUR PER EPISODE</Kicker>
      </div>
      <h2 className={`slide-title absolute top-[80px] left-[64px] font-bold ${ink}`} style={HEAD}>Dari buka sampai nutup</h2>
      <div className={`absolute top-[134px] left-[64px] w-[900px] text-[13.5px] ${muted}`}>
        Satu pertanyaan pemantik per tahap — sisanya biarkan ngalir.
      </div>
      <div className="absolute top-[172px] left-[64px] grid w-[1152px] grid-cols-3 gap-5">
        {talkEpisodes[brand].map((e) => (
          <div key={e.day}>
            <div className={`rounded-md px-3 py-2 ${panel}`}>
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-ggs-ink/70">{e.air} • 16:00 • Tamu: {e.guest}</div>
              <div className="mt-0.5 text-[15px] font-bold leading-[1.25] text-ggs-ink" style={HEAD}>{e.topic}</div>
            </div>
            <ol className="mt-2">
              {episodeFlow(e).map((s) => (
                <li key={s.t} className={`border-b py-1.5 last:border-b-0 ${line}`}>
                  <div className="flex items-baseline justify-between text-[10.5px] font-bold tracking-[0.1em] uppercase">
                    <span className={accent}>{s.name}</span>
                    <span className={muted}>{s.t}</span>
                  </div>
                  <div className={`text-[12.5px] leading-[1.3] ${ink}`}>{s.q}</div>
                  <div className={`text-[10.5px] leading-[1.3] ${muted}`}>{s.note}</div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <Footer n={num} dark={!b} />
    </Stage>
  );
}

export const slides: { id: string; el: () => ReactNode }[] = [

  { id: "cover", el: CoverSlide },
  { id: "stats", el: StatsSlide },
  { id: "pillars", el: PillarsSlide },
  { id: "rhythm", el: RhythmSlide },
  { id: "ideas-beauty", el: () => <ContentIdeasSlide brand="beauty" num={5} /> },
  { id: "ideas-hair", el: () => <ContentIdeasSlide brand="hair" num={6} /> },
  { id: "flow", el: FlowSlide },
  { id: "section-beauty", el: SectionBeauty },
  ...[0, 1, 2, 3].map((w) => ({ id: `beauty-w${w + 1}`, el: () => <WeekSlide w={w} brand="beauty" /> })),
  { id: "section-hair", el: SectionHair },
  ...[0, 1, 2, 3].map((w) => ({ id: `hair-w${w + 1}`, el: () => <WeekSlide w={w} brand="hair" /> })),
  { id: "japan-1", el: () => <JapanScheduleSlide part={0} /> },
  { id: "japan-2", el: () => <JapanScheduleSlide part={1} /> },
  { id: "distribution", el: DistributionSlide },
  { id: "hook-beauty", el: () => <HookSlide brand="beauty" num={21} /> },
  { id: "hook-hair", el: () => <HookSlide brand="hair" num={22} /> },
  { id: "talk-beauty", el: () => <TalkSlide brand="beauty" num={23} /> },
  { id: "talk-hair", el: () => <TalkSlide brand="hair" num={24} /> },
  { id: "talk-ep-beauty", el: () => <TalkEpisodeSlide brand="beauty" num={25} /> },
  { id: "talk-ep-hair", el: () => <TalkEpisodeSlide brand="hair" num={26} /> },
  { id: "caption-beauty", el: () => <CaptionSlide brand="beauty" num={27} /> },
  { id: "caption-hair", el: () => <CaptionSlide brand="hair" num={28} /> },

  { id: "closing", el: ClosingSlide },
];

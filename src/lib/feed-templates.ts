import type { Brand } from "@/lib/content-plan";

export type FeedKind = "promo" | "harian";

export interface FeedTemplate {
  id: string;
  brand: Brand;
  kind: FeedKind;
  title: string;
  headline: string;
  sub: string;
  body: string[];
  cta: string;
  badge?: string;
  footer: string;
  dark: boolean;
}

const B = "beauty" as const;
const H = "hair" as const;

export const feedTemplates: FeedTemplate[] = [
  // ---- PROMO ----
  {
    id: "promo-1111-beauty",
    brand: B,
    kind: "promo",
    title: "Promo 11.11 — Beauty",
    headline: "11.11 GLOW SALE",
    sub: "11 November 2026 • satu hari saja",
    body: ["Diskon 11% semua treatment", "Nail art mulai Rp111.000", "Khusus 11 booking pertama"],
    cta: "Booking via WA sekarang",
    badge: "1 HARI",
    footer: "GGS Beauty • Garut",
    dark: false,
  },
  {
    id: "promo-1111-hair",
    brand: H,
    kind: "promo",
    title: "Promo 11.11 — Hair Studio",
    headline: "11.11 FRESH CUT",
    sub: "11 November 2026 • satu hari saja",
    body: ["Haircut + styling Rp111.000", "Gratis hair tonic tiap treatment", "Khusus 11 booking pertama"],
    cta: "Amankan slotmu via WA",
    badge: "1 HARI",
    footer: "GGS Hair Studio • Garut",
    dark: true,
  },
  {
    id: "promo-gajian-beauty",
    brand: B,
    kind: "promo",
    title: "Gajian Glow-Up — Beauty",
    headline: "GAJIAN GLOW-UP",
    sub: "25 Nov – 2 Des 2026",
    body: ["Paket facial + nail art hemat 20%", "Cicil 2x tanpa bunga", "Berlaku weekday & weekend"],
    cta: "Chat admin untuk paket gajian",
    badge: "GAJIAN",
    footer: "GGS Beauty • Garut",
    dark: false,
  },
  {
    id: "promo-gajian-hair",
    brand: H,
    kind: "promo",
    title: "Gajian Fresh — Hair Studio",
    headline: "GAJIAN FRESH",
    sub: "25 Nov – 2 Des 2026",
    body: ["Paket haircut + creambath hemat 20%", "Gratis pomade mini min. 2 treatment", "Berlaku weekday & weekend"],
    cta: "Chat admin untuk paket gajian",
    badge: "GAJIAN",
    footer: "GGS Hair Studio • Garut",
    dark: true,
  },
  {
    id: "promo-1212-beauty",
    brand: B,
    kind: "promo",
    title: "Promo 12.12 — Beauty",
    headline: "12.12 YEAR-END SALE",
    sub: "12 Desember 2026",
    body: ["Diskon 12% semua layanan", "Voucher Rp50.000 untuk visit berikutnya", "Bisa digabung stamp card"],
    cta: "Booking sebelum kehabisan slot",
    badge: "12.12",
    footer: "GGS Beauty • Garut",
    dark: false,
  },
  {
    id: "promo-newyear-hair",
    brand: H,
    kind: "promo",
    title: "New Year Ready — Hair Studio",
    headline: "NEW YEAR READY",
    sub: "28 – 31 Desember 2026",
    body: ["Haircut + hair coloring bundle", "Gratis styling untuk malam tahun baru", "Slot terbatas, wajib booking"],
    cta: "Kunci slot akhir tahummu",
    badge: "AKHIR TAHUN",
    footer: "GGS Hair Studio • Garut",
    dark: true,
  },
  // ---- HARIAN ----
  {
    id: "harian-tips-beauty",
    brand: B,
    kind: "harian",
    title: "Tips harian — Beauty",
    headline: "TIPS GLOWING",
    sub: "Edisi perawatan kuku",
    body: ["Olesi cuticle oil tiap malam", "Jangan kupas gel polish sendiri", "Re-touch nail art tiap 3 minggu"],
    cta: "Simpan & share ke bestie-mu",
    badge: "TIPS",
    footer: "GGS Beauty • Garut",
    dark: false,
  },
  {
    id: "harian-tips-hair",
    brand: H,
    kind: "harian",
    title: "Tips harian — Hair Studio",
    headline: "TIPS RAMBUT",
    sub: "Edisi perawatan harian",
    body: ["Keramas 2 hari sekali cukup", "Pakai pomade seukuran koin", "Trim ujung rambut tiap 4 minggu"],
    cta: "Simpan biar gak lupa",
    badge: "TIPS",
    footer: "GGS Hair Studio • Garut",
    dark: true,
  },
  {
    id: "harian-podcast",
    brand: B,
    kind: "harian",
    title: "GGS Talk — episode baru",
    headline: "GGS TALK",
    sub: "Episode baru tiap Jumat",
    body: ["Cerita di balik nail art", "Ngobrol santai sore Garut", "Tonton di YouTube & Spotify"],
    cta: "Dengerin sekarang",
    badge: "PODCAST",
    footer: "GGS Talk • Nempo.id",
    dark: false,
  },
  {
    id: "harian-live",
    brand: B,
    kind: "harian",
    title: "Pengumuman Live",
    headline: "LIVE MALAM INI",
    sub: "19.30 WIB di Instagram",
    body: ["Demo treatment langsung", "Tanya-jawab gratis", "Giveaway di akhir live"],
    cta: "Nyalakan reminder-nya",
    badge: "LIVE",
    footer: "GGS Beauty • Garut",
    dark: true,
  },
  {
    id: "harian-beforeafter-beauty",
    brand: B,
    kind: "harian",
    title: "Before–After — Beauty",
    headline: "BEFORE → AFTER",
    sub: "Hasil nail art minggu ini",
    body: ["Geser untuk lihat prosesnya", "Durasi ± 90 menit", "Desain bisa request"],
    cta: "Mau kayak gini? Booking yuk",
    badge: "HASIL",
    footer: "GGS Beauty • Garut",
    dark: false,
  },
  {
    id: "harian-beforeafter-hair",
    brand: H,
    kind: "harian",
    title: "Before–After — Hair Studio",
    headline: "BEFORE → AFTER",
    sub: "Transformasi cukur minggu ini",
    body: ["Geser untuk lihat prosesnya", "Fade + styling rapi", "Cocok untuk semua umur"],
    cta: "Mau dicukur kayak gini? WA aja",
    badge: "HASIL",
    footer: "GGS Hair Studio • Garut",
    dark: true,
  },
];

export const FEED_W = 1080;
export const FEED_H = 1440;

export function templatesFor(kind: FeedKind | "semua", brand: Brand | "semua") {
  return feedTemplates.filter(
    (t) => (kind === "semua" || t.kind === kind) && (brand === "semua" || t.brand === brand),
  );
}

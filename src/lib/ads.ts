import type { Brand } from "@/lib/content-plan";
import type { DatedPromo } from "@/lib/promos";
import { weekRanges } from "@/lib/schedule";

export type Platform = "Instagram" | "TikTok";
export type AdRow = {
  week: number; // 0..3 = minggu November (weekRanges), 4..7 = jendela Desember (DEC_WEEKS)
  platform: Platform;
  boost: string; // which organic post to promote
  goal: string;
  days: string; // run window
  perDay: number; // IDR per day
};

// Budget per hari (IDR) — minimal jalan Rp50.000 per platform, angka belum termasuk pajak.
const IG = 50000;
const TT = 50000;
export const PER_DAY: Record<Platform, number> = { Instagram: IG, TikTok: TT };
export const TAX_NOTE = "belum termasuk pajak";

export const DEC_WEEKS = ["1 – 3 Des", "10 – 12 Des", "22 – 24 Des", "28 – 31 Des"];

type Draft = Omit<AdRow, "week" | "perDay">;

// November: 4 minggu (total 14 hari iklan per platform).
// Desember: 4 jendela (total 13 hari iklan per platform) — ikut momen besar kalender promo hal. 48–49.
const plan: Record<Brand, Draft[][]> = {
  beauty: [
    [
      { platform: "Instagram", boost: "Reels nail art + info promo Pahlawan Glow Day & 11.11", goal: "Chat WhatsApp", days: "Min – Rab" },
      { platform: "TikTok", boost: "Before–after nail art + teaser 11.11", goal: "Tayangan video", days: "Min – Rab" },
    ],
    [
      { platform: "Instagram", boost: "Reels lotion Jepang (oleh-oleh owner)", goal: "Kunjungan profil", days: "Kam – Sab" },
      { platform: "TikTok", boost: "Klip unboxing produk Jepang", goal: "Tayangan video", days: "Kam – Sab" },
    ],
    [
      { platform: "Instagram", boost: "Testimoni pelanggan self care", goal: "Chat WhatsApp", days: "Jum – Min" },
      { platform: "TikTok", boost: "Klip GGS Talk “Self care”", goal: "Followers", days: "Jum – Min" },
    ],
    [
      { platform: "Instagram", boost: "Promo Terima Kasih Guru + Gajian Glow-Up", goal: "Chat WhatsApp", days: "Rab – Sab" },
      { platform: "TikTok", boost: "Video tren + Gajian Glow-Up", goal: "Chat WhatsApp", days: "Rab – Sab" },
    ],
    [
      { platform: "Instagram", boost: "Pre-Order Slot Akhir Tahun + Gajian Glow-Up", goal: "Chat WhatsApp", days: "Sel – Kam" },
      { platform: "TikTok", boost: "Video booking awal + cerita pelanggan", goal: "Tayangan video", days: "Sel – Kam" },
    ],
    [
      { platform: "Instagram", boost: "Promo 12.12 + Holiday Squad", goal: "Chat WhatsApp", days: "Kam – Sab" },
      { platform: "TikTok", boost: "Klip 12.12 + teaser liburan sekolah", goal: "Followers", days: "Kam – Sab" },
    ],
    [
      { platform: "Instagram", boost: "Hari Ibu Spesial + Christmas Look", goal: "Chat WhatsApp", days: "Sel – Kam" },
      { platform: "TikTok", boost: "Video ajak ibu + tema Natal", goal: "Chat WhatsApp", days: "Sel – Kam" },
    ],
    [
      { platform: "Instagram", boost: "New Year Ready + gift card THR", goal: "Chat WhatsApp", days: "Sen – Kam" },
      { platform: "TikTok", boost: "Klip glam malam tahun baru", goal: "Tayangan video", days: "Sen – Kam" },
    ],
  ],
  hair: [
    [
      { platform: "Instagram", boost: "Reels potong rapi + info Pahlawan Rapi & 11.11 Ganteng", goal: "Chat WhatsApp", days: "Min – Rab" },
      { platform: "TikTok", boost: "Transformasi rambut + teaser 11.11 Ganteng", goal: "Tayangan video", days: "Min – Rab" },
    ],
    [
      { platform: "Instagram", boost: "Reels produk rambut dari Jepang", goal: "Kunjungan profil", days: "Kam – Sab" },
      { platform: "TikTok", boost: "Klip perming pria", goal: "Tayangan video", days: "Kam – Sab" },
    ],
    [
      { platform: "Instagram", boost: "Paket GPS (testimoni)", goal: "Chat WhatsApp", days: "Jum – Min" },
      { platform: "TikTok", boost: "Klip GGS Talk “Paket GPS”", goal: "Followers", days: "Jum – Min" },
    ],
    [
      { platform: "Instagram", boost: "Promo Guru Rapi + Gajian Ganteng", goal: "Chat WhatsApp", days: "Rab – Sab" },
      { platform: "TikTok", boost: "Video tren cowok + Gajian Ganteng", goal: "Chat WhatsApp", days: "Rab – Sab" },
    ],
    [
      { platform: "Instagram", boost: "Booking Slot Natal + Gajian Ganteng", goal: "Chat WhatsApp", days: "Sel – Kam" },
      { platform: "TikTok", boost: "Video DP awal slot Natal", goal: "Tayangan video", days: "Sel – Kam" },
    ],
    [
      { platform: "Instagram", boost: "12.12 Ganti Warna + Pelajar Rapi", goal: "Chat WhatsApp", days: "Kam – Sab" },
      { platform: "TikTok", boost: "Klip colouring + teaser libur pelajar", goal: "Followers", days: "Kam – Sab" },
    ],
    [
      { platform: "Instagram", boost: "Bapak & Anak Rapi + Christmas Cut", goal: "Chat WhatsApp", days: "Sel – Kam" },
      { platform: "TikTok", boost: "Video potong bareng + tema Natal", goal: "Chat WhatsApp", days: "Sel – Kam" },
    ],
    [
      { platform: "Instagram", boost: "New Year Fresh + gift card THR", goal: "Chat WhatsApp", days: "Sen – Kam" },
      { platform: "TikTok", boost: "Klip segar malam tahun baru", goal: "Tayangan video", days: "Sen – Kam" },
    ],
  ],
};

export function adSchedule(brand: Brand): AdRow[] {
  return plan[brand].flatMap((rows, week) =>
    rows.map((r) => ({ ...r, week, perDay: r.platform === "Instagram" ? IG : TT })),
  );
}

const DAYS_IN_WINDOW: Record<string, number> = {
  "Min – Rab": 4,
  "Kam – Sab": 3,
  "Jum – Min": 3,
  "Rab – Sab": 4,
  "Sel – Kam": 3,
  "Sen – Kam": 4,
};
export const runDays = (r: AdRow) => DAYS_IN_WINDOW[r.days] ?? 3;
export const rowTotal = (r: AdRow) => r.perDay * runDays(r);
export const monthTotal = (brand: Brand) =>
  adSchedule(brand).filter((r) => r.week < 4).reduce((s, r) => s + rowTotal(r), 0);
export const decTotal = (brand: Brand) =>
  adSchedule(brand).filter((r) => r.week >= 4).reduce((s, r) => s + rowTotal(r), 0);
export const decRunDays = (brand: Brand) =>
  adSchedule(brand).filter((r) => r.week >= 4).reduce((s, r) => s + runDays(r), 0);
export const rupiah = (n: number) => "Rp" + n.toLocaleString("id-ID");
export const adWeekLabel = (w: number) => (w < 4 ? weekRanges[w] : DEC_WEEKS[w - 4]);

// Jendela iklan dalam tanggal sebenarnya — dipakai kolom "Iklan IG + TikTok" di kalender promo (hal. 48–49),
// supaya tiap promo bertanggal jelas jendela iklannya yang mana.
export type AdWindow = { label: string; from: Date; to: Date };
const d = (m: number, day: number) => new Date(2026, m, day);
export const adWindows: AdWindow[] = [
  { label: "8–11 Nov", from: d(10, 8), to: d(10, 11) },
  { label: "12–14 Nov", from: d(10, 12), to: d(10, 14) },
  { label: "20–22 Nov", from: d(10, 20), to: d(10, 22) },
  { label: "25–28 Nov", from: d(10, 25), to: d(10, 28) },
  { label: "1–3 Des", from: d(11, 1), to: d(11, 3) },
  { label: "10–12 Des", from: d(11, 10), to: d(11, 12) },
  { label: "22–24 Des", from: d(11, 22), to: d(11, 24) },
  { label: "28–31 Des", from: d(11, 28), to: d(11, 31) },
];

const MONTHS: Record<string, number> = { Nov: 10, Des: 11, Jan: 0 };
const MONTH_NAME = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
const parseDay = (s: string, fallbackMonth: string) => {
  const m = s.trim().match(/^(\d{1,2})\s*(Nov|Des|Jan)?/i);
  const mon = MONTHS[(m?.[2] ?? fallbackMonth).toLowerCase() === "nov" ? "Nov" : (m?.[2] ?? fallbackMonth)] ?? MONTHS[fallbackMonth] ?? 11;
  const day = Number(m?.[1]);
  return { mon, day, year: mon === 0 ? 2027 : 2026 };
};

// Jendela iklan yang menutupi tiap promo bertanggal: promo yang berhari-hari bisa dapat >1 jendela.
export function promoAdWindow(p: DatedPromo): { label: string; days: number } {
  const parts = p.date.split(/\s*[–-]\s*/);
  const a = parseDay(parts[0]!, p.month);
  const b = parts[1] ? parseDay(parts[1], p.month) : a;
  const start = new Date(a.year, a.mon, a.day);
  const end = new Date(b.year, b.mon, b.day);
  const hits = adWindows.filter((w) => +w.to >= +start && +w.from <= +end);
  return {
    label: hits.map((w) => w.label).join(" • ") || "—",
    days: hits.reduce((s, w) => s + (Math.round((+w.to - +w.from) / 864e5) + 1), 0),
  };
}

export const adTargeting: Record<Brand, string[]> = {
  beauty: ["Garut + 15 km", "Perempuan 18–40", "Minat: nail art, skincare, kecantikan"],
  hair: ["Garut + 15 km", "Pria & wanita 17–40", "Minat: gaya rambut, barbershop, fashion"],
};

export const adRules = [
  "Iklankan post yang sudah ramai organik, jangan bikin konten baru khusus iklan.",
  "Mulai jalan sore (16:00) — jam orang buka HP & chat.",
  "Setelah 2 hari, kalau biaya per chat mahal, matikan & ganti post.",
  "Iklan promo jalan di jendela mingguan di halaman ini — jendelanya dipilih supaya menutupi tanggal promo di kalender (hal. 48–49), materinya sama.",
  "Tombol iklan selalu ke WhatsApp booking.",
  "Anggaran minimal Rp50.000 per hari per platform — semua angka di sini belum termasuk pajak.",
];

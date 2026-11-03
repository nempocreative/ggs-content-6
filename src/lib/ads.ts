import type { Brand } from "@/lib/content-plan";
import { weekRanges } from "@/lib/schedule";

export type Platform = "Instagram" | "TikTok";
export type AdRow = {
  week: number; // 0..3, matches weekRanges
  platform: Platform;
  boost: string; // which organic post to promote
  goal: string;
  days: string; // run window
  perDay: number; // IDR per day
};

// Default budget per day (IDR) — placeholder until the owner sets real numbers.
const IG = 30000;
const TT = 25000;

const plan: Record<Brand, Omit<AdRow, "week" | "perDay">[][]> = {
  beauty: [
    [
      { platform: "Instagram", boost: "Reels promo nail art paling ramai", goal: "Chat WhatsApp", days: "Jum – Min" },
      { platform: "TikTok", boost: "Video before–after nail art", goal: "Tayangan video", days: "Jum – Min" },
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
      { platform: "Instagram", boost: "Promo akhir bulan / gajian", goal: "Chat WhatsApp", days: "Rab – Sab" },
      { platform: "TikTok", boost: "Video tren + promo gajian", goal: "Chat WhatsApp", days: "Rab – Sab" },
    ],
  ],
  hair: [
    [
      { platform: "Instagram", boost: "Reels hasil cat rambut", goal: "Chat WhatsApp", days: "Jum – Min" },
      { platform: "TikTok", boost: "Transformasi warna rambut", goal: "Tayangan video", days: "Jum – Min" },
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
      { platform: "Instagram", boost: "Promo gajian potong + warna", goal: "Chat WhatsApp", days: "Rab – Sab" },
      { platform: "TikTok", boost: "Video tren cowok ganti gaya", goal: "Chat WhatsApp", days: "Rab – Sab" },
    ],
  ],
};

export function adSchedule(brand: Brand): AdRow[] {
  return plan[brand].flatMap((rows, week) =>
    rows.map((r) => ({ ...r, week, perDay: r.platform === "Instagram" ? IG : TT })),
  );
}

const DAYS_IN_WINDOW: Record<string, number> = { "Jum – Min": 3, "Kam – Sab": 3, "Rab – Sab": 4 };
export const runDays = (r: AdRow) => DAYS_IN_WINDOW[r.days] ?? 3;
export const rowTotal = (r: AdRow) => r.perDay * runDays(r);
export const monthTotal = (brand: Brand) => adSchedule(brand).reduce((s, r) => s + rowTotal(r), 0);
export const rupiah = (n: number) => "Rp" + n.toLocaleString("id-ID");
export const adWeekLabel = (w: number) => weekRanges[w];

export const adTargeting: Record<Brand, string[]> = {
  beauty: ["Garut + 15 km", "Perempuan 18–40", "Minat: nail art, skincare, kecantikan"],
  hair: ["Garut + 15 km", "Pria & wanita 17–40", "Minat: gaya rambut, barbershop, fashion"],
};

export const adRules = [
  "Iklankan post yang sudah ramai organik, jangan bikin konten baru khusus iklan.",
  "Mulai jalan sore (16:00) — jam orang buka HP & chat.",
  "Setelah 2 hari, kalau biaya per chat mahal, matikan & ganti post.",
  "Tombol iklan selalu ke WhatsApp booking.",
];

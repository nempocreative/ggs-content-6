// ============= Jadwal influencer datang ke salon, Nov – Des 2026 =============
// Tiap kunjungan dikaitkan dengan promo bertanggal di kalender promo (hal. 48–49),
// jadi konten influencer, promo, dan iklan jalan di momen yang sama.
// Kunjungan tidak boleh pas owner di Jepang (16–24 Nov) dan tidak menabrak hari podcast (2, 9, 23 Nov).

import type { Brand } from "@/lib/content-plan";
import { promoCalendar, hairPromoCalendar, type DatedPromo } from "@/lib/promos";

export type InfluencerTier = "Nano" | "Mikro";

export type InfluencerVisit = {
  date: string; // tanggal datang
  month: "Nov" | "Des";
  brand: Brand;
  tier: InfluencerTier;
  count: number; // jumlah influencer yang datang
  promo: string; // nama promo dari kalender promo
  shoot: string; // yang difoto/divideo saat datang
  deliverables: string; // tugas konten
  comp: string; // kompensasi (usulan)
};

export const TIER_INFO: Record<InfluencerTier, string> = {
  Nano: "1–10 rb followers • barter treatment",
  Mikro: "10–50 rb followers • fee kecil + barter (angka usulan)",
};

const beautyVisits: InfluencerVisit[] = [
  { month: "Nov", date: "11 Nov", brand: "beauty", tier: "Nano", count: 2, promo: "Promo 11.11", shoot: "Nail art kembar 11.11 + suasana salon", deliverables: "1 Reels + 2 story per orang", comp: "Barter treatment" },
  { month: "Nov", date: "26 Nov", brand: "beauty", tier: "Mikro", count: 1, promo: "Gajian Glow-Up", shoot: "Bundle nail art + hair spa dari awal sampai hasil", deliverables: "1 Reels + 1 TikTok + 3 story", comp: "Fee kecil + barter" },
  { month: "Des", date: "12 Des", brand: "beauty", tier: "Nano", count: 2, promo: "Promo 12.12", shoot: "Unboxing voucher 12.12 + treatment", deliverables: "1 Reels + 2 story per orang", comp: "Barter treatment" },
  { month: "Des", date: "22 Des", brand: "beauty", tier: "Mikro", count: 1, promo: "Hari Ibu Spesial", shoot: "Treatment ibu & anak + foto bareng", deliverables: "1 Reels + 3 story", comp: "Fee kecil + barter" },
  { month: "Des", date: "24 Des", brand: "beauty", tier: "Nano", count: 2, promo: "Christmas Look", shoot: "Nail art tema Natal + makeup party", deliverables: "1 Reels + 2 story per orang", comp: "Barter treatment" },
  { month: "Des", date: "29 Des", brand: "beauty", tier: "Mikro", count: 1, promo: "New Year Ready", shoot: "Paket glam: makeup + hairdo + nail", deliverables: "1 Reels + 1 TikTok + 3 story", comp: "Fee kecil + barter" },
];

const hairVisits: InfluencerVisit[] = [
  { month: "Nov", date: "11 Nov", brand: "hair", tier: "Nano", count: 2, promo: "11.11 Ganteng", shoot: "Potong Dewasa + Paket G, before–after", deliverables: "1 Reels + 2 story per orang", comp: "Barter treatment" },
  { month: "Nov", date: "26 Nov", brand: "hair", tier: "Mikro", count: 1, promo: "Gajian Ganteng", shoot: "Paket GPS lengkap dari awal sampai hasil", deliverables: "1 Reels + 1 TikTok + 3 story", comp: "Fee kecil + barter" },
  { month: "Des", date: "12 Des", brand: "hair", tier: "Mikro", count: 1, promo: "12.12 Ganti Warna", shoot: "Colouring / highlight, proses + hasil", deliverables: "1 Reels + 1 TikTok + 3 story", comp: "Fee kecil + barter" },
  { month: "Des", date: "22 Des", brand: "hair", tier: "Nano", count: 2, promo: "Bapak & Anak Rapi", shoot: "Potong bapak & anak bareng + foto", deliverables: "1 Reels + 2 story per orang", comp: "Barter treatment" },
  { month: "Des", date: "24 Des", brand: "hair", tier: "Nano", count: 1, promo: "Christmas Cut", shoot: "Potong + styling + Creambath", deliverables: "1 Reels + 2 story", comp: "Barter treatment" },
  { month: "Des", date: "29 Des", brand: "hair", tier: "Mikro", count: 1, promo: "New Year Fresh", shoot: "Potong + Facial + Pijat Kepala", deliverables: "1 Reels + 1 TikTok + 3 story", comp: "Fee kecil + barter" },
];

export const influencerVisits: InfluencerVisit[] = [...beautyVisits, ...hairVisits];
export const visitsFor = (brand: Brand): InfluencerVisit[] => influencerVisits.filter((v) => v.brand === brand);

// Cek konsistensi: tiap kunjungan harus nempel ke promo yang benar-benar ada di kalender.
export const promoExists = (v: InfluencerVisit): boolean => {
  const cal: DatedPromo[] = v.brand === "hair" ? hairPromoCalendar : promoCalendar;
  return cal.some((p) => p.name === v.promo);
};

// Aturan main kerja sama influencer.
export const influencerRules = [
  "Brief dikirim H-3 sebelum datang: promo yang diangkat, angle video, dan hashtag wajib.",
  "Konten tayang maksimal H+2 setelah datang, pas promo masih jalan.",
  "Wajib tag akun GGS + lokasi Garut, dan GGS boleh repost semua hasilnya.",
  "Datang di luar 16–24 Nov (owner di Jepang) dan bukan hari podcast (2, 9, 23 Nov).",
  "Prioritaskan influencer Garut & sekitarnya — penontonnya memang calon pelanggan.",
  "Kompensasi di atas masih usulan — finalkan sebelum menghubungi influencer.",
];

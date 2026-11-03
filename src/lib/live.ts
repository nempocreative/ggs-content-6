// ============= Jadwal LIVE TikTok & Instagram, Nov – Des 2026 =============
// Tiap live nempel ke promo di kalender promo (hal. 48–49) supaya live, promo, iklan, dan influencer satu cerita.
// Tidak live saat owner di Jepang (16–24 Nov) dan tidak di hari podcast (2, 9, 23 Nov).

import type { Brand } from "@/lib/content-plan";
import { promoCalendar, hairPromoCalendar } from "@/lib/promos";

export type LiveSession = {
  date: string;
  day: number; // tanggal (untuk cek bentrok)
  month: "Nov" | "Des";
  brand: Brand;
  time: string; // jam live (WIB)
  platform: "TikTok" | "Instagram" | "TikTok + IG";
  promo: string; // nama promo dari kalender promo
  topic: string; // ngelive-in apa
  host: string;
};

const beauty: LiveSession[] = [
  { month: "Nov", day: 6, date: "Jum 6 Nov", brand: "beauty", time: "19.30–20.30", platform: "TikTok", promo: "Pahlawan Glow Day", topic: "Live proses nail art dari nol, penonton pilih warna", host: "Nail artist + admin" },
  { month: "Nov", day: 11, date: "Rab 11 Nov", brand: "beauty", time: "19.00–20.30", platform: "TikTok + IG", promo: "Promo 11.11", topic: "Flash voucher 11.11 tiap 15 menit + nail art kembar bareng influencer", host: "Admin + influencer" },
  { month: "Nov", day: 27, date: "Jum 27 Nov", brand: "beauty", time: "19.30–20.30", platform: "TikTok", promo: "Gajian Glow-Up", topic: "Before–after hair spa + jelasin bundle gajian", host: "Stylist + admin" },
  { month: "Des", day: 4, date: "Jum 4 Des", brand: "beauty", time: "19.30–20.30", platform: "Instagram", promo: "Pre-Order Slot Akhir Tahun", topic: "Q&A: cerita owner dari Jepang + buka slot pre-order", host: "Owner" },
  { month: "Des", day: 12, date: "Sab 12 Des", brand: "beauty", time: "19.00–20.30", platform: "TikTok + IG", promo: "Promo 12.12", topic: "Live jual voucher 12.12 + spin hadiah", host: "Admin + influencer" },
  { month: "Des", day: 18, date: "Jum 18 Des", brand: "beauty", time: "19.30–20.30", platform: "TikTok", promo: "Holiday Squad", topic: "Tips makeup liburan + promo datang rame-rame", host: "MUA + admin" },
  { month: "Des", day: 24, date: "Kam 24 Des", brand: "beauty", time: "16.00–17.00", platform: "TikTok", promo: "Christmas Look", topic: "Live nail art tema Natal + makeup party", host: "Nail artist + MUA" },
  { month: "Des", day: 30, date: "Rab 30 Des", brand: "beauty", time: "19.30–20.30", platform: "TikTok + IG", promo: "New Year Ready", topic: "Countdown glam: makeup + hairdo, sisa slot malam tahun baru", host: "Owner + MUA" },
];

const hair: LiveSession[] = [
  { month: "Nov", day: 7, date: "Sab 7 Nov", brand: "hair", time: "20.00–21.00", platform: "TikTok", promo: "Pahlawan Rapi", topic: "Live potong rambut, penonton tebak model", host: "Barber + admin" },
  { month: "Nov", day: 11, date: "Rab 11 Nov", brand: "hair", time: "20.00–21.30", platform: "TikTok + IG", promo: "11.11 Ganteng", topic: "Flash voucher 11.11 + before–after bareng influencer", host: "Admin + influencer" },
  { month: "Nov", day: 28, date: "Sab 28 Nov", brand: "hair", time: "20.00–21.00", platform: "TikTok", promo: "Gajian Ganteng", topic: "Paket GPS lengkap live: potong, cuci, styling", host: "Barber + admin" },
  { month: "Des", day: 5, date: "Sab 5 Des", brand: "hair", time: "20.00–21.00", platform: "Instagram", promo: "Booking Slot Natal", topic: "Q&A gaya rambut cowok + buka booking slot Natal", host: "Barber senior" },
  { month: "Des", day: 12, date: "Sab 12 Des", brand: "hair", time: "20.00–21.30", platform: "TikTok + IG", promo: "12.12 Ganti Warna", topic: "Live colouring/highlight dari awal sampai hasil", host: "Colourist + admin" },
  { month: "Des", day: 19, date: "Sab 19 Des", brand: "hair", time: "16.00–17.00", platform: "TikTok", promo: "Bapak & Anak Rapi", topic: "Potong bapak & anak bareng, live santai", host: "Barber + admin" },
  { month: "Des", day: 26, date: "Sab 26 Des", brand: "hair", time: "20.00–21.00", platform: "TikTok", promo: "THR Ganteng", topic: "Rekomendasi model rambut tahun baru + voucher THR", host: "Barber senior" },
  { month: "Des", day: 30, date: "Rab 30 Des", brand: "hair", time: "20.00–21.00", platform: "TikTok + IG", promo: "New Year Fresh", topic: "Potong + facial + pijat kepala, sisa slot akhir tahun", host: "Barber + admin" },
];

export const liveSessions: LiveSession[] = [...beauty, ...hair];
export const livesFor = (brand: Brand) => liveSessions.filter((l) => l.brand === brand);
export const livePromoExists = (l: LiveSession) =>
  (l.brand === "hair" ? hairPromoCalendar : promoCalendar).some((p) => p.name === l.promo);

export const liveRules = [
  "Cewek live jam 19.30, cowok jam 20.00 — tidak tabrakan, admin bisa pegang dua-duanya.",
  "Umumkan di story H-1 dan 1 jam sebelum live; pin komentar berisi promo + link booking.",
  "Live minimal 45 menit — algoritma butuh waktu buat narik penonton.",
  "Tidak live 16–24 Nov (owner di Jepang) dan hari podcast (2, 9, 23 Nov).",
  "Potong momen terbaik live jadi 2–3 video pendek untuk diposting besoknya.",
];

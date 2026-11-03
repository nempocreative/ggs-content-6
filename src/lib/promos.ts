// ============= Program promo GGS =============
// Ide promo yang nyambung dengan jadwal konten, podcast, dan iklan.
// Semua diskon masih asumsi — bisa diubah kapan pun.

export type PromoKind = "mingguan" | "bulanan" | "momen" | "konten";

export type Promo = {
  name: string;
  kind: PromoKind;
  when: string;
  detail: string;
};

export const KIND_LABEL: Record<PromoKind, string> = {
  mingguan: "Mingguan (jalan terus)",
  bulanan: "Bulanan",
  momen: "Momen",
  konten: "Konten (nyambung jadwal)",
};

export const promos: Promo[] = [
  // Mingguan
  {
    name: "Happy Hour Weekday",
    kind: "mingguan",
    when: "Senin–Kamis, 10.00–14.00",
    detail: "Diskon 15% di jam yang biasanya sepi, biar kursi siang keisi.",
  },
  {
    name: "Student Day",
    kind: "mingguan",
    when: "Tiap Rabu",
    detail: "Potongan khusus pelajar/mahasiswa, cukup tunjukkan kartu pelajar.",
  },
  {
    name: "Bring a Friend",
    kind: "mingguan",
    when: "Setiap hari",
    detail: "Datang berdua, orang kedua diskon 25% — narik pelanggan baru lewat pelanggan lama.",
  },
  // Bulanan
  {
    name: "Birthday Treat",
    kind: "bulanan",
    when: "Bulan ulang tahun, sekali pakai",
    detail: "Diskon 20% di bulan ulang tahun, bikin pelanggan merasa spesial.",
  },
  {
    name: "Member Stamp Card",
    kind: "bulanan",
    when: "Setiap kunjungan",
    detail: "Kartu stempel: 5 kali treatment, kunjungan ke-6 basic gratis — bikin pelanggan balik lagi.",
  },
  // Momen
  {
    name: "Payday Promo",
    kind: "momen",
    when: "Tanggal 25 – tanggal 2 tiap bulan",
    detail: "Bundle paket hemat (misal nail art + hand treatment) pas dompet lagi gendut.",
  },
  {
    name: "Flash Sale Jumat",
    kind: "momen",
    when: "Umumkan Kamis malam di story, sale hari Jumat",
    detail: "Kuota 5 slot — bikin urgency, story jadi ramai, kursi Jumat penuh.",
  },
  {
    name: "Promo Tanggal Kembar",
    kind: "momen",
    when: "10.10, 11.11, 12.12",
    detail: "Ikut tren belanja tanggal kembar, diskon terbesar sepanjang bulan.",
  },
  // Konten
  {
    name: "Kuis dari Episode GGS Talk",
    kind: "konten",
    when: "Mingguan, ikut jadwal episode",
    detail: "Jawab pertanyaan dari episode minggu itu di komentar, pemenang dapat voucher — episode ditonton, engagement naik.",
  },
  {
    name: "Screenshot & Repost",
    kind: "konten",
    when: "Setiap hari",
    detail: "Repost hasil treatment, tag akun, dapat potongan kunjungan berikutnya.",
  },
];

export const promoKinds: PromoKind[] = ["mingguan", "bulanan", "momen", "konten"];

export const promosByKind = (kind: PromoKind): Promo[] => promos.filter((p) => p.kind === kind);

// Aturan singkat di bawah halaman promo.
export const promoRules = [
  "Semua diskon di atas masih usulan — finalkan dulu sebelum dipakai di harga resmi.",
  "Satu transaksi cuma boleh pakai satu promo (tidak bisa digabung).",
  "Promo wajib diumumkan lewat story + feed, minimal 1 hari sebelum jalan.",
  "Kasir mencatat promo yang dipakai biar hasilnya bisa dievaluasi tiap bulan.",
];

export const rupiah = (n: number): string => "Rp" + n.toLocaleString("id-ID");

// ============= Kalender promo November – Desember 2026 =============
// Lebaran 2026 (20–21 Maret) sudah lewat; Idul Fitri berikutnya sekitar 9–10 Maret 2027.
export type DatedPromo = { date: string; month: "Nov" | "Des"; name: string; occasion: string; detail: string };

export const promoCalendar: DatedPromo[] = [
  { month: "Nov", date: "10 Nov", name: "Pahlawan Glow Day", occasion: "Hari Pahlawan", detail: "Diskon 10% untuk guru, nakes, TNI/Polri — tunjukkan kartu." },
  { month: "Nov", date: "11 Nov", name: "Promo 11.11", occasion: "Tanggal kembar", detail: "Diskon 11% semua layanan, kuota 11 slot per brand." },
  { month: "Nov", date: "25 Nov", name: "Terima Kasih Guru", occasion: "Hari Guru", detail: "Guru dapat hand treatment gratis tiap ambil nail art." },
  { month: "Nov", date: "25 Nov – 2 Des", name: "Gajian Glow-Up", occasion: "Tanggal gajian", detail: "Bundle hemat: nail art + hair spa atau facial + lash." },
  { month: "Des", date: "1–11 Des", name: "Pre-Order Slot Akhir Tahun", occasion: "Persiapan liburan", detail: "Booking DP lebih awal, dapat potongan Rp25.000." },
  { month: "Des", date: "12 Des", name: "Promo 12.12", occasion: "Harbolnas", detail: "Diskon terbesar tahun ini, voucher bisa dipakai sampai Januari." },
  { month: "Des", date: "15–31 Des", name: "Holiday Squad", occasion: "Libur sekolah", detail: "Paket ibu & anak / bestie berdua lebih hemat." },
  { month: "Des", date: "22 Des", name: "Hari Ibu Spesial", occasion: "Hari Ibu", detail: "Ajak ibu: treatment ibu diskon 30%, plus foto bareng." },
  { month: "Des", date: "24–26 Des", name: "Christmas Look", occasion: "Natal & cuti bersama", detail: "Nail art tema Natal & makeup party, jam buka diperpanjang." },
  { month: "Des", date: "25 Des – 2 Jan", name: "Gajian + THR Natal", occasion: "Gajian Desember", detail: "Gift card GGS untuk kado — beli Rp200.000 dapat Rp225.000." },
  { month: "Des", date: "28–31 Des", name: "New Year Ready", occasion: "Malam tahun baru", detail: "Paket glam: makeup + hairdo + nail, booking wajib DP." },
];

// Versi cowok (GGS Hair Studio) — tanggal sama, isinya layanan barber.
// Nama layanan diambil dari katalog: Potong Dewasa/Anak & Pelajar, Creambath,
// Pijat Kepala, Facial, Perming, Keratin, Colouring, Highlight, Paket G/GP/GPS/GPSS.
export const hairPromoCalendar: DatedPromo[] = [
  { month: "Nov", date: "10 Nov", name: "Pahlawan Rapi", occasion: "Hari Pahlawan", detail: "Potong Dewasa + Pijat Kepala 15 menit diskon 10% buat guru, nakes, TNI/Polri — tunjukkan kartu." },
  { month: "Nov", date: "11 Nov", name: "11.11 Ganteng", occasion: "Tanggal kembar", detail: "Diskon 11% semua Paket Ekonomis (G, GP, GPS, GPSS), kuota 11 slot." },
  { month: "Nov", date: "25 Nov", name: "Guru Rapi", occasion: "Hari Guru", detail: "Guru: Potong Dewasa plus Creambath 30 menit, harga khusus — tunjukkan kartu." },
  { month: "Nov", date: "25 Nov – 2 Des", name: "Gajian Ganteng", occasion: "Tanggal gajian", detail: "Bundle hemat: Paket GPS atau GPSS plus Potong Kumis/Jenggot." },
  { month: "Des", date: "1–11 Des", name: "Booking Slot Natal", occasion: "Persiapan liburan", detail: "DP lebih awal buat slot Natal & tahun baru, potongan Rp25.000." },
  { month: "Des", date: "12 Des", name: "12.12 Ganti Warna", occasion: "Harbolnas", detail: "Colouring atau Highlight (no bleaching/bleaching) diskon terbesar, voucher sampai Januari." },
  { month: "Des", date: "15–31 Des", name: "Pelajar Rapi", occasion: "Libur sekolah", detail: "Potong Anak & Pelajar plus Keramas hemat, show kartu pelajar." },
  { month: "Des", date: "22 Des", name: "Bapak & Anak Rapi", occasion: "Hari Ibu", detail: "Bapak + anak potong bareng: anak diskon 30%, plus foto bareng." },
  { month: "Des", date: "24–26 Des", name: "Christmas Cut", occasion: "Natal & cuti bersama", detail: "Potong + styling + Creambath, jam buka diperpanjang pas cuti bersama." },
  { month: "Des", date: "25 Des – 2 Jan", name: "THR Ganteng", occasion: "Gajian Desember", detail: "Gift card buat kado — beli Rp200.000 dapat Rp225.000." },
  { month: "Des", date: "28–31 Des", name: "New Year Fresh", occasion: "Malam tahun baru", detail: "Paket habis kerja: Potong + Facial 15 menit + Pijat Kepala, booking wajib DP." },
];

// Jadwal iklan untuk tiap promo bertanggal: IG + TikTok jalan 3 hari sebelum promo mulai sampai hari H.
const MONTHS: Record<string, number> = { Nov: 10, Des: 11, Jan: 0 };
const MON_NAME = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
export const AD_LEAD_DAYS = 3;
export function promoAdWindow(p: DatedPromo): { label: string; days: number } {
  const m = p.date.match(/^(\d+)(?:\s*[–-]\s*\d+)?\s*(Nov|Des|Jan)?/);
  const day = Number(m?.[1]);
  const mon = MONTHS[m?.[2] ?? p.month] ?? MONTHS[p.month];
  const start = new Date(2026, mon, day);
  const from = new Date(2026, mon, day - AD_LEAD_DAYS);
  const f = (d: Date) => `${d.getDate()} ${MON_NAME[d.getMonth()]}`;
  return { label: `${f(from)} – ${f(start)}`, days: Math.round((+start - +from) / 864e5) + 1 };
}

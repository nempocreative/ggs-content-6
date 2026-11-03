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

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

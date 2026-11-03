import catalog from "./service-catalog.json";
import { japanBriefs } from "./japan-content";
import type { PillarKey } from "./schedule";

export type Brand = "beauty" | "hair";
export type ContentBrief = {
  service: string;
  category?: string;
  topic: string;
  format: string;
  flow: string;
};

export const SERVICE_SOURCE = "https://github.com/nempocreative/remix-of-ggs-5/blob/main/src/server/api/lib/default-services.ts";

export const briefs: Record<Brand, Record<PillarKey, ContentBrief[]>> = {
  beauty: {
    talk: [
      { service: "Kuku Asli Cat Eye", topic: "Cerita di balik nail art", format: "Podcast • 25 menit", flow: "Host buka topik → nail artist cerita proses nail art → tanya jawab santai → 2 klip Reels + 1 quote card." },
      { service: "Totok Wajah + Masker 45 Menit", topic: "Self care itu bukan kemewahan", format: "Podcast • 25 menit", flow: "Host buka topik → terapis cerita totok wajah dan masker → pertanyaan penonton → 2 klip Reels + 1 quote card." },
      { service: "L'Oréal Warna", topic: "Rambut berwarna, rawat bagaimana?", format: "Podcast • 25 menit", flow: "Host buka topik → stylist cerita perawatan rambut berwarna → tips harian → 2 klip Reels + 1 quote card." },
      { service: "Press On Nail", topic: "Press on: cepat tapi rapi", format: "Podcast • 25 menit", flow: "Host buka topik → nail artist jelaskan press on → siapa yang cocok → 2 klip Reels + 1 quote card." },
      { service: "Full Body Massage 90 Menit", topic: "Capek kerja, butuh jeda", format: "Podcast • 25 menit", flow: "Host buka topik → terapis cerita pijat whole body → ngobrol santai soal relaksasi → 2 klip Reels + 1 quote card." },
    ],
    elis: [
      { service: "Kuku Asli Full Cat Eye + Chrome", topic: "Elis bingung pilih kuku", format: "Reels • 20–30 detik", flow: "Elis membawa banyak referensi → nail artist bantu pilih → lelucon saat menentukan warna → tampilkan hasil nyata." },
      { service: "Potong Poni", topic: "Poni jangan kependekan!", format: "Reels • 20–30 detik", flow: "Elis takut potong poni → stylist konfirmasi panjang → reaksi lucu tanpa hasil gagal → reveal poni rapi." },
      { service: "Full Body Massage 90 Menit", topic: "Elis susah berhenti ngobrol", format: "Reels • 20–30 detik", flow: "Elis datang banyak cerita → konsultasi tekanan pijat → mendadak santai → punchline selesai sesi; talent berpakaian sopan." },
      { service: "Cuci Blow", topic: "Elis siap-siap mendadak", format: "Reels • 20–30 detik", flow: "Elis panik sebelum acara → stylist konfirmasi model blow → reaksi lucu saat ditata → hasil akhir; hindari janji waktu pengerjaan." },
    ],
    cine: [
      { service: "Kuku Asli Full Cat Eye + Chrome", topic: "Detail Cat Eye + Chrome", format: "Reels • 25–40 detik", flow: "Kuku sebelum → close-up aplikasi dan efek cat eye → detail chrome → hasil akhir di cahaya yang sama." },
      { service: "Pendek", category: "KERATIN SMOOTHING", topic: "Proses keratin smoothing", format: "Reels • 25–40 detik", flow: "Kondisi awal → konsultasi stylist → cuplikan aplikasi dan penataan → before–after tanpa filter." },
      { service: "Lulur + Masker Badan", topic: "Ritual lulur dan masker", format: "Reels • 25–40 detik", flow: "Perlengkapan bersih → tekstur lulur → aplikasi pada lengan dengan izin → penutup ruang treatment; jaga privasi." },
      { service: "Totok Wajah + Masker 45 Menit", topic: "Ritual totok wajah dan masker", format: "Reels • 25–40 detik", flow: "Izin rekam wajah → perlengkapan bersih → detail gerakan terapis dan aplikasi masker → penutup sesi; tanpa klaim medis." },
      { service: "Sedang", category: "COLOURING HIGHLIGHT", topic: "Dimensi warna lewat highlight", format: "Reels • 25–40 detik", flow: "Referensi dan rambut awal → konsultasi warna → detail proses highlight → hasil dari tiga sudut dengan cahaya sama." },
    ],
    ngobras: [
      { service: "MeniPedi", topic: "Waktu me-time pelanggan", format: "Reels • 30–45 detik", flow: "Minta izin rekam → tanya alasan memilih MeniPedi → cuplikan perawatan → tanggapan pelanggan tentang hasil." },
      { service: "Body Massage + Reflexy (90 menit)", topic: "Pilihan relaksasi setelah kerja", format: "Reels • 30–45 detik", flow: "Tanya aktivitas pelanggan → alasan pilih paket → rekam bagian tangan/kaki berizin → kesan selesai sesi, tanpa klaim medis." },
      { service: "Sedang", category: "COLOURING FULL WARNA · DENGAN BLEACHING", topic: "Cerita ganti warna rambut", format: "Reels • 30–45 detik", flow: "Tanya warna yang diinginkan → konsultasi kondisi rambut → cuplikan proses → reaksi hasil warna tanpa menjanjikan durasi." },
      { service: "CBD", category: "CREAMBATH", topic: "Creambath pilihan pelanggan", format: "Reels • 30–45 detik", flow: "Izin rekam → tanya alasan memilih creambath → tampilkan produk CBD dan proses → kesan pelanggan setelah selesai." },
    ],
    promo: [
      { service: "MeniPedi", topic: "Kenali menu MeniPedi", format: "Foto feed • 1 gambar", flow: "Foto hasil asli → nama layanan → harga hanya setelah konfirmasi salon → CTA booking, tanpa diskon rekaan." },
      { service: "Body Massage + Scrub + Masker Badan (120 menit)", topic: "Isi paket body treatment", format: "Carousel • 3 halaman", flow: "Foto perlengkapan → rincian massage, scrub dan masker → durasi menu 120 menit + ajakan booking." },
      { service: "Cuci Curly", topic: "Styling sebelum acara", format: "Foto feed • 1 gambar", flow: "Foto hasil curly → nama layanan Cuci Curly → konfirmasi ketersediaan slot → ajakan reservasi." },
      { service: "Pendek", category: "KERATIN TREATMENT", topic: "Kenali menu keratin treatment", format: "Carousel • 3 halaman", flow: "Foto rambut asli → sebut menu Keratin Treatment untuk rambut pendek → bedakan dari smoothing bersama stylist → CTA konsultasi, harga dikonfirmasi." },
      { service: "Waxing Ketiak", topic: "Kenali layanan waxing ketiak", format: "Carousel • 3 halaman", flow: "Foto ruang dan perlengkapan, bukan area tubuh pribadi → jelaskan layanan bersama terapis → konsultasi sebelum treatment + CTA reservasi." },
    ],
    jpn: japanBriefs.jpn,
    lotion: japanBriefs.lotion,
  },
  hair: {
    talk: [
      { service: "Perming", topic: "Perming di rambut pria", format: "Podcast • 25 menit", flow: "Host buka topik → barber jelaskan perming dan bedanya dengan smoothing → tanya jawab → 2 klip Reels + 1 quote card." },
      { service: "Paket GPS (Ganteng Pisan Sob) — Potong + Creambath Pijat Kepala Bahu + Tonik (30 menit)", topic: "Kenapa Paket GPS banyak diambil", format: "Podcast • 25 menit", flow: "Host buka topik → barber bahas isi paket → pertanyaan penonton → 2 klip Reels + 1 quote card." },
      { service: "Colouring No Bleaching", topic: "Warna rambut pria, mulai dari mana", format: "Podcast • 25 menit", flow: "Host buka topik → barber bahas colouring tanpa bleach → kondisi rambut → 2 klip Reels + 1 quote card." },
      { service: "Keratin Smoothing", topic: "Keratin untuk rambut pria", format: "Podcast • 25 menit", flow: "Host buka topik → barber jelaskan keratin smoothing → perawatan setelahnya → 2 klip Reels + 1 quote card." },
    ],
    elis: [
      { service: "Dewasa", category: "HAIR CUT", topic: "Bawa banyak referensi, pulang satu model", format: "Reels • 20–30 detik", flow: "Klien datang bawa banyak referensi → barber jelaskan bentuk rambut yang cocok → deal satu model → reveal potongan rapi, bukan hasil gagal." },
      { service: "Potong Jenggot", topic: "Jenggot cuma dirapikan “sedikit”", format: "Reels • 20–30 detik", flow: "Klien minta sedikit saja → konfirmasi bentuk → ekspresi lucu saat dirapikan → hasil detail jenggot." },
      { service: "Paket G (Ganteng) — Potong + Pijat Bahu (15 menit)", topic: "Potong sekaligus santai", format: "Reels • 20–30 detik", flow: "Klien buru-buru datang → selesai potong ingin pijat terus → punchline → tampilkan dua isi Paket G." },
      { service: "Potong Kumis", topic: "Kumis, sedikit saja!", format: "Reels • 20–30 detik", flow: "Klien berulang kali bilang sedikit → barber konfirmasi bentuk → close-up rapikan kumis → reaksi puas dengan punchline ringan." },
    ],
    cine: [
      { service: "Dewasa", category: "HAIR CUT", topic: "Detail potongan dewasa", format: "Reels • 25–40 detik", flow: "Rambut awal → konsultasi model → close-up gunting dan rapikan tepi → reveal depan, samping, belakang." },
      { service: "Perming", topic: "Perubahan tekstur perming", format: "Reels • 25–40 detik", flow: "Rambut sebelum → detail penataan saat proses → hasil tekstur → before–after pada sudut dan cahaya sama." },
      { service: "Paket GPS (Ganteng Pisan Sob) — Potong + Creambath Pijat Kepala Bahu + Tonik (30 menit)", topic: "Ritual lengkap Paket GPS", format: "Reels • 25–40 detik", flow: "Potong → creambath → pijat kepala bahu → aplikasi tonik dan hasil; jangan tampilkan facial sebagai isi GPS." },
      { service: "Highlight Bleaching", topic: "Detail highlight dengan bleaching", format: "Reels • 25–40 detik", flow: "Konsultasi kondisi rambut → detail proses bleaching dan highlight sesuai barber → reveal warna → before–after tanpa filter." },
    ],
    ngobras: [
      { service: "Panjang Gondrong", topic: "Tetap gondrong, lebih rapi", format: "Reels • 30–45 detik", flow: "Izin rekam → tanya panjang yang ingin dipertahankan → cuplikan potong → komentar pelanggan saat melihat hasil." },
      { service: "Colouring Bleaching", topic: "Pengalaman pertama colouring", format: "Reels • 30–45 detik", flow: "Tanya referensi warna → konsultasi dengan barber → cuplikan pewarnaan → reaksi akhir tanpa menjanjikan hasil identik." },
      { service: "Creambath Pijat Kepala Bahu (30 menit)", topic: "Jeda setelah aktivitas", format: "Reels • 30–45 detik", flow: "Tanya rutinitas → alasan memilih creambath → cuplikan pijat berizin → kesan pelanggan, bukan klaim kesehatan." },
      { service: "Masker / Facial & Pijat Muka (15 menit)", topic: "Cerita jeda facial pelanggan", format: "Reels • 30–45 detik", flow: "Izin rekam wajah → tanya alasan memilih facial sebelum aplikasi → cuplikan masker dan pijat muka → kesan setelah sesi, tanpa klaim medis." },
    ],
    promo: [
      { service: "Paket G (Ganteng) — Potong + Pijat Bahu (15 menit)", topic: "Kenali Paket G", format: "Foto feed • 1 gambar", flow: "Foto hasil potong → rincian potong + pijat bahu → konfirmasi harga salon → CTA booking." },
      { service: "Paket GPSS (Ganteng Pisan Sob Sob) — Potong + Keramas Tonik + Pijat Kepala Muka + Facial (30 menit)", topic: "Facial ada di Paket GPSS", format: "Carousel • 3 halaman", flow: "Foto layanan → isi potong, keramas tonik, pijat kepala muka + facial → durasi menu 30 menit dan ajakan booking." },
      { service: "Highlight No Bleaching", topic: "Pilihan highlight", format: "Foto feed • 1 gambar", flow: "Foto hasil highlight asli → nama Highlight No Bleaching → konsultasi referensi warna → ajakan reservasi." },
      { service: "Paket GP (Ganteng Pisan) — Potong + Pijat Kepala Bahu + Keramas (15 menit)", topic: "Tiga layanan dalam Paket GP", format: "Carousel • 3 halaman", flow: "Foto hasil potong → rincian potong, pijat kepala bahu dan keramas → nama Paket GP + CTA booking; harga dikonfirmasi salon." },
    ],
    jpn: japanBriefs.jpn,
    lotion: japanBriefs.lotion,
  },
};

export function catalogService(brand: Brand, brief: ContentBrief) {
  return catalog.find((s) => s.brand === brand && s.name === brief.service && (!brief.category || s.category === brief.category));
}

export function scheduledBrief(brand: Brand, schedule: string[][], day: number, slot: number) {
  return assign(brand, schedule)[day]?.[slot];
}

// ---- FYP expansion: unique creative hooks so every post in the month has its own topic ----
type Svc = { brand: string; category: string; name: string };
const label = (s: Svc) => {
  const base = s.name.split(" — ")[0] ?? s.name;
  if (/^(Pendek|Sedang|Panjang)$/.test(base)) {
    const cat = (s.category.split(" · ")[0] ?? "").toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
    return `${cat} ${base}`;
  }
  return base;
};
const SKIP = new Set(["MINUMAN"]);
const HOOKS: Record<"elis" | "cine" | "ngobras" | "promo", { topic: (l: string) => string; format: string; flow: (l: string) => string }[]> = {
  elis: [
    { topic: (l) => `POV: pertama kali coba ${l}`, format: "Reels • 20–30 detik", flow: (l) => `Hook ekspresi panik 2 detik → konsultasi ${l} → twist lucu → reveal hasil asli + trending sound.` },
    { topic: (l) => `Ekspektasi vs realita ${l}`, format: "Reels • 20–30 detik", flow: (l) => `Split screen ekspektasi lebay → realita proses ${l} → punchline → hasil rapi.` },
    { topic: (l) => `Tipe-tipe pelanggan ${l}`, format: "Reels • 20–30 detik", flow: (l) => `3 karakter pelanggan diperankan satu talent → tiap tipe minta ${l} → punchline di akhir.` },
    { topic: (l) => `Bilangnya "dikit aja" waktu ${l}`, format: "Reels • 20–30 detik", flow: (l) => `Klien ulang-ulang minta sedikit → konfirmasi ${l} → reaksi kaget → hasil memuaskan.` },
  ],
  cine: [
    { topic: (l) => `ASMR ${l}`, format: "Reels • 25–40 detik", flow: (l) => `Tanpa musik, suara asli alat → close-up proses ${l} → slow-mo detail → hasil akhir.` },
    { topic: (l) => `Transformasi 15 detik: ${l}`, format: "Reels • 15–20 detik", flow: (l) => `Before 1 detik → jump cut cepat proses ${l} → beat drop → after di cahaya sama.` },
    { topic: (l) => `Satisfying detail ${l}`, format: "Reels • 25–40 detik", flow: (l) => `Macro shot tekstur → gerakan tangan profesional saat ${l} → reveal 360°.` },
    { topic: (l) => `Behind the chair: ${l}`, format: "Reels • 25–40 detik", flow: (l) => `POV kamera dari sisi stylist/terapis → langkah ${l} → senyum pelanggan berizin.` },
  ],
  ngobras: [
    { topic: (l) => `Kenapa pilih ${l}? Jawabannya…`, format: "Reels • 30–45 detik", flow: (l) => `Teks hook pertanyaan → pelanggan jawab jujur sambil ${l} → cuplikan proses → kesan akhir.` },
    { topic: (l) => `Rate ${l} 1–10`, format: "Reels • 30–45 detik", flow: (l) => `Minta izin → pelanggan kasih nilai sebelum & sesudah ${l} → alasan nilainya → CTA komen.` },
    { topic: (l) => `Street-style interview saat ${l}`, format: "Reels • 30–45 detik", flow: (l) => `Mic kecil + pertanyaan random → obrolan ringan selama ${l} → momen lucu → hasil.` },
    { topic: (l) => `Curhat pelanggan sambil ${l}`, format: "Reels • 30–45 detik", flow: (l) => `Pertanyaan pembuka santai → cerita pelanggan saat ${l} → quote terbaik jadi teks → kesan.` },
  ],
  promo: [
    { topic: (l) => `Menu spotlight: ${l}`, format: "Foto feed • 1 gambar", flow: (l) => `Foto hasil asli ${l} → nama layanan jelas → harga dikonfirmasi salon → CTA booking.` },
    { topic: (l) => `Swipe: 3 alasan coba ${l}`, format: "Carousel • 3 halaman", flow: (l) => `Halaman 1 hook → halaman 2 isi layanan ${l} → halaman 3 CTA reservasi, tanpa diskon rekaan.` },
    { topic: (l) => `Cocok buat kamu yang… (${l})`, format: "Carousel • 3 halaman", flow: (l) => `Checklist situasi pelanggan → solusi ${l} → konsultasi dulu + CTA DM.` },
    { topic: (l) => `Story poll: siapa mau ${l}?`, format: "Story • poll + link", flow: (l) => `Foto ${l} → stiker poll → follow-up DM ke yang vote → link booking.` },
  ],
};
// Hair Studio: beard/moustache grooming capped at one post per pillar so the men's feed stays varied.
const GROOMING = /Jenggot|Kumis/;
const HAIR_HOOKS: typeof HOOKS = {
  elis: [
    { topic: (l) => `Cowok pas ditanya "mau model apa?" (${l})`, format: "Reels • 20–30 detik", flow: (l) => `Klien bengong jawab "terserah" → barber tebak gaya lewat pertanyaan lucu → ${l} → reveal percaya diri.` },
    { topic: (l) => `Disuruh pacar ke barber: ${l}`, format: "Reels • 20–30 detik", flow: (l) => `Chat pacar di layar → klien datang setengah hati → ${l} → kirim foto hasil, balasan lucu.` },
  ],
  cine: [
    { topic: (l) => `Gaya kantor vs weekend: ${l}`, format: "Reels • 20–30 detik", flow: (l) => `Proses ${l} singkat → transisi outfit kantor → transisi outfit santai → styling dua versi.` },
    { topic: (l) => `One take cinematic: ${l}`, format: "Reels • 25–40 detik", flow: (l) => `Satu kamera gimbal mengelilingi kursi → proses ${l} → lighting dramatis hitam-gold → reveal.` },
  ],
  ngobras: [
    { topic: (l) => `Ngobrol kerja & hobi sambil ${l}`, format: "Reels • 30–45 detik", flow: (l) => `Tanya profesi/hobi klien → obrolan santai selama ${l} → cerita menarik jadi teks → hasil akhir.` },
    { topic: (l) => `Barber nanya, klien jawab jujur: ${l}`, format: "Reels • 30–45 detik", flow: (l) => `Pertanyaan cepat kebiasaan rawat rambut → jawaban jujur → proses ${l} → tips barber.` },
  ],
  promo: [
    { topic: (l) => `Siap ngantor/kondangan? ${l}`, format: "Carousel • 3 halaman", flow: (l) => `Halaman 1 situasi acara → halaman 2 hasil ${l} → halaman 3 CTA booking, harga dikonfirmasi.` },
    { topic: (l) => `Before–after minggu ini: ${l}`, format: "Foto feed • 2 gambar", flow: (l) => `Foto before & after ${l} berizin → cahaya sama → CTA reservasi.` },
  ],
};
for (const brand of ["beauty", "hair"] as Brand[]) {
  const pool = (catalog as Svc[]).filter((s) => s.brand === brand && !SKIP.has(s.category) && (brand === "hair" || s.category !== "PRODUK"));
  for (const key of Object.keys(HOOKS) as (keyof typeof HOOKS)[]) {
    const list = briefs[brand][key];
    const seen = new Set(list.map((b) => b.topic));
    const offset = { elis: 0, cine: 7, ngobras: 13, promo: 19 }[key];
    for (let i = 0; list.length < 32 && i < pool.length * HOOKS[key].length; i++) {
      const s = pool[(i * 5 + offset) % pool.length]!;
      const hooks = brand === "hair" ? [...HOOKS[key], ...HAIR_HOOKS[key]] : HOOKS[key];
      const h = hooks[(i + Math.floor(i / pool.length)) % hooks.length]!;
      if (brand === "hair" && GROOMING.test(s.name) && list.filter((b) => GROOMING.test(b.service)).length >= 1) continue;
      const l = label(s);
      const b: ContentBrief = { service: s.name, ...(/^(Pendek|Sedang|Panjang)$/.test(s.name) || brand === "hair" ? { category: s.category } : {}), topic: h.topic(l), format: h.format, flow: h.flow(l) };
      if (brand === "hair" && key === "elis" && /Elis/.test(b.topic)) continue;
      if (seen.has(b.topic)) continue;
      seen.add(b.topic);
      list.push(b);
    }
  }
}

// Assign briefs across the month: each topic used once, never two posts of the same service on one day.
const assignCache = new Map<string, (ContentBrief | undefined)[][]>();
function assign(brand: Brand, schedule: string[][]) {
  const id = brand + JSON.stringify(schedule);
  const hit = assignCache.get(id);
  if (hit) return hit;
  const used: Record<string, Set<number>> = {};
  const out = schedule.map((row) => {
    const today = new Set<string>();
    return row.map((k) => {
      const opts = briefs[brand][k as PillarKey];
      if (!opts) return undefined;
      const u = (used[k] ??= new Set());
      if (u.size >= opts.length) u.clear();
      let idx = opts.findIndex((b, i) => !u.has(i) && !today.has(b.service));
      if (idx < 0) idx = opts.findIndex((_, i) => !u.has(i));
      u.add(idx);
      if (k !== "jpn" && k !== "lotion") today.add(opts[idx]!.service);
      return opts[idx];
    });
  });
  assignCache.set(id, out);
  return out;
}

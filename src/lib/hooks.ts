import type { Brand } from "./schedule";

// Pola pembuka yang terbukti jalan di Reels/TikTok — dipakai untuk menulis hook baru.
export const hookFormulas = [
  "POV: …",
  "Ekspektasi vs realita",
  "Tipe-tipe …",
  "Kenapa pilih …?",
  "Rate 1–10",
  "3 alasan …",
  "Sebelum vs sesudah",
  "Jangan di-skip",
  "Pertanyaan jujur",
  "Tim A atau Tim B",
  "Curhat customer",
  "Hari ke-[n] di …",
];

// Aturan penulisan hook — dipakai bersama dua akun.
export const hookRules = [
  "Hook masuk di 3 detik pertama & baris pertama caption.",
  "Satu video satu ide — jangan dua sekaligus.",
  "Sebut Garut kalau targetnya pelanggan sekitar.",
  "Tutup hook dengan pertanyaan atau ajakan komen.",
  "Jangan buka dengan logo atau salam panjang.",
];

// Hook siap pakai per pilar — [layanan] / [topik] diisi dari jadwal.
export const hookBank: Record<Brand, { pillar: string; lines: string[] }[]> = {
  beauty: [
    {
      pillar: "GGS Talk",
      lines: [
        "Cewek Garut mana yang belum ngopi sore?",
        "Kita ngomongin [topik] tanpa nada ceramah.",
        "Ini pertanyaan yang paling sering kamu tanya.",
      ],
    },
    {
      pillar: "Si Elis",
      lines: [
        "POV: Elis first time ke salon",
        "Ekspektasi: glow up. Realita: [punchline]",
        "Tipe-tipe customer kalau dipanggil nama",
      ],
    },
    {
      pillar: "Cinematic",
      lines: [
        "8 detik ini bikin kepala ikut rileks.",
        "Suara busa + hair spa = therapy",
        "Jangan di-skip, 5 detik terakhir worth it.",
      ],
    },
    {
      pillar: "Ngobras",
      lines: [
        "Kita tanya: kenapa pilih [layanan]?",
        "Rate [layanan] kami 1–10, jujur ya.",
        "Dia curhat, kita dengerin sambil treatment.",
      ],
    },
    {
      pillar: "Promo",
      lines: [
        "Sabtu-mu belum ada rencana? Save dulu",
        "3 alasan customer balik lagi ke [layanan].",
        "Kamu tim [layanan] atau tim [layanan]?",
      ],
    },
  ],
  hair: [
    {
      pillar: "GGS Talk",
      lines: [
        "Cowok Garut, ngopi dulu sebelum cut",
        "Barber kami jawab: [topik], tanpa basa-basi.",
        "Topik yang bikin kursi barber paling ribut.",
      ],
    },
    {
      pillar: "Comedy",
      lines: [
        "POV: disuruh pacar ke barber",
        "Kata barber \"dikit aja\"… beneran dikit",
        "Tipe-tipe cowok kalau lagi di-barber",
      ],
    },
    {
      pillar: "Cinematic",
      lines: [
        "3 detik pertama: dengerin fade-nya",
        "Dari berantakan ke rapi. Tonton sampai habis.",
        "Ini yang bikin potong rambut kerasa mahal.",
      ],
    },
    {
      pillar: "Ngobras",
      lines: [
        "Kita tanya: kenapa pilih model [potongan]?",
        "Rate potongan minggu ini 1–10, bro.",
        "Ngobrol kerja & hobi sambil dipangkas",
      ],
    },
    {
      pillar: "Promo",
      lines: [
        "Besok ada acara? Ini yang harus di-handle.",
        "3 alasan [paket] selalu penuh di weekend.",
        "Gaya kantor vs weekend, kamu tim mana?",
      ],
    },
  ],
};

// Hook untuk minggu Jepang (owner & Lotion Tone Up) — dipakai dua akun.
export const japanHooks = [
  "Owner GGS lagi di Tokyo, begini harinya.",
  "Barang yang selalu dibawa owner ke Jepang.",
  "Lotion tone up yang bikin kulit nggak kusam.",
];

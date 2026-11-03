import type { Brand } from "./content-plan";
import { briefs, scheduledBrief } from "./content-plan";
import { PODCAST_DAYS, schedBeauty, schedHair, days } from "./schedule";

// ---- Acuan GGS Talk (podcast Ngopi Sore) ----
// Owner ngobrol santai dan ngalir — tidak ada naskah. Yang disiapkan cuma
// acuan pertanyaan: daftar ini pemantik, boleh dilewati kalau obrolan sudah jalan.

export const talkMeta = {
  duration: "25 menit",
  air: "Jumat 16:00",
  output: "1 episode penuh jadi 2 klip Reels + 1 quote card",
};

export type TalkQuestionGroup = { group: string; items: string[] };

// Pertanyaan pemantik per akun — dipakai owner, bukan dibaca dari naskah.
export const talkQuestions: Record<Brand, TalkQuestionGroup[]> = {
  beauty: [
    {
      group: "Buka obrolan",
      items: [
        "Ceritain dong, pelanggan pertama GGS itu siapa?",
        "Layanan mana yang paling kamu suka kerjain, dan kenapa?",
        "Hari paling berantakan di salon gimana ceritanya?",
      ],
    },
    {
      group: "Kalau udah nyantai",
      items: [
        "Apa yang paling sering disalahpahami orang soal salon?",
        "Treatment yang orang kira cuma buat yang punya uang, padahal nggak?",
        "Pernah nggak nolak layanan yang lagi tren? Alasannya apa?",
        "Customer mana yang paling kamu inget, dan kenapa?",
        "Menurut kamu, cantik itu bikin tenang atau bikin repot?",
        "Kalau lagi budget terbatas, mulai dari mana yang paling worth it?",
      ],
    },
    {
      group: "Biar nutupnya ngena",
      items: [
        "Satu hal yang kamu pengen orang Garut tahu soal GGS?",
        "Pertanyaan apa yang belum pernah ditanyain ke kamu?",
      ],
    },
  ],
  hair: [
    {
      group: "Buka obrolan",
      items: [
        "GGS Hair Studio ini mulai dari mana sih?",
        "Model potongan apa yang paling sering kamu ambil buat sendiri?",
        "Minggu ini cowok Garut paling banyak request apa?",
      ],
    },
    {
      group: "Kalau udah nyantai",
      items: [
        "Apa yang bikin cowok males rawat rambut, padahal gampang?",
        "Pernah nolak request model yang nggak cocok sama bentuk rambut? Gimana jelasinnya?",
        "Bedanya potong di sini sama di tempat lain, jujur, di mana?",
        "Cerita pelanggan mana yang paling bikin kamu ngakak di kursi barber?",
        "Rapi itu buat diri sendiri atau buat dilihat orang?",
        "Cowok yang cuma punya waktu 15 menit, kamu kasih apa?",
      ],
    },
    {
      group: "Biar nutupnya ngena",
      items: [
        "Satu hal yang kamu pengen orang Garut tahu soal GGS Hair Studio?",
        "Pertanyaan apa yang belum pernah ditanyain ke barber?",
      ],
    },
  ],
};

// Cara mainnya — biar obrolan tetap natural, bukan wawancara kaku.
export const talkRules = [
  "Anggap ngobrol sama temen — nggak ada naskah yang dibaca.",
  "Kejar jawaban tamu, jangan lompat ke pertanyaan berikutnya.",
  "Boleh ngelantur; bagian yang nggak perlu dipotong di editing.",
  "Satu pertanyaan satu cerita — jangan nembak tiga sekaligus.",
  "Diam sebentar itu wajar, nggak perlu buru-buru diisi.",
  "Harga & manfaat hanya dari info salon, tanpa klaim medis.",
  "Sebut Garut natural di tengah obrolan, bukan dihafal.",
];

// Alur longgar 25 menit — pegangan waktu, bukan urutan yang wajib.
export type TalkSegment = { t: string; name: string; note: string };

export const talkFlow: TalkSegment[] = [
  { t: "0–2 mnt", name: "Buka", note: "Ngobrol dulu, baru rekam." },
  { t: "2–9 mnt", name: "Cerita tamu", note: "Tamu cerita, host nanya." },
  { t: "9–17 mnt", name: "Tanya jawab", note: "Pertanyaan dari penonton." },
  { t: "17–23 mnt", name: "Tips", note: "2–3 hal buat dicoba di rumah." },
  { t: "23–25 mnt", name: "Nutup", note: "Ajak booking + episode depan." },
];

// Bahan turunan setelah episode selesai.
export const talkClips = [
  "Klip 1 — jawaban paling jujur (15–30 detik).",
  "Klip 2 — momen lucu atau reaksi tak terduga.",
  "Quote card — satu kalimat tamu + nama dan perannya.",
];

export type TalkEpisode = { day: number; air: string; topic: string; service: string; guest: string };

// Nama tamu diambil dari layanan yang dibahas, jadi tidak perlu dikarang.
function guestFor(brand: Brand, service: string) {
  if (brand === "hair" && /paket/i.test(service)) return "Barber";
  if (/kuku|nail|press|mani|pedi|cat eye/i.test(service)) return "Nail artist";
  if (/totok|wajah|masker|facial/i.test(service)) return "Terapis wajah";
  if (/massage|pijat|reflexy|lulur|scrub|body/i.test(service)) return "Terapis tubuh";
  if (/warna|colouring|coloring|highlight|bleach|loreal/i.test(service)) return "Stylist warna";
  if (/keratin|smoothing|creambath|potong|cut|tonik|perming|paket/i.test(service))
    return brand === "hair" ? "Barber" : "Stylist rambut";
  return brand === "hair" ? "Barber" : "Tim GGS Beauty";
}

const SCHED: Record<Brand, string[][]> = { beauty: schedBeauty, hair: schedHair };

function build(brand: Brand): TalkEpisode[] {
  return PODCAST_DAYS.map((day, i) => {
    const brief = scheduledBrief(brand, SCHED[brand], day, 1);
    const topic = brief?.topic ?? briefs[brand].talk[i]?.topic ?? "Topik menyusul";
    const service = brief?.service ?? briefs[brand].talk[i]?.service ?? "";
    return { day, air: days[day] ?? "", topic, service, guest: guestFor(brand, service) };
  });
}

// Episode yang benar-benar tayang bulan ini: Jumat 6, 13, dan 27 November.
export const talkEpisodes: Record<Brand, TalkEpisode[]> = {
  beauty: build("beauty"),
  hair: build("hair"),
};

// ---- Alur per episode: dari buka sampai nutup, satu pertanyaan pemantik per tahap ----
export type EpisodeStep = { t: string; name: string; q: string; note: string };

const STEPS = ["0–3 mnt", "3–8 mnt", "8–15 mnt", "15–22 mnt", "22–25 mnt"];
const NAMES = ["Buka", "Awal cerita", "Di balik layar", "Momen & tips", "Nutup"];

// Alur khusus untuk topik yang tayang; topik lain pakai alur umum di bawah.
const FLOWS: Record<string, [string, string][]> = {
  "Cerita di balik nail art": [
    ["Kuku siapa yang pertama kali kamu cat di GGS?", "Ngopi dulu, kenalan sama nail artist."],
    ["Dulu belajar nail art dari mana, gagal berapa kali?", "Biarkan cerita awalnya panjang."],
    ["Satu set cat eye itu prosesnya apa aja, yang orang nggak lihat?", "Tunjukin kuku/alat ke kamera."],
    ["Request paling unik apa? Terus biar awet di rumah gimana?", "Momen lucu = bahan klip 2."],
    ["Buat yang baru mau coba, mulai dari model apa?", "Ajak booking di Garut + bocoran episode depan."],
  ],
  "Self care itu bukan kemewahan": [
    ["Kapan terakhir kamu bener-bener istirahat?", "Pembuka santai, saling cerita."],
    ["Kenapa banyak yang ngerasa self care itu cuma buat yang mampu?", "Kejar contoh nyata dari tamu."],
    ["45 menit totok wajah + masker itu sebenarnya ngapain aja?", "Jelasin proses, tanpa klaim medis."],
    ["Pelanggan biasanya ngomong apa setelah selesai?", "Plus 2 kebiasaan kecil self care di rumah."],
    ["Kalau cuma punya sejam seminggu, mending dipakai buat apa?", "Ajak mampir + episode depan."],
  ],
  "Rambut berwarna, rawat bagaimana?": [
    ["Warna rambut pertama kamu dulu apa? Nyesel nggak?", "Buka dengan cerita lucu."],
    ["Biasanya pelanggan datang bawa foto referensi kayak apa?", "Bahas ekspektasi vs realita."],
    ["Dari konsultasi sampai bilas, apa yang dicek stylist?", "Tunjukin palet/hasil kalau ada."],
    ["Kesalahan perawatan paling sering setelah warnain?", "2–3 tips rawat warna di rumah."],
    ["Warna apa yang lagi banyak dipilih di Garut?", "Ajak konsultasi + episode depan."],
  ],
  "Perming di rambut pria": [
    ["Pertama kali denger cowok perming, reaksi kamu gimana?", "Ngopi dulu, obrol ringan."],
    ["Pelanggan cowok yang pertama berani perming siapa ceritanya?", "Biarin tamu cerita detail."],
    ["Biar hasilnya natural, apa yang ditentuin sebelum mulai?", "Tunjukin contoh hasil."],
    ["Komentar temen atau pacar paling lucu setelah perming?", "Plus cara rawat biar keriting awet."],
    ["Cowok yang masih ragu, kamu saranin mulai dari mana?", "Ajak booking di Garut + episode depan."],
  ],
  "Kenapa Paket GPS banyak diambil": [
    ["Nama Ganteng Pisan Sob itu idenya dari mana?", "Pembuka santai, boleh ketawa."],
    ["Biasanya yang ambil paket ini cowok kayak gimana?", "Kejar cerita pelanggan tetap."],
    ["30 menit itu urutannya apa aja, dari potong sampai tonik?", "Jelasin alur paket di kursi."],
    ["Bagian mana yang bikin pelanggan sampai ketiduran?", "Momen lucu + tips rapi seminggu."],
    ["Kapan waktu paling pas ambil paket GPS?", "Ajak booking + episode depan."],
  ],
  "Warna rambut pria, mulai dari mana": [
    ["Kamu sendiri pernah warnain rambut? Warna apa?", "Buka dengan cerita pribadi."],
    ["Kenapa banyak cowok takut coba warna?", "Bahas mitos yang sering didengar."],
    ["Tanpa bleaching, warna apa yang bisa dan nggak bisa?", "Jujur soal batasnya."],
    ["Biar nggak cepat pudar, apa yang dihindari?", "2–3 tips rawat warna."],
    ["Buat kerja kantoran, warna yang aman apa?", "Ajak konsultasi + episode depan."],
  ],
};

function genericFlow(e: TalkEpisode): [string, string][] {
  return [
    [`Kenapa hari ini pengen bahas ${e.topic.toLowerCase()}?`, "Ngopi dulu, kenalan sama tamu."],
    [`Pertama kali kenal ${e.service} gimana ceritanya?`, "Biarkan cerita awalnya panjang."],
    ["Bagian proses yang orang nggak lihat itu apa?", "Tunjukin alat atau hasil."],
    ["Kesalahan paling sering pelanggan, dan tipsnya?", "Momen lucu = bahan klip."],
    ["Buat yang baru mau coba, mulai dari mana?", "Ajak booking di Garut + episode depan."],
  ];
}

export function episodeFlow(e: TalkEpisode): EpisodeStep[] {
  const f = FLOWS[e.topic] ?? genericFlow(e);
  return f.map(([q, note], i) => ({ t: STEPS[i] ?? "", name: NAMES[i] ?? "", q, note }));
}

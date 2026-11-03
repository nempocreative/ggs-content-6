// GGS content schedule generator — 28 days, 3 slots/day, per account.
// Rules: podcast Ngopi Sore one episode per week (Friday 16:00), max 2 videos/day,
// and every day always carries at least one non-video post (Promo / Promo Lotion).
// Salon production continues during the owner's Japan trip. Japan production is
// a separate shared owner/product schedule, not part of each salon's 84 posts.

export type PillarKey = "talk" | "elis" | "cine" | "ngobras" | "promo" | "jpn" | "lotion";

export type Brand = "beauty" | "hair";

export interface Pillar {
  key: PillarKey;
  name: string;
  full: string;
  desc: string;
  video: boolean;
}

// Pillar labels per account: the comedy sketch character (Si Elis) only exists in GGS Beauty,
// so GGS Hair Studio runs the same pillar under the neutral name "Comedy".
const PILLAR_LABEL: Record<PillarKey, Record<Brand, string>> = {
  talk: { beauty: "GGS Talk", hair: "GGS Talk" },
  elis: { beauty: "Si Elis", hair: "Comedy" },
  cine: { beauty: "Cinematic", hair: "Cinematic" },
  ngobras: { beauty: "Ngobras", hair: "Ngobras" },
  promo: { beauty: "Promo", hair: "Promo" },
  jpn: { beauty: "Japan Diaries", hair: "Japan Diaries" },
  lotion: { beauty: "Promo Lotion", hair: "Promo Lotion" },
};

export const pillarName = (key: PillarKey, brand: Brand) => PILLAR_LABEL[key][brand];

// Label for slides that show both accounts at once.
export const dualName = (key: PillarKey) => {
  const b = PILLAR_LABEL[key].beauty;
  const h = PILLAR_LABEL[key].hair;
  return b === h ? b : `${b} / ${h}`;
};

export const PILLARS: Pillar[] = [
  { key: "talk", name: "GGS Talk", full: "GGS Talk — Podcast Ngopi Sore", desc: "Podcast mingguan: host ngobrol bareng tamu, tema seputar salon dan self care.", video: true },
  { key: "elis", name: "Si Elis", full: "Komedi — Si Elis (Beauty) • Comedy (Hair)", desc: "Sketsa komedi singkat, sisi lucu keseharian di salon.", video: true },
  { key: "cine", name: "Cinematic", full: "Video Cinematic Treatment", desc: "Video sinematik proses treatment, kualitas tinggi.", video: true },
  { key: "ngobras", name: "Ngobras", full: "Ngobras bareng Konsumen", desc: "Ngobrol santai bareng konsumen sambil treatment.", video: true },
  { key: "promo", name: "Promo", full: "Promo", desc: "Promo produk, harga spesial, dan informasi layanan.", video: false },
  { key: "jpn", name: "Japan Diaries", full: "Japan Diaries — Personal Branding Owner", desc: "Vlog owner selama di Jepang: keseharian, tempat ikonik, dan cerita di balik GGS.", video: true },
  { key: "lotion", name: "Promo Lotion", full: "Promo Lotion Tone Up", desc: "Promosi produk lotion badan tone up — foto produk, tone-up sebagai identitas produk, dan ajakan beli.", video: false },
];

// Salon-only totals: 84 posts per account; Japan production is counted separately.
export const TARGET: Record<PillarKey, number> = {
  talk: 3,
  elis: 12,
  cine: 21,
  ngobras: 20,
  promo: 28,
  jpn: 0,
  lotion: 0,
};

export const SLOTS = ["11:00", "16:00", "19:30"];

// Podcast Ngopi Sore: Friday 16:00. Week 3 (18–24 Nov) is skipped — the owner is in Japan.
export const PODCAST_DAYS = [2, 9, 23];
export const PODCAST_BLACKOUT: [number, number] = [12, 20]; // 16–24 November 2026
// Japan content week: 16–24 November 2026 (owner trip) — Japan Diaries + Promo Lotion.
export const JAPAN_DAYS: [number, number] = [12, 20];
export const JAPAN_TARGET = { jpn: 9, lotion: 18 };
export const schedJapan: string[][] = Array.from({ length: 9 }, () => ["lotion", "jpn", "lotion"]);

function buildSchedule(promoFirst: boolean, comedyOffset: number): string[][] {
  const counts: Record<PillarKey, number> = { ...TARGET };
  const result: string[][] = [];
  const podcast = new Set(PODCAST_DAYS.filter((d) => d < PODCAST_BLACKOUT[0] || d > PODCAST_BLACKOUT[1]));
  const normalDays: number[] = [];
  for (let d = 0; d < 28; d++) if (!podcast.has(d)) normalDays.push(d);

  // Comedy (12x) spread over non-podcast days; the accounts have different offsets.
  const comedyDays = new Set<number>();
  for (let i = 0, prev = 0; i < normalDays.length; i++) {
    const upto = Math.round(((i + 1) * TARGET.elis) / normalDays.length);
    if (upto > prev) {
      const day = normalDays[(i + comedyOffset) % normalDays.length];
      if (day !== undefined) comedyDays.add(day);
      prev = upto;
    }
  }

  const takeVG = (): PillarKey => {
    const v: PillarKey = counts.cine >= counts.ngobras ? "cine" : "ngobras";
    counts[v]--;
    return v;
  };
  const takePair = (): [PillarKey, PillarKey] => {
    const a: PillarKey = counts.cine >= counts.ngobras ? "cine" : "ngobras";
    const b: PillarKey = a === "cine" ? "ngobras" : "cine";
    counts[a]--;
    counts[b]--;
    return [a, b];
  };

  for (let d = 0; d < 28; d++) {
    const cells: (string | null)[] = [null, null, null];
    if (podcast.has(d)) {
      // Podcast day: full episode 16:00 + one short video + one promo.
      cells[1] = "talk";
      counts.talk--;
      const v = takeVG();
      if (promoFirst) {
        cells[0] = "promo";
        cells[2] = v;
      } else {
        cells[0] = v;
        cells[2] = "promo";
      }
      counts.promo--;
    } else {
      // Normal day: two videos + one promo, never three videos.
      let vids: [PillarKey, PillarKey];
      if (comedyDays.has(d) && counts.elis > 0) {
        counts.elis--;
        vids = ["elis", takeVG()];
      } else {
        vids = takePair();
      }
      counts.promo--;
      if (promoFirst) {
        cells[0] = "promo";
        cells[1] = vids[0];
        cells[2] = vids[1];
      } else {
        cells[0] = vids[0];
        cells[1] = vids[1];
        cells[2] = "promo";
      }
    }
    result.push(cells as string[]);
  }
  return result;
}

const DOW = ["Rab", "Kam", "Jum", "Sab", "Min", "Sen", "Sel"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

export const days: string[] = [];
for (let i = 0; i < 28; i++) {
  const d = new Date(2026, 10, 4 + i);
  days.push(`${DOW[i % 7]} ${d.getDate()} ${MONTHS[d.getMonth()]}`);
}

// Beauty: promo pagi; Hair: promo malam. Comedy days alternate, so the two tables never match.
export const schedBeauty = buildSchedule(true, 0);
export const schedHair = buildSchedule(false, 1);

export const weekRanges = [
  "4 – 10 November 2026",
  "11 – 17 November 2026",
  "18 – 24 November 2026",
  "25 November – 1 Desember 2026",
];

export const shortName = (k: string, brand: Brand = "beauty") =>
  k in PILLAR_LABEL ? pillarName(k as PillarKey, brand) : k;

import { describe, expect, it } from "vitest";
import { captionRules, captions, hashtags } from "./captions";

const ACCOUNTS = ["beauty", "hair", "japan"] as const;

// Caption harus terasa kayak ngomong langsung, bukan bahasa iklan.
const KAKU = [
  /sila(h|kan)/i,
  /demikian/i,
  /segera pesan/i,
  /jangan sampai ketinggalan/i,
  /special price/i,
  /best quality/i,
  /terima kasih atas perhatiannya/i,
  /dengan ini/i,
];

describe("Lokal (Garut) di hashtag", () => {
  it("setiap akun selalu punya minimal 2 hashtag lokasi Garut", () => {
    for (const account of ACCOUNTS) {
      const garutTags = hashtags[account].local.filter((t) => t.toLowerCase().includes("garut"));
      expect(garutTags.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("tidak ada hashtag yang dobel dalam satu akun", () => {
    for (const account of ACCOUNTS) {
      const all = [...hashtags[account].local, ...hashtags[account].core, ...hashtags[account].rotate];
      expect(new Set(all).size).toBe(all.length);
    }
  });

  it("aturan caption menyuruh buka dengan hashtag lokal Garut", () => {
    const rule = captionRules.find((r) => /lokal/i.test(r));
    expect(rule).toBeDefined();
    expect(rule).toMatch(/garut/i);
  });
});

describe("Caption pakai bahasa ngobrol, bukan bahasa iklan", () => {
  const BRANDS = ["beauty", "hair"] as const;

  it("tidak ada caption yang pakai kalimat kaku", () => {
    for (const brand of BRANDS) {
      for (const c of captions[brand]) {
        const text = `${c.hook} ${c.body} ${c.cta}`;
        for (const re of KAKU) expect(text).not.toMatch(re);
      }
    }
  });

  it("setiap caption ngajak ngobrol, bukan cuma nyuruh beli", () => {
    for (const brand of BRANDS) {
      for (const c of captions[brand]) {
        expect(c.cta).toMatch(/koment|tag|simpan|booking|dm|whatsapp|chat|link/i);
      }
    }
  });

  it("body caption cukup pendek buat 2 baris di slide", () => {
    for (const brand of BRANDS) {
      for (const c of captions[brand]) expect(c.body.length).toBeLessThanOrEqual(120);
    }
  });

  it("aturan caption menyuruh nulis kayak ngomong langsung", () => {
    expect(captionRules.some((r) => /ngomong/i.test(r))).toBe(true);
  });
});

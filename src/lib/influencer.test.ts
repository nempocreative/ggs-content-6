import { describe, expect, test } from "vitest";
import { influencerVisits, visitsFor, promoExists, TIER_INFO } from "@/lib/influencer";

const DAY = (v: { date: string }) => Number(v.date.match(/^(\d{1,2})/)![1]);

describe("jadwal influencer", () => {
  test("tiap brand punya 6 kunjungan, Nov–Des 2026", () => {
    expect(visitsFor("beauty")).toHaveLength(6);
    expect(visitsFor("hair")).toHaveLength(6);
    for (const v of influencerVisits) {
      expect(["Nov", "Des"]).toContain(v.month);
      expect(DAY(v)).toBeGreaterThanOrEqual(1);
      expect(DAY(v)).toBeLessThanOrEqual(31);
    }
  });

  test("tiap kunjungan nempel ke promo yang ada di kalender brand-nya", () => {
    for (const v of influencerVisits) expect(promoExists(v)).toBe(true);
  });

  test("tidak ada kunjungan pas owner di Jepang (16–24 Nov) atau hari podcast (2, 9, 23 Nov)", () => {
    for (const v of influencerVisits) {
      if (v.month !== "Nov") continue;
      expect(DAY(v)).not.toBeGreaterThanOrEqual(16);
      expect([2, 9, 23]).not.toContain(DAY(v));
    }
  });

  test("tidak ada tanggal dobel di brand yang sama", () => {
    for (const brand of ["beauty", "hair"] as const) {
      const keys = visitsFor(brand).map((v) => `${v.month}-${v.date}`);
      expect(new Set(keys).size).toBe(keys.length);
    }
  });

  test("tier dan kompensasi selalu terisi dan dikenal", () => {
    for (const v of influencerVisits) {
      expect(TIER_INFO[v.tier]).toBeTruthy();
      expect(v.comp.length).toBeGreaterThan(0);
      expect(v.count).toBeGreaterThanOrEqual(1);
    }
  });
});

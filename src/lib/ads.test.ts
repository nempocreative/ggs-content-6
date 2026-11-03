import { describe, it, expect } from "vitest";
import { adSchedule, adRules, monthTotal, decTotal, PER_DAY, TAX_NOTE } from "./ads";

describe("jadwal iklan", () => {
  it("each brand runs Instagram and TikTok in all 4 Nov weeks and 4 Dec windows", () => {
    for (const b of ["beauty", "hair"] as const) {
      const rows = adSchedule(b);
      for (let w = 0; w < 8; w++) {
        expect(rows.filter((r) => r.week === w).map((r) => r.platform).sort()).toEqual(["Instagram", "TikTok"]);
      }
    }
  });
  it("never runs below the Rp50.000 a day floor on either platform", () => {
    expect(PER_DAY.Instagram).toBe(50000);
    expect(PER_DAY.TikTok).toBe(50000);
    for (const b of ["beauty", "hair"] as const) {
      for (const r of adSchedule(b)) expect(r.perDay).toBeGreaterThanOrEqual(50000);
    }
  });
  it("November is 14 run days and December 13 run days per platform at Rp50.000", () => {
    for (const b of ["beauty", "hair"] as const) {
      expect(monthTotal(b)).toBe(2 * 14 * 50000);
      expect(decTotal(b)).toBe(2 * 13 * 50000);
    }
  });
  it("states that the budget is before tax", () => {
    expect(TAX_NOTE).toBe("belum termasuk pajak");
    expect(adRules.some((r) => /pajak/i.test(r))).toBe(true);
  });
});

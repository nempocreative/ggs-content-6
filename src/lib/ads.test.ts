import { describe, it, expect } from "vitest";
import { adSchedule, adRules, monthTotal, PER_DAY, TAX_NOTE } from "./ads";

describe("jadwal iklan", () => {
  it("each brand runs Instagram and TikTok every one of the 4 weeks", () => {
    for (const b of ["beauty", "hair"] as const) {
      const rows = adSchedule(b);
      for (let w = 0; w < 4; w++) {
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
  it("monthly total is 13 run days per platform at Rp50.000", () => {
    expect(monthTotal("beauty")).toBe(13 * 50000 + 13 * 50000);
    expect(monthTotal("hair")).toBe(13 * 50000 + 13 * 50000);
  });
  it("states that the budget is before tax", () => {
    expect(TAX_NOTE).toBe("belum termasuk pajak");
    expect(adRules.some((r) => /pajak/i.test(r))).toBe(true);
  });
});

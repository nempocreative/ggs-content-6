import { describe, it, expect } from "vitest";
import { adSchedule, monthTotal } from "./ads";

describe("jadwal iklan", () => {
  it("each brand runs Instagram and TikTok every one of the 4 weeks", () => {
    for (const b of ["beauty", "hair"] as const) {
      const rows = adSchedule(b);
      for (let w = 0; w < 4; w++) {
        expect(rows.filter((r) => r.week === w).map((r) => r.platform).sort()).toEqual(["Instagram", "TikTok"]);
      }
    }
  });
  it("monthly total equals the sum of each row", () => {
    expect(monthTotal("beauty")).toBe(4 * 30000 * 3 + 4 * 25000 * 3 + 30000 + 25000);
  });
});

import { describe, expect, test } from "vitest";
import { liveSessions, livesFor, livePromoExists } from "@/lib/live";

describe("jadwal live", () => {
  test("8 live per brand", () => {
    expect(livesFor("beauty")).toHaveLength(8);
    expect(livesFor("hair")).toHaveLength(8);
  });
  test("tiap live nempel ke promo yang ada", () => {
    for (const l of liveSessions) expect(livePromoExists(l), l.promo).toBe(true);
  });
  test("tidak live saat owner di Jepang atau hari podcast", () => {
    for (const l of liveSessions) {
      if (l.month !== "Nov") continue;
      expect(l.day >= 16 && l.day <= 24).toBe(false);
      expect([2, 9, 23]).not.toContain(l.day);
    }
  });
});

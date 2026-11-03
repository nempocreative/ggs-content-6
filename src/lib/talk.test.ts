import { describe, expect, it } from "vitest";
import { talkEpisodes, talkQuestions, talkRules, talkFlow, talkClips } from "./talk";
import { PODCAST_DAYS } from "./schedule";

const flat = (brand: "beauty" | "hair") => talkQuestions[brand].flatMap((g) => g.items);

describe("Acuan GGS Talk", () => {
  it("mencocokkan 3 episode dengan hari podcast yang tayang", () => {
    for (const brand of ["beauty", "hair"] as const) {
      const eps = talkEpisodes[brand];
      expect(eps.map((e) => e.day)).toEqual(PODCAST_DAYS);
      expect(new Set(eps.map((e) => e.topic)).size).toBe(3);
      for (const e of eps) {
        expect(e.topic.length).toBeGreaterThan(5);
        expect(e.guest.length).toBeGreaterThan(2);
        expect(e.air).toMatch(/Jum \d+ Nov/);
      }
    }
  });

  it("bank pertanyaan cukup luas: buka, ngalir, lalu nutup", () => {
    for (const brand of ["beauty", "hair"] as const) {
      const groups = talkQuestions[brand];
      expect(groups.length).toBe(3);
      expect(groups[0]!.group).toMatch(/buka/i);
      expect(groups[groups.length - 1]!.group).toMatch(/nutup/i);
      const items = flat(brand);
      expect(items.length).toBeGreaterThanOrEqual(10);
      expect(new Set(items).size).toBe(items.length);
      // Pertanyaan pemantik, bukan statement: harus diakhiri tanda tanya.
      expect(items.every((q) => q.trim().endsWith("?"))).toBe(true);
    }
  });

  it("aturan menjaga obrolan tetap natural dan aman", () => {
    expect(talkRules.some((r) => /naskah/i.test(r))).toBe(true);
    expect(talkRules.some((r) => /ngelantur|editing/i.test(r))).toBe(true);
    expect(talkRules.some((r) => /garut/i.test(r))).toBe(true);
    expect(talkRules.some((r) => /klaim medis/i.test(r))).toBe(true);
    expect(talkFlow[0]!.t).toBe("0–2 mnt");
    expect(talkFlow[talkFlow.length - 1]!.t).toBe("23–25 mnt");
    expect(talkClips.length).toBe(3);
  });
});

import { episodeFlow } from "./talk";
test("every aired episode has its own 5-step flow from buka to nutup", () => {
  for (const b of ["beauty", "hair"] as const)
    for (const e of talkEpisodes[b]) {
      const f = episodeFlow(e);
      expect(f.map((s) => s.name)).toEqual(["Buka", "Awal cerita", "Di balik layar", "Momen & tips", "Nutup"]);
      expect(f.every((s) => s.q.endsWith("?"))).toBe(true);
    }
});

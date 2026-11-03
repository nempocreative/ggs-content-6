import { describe, expect, it } from "vitest";
import { hookBank, hookFormulas, hookRules, japanHooks } from "./hooks";

describe("acuan hook", () => {
  it("tiap akun punya 5 pilar x 3 hook, semuanya beda", () => {
    for (const brand of ["beauty", "hair"] as const) {
      const bank = hookBank[brand];
      expect(bank.length).toBe(5);
      const all = bank.flatMap((b) => b.lines);
      for (const b of bank) expect(b.lines.length).toBe(3);
      expect(new Set(all).size).toBe(15);
    }
  });

  it("semua hook cukup pendek untuk slide (maks 68 karakter)", () => {
    const all = [
      ...Object.values(hookBank).flat().flatMap((b) => b.lines),
      ...japanHooks,
    ];
    for (const h of all) expect(h.length).toBeLessThanOrEqual(68);
  });

  it("tidak ada klaim medis atau harga karangan di hook", () => {
    const all = Object.values(hookBank)
      .flat()
      .flatMap((b) => b.lines)
      .join(" | ");
    expect(all).not.toMatch(/penyakit|mengobati|detox|melancarkan darah/i);
    expect(all).not.toMatch(/Rp\s?\d/);
  });

  it("hook Jepang menyebut lotion tone up", () => {
    expect(japanHooks.length).toBeGreaterThanOrEqual(3);
    expect(japanHooks.some((h) => /tone up/i.test(h))).toBe(true);
  });

  it("aturan hook menyebut 3 detik dan lokasi Garut", () => {
    const text = hookRules.join(" ");
    expect(text).toMatch(/3 detik/i);
    expect(text).toMatch(/garut/i);
    expect(new Set(hookFormulas).size).toBe(hookFormulas.length);
    expect(hookFormulas.length).toBeGreaterThanOrEqual(8);
  });
});

import { describe, expect, it } from "vitest";
import { captionRules, hashtags } from "./captions";

const ACCOUNTS = ["beauty", "hair", "japan"] as const;

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

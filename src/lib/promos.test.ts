import { describe, expect, it } from "vitest";
import { KIND_LABEL, promoKinds, promos, promosByKind, promoRules } from "@/lib/promos";

describe("program promo", () => {
  it("punya 10 promo dalam 4 kategori", () => {
    expect(promos.length).toBe(10);
    expect(promoKinds.length).toBe(4);
    for (const k of promoKinds) expect(KIND_LABEL[k]).toBeTruthy();
  });

  it("tiap promo punya nama, jadwal, dan detail", () => {
    for (const p of promos) {
      expect(p.name.trim()).not.toBe("");
      expect(p.when.trim()).not.toBe("");
      expect(p.detail.trim()).not.toBe("");
    }
  });

  it("promo konten mengikuti jadwal episode GGS Talk", () => {
    const konten = promosByKind("konten");
    expect(konten.length).toBeGreaterThanOrEqual(2);
    const kuis = konten.find((p) => p.name.toLowerCase().includes("kuis"));
    expect(kuis?.when.toLowerCase()).toContain("episode");
  });

  it("promo mingguan mencakup jam Happy Hour weekday", () => {
    const mingguan = promosByKind("mingguan");
    const happy = mingguan.find((p) => p.name.includes("Happy Hour"));
    expect(happy?.when).toContain("Senin–Kamis");
    expect(happy?.when).toContain("10.00–14.00");
  });

  it("aturan promo menyebut diskon belum difinalkan", () => {
    expect(promoRules.some((r) => r.includes("belum") || r.includes("usulan"))).toBe(true);
  });
});

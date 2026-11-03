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

import { hairPromoCalendar, promoCalendar } from "@/lib/promos";
describe("kalender promo sampai akhir tahun", () => {
  it("mencakup gajian, Hari Ibu, Natal, dan tahun baru", () => {
    const names = promoCalendar.map((p) => p.occasion + p.name).join(" ");
    for (const k of ["gajian", "Hari Ibu", "Natal", "tahun baru"]) expect(names.toLowerCase()).toContain(k.toLowerCase());
  });
  it("hanya November dan Desember", () => {
    expect(promoCalendar.every((p) => p.month === "Nov" || p.month === "Des")).toBe(true);
  });
});

describe("kalender promo cowok", () => {
  it("tanggalnya sama persis dengan kalender cewek", () => {
    expect(hairPromoCalendar.map((p) => p.date)).toEqual(promoCalendar.map((p) => p.date));
  });
  it("isinya layanan barber, bukan layanan beauty", () => {
    const text = hairPromoCalendar.map((p) => p.name + p.detail).join(" ").toLowerCase();
    for (const k of ["potong", "creambath", "pijat kepala", "paket"]) expect(text).toContain(k);
    for (const k of ["nail art", "lash", "makeup", "hair spa"]) expect(text).not.toContain(k);
  });
  it("tiap baris punya tanggal, nama, dan detail", () => {
    for (const p of hairPromoCalendar) {
      expect(p.date.trim()).not.toBe("");
      expect(p.name.trim()).not.toBe("");
      expect(p.detail.trim()).not.toBe("");
    }
  });
});

import { promoAdWindow } from "@/lib/ads";
describe("iklan promo", () => {
  it("tiap promo bertanggal (cewek & cowok) ketutup minimal satu jendela iklan mingguan", () => {
    for (const p of [...promoCalendar, ...hairPromoCalendar]) expect(promoAdWindow(p).label).not.toBe("—");
  });
  it("jendela iklan cocok dengan tanggal promo", () => {
    expect(promoAdWindow(promoCalendar.find((x) => x.date === "11 Nov")!).label).toBe("8–11 Nov");
    expect(promoAdWindow(promoCalendar.find((x) => x.date === "25 Nov – 2 Des")!).label).toBe("25–28 Nov • 1–3 Des");
    expect(promoAdWindow(promoCalendar.find((x) => x.date === "12 Des")!).label).toBe("10–12 Des");
  });
});

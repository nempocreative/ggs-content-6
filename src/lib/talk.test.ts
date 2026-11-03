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

import { episodeDetail } from "./talk";
test("every aired episode has a full rundown with its own opening, follow-ups and closing", () => {
  for (const b of ["beauty", "hair"] as const)
    for (const e of talkEpisodes[b]) {
      const d = episodeDetail(e);
      expect(d.open).not.toContain(e.topic.toLowerCase());
      expect(d.steps).toHaveLength(5);
      expect(d.steps.every((s) => s.follow.length === 2 && s.shot.length > 0)).toBe(true);
      expect(d.close).toMatch(/booking|konsultasi/i);
    }
});

import { episodeAbout } from "./talk";
test("every aired episode has its own explanation with 3 key points", () => {
  for (const b of ["beauty", "hair"] as const)
    for (const e of talkEpisodes[b]) {
      const a = episodeAbout(e);
      expect(a.inti).not.toContain(e.topic.toLowerCase());
      expect(a.poin).toHaveLength(3);
    }
});

import { talkIntro, episodeHook } from "./talk";
test("podcast punya ciri khas opening 8 detik dengan kalimat tetap", () => {
  expect(talkIntro.catch).toBe("Sore Garut! Ngopi dulu, baru ngobrol.");
  expect(talkIntro.ritual).toHaveLength(5);
  expect(talkIntro.ritual[0]!.t).toBe("0–1 dtk");
  expect(talkIntro.ritual[4]!.t).toBe("7–8 dtk");
  expect(talkIntro.sound).toMatch(/tanpa jingle/i);
  expect(talkIntro.rules.some((r) => /cangkir/i.test(r))).toBe(true);
  expect(talkIntro.rules.some((r) => /8 detik/i.test(r))).toBe(true);
  expect(talkIntro.sign).toMatch(/ngopi sore lagi/i);
});

test("tiap episode punya 3 hook klip sendiri, cukup pendek buat 3 detik", () => {
  const seen = new Set<string>();
  for (const b of ["beauty", "hair"] as const)
    for (const e of talkEpisodes[b]) {
      const h = episodeHook(e);
      for (const line of [h.klip1, h.klip2, h.teaser]) {
        expect(line.length).toBeLessThanOrEqual(68);
        expect(seen.has(line)).toBe(false);
        seen.add(line);
      }
      expect(h.shot.length).toBeGreaterThan(0);
    }
  const text = [...seen].join(" | ");
  expect(text).not.toMatch(/Rp\s?\d/);
  expect(text).not.toMatch(/menyembuhkan|penyakit|detox|dijamin|pasti awet/i);
});

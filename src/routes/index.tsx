import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/deck/Deck";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jadwal Konten GGS Beauty & GGS Hair Studio — November 2026" },
      {
        name: "description",
        content:
          "Rencana konten 4 minggu (4 Nov – 1 Des 2026) untuk GGS Beauty dan GGS Hair Studio: 3 konten per hari, maksimal 2 video, 5 pilar konten.",
      },
      { property: "og:title", content: "Jadwal Konten GGS Beauty & GGS Hair Studio" },
      {
        property: "og:description",
        content: "Rencana konten 4 minggu: 168 konten, 2 akun, 1 strategi. 4 Nov – 1 Des 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Deck,
});

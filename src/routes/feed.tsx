import { createFileRoute } from "@tanstack/react-router";
import { FeedGallery } from "@/components/feed/FeedGallery";

export const Route = createFileRoute("/feed")({
  head: () => ({
    meta: [
      { title: "Desain Feed Instagram GGS — 1080×1440" },
      {
        name: "description",
        content:
          "Galeri template feed Instagram 1080×1440 untuk GGS Beauty dan GGS Hair Studio: desain promo dan konten harian, siap unduh sebagai PNG.",
      },
      { property: "og:title", content: "Desain Feed Instagram GGS — 1080×1440" },
      {
        property: "og:description",
        content: "Template feed IG promo dan konten harian untuk GGS Beauty & GGS Hair Studio, siap unduh PNG.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeedGallery,
});

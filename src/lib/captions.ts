import type { Brand } from "./content-plan";

export type CaptionGuide = { pillar: string; hook: string; body: string; cta: string };

// Caption per pilar; [layanan] / [topik] diisi dari jadwal. Ditulis kayak ngomong
// langsung sama pelanggan — bukan bahasa iklan. Tanpa klaim medis atau harga rekaan.
export const captions: Record<Brand, CaptionGuide[]> = {
  beauty: [
    { pillar: "GGS Talk (Ngopi Sore)", hook: "Jumat sore, kopi dulu, ngobrol [topik]", body: "Kita ngobrol santai soal [layanan] bareng tim. Nggak pakai naskah, jadi yang keluar jujur.", cta: "Kamu tim yang mana? Tulis di komentar, siapa tahu kepakai buat episode depan" },
    { pillar: "Si Elis", hook: "Elis lagi-lagi…", body: "Niatnya cuma [layanan], ujungnya [punchline]. Jujur, kamu juga gitu kan?", cta: "Tag bestie kamu yang kelakuannya persis Elis" },
    { pillar: "Cinematic Treatment", hook: "Sstt, lihat detailnya", body: "Ini [layanan] yang baru kelar di GGS Beauty — dikerjain pelan, rapi, nggak buru-buru.", cta: "Simpan dulu, buat nanti pas bingung mau treatment apa" },
    { pillar: "Ngobras", hook: "Kata mereka setelah [layanan]…", body: "Ngobrol pas treatment ternyata paling seru. Makasih ya sudah mau cerita ke kami.", cta: "Mau kursi berikutnya jadi kamu? Booking lewat link di bio" },
    { pillar: "Promo", hook: "Me-time-nya jangan ditunda lagi", body: "[Layanan] — isinya [rincian]. Harga & slot tanya admin aja biar pas sama kamu.", cta: "DM / WhatsApp, admin yang atur jadwalnya" },
  ],
  hair: [
    { pillar: "GGS Talk (Ngopi Sore)", hook: "Ngopi sore, ngobrolin rambut beneran", body: "Barber kami bahas [topik] — to the point, nggak muter-muter.", cta: "Mau pertanyaan kamu dijawab di episode depan? Tulis di komentar" },
    { pillar: "Comedy", hook: "Cowok di kursi barber be like…", body: "Bilang \"tipis aja\", terus [punchline]. Jangan marah ya, kita tahu kok.", cta: "Tag temen kamu yang kalau dipotong selalu begini" },
    { pillar: "Cinematic Treatment", hook: "Rapi itu ada bunyinya", body: "Proses [layanan] di GGS Hair Studio — dari sisir pertama sampai benar-benar kelar.", cta: "Simpan, tinggal tunjukin ke barber pas datang" },
    { pillar: "Ngobras", hook: "Cerita dari kursi barber", body: "[nama/profesi pelanggan] cerita sambil [layanan]. Ngobrol gini yang bikin betah.", cta: "Giliran kamu cerita? Booking via link di bio" },
    { pillar: "Promo", hook: "Rapi sebelum akhir pekan", body: "[Layanan] — isinya [rincian]. Harga & slot sesuai info admin.", cta: "Chat DM / WhatsApp, admin yang cariin jadwalnya" },
  ],
};

// Hashtag. Salon berada di Garut, jadi tag lokal selalu dipakai di setiap posting
// supaya muncul di pencarian pelanggan sekitar. [lokasi] diisi kecamatan/kota.
export const hashtags: Record<Brand | "japan", { local: string[]; core: string[]; rotate: string[] }> = {
  beauty: {
    local: ["#Garut", "#SalonGarut", "#SalonKecantikanGarut", "#ExploreGarut", "#GarutHits"],
    core: ["#GGSBeauty", "#GGSSalon", "#SalonKecantikan", "#MeTime"],
    rotate: ["#NailArt", "#Creambath", "#HairColor", "#KeratinTreatment", "#BodyMassage", "#ManiPedi", "#SalonTreatment", "#FYP"],
  },
  hair: {
    local: ["#Garut", "#BarbershopGarut", "#BarberGarut", "#PotongRambutGarut", "#ExploreGarut"],
    core: ["#GGSHairStudio", "#GroomingIsBetter", "#Barbershop", "#MenGrooming"],
    rotate: ["#PotongRambutPria", "#Perming", "#HairColorMen", "#Highlight", "#PaketGanteng", "#Creambath", "#BarberLife", "#FYP"],
  },
  japan: {
    local: ["#Garut", "#ExploreGarut"],
    core: ["#GGSGoesToJapan", "#JapanDiaries", "#BodyLotionToneUp"],
    rotate: ["#Tokyo", "#OwnerStory", "#TravelVlog", "#SelfCare", "#FYP"],
  },
};

export const captionRules = [
  "Tulis kayak ngomong langsung — kalau nggak enak diucapin, jangan dipakai.",
  "Hook di baris pertama — sebelum \"…more\".",
  "2 hashtag lokal (Garut) + 3 inti + 3 rotasi = 8.",
  "Sebutkan lokasi: GGS Beauty / Hair Studio, Garut.",
  "Harga & manfaat produk hanya dari label kemasan.",
  "Minggu Jepang: tambahkan hashtag Japan.",
];

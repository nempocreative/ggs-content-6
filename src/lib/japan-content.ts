import type { ContentBrief } from "./content-plan";

// One shared owner-trip production list; destinations adapt to the actual itinerary.
export const japanBriefs: { jpn: ContentBrief[]; lotion: ContentBrief[] } = {
  jpn: [
    ["Asakusa: awal cerita GGS", "Owner di Senso-ji → cerita satu tantangan awal membangun GGS → ajak penonton cerita mimpi mereka."],
    ["Shibuya: berani mulai dari nol", "Suasana crossing → owner cerita keputusan paling berani saat memulai usaha → pertanyaan untuk penonton."],
    ["Harajuku: inspirasi tanpa meniru", "Detail street style berizin → tiga inspirasi visual → cara owner menjaga karakter GGS sendiri."],
    ["Fuji: jeda di tengah ambisi", "Perjalanan Kawaguchiko → refleksi soal istirahat sebagai pemilik usaha → pesan untuk tim."],
    ["Tsukiji: pelayanan dari hal kecil", "Amati pengalaman sebagai pelanggan → satu detail pelayanan yang berkesan → ide untuk tim salon."],
    ["Yanaka: bisnis yang punya karakter", "Jalan di Yanaka Ginza → amati identitas toko → owner cerita nilai yang ingin dijaga di GGS."],
    ["Akihabara: belajar beradaptasi", "Suasana kawasan → cerita owner tentang perubahan kebiasaan pelanggan → ajak diskusi."],
    ["Ginza: premium bukan cuma tampilan", "Detail etalase dan suasana → bahas pengalaman pelanggan, bukan harga → satu komitmen owner."],
    ["Tokyo Tower: 3 ide untuk GGS", "Montase penutup perjalanan → tiga ide yang akan dibahas dengan tim → ajakan pilih ide favorit."],
  ].map(([topic = "", flow = ""]) => ({ service: "Japan Diaries", topic, flow, format: "Vlog • 45–60 detik" })),
  lotion: [
    ["Perkenalan: Lotion Tone Up", "Foto flat lay pouch terbuka dengan lotion tone up di tengah → tandai produk andalan perjalanan → CTA simpan inspirasi packing."],
    ["Baca label Lotion Tone Up", "Carousel close-up kemasan tone up → nama dan informasi sesuai label → ajak DM untuk detail produk terverifikasi."],
    ["Satu Tone Up, tiga angle foto", "Foto lotion tone up dari depan, samping, dan detail → kemasan jelas tanpa filter yang mengubah warna."],
    ["Checklist Tone Up sebelum jalan", "Carousel langkah memasukkan lotion tone up ke pouch → pastikan tutup terkunci → simpan checklist."],
    ["Detail tekstur Tone Up tanpa filter", "Foto tekstur asli lotion tone up dengan pencahayaan netral → deskripsikan hanya yang terlihat → tanpa klaim manfaat."],
    ["Seberapa besar Tone Up di dalam tas?", "Foto lotion tone up di samping pouch dan tangan → tampilkan ukuran dari label bila tersedia → CTA tanya ukuran."],
    ["Tone Up di meja penginapan", "Foto lotion tone up di meja rapi → cerita rutinitas owner yang benar-benar dilakukan → tanpa klaim hasil."],
    ["Cara pakai Tone Up: ikuti kemasan", "Carousel petunjuk penggunaan lotion tone up sesuai label → jangan menambahkan dosis atau aturan rekaan."],
    ["Kemasan Tone Up, tulisan jelas", "Foto macro nama dan label asli lotion tone up → ajak cek informasi sebelum membeli → CTA pertanyaan produk."],
    ["Jangan lupa cek tanggal Tone Up", "Carousel lokasi tanggal pada kemasan tone up → cara membaca sesuai label → ajakan cek produk sendiri."],
    ["Pink atau gold untuk foto Tone Up?", "Dua komposisi foto lotion tone up dengan aksen brand → polling pilihan visual, bukan varian produk."],
    ["Di balik layar foto Lotion Tone Up", "Carousel setup meja, cahaya jendela, dan hasil foto tone up → proses sederhana tanpa rekayasa tekstur."],
    ["Self-care kit: Tone Up edition", "Foto lotion tone up bersama barang pribadi owner → cerita jeda di penginapan → produk bukan klaim pemulihan."],
    ["Pertanyaan aroma Lotion Tone Up", "Carousel pertanyaan untuk penjual tone up → aroma hanya disebut jika terverifikasi → ajak DM kebutuhan."],
    ["Catatan owner setelah pakai Tone Up", "Foto lotion tone up dan kutipan pengalaman pribadi yang nyata → tidak menjanjikan hasil sama untuk semua orang."],
    ["Panduan simpan Tone Up dari label", "Carousel ketentuan penyimpanan sesuai kemasan tone up → foto penempatan yang sesuai → tanpa aturan suhu rekaan."],
    ["Yang selalu kembali ke pouch: Tone Up", "Foto lotion tone up saat packing pulang → alasan pribadi owner membawanya → tidak mengklaim produk asal Jepang."],
    ["Tanya Lotion Tone Up langsung ke GGS", "Carousel ringkasan kemasan tone up → pertanyaan nama, ukuran, dan harga → CTA DM; stok dan harga dikonfirmasi dulu."],
  ].map(([topic = "", flow = ""], i) => ({ service: "Lotion Badan Tone Up", topic, flow, format: i % 2 === 0 ? "Foto feed • 1 gambar" : "Carousel • 3 halaman" })),
};
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { Check, Clock, ShieldCheck } from "lucide-react";
import { trackWhatsAppClick } from "../../lib/pixel";

const Services = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const services = [
    {
      id: "starter",
      title: "Hadir Online",
      subtitle: "Solusi Cepat UMKM",
      price: "499rb",
      duration: "3–5 Hari",
      description:
        "Landing page praktis untuk validasi ide bisnis and mulai bangun branding.",
      features: [
        "Landing Page Fokus Konversi",
        "Domain .my.id, .web.id & Hosting",
        "Tombol WhatsApp Direct",
        "Optimasi SEO Dasar",
        "Performa Website Cepat",
        "Aksesibel di Semua Perangkat",
        "Revisi 2x",
      ],
      cta: "Mulai Hadir Online",
      isPopular: false,
    },
    {
      id: "professional",
      title: "Bisnis Profesional",
      subtitle: "Paling Banyak Dipilih",
      price: "1.5jt",
      duration: "7–12 Hari",
      description:
        "Website kredibel dengan fitur lengkap untuk jasa, klinik, atau profil perusahaan.",
      features: [
        "Multi-Halaman (Home, About, Jasa, dll)",
        "Domain .com & Hosting High-Speed",
        "Optimasi SEO",
        "High Performance & Core Web Vitals",
        "Standar Aksesibilitas (Ramah Pengguna)",
        "Dashboard Admin (Edit Konten Sendiri)",
        "Formulir Leads Database",
        "Revisi 6x",
      ],
      cta: "Tingkatkan Kredibilitas",
      isPopular: true,
    },
    {
      id: "commerce",
      title: "Toko Online",
      subtitle: "Automasi Penjualan 24/7",
      price: "2jt",
      duration: "14–21 Hari",
      description:
        "Katalog produk otomatis yang membuat proses belanja jadi praktis bagi customer.",
      features: [
        "Sistem Katalog & Manajemen Stok",
        "Checkout WhatsApp",
        "SEO Produk & Optimasi Kecepatan",
        "Mobile-First & Accessible Design",
        "Panduan Kelola Mandiri",
        "Revisi 4x",
      ],
      cta: "Mulai Jualan Otomatis",
      isPopular: false,
    },
    {
      id: "custom",
      title: "Sistem Custom",
      subtitle: "Solusi Spesifik Bisnis",
      price: "Hubungi Kami",
      duration: "Custom",
      description:
        "Aplikasi web atau sistem digital khusus yang dibangun sesuai alur kerja unik Anda.",
      features: [
        "Analisis Sistem & Alur Bisnis",
        "Arsitektur Data & API Terintegrasi",
        "Full SEO & Performance Audit",
        "Enterprise Accessibility Standards",
        "Dashboard Internal/Admin Khusus",
        "Maintenance & Support Prioritas",
      ],
      cta: "Konsultasi Strategi Gratis",
      isPopular: false,
    },
  ];
  const addOns = [
    {
      title: "Pantau Pengunjung",
      desc: "Lacak jumlah & asal pengunjung secara real-time via Meta Pixel & Google Analytics.",
    },
    {
      title: "Tambah Halaman Baru",
      desc: "Perluas website dengan halaman baru kapan saja sesuai perkembangan bisnis.",
    },
    {
      title: "Pembayaran Otomatis",
      desc: "Terima pembayaran via Transfer, E-Wallet, atau Minimarket secara otomatis.",
    },
    {
      title: "Jasa Kelola Website",
      desc: "Update konten & keamanan kami urus, Anda fokus jalankan bisnis.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-blue-700 border-none px-4 py-1.5 rounded-full text-sm font-semibold">
            Pricing Plans
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">
            Investasi Digital{" "}
            <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Terbaik Anda.
            </span>
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Harga transparan, hasil maksimal. Pilih paket yang sesuai dengan
            fase pertumbuhan bisnis Anda saat ini.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex"
            >
              <Card
                className={`w-full flex flex-col border-2 transition-all duration-500 hover:translate-y-[-8px] ${
                  service.isPopular
                    ? "border-primary shadow-2xl shadow-primary/20 bg-white ring-4 ring-primary/5"
                    : "border-slate-200/60 shadow-sm hover:shadow-xl bg-white/80"
                }`}
              >
                {service.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      Paling populer
                    </span>
                  </div>
                )}

                <CardHeader className="space-y-2 pt-8">
                  <CardTitle className="text-2xl font-bold text-center">
                    {service.title}
                  </CardTitle>
                  <p className="text-xs font-medium text-slate-400 text-center uppercase tracking-tighter">
                    {service.subtitle}
                  </p>
                  <div className="pt-4 flex flex-col items-center">
                    <span className="text-4xl font-black text-slate-900 leading-none text-center">
                      {service.price}
                    </span>
                    <div className="flex items-center gap-1.5 mt-3 text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                      <Clock className="w-3 h-3" /> {service.duration}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow space-y-6">
                  <p className="text-[13px] text-slate-500 text-center leading-relaxed italic">
                    "{service.description}"
                  </p>
                  <hr className="border-slate-100" />
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 font-medium leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <div className="p-6">
                  <Button
                    className={`w-full py-6 rounded-xl font-bold transition-all duration-300 ${
                      service.isPopular
                        ? "bg-primary hover:bg-primary/90 text-white scale-100 hover:scale-[1.02]"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                    onClick={() => {
                      trackWhatsAppClick(`service_package_${service.id}`);
                      const msg = encodeURIComponent(
                        `Halo, saya ingin tanya paket ${service.title}`,
                      );
                      window.open(
                        `https://wa.me/${whatsappNumber}?text=${msg}`,
                      );
                    }}
                  >
                    {service.cta}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Improved Add-ons Section */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Butuh fitur lebih{" "}
                <span className="text-blue-400">spesifik?</span>
              </h3>
              <p className="text-slate-400 mb-8 text-lg">
                Kami menyediakan modul tambahan untuk memperkuat performa bisnis
                digital Anda tanpa harus upgrade paket utama.
              </p>
              <div className="flex items-center gap-4 text-white/80 border-t border-white/10 pt-8">
                <ShieldCheck className="w-10 h-10 text-blue-400" />
                <p className="text-sm italic">
                  "Keamanan data dan kecepatan akses adalah prioritas utama di
                  setiap add-on kami."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addOns.map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/5 hover:bg-white/10 p-5 rounded-2xl transition-all border border-white/5 hover:border-blue-500/30"
                  >
                    <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors flex items-center gap-2 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-transparent p-6 rounded-3xl border border-blue-500/20 cursor-pointer"
                onClick={() => {
                  trackWhatsAppClick('services_custom_idea');
                  window.open(
                    `https://wa.me/${whatsappNumber}?text=Halo, saya punya ide fitur custom untuk website saya...`,
                  )
                }}
              >
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        Punya Ide Fitur Lain?
                      </h4>
                      <p className="text-slate-400 text-sm max-w-md">
                        Sistem AI, Dashboard, atau integrasi khusus? Kami siap
                        mewujudkan ide gila Anda.
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-blue-500/50 text-blue-300 hover:bg-blue-500 hover:text-white rounded-full px-6"
                  >
                    Konsultasi Gratis →
                  </Button>
                </div>

                {/* Efek kilauan halus saat hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.div>

              <p className="text-[11px] italic text-slate-600 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-slate-800" />* Fitur tambahan
                bersifat fleksibel sesuai kebutuhan bisnis Anda.
              </p>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        </div>
      </div>
    </section>
  );
};

export default Services;

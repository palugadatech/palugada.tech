import React from "react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Lock } from "lucide-react";
import { trackWhatsAppClick } from "../../lib/pixel";

const Portfolio = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const waUrl = `https://wa.me/${whatsappNumber}?text=Halo%20palugada.tech%2C%20saya%20tertarik%20ingin%20tanya%20seputar%20pembuatan%20website.`;

  const projects = [
    {
      title: "SafeMind",
      category: "AI-powered Website",
      link: "https://safe-mind-palugadatech.vercel.app/",
      image: "/portofolio/safe-mind.png",
      tag: "AI Application",
      description:
        "Asisten kesehatan mental berbasis AI yang membantu pengguna mengelola kesejahteraan emosional melalui jurnal cerdas dan analisis personal.",
      isPrivate: false,
    },
    {
      title: "BBMD STORE",
      category: "Web Application (Sistem Custom)",
      link: "#",
      image: "/portofolio/bbmd-store.png",
      tag: "Enterprise",
      description:
        "Sistem POS Internal: Manajemen stok, produk, dan analisis penjualan dalam satu dashboard terintegrasi.",
      isPrivate: true,
    },
    {
      title: "Brama2689",
      category: "Personal Portfolio",
      link: "https://cv-brama.vercel.app/",
      image: "/portofolio/brama.png",
      tag: "Branding",
      description:
        "Digital resume & portfolio dengan pendekatan desain personal yang elegan untuk memperkuat branding profesional.",
      isPrivate: false,
    },
    {
      title: "Putra Interior",
      category: "Service & Portfolio",
      link: "https://putra-interior.vercel.app/",
      image: "/portofolio/saputra-interior.png",
      tag: "Freelance",
      description:
        "Platform showcase jasa interior profesional dengan galeri visual yang bersih dan navigasi intuitif.",
      isPrivate: false,
    },
    {
      title: "Dapur Rasa Nusantara",
      category: "Landing Page",
      link: "https://dapur-rasa-nusantara.vercel.app/",
      image: "/portofolio/dapur-rasa-nusantara.png",
      tag: "Kuliner",
      description:
        "Landing page kuliner dengan optimasi visual menu yang menggugah selera untuk meningkatkan konversi reservasi.",
      isPrivate: false,
    },
    {
      title: "Vestra",
      category: "Fashion Brand",
      link: "https://vestra-ochre.vercel.app/",
      image: "/portofolio/vestra.png",
      tag: "E-Commerce",
      description:
        "Website e-commerce fashion modern yang menonjolkan karakter brand melalui layout katalog minimalis.",
      isPrivate: false,
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hasil Kerja Nyata Kami
            </h2>
            <p className="text-slate-600 max-w-xl">
              Lihat bagaimana kami membantu bisnis-bisnis lokal bertransformasi
              dan menjangkau lebih banyak pelanggan secara digital.
            </p>
          </div>
          <Badge
            variant="outline"
            className="px-4 py-1.5 border-primary text-primary text-sm font-semibold"
          >
            Koleksi Project Terpilih
          </Badge>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative ${project.featured ? "md:col-span-2" : "col-span-1"}`}
            >
              <a
                href={project.link}
                target={project.isPrivate ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`block ${project.isPrivate ? "cursor-default" : "cursor-pointer"}`}
                onClick={(e) => project.isPrivate && e.preventDefault()}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 ${project.featured ? "aspect-[21/9]" : "aspect-video"}`}
                >
                  <img
                    src={project.image}
                    alt={`Tampilan proyek ${project.title} untuk layanan ${project.category.toLowerCase()}`}
                    width={project.featured ? "1200" : "600"}
                    height={project.featured ? "514" : "338"}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white text-slate-900 p-4 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                      {project.isPrivate ? (
                        <Lock size={24} />
                      ) : (
                        <ExternalLink size={24} />
                      )}
                    </div>
                  </div>

                  {/* Tag Badge */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.1em] text-slate-800 shadow-sm uppercase">
                      {project.tag}
                    </span>
                    {project.isPrivate && (
                      <span className="bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.1em] text-white shadow-sm uppercase flex items-center gap-1">
                        <Lock size={10} /> Confidential
                      </span>
                    )}
                  </div>
                </div>

                {/* Text Content */}
                <div className="mt-8 flex justify-between items-start">
                  <div className="max-w-2xl">
                    <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed text-base md:text-lg">
                      {project.description}
                    </p>
                  </div>

                  {!project.isPrivate && (
                    <div className="hidden sm:block mt-2">
                      <div className="p-3 rounded-full border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                        <ArrowRight size={22} />
                      </div>
                    </div>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Footer Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 relative overflow-hidden p-12 md:p-20 rounded-[3rem] bg-slate-900 text-center"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">
              Punya Ide Proyek Luar Biasa?
            </h3>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Mari bertransformasi digital bersama. Kami siap membantu membangun
              website impian untuk bisnis Anda.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('portfolio_footer_cta')}
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-[0_0_30px_-10px_rgba(37,99,235,0.5)] active:scale-95 flex items-center gap-2 mx-auto w-max"
            >
              Konsultasi Gratis <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

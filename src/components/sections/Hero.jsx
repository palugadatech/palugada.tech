import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import webMockup from "../../../public/web_mockup.jpg"
import { trackWhatsAppClick } from '../../lib/pixel';

const Hero = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const waUrl = `https://wa.me/${whatsappNumber}?text=Halo%20palugada.tech%2C%20saya%20tertarik%20ingin%20tanya%20seputar%20pembuatan%20website.`;

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-indigo-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-700 uppercase bg-blue-50 rounded-full">
            Jasa Web Profesional #1 di Indonesia
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
            Jasa Pembuatan Website agar <span className="text-primary underline decoration-accent decoration-4 underline-offset-8">Bisnis Naik Kelas</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-10 leading-relaxed max-w-xl">
            Jasa pembuatan website untuk UMKM, toko online, and personal branding. Harga terjangkau, proses transparan, dan siap pakai dalam hitungan hari.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="xl" variant="whatsapp">
              <a 
                href={waUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero_cta')}
              >
                Mau Tanya-Tanya Dulu
              </a>
            </Button>
            <Button asChild size="xl" variant="outline">
              <a href="#portfolio">Lihat Hasil Kerja Kami</a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-slate-600 font-medium">
            <span>Partner Digital Terpercaya untuk UMKM Lokal</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white/50 bg-slate-100 aspect-video">
             <img
                src={webMockup}
                alt="Mockup jasa pembuatan website untuk UMKM"
                width="600"
                height="338"
                fetchpriority="high"
                className="w-full h-full object-cover"
              />
          </div>
          {/* Floating Element 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-xl shadow-xl"
          >
            <div className="flex items-center gap-3"> 
              <div>
                <p className="text-xs text-slate-500 font-medium">Pengerjaan</p>
                <p className="font-bold">Hanya 3 Hari</p>
              </div>
            </div>
          </motion.div>
          {/* Floating Element 2 */}
          <motion.div
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div>
                <p className="text-xs text-slate-500 font-medium">Harga</p>
                <p className="font-bold">Mulai 400rb-an</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

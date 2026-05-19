import React from 'react';
import { Mail, MessageCircle, Globe } from 'lucide-react';
import { trackWhatsAppClick } from '../../lib/pixel';

const Footer = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const waUrl = `https://wa.me/${whatsappNumber}?text=Halo%20palugada.tech%2C%20saya%20tertarik%20ingin%20tanya%20seputar%20pembuatan%20website.`;

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4 text-white">
            <img 
              src="/logo_palugada_tech(no-background).png" 
              alt="Logo palugada.tech untuk layanan web UMKM dan toko online" 
              width="32"
              height="32"
              loading="lazy" 
              className="h-8 w-auto brightness-0 invert" 
            />
            <span className="font-bold text-xl tracking-tight">palugada.tech</span>
          </div>
          <p className="max-w-sm mb-6">
            Solusi pembuatan website profesional dan terjangkau untuk UMKM Indonesia. Kami bantu bisnis Anda go digital dengan proses yang cepat dan transparan.
          </p>
          <div className="flex gap-4">
            <a 
              href={waUrl} 
              className="hover:text-white transition-colors" 
              aria-label="WhatsApp"
              onClick={() => trackWhatsAppClick('footer_icon')}
            >
              <MessageCircle size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Website"><Globe size={20} /></a>
            <a href="mailto:palugadatech.official@gmail.com" className="hover:text-white transition-colors" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4 text-lg">Layanan</h4>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-white transition-colors">Landing Page</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Company Profile</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Toko Online</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Custom Web App</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4 text-lg">Navigasi</h4>
          <ul className="space-y-2">
            <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
            <li><a href="#workflow" className="hover:text-white transition-colors">Cara Kerja</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            <li>
              <a 
                href={waUrl} 
                className="hover:text-white transition-colors"
                onClick={() => trackWhatsAppClick('footer_link')}
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} palugada.tech. All rights reserved. Made with in Indonesia.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackWhatsAppClick } from '../../lib/pixel';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const waUrl = `https://wa.me/${whatsappNumber}?text=Halo%20palugada.tech%2C%20saya%20tertarik%20ingin%20tanya%20seputar%20pembuatan%20website.`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('floating_button')}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center group"
          aria-label="Chat WhatsApp"
        >
          <MessageCircle size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap font-medium">
            Konsultasi Gratis
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;

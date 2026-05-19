import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { trackWhatsAppClick } from '../../lib/pixel';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Layanan', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Cara Kerja', href: '#workflow' },
    { name: 'FAQ', href: '#faq' },
  ];

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const waUrl = `https://wa.me/${whatsappNumber}?text=Halo%20palugada.tech%2C%20saya%20tertarik%20ingin%20tanya%20seputar%20pembuatan%20website.`;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/logo_palugada_tech(no-background).png" 
            alt="Logo palugada.tech jasa pembuatan website" 
            width="32"
            height="32"
            className="h-8 w-auto" 
          />
          <span className="font-bold text-xl tracking-tight text-primary">palugada.tech</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild variant="default" size="sm">
            <a 
              href={waUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('navbar_desktop')}
            >
              Konsultasi Gratis
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full">
            <a 
              href={waUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('navbar_mobile')}
            >
              Konsultasi Gratis
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageSquare, Menu, X, ChevronRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Nos Services', href: '#services' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Contact Info */}
      <div className="bg-[#1F7A4A] text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
              Siège Social: Cocody / Abatta (près du carrefour Abatta), Abidjan
            </span>
            <span className="hidden md:inline-block text-white/50">|</span>
            <span className="hidden md:inline flex items-center gap-1 text-white/90 font-medium">
              Horaires: Lun - Sam: 07h30 - 18h30
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:0707172596"
              className="flex items-center gap-1.5 hover:text-green-200 transition-colors font-bold text-yellow-300"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>07 07 17 25 96</span>
            </a>
            <a
              href="https://wa.me/2250707172596?text=Bonjour%20BEIDY%20SERVICES,%20je%20souhaite%20une%20information%20concernant%20vos%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500/30 hover:bg-green-500/50 px-2.5 py-0.5 rounded-full transition-colors font-medium border border-green-300/30"
            >
              <MessageSquare className="w-3.5 h-3.5 text-green-300" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'header-glass shadow-lg py-2.5 border-b border-gray-200'
            : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#accueil" className="flex items-center group">
            <Logo variant="compact" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm lg:text-base font-bold text-gray-800 hover:text-[#2E9D62] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] hover:after:w-full after:transition-all after:duration-300 tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 group transform active:scale-95"
              id="nav-quote-cta"
            >
              <FileText className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform" />
              <span>Demander un devis</span>
              <ChevronRight className="w-4 h-4 text-blue-200 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="sm:hidden bg-[#2563EB] text-white text-xs font-bold px-3 py-2 rounded-md flex items-center gap-1 shadow"
            >
              Devis
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#2E9D62] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-1 pt-2 pb-3 border-b border-gray-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-base font-semibold text-gray-800 hover:text-[#2E9D62] hover:bg-[#EBF7F0] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow"
              >
                <FileText className="w-5 h-5" />
                <span>Demander un devis gratuit</span>
              </button>

              <a
                href="tel:0707172596"
                className="w-full bg-[#2E9D62] hover:bg-[#1F7A4A] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow"
              >
                <Phone className="w-5 h-5" />
                <span>Appeler le 07 07 17 25 96</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

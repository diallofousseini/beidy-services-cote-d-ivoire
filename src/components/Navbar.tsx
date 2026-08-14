import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageSquare, Menu, X, ChevronRight, FileText, Briefcase } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onNavigate?: (page: 'home' | 'mediatheque', sectionId?: string) => void;
  currentPage?: 'home' | 'mediatheque';
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onNavigate, currentPage = 'home' }) => {
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
    { name: 'ACCUEIL', href: '#accueil', page: 'home', section: 'accueil' },
    { name: 'NOS SERVICES', href: '#services', page: 'home', section: 'services' },
    { name: 'PROJETS', href: '#realisations', page: 'home', section: 'realisations' },
    { name: 'MÉDIATHÈQUE', href: '#mediatheque', page: 'mediatheque', section: 'mediatheque' },
    { name: 'CONTACT', href: '#contact', page: 'home', section: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(link.page as 'home' | 'mediatheque', link.section);
    } else {
      window.location.hash = link.href;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Solid White Background Navbar */}
      <nav
        className="bg-white shadow-md border-b border-gray-200 py-2 sm:py-2.5 transition-all duration-300"
        aria-label="Navigation principale"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#accueil"
            onClick={(e) => handleLinkClick(e, navLinks[0])}
            className="flex items-center group"
            itemProp="url"
          >
            <Logo variant="compact" />
          </a>

          {/* Desktop Navigation Links & Right Action CTA Grouped Together */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 ml-auto mr-4 sm:mr-6">
            {navLinks.map((link) => {
              const isActive = link.page === currentPage && (currentPage === 'mediatheque' || link.section === 'accueil');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  itemProp="url"
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-sm xl:text-base font-black transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:bg-[#2563EB] after:transition-all after:duration-300 tracking-wider uppercase ${
                    isActive ? 'text-[#2563EB] after:w-full' : 'text-gray-900 hover:text-[#2563EB]'
                  }`}
                >
                  <span itemProp="name">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center">
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
                  itemProp="url"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleLinkClick(e, link);
                  }}
                  className="px-3 py-2.5 rounded-md text-base font-semibold text-gray-800 hover:text-[#2563EB] hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span itemProp="name">{link.name}</span>
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

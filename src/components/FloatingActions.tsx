import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, FileText } from 'lucide-react';

interface FloatingActionsProps {
  onOpenQuoteModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQuoteModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto bg-gray-900/90 hover:bg-black text-white p-3 rounded-full shadow-lg border border-white/20 transition-all hover:scale-110 active:scale-95"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Floating Action */}
      <a
        href="https://wa.me/2250707172596?text=Bonjour%20BEIDY%20SERVICES,%20je%20souhaite%20une%20information%20ou%20un%20devis."
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto bg-[#25D366] hover:bg-[#20bd59] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center gap-2.5 transition-all hover:scale-105 group border border-green-300/40"
        aria-label="WhatsApp Direct"
      >
        <MessageSquare className="w-5 h-5 fill-current shrink-0" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">WhatsApp</span>
      </a>

      {/* Floating Quote Request Button for Mobile */}
      <button
        onClick={onOpenQuoteModal}
        className="pointer-events-auto sm:hidden bg-[#2563EB] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center"
        aria-label="Devis Rapide"
      >
        <FileText className="w-5 h-5" />
      </button>

    </div>
  );
};

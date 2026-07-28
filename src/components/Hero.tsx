import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, CheckCircle2, Droplets, Building2, Zap, ShieldCheck } from 'lucide-react';

import heroImg1 from '../assets/images/hero_btp_forage_1785032193951.jpg';
import heroImg2 from '../assets/images/forage_water_rig_1785032220471.jpg';
import heroImg3 from '../assets/images/btp_construction_site_1785032246377.jpg';
import heroImg4 from '../assets/images/electrification_solar_1785032232054.jpg';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const slides = [
    {
      image: heroImg1,
      badge: 'BTP • FORAGE • ÉLECTRIFICATION',
      title: 'Bâtir l’avenir, libérer les ressources, éclairer les régions.',
      subtitle: 'BEIDY SERVICES COTE D\'IVOIRE réalise vos projets de BTP, Forage et Électrification Rurale avec une expertise certifiée et durable.',
    },
    {
      image: heroImg2,
      badge: 'AUTONOMIE EN EAU POTABLE',
      title: 'Fini les coupures d\'eau : Votre eau propre à volonté !',
      subtitle: 'Forages d\'eau professionnels pour vos villas, fermes, entreprises et collectivités partout en Côte d\'Ivoire.',
    },
    {
      image: heroImg3,
      badge: 'EXCELLENCE DU BTP EN CÔTE D\'IVOIRE',
      title: 'Construisons la confiance avec des bâtiments solides.',
      subtitle: 'Études, gros œuvre, villas, immeubles et infrastructures industrielles livrés clé en main dans le respect des délais.',
    },
    {
      image: heroImg4,
      badge: 'ÉNERGIES RENOUVELABLES & RURALITÉ',
      title: 'Éclairer chaque foyer et impulser le développement.',
      subtitle: 'Raccordement électrique HTA/BTA, éclairage public et solutions solaires durables pour collectivités et particuliers.',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="accueil" className="relative pt-28 sm:pt-32 pb-16 lg:pb-24 bg-[#1A1A1A] text-white overflow-hidden">
      {/* Background Slideshow with Smooth Overlay */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover scale-105 animate-pulse duration-[10000ms]"
            referrerPolicy="no-referrer"
          />
          {/* Multi-stage High Contrast Gradient Overlay for Corporate Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 via-[#111827]/85 to-[#111827]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-[#111827]/40" />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-6 pb-10">
          
          {/* Top Tagline Pill */}
          <div className="inline-flex items-center gap-2 bg-[#2E9D62]/90 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full border border-green-400/40 shadow-lg mb-6 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
            <span>{slides[currentSlide].badge}</span>
          </div>

          {/* Main Hero Headline in Serif Typography */}
          <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6 transition-all duration-700">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-gray-200 leading-relaxed font-normal mb-8 max-w-2xl">
            {slides[currentSlide].subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-base px-7 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0"
              id="hero-cta-devis"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight className="w-5 h-5 text-blue-200" />
            </button>

            <a
              href="#services"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-base px-7 py-4 rounded-xl backdrop-blur-md border border-white/25 transition-all duration-300 flex items-center justify-center gap-2 text-center"
            >
              <span>Découvrir nos solutions</span>
            </a>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2.5 mb-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === currentSlide ? 'w-10 bg-[#2E9D62]' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Aller au slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Feature Highlights Grid at the bottom of Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/15">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4 hover:border-[#2E9D62]/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#2E9D62] flex items-center justify-center text-white shrink-0 shadow-md">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base">BTP & Gros Œuvre</h3>
              <p className="text-xs text-gray-300">Constructions solides, villas & immeubles</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4 hover:border-[#2E9D62]/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#2563EB] flex items-center justify-center text-white shrink-0 shadow-md">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base">Forage d'Eau Potable</h3>
              <p className="text-xs text-gray-300">Eau propre garantie toute l'année</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4 hover:border-[#2E9D62]/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#2E9D62] flex items-center justify-center text-white shrink-0 shadow-md">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base">Électrification Rurale</h3>
              <p className="text-xs text-gray-300">Réseaux électriques & pompage solaire</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

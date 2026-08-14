import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, CheckCircle2, Droplets, Building2, Zap, ShieldCheck } from 'lucide-react';

const heroImg1 = '/images/images_passants/derks24-construction-site-3871804_1920.jpg';
const heroImg2 = '/images/images_passants/WhatsApp Image 2026-08-05 at 10.55.41.jpeg';
const heroImg3 = '/images/images_passants/patrickbaum-container-1097206.jpg';
const heroImg4 = '/images/images_passants/WhatsApp Image 2026-08-05 at 10.49.20.jpeg';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const slides = [
    {
      image: heroImg1,
      badge: 'BTP • FORAGE • IMPORT-EXPORT',
      title: 'Bâtir l’avenir, libérer les ressources, approvisionner vos chantiers.',
      subtitle: 'BEIDY SERVICES CÔTE D\'IVOIRE réalise vos projets de BTP, Forage et Import-Export avec une expertise certifiée et durable.',
    },
    {
      image: heroImg2,
      badge: 'AUTONOMIE EN EAU POTABLE',
      title: 'Fini les coupures d\'eau : Votre eau propre à volonté !',
      subtitle: 'Forages d\'eau professionnels pour vos villas, fermes, entreprises et collectivités partout en Côte d\'Ivoire.',
    },
    {
      image: heroImg3,
      badge: 'IMPORT-EXPORT & NÉGOCE INTERNATIONAL',
      title: 'Des matériels et équipements lourds de haute qualité.',
      subtitle: 'Fourniture et importation de machines BTP, équipements de forage et outillages industriels certifiés.',
    },
    {
      image: heroImg4,
      badge: 'EXCELLENCE DU BTP EN CÔTE D\'IVOIRE',
      title: 'Construisons la confiance avec des bâtiments solides.',
      subtitle: 'Études, gros œuvre, villas, immeubles et infrastructures industrielles livrés clé en main dans le respect des délais.',
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
    <section id="accueil" className="relative pt-16 sm:pt-20 pb-8 lg:pb-12 bg-[#1A1A1A] text-white overflow-hidden">
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
          {/* Lightened Gradient Overlay for High Image Vibrancy & Clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/75 via-transparent to-black/20" />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-4 pb-8">
          
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
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="#services"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-base px-7 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0"
              id="hero-cta-services"
            >
              <span>Nos services</span>
              <ArrowRight className="w-5 h-5 text-blue-200" />
            </a>

            <a
              href="#contact"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-base px-7 py-4 rounded-xl backdrop-blur-md border border-white/25 transition-all duration-300 flex items-center justify-center gap-2 text-center"
              id="hero-cta-contact"
            >
              <span>Contact</span>
            </a>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2.5 mb-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === currentSlide ? 'w-10 bg-[#2563EB]' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Aller au slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Royal Blue Brush-Stroke Stats Banner Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/15">
          {[
            { value: '+14', label: "Années d'Expertise" },
            { value: '+350', label: 'Projets Réalisés' },
            { value: '+200', label: 'Sites d’intervention' },
            { value: '3', label: "Secteurs d'Activités" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-center py-7 px-4 min-h-[120px] sm:min-h-[140px] group transform hover:scale-105 transition-all duration-300 select-none"
            >
              {/* Royal Blue Paint Brush Banner SVG Background */}
              <svg
                className="absolute inset-0 w-full h-full text-[#2563EB] drop-shadow-xl filter transition-all duration-300 group-hover:brightness-110"
                viewBox="0 0 300 140"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M14,24 C32,10 68,24 110,14 C152,4 198,20 242,10 C278,0 295,16 300,32 C306,50 289,70 296,94 C303,118 284,132 260,136 C225,142 180,130 138,137 C96,144 54,132 26,136 C6,140 -2,120 1,96 C4,72 -2,40 14,24 Z"
                />
              </svg>
              {/* Stat text content centered on top of water blue brush stroke */}
              <div className="relative z-10 text-center px-2">
                <span className="block font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-none drop-shadow-md">
                  {stat.value}
                </span>
                <span className="block text-xs sm:text-sm font-bold text-white/95 tracking-wide mt-1 sm:mt-1.5">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

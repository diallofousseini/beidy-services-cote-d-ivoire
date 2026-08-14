import React from 'react';
import { Quote, Award, ShieldCheck, CheckCircle, Sparkles } from 'lucide-react';

const dgPhoto = '/images/images_direteur/directeur.png';

export const DirectorMessage: React.FC = () => {
  return (
    <section id="mot-du-dg" className="py-10 sm:py-12 bg-white relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E9D62]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetrical 50% / 50% Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Photo of DG M. Hassane Barry (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame Accent */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#2E9D62] via-[#2563EB] to-emerald-400 rounded-3xl transform -rotate-2 opacity-80 blur-sm" />
              
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <img
                  src={dgPhoto}
                  alt="M. Hassane Barry - Directeur Général BEIDY SERVICES"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top rounded-xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Badge for DG Title */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2E9D62] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-gray-900 text-base font-serif-heading">M. Hassane Barry</h3>
                      <p className="text-xs font-bold text-[#2563EB]">Directeur Général - BEIDY SERVICES</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Quality Seal */}
              <div className="absolute -top-6 -right-6 bg-[#2E9D62] text-white p-4 rounded-2xl shadow-xl flex items-center gap-2 border-2 border-white animate-float hidden sm:flex">
                <ShieldCheck className="w-6 h-6 text-emerald-200" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-emerald-100">Savoir-Faire</span>
                  <span className="block text-xs font-black">+14 années d'expérience</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Message & Quote (7 columns) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Quote Block in Large Serif Typography */}
            <div className="relative bg-[#F8F9FA] p-8 sm:p-10 rounded-2xl border-l-4 border-[#2E9D62] shadow-sm">
              <Quote className="w-12 h-12 text-[#2E9D62]/20 absolute top-4 right-4 pointer-events-none" />
              
              <blockquote className="font-serif-heading text-base sm:text-xl text-gray-800 font-semibold leading-relaxed italic">
                « Grâce à notre expertise unique qui fusionne le forage de précision, le BTP de grande envergure et une maîtrise totale de l’import-export, nous maîtrisons l'ensemble de la chaîne de valeur. Du sourcing des meilleurs matériaux à la livraison de chantiers complexes, nous éliminons les intermédiaires pour garantir une réactivité absolue. Face aux exigences du terrain et aux flux internationaux, nous convertissons la complexité technique et logistique en performances concrètes, sûres et durables pour nos partenaires. »
              </blockquote>
            </div>

            {/* Key Commitment Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#2E9D62] shrink-0" />
                <span className="text-xs font-bold text-gray-800">Sécurité & Normes BTP</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0" />
                <span className="text-xs font-bold text-gray-800">Accès à l'Eau Propre</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#2E9D62] shrink-0" />
                <span className="text-xs font-bold text-gray-800">Énergies Écologiques</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

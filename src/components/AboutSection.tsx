import React from 'react';
import { Building2, ShieldCheck, Users, Target, Award, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="a-propos" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 font-serif-heading">
            BEIDY SERVICES CÔTE D'IVOIRE
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            Un acteur de référence dédié à la construction d'infrastructures durables, à l'accès universel à l'eau potable et à l'électrification rurale.
          </p>
        </div>

        {/* 2 Columns: Enterprise Presentation & History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">
            <h3 className="text-2xl font-black text-gray-900 font-serif-heading">
              Au Service du Développement National et Régional
            </h3>
            <p>
              Basée à Abidjan (Cocody / Abatta), <strong className="text-gray-900">BEIDY SERVICES CÔTE D'IVOIRE</strong> s'est imposée comme un partenaire technique privilégié auprès des particuliers, des entreprises privées et des collectivités locales.
            </p>
            <p>
              Sous la conduite stratégique de son Directeur Général, <strong className="text-gray-900">M. Hassane Barry</strong>, la société combine expertise d'ingénierie moderne et connaissance fine des réalités du terrain ivoirien. Nos équipes interviennent sur toute l'étendue du territoire pour réaliser des ouvrages clé en main d'une qualité certifiée.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-200">
                <span className="block text-2xl font-black text-[#2E9D62]">100%</span>
                <span className="text-xs font-semibold text-gray-600">Expertise locale & certifiée</span>
              </div>
              <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-200">
                <span className="block text-2xl font-black text-[#2563EB]">Clé en Main</span>
                <span className="text-xs font-semibold text-gray-600">De l'étude à la livraison</span>
              </div>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="bg-[#F8F9FA] p-8 rounded-3xl border border-gray-200 space-y-6">
            <h4 className="text-xl font-bold font-serif-heading text-gray-900">
              Nos Pôles de Compétences
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2E9D62] text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">Pôle BTP & Génie Civil</h5>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Gros œuvre, fondations, villas modernes, immeubles R+n, aménagement urbain et rénovation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">Pôle Hydrogéologie & Forage</h5>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Forage d'eau profond, pompage solaire, châteaux d'eau et adduction d'eau potable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2E9D62] text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">Pôle Énergie & Électrification</h5>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Réseaux électriques HTA/BTA, éclairage public solaire, mini-réseaux ruraux.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

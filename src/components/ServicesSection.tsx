import React, { useState } from 'react';
import { Building2, Droplets, Zap, ArrowRight, CheckCircle2, ShieldCheck, FileText, X } from 'lucide-react';

import btpImg from '../assets/images/btp_construction_site_1785032246377.jpg';
import forageImg from '../assets/images/forage_water_rig_1785032220471.jpg';
import solarImg from '../assets/images/electrification_solar_1785032232054.jpg';

interface ServiceItem {
  id: string;
  category: 'btp' | 'forage' | 'electrification';
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  image: string;
  badge: string;
  description: string;
  highlights: string[];
  subServices: string[];
  processSteps: { title: string; desc: string }[];
}

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceCategory: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const servicesData: ServiceItem[] = [
    {
      id: 'btp-gros-oeuvre',
      category: 'btp',
      title: 'BTP & Gros Œuvre',
      subtitle: 'Infrastructures, Bâtiments Résidentiels & Professionnels',
      icon: <Building2 className="w-7 h-7 text-[#2E9D62]" />,
      image: btpImg,
      badge: 'Solide & Certifié',
      description:
        'BEIDY SERVICES COTE D\'IVOIRE assure la réalisation complète de vos ouvrages civils, des études topographiques et géotechniques jusqu\'aux finitions. Bâtissons vos projets sur des fondations inébranlables.',
      highlights: [
        'Villas de standing, duplex & résidences familiales',
        'Immeubles d\'habitation & complexes commerciaux',
        'Écoles, entrepôts industriels & bâtiments publics',
        'Réhabilitation, rénovation lourde & génie civil'
      ],
      subServices: [
        'Études architecturales et calcul de structure béton armé',
        'Fondations spéciales, terrassement et nivellement',
        'Gros œuvre, maçonnerie structurale et ferraillage',
        'Étanchéité, toiture, charpente et aménagement extérieur',
        'Contrôle qualité strict selon les normes Ivoiriennes et UEMOA'
      ],
      processSteps: [
        { title: '1. Étude & Devis', desc: 'Analyse topographique, plan d\'exécution et chiffrage transparent.' },
        { title: '2. Fondations & Structure', desc: 'Coulage certifié, maçonnerie et élévation des murs.' },
        { title: '3. Second Œuvre & Toiture', desc: 'Charpente, étanchéité et pose des réseaux fluides/électricité.' },
        { title: '4. Livraison Clé en Main', desc: 'Contrôle de conformité et remise des clés dans les délais convenus.' }
      ]
    },
    {
      id: 'forage-eau-potable',
      category: 'forage',
      title: 'Forage d\'Eau Potable',
      subtitle: 'Exploration, Forages Clés en Main & Pompage',
      icon: <Droplets className="w-7 h-7 text-[#2563EB]" />,
      image: forageImg,
      badge: 'Autonomie 100% Garantie',
      description:
        'Dites adieu aux coupures et pénuries d\'eau. Nos équipes spécialisées réalisent des forages d\'eau profonds et sécurisés pour les particuliers, les exploitations agricoles, les usines et les collectivités.',
      highlights: [
        'Prospection géophysique & localisation de nappe',
        'Forage profond avec tubage PVC/Acier certifié',
        'Installation de pompes immergées (Solaires / Électriques)',
        'Châteaux d\'eau, réservoirs et systèmes de potabilisation'
      ],
      subServices: [
        'Études hydrogéologiques préalables et détection de veine d\'eau',
        'Forage d\'eau résidentiel (villas, cours communes, ménages)',
        'Forage agricole à fort débit pour irrigation & élevage',
        'Forage industriel pour usines et complexes immobiliers',
        'Essais de pompage, analyse de potabilisation et maintenance'
      ],
      processSteps: [
        { title: '1. Prospection Géophysique', desc: 'Détection scientifique du meilleur point de forage sur votre terrain.' },
        { title: '2. Forage & Tubage', desc: 'Forage mécanique profond et pose de tubage anti-écrasement.' },
        { title: '3. Équipement & Pompe', desc: 'Installation de la pompe immergée et ballon de pression ou château d\'eau.' },
        { title: '4. Eau Propre à Volonté', desc: 'Analyse physico-chimique et mise en service immédiate.' }
      ]
    },
    {
      id: 'electrification-rurale',
      category: 'electrification',
      title: 'Électrification Rurale & Solaire',
      subtitle: 'Réseaux HTA/BTA, Éclairage Public & Énergie Solaire',
      icon: <Zap className="w-7 h-7 text-[#2E9D62]" />,
      image: solarImg,
      badge: 'Énergie Écologique & Durable',
      description:
        'Apporter l\'énergie au cœur des régions et sécuriser vos installations. BEIDY SERVICES déploie des lignes électriques, des réseaux d\'éclairage public et des solutions solaires autonomes performantes.',
      highlights: [
        'Extension de réseaux électriques HTA / BTA',
        'Éclairage public solaire autonome pour communes',
        'Installations photovoltaïques pour sites isolés & fermes',
        'Pompage solaire agricole sans facture de carburant'
      ],
      subServices: [
        'Implantation et levage de pylônes et poteaux béton/bois',
        'Tirage de câbles, pose de transformateurs et postes HTA/BTA',
        'Éclairage public à lampadaires solaires LED haut rendement',
        'Dimensionnement et pose de kits solaires pour maisons & entreprises',
        'Maintenance préventive et mise aux normes électriques'
      ],
      processSteps: [
        { title: '1. Étude de Charge', desc: 'Bilan de puissance et cartographie du tracé réseau.' },
        { title: '2. Génie Électrique', desc: 'Pose des supports, armoires et raccordements de sécurité.' },
        { title: '3. Dimensionnement Solaire', desc: 'Installation des panneaux haut rendement et onduleurs.' },
        { title: '4. Recette & Éclairage', desc: 'Tests de tension et mise en fonctionnement continue.' }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4 font-serif-heading">
            Nos Domaines d'Expertise
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            BEIDY SERVICES COTE D'IVOIRE vous offre des prestations clé en main dans trois secteurs stratégiques pour le développement des infrastructures et le bien-être des populations.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Header Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Badge Top Right */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#1A1A1A] font-bold text-xs px-3 py-1 rounded-full shadow border border-gray-200">
                  {service.badge}
                </div>

                {/* Card Title inside image bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl font-serif-heading text-white">{service.title}</h3>
                  </div>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider mb-2">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#2E9D62] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Buttons */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs sm:text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1.5 group/btn py-2"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(service.category)}
                    className="bg-[#2E9D62] hover:bg-[#1F7A4A] text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Devis {service.title.split(' ')[0]}</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal for Service Deep Dive */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 relative">
              
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors z-10"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Image */}
              <div className="relative h-64 sm:h-72">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="bg-[#2E9D62] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-2 inline-block">
                    {selectedService.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-serif-heading">
                    {selectedService.title}
                  </h3>
                  <p className="text-sm text-gray-200">{selectedService.subtitle}</p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Présentation globale</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedService.description}</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-3">Prestations & Sous-Services inclus</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.subServices.map((sub, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-[#F8F9FA] p-3 rounded-lg border border-gray-100">
                        <ShieldCheck className="w-4 h-4 text-[#2E9D62] shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-gray-800">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-3">Déroulement type du projet</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedService.processSteps.map((step, idx) => (
                      <div key={idx} className="border border-gray-200 p-4 rounded-xl bg-white shadow-sm">
                        <p className="font-bold text-[#2563EB] text-sm mb-1">{step.title}</p>
                        <p className="text-xs text-gray-600 leading-normal">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-gray-500">
                    Projets réalisés sous le contrôle de <span className="font-bold text-gray-800">BEIDY SERVICES CÔTE D'IVOIRE</span>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-xs font-bold hover:bg-gray-50 w-1/2 sm:w-auto"
                    >
                      Fermer
                    </button>
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        onSelectServiceForQuote(selectedService.category);
                      }}
                      className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs px-6 py-2.5 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 w-1/2 sm:w-auto"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Obtenir un devis gratuit</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

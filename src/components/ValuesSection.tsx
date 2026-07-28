import React from 'react';
import { ShieldCheck, Clock, HeartHandshake, Check } from 'lucide-react';

export const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#2E9D62]" />,
      title: '1. Qualité des Matériaux & Rigueur',
      description:
        'Nous sélectionnons rigoureusement des matériaux certifiés conformes aux normes internationales et africaines. Béton à haute résistance, tuyauterie haute pression, pompes immergées de marque reconnue et panneaux solaires de première qualité pour garantir la pérennité de chaque ouvrage.',
      points: [
        'Béton armé et aciers contrôlés en laboratoire',
        'Tubage PVC & Acier inoxydable certifié anti-corrosion',
        'Matériel électrique aux normes de sécurité UEMOA'
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-[#2563EB]" />,
      title: '2. Respect Rigoureux des Délais',
      description:
        'Un calendrier précis et un suivi de chantier rigoureux font la réputation de BEIDY SERVICES. Nous nous engageons fermement à livrer vos projets BTP, forages et réseaux électriques dans les délais contractuels fixés, sans compromis sur la finition.',
      points: [
        'Gestion de projet méthodique par jalons',
        'Rapports d’avancement réguliers pour le client',
        'Livraison clé en main sans retards imprévus'
      ]
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#2E9D62]" />,
      title: '3. Impact Social & Environnemental',
      description:
        'Chaque projet est conçu pour créer de la valeur locale et préserver les écosystèmes. Qu’il s’agisse de fournir de l’eau potable aux communautés rurales ou d’installer des réseaux solaires écologiques, nous œuvrons pour un développement humain durable.',
      points: [
        'Accès pérenne à l’eau salubre pour les familles',
        'Pénétration des énergies renouvelables et solaires',
        'Recrutement et valorisation de la main-d’œuvre locale'
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#F8F9FA] border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-[#2E9D62] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-gray-200 shadow-sm">
            <span>Piliers de notre Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 font-serif-heading">
            Nos Valeurs & Engagements
          </h2>
          <p className="text-base text-gray-600 mt-3">
            Découvrez les principes fondateurs qui guident chacune des interventions de BEIDY SERVICES COTE D'IVOIRE sur le terrain.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Top Icon Badge */}
                <div className="w-16 h-16 rounded-2xl bg-[#EBF7F0] group-hover:bg-[#2E9D62] transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif-heading font-bold text-xl text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="pt-4 border-t border-gray-100 space-y-2.5">
                {item.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-semibold text-gray-700">
                    <Check className="w-4 h-4 text-[#2E9D62] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Newspaper, Calendar, Tag, ChevronRight, Sparkles, Building2, Droplets, Truck } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  icon: React.ReactNode;
}

export const NewsSection: React.FC = () => {
  const newsList: NewsItem[] = [
    {
      id: 'news-1',
      title: 'Avancement Rapide des Chantiers BTP & Construction de Villas à Abidjan',
      category: 'BTP & Gros Œuvre',
      date: '12 Août 2026',
      image: '/images/realisations/btp.png',
      summary: 'Nos équipes d\'ingénieurs et techniciens BTP poursuivent l\'élévation des structures béton armé et le coulage des dalles sur nos chantiers résidentiels.',
      icon: <Building2 className="w-4 h-4 text-[#2563EB]" />
    },
    {
      id: 'news-2',
      title: 'Inauguration et Mise en Service de Forages d\'Eau Potable Profonds',
      category: 'Forage & Hydraulique',
      date: '05 Août 2026',
      image: '/images/realisations/Forage.png',
      summary: 'Livraison clé en main de nouveaux châteaux d\'eau et stations de pompage hydraulique garantissant de l\'eau claire et saine aux populations.',
      icon: <Droplets className="w-4 h-4 text-[#2E9D62]" />
    },
    {
      id: 'news-3',
      title: 'Réception & Dédouanement de Nouveaux Équipements Hydrauliques et Industriels',
      category: 'Import-Export & Négoce',
      date: '28 Juillet 2026',
      image: '/images/realisations/import.avif',
      summary: 'Arrivée au dépôt principal d\'Abidjan d\'un conteneur complet de pompes immergées inox, tubages PVC et matériels lourds certifiés ISO.',
      icon: <Truck className="w-4 h-4 text-amber-500" />
    }
  ];

  return (
    <section id="actualites" className="py-20 bg-white text-[#1A1A1A] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-4 border border-[#2563EB]/20">
            <Sparkles className="w-4 h-4 text-[#2563EB]" />
            <span>Dernières Actualités & Chantiers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif-heading text-gray-900 tracking-tight">
            Actualités & Faits Marquants
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
            Suivez les temps forts de BEIDY SERVICES : avancement des constructions BTP, nouvelles réalisations de forages d'eau et arrivages d'équipements lourds en Côte d'Ivoire.
          </p>
        </div>

        {/* News Cards Grid (Exact Design as Portfolio Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsList.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8F9FA] rounded-2xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col group"
            >
              {/* Card Image Banner */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Top Badge Category */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-md border border-white/50 flex items-center gap-1.5">
                  {item.icon}
                  <span>{item.category}</span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 font-serif-heading leading-snug group-hover:text-[#2563EB] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                {/* Bottom Read More CTA Link */}
                <div className="pt-4 border-t border-gray-200/70 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs font-bold text-[#2563EB] group-hover:text-[#1D4ED8] inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>En savoir plus</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 group"
          >
            <Newspaper className="w-5 h-5 text-blue-200" />
            <span>Discuter d'un projet avec nos équipes</span>
            <ChevronRight className="w-5 h-5 text-blue-200 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

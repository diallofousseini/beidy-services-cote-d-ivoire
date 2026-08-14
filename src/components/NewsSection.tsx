import React, { useState } from 'react';
import { Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
}

export const NewsSection: React.FC = () => {
  const newsList: NewsItem[] = [
    {
      id: 'news-1',
      title: 'Avancement Rapide des Chantiers BTP & Construction de Villas à Abidjan',
      category: 'BTP',
      date: '12 Août 2026',
      image: '/images/realisations/btp.png',
      summary: 'Nos équipes d\'ingénieurs et techniciens BTP poursuivent l\'élévation des structures béton armé et le coulage des dalles sur nos chantiers résidentiels.'
    },
    {
      id: 'news-2',
      title: 'Inauguration et Mise en Service de Forages d\'Eau Potable Profonds',
      category: 'Forage',
      date: '05 Août 2026',
      image: '/images/realisations/Forage.png',
      summary: 'Livraison clé en main de nouveaux châteaux d\'eau et stations de pompage hydraulique garantissant de l\'eau claire et saine aux populations.'
    },
    {
      id: 'news-3',
      title: 'Réception & Dédouanement de Nouveaux Équipements Hydrauliques et Industriels',
      category: 'Import-Export',
      date: '28 Juillet 2026',
      image: '/images/realisations/import.avif',
      summary: 'Arrivée au dépôt principal d\'Abidjan d\'un conteneur complet de pompes immergées inox, tubages PVC et matériels lourds certifiés ISO.'
    },
    {
      id: 'news-4',
      title: 'Supervision & Contrôle Qualité des Fondations en Zone Urbaine',
      category: 'BTP',
      date: '18 Juillet 2026',
      image: '/images/Media/WhatsApp Image 2026-08-05 at 10.49.07.jpeg',
      summary: 'Inspections régulières des coffrages et ferraillages pour garantir la conformité aux normes parasismiques et de durabilité.'
    },
    {
      id: 'news-5',
      title: 'Déploiement de Nouvelles Foreuses Roto-Percutantes sur le Terrain',
      category: 'Forage',
      date: '10 Juillet 2026',
      image: '/images/Media/WhatsApp Image 2026-08-05 at 10.39.13 (1).jpeg',
      summary: 'Augmentation des capacités d\'intervention sur les terrains rocheux grâce à l\'arrivée d\'ateliers de forage lourds.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? newsList.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === newsList.length - 1 ? 0 : prev + 1));
  };

  // Get 3 visible items for carousel view
  const visibleNews = [
    newsList[currentIndex],
    newsList[(currentIndex + 1) % newsList.length],
    newsList[(currentIndex + 2) % newsList.length]
  ];

  return (
    <section id="actualites" className="py-10 sm:py-12 bg-white text-[#1A1A1A] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Left-Aligned Header Title with Right-Aligned Carousel Control Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif-heading text-gray-900 tracking-tight">
              Nos derniers Actualites
            </h2>
          </div>

          {/* Carousel Navigation Buttons in Right Column */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-[#F1F5F9] hover:bg-[#2563EB] text-gray-700 hover:text-white transition-colors border border-gray-200 shadow-sm"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-[#F1F5F9] hover:bg-[#2563EB] text-gray-700 hover:text-white transition-colors border border-gray-200 shadow-sm"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* News Interactive Carousel Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleNews.map((item) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 font-serif-heading leading-snug group-hover:text-[#2563EB] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                {/* Bottom Row: Date & En savoir plus on Left, Category on Right in same style */}
                <div className="pt-4 border-t border-gray-200/70 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                      <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>{item.date}</span>
                    </div>
                    <a
                      href="#contact"
                      className="text-xs font-bold text-[#2563EB] group-hover:text-[#1D4ED8] inline-flex items-center gap-0.5 group-hover:underline ml-2"
                    >
                      <span>En savoir plus</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Category placed on the right with the exact same font/style as date */}
                  <span className="text-xs font-semibold text-gray-400">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 group"
          >
            <span>Lire plus....</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

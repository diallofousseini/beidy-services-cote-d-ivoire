import React, { useState } from 'react';
import { Play, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, Video, Filter, Download, Sparkles, Search, ArrowLeft } from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  category: 'btp' | 'forage' | 'import-export' | 'video';
  categoryLabel: string;
  src: string;
  thumbnail?: string;
  description: string;
}

interface MediaGallerySectionProps {
  onBackToHome?: () => void;
  isDedicatedPage?: boolean;
}

export const MediaGallerySection: React.FC<MediaGallerySectionProps> = ({ onBackToHome, isDedicatedPage = false }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const mediaItems: MediaItem[] = [
    // --- CATEGORIE BTP & GROS OEUVRE ---
    {
      id: 'm1',
      type: 'image',
      title: 'Chantier BTP & Vue d\'Ensemble',
      category: 'btp',
      categoryLabel: 'BTP & Gros Œuvre',
      src: '/images/Media/ChatGPT Image 11 août 2026, 16_02_03.png',
      description: 'Supervision technique et avancée des fondations sur chantier de construction à Abidjan.'
    },
    {
      id: 'm2',
      type: 'image',
      title: 'Fondations et Ferraillage Structural',
      category: 'btp',
      categoryLabel: 'BTP & Gros Œuvre',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.49.05 (1).jpeg',
      description: 'Assemblage de l\'armature en fer à béton certifié pour la réalisation des fondations.'
    },
    {
      id: 'm3',
      type: 'image',
      title: 'Élévation des Murs de Maçonnerie',
      category: 'btp',
      categoryLabel: 'BTP & Gros Œuvre',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.49.05.jpeg',
      description: 'Pose soignée des parpaings et alvéoles d\'élévation sur bâtiment résidentiel.'
    },
    {
      id: 'm4',
      type: 'image',
      title: 'Coulage de la Dalle Béton Armé',
      category: 'btp',
      categoryLabel: 'BTP & Gros Œuvre',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.49.06 (1).jpeg',
      description: 'Opération de coulage continu avec bétonneuse et vibrateur de béton.'
    },
    {
      id: 'm5',
      type: 'image',
      title: 'Contrôle de Niveau des Poteaux',
      category: 'btp',
      categoryLabel: 'BTP & Gros Œuvre',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.49.06 (3).jpeg',
      description: 'Vérification de la verticalité et du coffrage des poteaux de soutien.'
    },
    {
      id: 'm6',
      type: 'image',
      title: 'Coffrage et Prépoutres de Plancher',
      category: 'btp',
      categoryLabel: 'BTP & Gros Œuvre',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.49.06 (4).jpeg',
      description: 'Mise en place du coffrage étanche pour la réalisation du plancher R+1.'
    },
    {
      id: 'm7',
      type: 'image',
      title: 'Finition de Maçonnerie & Linteaux',
      category: 'btp',
      categoryLabel: 'BTP & Gros Œuvre',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.49.06.jpeg',
      description: 'Ajustement précis des baies de fenêtres et coulage des linteaux de ceinture.'
    },
    {
      id: 'm8',
      type: 'image',
      title: 'Inspection du Site de Construction',
      category: 'btp',
      categoryLabel: 'BTP & Gros Œuvre',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.49.07.jpeg',
      description: 'Visite d\'inspection de sécurité par le chef de chantier et les techniciens.'
    },
    {
      id: 'm9',
      type: 'image',
      title: 'Enduit Extérieur & Crépissage',
      category: 'btp',
      categoryLabel: 'BTP & Gros Œuvre',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.49.09 (1).jpeg',
      description: 'Application de l\'enduit étanche de finition sur la façade principale.'
    },
    {
      id: 'm10',
      type: 'image',
      title: 'Structure Complète Avant Livraisons',
      category: 'btp',
      categoryLabel: 'BTP & Gros Œuvre',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.49.09 (5).jpeg',
      description: 'Vue d\'ensemble de la structure gros œuvre achevée conforme au plan d\'ingénierie.'
    },

    // --- CATEGORIE FORAGE & HYDRAULIQUE ---
    {
      id: 'm11',
      type: 'image',
      title: 'Prospection & Rig de Forage Mécanique',
      category: 'forage',
      categoryLabel: 'Forage d\'Eau Potable',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.39.13 (1).jpeg',
      description: 'Déploiement de la foreuse mécanique lourde sur le site d\'implantation.'
    },
    {
      id: 'm12',
      type: 'image',
      title: 'Forage Profond & Pénétration Rocheuse',
      category: 'forage',
      categoryLabel: 'Forage d\'Eau Potable',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.39.13 (2).jpeg',
      description: 'Forage mécanique à grande profondeur jusqu\'à la nappe phréatique captée.'
    },
    {
      id: 'm13',
      type: 'image',
      title: 'Essai de Pompage & Éjection de l\'Eau',
      category: 'forage',
      categoryLabel: 'Forage d\'Eau Potable',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.39.13.jpeg',
      description: 'Premier jaillissement d\'eau pure lors du soufflage et nettoyage du trou.'
    },
    {
      id: 'm14',
      type: 'image',
      title: 'Pose de Tubage PVC Anti-Écrasement',
      category: 'forage',
      categoryLabel: 'Forage d\'Eau Potable',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.39.45 (2).jpeg',
      description: 'Descente du tubage crépiné et des graviers de massif filtrant.'
    },
    {
      id: 'm15',
      type: 'image',
      title: 'Tuyauterie d\'Adduction & Raccordement',
      category: 'forage',
      categoryLabel: 'Forage d\'Eau Potable',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.39.45.jpeg',
      description: 'Installation des conduits PEHD de refoulement vers le réservoir.'
    },
    {
      id: 'm16',
      type: 'image',
      title: 'Installation de la Pompe Immergée',
      category: 'forage',
      categoryLabel: 'Forage d\'Eau Potable',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.39.46 (2).jpeg',
      description: 'Mise en place de la pompe hydraulique inox et du câble d\'alimentation.'
    },
    {
      id: 'm17',
      type: 'image',
      title: 'Château d\'Eau Elevé & Réservoir',
      category: 'forage',
      categoryLabel: 'Forage d\'Eau Potable',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.39.47 (2).jpeg',
      description: 'Superstructure métallique soutenant le réservoir de stockage de 10 000 Litres.'
    },
    {
      id: 'm18',
      type: 'image',
      title: 'Station de Pompage & Ballon de Pression',
      category: 'forage',
      categoryLabel: 'Forage d\'Eau Potable',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.39.49 (1).jpeg',
      description: 'Dispositif automatique de régulation de pression pour alimentation continue.'
    },
    {
      id: 'm19',
      type: 'image',
      title: 'Eau Potable Limpide Clé en Main',
      category: 'forage',
      categoryLabel: 'Forage d\'Eau Potable',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.49.12 (1).jpeg',
      description: 'Vérification de la limpidité et potabilité de l\'eau distribuée aux usagers.'
    },

    // --- CATEGORIE IMPORT-EXPORT & MATERIELS ---
    {
      id: 'm20',
      type: 'image',
      title: 'Stock de Tubages & Conduits PVC',
      category: 'import-export',
      categoryLabel: 'Import-Export & Négoce',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.55.11 (1).jpeg',
      description: 'Stockage sécurisé des tuyaux certifiés ISO importés pour les réseaux hydrauliques.'
    },
    {
      id: 'm21',
      type: 'image',
      title: 'Outillages & Équipements de Chantier',
      category: 'import-export',
      categoryLabel: 'Import-Export & Négoce',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.55.11 (2).jpeg',
      description: 'Matériels et outils professionnels de génie civil prêts pour la distribution.'
    },
    {
      id: 'm22',
      type: 'image',
      title: 'Magasin de Pièces Détachées de Forage',
      category: 'import-export',
      categoryLabel: 'Import-Export & Négoce',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.55.11.jpeg',
      description: 'Raccords, têtes de forage et accessoires techniques disponibles en magasin.'
    },
    {
      id: 'm23',
      type: 'image',
      title: 'Pompes Hydrauliques & Solaire Inox',
      category: 'import-export',
      categoryLabel: 'Import-Export & Négoce',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.55.12 (4).jpeg',
      description: 'Arrivée d\'un lot de pompes immergées de haute efficacité énergétique.'
    },
    {
      id: 'm24',
      type: 'image',
      title: 'Déchargement de Matériaux Importés',
      category: 'import-export',
      categoryLabel: 'Import-Export & Négoce',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.55.12.jpeg',
      description: 'Opération de manutention et déchargement au dépôt principal de l\'entreprise.'
    },
    {
      id: 'm25',
      type: 'image',
      title: 'Arrivage Fret & Dédouanement',
      category: 'import-export',
      categoryLabel: 'Import-Export & Négoce',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.55.40 (1).jpeg',
      description: 'Gestion douanière et réception des marchandises au Port d\'Abidjan.'
    },
    {
      id: 'm26',
      type: 'image',
      title: 'Conteneurs Maritimes d\'Équipements',
      category: 'import-export',
      categoryLabel: 'Import-Export & Négoce',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.55.40 (3).jpeg',
      description: 'Acheminement des conteneurs d\'outillage pour approvisionnement des chantiers.'
    },
    {
      id: 'm27',
      type: 'image',
      title: 'Consommables & Matériaux BTP',
      category: 'import-export',
      categoryLabel: 'Import-Export & Négoce',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.55.40.jpeg',
      description: 'Fourniture d\'accessoires techniques pour le bâtiment et les travaux publics.'
    },
    {
      id: 'm28',
      type: 'image',
      title: 'Équipements de Protection Individuelle',
      category: 'import-export',
      categoryLabel: 'Import-Export & Négoce',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.55.41 (1).jpeg',
      description: 'EPI certifiés (Casques, gants, bottes) pour garantir la sécurité des équipes.'
    },
    {
      id: 'm29',
      type: 'image',
      title: 'Matériels & Logistique BEIDY',
      category: 'import-export',
      categoryLabel: 'Import-Export & Négoce',
      src: '/images/Media/WhatsApp Image 2026-08-05 at 10.55.42.jpeg',
      description: 'Parc d\'équipements et logistique de livraison sur le territoire Ivoirien.'
    },

    // --- CATEGORIE VIDEOS DEMONSTRATION ---
    {
      id: 'v1',
      type: 'video',
      title: 'Vidéo Chantier : Opération de Forage d\'Eau',
      category: 'video',
      categoryLabel: 'Vidéo Démonstration',
      src: '/Vidéos/AQOCx7fuk7aAQsCJdSdvRJO1pgxjYlRxSFs1IJ34ZOrBQ9XS34hld3KfpUgOXzX6upm-taBKK9dKE21E0MAmzfo.mp4',
      description: 'Démonstration en direct du creusement mécanique et expulsion d\'eau claire.'
    },
    {
      id: 'v2',
      type: 'video',
      title: 'Vidéo Chantier : Coulage et Ferraillage BTP',
      category: 'video',
      categoryLabel: 'Vidéo Démonstration',
      src: '/Vidéos/AQOQ07Tl4T9hvA8TYf9VFF0laQV28naHmgGSfykosOkvLhrxcdnzbzcOUBEQoRq4ePQVKL7Y4hTLYk8dlTEvs4u49TDn7pVbvBXc5h9WRg.mp4',
      description: 'Rigueur technique lors du coulage des dalles et des voiles en béton armé.'
    },
    {
      id: 'v3',
      type: 'video',
      title: 'Vidéo Chantier : Installation Pompe & Château d\'Eau',
      category: 'video',
      categoryLabel: 'Vidéo Démonstration',
      src: '/Vidéos/AQPxke69_2CI82IMB3V48PMMV5DMfBvJj2priZyhdAqQDFerdpfB2yIJ-PyPli8tmLEu2x4sxXR6D-VjZ3yxNg.mp4',
      description: 'Mise en service du système de pompage hydraulique pour autonomie complète.'
    },
    {
      id: 'v4',
      type: 'video',
      title: 'Vidéo Chantier : Réception & Manutention Import',
      category: 'video',
      categoryLabel: 'Vidéo Démonstration',
      src: '/Vidéos/No-video-title-fdown.net (3).mp4',
      description: 'Manutention sécurisée des conteneurs et équipements industriels importés.'
    },
    {
      id: 'v5',
      type: 'video',
      title: 'Vidéo Chantier : Aperçu Global des Opérations',
      category: 'video',
      categoryLabel: 'Vidéo Démonstration',
      src: '/Vidéos/No-video-title-fdown.net (4).mp4',
      description: 'Présentation des équipes et de la flotte de machines BEIDY SERVICES.'
    }
  ];

  const filteredMedia = mediaItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredMedia.length);
    }
  };

  const prevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredMedia.length) % filteredMedia.length);
    }
  };

  return (
    <section id="mediatheque" className={`py-20 bg-[#0F172A] text-white relative overflow-hidden ${isDedicatedPage ? 'pt-28 min-h-screen' : ''}`}>
      {/* Glow Effects Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#2E9D62]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back to Home Button if on Dedicated Page */}
        {onBackToHome && (
          <div className="mb-8">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2 rounded-xl backdrop-blur-md border border-white/20 transition-all shadow-md group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Retour à l'Accueil</span>
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-400 font-bold text-xs uppercase tracking-wider mb-4 border border-white/15">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Médiathèque Officielle BEIDY SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif-heading text-white tracking-tight">
            Espace Médiathèque & Galerie Dédiée
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed">
            Consultez nos clichés de terrain authentiques et nos vidéos de démonstration illustrant l'excellence de nos équipes en BTP, Forage d'eau et Import-Export.
          </p>
        </div>

        {/* Live Search Input Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Rechercher une photo, un chantier, un outillage..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-800/90 border border-slate-700 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
              activeCategory === 'all'
                ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-600/30 scale-105'
                : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>Tous les Médias ({mediaItems.length})</span>
          </button>

          <button
            onClick={() => setActiveCategory('btp')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
              activeCategory === 'btp'
                ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-600/30 scale-105'
                : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <ImageIcon className="w-4 h-4 text-emerald-400" />
            <span>BTP & Gros Œuvre</span>
          </button>

          <button
            onClick={() => setActiveCategory('forage')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
              activeCategory === 'forage'
                ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-600/30 scale-105'
                : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <ImageIcon className="w-4 h-4 text-blue-400" />
            <span>Forage & Eau</span>
          </button>

          <button
            onClick={() => setActiveCategory('import-export')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
              activeCategory === 'import-export'
                ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-600/30 scale-105'
                : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <ImageIcon className="w-4 h-4 text-amber-400" />
            <span>Import-Export & Négoce</span>
          </button>

          <button
            onClick={() => setActiveCategory('video')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
              activeCategory === 'video'
                ? 'bg-[#2E9D62] text-white shadow-lg shadow-emerald-600/30 scale-105'
                : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Video className="w-4 h-4 text-red-400" />
            <span>Vidéos Démonstration (5)</span>
          </button>
        </div>

        {/* Media Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedia.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-[#1E293B] rounded-2xl overflow-hidden border border-slate-700/70 shadow-xl cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Media Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative w-full h-full bg-slate-950 flex items-center justify-center">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-[#2E9D62] text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-white fill-current ml-1" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Top Badge Category */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white border border-white/20">
                  {item.categoryLabel}
                </div>

                {/* Overlay Zoom Icon */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Item Card Footer Info */}
              <div className="p-4 bg-[#1E293B] flex-1 flex flex-col justify-between border-t border-slate-700/50">
                <div>
                  <h3 className="font-bold text-sm text-white font-serif-heading line-clamp-1 group-hover:text-[#38BDF8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/40 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span className="flex items-center gap-1">
                    {item.type === 'video' ? <Video className="w-3.5 h-3.5 text-red-400" /> : <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />}
                    {item.type === 'video' ? 'Vidéo HD' : 'Photo Haute Résolution'}
                  </span>
                  <span className="text-[#38BDF8] group-hover:underline">Agrandir →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {lightboxIndex !== null && filteredMedia[lightboxIndex] && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 animate-fadeIn"
          >
            {/* Top Bar Navigation */}
            <div className="w-full flex items-center justify-between text-white border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="bg-[#2563EB] text-white font-bold text-xs px-3 py-1 rounded-full uppercase">
                  {filteredMedia[lightboxIndex].categoryLabel}
                </span>
                <span className="text-xs sm:text-sm text-gray-300 font-semibold">
                  {lightboxIndex + 1} / {filteredMedia.length}
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="bg-white/10 hover:bg-white/25 text-white p-2.5 rounded-full transition-colors"
                aria-label="Fermer la vue"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Center Content */}
            <div className="relative flex-1 w-full flex items-center justify-center max-w-5xl my-4">
              {/* Prev Button */}
              <button
                onClick={prevLightbox}
                className="absolute left-2 sm:left-4 z-20 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full border border-white/20 transition-all transform hover:scale-110"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              {/* Media Content Display */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="max-h-[75vh] max-w-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/15 shadow-2xl bg-black"
              >
                {filteredMedia[lightboxIndex].type === 'image' ? (
                  <img
                    src={filteredMedia[lightboxIndex].src}
                    alt={filteredMedia[lightboxIndex].title}
                    className="max-h-[75vh] max-w-full object-contain"
                  />
                ) : (
                  <video
                    src={filteredMedia[lightboxIndex].src}
                    controls
                    autoPlay
                    className="max-h-[75vh] max-w-full object-contain"
                  />
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={nextLightbox}
                className="absolute right-2 sm:right-4 z-20 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full border border-white/20 transition-all transform hover:scale-110"
                aria-label="Suivant"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl bg-slate-900/90 border border-white/15 p-4 sm:p-5 rounded-2xl backdrop-blur-md text-center space-y-1"
            >
              <h3 className="font-bold text-lg sm:text-xl font-serif-heading text-white">
                {filteredMedia[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {filteredMedia[lightboxIndex].description}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

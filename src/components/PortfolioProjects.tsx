import React, { useState } from 'react';
import { ServiceCategory } from '../types';
import { MapPin, Calendar, CheckCircle, ExternalLink, Filter, ChevronRight } from 'lucide-react';

const btpReal1 = '/images/realisations/btp.png';
const btpReal2 = '/images/realisations/travau publi.png';
const forageReal1 = '/images/realisations/Forage.png';
const forageReal2 = '/images/realisations/forage_2.jpeg';
const importReal1 = '/images/realisations/import-eport.png';
const importReal2 = '/images/realisations/import.avif';

export const PortfolioProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>('all');

  const projects = [
    {
      id: 'p1',
      category: 'btp' as ServiceCategory,
      title: 'Construction Villa Duplex R+1 de Standing',
      location: 'Abidjan - Cocody Abatta',
      clientType: 'Particulier',
      completionYear: '2025',
      image: btpReal1,
      description: 'Réalisation intégrale du gros œuvre, des fondations renforcées au coulage des dalles et finitions extérieures.'
    },
    {
      id: 'p2',
      category: 'forage' as ServiceCategory,
      title: 'Forage d’Eau Profond 85m & Château d’Eau 10m³',
      location: 'Cocody / Bingerville',
      clientType: 'Résidence Privée & Ferme',
      completionYear: '2025',
      image: forageReal1,
      description: 'Détection géophysique, forage mécanique à 85 mètres, pose de pompe immergée solaire et réservoir élevé.'
    },
    {
      id: 'p3',
      category: 'electrification' as ServiceCategory,
      title: 'Importation d’Équipements & Matériels de Chantier',
      location: 'Port Autonome d’Abidjan',
      clientType: 'Société Partenaire',
      completionYear: '2025',
      image: importReal1,
      description: 'Importation, dédouanement et fourniture de machineries lourdes et outillages industriels certifiés.'
    },
    {
      id: 'p4',
      category: 'btp' as ServiceCategory,
      title: 'Immeuble Commercial R+3 & Travaux Publics',
      location: 'Zone Industrielle Yopougon',
      clientType: 'Entreprise Industrielle',
      completionYear: '2024',
      image: btpReal2,
      description: 'Étude de structure béton armé, élévation des poteaux, plancher hourdis et aménagement de voierie.'
    },
    {
      id: 'p5',
      category: 'forage' as ServiceCategory,
      title: 'Forage Industriel & Système de Filtration',
      location: 'Grand-Bassam',
      clientType: 'Usine d’Emballage',
      completionYear: '2025',
      image: forageReal2,
      description: 'Forage d’eau à fort débit avec double tubage inox et station de traitement UV et potabilisation.'
    },
    {
      id: 'p6',
      category: 'electrification' as ServiceCategory,
      title: 'Négoce International & Logistique de Pièces',
      location: 'Abidjan & Intérieur',
      clientType: 'Complexe Agricole & BTP',
      completionYear: '2025',
      image: importReal2,
      description: 'Sourcing international, transport maritime et distribution de pompes hydrauliques et tuyauteries PVC/Acier.'
    }
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 font-serif-heading">
              Nos Réalisations
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl">
              Découvrez quelques-uns de nos chantiers récents en BTP, forages d'eau et import-export réalisés avec rigueur et sécurité.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2 bg-[#F8F9FA] p-1.5 rounded-xl border border-gray-200">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#2E9D62] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Tous ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('btp')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilter === 'btp'
                  ? 'bg-[#2E9D62] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              BTP & Gros Œuvre
            </button>
            <button
              onClick={() => setActiveFilter('forage')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilter === 'forage'
                  ? 'bg-[#2563EB] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Forage d'Eau
            </button>
            <button
              onClick={() => setActiveFilter('electrification')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilter === 'electrification'
                  ? 'bg-[#2E9D62] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Import-Export
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#F8F9FA] rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-gray-800 shadow">
                  {project.clientType}
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white text-xs font-semibold bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#2E9D62]" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1 text-gray-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.completionYear}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold font-serif-heading text-lg text-gray-900 mb-2 group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Button: Voir Plus (Redirects to Contact Section) */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group"
          >
            <span>Voir Plus de Réalisations & Discuter de Votre Projet</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

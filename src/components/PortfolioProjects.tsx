import React, { useState } from 'react';
import { ServiceCategory } from '../types';
import { MapPin, Calendar, CheckCircle, ExternalLink, Filter } from 'lucide-react';

import btpImg from '../assets/images/btp_construction_site_1785032246377.jpg';
import forageImg from '../assets/images/forage_water_rig_1785032220471.jpg';
import solarImg from '../assets/images/electrification_solar_1785032232054.jpg';
import heroImg from '../assets/images/hero_btp_forage_1785032193951.jpg';

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
      image: btpImg,
      description: 'Réalisation intégrale du gros œuvre, des fondations renforcées au coulage des dalles et finitions extérieures.',
      metrics: [
        { label: 'Surface bâtie', value: '380 m²' },
        { label: 'Délai d’exécution', value: '6 Mois' }
      ]
    },
    {
      id: 'p2',
      category: 'forage' as ServiceCategory,
      title: 'Forage d’Eau Profond 85m & Château d’Eau 10m³',
      location: 'Cocody / Bingerville',
      clientType: 'Résidence Privée & Ferme',
      completionYear: '2025',
      image: forageImg,
      description: 'Détection géophysique, forage mécanique à 85 mètres, pose de pompe immergée solaire et réservoir élevé.',
      metrics: [
        { label: 'Profondeur', value: '85 Mètres' },
        { label: 'Débit mesuré', value: '4.5 m³/h' }
      ]
    },
    {
      id: 'p3',
      category: 'electrification' as ServiceCategory,
      title: 'Éclairage Public Solaire & Extension Réseau BTA',
      location: 'Région des Grands Ponts',
      clientType: 'Collectivité Locale',
      completionYear: '2024',
      image: solarImg,
      description: 'Installation de 45 lampadaires solaires autonettoyants et pose de Poteaux béton pour extension réseau.',
      metrics: [
        { label: 'Lampadaires solaires', value: '45 Unités' },
        { label: 'Autonomie', value: '12 Hours/Nuit' }
      ]
    },
    {
      id: 'p4',
      category: 'btp' as ServiceCategory,
      title: 'Immeuble Commercial R+3 & Entrepôt Logistique',
      location: 'Zone Industrielle Yopougon',
      clientType: 'Entreprise Industrielle',
      completionYear: '2024',
      image: heroImg,
      description: 'Étude de structure béton armé, élévation des poteaux, plancher hourdis et dallage industriel haute résistance.',
      metrics: [
        { label: 'Superficie', value: '1200 m²' },
        { label: 'Structure', value: 'Béton Armé' }
      ]
    },
    {
      id: 'p5',
      category: 'forage' as ServiceCategory,
      title: 'Forage Industriel & Système de Filtration Agro-Alimentaire',
      location: 'Grand-Bassam',
      clientType: 'Usine d’Emballage',
      completionYear: '2025',
      image: forageImg,
      description: 'Forage d’eau à fort débit avec double tubage inox et station de traitement UV et adoucisseur.',
      metrics: [
        { label: 'Débit fort', value: '12 m³/h' },
        { label: 'Norme d’eau', value: '100% Potable' }
      ]
    },
    {
      id: 'p6',
      category: 'electrification' as ServiceCategory,
      title: 'Centrale Solaire Photovoltaïque pour Site Isolé',
      location: 'Yamoussoukro Périphérie',
      clientType: 'Complexe Agricole',
      completionYear: '2025',
      image: solarImg,
      description: 'Installation de 24 panneaux solaires 550W, onduleur hybride 15kVA et parc de batteries Lithium.',
      metrics: [
        { label: 'Puissance crête', value: '13.2 kWp' },
        { label: 'Batteries', value: 'Lithium LiFePO4' }
      ]
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
              Nos Réalisations en Côte d'Ivoire
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl">
              Découvrez quelques-uns de nos chantiers récents en BTP, forages d'eau et réseaux d'électrification réalisés avec rigueur et sécurité.
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
              Électrification
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
              <div className="relative h-52 overflow-hidden">
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
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-2 bg-white p-3 rounded-xl border border-gray-100">
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <span className="block text-[10px] uppercase font-bold text-gray-400">{m.label}</span>
                      <span className="block text-xs font-extrabold text-[#2E9D62]">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

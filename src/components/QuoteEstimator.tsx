import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, MessageSquare, Send, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

interface QuoteEstimatorProps {
  onPreFillContactForm: (data: { service: string; location: string; message: string }) => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ onPreFillContactForm }) => {
  const [sector, setSector] = useState<'btp' | 'forage' | 'electrification'>('forage');
  
  // BTP State
  const [btpType, setBtpType] = useState('villa');
  const [btpSurface, setBtpSurface] = useState(150);

  // Forage State
  const [forageType, setForageType] = useState('residentiel');
  const [forageDepth, setForageDepth] = useState(70);
  const [includeWaterTower, setIncludeWaterTower] = useState(true);

  // Electrification State
  const [elecType, setElecType] = useState('pompe_solaire');
  const [powerNeed, setPowerNeed] = useState('moyen');

  // Common State
  const [location, setLocation] = useState('Abidjan - Cocody / Abatta');
  const [urgency, setUrgency] = useState('normale');

  // Price Calculation Logic in XOF (FCFA)
  const calculateEstimate = () => {
    let minPrice = 0;
    let maxPrice = 0;
    let estimatedDays = 0;
    let itemsIncluded: string[] = [];

    if (sector === 'forage') {
      // Forage pricing estimation in FCFA
      const basePerMeter = 35000; // XOF per meter
      let baseDrilling = forageDepth * basePerMeter;
      let pumpCost = forageType === 'agricole' ? 1200000 : 850000;
      let towerCost = includeWaterTower ? 1500000 : 0;

      minPrice = baseDrilling + pumpCost + towerCost;
      maxPrice = Math.round(minPrice * 1.2);
      estimatedDays = 5 + Math.round(forageDepth / 20);

      itemsIncluded = [
        `Prospection géophysique & étude de veine d'eau à ${location}`,
        `Forage rotatif/marteau fond de trou à ~${forageDepth}m`,
        `Pose de tubage PVC spécial forage anti-écrasement`,
        `Installation pompe immergée haute pression`,
        includeWaterTower ? 'Château d\'eau résine/inox 2000L à 5000L' : 'Raccordement direct pression',
        'Essai de débit & analyse de potabilisation de l\'eau'
      ];
    } else if (sector === 'btp') {
      // BTP Gros œuvre estimation per m² in FCFA
      let ratePerM2 = 120000; // base rate
      if (btpType === 'duplex') ratePerM2 = 155000;
      if (btpType === 'immeuble') ratePerM2 = 180000;
      if (btpType === 'entrepot') ratePerM2 = 95000;

      let baseBtp = btpSurface * ratePerM2;
      minPrice = baseBtp;
      maxPrice = Math.round(baseBtp * 1.15);
      estimatedDays = Math.round(30 + btpSurface / 4);

      itemsIncluded = [
        `Étude de sol géotechnique & plans de structure à ${location}`,
        `Terrassement, fouilles et fondations béton armé`,
        `Élévation des murs en agglos vibrés certifiés`,
        `Coulage des poteaux, poutres, dalles et linteaux`,
        `Gros œuvre complet conforme au code de construction CI`
      ];
    } else {
      // Electrification estimation
      if (elecType === 'pompe_solaire') {
        minPrice = 2200000;
        maxPrice = 3800000;
        estimatedDays = 7;
        itemsIncluded = [
          'Panneaux solaires monocristallins haute efficacité',
          'Variateur/Onduleur solaire pour pompe immergée',
          'Support métallique galvanisé anti-rouille',
          'Câblage sécurisé et coffret de protection foudre'
        ];
      } else if (elecType === 'eclairage_public') {
        minPrice = 1800000;
        maxPrice = 3200000;
        estimatedDays = 10;
        itemsIncluded = [
          'Lampadaires solaires LED autonomes avec détecteur',
          'Poteaux galvanisés 6m à 8m avec ancrage béton',
          'Batteries Lithium longue durée intégrées',
          'Installation et mise en service sur site'
        ];
      } else {
        minPrice = 3500000;
        maxPrice = 7500000;
        estimatedDays = 15;
        itemsIncluded = [
          'Implantation de supports béton/bois autorisés',
          'Tirage de câbles HTA/BTA et coffrets de distribution',
          'Poste de transformation & mise à la terre certifiée',
          'Dossier technique de conformité SECUREC'
        ];
      }
    }

    if (urgency === 'urgente') {
      minPrice = Math.round(minPrice * 1.1);
      maxPrice = Math.round(maxPrice * 1.1);
    }

    return { minPrice, maxPrice, estimatedDays, itemsIncluded };
  };

  const result = calculateEstimate();

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
  };

  const handleSendToWhatsApp = () => {
    const messageText = `Bonjour BEIDY SERVICES CÔTE D'IVOIRE,\nJe souhaite valider une estimation de devis en ligne :\n- Domaine : ${sector.toUpperCase()}\n- Localisation : ${location}\n- Estimation indicative : ${formatPrice(result.minPrice)} à ${formatPrice(result.maxPrice)}\n- Délai estimé : ${result.estimatedDays} jours\nMerci de me recontacter rapidement au plus vite.`;
    const url = `https://wa.me/2250707172596?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');
  };

  const handleApplyToForm = () => {
    const summaryMsg = `Demande de devis issue du calculateur en ligne BEIDY SERVICES :\n- Domaine: ${sector.toUpperCase()}\n- Détails: Localisation ${location}, Estimation indicative: ${formatPrice(result.minPrice)} - ${formatPrice(result.maxPrice)} (${result.estimatedDays} jours d'exécution).\nMerci de m'envoyer la proposition détaillée et de me contacter.`;
    onPreFillContactForm({
      service: sector === 'btp' ? 'BTP et Gros Œuvre' : sector === 'forage' ? 'Forage d\'Eau Potable' : 'Électrification Rurale & Solaire',
      location: location,
      message: summaryMsg
    });

    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="devis-estimation" className="py-20 bg-gradient-to-b from-white via-[#F8F9FA] to-gray-100 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#EBF7F0] text-[#2E9D62] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-[#2E9D62]/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparence & Estimation Rapide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 font-serif-heading">
            Calculateur de Devis en Ligne
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Simulez instantanément le budget estimatif de vos travaux de BTP, Forage d'Eau ou Électrification Solaire en Côte d'Ivoire.
          </p>
        </div>

        {/* Main Estimator Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          
          {/* Top Sector Tabs */}
          <div className="grid grid-cols-3 bg-[#F1F5F9] border-b border-gray-200">
            <button
              onClick={() => setSector('forage')}
              className={`py-4 px-2 text-center text-xs sm:text-sm font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-2 ${
                sector === 'forage'
                  ? 'bg-white text-[#2563EB] border-t-4 border-[#2563EB] shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="w-3 h-3 rounded-full bg-[#2563EB]" />
              <span>Forage d'Eau Potable</span>
            </button>

            <button
              onClick={() => setSector('btp')}
              className={`py-4 px-2 text-center text-xs sm:text-sm font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-2 ${
                sector === 'btp'
                  ? 'bg-white text-[#2E9D62] border-t-4 border-[#2E9D62] shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="w-3 h-3 rounded-full bg-[#2E9D62]" />
              <span>BTP & Gros Œuvre</span>
            </button>

            <button
              onClick={() => setSector('electrification')}
              className={`py-4 px-2 text-center text-xs sm:text-sm font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-2 ${
                sector === 'electrification'
                  ? 'bg-white text-[#2E9D62] border-t-4 border-[#2E9D62] shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span>Électrification & Solaire</span>
            </button>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Inputs Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* FORAGE OPTIONS */}
              {sector === 'forage' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Type de Projet de Forage
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setForageType('residentiel')}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                          forageType === 'residentiel'
                            ? 'border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]'
                            : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        💧 Résidentiel / Villa
                        <span className="block text-[10px] font-normal text-gray-500 mt-1">
                          Consommation ménagère & cour
                        </span>
                      </button>
                      <button
                        onClick={() => setForageType('agricole')}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                          forageType === 'agricole'
                            ? 'border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]'
                            : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        🌾 Agricole / Industriel
                        <span className="block text-[10px] font-normal text-gray-500 mt-1">
                          Irrigation & haut débit
                        </span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Profondeur estimée : <span className="text-[#2563EB] font-black">{forageDepth} mètres</span>
                      </label>
                      <span className="text-[10px] text-gray-500">(Moyenne CI: 60m - 90m)</span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="130"
                      step="5"
                      value={forageDepth}
                      onChange={(e) => setForageDepth(Number(e.target.value))}
                      className="w-full accent-[#2563EB] cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-200">
                    <input
                      type="checkbox"
                      id="towerCheck"
                      checked={includeWaterTower}
                      onChange={(e) => setIncludeWaterTower(e.target.checked)}
                      className="w-4 h-4 text-[#2563EB] rounded focus:ring-[#2563EB]"
                    />
                    <label htmlFor="towerCheck" className="text-xs font-bold text-gray-800 cursor-pointer">
                      Inclure un château d'eau / réservoir de stockage élevé (Inox/Résine)
                    </label>
                  </div>
                </div>
              )}

              {/* BTP OPTIONS */}
              {sector === 'btp' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Type de Bâtiment
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setBtpType('villa')}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                          btpType === 'villa'
                            ? 'border-[#2E9D62] bg-[#EBF7F0] text-[#2E9D62]'
                            : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        🏡 Villa Basse
                      </button>
                      <button
                        onClick={() => setBtpType('duplex')}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                          btpType === 'duplex'
                            ? 'border-[#2E9D62] bg-[#EBF7F0] text-[#2E9D62]'
                            : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        🏰 Villa Duplex R+1
                      </button>
                      <button
                        onClick={() => setBtpType('immeuble')}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                          btpType === 'immeuble'
                            ? 'border-[#2E9D62] bg-[#EBF7F0] text-[#2E9D62]'
                            : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        🏢 Immeuble R+2 à R+5
                      </button>
                      <button
                        onClick={() => setBtpType('entrepot')}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                          btpType === 'entrepot'
                            ? 'border-[#2E9D62] bg-[#EBF7F0] text-[#2E9D62]'
                            : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        🏭 Entrepôt / Magasin
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Surface Couverte : <span className="text-[#2E9D62] font-black">{btpSurface} m²</span>
                      </label>
                    </div>
                    <input
                      type="range"
                      min="60"
                      max="600"
                      step="10"
                      value={btpSurface}
                      onChange={(e) => setBtpSurface(Number(e.target.value))}
                      className="w-full accent-[#2E9D62] cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* ELECTRIFICATION OPTIONS */}
              {sector === 'electrification' && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Besoin Électrique
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        onClick={() => setElecType('pompe_solaire')}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                          elecType === 'pompe_solaire'
                            ? 'border-[#2E9D62] bg-[#EBF7F0] text-[#2E9D62]'
                            : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        ☀️ Pompage Solaire
                      </button>
                      <button
                        onClick={() => setElecType('eclairage_public')}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                          elecType === 'eclairage_public'
                            ? 'border-[#2E9D62] bg-[#EBF7F0] text-[#2E9D62]'
                            : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        💡 Éclairage Public Solaire
                      </button>
                      <button
                        onClick={() => setElecType('reseau_electrique')}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                          elecType === 'reseau_electrique'
                            ? 'border-[#2E9D62] bg-[#EBF7F0] text-[#2E9D62]'
                            : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        ⚡ Extension Réseau HTA/BTA
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Location Select */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Localisation du Chantier en Côte d'Ivoire
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 text-sm font-semibold bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2E9D62]"
                >
                  <option value="Abidjan - Cocody / Abatta">Abidjan - Cocody / Abatta & environs</option>
                  <option value="Abidjan - Bingerville / Riviera">Abidjan - Bingerville / Riviera</option>
                  <option value="Abidjan - Yopougon / Songon">Abidjan - Yopougon / Songon</option>
                  <option value="Yamoussoukro">Yamoussoukro</option>
                  <option value="Bouaké">Bouaké</option>
                  <option value="San Pédro / Bas-Sassandra">San Pédro / Bas-Sassandra</option>
                  <option value="Korhogo / Nord CI">Korhogo / Nord Côte d'Ivoire</option>
                  <option value="Autre commune à l'intérieur du pays">Autre commune à l'intérieur du pays</option>
                </select>
              </div>

            </div>

            {/* Right Output Panel (5 Cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#111827] to-[#1F2937] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden">
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                    Estimation Indicative HT
                  </span>
                  <span className="text-[10px] bg-white/10 px-2.5 py-1 rounded-full text-gray-300">
                    Délai: ~{result.estimatedDays} jours
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-2xl sm:text-3xl font-black font-serif-heading text-white">
                    {formatPrice(result.minPrice)}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Plage estimée jusqu'à <span className="text-emerald-300 font-bold">{formatPrice(result.maxPrice)}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Inclus dans cette estimation :
                  </p>
                  {result.itemsIncluded.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 relative z-10 pt-4 border-t border-white/10">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <MessageSquare className="w-4 h-4 text-blue-200" />
                  <span>Envoyer l'estimation sur WhatsApp</span>
                </button>

                <button
                  onClick={handleApplyToForm}
                  className="w-full bg-[#2E9D62] hover:bg-[#1F7A4A] text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <Send className="w-4 h-4 text-emerald-200" />
                  <span>Reporter dans le formulaire de contact</span>
                </button>

                <p className="text-[10px] text-gray-400 text-center leading-tight">
                  *Chiffrage indicatif sous réserve de visite technique préalable sur votre terrain.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

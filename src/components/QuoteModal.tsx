import React, { useState } from 'react';
import { X, Send, Phone, FileText, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'BTP et Gros Œuvre'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: initialCategory,
    location: 'Abidjan (Cocody / Abatta)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-gray-200 relative overflow-hidden">
        
        {/* Modal Header Bar */}
        <div className="bg-[#111827] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white bg-white/10 p-2 rounded-full transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <FileText className="w-4 h-4" />
            <span>BEIDY SERVICES CÔTE D'IVOIRE</span>
          </div>
          <h3 className="text-2xl font-black font-serif-heading">Demande de Devis Gratuit</h3>
          <p className="text-xs text-gray-300 mt-1">Réponse rapide garantie par notre équipe technique sous 24h.</p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-16 h-16 bg-[#2E9D62] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif-heading text-2xl font-bold text-gray-900">
                Demande Reçue !
              </h4>
              <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                Merci M./Mme <span className="font-bold text-gray-900">{formData.fullName}</span>. Notre service client vous recontactera très rapidement au <span className="font-bold text-[#2563EB]">{formData.phone}</span>.
              </p>
              <div className="pt-2 flex gap-3 justify-center">
                <a
                  href={`https://wa.me/2250707172596?text=Bonjour%20BEIDY%20SERVICES,%20je%20souhaite%20un%20devis%20pour%20${encodeURIComponent(formData.service)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2563EB] text-white font-bold text-xs px-5 py-3 rounded-xl hover:bg-[#1D4ED8] transition-colors"
                >
                  Envoyer via WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="bg-gray-200 text-gray-800 font-bold text-xs px-5 py-3 rounded-xl hover:bg-gray-300 transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Nom & Prénoms *
                </label>
                <input
                  type="text"
                  required
                  placeholder="M. Konan Jean"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full p-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2E9D62] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Téléphone (CI) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="07 07 17 25 96"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2E9D62] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Service Requis *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full p-3 rounded-xl border border-gray-300 text-sm font-semibold focus:ring-2 focus:ring-[#2E9D62] focus:outline-none bg-white text-gray-800"
                  >
                    <option value="BTP et Gros Œuvre">BTP & Gros Œuvre</option>
                    <option value="Forage d'Eau Potable">Forage d'Eau Potable</option>
                    <option value="Import-Export & Logistique">Import-Export & Logistique</option>
                    <option value="Offre Globale Combinée">Offre Globale Combinée</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Localisation du projet
                </label>
                <input
                  type="text"
                  placeholder="Ex: Cocody Abatta, Yamoussoukro, Bouaké..."
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2E9D62] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Précisions / Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Villa duplex, forage 70m, installation solaire..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#2E9D62] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4 text-blue-200" />
                  <span>Envoyer ma Demande de Devis</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

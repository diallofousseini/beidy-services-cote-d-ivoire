import React, { useState } from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, Clock, Globe, ShieldCheck } from 'lucide-react';

interface ContactFooterProps {
  preFilledData?: { service: string; location: string; message: string } | null;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ preFilledData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: preFilledData?.service || 'BTP et Gros Œuvre',
    location: preFilledData?.location || 'Abidjan - Cocody / Abatta',
    message: preFilledData?.message || ''
  });

  React.useEffect(() => {
    if (preFilledData) {
      setFormData((prev) => ({
        ...prev,
        service: preFilledData.service || prev.service,
        location: preFilledData.location || prev.location,
        message: preFilledData.message || prev.message
      }));
    }
  }, [preFilledData]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto scroll or reset after delay
    }, 5000);
  };

  return (
    <footer id="contact" className="bg-[#111827] text-white pt-20 pb-12 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2E9D62]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1F7A4A] text-emerald-100 font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-emerald-500/30">
            <Mail className="w-3.5 h-3.5 text-emerald-300" />
            <span>Disponible 6j/7 pour vos Chantiers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif-heading">
            Contactez BEIDY SERVICES
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            Demandez votre devis gratuit personnalisé ou sollicitez une visite technique sur votre terrain à Abidjan et partout en Côte d'Ivoire.
          </p>
        </div>

        {/* Contact Section Grid: 50% Form / 50% Info & Location Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-white text-gray-900 p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-200">
            
            <h3 className="font-serif-heading text-2xl font-black text-gray-900 mb-2">
              Formulaire de Demande de Devis
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Remplissez les informations ci-dessous. Notre équipe technique vous recontacte sous 24h.
            </p>

            {submitted ? (
              <div className="bg-[#EBF7F0] border-2 border-[#2E9D62] p-8 rounded-2xl text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-[#2E9D62] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif-heading text-2xl font-bold text-[#1F7A4A]">
                  Demande Envoyée avec Succès !
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed max-w-md mx-auto">
                  Merci <span className="font-bold text-gray-900">{formData.fullName || 'cher client'}</span>. Notre direction technique de <span className="font-bold text-[#2E9D62]">BEIDY SERVICES</span> traite votre demande pour le projet <span className="font-bold">{formData.service}</span>.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/2250707172596?text=Bonjour%20BEIDY%20SERVICES,%20je%20viens%20de%20soumettre%20une%20demande%20de%20devis%20pour%20${encodeURIComponent(formData.service)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1D4ED8] transition-colors text-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirmer directement sur WhatsApp</span>
                  </a>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="block text-xs font-bold text-gray-500 underline mx-auto mt-4"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Nom & Prénoms *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="M. Koffi Kouassi"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9D62] bg-gray-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Téléphone (Côte d'Ivoire) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="07 07 17 25 96"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9D62] bg-gray-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Professionnel / Personnel
                    </label>
                    <input
                      type="email"
                      placeholder="exemple@domaine.ci"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9D62] bg-gray-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Service Requis *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-gray-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#2E9D62] bg-white text-gray-800"
                    >
                      <option value="BTP et Gros Œuvre">BTP & Gros Œuvre (Construction / Rénovation)</option>
                      <option value="Forage d'Eau Potable">Forage d'Eau Potable & Équipement</option>
                      <option value="Électrification Rurale & Solaire">Électrification Rurale & Solutions Solaires</option>
                      <option value="Projet Combiné (BTP + Forage + Énergie)">Projet Global Combiné (BTP + Forage + Solaire)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Localisation du Projet en Côte d'Ivoire
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Cocody Abatta, Bingerville, Yamoussoukro..."
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full p-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9D62] bg-gray-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Détails ou Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Décrivez brièvement votre projet (dimensions, accès au site, budget envisagé)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9D62] bg-gray-50/50"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-5 h-5 text-blue-200" />
                    <span>Envoyer la Demande de Devis</span>
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Right Direct Contact Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Badge Callout */}
            <div className="bg-gradient-to-r from-[#2E9D62] to-[#1F7A4A] p-6 rounded-3xl text-white shadow-xl border border-green-400/30">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-200 block mb-1">
                Ligne Directe Service Client & Urgences
              </span>
              <a
                href="tel:0707172596"
                className="text-2xl sm:text-3xl font-black font-serif-heading hover:text-emerald-200 transition-colors flex items-center gap-3"
              >
                <Phone className="w-8 h-8 text-white animate-bounce" />
                <span>07 07 17 25 96</span>
              </a>
              <p className="text-xs text-emerald-100 mt-2">
                Joignable de 07h30 à 18h30 pour toute assistance technique immédiate.
              </p>
            </div>

            {/* Geographical Location Card */}
            <div className="bg-[#1F2937] p-6 rounded-3xl border border-gray-800 space-y-4">
              <h4 className="font-bold text-white text-lg font-serif-heading flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#2E9D62]" />
                <span>Localisation du Siège Social</span>
              </h4>

              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2E9D62] mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block">Adresse Geographique :</strong>
                    Cocody / Abatta - Abidjan, Côte d'Ivoire
                    <span className="block text-xs text-gray-400 italic">(Non loin du carrefour Abatta)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block">Directeur Général :</strong>
                    M. Hassane BARRY
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2E9D62] mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block">Zone d'Intervention :</strong>
                    Abidjan & Toutes les régions de la Côte d'Ivoire
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href="https://wa.me/2250707172596?text=Bonjour%20BEIDY%20SERVICES,%20je%20souhaite%20un%20rendez-vous%20ou%20un%20devis."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-blue-200" />
                  <span>Discuter directement sur WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="bg-[#1F2937] p-6 rounded-3xl border border-gray-800 space-y-3 text-xs text-gray-300">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-5 h-5" />
                <span>Nos Engagements Contractuels</span>
              </div>
              <p className="leading-relaxed">
                Tous nos travaux de BTP, de Forage d'eau et d'Électrification Solaire sont assortis de garanties d'exécution, d'essais de conformité et d'un service après-vente dédié.
              </p>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Logo variant="compact" />
          </div>

          <div className="text-xs text-gray-400 text-center md:text-left space-y-1">
            <p>© {new Date().getFullYear()} BEIDY SERVICES CÔTE D'IVOIRE. Tous droits réservés.</p>
            <p className="text-[11px] text-gray-500">
              Société spécialisée en BTP, Gros Œuvre, Forage d'Eau Potable & Électrification Rurale.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 text-xs font-bold text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Facebook</a>
            <span>•</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
            <span>•</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Instagram</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

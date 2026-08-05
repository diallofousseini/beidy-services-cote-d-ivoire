import React, { useState } from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, ShieldCheck, ChevronRight, Navigation } from 'lucide-react';

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
  };

  const footerLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À Propos de l\'Entreprise', href: '#a-propos' },
    { name: 'Nos Services & Expertises', href: '#services' },
    { name: 'Projets & Réalisations', href: '#realisations' },
    { name: 'Offres d\'Emploi & Recrutement', href: '#offres-emploi' },
    { name: 'Contact & Visite de Chantier', href: '#contact' },
  ];

  return (
    <>
      {/* Clean White Contact Section */}
      <section id="contact" className="bg-white text-gray-900 py-16 sm:py-24 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Title */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 font-serif-heading tracking-tight">
              Parlons de votre projet
            </h2>
          </div>

          {/* 2-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            
            {/* Colonne Gauche : Google Maps Interactive */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md flex flex-col justify-between h-full min-h-[460px]">
              <div className="mb-4">
                <h3 className="font-serif-heading text-xl font-extrabold text-gray-900 flex items-center gap-2 mb-1">
                  <MapPin className="w-5 h-5 text-[#2E9D62]" />
                  <span>Localisation du Siège Social</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Cocody / Abatta (près du carrefour Abatta), Abidjan, Côte d'Ivoire
                </p>
              </div>

              {/* Interactive Google Map Iframe */}
              <div className="flex-1 w-full min-h-[360px] rounded-2xl overflow-hidden shadow-sm border border-gray-200 relative">
                <iframe
                  title="Localisation BEIDY SERVICES Abidjan Cocody Abatta"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15888.654874409395!2d-3.9554000!3d5.3620000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjEnNDMuMiJOIDPCsDU3JzE5LjQiVw!5e0!3m2!1sfr!2sci!4v1700000000000!5m2!1sfr!2sci"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[360px] rounded-2xl"
                />
              </div>
            </div>

            {/* Colonne Droite : Formulaire de Contact */}
            <div className="bg-gray-50/70 p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md flex flex-col justify-between">
              {submitted ? (
                <div className="bg-[#EBF7F0] border-2 border-[#2E9D62] p-8 rounded-2xl text-center space-y-4 my-auto">
                  <div className="w-14 h-14 bg-[#2E9D62] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-heading text-2xl font-bold text-[#1F7A4A]">
                    Message Envoyé avec Succès !
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed max-w-md mx-auto">
                    Merci <span className="font-bold text-gray-900">{formData.fullName || 'cher client'}</span>. Notre équipe technique prend en charge votre message et vous recontactera très rapidement.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="block text-xs font-bold text-[#2563EB] hover:underline mx-auto mt-4"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 my-auto">
                  {/* Nom & Prénom */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom et prénom"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9D62] focus:border-[#2E9D62] bg-white text-gray-900 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="votre.email@exemple.ci"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9D62] focus:border-[#2E9D62] bg-white text-gray-900 transition-all"
                    />
                  </div>

                  {/* Objet */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Objet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Objet de votre message"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9D62] focus:border-[#2E9D62] bg-white text-gray-900 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Votre message ou détails sur votre projet..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9D62] focus:border-[#2E9D62] bg-white text-gray-900 transition-all"
                    />
                  </div>

                  {/* Bouton Envoyer */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Send className="w-5 h-5 text-blue-200" />
                      <span>Envoyer</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Dark Footer Container */}
      <footer className="bg-[#111827] text-white pt-12 pb-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Redesigned 4-Column Footer */}
        <div className="pt-12 pb-10 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm text-gray-300">
          
          {/* Colonne 1 : Branding */}
          <div className="space-y-4">
            <a href="#accueil" className="inline-block">
              <Logo variant="white" />
            </a>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              BEIDY SERVICES CÔTE D'IVOIRE est une entreprise majeure spécialisée en BTP & Gros Œuvre, Forage d'eau potable et Électrification rurale. Nous concrétisons vos projets avec rigueur, sécurité et durabilité.
            </p>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-base font-serif-heading border-b border-[#2E9D62]/40 pb-2 inline-block">
              Liens rapides
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <a href="#accueil" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 text-[#2E9D62] group-hover:translate-x-1 transition-transform" />
                  <span>Accueil</span>
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 text-[#2E9D62] group-hover:translate-x-1 transition-transform" />
                  <span>À Propos</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 text-[#2E9D62] group-hover:translate-x-1 transition-transform" />
                  <span>Nos services</span>
                </a>
              </li>
              <li>
                <a href="#realisations" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 text-[#2E9D62] group-hover:translate-x-1 transition-transform" />
                  <span>Projets</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-4 h-4 text-[#2E9D62] group-hover:translate-x-1 transition-transform" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Nous contacter */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-base font-serif-heading border-b border-[#2E9D62]/40 pb-2 inline-block">
              Nous contacter
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2E9D62] shrink-0 mt-0.5" />
                <span>Cocody / Abatta (près du carrefour Abatta), Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2563EB] shrink-0" />
                <a href="mailto:contact@beidyservices.ci" className="hover:text-white transition-colors">
                  contact@beidyservices.ci
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#2E9D62] shrink-0" />
                <a href="tel:0707172596" className="hover:text-emerald-400 transition-colors font-bold text-white">
                  +225 07 07 17 25 96
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Suivez-nous */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-base font-serif-heading border-b border-[#2E9D62]/40 pb-2 inline-block">
              Suivez-nous
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Rejoignez-nous sur les réseaux sociaux pour suivre le déroulement de nos chantiers en direct.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {/* Facebook Button */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook BEIDY SERVICES"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 border border-white/15 group"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn BEIDY SERVICES"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 border border-white/15 group"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/2250707172596"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp BEIDY SERVICES"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 border border-white/15 group"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Copyright Bar */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} BEIDY SERVICES CÔTE D'IVOIRE. Tous droits réservés.</p>
          <p className="text-[11px] text-gray-500">
            Société agréée en BTP, Gros Œuvre, Forage d'Eau Potable & Électrification Rurale.
          </p>
        </div>

      </div>
    </footer>
  );
};

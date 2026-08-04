import React, { useState } from 'react';
import { Briefcase, UserCheck, Send, CheckCircle2, Award, Clock, MapPin, Building2 } from 'lucide-react';

export const CareersSection: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPosition, setApplicantPosition] = useState('Candidature Spontanée');
  const [applicantMessage, setApplicantMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const jobOffers = [
    {
      id: 'job-1',
      title: 'Conducteur de Travaux BTP & Génie Civil',
      department: 'Pôle Construction',
      location: 'Abidjan & Chantiers Intérieurs',
      type: 'CDI - Plein temps',
      experience: '3 à 5 ans minimum',
      description: 'Supervision technique et organisationnelle des chantiers de gros œuvre, gestion des équipes terrain, suivi du planning et du respect des normes de sécurité.'
    },
    {
      id: 'job-2',
      title: 'Technicien Supérieur Foreur & Hydrogéologue',
      department: 'Pôle Hydraulique & Forage',
      location: 'Côte d’Ivoire (Missions terrain)',
      type: 'CDI / CDD',
      experience: '2 ans d’expérience',
      description: 'Conduite des opérations de forage d’eau potable, diagraphie, essai de pompage, installation des pompes immergées et pose de réservoirs.'
    },
    {
      id: 'job-3',
      title: 'Électricien Réseau & Spécialiste Solaire',
      department: 'Pôle Électrification & Énergie',
      location: 'Abidjan / Régions',
      type: 'CDI - Plein temps',
      experience: '2 ans minimum',
      description: 'Montage des réseaux électriques HTA/BTA, pose d’éclairage public solaire autonome et raccordement de centrales photovoltaïques.'
    },
    {
      id: 'job-4',
      title: 'Candidature Spontanée / Stagiaire BTP & Hydraulique',
      department: 'Direction des Ressources Humaines',
      location: 'Siège Social Cocody Abatta',
      type: 'Stage / Emploi',
      experience: 'Tous niveaux',
      description: 'Vous souhaitez rejoindre une entreprise dynamique en pleine expansion en Côte d’Ivoire ? Transmettez-nous votre profil et vos compétences.'
    }
  ];

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setApplicantPosition(jobTitle);
    const element = document.getElementById('formulaire-recrutement');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="offres-emploi" className="py-20 bg-gray-50 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EBF7F0] text-[#2E9D62] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-[#2E9D62]/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Recrutement & Carrières</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 font-serif-heading">
            Offres d'Emploi & Opportunités
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            Rejoignez l'équipe de <strong className="text-gray-900">BEIDY SERVICES CÔTE D'IVOIRE</strong> et participez à la réalisation des grands projets de BTP, de forage d'eau potable et d'électrification à travers tout le pays.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {jobOffers.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="bg-[#EFF6FF] text-[#2563EB] font-bold text-xs px-3 py-1 rounded-full border border-[#2563EB]/20">
                    {job.department}
                  </span>
                  <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#2E9D62]" />
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-serif-heading text-gray-900 mb-2">
                  {job.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-gray-700">
                    <Award className="w-3.5 h-3.5 text-yellow-600" />
                    {job.experience}
                  </span>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {job.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">Référence : {job.id.toUpperCase()}</span>
                <button
                  onClick={() => handleApplyClick(job.title)}
                  className="bg-[#2E9D62] hover:bg-[#1F7A4A] text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Postuler</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form Box */}
        <div id="formulaire-recrutement" className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-xl max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black font-serif-heading text-gray-900">
              Formulaire de Candidature
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Postulez directement à une offre ou envoyez une candidature spontanée à la Direction de BEIDY SERVICES.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#EBF7F0] border-2 border-[#2E9D62] p-8 rounded-2xl text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-[#2E9D62] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif-heading text-xl font-bold text-[#1F7A4A]">
                Candidature Transmise avec Succès !
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Merci <span className="font-bold text-gray-900">{applicantName}</span>. Votre dossier de candidature pour le poste de <span className="font-bold text-[#2563EB]">{applicantPosition}</span> a bien été transmis à la Direction des Ressources Humaines de BEIDY SERVICES CÔTE D'IVOIRE.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/2250707172596?text=${encodeURIComponent(`Bonjour BEIDY SERVICES, je soumets ma candidature pour le poste : ${applicantPosition}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#2563EB] text-white font-bold px-5 py-2.5 rounded-xl text-xs hover:bg-[#1D4ED8] transition-colors shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirmer la candidature via WhatsApp</span>
                </a>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="block text-xs font-semibold text-gray-500 underline mx-auto mt-4"
              >
                Soumettre un autre dossier
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitApplication} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Nom & Prénoms *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Yao Kouamé"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9D62] bg-gray-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Téléphone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="07 07 17 25 96"
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9D62] bg-gray-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="candidat@email.com"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9D62] bg-gray-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Poste Cible / Intitulé *
                  </label>
                  <select
                    value={applicantPosition}
                    onChange={(e) => setApplicantPosition(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-gray-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2E9D62] bg-white text-gray-800"
                  >
                    <option value="Conducteur de Travaux BTP & Génie Civil">Conducteur de Travaux BTP & Génie Civil</option>
                    <option value="Technicien Supérieur Foreur & Hydrogéologue">Technicien Supérieur Foreur & Hydrogéologue</option>
                    <option value="Électricien Réseau & Spécialiste Solaire">Électricien Réseau & Spécialiste Solaire</option>
                    <option value="Candidature Spontanée">Candidature Spontanée (Tout domaine)</option>
                    <option value="Stage Pratique / PFE">Stage Pratique / Stage de Perfectionnement</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Présentation Synthétique & Expériences
                </label>
                <textarea
                  rows={4}
                  placeholder="Décrivez brièvement vos diplômes, compétences clés et disponibilités..."
                  value={applicantMessage}
                  onChange={(e) => setApplicantMessage(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9D62] bg-gray-50/50"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4 text-blue-200" />
                  <span>Envoyer ma Candidature à BEIDY SERVICES</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { DirectorMessage } from './components/DirectorMessage';
import { ValuesSection } from './components/ValuesSection';
import { PortfolioProjects } from './components/PortfolioProjects';
import { AboutSection } from './components/AboutSection';
import { CareersSection } from './components/CareersSection';
import { ContactFooter } from './components/ContactFooter';
import { QuoteModal } from './components/QuoteModal';
import { FloatingActions } from './components/FloatingActions';
import { Breadcrumb } from './components/Breadcrumb';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedModalCategory, setSelectedModalCategory] = useState('BTP et Gros Œuvre');
  const [contactPreFill, setContactPreFill] = useState<{
    service: string;
    location: string;
    message: string;
  } | null>(null);

  const handleOpenQuoteModal = (category?: string) => {
    if (category) {
      if (category === 'btp') setSelectedModalCategory('BTP et Gros Œuvre');
      else if (category === 'forage') setSelectedModalCategory('Forage d\'Eau Potable');
      else if (category === 'electrification') setSelectedModalCategory('Électrification Rurale & Solaire');
      else setSelectedModalCategory(category);
    } else {
      setSelectedModalCategory('BTP et Gros Œuvre');
    }
    setIsQuoteModalOpen(true);
  };

  const handlePreFillContact = (data: { service: string; location: string; message: string }) => {
    setContactPreFill(data);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans antialiased selection:bg-[#2E9D62] selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Structured SEO Breadcrumb Navigation Bar */}
      <div className="pt-24 sm:pt-28">
        <Breadcrumb />
      </div>

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero Carousel / Showcase */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section 2: À Propos */}
        <AboutSection />

        {/* Section 3: Nos Domaines d'Expertise */}
        <ServicesSection
          onSelectServiceForQuote={(cat) => handleOpenQuoteModal(cat)}
        />

        {/* Section 4: Le Mot du Directeur Général (M. Hassane Barry) */}
        <DirectorMessage />

        {/* Section 5: Nos Valeurs & Engagements */}
        <ValuesSection />

        {/* Section 6: Nos Réalisations en Côte d'Ivoire (Projets) */}
        <PortfolioProjects />

        {/* Section 7: Offres d'emploi & Carrières (Recrutement) */}
        <CareersSection />

        {/* Section 9: Formulaire de Contact & Footer */}
        <ContactFooter preFilledData={contactPreFill} />
      </main>

      {/* Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialCategory={selectedModalCategory}
      />

      {/* Speed Dial / Floating WhatsApp & Phone Bar */}
      <FloatingActions onOpenQuoteModal={() => handleOpenQuoteModal()} />
    </div>
  );
}

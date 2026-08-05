import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À Propos', href: '#a-propos' },
    { name: 'Services BTP & Forage', href: '#services' },
    { name: 'Projets & Réalisations', href: '#realisations' },
    { name: 'Contact & Devis', href: '#contact' },
  ]
}) => {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="bg-[#111827] text-white py-3 px-4 border-b border-white/10 text-xs shadow-inner"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2">
        <a
          href="#accueil"
          className="flex items-center gap-1 text-gray-300 hover:text-emerald-400 font-semibold transition-colors"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Home className="w-3.5 h-3.5 text-emerald-400" />
          <span itemProp="name">BEIDY SERVICES</span>
          <meta itemProp="position" content="1" />
        </a>

        {items.map((item, index) => (
          <React.Fragment key={item.name}>
            <ChevronRight className="w-3 h-3 text-gray-500 shrink-0" />
            <a
              href={item.href}
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span itemProp="name">{item.name}</span>
              <meta itemProp="position" content={(index + 2).toString()} />
            </a>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

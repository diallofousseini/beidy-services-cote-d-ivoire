import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'white';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '' }) => {
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/images/logo_1_1_full_visible.jpg"
          alt="BEIDY SERVICES CÔTE D'IVOIRE"
          className="h-10 sm:h-12 w-auto object-contain rounded-lg shadow-sm hover:opacity-95 transition-opacity"
        />
      </div>
    );
  }

  if (variant === 'white') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/images/logo_1_1_full_visible.jpg"
          alt="BEIDY SERVICES CÔTE D'IVOIRE"
          className="h-12 sm:h-14 w-auto object-contain rounded-lg shadow-md bg-white p-1 hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/images/logo_1_1_full_visible.jpg"
        alt="BEIDY SERVICES CÔTE D'IVOIRE"
        className="h-12 sm:h-16 w-auto object-contain rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
      />
    </div>
  );
};

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
          src="/images/Vrailogo.png"
          alt="BEIDY SERVICES CÔTE D'IVOIRE"
          className="h-10 sm:h-12 lg:h-14 w-auto object-contain hover:opacity-95 transition-opacity"
        />
      </div>
    );
  }

  if (variant === 'white') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/images/Vrailogo.png"
          alt="BEIDY SERVICES CÔTE D'IVOIRE"
          className="h-24 sm:h-28 lg:h-32 w-auto object-contain bg-white/95 p-2 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/images/Vrailogo.png"
        alt="BEIDY SERVICES CÔTE D'IVOIRE"
        className="h-12 sm:h-16 w-auto object-contain hover:scale-[1.02] transition-transform duration-300"
      />
    </div>
  );
};

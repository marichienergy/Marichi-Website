import React from 'react';
import marichiLogoImg from '../assets/images/MARICHI.png';

interface MarichiLogoProps {
  className?: string;
  variant?: 'full' | 'symbol' | 'compact';
  isDarkBackground?: boolean;
}

export const MarichiLogo: React.FC<MarichiLogoProps> = ({
  className = 'h-12 sm:h-14 md:h-[58px]',
  isDarkBackground = false,
}) => {
  if (isDarkBackground) {
    return (
      <div className="inline-flex items-center bg-white rounded-xl px-3.5 py-1.5 shadow-sm border border-white/20 hover:bg-white/95 transition-colors">
        <img
          src={marichiLogoImg}
          alt="Marichi Energy"
          className={`${className} w-auto object-contain select-none`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div className="inline-flex items-center">
      <img
        src={marichiLogoImg}
        alt="Marichi Energy"
        className={`${className} w-auto object-contain select-none`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

import React from 'react';
import iitLogo from '../assets/images/IIT.png';
import msmeLogo from '../assets/images/MSME.png';
import dpiitLogo from '../assets/images/DPIIT.png';
import miiLogo from '../assets/images/MII.jpeg';

export const Partners: React.FC = () => {
  const partners = [
    {
      name: 'IIT Madras Incubation Cell',
      category: 'Deep-Tech Incubation',
      image: iitLogo,
      alt: 'IIT Madras Incubation Cell',
      imgClass: 'max-h-24 sm:max-h-28 w-auto max-w-[85%] object-contain',
    },
    {
      name: 'Ministry of MSME',
      category: 'Govt. of India',
      image: msmeLogo,
      alt: 'Ministry of Micro, Small and Medium Enterprises',
      imgClass: 'max-h-20 sm:max-h-24 w-auto max-w-[92%] object-contain',
    },
    {
      name: 'DPIIT #StartupIndia',
      category: 'Dept. for Promotion of Industry & Internal Trade',
      image: dpiitLogo,
      alt: 'DPIIT Startup India',
      imgClass: 'max-h-20 sm:max-h-24 w-auto max-w-[90%] object-contain',
    },
    {
      name: 'Make in India',
      category: 'National Initiative',
      image: miiLogo,
      alt: 'Make In India',
      imgClass: 'max-h-18 sm:max-h-22 w-auto max-w-[92%] object-contain',
    },
  ];

  return (
    <section id="partners" className="py-10 sm:py-12 bg-white border-y border-[#14171F]/5 relative">
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        
        {/* Section Header Label */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5A5F6B] flex items-center justify-center gap-3">
            <span className="w-10 h-[1px] bg-[#14171F]/15" />
            RECOGNIZED & SUPPORTED BY
            <span className="w-10 h-[1px] bg-[#14171F]/15" />
          </span>
        </div>

        {/* 4 Partner Logos Grid - Increased Size and Unified Baseline Alignment */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-8 items-stretch justify-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-between p-5 sm:p-6 rounded-2xl bg-white border border-[#14171F]/10 hover:border-[#F5A623]/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_25px_rgba(245,166,35,0.12)] hover:-translate-y-1 transition-all duration-300 group min-h-[190px] sm:min-h-[220px]"
            >
              {/* Image Compartment: Balanced, centered, enlarged */}
              <div className="w-full flex-1 flex items-center justify-center p-2">
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className={`${partner.imgClass} filter group-hover:scale-105 transition-transform duration-300`}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & Category: Evenly pinned to bottom */}
              <div className="w-full pt-3 border-t border-[#14171F]/5 text-center">
                <span className="text-xs sm:text-sm font-bold text-[#1A1A1A] group-hover:text-[#F5A623] transition-colors line-clamp-1 block">
                  {partner.name}
                </span>
                <span className="text-[11px] text-[#5A5F6B] font-medium block mt-0.5 line-clamp-1">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

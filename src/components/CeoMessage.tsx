import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import vivekPortrait from '../assets/images/Vivek.png';

export const CeoMessage: React.FC = () => {
  return (
    <section id="ceo-message" className="py-10 sm:py-14 bg-[#FDFBF7] border-y border-[#F5A623]/20 relative overflow-hidden">
      {/* Subtle warm decorative background glow */}
      <div className="absolute -top-24 right-1/4 w-80 h-80 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-80 h-80 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative">
        
        {/* Section Eyebrow */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F5A623] inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
            FOUNDER'S VISION
          </span>
        </div>

        {/* Editorial Quote Card */}
        <div className="relative rounded-3xl bg-white p-6 sm:p-10 lg:p-12 shadow-[0_16px_50px_rgba(245,166,35,0.08)] border border-[#F5A623]/25 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          
          {/* Founder Photo framed with gold ring */}
          <div className="shrink-0 relative">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-[#F5A623] to-[#FFC94A] shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-white">
                <img
                  src={vivekPortrait}
                  alt="Vivek Agarwal, Founder & CEO of Marichi Energy"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* XLRI-Jamshedpur Badge Tag */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full bg-[#14171F] text-[#F5A623] text-[11px] font-bold tracking-wide shadow-md border border-white/20">
              Alumni, XLRI-Jamshedpur
            </div>
          </div>

          {/* Quote Body */}
          <div className="flex-1 text-center md:text-left">
            {/* Large Stylized Gold Quotation Mark */}
            <div className="text-[#F5A623] opacity-80 mb-3 flex justify-center md:justify-start">
              <Quote className="w-12 h-12 rotate-180 fill-[#F5A623]/15 text-[#F5A623]" />
            </div>

            <blockquote className="text-xl sm:text-2xl font-medium text-[#1A1A1A] leading-snug tracking-tight mb-6 italic">
              "India’s clean energy transition shouldn't be confined to large-scale solar parks hundreds of kilometers away. 
              By enabling rooftop solar owners to sell their surplus directly to nearby neighbors over open digital rails, 
              we unlock fair value for prosumers, provide cheaper green power for consumers, and build a truly resilient, 
              decentralized grid."
            </blockquote>

            <div className="pt-4 border-t border-[#14171F]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] tracking-tight">
                  Vivek Agarwal
                </h4>
                <p className="text-xs sm:text-sm text-[#5A5F6B] font-medium">
                  Founder & CEO, Marichi Energy Solutions Pvt. Ltd.
                </p>
              </div>

              {/* Signature-style text representation */}
              <div className="font-serif italic text-xl tracking-wider text-[#F5A623] opacity-90 select-none">
                ~ Vivek Agarwal
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

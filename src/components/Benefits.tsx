import React from 'react';
import { 
  TrendingUp, 
  PiggyBank, 
  Cpu, 
  Sun, 
  Zap, 
  ShieldCheck, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import { BENEFITS_DATA } from '../data';

interface BenefitsProps {
  onOpenWaitlist: (role?: string) => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onOpenWaitlist }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#14171F]" />;
      case 'PiggyBank': return <PiggyBank className="w-5 h-5 text-[#14171F]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#14171F]" />;
      case 'Sun': return <Sun className="w-5 h-5 text-[#14171F]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#14171F]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#14171F]" />;
      default: return <Zap className="w-5 h-5 text-[#14171F]" />;
    }
  };

  return (
    <section id="benefits" className="py-10 sm:py-14 bg-[#FAF9F6] relative">
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F5A623] block mb-2">
            BENEFITS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            One Platform,{' '}
            <span className="text-[#F5A623]">Real Value</span> for Everyone.
          </h2>
          <p className="text-base sm:text-lg text-[#5A5F6B] mt-3 leading-relaxed">
            By eliminating centralized intermediaries and matching energy at the local substation tier, 
            prosumers earn more while buyers spend less.
          </p>
        </div>

        {/* Benefits Grid: 2 columns x 3 rows on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS_DATA.map((benefit) => (
            <div
              key={benefit.id}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-[#14171F]/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(245,166,35,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon and Target Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F5A623]/20 flex items-center justify-center group-hover:bg-[#F5A623] group-hover:scale-105 transition-all duration-200">
                    {getIcon(benefit.iconName)}
                  </div>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      benefit.target === 'Prosumer'
                        ? 'bg-[#F5A623]/15 text-[#14171F]'
                        : benefit.target === 'Consumer'
                        ? 'bg-[#14171F]/5 text-[#1A1A1A]'
                        : 'bg-[#10B981]/15 text-[#065F46]'
                    }`}
                  >
                    {benefit.target}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] tracking-tight mb-2.5 group-hover:text-[#F5A623] transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#5A5F6B] leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom Metric Pill */}
              {benefit.metric && (
                <div className="mt-6 pt-4 border-t border-[#14171F]/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1A1A1A] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    {benefit.metric}
                  </span>
                  <span className="text-xs text-[#5A5F6B] group-hover:text-[#F5A623] flex items-center gap-1 font-semibold transition-colors">
                    Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#14171F] to-[#1C2230] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F5A623] flex items-center justify-center text-[#14171F] font-bold text-xl shrink-0 shadow-md">
              ₹
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Are you a Commercial Building or Gated Community?
              </h4>
              <p className="text-xs sm:text-sm text-white/70 mt-0.5">
                Join our Bulk P2P Clean Energy Pool and save lakhs annually under open access regulations.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenWaitlist('business')}
            className="whitespace-nowrap px-6 py-3 rounded-full bg-[#F5A623] hover:bg-[#E69500] text-[#14171F] font-bold text-sm tracking-wide shadow-md hover:scale-105 transition-all"
          >
            Explore Commercial Pool
          </button>
        </div>

      </div>
    </section>
  );
};

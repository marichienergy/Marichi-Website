import React, { useState } from 'react';
import { 
  Zap, 
  SunMedium, 
  Share2, 
  Wallet, 
  Search, 
  TrendingDown, 
  CheckCircle2, 
  Leaf, 
  ArrowRight,
  ShieldCheck,
  Check,
  Building,
  Smartphone
} from 'lucide-react';
import { PROSUMER_STEPS, CONSUMER_STEPS } from '../data';

interface HowItWorksProps {
  onOpenWaitlist: (role: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenWaitlist }) => {
  const [activeTab, setActiveTab] = useState<'prosumer' | 'consumer'>('prosumer');
  const [activeStep, setActiveStep] = useState<number>(1);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-5 h-5 text-[#F5A623]" />;
      case 'SunMedium': return <SunMedium className="w-5 h-5 text-[#F5A623]" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-[#F5A623]" />;
      case 'Wallet': return <Wallet className="w-5 h-5 text-[#F5A623]" />;
      case 'Search': return <Search className="w-5 h-5 text-[#F5A623]" />;
      case 'TrendingDown': return <TrendingDown className="w-5 h-5 text-[#F5A623]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-[#F5A623]" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-[#F5A623]" />;
      default: return <Zap className="w-5 h-5 text-[#F5A623]" />;
    }
  };

  const currentSteps = activeTab === 'prosumer' ? PROSUMER_STEPS : CONSUMER_STEPS;

  return (
    <section id="how-it-works" className="py-10 sm:py-14 relative overflow-hidden bg-[#FAF9F6]">
      {/* Decorative subtle sun-glow accent behind section header */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F5A623]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F5A623] block mb-2">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            Simple Energy Trading,{' '}
            <span className="text-[#F5A623]">Two Ways.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A5F6B] mt-3 leading-relaxed">
            Whether you generate rooftop solar or need reliable clean power at lower rates, 
            Marichi simplifies the grid handshake via automated smart grid protocols.
          </p>

          {/* Interactive Role Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#14171F]/10 shadow-[0_4px_16px_rgba(0,0,0,0.04)] mt-6">
            <button
              id="tab-prosumers-seller"
              onClick={() => {
                setActiveTab('prosumer');
                setActiveStep(1);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'prosumer'
                  ? 'bg-[#14171F] text-white shadow-md'
                  : 'text-[#5A5F6B] hover:text-[#1A1A1A]'
              }`}
            >
              <SunMedium className="w-4 h-4 text-[#F5A623]" />
              <span>For Prosumers (Sellers)</span>
            </button>
            <button
              id="tab-consumers-buyer"
              onClick={() => {
                setActiveTab('consumer');
                setActiveStep(1);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'consumer'
                  ? 'bg-[#14171F] text-white shadow-md'
                  : 'text-[#5A5F6B] hover:text-[#1A1A1A]'
              }`}
            >
              <Building className="w-4 h-4 text-[#F5A623]" />
              <span>For Consumers (Buyers)</span>
            </button>
          </div>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Timeline Steps: Left 7 Cols */}
          <div className="lg:col-span-7 space-y-3">
            {currentSteps.map((stepItem, idx) => {
              const isSelected = activeStep === stepItem.step;
              return (
                <div
                  key={stepItem.step}
                  onClick={() => setActiveStep(stepItem.step)}
                  className={`relative p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-white border-[#F5A623] shadow-[0_8px_30px_rgba(245,166,35,0.12)] -translate-y-0.5'
                      : 'bg-white/60 hover:bg-white border-[#14171F]/5 shadow-sm'
                  }`}
                >
                  {/* Connecting dashed line to next step */}
                  {idx < currentSteps.length - 1 && (
                    <div className="hidden sm:block absolute left-[2.1rem] top-14 bottom-[-1.2rem] w-[2px] border-l-2 border-dashed border-[#F5A623]/30 z-0 pointer-events-none" />
                  )}

                  <div className="flex items-start gap-3.5 sm:gap-4 relative z-10">
                    {/* Numbered circular badge */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-bold text-sm transition-all ${
                        isSelected
                          ? 'bg-[#F5A623] text-[#14171F] shadow-[0_4px_12px_rgba(245,166,35,0.4)] scale-105'
                          : 'bg-[#14171F]/5 text-[#5A5F6B]'
                      }`}
                    >
                      {stepItem.step}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A]">
                          {stepItem.title}
                        </h3>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#F5A623]/15 text-[#14171F]">
                          {stepItem.highlight}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#5A5F6B] mt-1.5 leading-relaxed">
                        {stepItem.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <button
                onClick={() => onOpenWaitlist(activeTab)}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A] hover:text-[#F5A623] transition-colors group"
              >
                <span>{activeTab === 'prosumer' ? 'Ready to monetize your solar rooftop?' : 'Ready to buy cheaper clean energy?'}</span>
                <ArrowRight className="w-4 h-4 text-[#F5A623] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Interactive Visual Preview: Right 5 Cols with Sticky Alignment */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative rounded-3xl p-6 bg-gradient-to-b from-[#14171F] to-[#1C2230] text-white shadow-2xl border border-white/10 overflow-hidden">
              {/* Background ambient gold radial glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#F5A623]/15 rounded-full blur-2xl pointer-events-none" />

              {/* Top status bar */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-white/80">
                    Live P2P Substation Grid #12
                  </span>
                </div>
                <span className="text-xs font-mono text-[#F5A623] bg-[#F5A623]/10 px-2.5 py-1 rounded-full border border-[#F5A623]/20">
                  {activeTab === 'prosumer' ? 'SURPLUS EXPORT' : 'GREEN IMPORT'}
                </span>
              </div>

              {/* Dynamic Step Details Card */}
              <div className="py-6">
                <div className="text-xs text-white/50 uppercase font-semibold tracking-wider">
                  Step {activeStep} of 4 Focus
                </div>
                <h4 className="text-xl font-bold text-white mt-1">
                  {currentSteps[activeStep - 1].title}
                </h4>
                <p className="text-sm text-white/70 mt-2">
                  {currentSteps[activeStep - 1].description}
                </p>

                {/* Simulation Metric Box */}
                <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60">P2P Settlement TxID</span>
                    <span className="font-mono text-white/90">TX-MARICHI-9824X</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60">
                      {activeTab === 'prosumer' ? 'Daily Solar Export' : 'Allocated Green Units'}
                    </span>
                    <span className="font-bold text-[#F5A623]">
                      {activeTab === 'prosumer' ? '28.4 kWh' : '32.0 kWh'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60">Effective Unit Tariff</span>
                    <span className="font-bold text-[#10B981]">
                      {activeTab === 'prosumer' ? '₹5.80 / kWh' : '₹6.50 / kWh'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10">
                    <span className="text-white/80 font-medium">Estimated Financial Benefit</span>
                    <span className="font-bold text-[#F5A623] text-sm">
                      {activeTab === 'prosumer' ? '+₹2,240 / month extra' : 'Save ₹1,850 / month'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Compliance footer in preview */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  Verified Bi-directional AMI
                </span>
                <span className="text-white/40">Zero Manual Reading</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

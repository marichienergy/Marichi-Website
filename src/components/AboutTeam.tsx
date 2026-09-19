import React from 'react';
import { Layers, ShieldCheck, Cpu, Zap, Compass, Eye, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutTeam: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-14 bg-[#FAF9F6] relative">
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl xl:max-w-4xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F5A623] block mb-2">
            ABOUT MARICHI ENERGY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            Building India’s Peer-to-Peer{' '}
            <span className="text-[#F5A623]">Energy Backbone.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A5F6B] mt-4 leading-relaxed">
            <strong>Marichi Energy Solutions Pvt. Ltd.</strong> is a specialized energytech and fintech enterprise 
            creating the digital peer-to-peer exchange layer for India’s rooftop solar ecosystem. 
            By leveraging advanced smart grid telemetry and decentralized energy sharing protocols, 
            we enable trustless, real-time energy transactions between neighbors without altering distribution transformers or requiring costly hardware.
          </p>
        </div>

        {/* Mission & Vision Showcase (Staggered 75% Width: Left for Mission, Right for Vision) */}
        <div className="flex flex-col gap-6 sm:gap-7 mb-14">
          
          {/* Mission Card (Aligned to Left, 75% Width) */}
          <div className="w-full lg:w-3/4 mr-auto relative rounded-3xl bg-white p-6 sm:p-7 sm:px-8 border border-[#14171F]/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,128,96,0.14)] hover:border-[#008060]/50 hover:bg-[#FAFDFB] hover:-translate-y-1 transition-all duration-300 overflow-hidden group cursor-default">
            {/* Subtle Ambient Radial Highlight on Hover */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#008060]/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:bg-[#008060]/15 group-hover:scale-110 transition-all duration-500" />
            
            <div className="relative z-10">
              {/* Header Row: Icon, Title & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#008060]/10 flex items-center justify-center text-[#008060] group-hover:bg-[#008060] group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] group-hover:text-[#008060] transition-colors duration-200">
                      Empowering India’s Clean Energy Transition
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#008060]/10 text-[#008060] text-xs font-bold uppercase tracking-wider border border-[#008060]/20 group-hover:bg-[#008060]/20 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008060] animate-pulse" />
                  Mission Statement
                </span>
              </div>

              {/* Statement Description - Spans nicely across 75% width with minimal height */}
              <p className="text-sm sm:text-[15px] text-[#404550] leading-relaxed font-normal mb-3.5">
                To build trusted energy systems designed and built in India that facilitate a clean energy transition, empowering people and communities to manage, share, and benefit from renewable energy through community solar sharing and a decentralised energy platform, while leveraging smart grid optimisation.
              </p>

              {/* Compact Meta Tags */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#008060] font-medium pt-2 border-t border-[#14171F]/5">
                <span className="px-2.5 py-0.5 rounded-md bg-[#008060]/5 border border-[#008060]/15">Designed & Built in India</span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#008060]/5 border border-[#008060]/15">Community Solar Sharing</span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#008060]/5 border border-[#008060]/15">Decentralised Energy Platform</span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#008060]/5 border border-[#008060]/15">Smart Grid Optimisation</span>
              </div>
            </div>
          </div>

          {/* Vision Card (Aligned to Right, 75% Width) */}
          <div className="w-full lg:w-3/4 ml-auto relative rounded-3xl bg-white p-6 sm:p-7 sm:px-8 border border-[#14171F]/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(245,166,35,0.18)] hover:border-[#F5A623]/70 hover:bg-[#FFFDF9] hover:-translate-y-1 transition-all duration-300 overflow-hidden group cursor-default">
            {/* Subtle Ambient Radial Highlight on Hover */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:bg-[#F5A623]/20 group-hover:scale-110 transition-all duration-500" />
            
            <div className="relative z-10">
              {/* Header Row: Icon, Title & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5A623]/15 flex items-center justify-center text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] group-hover:text-[#D98200] transition-colors duration-200">
                      Energy as a Shared, Intelligent Resource
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5A623]/15 text-[#D98200] text-xs font-bold uppercase tracking-wider border border-[#F5A623]/25 group-hover:bg-[#F5A623]/25 transition-colors">
                  <Sparkles className="w-3.5 h-3.5" />
                  Our Vision
                </span>
              </div>

              {/* Statement Description - Spans nicely across 75% width with minimal height */}
              <p className="text-sm sm:text-[15px] text-[#404550] leading-relaxed font-normal mb-3.5">
                To reimagine energy as a shared, intelligent resource through a clean energy transition that enhances community solar sharing, fosters a decentralised energy platform, and supports renewable energy in India, ultimately benefiting people, communities, and the planet through smart grid optimisation.
              </p>

              {/* Compact Meta Tags */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#D98200] font-medium pt-2 border-t border-[#14171F]/5">
                <span className="px-2.5 py-0.5 rounded-md bg-[#F5A623]/10 border border-[#F5A623]/20">Decentralised Energy Platform</span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#F5A623]/10 border border-[#F5A623]/20">People, Communities & Planet</span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#F5A623]/10 border border-[#F5A623]/20">Renewable Energy in India</span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#F5A623]/10 border border-[#F5A623]/20">Smart Grid Optimisation</span>
              </div>
            </div>
          </div>

        </div>

        {/* Foundation Pillars Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5A5F6B] block mb-1">
            CORE ARCHITECTURAL PILLARS
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
            Engineered for Interoperability & Zero Capital Expenditure
          </h3>
        </div>

        {/* Foundation Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-white border border-[#14171F]/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#F5A623]/15 flex items-center justify-center mb-4 text-[#F5A623]">
              <Cpu className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#1A1A1A]">
              100% Software Driven
            </h4>
            <p className="text-xs sm:text-sm text-[#5A5F6B] mt-2 leading-relaxed">
              Zero additional inverters, batteries, or hardware boxes needed. Integrates directly with existing IS 16444 and IS 15959 AMI smart meters.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-white border border-[#14171F]/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#F5A623]/15 flex items-center justify-center mb-4 text-[#F5A623]">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#1A1A1A]">
              Smart Grid Data Layer
            </h4>
            <p className="text-xs sm:text-sm text-[#5A5F6B] mt-2 leading-relaxed">
              Interoperable with distribution grid data frameworks, verifying bidirectional meter generation and feeding automated reconciliation logs to DISCOMs.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-white border border-[#14171F]/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#F5A623]/15 flex items-center justify-center mb-4 text-[#F5A623]">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#1A1A1A]">
              Decentralized P2P Exchange
            </h4>
            <p className="text-xs sm:text-sm text-[#5A5F6B] mt-2 leading-relaxed">
              Intelligent transaction architecture allowing buyers and sellers on the same distribution feeder to discover and trade solar in real time.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-white border border-[#14171F]/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#F5A623]/15 flex items-center justify-center mb-4 text-[#F5A623]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#1A1A1A]">
              SERC Regulatory Sandbox
            </h4>
            <p className="text-xs sm:text-sm text-[#5A5F6B] mt-2 leading-relaxed">
              Strictly adheres to State Electricity Regulatory Commission tariff rules, wheeling charges, and grid safety codes for authorized pilot operations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

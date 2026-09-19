import React from 'react';
import { Bell, Check, Leaf, Sliders } from 'lucide-react';
import marichiLogoImg from '../assets/images/MARICHI.png';

export const MarichiAppMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      
      {/* Light Mint-Tinted Container that breaks up the black-and-white aesthetic */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#F3F7F2] via-[#EBF3EC] to-[#E3EFE5] p-5 sm:p-8 border border-emerald-900/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
        
        {/* Soft Organic Decorative Background Rings matching screenshot */}
        <svg
          className="absolute -top-12 -right-12 w-[120%] h-[120%] pointer-events-none opacity-40"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="280" cy="180" r="160" stroke="#7BA984" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="280" cy="180" r="210" stroke="#7BA984" strokeWidth="1.2" />
          <circle cx="280" cy="180" r="260" stroke="#7BA984" strokeWidth="1" />
        </svg>

        <div className="relative z-10 flex items-center justify-center -space-x-12 sm:-space-x-16 py-2">
          
          {/* LEFT PHONE: "Your energy. Your rules." */}
          <div className="w-[220px] sm:w-[250px] shrink-0 transform -rotate-6 hover:-rotate-4 transition-transform duration-300">
            <div className="rounded-[36px] bg-[#1A1E1B] p-2.5 shadow-2xl border-2 border-white/20 ring-1 ring-black/30">
              
              {/* Screen Interior */}
              <div className="rounded-[28px] bg-[#FAFBF9] p-3.5 sm:p-4 text-[#1A261D] flex flex-col justify-between min-h-[380px] sm:min-h-[420px]">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#1A261D]">9:41</span>
                  <div className="w-14 h-3.5 bg-black rounded-full" />
                  <div className="flex items-center gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A261D]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A261D]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A261D]" />
                  </div>
                </div>

                {/* App Brand Header */}
                <div className="flex items-center justify-between pt-1 mb-3">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={marichiLogoImg}
                      alt="Marichi"
                      className="h-6 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-xs font-semibold text-[#5C6E61]">one</span>
                  </div>
                  <Bell className="w-3.5 h-3.5 text-[#5C6E61]" />
                </div>

                {/* Main Heading */}
                <div className="mb-3">
                  <h4 className="text-base sm:text-lg font-bold text-[#142318] leading-tight">
                    Your energy.<br />
                    Your rules.
                  </h4>
                </div>

                {/* Trading Preferences Section */}
                <div className="space-y-2 mb-3">
                  <span className="text-[10px] font-semibold text-[#66786A] block uppercase tracking-wider">
                    Trading preferences
                  </span>

                  {/* Auto-Trading Card */}
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#E0ECE2] shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Sliders className="w-3 h-3 text-[#2D5A38]" />
                      <span className="text-xs font-bold text-[#1A261D]">Auto-trading</span>
                    </div>
                    {/* Active Green Toggle */}
                    <div className="w-9 h-5 rounded-full bg-[#2D5A38] p-0.5 flex items-center justify-end pr-1 shadow-inner">
                      <span className="text-[8px] font-bold text-white mr-1">ON</span>
                      <div className="w-3.5 h-3.5 rounded-full bg-white shadow-sm" />
                    </div>
                  </div>

                  {/* Keep for my home card */}
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/90 border border-[#E0ECE2] flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#2E3D31]">Keep for my home</span>
                    <span className="text-[10px] font-semibold text-[#66786A]">Priority</span>
                  </div>

                  {/* Share surplus above card */}
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/80 border border-[#E0ECE2] flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#2E3D31]">Share surplus above</span>
                    <span className="text-[10px] font-semibold text-[#66786A]">2 kW</span>
                  </div>
                </div>

                {/* Bottom confirmation footer */}
                <div className="pt-2 border-t border-[#E8F0E9] flex items-center gap-1.5 text-[10px] font-semibold text-[#2D5A38]">
                  <Check className="w-3 h-3 text-[#2D5A38]" />
                  <span>Set once. Keep sharing.</span>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT PHONE: "Hello, sunshine." */}
          <div className="w-[235px] sm:w-[265px] shrink-0 transform rotate-3 hover:rotate-1 transition-transform duration-300 z-10">
            <div className="rounded-[38px] bg-[#141A16] p-2.5 shadow-2xl border-2 border-white/40 ring-1 ring-black/40">
              
              {/* Screen Interior */}
              <div className="rounded-[30px] bg-[#FAFBF9] p-3.5 sm:p-4 text-[#142318] flex flex-col justify-between min-h-[400px] sm:min-h-[440px]">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#142318]">9:41</span>
                  <div className="w-14 h-3.5 bg-black rounded-full" />
                  <div className="flex items-center gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#142318]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#142318]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#142318]" />
                  </div>
                </div>

                {/* App Brand Header */}
                <div className="flex items-center justify-between pt-1 mb-2">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={marichiLogoImg}
                      alt="Marichi"
                      className="h-6 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-xs font-semibold text-[#5C6E61]">one</span>
                  </div>
                  <Bell className="w-3.5 h-3.5 text-[#5C6E61]" />
                </div>

                {/* Greeting */}
                <div className="mb-2.5">
                  <span className="text-[10px] text-[#637667] block">A brighter day starts here.</span>
                  <h4 className="text-lg sm:text-xl font-extrabold text-[#112115] tracking-tight">
                    Hello, sunshine.
                  </h4>
                </div>

                {/* Dark Forest Green Savings Card */}
                <div className="rounded-2xl bg-[#1C3322] p-3 sm:p-3.5 text-white shadow-md relative overflow-hidden mb-3">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                  <span className="text-[10px] text-white/70 block">Your solar savings</span>
                  <div className="flex items-baseline gap-1 my-0.5">
                    <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                      ₹540
                    </span>
                    <span className="text-[10px] text-white/70 font-medium">this month</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#A6E3B0] mt-1 pt-1 border-t border-white/10">
                    <Leaf className="w-3 h-3 text-[#A6E3B0]" />
                    <span>Powered by your neighbourhood</span>
                  </div>
                </div>

                {/* Energy Mix Bar Chart Section */}
                <div className="rounded-xl bg-white border border-[#E3ECE4] p-2.5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#142318]">Your energy mix</span>
                    <span className="text-[9px] font-medium text-[#6C7E70]">September</span>
                  </div>

                  {/* 11 Rounded Bars */}
                  <div className="flex items-end justify-between h-14 gap-1 px-1 mb-1">
                    {[
                      { h: '35%', d: '1 Sep' },
                      { h: '48%', d: '' },
                      { h: '42%', d: '' },
                      { h: '58%', d: '' },
                      { h: '50%', d: '' },
                      { h: '68%', d: '15 Sep' },
                      { h: '82%', d: '' },
                      { h: '60%', d: '' },
                      { h: '74%', d: '' },
                      { h: '92%', d: '' },
                      { h: '85%', d: '30 Sep' },
                    ].map((bar, idx) => (
                      <div key={idx} className="w-full flex flex-col items-center h-full justify-end">
                        <div
                          style={{ height: bar.h }}
                          className={`w-full rounded-t-sm transition-all duration-300 ${
                            idx === 9 ? 'bg-[#2D5A38]' : 'bg-[#98B89E] hover:bg-[#7FA586]'
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* X Axis labels */}
                  <div className="flex justify-between text-[8px] text-[#78897B] px-1 font-medium border-t border-[#E8F0E9] pt-1 mb-1.5">
                    <span>1 Sep</span>
                    <span>15 Sep</span>
                    <span>30 Sep</span>
                  </div>

                  {/* Metric Legend */}
                  <div className="flex items-center justify-between text-[10px] pt-1 border-t border-dashed border-[#E8F0E9]">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A38]" />
                      <span className="text-[#59695C] font-medium">Local solar</span>
                    </div>
                    <span className="font-bold text-[#142318]">72 kWh</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Caption at bottom */}
        <p className="text-center text-[11px] text-[#55695A] font-medium mt-3">
          Illustrative app screens · Sample data
        </p>

      </div>
    </div>
  );
};

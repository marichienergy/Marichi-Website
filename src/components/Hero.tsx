import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Sun, 
  TrendingUp, 
  Building2, 
  Users,
  Sparkles
} from 'lucide-react';
import { STATS_DATA } from '../data';
import heroSolarRooftopImg from '../assets/images/hero_solar_rooftops.jpg';

interface HeroProps {
  onOpenWaitlist: (prefillEmail?: string) => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWaitlist, onOpenVideo }) => {
  const [email, setEmail] = useState('');
  const [statsValues, setStatsValues] = useState<{ [key: string]: number }>({
    'kw-listed': 0,
    'prosumers': 0,
    'yield': 0,
    'compliance': 0,
  });

  // Animated counter for stat values
  useEffect(() => {
    const duration = 1600; // ms
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // easeOutExpo
      const ease = 1 - Math.pow(1 - progress, 3);

      setStatsValues({
        'kw-listed': Math.round(500 * ease),
        'prosumers': Math.round(50 * ease),
        'yield': Math.round(38 * ease),
        'compliance': Math.round(100 * ease),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    onOpenWaitlist(email);
  };

  return (
    <section id="hero-section" className="relative pt-28 sm:pt-32 pb-10 sm:pb-12 lg:pb-14 overflow-hidden">
      {/* Subtle warm background radial glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#F5A623]/10 via-[#FFC94A]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F5A623]/6 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Conversions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Badge */}
            <div
              id="hero-eyebrow-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14171F]/5 border border-[#14171F]/10 text-xs font-semibold tracking-wide text-[#1A1A1A] mb-6 shadow-sm hover:border-[#F5A623]/40 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#F5A623] inline-block animate-ping" />
              <span>⚡ Powering Peer-to-Peer Energy</span>
              <span className="text-[#5A5F6B] font-normal">|</span>
              <span className="text-[#5A5F6B]">Smart Grid Optimised</span>
            </div>

            {/* Main Two-Tone Headline */}
            <h1
              id="hero-main-heading"
              className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#1A1A1A] tracking-tight leading-[1.12] mb-6"
            >
              Trade Solar Power,{' '}
              <span className="relative inline-block text-[#F5A623]">
                Directly.
                {/* Subtle underline curve in gold */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-[#F5A623]/40"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M0 8C30 1 70 1 100 8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              id="hero-subtitle-copy"
              className="text-lg sm:text-xl text-[#5A5F6B] leading-relaxed max-w-2xl mb-8"
            >
              Connect rooftop solar prosumers with nearby clean power consumers. 
              Sell your surplus at higher tariffs, buy local green electricity for less, 
              and settle automatically through automated smart grid optimisation.
            </p>

            {/* Email Capture Input Form */}
            <div className="w-full max-w-xl mb-6">
              <form
                id="hero-waitlist-form"
                onSubmit={handleHeroSubmit}
                className="flex flex-col sm:flex-row gap-2.5 p-1.5 rounded-2xl bg-white border border-[#14171F]/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#F5A623]/40 focus-within:border-[#F5A623] transition-all"
              >
                <div className="relative flex-1 flex items-center">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email or meter number..."
                    className="w-full px-4 py-3.5 text-sm sm:text-base text-[#1A1A1A] placeholder-[#5A5F6B]/60 bg-transparent focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  id="hero-submit-cta"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl sm:rounded-xl bg-[#F5A623] hover:bg-[#E69500] text-[#14171F] font-semibold text-sm tracking-wide shadow-[0_4px_16px_rgba(245,166,35,0.3)] hover:shadow-[0_6px_20px_rgba(245,166,35,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap"
                >
                  <span>Join the Waitlist</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              </form>
              <p className="text-xs text-[#5A5F6B] mt-2.5 flex items-center gap-1.5 pl-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                Pilot launch priority in Bengaluru, Delhi NCR & Uttar Pradesh. Free registration.
              </p>
            </div>

            {/* Social Proof Row */}
            <div id="hero-social-proof" className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces&q=80"
                  alt="Prosumer user avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&q=80"
                  alt="Solar prosumer avatar"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces&q=80"
                  alt="Clean energy buyer avatar"
                  referrerPolicy="no-referrer"
                />
                <div className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-2 ring-white bg-[#14171F] text-[#F5A623] text-xs font-bold shadow-sm">
                  +1K
                </div>
              </div>
              <div className="text-xs sm:text-sm text-[#5A5F6B]">
                <span className="font-semibold text-[#1A1A1A]">Join 1,000+ homes & businesses</span> already waitlisted
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Overlay Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-radial from-[#F5A623]/25 via-[#FFC94A]/10 to-transparent rounded-3xl blur-2xl transform scale-95 -z-10" />

            {/* Container for image + overlays */}
            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl p-2 bg-gradient-to-b from-white/80 to-white/40 shadow-[0_20px_50px_rgba(20,23,31,0.08)] backdrop-blur-sm border border-white/60">
              <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] sm:aspect-[16/11] group">
                <img
                  src={heroSolarRooftopImg}
                  alt="Modern rooftop solar panels in Indian city"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Soft warm gradient overlay on the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14171F]/70 via-transparent to-black/20" />

                {/* Center "Watch How It Works" Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    id="hero-play-video-btn"
                    onClick={onOpenVideo}
                    className="group/btn flex items-center gap-3 px-5 py-3 rounded-full bg-white/95 hover:bg-white text-[#14171F] shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(245,166,35,0.4)] backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300"
                    aria-label="Watch How P2P Solar Energy Trading Works"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#F5A623] flex items-center justify-center text-[#14171F] shadow-sm">
                      <Play className="w-4 h-4 ml-0.5 fill-[#14171F]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold tracking-wide">
                      Watch How It Works
                    </span>
                  </button>
                </div>

                {/* Bottom Image Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs">
                  <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <Sun className="w-3.5 h-3.5 text-[#F5A623]" />
                    Live Generation: 4.8 kW Active
                  </span>
                  <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[#FFC94A]">
                    Substation Feeder #04
                  </span>
                </div>
              </div>

              {/* Floating Glassmorphism Overlay Card 1: Prosumer Seller */}
              <div
                id="floating-card-prosumer"
                className="absolute -top-6 -left-4 sm:-left-6 max-w-[210px] sm:max-w-[230px] p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-white/80 animate-float"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#F5A623]/20 flex items-center justify-center text-[#F5A623] shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#5A5F6B] block">
                      Prosumer Yield
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#1A1A1A] leading-tight">
                      Selling Surplus @ ₹5.80
                    </p>
                    <span className="text-[11px] font-semibold text-[#10B981] flex items-center gap-0.5 mt-0.5">
                      +38% vs Net Metering
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphism Overlay Card 2: Consumer Buyer */}
              <div
                id="floating-card-consumer"
                className="absolute -bottom-6 -right-3 sm:-right-6 max-w-[220px] sm:max-w-[240px] p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-white/80 animate-float-delayed"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#14171F] flex items-center justify-center text-[#F5A623] shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#5A5F6B] block">
                      Consumer Saved
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#1A1A1A] leading-tight">
                      Buying Clean @ ₹6.50
                    </p>
                    <span className="text-[11px] font-semibold text-[#F5A623] flex items-center gap-0.5 mt-0.5">
                      Save ₹1.80/kWh vs Grid
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Horizontal Strip of 4 Stat Cards */}
        <div
          id="hero-stats-strip"
          className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#14171F]/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(245,166,35,0.12)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] tracking-tight group-hover:text-[#F5A623] transition-colors">
                {stat.numberValue !== undefined ? (
                  <>
                    {statsValues[stat.id] || 0}
                    <span className="text-[#F5A623] ml-0.5">{stat.suffix}</span>
                  </>
                ) : (
                  <>
                    {stat.value}
                  </>
                )}
              </div>
              <div className="text-sm font-semibold text-[#1A1A1A] mt-1">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-xs text-[#5A5F6B] mt-0.5">
                  {stat.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

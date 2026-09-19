import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Apple, Play, ShieldCheck, Zap } from 'lucide-react';
import { submitToMarichi } from '../services/formSubmission';
import { MarichiAppMockup } from './MarichiAppMockup';

interface LeadCaptureProps {
  onOpenWaitlist: (email?: string) => void;
}

export const LeadCapture: React.FC<LeadCaptureProps> = ({ onOpenWaitlist }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    submitToMarichi({
      formType: 'early-access',
      email,
    });
    onOpenWaitlist(email);
    setSubmitted(true);
  };

  return (
    <section id="early-access" className="py-12 sm:py-16 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Multi-Tone Architectural Panel */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#11161D] via-[#151B26] to-[#0F141A] p-6 sm:p-10 lg:p-12 text-white shadow-2xl border border-white/10 overflow-hidden">
          
          {/* Decorative Ambient Radial Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F5A623]/15 rounded-full blur-3xl pointer-events-none -mt-24" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008060]/20 rounded-full blur-3xl pointer-events-none -mb-20 -mr-20" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#F5A623]/10 rounded-full blur-2xl pointer-events-none" />

          {/* 2-Column Split Showcase Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Compelling Content & Form */}
            <div className="lg:col-span-7 text-left">
              
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wide text-[#F5A623] mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>PILOT METERS OPEN · BENGALURU, CHENNAI & DELHI NCR</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
                Be the First to{' '}
                <span className="text-[#F5A623]">Trade Solar Energy</span> Near You.
              </h2>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-white/75 max-w-xl mb-6 leading-relaxed">
                We are currently rolling out substation pilots with DISCOMs across Bengaluru, Chennai, and Delhi NCR. 
                Register your rooftop meter today to lock in early adopter peer trading tariffs and automated settlements.
              </p>

              {/* Inline Email Input Form */}
              <div className="max-w-xl mb-6">
                {submitted ? (
                  <div className="p-4 rounded-2xl bg-[#10B981]/20 border border-[#10B981]/40 text-white flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
                    <span className="text-sm font-semibold">
                      Thank you! We've reserved your priority pilot spot.
                    </span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-2.5 p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 focus-within:border-[#F5A623] transition-all"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="w-full px-4 py-3.5 text-sm sm:text-base text-white placeholder-white/50 bg-transparent focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F5A623] hover:bg-[#E69500] text-[#14171F] font-bold text-sm tracking-wide shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap"
                    >
                      <span>Get Early Access</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </button>
                  </form>
                )}
                <p className="text-xs text-white/50 mt-2.5">
                  Zero spam. Direct regulatory updates and substation feeder priority notifications.
                </p>
              </div>

              {/* Trust & Ease Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-white/10 max-w-xl">
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Zero Hardware or Inverter Alterations</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Works with Existing AMI Smart Meters</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>State Electricity Regulatory Sandbox</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Automated Monthly DISCOM Billing Credits</span>
                </div>
              </div>

              {/* App Store / Google Play Coming Soon Badges */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-all cursor-default">
                  <Apple className="w-5 h-5 text-[#F5A623]" />
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block leading-none">
                      Coming Soon on
                    </span>
                    <span className="text-xs font-bold text-white leading-none">
                      Apple App Store
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-all cursor-default">
                  <Play className="w-5 h-5 text-[#F5A623] fill-[#F5A623]" />
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block leading-none">
                      Coming Soon on
                    </span>
                    <span className="text-xs font-bold text-white leading-none">
                      Google Play Store
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Mobile App Showcase (Breaks up white on black) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <MarichiAppMockup />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

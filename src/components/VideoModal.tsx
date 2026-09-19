import React, { useState } from 'react';
import { X, Sun, Zap, ArrowRight, ShieldCheck, CheckCircle2, Building, Home, Radio, Play } from 'lucide-react';
import { MarichiLogo } from './MarichiLogo';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWaitlist: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenWaitlist }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'flow'>('flow');

  if (!isOpen) return null;

  return (
    <div
      id="video-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="video-modal-container"
        className="relative w-full max-w-3xl bg-[#14171F] text-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <MarichiLogo className="h-8" isDarkBackground={true} />
            <div>
              <h3 className="text-base font-bold text-white">
                How P2P Rooftop Solar Works
              </h3>
              <span className="text-[11px] text-[#F5A623] font-medium">
                Regulated P2P Smart Grid Protocol Standard
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Interactive Schematic */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Animated Visual Flowchart */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F5A623]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10 text-center">
              
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#F5A623]/20 text-[#F5A623] flex items-center justify-center mb-2">
                  <Sun className="w-6 h-6 animate-spin-slow" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  1. Solar Generation
                </span>
                <p className="text-[11px] text-white/60 mt-1">
                  Rooftop panels produce surplus clean energy measured by DISCOM AMI smart meter.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-white/5 border border-[#F5A623]/40 flex flex-col items-center relative">
                <div className="w-12 h-12 rounded-full bg-[#F5A623] text-[#14171F] flex items-center justify-center mb-2 shadow-lg">
                  <Radio className="w-6 h-6 animate-pulse" />
                </div>
                <span className="text-xs font-bold text-[#F5A623] uppercase tracking-wider">
                  2. Smart Feeder Matching
                </span>
                <p className="text-[11px] text-white/70 mt-1">
                  Marichi algorithms match local generation with nearby consumer demand on the same feeder.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  3. Instant Settlement
                </span>
                <p className="text-[11px] text-white/60 mt-1">
                  Units are credited on buyer's bill and prosumer receives automated UPI AutoPay payouts.
                </p>
              </div>

            </div>

            {/* Technical highlight specs */}
            <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div>
                <span className="text-white/40 block text-[10px]">TRANSACTION PROTOCOL</span>
                <span className="font-semibold text-white">Automated P2P Engine</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px]">METERING STANDARD</span>
                <span className="font-semibold text-white">IS 16444 / IS 15959</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px]">WHEELING SETTLEMENT</span>
                <span className="font-semibold text-white">SERC Regulatory Rules</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px]">PAYOUT METHOD</span>
                <span className="font-semibold text-[#10B981]">UPI AutoPay T+1</span>
              </div>
            </div>
          </div>

          {/* Key Advantages Checklist */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/60">
              Why Marichi P2P is Different:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Zero hardware to buy or maintain</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Synchronized with DISCOM monthly power bill</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Earn ₹5.80/unit vs net-metering ₹3.10/unit</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Buyers save up to 25% on peak tariffs</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 bg-white/5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>Smart Grid & P2P Protocol Standard | Regulated Sandbox</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenWaitlist();
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-full bg-[#F5A623] hover:bg-[#E69500] text-xs font-bold text-[#14171F] shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <span>Join Pilot Waitlist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

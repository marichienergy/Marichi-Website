import React, { useState, useEffect } from 'react';
import { X, Sun, Zap, CheckCircle2, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { UserRole } from '../types';
import { MarichiLogo } from './MarichiLogo';
import { submitToMarichi } from '../services/formSubmission';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
  initialEmail?: string;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'prosumer',
  initialEmail = '',
}) => {
  const [role, setRole] = useState<UserRole>('prosumer');
  const [email, setEmail] = useState(initialEmail);
  const [name, setName] = useState('');
  const [city, setCity] = useState('Bengaluru (BESCOM)');
  const [solarCapacity, setSolarCapacity] = useState('5 kW');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialRole === 'consumer' || initialRole === 'prosumer' || initialRole === 'business' || initialRole === 'discom') {
      setRole(initialRole as UserRole);
    }
  }, [initialRole]);

  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitToMarichi({
        formType: 'waitlist',
        name,
        email,
        role,
        city,
        solarCapacity,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="waitlist-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="waitlist-modal-container"
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#14171F]/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#14171F]/10 bg-[#FAF9F6]">
          <div className="flex items-center gap-2.5">
            <MarichiLogo className="h-9 sm:h-10" variant="full" />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#5A5F6B] hover:text-[#1A1A1A] hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-6 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A]">
                Priority Queue Reserved!
              </h4>
              <p className="text-sm text-[#5A5F6B] max-w-sm mx-auto leading-relaxed">
                Welcome to Marichi, <strong>{name || 'Pilot Partner'}</strong>. You are #1,048 in line for the <strong>{city}</strong> DISCOM feeder rollout. We will notify you at <strong>{email}</strong> when your local substation activates.
              </p>
              <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#14171F]/5 text-xs text-[#5A5F6B] flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Zero hardware installation required · 100% Regulated</span>
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#F5A623] hover:bg-[#E69500] text-[#14171F] font-bold text-sm transition-colors shadow-sm"
              >
                Back to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Role Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5F6B] mb-2">
                  Select Your Participation Role
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('prosumer')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      role === 'prosumer'
                        ? 'border-[#F5A623] bg-[#F5A623]/10 text-[#14171F] shadow-sm'
                        : 'border-[#14171F]/10 hover:border-[#14171F]/20 text-[#5A5F6B]'
                    }`}
                  >
                    <Sun className="w-4 h-4 text-[#F5A623]" />
                    <span>Rooftop Solar Owner</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('consumer')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      role === 'consumer'
                        ? 'border-[#F5A623] bg-[#F5A623]/10 text-[#14171F] shadow-sm'
                        : 'border-[#14171F]/10 hover:border-[#14171F]/20 text-[#5A5F6B]'
                    }`}
                  >
                    <Zap className="w-4 h-4 text-[#F5A623]" />
                    <span>Clean Energy Buyer</span>
                  </button>
                </div>
              </div>

              {/* Name & Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5F6B] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aditi Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-[#14171F]/15 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#F5A623] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5F6B] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#14171F]/15 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#F5A623] transition-colors"
                />
              </div>

              {/* City and Solar / Bill info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5F6B] mb-1.5">
                    City / DISCOM
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#14171F]/15 text-sm font-medium text-[#1A1A1A] focus:outline-none focus:border-[#F5A623] transition-colors"
                  >
                    <option value="Bengaluru (BESCOM)">Bengaluru (BESCOM)</option>
                    <option value="Delhi NCR (BSES / Tata Power)">Delhi NCR (BSES / Tata Power)</option>
                    <option value="Uttar Pradesh (UPPCL / PVVNL)">Uttar Pradesh (UPPCL / PVVNL)</option>
                    <option value="Mumbai (MSEDCL / Adani)">Mumbai (MSEDCL / Adani)</option>
                    <option value="Other DISCOM">Other DISCOM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5F6B] mb-1.5">
                    {role === 'prosumer' ? 'Solar Capacity' : 'Monthly Bill Units'}
                  </label>
                  <input
                    type="text"
                    value={solarCapacity}
                    onChange={(e) => setSolarCapacity(e.target.value)}
                    placeholder={role === 'prosumer' ? 'e.g. 5 kW' : 'e.g. 500 kWh'}
                    className="w-full px-4 py-3 rounded-xl border border-[#14171F]/15 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#F5A623] transition-colors"
                  />
                </div>
              </div>

              {/* CTA Submit */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#F5A623] hover:bg-[#E69500] text-[#14171F] font-bold text-sm tracking-wide shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      <span>Transmitting Registration...</span>
                    </>
                  ) : (
                    <>
                      <span>Lock In Early Access</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-[#5A5F6B] text-center mt-2.5">
                  100% free registration. Priority rollout in Bengaluru, Delhi NCR & Uttar Pradesh.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

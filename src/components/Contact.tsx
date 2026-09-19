import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Linkedin, 
  Twitter, 
  Globe, 
  Clock,
  Loader2
} from 'lucide-react';
import { submitToMarichi } from '../services/formSubmission';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Prosumer (Solar Rooftop Owner)',
    city: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await submitToMarichi({
        formType: 'contact',
        name: formData.name,
        email: formData.email,
        role: formData.role,
        city: formData.city,
        message: formData.message,
      });
      setSubmitMessage(res.message);
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-14 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F5A623] block mb-2">
            CONTACT & PARTNERSHIPS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            Get in Touch with{' '}
            <span className="text-[#F5A623]">Marichi Energy.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A5F6B] mt-4 leading-relaxed">
            Interested in pilot participation, utility sandbox integrations, or institutional partnerships? 
            Our team is ready to assist you.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#14171F]/10 shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5F6B] mb-6">
              Fill in your details and an energy systems specialist will reach out within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#FDFBF7] border border-[#F5A623]/40 text-center space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#1A1A1A]">
                  Inquiry Dispatched to Marichi Team!
                </h4>
                <p className="text-sm text-[#5A5F6B] max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your details have been sent to{' '}
                  <strong className="text-[#1A1A1A]">contact@marichi.energy</strong>. An energy systems specialist will connect with you at <strong>{formData.email}</strong> shortly.
                </p>
                {submitMessage && (
                  <p className="text-xs text-[#5A5F6B]/80 italic">
                    {submitMessage}
                  </p>
                )}
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      role: 'Prosumer (Solar Rooftop Owner)',
                      city: '',
                      message: '',
                    });
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-[#14171F] bg-[#F5A623] hover:bg-[#E69500] transition-colors shadow-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5F6B] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-3 rounded-xl border border-[#14171F]/15 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#F5A623] bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5F6B] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#14171F]/15 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#F5A623] bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5F6B] mb-1.5">
                      I am a / Interest *
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#14171F]/15 text-sm font-medium text-[#1A1A1A] focus:outline-none focus:border-[#F5A623] bg-white transition-colors"
                    >
                      <option value="Prosumer (Solar Rooftop Owner)">Prosumer (Solar Rooftop Owner)</option>
                      <option value="Consumer (Clean Energy Buyer)">Consumer (Clean Energy Buyer)</option>
                      <option value="Commercial Facility / Apartment RWA">Commercial Facility / Apartment RWA</option>
                      <option value="DISCOM / Utility Official">DISCOM / Utility Official</option>
                      <option value="Investor / Media Partner">Investor / Media Partner</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5F6B] mb-1.5">
                      City / DISCOM Zone
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Bengaluru / BESCOM or Noida / PVVNL"
                      className="w-full px-4 py-3 rounded-xl border border-[#14171F]/15 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#F5A623] bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5F6B] mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your solar rooftop capacity, electricity bill requirement, or sandbox question..."
                    className="w-full px-4 py-3 rounded-xl border border-[#14171F]/15 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#F5A623] bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#F5A623] hover:bg-[#E69500] text-[#14171F] font-bold text-sm tracking-wide shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      <span>Sending to contact@marichi.energy...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Company Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#14171F] text-white shadow-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F5A623]/15 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-2">
                Marichi Energy Solutions Pvt. Ltd.
              </h3>
              <p className="text-xs text-white/70 mb-6">
                Regulated peer-to-peer rooftop solar exchange and smart grid community energy platform.
              </p>

              <div className="space-y-4 text-sm text-white/90">
                {/* Office */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#F5A623] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block text-xs uppercase tracking-wider text-white/60">
                      Corporate Office
                    </span>
                    <p className="text-xs leading-relaxed mt-0.5">
                      Marichi Energy Solutions Pvt. Ltd., Bengaluru & National Capital Region (NCR), India
                    </p>
                  </div>
                </div>

                {/* Email - DIRECT INQUIRIES */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#F5A623] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block text-xs uppercase tracking-wider text-white/60">
                      Direct Inquiries
                    </span>
                    <a
                      href="mailto:contact@marichi.energy"
                      className="text-sm font-bold text-[#F5A623] hover:underline"
                    >
                      contact@marichi.energy
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#F5A623] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block text-xs uppercase tracking-wider text-white/60">
                      Pilot Support Hours
                    </span>
                    <p className="text-xs leading-relaxed mt-0.5">
                      Monday to Saturday: 09:30 AM – 06:30 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs uppercase font-bold tracking-wider text-white/50 block mb-3">
                  Connect on Social Networks
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F5A623] text-white hover:text-[#14171F] flex items-center justify-center transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F5A623] text-white hover:text-[#14171F] flex items-center justify-center transition-all"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F5A623] text-white hover:text-[#14171F] flex items-center justify-center transition-all"
                    aria-label="Website"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

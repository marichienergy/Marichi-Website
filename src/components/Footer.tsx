import React from 'react';
import { Linkedin, Twitter, Github, ArrowUp, ShieldCheck, Mail } from 'lucide-react';
import { MarichiLogo } from './MarichiLogo';

interface FooterProps {
  onOpenWaitlist: (role?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWaitlist }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#14171F] text-white pt-16 pb-12 border-t border-white/10">
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <MarichiLogo className="h-12 sm:h-14 md:h-[58px]" variant="full" isDarkBackground={true} />
            </div>

            <p className="text-xs sm:text-sm text-white/70 max-w-lg leading-relaxed">
              India's regulated peer-to-peer rooftop solar energy trading marketplace, empowering prosumers and communities to manage, share, and benefit from clean renewable energy through smart grid optimisation.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#10B981]">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Regulated Peer-to-Peer Clean Energy Platform</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/80">
              <Mail className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Direct Inquiries: </span>
              <a href="mailto:contact@marichi.energy" className="text-[#F5A623] hover:underline font-medium">
                contact@marichi.energy
              </a>
            </div>
          </div>

          {/* Col 3: Company Links */}
          <div className="md:pl-6 lg:pl-12">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <a href="#about" className="hover:text-[#F5A623] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#ceo-message" className="hover:text-[#F5A623] transition-colors">Founder's Vision</a>
              </li>
              <li>
                <a href="#partners" className="hover:text-[#F5A623] transition-colors">Partners & Support</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5A623] transition-colors">Careers & Alliances</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Marichi Energy Solutions Pvt. Ltd. All rights reserved. Registered under Indian Companies Act.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F5A623] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F5A623] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F5A623] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-[#F5A623] hover:text-[#14171F] transition-all flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium hidden sm:inline">Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

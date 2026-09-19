import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { MarichiLogo } from './MarichiLogo';

interface NavbarProps {
  onOpenWaitlist: (role?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Savings Calculator', href: '#calculator' },
    { name: 'About', href: '#about' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] border-b border-[#14171F]/5 py-2.5'
            : 'bg-transparent py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Authentic Brand Logo from MARICHI- NO BG.png */}
            <a
              id="brand-logo-link"
              href="#"
              className="flex items-center group focus:outline-none transition-transform duration-200 hover:opacity-90"
              aria-label="Marichi Energy Home"
            >
              <MarichiLogo className="h-12 sm:h-14 md:h-[58px]" variant="full" />
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#5A5F6B] hover:text-[#1A1A1A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F5A623] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action */}
            <div className="hidden md:flex items-center gap-4">
              <button
                id="header-cta-button"
                onClick={() => onOpenWaitlist()}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#F5A623] hover:bg-[#E69500] text-[#14171F] font-semibold text-sm tracking-wide shadow-[0_4px_16px_rgba(245,166,35,0.32)] hover:shadow-[0_8px_24px_rgba(245,166,35,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#1A1A1A] hover:bg-black/5 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-drawer-content"
            className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#FAF9F6] p-6 shadow-2xl flex flex-col justify-between border-l border-[#14171F]/10 animate-slide-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#14171F]/10">
                <MarichiLogo className="h-11 sm:h-12" variant="full" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-[#5A5F6B] hover:text-[#1A1A1A]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-[#1A1A1A] hover:text-[#F5A623] py-2 transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-[#5A5F6B]/40" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#14171F]/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full py-3 px-5 rounded-full bg-[#F5A623] hover:bg-[#E69500] text-[#14171F] font-semibold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center">
                <span className="text-xs text-[#5A5F6B] flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                  Regulated P2P Clean Energy Platform
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

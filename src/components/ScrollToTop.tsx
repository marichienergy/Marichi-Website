import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const heroElement = document.getElementById('hero-section');

    const handleScroll = () => {
      // Calculate scroll progress percentage (0 to 100)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Check if user has scrolled past hero section
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect();
        // Button appears once bottom of hero is above viewport top (or scrolled > 500px)
        setIsVisible(heroRect.bottom <= 80 || window.scrollY > 500);
      } else {
        setIsVisible(window.scrollY > 400);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circular progress math (circumference = 2 * PI * r)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        id="scroll-to-top-button"
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        title="Scroll to top"
        className="relative group w-12 h-12 rounded-full bg-[#14171F] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(20,23,31,0.25)] hover:shadow-[0_12px_28px_rgba(245,166,35,0.35)] hover:bg-[#1A1E29] border border-white/10 hover:border-[#F5A623]/50 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] focus-visible:ring-offset-2"
      >
        {/* Subtle SVG circular scroll indicator */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 44 44"
          aria-hidden="true"
        >
          {/* Background track */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="2.5"
          />
          {/* Progress fill */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="#F5A623"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-[stroke-dashoffset] duration-150"
          />
        </svg>

        {/* Center Arrow Icon */}
        <ArrowUp className="w-5 h-5 text-white/90 group-hover:text-[#F5A623] transition-colors duration-200" />

        {/* Hover Tooltip on Desktop */}
        <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-[#14171F] text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-white/10">
          Scroll to Top
        </span>
      </button>
    </div>
  );
};

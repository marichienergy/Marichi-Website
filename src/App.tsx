/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { HowItWorks } from './components/HowItWorks';
import { Calculator } from './components/Calculator';
import { Benefits } from './components/Benefits';
import { CeoMessage } from './components/CeoMessage';
import { AboutTeam } from './components/AboutTeam';
import { LeadCapture } from './components/LeadCapture';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { WaitlistModal } from './components/WaitlistModal';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistRole, setWaitlistRole] = useState<string>('prosumer');
  const [waitlistEmail, setWaitlistEmail] = useState<string>('');
  const [videoOpen, setVideoOpen] = useState(false);

  const handleOpenWaitlist = (role: string = 'prosumer', email: string = '') => {
    setWaitlistRole(role);
    setWaitlistEmail(email);
    setWaitlistOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-[#F5A623]/25 selection:text-[#14171F]">
      {/* Top sticky navigation */}
      <Navbar onOpenWaitlist={(role) => handleOpenWaitlist(role || 'prosumer')} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onOpenWaitlist={(email) => handleOpenWaitlist('prosumer', email)}
          onOpenVideo={() => setVideoOpen(true)}
        />

        {/* Backed & Recognized By Logos */}
        <Partners />

        {/* How It Works (Seller & Buyer Flow) */}
        <HowItWorks onOpenWaitlist={(role) => handleOpenWaitlist(role)} />

        {/* Interactive P2P Tariff & Savings Calculator */}
        <Calculator onOpenWaitlist={(role) => handleOpenWaitlist(role)} />

        {/* Benefits Grid */}
        <Benefits onOpenWaitlist={(role) => handleOpenWaitlist(role || 'prosumer')} />

        {/* Editorial Message From Founder & CEO */}
        <CeoMessage />

        {/* About Us & Leadership Team */}
        <AboutTeam />

        {/* High-Contrast Dark Lead Capture Box */}
        <LeadCapture onOpenWaitlist={(email) => handleOpenWaitlist('prosumer', email)} />

        {/* Contact & Inquiries */}
        <Contact />
      </main>

      {/* Dark Footer */}
      <Footer onOpenWaitlist={(role) => handleOpenWaitlist(role || 'prosumer')} />

      {/* Modals */}
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        onOpenWaitlist={() => {
          setVideoOpen(false);
          handleOpenWaitlist('prosumer');
        }}
      />

      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
        initialRole={waitlistRole}
        initialEmail={waitlistEmail}
      />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

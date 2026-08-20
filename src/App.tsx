/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { TrustStrip } from './components/sections/TrustStrip';
import { Services } from './components/sections/Services';
import { FeaturedService } from './components/sections/FeaturedService';
import { AppointmentForm } from './components/sections/AppointmentForm';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { PatientJourney } from './components/sections/PatientJourney';
import { Facilities } from './components/sections/Facilities';
import { About } from './components/sections/About';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-teal-200 selection:text-teal-900">
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <FeaturedService />
        <AppointmentForm />
        <WhyChooseUs />
        <PatientJourney />
        <Facilities />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}


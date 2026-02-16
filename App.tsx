import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Problem from './components/Problem';
import Mechanism from './components/Mechanism';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-brand-200 selection:text-brand-900">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Mechanism />
        <Showcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
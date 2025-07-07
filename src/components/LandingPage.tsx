import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import AppShowcase from './AppShowcase';
import CallToAction from './CallToAction';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <AppShowcase />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LandingPage;
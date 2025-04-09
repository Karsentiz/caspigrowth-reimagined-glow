
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WorkShowcase from '../components/WorkShowcase';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { initRevealAnimations } from '../utils/animations';

const Index = () => {
  useEffect(() => {
    const cleanup = initRevealAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WorkShowcase />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

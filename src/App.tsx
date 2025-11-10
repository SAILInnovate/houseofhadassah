import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Menu from './components/Menu';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // Add the `overflow-x-hidden` class here
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <Menu />
      <HowItWorks />
      <Reviews />
      <EnquiryForm />
      <Footer />
    </div>
  );
}

export default App;
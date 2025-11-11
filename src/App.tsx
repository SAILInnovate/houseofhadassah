import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ChristmasBanner from './components/ChristmasBanner';
import OurStory from './components/OurStory';
import Menu from './components/Menu';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';

function App() {
  // This useEffect hook is for the "fade-in-up" animations
  // It finds all elements with that class and makes them visible
  // as the user scrolls them into view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 } // The animation triggers when 10% of the element is visible
    );

    // Get all elements that should have the fade-in animation
    const elementsToAnimate = document.querySelectorAll('.fade-in-up');
    elementsToAnimate.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup function to stop observing when the component unmounts
    return () => {
      elementsToAnimate.forEach((el) => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []); // The empty array [] ensures this effect runs only once after the component mounts

  // This is the main structure of your website.
  // Each component is a section of the page, rendered in order.
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <ChristmasBanner />
      <OurStory />
      <Menu />
      <Services />
      <HowItWorks />
      <Reviews />
      <EnquiryForm />
      <Footer />
    </div>
  );
}

export default App;
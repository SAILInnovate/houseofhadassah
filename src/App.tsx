import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Menu from './components/Menu';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import { ShoppingBag, ArrowDown } from 'lucide-react'; // Import icons

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  // Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // --- LOGIC: Add/Remove Items ---
  const toggleItem = (itemName) => {
    setSelectedItems((prev) => {
      if (prev.includes(itemName)) {
        return prev.filter((i) => i !== itemName); // Remove if exists
      } else {
        return [...prev, itemName]; // Add if new
      }
    });
  };

  // --- LOGIC: Scroll to Form ---
  const scrollToForm = () => {
    const formSection = document.getElementById('enquiries');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden pb-20 md:pb-0"> 
      <Navigation />
      <Hero />
      <OurStory />
      
      {/* Pass the selection logic to the Menu */}
      <Menu selectedItems={selectedItems} toggleItem={toggleItem} />
      
      <Services />
      <HowItWorks />
      <Reviews />
      
      {/* Pass the selected items to the Form */}
      <EnquiryForm selectedItems={selectedItems} />
      
      <Footer />

      {/* --- FLOATING ACTION BAR (Mobile Friendly) --- */}
      {selectedItems.length > 0 && (
        <div className="fixed bottom-6 left-4 right-4 z-50 animate-bounce-in">
          <button 
            onClick={scrollToForm}
            className="w-full bg-[#2C1810] text-[#FDFBF7] py-4 px-6 rounded-full shadow-2xl flex items-center justify-between border border-[#C6A87C]"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#C6A87C] text-[#2C1810] w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                {selectedItems.length}
              </div>
              <span className="font-medium">Items Selected</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#C6A87C]">
              Complete Quote <ArrowDown size={18} />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
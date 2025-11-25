import { Heart, Instagram, Facebook, ArrowUp } from 'lucide-react';
import ClickSpark from './ClickSpark';

// Simple reusable TikTok icon since it's not in Lucide
const TiktokIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16.6 5.82s.51.5 0 0A4.27 4.27 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.59 2.59 2.59 0 0 1-2.59-2.59 2.59 2.59 0 0 1 2.59-2.59h.4v-3.73h-.4a6.3 6.3 0 0 0-6.3 6.3 6.3 6.3 0 0 0 6.3 6.3 6.3 6.3 0 0 0 6.3-6.3V9.17a8.4 8.4 0 0 0 4.27-4.27s-.46.51 0 0z"></path>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2C1810] text-[#E5E0D8] pt-20 pb-10 relative overflow-hidden">
      
      {/* Background Texture (Subtle Grain) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E')" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 border-b border-[#E5E0D8]/10 pb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl text-white tracking-wide">HADASSAH<span className="text-[var(--color-accent)]">.</span></h3>
              <p className="text-sm tracking-widest uppercase opacity-70 mt-1">Authentic West African Cuisine</p>
            </div>
            <p className="text-[#E5E0D8]/70 leading-relaxed text-sm max-w-xs">
              Bringing the warmth, spice, and soul of home cooking to your special events. Based in Eccles, Salford.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/house_of_hadassah_bites/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/houseofhadassahbites" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors"><Facebook size={20} /></a>
              <a href="https://www.tiktok.com/@houseofhadassahbites" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors"><TiktokIcon className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-[#E5E0D8]/70">
              <li><a href="#menu" className="hover:text-white hover:translate-x-1 transition-all inline-block">Our Menu</a></li>
              <li><a href="#story" className="hover:text-white hover:translate-x-1 transition-all inline-block">Our Story</a></li>
              <li><a href="#reviews" className="hover:text-white hover:translate-x-1 transition-all inline-block">Testimonials</a></li>
              <li><a href="#enquiries" className="hover:text-white hover:translate-x-1 transition-all inline-block">Get a Quote</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-[#E5E0D8]/70">
              <li>Eccles, Salford, UK</li>
              <li><a href="mailto:info@houseofhadassah.com" className="hover:text-[var(--color-accent)] transition-colors">info@houseofhadassah.com</a></li>
              <li>Mon - Fri: 9am - 6pm</li>
              <li className="text-[var(--color-accent)] mt-4 font-semibold">Pre-orders Only</li>
            </ul>
          </div>

          {/* Newsletter / Action */}
          <div>
             <h4 className="font-serif text-lg text-white mb-6">Stay Updated</h4>
             <p className="text-sm text-[#E5E0D8]/70 mb-4">Join our mailing list for seasonal menu updates and exclusive offers.</p>
             <form className="flex flex-col gap-3">
               <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
               />
               <ClickSpark sparkColor="#D96C4A">
                <button type="submit" className="w-full bg-[var(--color-accent)] text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-[#C25B3B] transition-colors">
                  Subscribe
                </button>
               </ClickSpark>
             </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#E5E0D8]/40">
          <p>
            © {currentYear} House of Hadassah Bites. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
             <span className="flex items-center gap-1">
               Made with <Heart size={12} fill="#D96C4A" className="text-[var(--color-accent)]" /> in Manchester
             </span>
             <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-white transition-colors group">
               Back to Top <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform"/>
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
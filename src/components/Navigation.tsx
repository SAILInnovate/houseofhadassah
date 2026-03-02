import { useState, useEffect } from 'react';
import { Utensils, Menu as MenuIcon, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
            ? 'bg-[#FDFBF7]/90 backdrop-blur-md py-3 shadow-sm border-b border-[#E5E0D8]'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* LOGO */}
            <a href="#hero" className="flex items-center gap-2 group z-50 relative">
              <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-[var(--color-accent)] text-white' : 'bg-white text-[var(--color-accent)]'}`}>
                <Utensils size={20} />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold text-lg tracking-tight leading-none ${isScrolled ? 'text-[var(--color-brown)]' : 'text-[var(--color-brown)]'}`}>
                  HADASSAH
                </span>
                <span className={`font-sans text-xs font-medium tracking-widest uppercase ${isScrolled ? 'text-[var(--color-accent)]' : 'text-[var(--color-accent)]'}`}>
                  Bites
                </span>
              </div>
            </a>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[var(--color-brown)] font-medium text-sm hover:text-[var(--color-accent)] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all group-hover:w-full"></span>
                </a>
              ))}

              <div className="w-px h-6 bg-[#E5E0D8]"></div>

              <a
                href="#enquiries"
                className="bg-[var(--color-brown)] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-[var(--color-accent)] hover:shadow-lg hover:shadow-orange-900/20 transform hover:-translate-y-0.5"
              >
                Order Now
              </a>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[var(--color-brown)] hover:bg-[#E5E0D8] rounded-full transition-colors z-50 relative"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-[#FDFBF7] flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        {/* Background Texture for Mobile Menu */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,...')" }}></div>

        <div className="flex flex-col items-center space-y-8 p-4">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-serif text-[var(--color-brown)] hover:text-[var(--color-accent)] transition-colors"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}

          <div className="w-16 h-1 bg-[var(--color-accent)] rounded-full my-4"></div>

          <a
            href="#enquiries"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[var(--color-brown)] text-white px-10 py-4 rounded-full text-xl font-medium shadow-xl shadow-orange-900/10 active:scale-95 transition-transform"
          >
            Order Now
          </a>

          {/* Mobile Footer Info */}
          <div className="absolute bottom-10 text-center space-y-2 text-[var(--color-text-muted)] text-sm">
            <p>Eccles, Salford</p>
            <p>Open for Pre-Orders</p>
          </div>
        </div>
      </div>
    </>
  );
}
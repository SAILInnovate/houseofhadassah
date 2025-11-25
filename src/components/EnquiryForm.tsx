import { useState } from 'react';
import { Instagram, Facebook, Send, Check, Sparkles } from 'lucide-react';
import ClickSpark from './ClickSpark';

// Reusable TikTok Icon
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

export default function EnquiryForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', eventDate: '', guestCount: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', eventDate: '', guestCount: '', message: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // --- SUCCESS STATE ---
  if (isSubmitted) {
    return (
      <section id="enquiries" className="py-24 bg-[#FDFBF7] flex items-center justify-center min-h-[600px]">
        <div className="max-w-xl mx-auto px-4 w-full">
          <div className="bg-white rounded-[2rem] soft-shadow p-12 text-center space-y-6 border border-[#E5E0D8] fade-in-up visible">
            <div className="w-20 h-20 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={40} className="text-[#2F855A]" />
            </div>
            <h2 className="text-4xl font-serif text-[var(--color-brown)]">Enquiry Received</h2>
            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
              Thank you, <span className="font-bold text-[var(--color-brown)]">{formData.name}</span>. 
              <br />We have received your details and will be in touch within 24 hours to plan your feast.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // --- FORM STATE ---
  return (
    <section id="enquiries" className="py-24 lg:py-32 bg-[#FDFBF7] relative">
      
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/4 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--color-accent)] font-bold tracking-widest text-sm uppercase mb-3 block">
            Let's Celebrate
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--color-brown)] font-serif mb-6">
            Start Your Order
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-lg mx-auto">
            Ready to make your event unforgettable? Tell us about your vision, and we'll handle the flavors.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-[2rem] soft-shadow border border-[#E5E0D8] p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider block">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full bg-transparent border-b border-[#D6CDC5] py-3 text-xl text-[var(--color-brown)] focus:border-[var(--color-accent)] focus:outline-none transition-colors placeholder:text-gray-300 font-serif" 
                placeholder="e.g. Esther Johnson"
              />
            </div>

            {/* Grid for Contact Info */}
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider block">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full bg-transparent border-b border-[#D6CDC5] py-3 text-lg text-[var(--color-brown)] focus:border-[var(--color-accent)] focus:outline-none transition-colors placeholder:text-gray-300" 
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider block">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  className="w-full bg-transparent border-b border-[#D6CDC5] py-3 text-lg text-[var(--color-brown)] focus:border-[var(--color-accent)] focus:outline-none transition-colors placeholder:text-gray-300" 
                  placeholder="07XXX XXXXXX"
                />
              </div>
            </div>

            {/* Grid for Event Details */}
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label htmlFor="eventDate" className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider block">Event Date</label>
                <input 
                  type="date" 
                  id="eventDate" 
                  name="eventDate" 
                  value={formData.eventDate} 
                  onChange={handleChange} 
                  required 
                  className="w-full bg-transparent border-b border-[#D6CDC5] py-3 text-lg text-[var(--color-brown)] focus:border-[var(--color-accent)] focus:outline-none transition-colors font-sans"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="guestCount" className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider block">Approx. Guests</label>
                <input 
                  type="number" 
                  id="guestCount" 
                  name="guestCount" 
                  value={formData.guestCount} 
                  onChange={handleChange} 
                  required 
                  min="1" 
                  className="w-full bg-transparent border-b border-[#D6CDC5] py-3 text-lg text-[var(--color-brown)] focus:border-[var(--color-accent)] focus:outline-none transition-colors placeholder:text-gray-300" 
                  placeholder="e.g. 50"
                />
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-4">
              <label htmlFor="message" className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider block">Tell us about your event</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows={4} 
                className="w-full bg-[#F9F7F5] rounded-xl px-6 py-4 text-base text-[var(--color-brown)] border border-transparent focus:border-[var(--color-accent)] focus:bg-white focus:outline-none transition-all resize-none placeholder:text-gray-400" 
                placeholder="Any dietary requirements, specific dishes you love, or questions?..."
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <div className="pt-4">
              <ClickSpark sparkColor="#D96C4A">
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-[var(--color-brown)] text-white h-16 rounded-full text-lg font-medium tracking-wide shadow-lg shadow-orange-900/10 hover:bg-[var(--color-accent)] hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Send Enquiry <Send size={18} />
                    </>
                  )}
                </button>
              </ClickSpark>
              <p className="text-center text-xs text-[var(--color-text-muted)] mt-4">
                We respect your privacy. Your details are safe with us.
              </p>
            </div>
          </form>
        </div>

        {/* Social Connections */}
        <div className="mt-16 text-center space-y-8">
          <div className="flex items-center justify-center gap-4 opacity-30">
             <div className="h-px w-12 bg-[var(--color-brown)]"></div>
             <Sparkles size={16} className="text-[var(--color-brown)]" />
             <div className="h-px w-12 bg-[var(--color-brown)]"></div>
          </div>
          
          <p className="text-[var(--color-brown)] font-serif text-2xl italic">Connect with us socially</p>
          
          <div className="flex justify-center gap-6">
            
            <ClickSpark sparkColor="#E1306C">
              <a href="https://www.instagram.com/house_of_hadassah_bites/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full soft-shadow flex items-center justify-center text-[var(--color-brown)] transition-all hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:-translate-y-2" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </ClickSpark>
            
            <ClickSpark sparkColor="#1877F2">
              <a href="https://www.facebook.com/houseofhadassahbites" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full soft-shadow flex items-center justify-center text-[var(--color-brown)] transition-all hover:bg-[#1877F2] hover:text-white hover:-translate-y-2" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </ClickSpark>
            
            <ClickSpark sparkColor="#000000">
              <a href="https://www.tiktok.com/@houseofhadassahbites" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-full soft-shadow flex items-center justify-center text-[var(--color-brown)] transition-all hover:bg-black hover:text-white hover:-translate-y-2" aria-label="TikTok">
                <TiktokIcon className="w-6 h-6" />
              </a>
            </ClickSpark>

          </div>
        </div>
      </div>
    </section>
  );
}
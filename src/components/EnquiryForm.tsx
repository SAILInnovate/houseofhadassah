import { useState, FormEvent } from 'react';
import { Instagram, Facebook, Send, CheckCircle } from 'lucide-react';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        guestCount: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <section id="enquiries" className="py-16 lg:py-24 bg-[#F5F3F0]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-black neo-shadow p-12 text-center space-y-6">
            <CheckCircle size={80} className="text-[#2F855A] mx-auto" />
            <h2 className="text-4xl text-[#562B00]">ENQUIRY RECEIVED!</h2>
            <p className="text-xl text-[#212121]">
              Thank you for your interest. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="enquiries" className="py-16 lg:py-24 bg-[#F5F3F0]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl text-[#562B00] mb-4">GET IN TOUCH</h2>
          <div className="w-32 h-1 bg-[#E2725B] mx-auto mb-6" />
          <p className="text-xl text-[#212121]">
            Ready to make your event unforgettable? Let's talk about your vision.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border-2 border-black neo-shadow p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-[#562B00] mb-2">
              YOUR NAME *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-[#E2725B] text-lg transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#562B00] mb-2">
                EMAIL *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-[#E2725B] text-lg transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#562B00] mb-2">
                PHONE *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-[#E2725B] text-lg transition-colors"
                placeholder="07XXX XXXXXX"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="eventDate" className="block text-sm font-semibold text-[#562B00] mb-2">
                EVENT DATE *
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-[#E2725B] text-lg transition-colors"
              />
            </div>

            <div>
              <label htmlFor="guestCount" className="block text-sm font-semibold text-[#562B00] mb-2">
                GUEST COUNT *
              </label>
              <input
                type="number"
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-[#E2725B] text-lg transition-colors"
                placeholder="50"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-[#562B00] mb-2">
              TELL US ABOUT YOUR EVENT *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-[#E2725B] text-lg transition-colors resize-none"
              placeholder="Tell us about your event, dietary requirements, or any special requests..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#562B00] text-white px-8 py-4 border-2 border-black neo-shadow text-lg font-semibold transition-all hover:bg-[#E2725B] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                SENDING...
              </>
            ) : (
              <>
                SUBMIT ENQUIRY
                <Send size={20} />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center space-y-6">
          <p className="text-[#212121] text-lg">Or connect with us on social media</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/house_of_hadassah_bites/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-black neo-shadow p-4 transition-all hover:bg-[#E2725B] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000]"
              aria-label="Instagram"
            >
              <Instagram size={32} className="text-[#562B00]" />
            </a>
            <a
              href="https://www.facebook.com/houseofhadassahbites"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-black neo-shadow p-4 transition-all hover:bg-[#E2725B] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000]"
              aria-label="Facebook"
            >
              <Facebook size={32} className="text-[#562B00]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

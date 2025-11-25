import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import ClickSpark from './ClickSpark';

const reviews = [
  {
    name: 'Sarah Johnson',
    text: "House of Hadassah Bites catered my daughter's graduation party and the food was INCREDIBLE! The jollof rice was the best I've ever had. Every single guest asked for the contact details!",
    rating: 5
  },
  {
    name: 'Michael Okafor',
    text: "Authentic flavours that reminded me of home. The moi moi and efo riro were perfection. Professional service and everything arrived exactly on time. Highly recommended!",
    rating: 5
  },
  {
    name: 'Emma Williams',
    text: "We hired them for our corporate event and they exceeded all expectations. The presentation was beautiful and the food was devoured within minutes. Will definitely use them again!",
    rating: 5
  },
  {
    name: 'David Adebayo',
    text: "From start to finish, the experience was seamless. Great communication, fair pricing, and most importantly, delicious authentic food. The puff puff was a massive hit!",
    rating: 5
  }
];

function ReviewCard({ review }) {
  // Get initials for the avatar
  const initials = review.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2);

  return (
    <div className="relative bg-white p-8 rounded-[2rem] border border-[#F0EAE0] soft-shadow h-full flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-200">
      
      {/* Decorative Background Quote Icon */}
      <div className="absolute top-6 right-6 text-[#F5F2ED] group-hover:text-[#FDFBF7] transition-colors duration-300">
        <Quote size={64} fill="currentColor" stroke="none" />
      </div>

      {/* Header: Avatar + Info */}
      <div className="relative z-10 flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-[#F3EFEA] flex items-center justify-center text-[var(--color-brown)] font-serif font-bold tracking-wider border border-[#E5E0D8]">
          {initials}
        </div>
        <div>
          <p className="font-serif font-bold text-lg text-[var(--color-brown)] leading-tight">
            {review.name}
          </p>
          <div className="flex gap-1 mt-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                fill="#C6A87C" 
                className="text-[#C6A87C]" 
                strokeWidth={0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Body Text */}
      <p className="relative z-10 text-[var(--color-text-muted)] leading-relaxed flex-grow font-light">
        "{review.text}"
      </p>
    </div>
  );
}

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // Changed breakpoint to tablet for better carousel experience
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-[#FDFBF7] relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5E0D8] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 fade-in-up visible">
          <span className="text-[var(--color-accent)] font-bold tracking-widest text-sm uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--color-brown)] font-serif mb-6">
            Loved by Locals
          </h2>
          <div className="w-24 h-1 bg-[#E5E0D8] mx-auto" />
        </div>

        {isMobile ? (
          <div className="relative max-w-xl mx-auto fade-in-up visible">
            
            {/* Mobile/Tablet Card View */}
            <div className="min-h-[300px]">
              <ReviewCard review={reviews[currentIndex]} />
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-6 mt-10">
              
              <ClickSpark sparkColor="#D96C4A">
                <button
                  onClick={prevReview}
                  className="w-14 h-14 rounded-full border border-[#E5E0D8] bg-white text-[var(--color-brown)] flex items-center justify-center transition-all hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] shadow-sm"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={24} />
                </button>
              </ClickSpark>

              <div className="text-sm font-medium text-[var(--color-text-muted)] tracking-widest">
                {currentIndex + 1} / {reviews.length}
              </div>

              <ClickSpark sparkColor="#D96C4A">
                <button
                  onClick={nextReview}
                  className="w-14 h-14 rounded-full border border-[#E5E0D8] bg-white text-[var(--color-brown)] flex items-center justify-center transition-all hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] shadow-sm"
                  aria-label="Next review"
                >
                  <ChevronRight size={24} />
                </button>
              </ClickSpark>

            </div>
          </div>
        ) : (
          /* Desktop Grid View */
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="fade-in-up visible" 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
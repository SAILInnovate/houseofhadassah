import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import ClickSpark from './ClickSpark';

const reviews = [
  {
    name: 'Sarah Johnson',
    text: "House of Hadassah Bites catered my daughter's graduation party and the food was INCREDIBLE! The jollof rice was the best I've ever had. Every single guest asked for the contact details!",
    rating: 5,
    date: '2 weeks ago'
  },
  {
    name: 'Michael Okafor',
    text: "Authentic flavours that reminded me of home. The moi moi and efo riro were perfection. Professional service and everything arrived exactly on time. Highly recommended!",
    rating: 5,
    date: '1 month ago'
  },
  {
    name: 'Emma Williams',
    text: "We hired them for our corporate event and they exceeded all expectations. The presentation was beautiful and the food was devoured within minutes. Will definitely use them again! The portions were generous and everything was hot.",
    rating: 5,
    date: '3 weeks ago'
  },
  {
    name: 'David Adebayo',
    text: "From start to finish, the experience was seamless. Great communication, fair pricing, and most importantly, delicious authentic food. The puff puff was a massive hit!",
    rating: 5,
    date: '2 months ago'
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
    <div className="relative bg-white p-8 rounded-[2rem] border-t-4 border-t-[var(--color-accent)] border-x border-b border-[#F0EAE0] soft-shadow h-full flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C6A87C]/10 overflow-hidden">
      
      {/* Decorative Background Quote - Large and faint */}
      <div className="absolute -top-4 -right-4 text-[var(--color-accent)] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 scale-150 rotate-12 pointer-events-none">
        <Quote size={120} fill="currentColor" stroke="none" />
      </div>

      {/* Header: Avatar + Info */}
      <div className="relative z-10 flex items-start gap-4 mb-5 shrink-0">
        {/* Avatar with Gradient */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2C1810] to-[#562B00] flex items-center justify-center text-[#FDFBF7] font-serif font-bold tracking-wider shadow-md shrink-0">
          {initials}
        </div>
        
        <div className="flex-1 min-w-0"> {/* min-w-0 prevents flex child from overflowing */}
          <div className="flex justify-between items-start">
            <h3 className="font-sans font-bold text-lg text-[var(--color-brown)] leading-tight truncate pr-2">
              {review.name}
            </h3>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mt-1 shrink-0">
              {review.date}
            </span>
          </div>
          
          <div className="flex items-center gap-2 mt-1">
            <div className="flex gap-0.5">
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
            {/* Verified Badge */}
            <div className="hidden sm:flex items-center gap-1 text-[10px] text-green-700 bg-green-50 px-2 py-0.5 rounded-full font-medium border border-green-100">
               <CheckCircle2 size={10} /> Verified
            </div>
          </div>
        </div>
      </div>

      {/* Body Text */}
      {/* 
          1. overflow-hidden: Ensures nothing spills out
          2. line-clamp-5: Limits text to 5 lines maximum (adds ...)
          3. break-words: Prevents long words from breaking layout
      */}
      <blockquote className="relative z-10 flex-grow overflow-hidden">
        <p className="text-[var(--color-brown)] opacity-80 leading-relaxed font-serif italic text-lg line-clamp-5 break-words">
          "{review.text}"
        </p>
      </blockquote>
    </div>
  );
}

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSlide = (direction) => {
    setAnimating(true);
    setTimeout(() => {
        if (direction === 'next') {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
        }
        setAnimating(false);
    }, 200); 
  };

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-[#FDFBF7] relative overflow-hidden">
      
      {/* Background decoration - Organic shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C6A87C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2C1810]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 fade-in-up visible">
          <span className="text-[var(--color-accent)] font-bold tracking-widest text-sm uppercase mb-3 block flex items-center justify-center gap-2">
             <Star size={14} fill="currentColor"/> Testimonials <Star size={14} fill="currentColor"/>
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--color-brown)] font-serif mb-6">
            The Talk of the Town
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto text-lg font-light">
            Don't just take our word for it. Here is what our lovely customers have to say about the Hadassah experience.
          </p>
        </div>

        {isMobile ? (
          <div className="relative max-w-xl mx-auto">
            
            {/* Mobile/Tablet Card View - Fixed Height container to prevent jumping */}
            <div className={`transition-opacity duration-200 h-[320px] ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <ReviewCard review={reviews[currentIndex]} />
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-6 mt-8">
              
              <ClickSpark sparkColor="#D96C4A">
                <button
                  onClick={() => handleSlide('prev')}
                  className="w-12 h-12 rounded-full border border-[#E5E0D8] bg-white text-[var(--color-brown)] flex items-center justify-center transition-all hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] shadow-sm active:scale-90"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={20} />
                </button>
              </ClickSpark>

              <div className="flex gap-2">
                {reviews.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[var(--color-accent)]' : 'w-2 bg-[#E5E0D8]'}`}
                    ></div>
                ))}
              </div>

              <ClickSpark sparkColor="#D96C4A">
                <button
                  onClick={() => handleSlide('next')}
                  className="w-12 h-12 rounded-full border border-[#E5E0D8] bg-white text-[var(--color-brown)] flex items-center justify-center transition-all hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] shadow-sm active:scale-90"
                  aria-label="Next review"
                >
                  <ChevronRight size={20} />
                </button>
              </ClickSpark>

            </div>
          </div>
        ) : (
          /* Desktop Grid View */
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="fade-in-up visible h-full" 
                style={{ transitionDelay: `${index * 150}ms` }}
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
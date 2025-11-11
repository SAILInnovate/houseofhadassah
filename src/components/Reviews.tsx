import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import ClickSpark from './ClickSpark'; // Import the component

const reviews = [
  // ... (your reviews array remains the same)
  {
    name: 'Sarah Johnson',
    text: 'House of Hadassah Bites catered my daughter\'s graduation party and the food was INCREDIBLE! The jollof rice was the best I\'ve ever had. Every single guest asked for the contact details!',
    rating: 5
  },
  {
    name: 'Michael Okafor',
    text: 'Authentic flavours that reminded me of home. The moi moi and efo riro were perfection. Professional service and everything arrived exactly on time. Highly recommended!',
    rating: 5
  },
  {
    name: 'Emma Williams',
    text: 'We hired them for our corporate event and they exceeded all expectations. The presentation was beautiful and the food was devoured within minutes. Will definitely use them again!',
    rating: 5
  },
  {
    name: 'David Adebayo',
    text: 'From start to finish, the experience was seamless. Great communication, fair pricing, and most importantly, delicious authentic food. The puff puff was a massive hit!',
    rating: 5
  }
];

function ReviewCard({ review }) {
  return (
    <div className="bg-white border-2 border-black neo-shadow p-8 space-y-4 h-full">
      <div className="flex gap-1">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={20} fill="#E2725B" className="text-[#E2725B]" />
        ))}
      </div>
      <p className="text-[#212121] leading-relaxed italic">"{review.text}"</p>
      <p className="font-semibold text-[#562B00]">— {review.name}</p>
    </div>
  );
}

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
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
    <section id="reviews" className="py-16 lg:py-24 border-b-2 border-black bg-[#F5F3F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#562B00] mb-4">WHAT PEOPLE SAY</h2>
          <div className="w-32 h-1 bg-[var(--color-accent)] mx-auto" />
        </div>

        {isMobile ? (
          <div className="relative">
            <ReviewCard review={reviews[currentIndex]} />
            <div className="flex justify-center gap-4 mt-8">
              {/* Wrap the "PREV" button */}
              <ClickSpark sparkColor="#FDFBF8">
                <button
                  onClick={prevReview}
                  className="bg-[#562B00] text-white px-6 py-3 border-2 border-black neo-shadow font-semibold transition-all hover:bg-[var(--color-accent)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000]"
                >
                  ← PREV
                </button>
              </ClickSpark>
              {/* Wrap the "NEXT" button */}
              <ClickSpark sparkColor="#FDFBF8">
                <button
                  onClick={nextReview}
                  className="bg-[#562B00] text-white px-6 py-3 border-2 border-black neo-shadow font-semibold transition-all hover:bg-[var(--color-accent)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000]"
                >
                  NEXT →
                </button>
              </ClickSpark>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
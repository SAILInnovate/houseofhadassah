import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Sparkles } from 'lucide-react';

export default function ChristmasBanner() {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  // Set the initial hidden position of the marquee
  useEffect(() => {
    gsap.set(marqueeRef.current, { y: '101%' });
    gsap.set(marqueeInnerRef.current, { y: '-101%' });
  }, []);

  const animationDefaults = { duration: 0.8, ease: 'power3.out' };

  const findClosestEdge = (mouseY, height) => {
    return mouseY < height / 2 ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev) => {
    if (window.innerWidth < 768) return; 
    
    const rect = itemRef.current.getBoundingClientRect();
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(y, rect.height);

    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
  };

  const handleMouseLeave = (ev) => {
    if (window.innerWidth < 768) return; 
    
    const rect = itemRef.current.getBoundingClientRect();
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(y, rect.height);

    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' });
  };

  // The marquee content - Updated Typography
  const MarqueeContent = () => (
    <div className="flex items-center justify-around flex-shrink-0 w-1/2">
      <span className="text-[#FDFBF7] whitespace-nowrap font-serif italic text-xl md:text-4xl px-8">
        Festive Feast Discount
      </span>
      <Sparkles size={24} className="text-[#C6A87C]" />
      <span className="text-[#FDFBF7] whitespace-nowrap font-sans font-bold text-xl md:text-4xl px-8 tracking-widest">
        20% OFF PRE-ORDERS
      </span>
      <Sparkles size={24} className="text-[#C6A87C]" />
    </div>
  );

  return (
    <section 
      ref={itemRef}
      className="group relative overflow-hidden bg-[#1A3C34] h-56 sm:h-64 rounded-[2rem] mx-4 sm:mx-6 lg:mx-8 my-12 cursor-pointer soft-shadow"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {/* Static Content (Visible by default) */}
      <a href="#enquiries" className="flex flex-col items-center justify-center h-full text-center text-white p-6 relative z-10">
        
        {/* Border Decoration inside the card */}
        <div className="absolute inset-4 border border-[#C6A87C]/30 rounded-[1.5rem] pointer-events-none"></div>

        <span className="text-[#C6A87C] uppercase tracking-[0.2em] text-xs sm:text-sm mb-3 font-medium">
          Limited Time Offer
        </span>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic mb-4 text-[#FDFBF7]">
          Christmas Pre-Orders
        </h2>
        
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#C6A87C]/50"></div>
          <p className="font-sans text-[#FDFBF7]/80 text-sm sm:text-base tracking-wide">
            Tap or hover to reveal your gift
          </p>
          <div className="h-px w-8 bg-[#C6A87C]/50"></div>
        </div>
      </a>

      {/* The Hidden Marquee Overlay - Deep Wine Red Background */}
      <div ref={marqueeRef} className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-[#581C1C]">
        <div ref={marqueeInnerRef} className="w-full h-full flex items-center">
          <div className="flex items-center w-[200%] animate-marquee">
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>
      </div>
    </section>
  );
}
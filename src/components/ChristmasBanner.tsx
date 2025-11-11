import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function ChristmasBanner() {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  // Set the initial hidden position of the marquee to prevent a flash on load
  useEffect(() => {
    gsap.set(marqueeRef.current, { y: '101%' });
    gsap.set(marqueeInnerRef.current, { y: '-101%' });
  }, []);

  const animationDefaults = { duration: 0.7, ease: 'expo' };

  const findClosestEdge = (mouseY, height) => {
    return mouseY < height / 2 ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev) => {
    // Disable hover effect on touch devices for a better user experience
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

  // The marquee's content, repeated for a seamless loop
  const MarqueeContent = () => (
    <div className="flex items-center justify-around flex-shrink-0 w-1/2">
      <span className="text-white whitespace-nowrap uppercase font-extrabold text-lg sm:text-2xl md:text-4xl px-4 md:px-8">
        20% DISCOUNT
      </span>
      <span className="text-white opacity-75 text-xl md:text-3xl px-4 md:px-8">✦</span>
      <span className="text-white whitespace-nowrap uppercase font-extrabold text-lg sm:text-2xl md:text-4xl px-4 md:px-8">
        BOOK FOR CHRISTMAS
      </span>
    </div>
  );

  return (
    <section 
      ref={itemRef}
      className="group relative overflow-hidden bg-[#047857] border-y-2 border-black h-40 sm:h-48 md:h-56 cursor-pointer"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <a href="#enquiries" className="flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide">
          Christmas Pre-Orders
        </h2>
        <p className="font-sans text-sm sm:text-base mt-2 max-w-[250px] sm:max-w-xs md:max-w-none">
          Click or hover to reveal your 20% discount offer
        </p>
      </a>

      {/* The hidden marquee container */}
      <div ref={marqueeRef} className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-[#DC2626]">
        <div ref={marqueeInnerRef} className="w-full h-full">
          <div className="flex items-center h-full w-[200%] animate-marquee">
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>
      </div>
    </section>
  );
}
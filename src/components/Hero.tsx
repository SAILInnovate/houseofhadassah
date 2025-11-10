import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-[#FDFBF8] pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center px-6 py-20 lg:py-32 sm:px-8 lg:px-12">
            <div className="max-w-lg space-y-8">
              {/* Headline: Now constrained and styled for readability */}
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#562B00] tracking-tight">
                Authentic West African Flavours, Delivered.
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-[#212121] leading-relaxed">
                Premium catering for your special events. From intimate gatherings to grand celebrations, we bring the taste of home right to your table.
              </p>

              {/* Call to Action Button */}
              <a
                href="#enquiries"
                className="inline-flex items-center gap-3 bg-[#E2725B] text-white px-8 py-4 border-2 border-black neo-shadow text-lg font-semibold transition-all hover:bg-[#562B00] hover:translate-x-[-2px] hover-translate-y-[-2px] hover:shadow-[6px_6px_0_#000]"
              >
                Get a Quote
                <ArrowRight size={24} />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          {/* This creates a clean visual block. On mobile, it will appear below the text. */}
          <div
            className="hidden lg:flex items-center justify-center min-h-[50vh] lg:min-h-screen"
            style={{ background: 'linear-gradient(45deg, var(--color-brown), var(--color-terracotta))' }}
          >
            {/* You could place a high-quality image of your food here in the future */}
            <div className="text-center text-white p-8 border-4 border-white/50 max-w-sm">
              <p className="text-3xl font-bold mb-2">JOLLOF RICE</p>
              <p className="text-xl opacity-90">The Crown Jewel of West African Cuisine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { ArrowRight } from 'lucide-react';
import ClickSpark from './ClickSpark';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-[#FDFBF8] pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center px-6 py-20 lg:py-32 sm:px-8 lg:px-12">
            <div className="max-w-lg space-y-8">
              <h2 className="text-3xl font-bold text-[#562B00] tracking-wide">
                House of Hadassah Bites
              </h2>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#212121] tracking-tight">
                Authentic West African Flavours, Delivered.
              </h1>
              <p className="text-lg sm:text-xl text-[#212121] leading-relaxed">
                Premium catering for your special events. From intimate gatherings to grand celebrations, we bring the taste of home right to your table.
              </p>

              {/* 
                THIS IS THE CHANGE:
                - The sparkColor has been changed from "var(--color-accent)" to "#FDFBF8" (your site's off-white background color).
              */}
              <ClickSpark 
                sparkColor="#FDFBF8" 
                sparkCount={12}
                sparkRadius={25}
              >
                <a
                  href="#enquiries"
                  className="inline-flex items-center gap-3 bg-[var(--color-accent)] text-white px-8 py-4 border-2 border-black neo-shadow text-lg font-semibold transition-all hover:bg-[#562B00] hover:translate-x-[-2px] hover-translate-y-[-2px] hover:shadow-[6px_6px_0_#000]"
                >
                  Get a Quote
                  <ArrowRight size={24} />
                </a>
              </ClickSpark>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div
            className="hidden lg:flex items-center justify-center min-h-[50vh] lg:min-h-screen"
            style={{ background: 'linear-gradient(45deg, var(--color-brown), var(--color-accent))' }}
          >
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
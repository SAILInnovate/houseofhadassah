import { ArrowRight, Star } from 'lucide-react';
import ClickSpark from './ClickSpark';
import jollofImage from '../assets/jollof-rice.jpg'; // Ensure you have a good hero image here

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 fade-in-up visible">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3EFEA] text-[var(--color-brown)] text-sm font-semibold tracking-wide">
            <Star size={14} fill="currentColor" />
            <span>AUTHENTIC WEST AFRICAN CUISINE</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-[var(--color-brown)]">
            The Taste of <span className="text-[var(--color-accent)] italic">Home,</span> <br />
            Delivered to You.
          </h1>

          <p className="text-lg sm:text-xl text-[var(--color-text-muted)] max-w-lg leading-relaxed">
            Premium catering for your special moments. From intimate family gatherings to grand celebrations, we bring the warmth and spice of West Africa to your table.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <ClickSpark sparkColor="#D96C4A" sparkCount={8}>
              <a
                href="#enquiries"
                className="inline-flex items-center gap-3 bg-[var(--color-accent)] text-white px-8 py-4 rounded-full text-lg font-medium transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-900/20"
              >
                Get a Quote
                <ArrowRight size={20} />
              </a>
            </ClickSpark>
            
            <a
              href="#menu"
              className="inline-flex items-center gap-3 bg-white text-[var(--color-brown)] px-8 py-4 rounded-full text-lg font-medium border border-[#E5E0D8] transition-all hover:bg-[#F3EFEA]"
            >
              View Menu
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
            <div className="flex -space-x-3">
               {/* Placeholders for avatars */}
               <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
               <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
               <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
            </div>
            <p>Loved by 500+ happy customers</p>
          </div>
        </div>

        {/* Visual Element - Soft Organic Shapes */}
        <div className="relative lg:h-[700px] w-full hidden lg:block fade-in-up visible delay-200">
           {/* Abstract organic background shape */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#F3EFEA] rounded-full blur-3xl -z-10 opacity-60"></div>
           
           {/* Main Image Container */}
           <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700">
             {/* Use a real image variable here if available, otherwise color placeholder */}
             <img 
                src={jollofImage} 
                alt="Delicious Jollof Rice" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
             
             <div className="absolute bottom-8 left-8 text-white">
               <p className="font-serif text-3xl italic">Signature Jollof</p>
               <p className="opacity-90">Smoky, spicy, perfection.</p>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
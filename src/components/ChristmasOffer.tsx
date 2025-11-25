import ClickSpark from './ClickSpark';
import { Gift } from 'lucide-react';

export default function ChristmasOffer() {
  return (
    <section className="bg-[#2D4F43] text-[#FDFBF7] py-12 relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,...')" }}></div>
      
      {/* Decorative Gold Border Lines */}
      <div className="absolute top-3 left-0 w-full h-px bg-[#C6A87C] opacity-30"></div>
      <div className="absolute bottom-3 left-0 w-full h-px bg-[#C6A87C] opacity-30"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-4">
          <div className="bg-[#C6A87C]/20 p-3 rounded-full text-[#C6A87C]">
            <Gift size={24} />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif mb-4 italic">
          Christmas Pre-Orders Are Open
        </h2>
        
        <p className="text-lg md:text-xl mb-6 text-[#FDFBF7]/90 font-light leading-relaxed">
          Book your festive feast before the end of November and receive a <br className="hidden md:block"/>
          <strong className="text-[#C6A87C] font-serif text-2xl font-normal"> 20% Discount </strong> 
          on your entire order.
        </p>
        
        <p className="mb-8 text-sm uppercase tracking-widest text-[#C6A87C] opacity-80">
          Limited delivery slots: Dec 23rd • 24th • 25th
        </p>
        
        <ClickSpark sparkColor="#C6A87C" sparkCount={10}>
          <a 
            href="#enquiries" 
            className="inline-flex items-center justify-center bg-[#FDFBF7] text-[#2D4F43] px-10 py-3 rounded-full font-bold text-lg transition-all hover:bg-[#C6A87C] hover:text-white shadow-lg shadow-black/10 hover:-translate-y-1"
          >
              Reserve Your Slot
          </a>
        </ClickSpark>
      </div>
    </section>
  );
}
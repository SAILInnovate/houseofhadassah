import { Quote, ChefHat, Heart } from 'lucide-react';
// Ideally, replace this with a photo of the founder or hands cooking
import storyImage from '../assets/esther.jpg'; 

export default function OurStory() {
  return (
    <section id="story" className="relative py-24 lg:py-32 overflow-hidden bg-[#FDFBF7]">
      
      {/* Decorative Background Blobs - adds subtle warmth */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-[#C6A87C]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Visual Storytelling */}
          <div className="relative fade-in-up visible">
            {/* Main Image Frame with slight rotation for 'scrapbook' feel */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/10 rotate-[-2deg] hover:rotate-0 transition-all duration-700 ease-out border-4 border-white">
              <img 
                src={storyImage} 
                alt="Cooking authentic West African food" 
                className="w-full h-[500px] object-cover"
              />
              
              {/* Founder Badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex items-center gap-4 border border-[#E5E0D8]">
                 <div className="bg-[#F3EFEA] p-3 rounded-full text-[var(--color-brown)]">
                   <ChefHat size={24} />
                 </div>
                 <div>
                   <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest font-bold">The Founder</p>
                   <p className="font-serif text-lg text-[var(--color-brown)] font-bold leading-none mt-0.5">Esther</p>
                 </div>
              </div>
            </div>

            {/* Background offset border for depth */}
            <div className="absolute inset-0 border-2 border-[var(--color-brown)]/5 rounded-3xl rotate-[3deg] -z-10 translate-x-4 translate-y-4"></div>
          </div>

          {/* RIGHT COLUMN: Text Content */}
          <div className="space-y-10 fade-in-up visible delay-200">
            
            {/* Header */}
            <div>
              <span className="text-[var(--color-accent)] font-bold tracking-widest text-sm uppercase mb-3 block flex items-center gap-2">
                <Heart size={14} fill="currentColor" /> Our Heritage
              </span>
              <h2 className="text-5xl lg:text-6xl text-[var(--color-brown)] font-serif leading-[1.1]">
                Cooking from the <br/>
                <span className="italic text-[var(--color-accent)]">Heart & Soul.</span>
              </h2>
            </div>

            {/* Narrative */}
            <div className="space-y-6 text-lg text-[var(--color-text-muted)] leading-relaxed font-light">
              <p>
                House of Hadassah Bites was born from a <strong className="text-[var(--color-brown)] font-medium">deep-rooted passion</strong> for authentic West African cuisine and a love for bringing people together through food.
              </p>
              <p>
                Our founder, Esther, learned the secrets of our traditional recipes from her mother and grandmother, spending hours in the kitchen mastering the spice blends that define our culture.
              </p>
            </div>

            {/* Stylized Quote Card - Replaces the heavy border-left */}
            <div className="relative bg-white p-8 rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-lg rounded-br-lg shadow-sm border border-[#E5E0D8]">
              <Quote size={40} className="absolute -top-5 -left-2 text-[#E5E0D8] fill-[#E5E0D8]" />
              <blockquote className="relative z-10">
                <p className="font-serif italic text-xl text-[var(--color-brown)] leading-relaxed">
                  "We believe that food is more than just sustenance; it's an experience, a memory, and a way to share love."
                </p>
              </blockquote>
            </div>

            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed font-light">
               Every dish is a celebration of family. We pour our hearts into every meal, using only the freshest ingredients to deliver an unforgettable taste of Africa to your table.
            </p>

            {/* Signature Area */}
            <div className="pt-2">
               <p className="font-serif text-2xl text-[var(--color-brown)] opacity-80">With love, <span className="italic text-[var(--color-accent)]">Esther.</span></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
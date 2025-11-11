export default function OurStory() {
  return (
    <section id="story" className="overflow-hidden py-20 lg:py-32 border-b-2 border-black bg-[#FDFBF8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl text-[#562B00] font-extrabold leading-none tracking-tight">
            <span className="block">BEHIND</span>
            <span className="block -mt-2 sm:-mt-3 lg:-mt-4">THE PASSION</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto mt-6" />
        </div>

        <div className="text-center text-lg md:text-xl text-[#212121] leading-relaxed space-y-8">
          <p>
            House of Hadassah Bites was born from a <strong>deep-rooted passion</strong> for authentic West African cuisine and a love for <em>bringing people together through food</em>. Our founder, Esther, learned the secrets of our traditional recipes from her mother and grandmother.
          </p>

          <blockquote className="border-l-4 border-[var(--color-accent)] pl-6 py-2 text-left italic text-xl md:text-2xl font-semibold text-[#562B00]">
            "We believe that food is more than just sustenance; it's an experience, a memory, and a way to share love."
          </blockquote>
          
          <p>
            Every dish we create is a <strong>celebration of family, heritage, and the vibrant flavours of home</strong>. That's why we pour our hearts into every meal, using only the freshest ingredients and time-honoured techniques to deliver an unforgettable taste of Africa to your table.
          </p>
        </div>
      </div>
    </section>
  );
}
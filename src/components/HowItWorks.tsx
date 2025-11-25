import { MessageCircle, Calendar, ChefHat, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Get in Touch',
    description: 'Fill out our enquiry form or reach us on social media. Tell us about your event, guest count, and food preferences.'
  },
  {
    number: '02',
    icon: Calendar,
    title: 'We Plan Together',
    description: 'We will create a custom menu and quote tailored to your specific needs and budget. No event is too big or too small.'
  },
  {
    number: '03',
    icon: ChefHat,
    title: 'We Cook with Love',
    description: 'Our team prepares everything fresh using authentic recipes and premium ingredients. Quality is our promise.'
  },
  {
    number: '04',
    icon: Truck,
    title: 'We Deliver',
    description: 'Your food arrives hot, fresh, and ready to serve. We handle the logistics so you can enjoy your event.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-[#FDFBF7] relative overflow-hidden">
      
      {/* Subtle Background Texture/Shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[50%] bg-[var(--color-accent)]/3 -rotate-6 blur-3xl rounded-[100%] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 fade-in-up visible">
          <span className="text-[var(--color-accent)] font-bold tracking-widest text-sm uppercase mb-3 block">
            The Process
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--color-brown)] font-serif mb-6">
            From Our Kitchen <br className="hidden sm:block" /> to Your Table
          </h2>
          <div className="w-24 h-1 bg-[#E5E0D8] mx-auto" />
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-[2rem] border border-[#F0EAE0] soft-shadow transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-900/10 flex flex-col items-center text-center fade-in-up visible"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Step Number Badge */}
                <span className="absolute top-6 right-6 text-xs font-bold text-[var(--color-text-muted)] tracking-widest bg-[#F3EFEA] px-3 py-1 rounded-full">
                  STEP {step.number}
                </span>

                {/* Icon Circle */}
                <div className="mb-8 p-5 rounded-full bg-[#FFF5F0] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors duration-500">
                  <Icon size={32} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif text-[var(--color-brown)] mb-4">
                  {step.title}
                </h3>
                
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative bottom accent */}
                <div className="w-0 h-1 bg-[var(--color-accent)] mt-8 transition-all duration-500 group-hover:w-12 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
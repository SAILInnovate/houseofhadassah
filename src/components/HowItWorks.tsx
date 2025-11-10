import { MessageCircle, Calendar, ChefHat, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'GET IN TOUCH',
    description: 'Fill out our enquiry form or reach us on social media. Tell us about your event, guest count, and food preferences.'
  },
  {
    number: '02',
    icon: Calendar,
    title: 'WE PLAN TOGETHER',
    description: 'We will create a custom menu and quote tailored to your needs and budget. No event is too big or too small.'
  },
  {
    number: '03',
    icon: ChefHat,
    title: 'WE COOK WITH LOVE',
    description: 'Our team prepares everything fresh using authentic recipes and premium ingredients. Quality is our promise.'
  },
  {
    number: '04',
    icon: Truck,
    title: 'WE DELIVER',
    description: 'Your food arrives hot, fresh, and ready to serve. We handle the logistics so you can enjoy your event.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 border-b-2 border-black bg-[#F5F3F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl text-[#562B00] mb-4">HOW IT WORKS</h2>
          <div className="w-32 h-1 bg-[#E2725B] mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-black neo-shadow p-8 space-y-4 transition-all hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <span className="text-6xl font-bold text-[#E2725B] opacity-50">
                    {step.number}
                  </span>
                  <Icon size={40} className="text-[#562B00]" />
                </div>
                <h3 className="text-xl font-bold text-[#562B00]">{step.title}</h3>
                <p className="text-[#212121] leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

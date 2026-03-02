import { CalendarDays, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

const scheduleSteps = [
  {
    week: 'Week 1',
    title: 'Announce & Open',
    items: ['Announce new menu', 'Open pre-orders'],
  },
  {
    week: 'Week 2',
    title: 'Close & Prep',
    items: ['Close orders', 'Buy ingredients'],
  },
  {
    week: 'Week 3',
    title: 'Cook & Fulfill',
    items: ['Hire kitchen (Saturday)', 'Bake everything'],
  },
  {
    week: 'Week 4',
    title: 'Recharge',
    items: ['Rest / Family time', 'Content creation'],
  }
];

const orderRules = [
  'Pre-order only',
  'Limited quantities',
  'Full payment required to secure slot',
  'No last-minute orders',
  'Collection time strictly communicated'
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-[#FDFBF7] relative overflow-hidden">

      {/* Subtle Background Texture/Shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[50%] bg-[var(--color-accent)]/3 -rotate-6 blur-3xl rounded-[100%] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 fade-in-up visible">
          <span className="text-[var(--color-accent)] font-bold tracking-widest text-sm uppercase mb-3 block flex items-center justify-center gap-2">
            <CalendarDays size={18} /> Our Schedule
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--color-brown)] font-serif mb-6">
            How We Operate
          </h2>
          <div className="w-24 h-1 bg-[#E5E0D8] mx-auto mb-6" />
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            We operate on a strict monthly schedule to ensure the highest quality. We only take pre-orders twice a month: in the middle and at the end of the month.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Schedule Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {scheduleSteps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-[2rem] border border-[#F0EAE0] soft-shadow transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-900/10 flex flex-col fade-in-up visible"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Week Number Badge */}
                <span className="inline-block w-max text-xs font-bold text-[var(--color-text-muted)] tracking-widest bg-[#F3EFEA] px-3 py-1 rounded-full mb-4">
                  {step.week}
                </span>

                <h3 className="text-2xl font-serif text-[var(--color-brown)] mb-4">
                  {step.title}
                </h3>

                <ul className="space-y-3">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                      <CheckCircle2 size={16} className="text-[var(--color-accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Rules Section */}
          <div className="lg:col-span-2 bg-[#FFF4F0] p-8 md:p-10 rounded-[2rem] border border-[var(--color-accent)]/20 fade-in-up visible shadow-lg" style={{ transitionDelay: '400ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-[var(--color-accent)]" size={28} />
              <h3 className="text-2xl font-serif font-bold text-[var(--color-brown)]">
                Order Policy
              </h3>
            </div>

            <p className="text-sm text-[var(--color-brown)]/80 mb-6 italic">
              Please read carefully. This protects our peace and time, allowing us to serve you better.
            </p>

            <ul className="space-y-4">
              {orderRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)] font-bold mt-0.5">•</span>
                  <span className="text-[var(--color-brown)] font-medium leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[var(--color-accent)]/20 flex items-center gap-3 text-sm font-bold text-[var(--color-accent)]">
              <Clock size={18} />
              Not every weekend. Not every day.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
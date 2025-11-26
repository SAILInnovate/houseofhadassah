import React from 'react';
import { Sparkles, Gift, Star, Check } from 'lucide-react';
import ClickSpark from './ClickSpark';

export default function ChristmasMenu() {
  const platters = [
    {
      name: 'Silver Platter',
      servings: '6 Servings',
      price: '£180',
      color: 'border-gray-300',
      bg: 'bg-gradient-to-b from-gray-50 to-gray-100',
      items: [
        'Jollof or Coconut Rice',
        'Grilled Chicken',
        'Assorted Meat Stew',
        'Lamb Ribs',
        'Meat Pie',
        'Veg Spring Roll',
        'Puff Puff',
        'Salad / Coleslaw'
      ]
    },
    {
      name: 'Gold Platter',
      servings: '12 Servings',
      price: '£360',
      popular: true,
      color: 'border-[#C6A87C]',
      bg: 'bg-gradient-to-b from-[#FFFDF9] to-[#FDFBF7]',
      items: [
        'Jollof or Coconut Rice',
        'Grilled Chicken',
        'Lamb Ribs',
        'Assorted Meat Stew',
        'Assorted Spinach Stew',
        'Fish',
        'Salad & Coleslaw',
        'Puff Puff',
        'Pie & Veg Spring Roll',
        'Free Donuts'
      ]
    },
    {
      name: 'Platinum Platter',
      servings: '18 Servings',
      price: '£540',
      color: 'border-slate-800',
      bg: 'bg-gradient-to-b from-gray-50 to-gray-100',
      items: [
        'Jollof or Coconut Rice',
        'Grilled Chicken',
        'Lamb Ribs',
        'Goat Meat (Ntaba)',
        'Assorted Meat Stew',
        'Fish & Puff Puff',
        'Assorted Spinach Stew',
        'Salad & Coleslaw',
        'Chin Chin',
        'Meat Pie & Veg Spring Roll'
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#740001] relative overflow-hidden text-[#FDFBF7]">
      {/* Festive Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-[#C6A87C] opacity-20"><Sparkles size={48} /></div>
        <div className="absolute bottom-20 right-10 text-[#C6A87C] opacity-20"><Star size={64} /></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 bg-[#C6A87C] text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest shadow-lg">
            <Gift size={16} /> OFFER ENDS NOV 30TH
          </div>
          <h2 className="text-5xl md:text-7xl font-serif italic text-[#FDFBF7] drop-shadow-md">
            Christmas Menu
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
            Secure your festive feast with a 50% deposit. <br/>
            <span className="text-[#C6A87C] font-bold text-2xl">20% OFF</span> when you pre-order now.
          </p>
        </div>

        {/* Platters Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {platters.map((platter, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 text-[#2C1810] shadow-2xl transform transition-all hover:-translate-y-2 ${platter.bg} border-4 ${platter.color}`}
            >
              {platter.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#C6A87C] text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-8 border-b border-black/10 pb-6">
                <h3 className="text-2xl font-serif font-bold mb-2">{platter.name}</h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">{platter.servings}</p>
                <div className="text-5xl font-bold text-[#740001] font-serif">{platter.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {platter.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium opacity-90">
                    <Check size={18} className="text-[#740001] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <ClickSpark sparkColor="#740001">
                <a 
                  href="#enquiries" 
                  className="block w-full text-center bg-[#2C1810] text-white py-4 rounded-xl font-bold transition-colors hover:bg-[#740001]"
                >
                  Pre-Order Now
                </a>
              </ClickSpark>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
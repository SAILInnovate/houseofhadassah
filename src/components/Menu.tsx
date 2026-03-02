import { useState, useEffect } from 'react';
import { Plus, Check } from 'lucide-react';

// --- IMAGE IMPORTS ---
import puffPuffImage from '../assets/puff-puff.jpg';
import jollofImage from '../assets/jollof-rice.jpg';
import efoRiroImage from '../assets/efo-riro.jpg';
import springRollsImage from '../assets/spring-rolls.jpg';
import chinChinImage from '../assets/chinchin.webp';
import matembeleImage from '../assets/matembele.jpg';
import oxtailStewImage from '../assets/oxtail-stew.jpg';
import beefStewImage from '../assets/beef-stew.jpg';
import lambStewImage from '../assets/lamb-stew.jpg';

// --- MENU DATA ---
const menuItems = [
  // --- MAIN READY MEALS ---
  {
    name: 'Sweet potato leaves / Matembele',
    description: 'Authentic and nutritious sweet potato leaves prepared with rich spices.',
    price: 'Enquire',
    minOrder: 'TBC',
    allergens: '',
    category: 'MAIN READY MEALS',
    image: matembeleImage
  },
  {
    name: 'Oxtail stew',
    description: 'Slow-cooked, tender oxtail in a rich and flavorful stew.',
    price: 'Enquire',
    minOrder: 'TBC',
    allergens: '',
    category: 'MAIN READY MEALS',
    image: oxtailStewImage
  },
  {
    name: 'Jollof',
    description: 'Classic party Jollof rice cooked in a rich tomato and pepper base.',
    price: 'Enquire',
    minOrder: 'TBC',
    allergens: '',
    category: 'MAIN READY MEALS',
    image: jollofImage
  },
  {
    name: 'Eforiro / Spinach assorted stew',
    description: 'Rich assorted spinach stew packed with authentic flavors.',
    price: 'Enquire',
    minOrder: 'TBC',
    allergens: 'Contains: Fish (optional).',
    category: 'MAIN READY MEALS',
    image: efoRiroImage
  },
  {
    name: 'Beef stew',
    description: 'Hearty tomato-based stew with tender beef pieces.',
    price: 'Enquire',
    minOrder: 'TBC',
    allergens: '',
    category: 'MAIN READY MEALS',
    image: beefStewImage
  },
  {
    name: 'Lamb stew',
    description: 'Flavorful stew centered around tender lamb cuts.',
    price: 'Enquire',
    minOrder: 'TBC',
    allergens: '',
    category: 'MAIN READY MEALS',
    image: lambStewImage
  },

  // --- PASTRY ---
  {
    name: 'Spring rolls',
    description: 'Crispy rolls with fresh and savory filling.',
    price: 'Enquire',
    minOrder: 'TBC',
    allergens: 'Contains: Gluten.',
    category: 'PASTRY',
    image: springRollsImage
  },
  {
    name: 'Donuts',
    description: 'Soft and sweet donuts, freshly made.',
    price: 'Enquire',
    minOrder: 'TBC',
    allergens: 'Contains: Gluten.',
    category: 'PASTRY',
    image: null
  },

  {
    name: 'Puff puff',
    description: 'Light, fluffy, and perfectly sweet fried dough balls.',
    price: 'Enquire',
    minOrder: 'TBC',
    allergens: 'Contains: Gluten.',
    category: 'PASTRY',
    image: puffPuffImage
  },
  {
    name: 'Chin chin',
    description: 'Crunchy, sweet, and irresistible fried dough snack.',
    price: 'Enquire',
    minOrder: 'TBC',
    allergens: 'Contains: Gluten.',
    category: 'PASTRY',
    image: chinChinImage
  }
];

function MenuCard({ item, isSelected, onToggle }: { item: any, isSelected: boolean, onToggle: any }) {
  const hasImage = !!item.image;

  return (
    <div
      onClick={() => onToggle && onToggle(item.name)}
      className={`
        bg-white rounded-2xl overflow-hidden soft-shadow h-full flex flex-col group border transition-all duration-300 relative cursor-pointer
        ${isSelected ? 'border-[var(--color-accent)] ring-2 ring-[var(--color-accent)]/20 shadow-lg scale-[1.02]' : 'border-[#F0EAE0] hover:border-[var(--color-accent)]/50'}
        ${!hasImage ? 'pl-2' : ''}
      `}
    >

      {/* Selection Indicator Overlay */}
      <div className={`absolute top-3 left-3 z-20 rounded-full p-2 transition-all duration-300 shadow-sm ${isSelected ? 'bg-[var(--color-accent)] text-white' : 'bg-white/90 text-gray-400'}`}>
        {isSelected ? <Check size={16} strokeWidth={3} /> : <Plus size={16} />}
      </div>

      {!hasImage && (
        <div className={`absolute top-0 left-0 bottom-0 w-2 transition-colors ${isSelected ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-accent)]/20'}`}></div>
      )}

      {/* Image Container */}
      {hasImage && (
        <div className="relative h-48 sm:h-56 overflow-hidden bg-[#F9F7F5]">
          <img
            src={item.image}
            alt={`A delicious serving of ${item.name}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          {/* Category Pill */}
          <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-bold text-[var(--color-brown)] uppercase tracking-wider shadow-sm z-10">
            {item.category === 'MAIN READY MEALS' ? 'Main' : 'Pastry'}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">

        {/* Header: Name and Price */}
        <div className="flex justify-between items-start mb-2 gap-3">
          <h3 className={`font-serif font-bold text-[var(--color-brown)] leading-tight group-hover:text-[var(--color-accent)] transition-colors ${hasImage ? 'text-lg' : 'text-lg'}`}>
            {item.name}
          </h3>
          <span className="text-sm sm:text-base font-bold text-[var(--color-accent)] shrink-0 text-right">
            {item.price.split('(')[0]}
          </span>
        </div>

        {/* Description */}
        <p className="text-[var(--color-text-muted)] text-xs sm:text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
          {item.description}
        </p>

        {/* Footer: Details */}
        <div className="pt-3 border-t border-[#F0EAE0] space-y-2 text-xs mt-auto">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 text-[var(--color-brown)] font-medium text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
              Min: {item.minOrder.split(':')[0]}
            </p>

            {/* Call to Action Text */}
            <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wide transition-colors ${isSelected ? 'text-[var(--color-accent)]' : 'text-gray-300'}`}>
              {isSelected ? 'Added' : 'Add to Quote'}
            </span>
          </div>

          {item.allergens && (
            <p className="text-[var(--color-text-muted)] italic text-[10px] pl-3.5">
              {item.allergens}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Menu({ selectedItems = [], toggleItem }: { selectedItems?: string[], toggleItem: (itemName: string) => void }) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const indexAttr = entry.target.getAttribute('data-index');
          if (indexAttr) {
            const index = Number(indexAttr);
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.menu-item');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const snacks = menuItems.filter((item) => item.category === 'PASTRY');
  const mains = menuItems.filter((item) => item.category === 'MAIN READY MEALS');

  return (
    <section id="menu" className="py-24 lg:py-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          <span className="text-[var(--color-accent)] font-bold tracking-widest text-sm uppercase mb-3 block">
            Our Kitchen
          </span>
          <h2 className="text-5xl lg:text-6xl text-[var(--color-brown)] mb-6 font-serif">
            The Menu
          </h2>
          <div className="w-24 h-1 bg-[#E5E0D8] mx-auto mb-6"></div>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Tap any item to add it to your enquiry form automatically.
          </p>
        </div>

        <div className="space-y-20">

          {/* Main Dishes Category */}
          <div className="relative">
            <div className="flex items-center gap-6 mb-12">
              <h3 className="text-3xl font-serif font-bold text-[var(--color-brown)] min-w-max">
                Main Ready Meals
              </h3>
              <div className="h-[1px] bg-[#E5E0D8] w-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {mains.map((item, index) => (
                <div
                  key={index}
                  className={`menu-item fade-in-up ${visibleItems.has(index) ? 'visible' : ''}`}
                  data-index={index}
                >
                  <MenuCard
                    item={item}
                    isSelected={selectedItems.includes(item.name)}
                    onToggle={toggleItem}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Snacks Category */}
          <div className="relative">
            <div className="flex items-center gap-6 mb-12">
              <h3 className="text-3xl font-serif font-bold text-[var(--color-brown)] min-w-max">
                Pastry
              </h3>
              <div className="h-[1px] bg-[#E5E0D8] w-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {snacks.map((item, index) => {
                const globalIndex = index + mains.length;
                return (
                  <div
                    key={globalIndex}
                    className={`menu-item fade-in-up ${visibleItems.has(globalIndex) ? 'visible' : ''}`}
                    data-index={globalIndex}
                  >
                    <MenuCard
                      item={item}
                      isSelected={selectedItems.includes(item.name)}
                      onToggle={toggleItem}
                    />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
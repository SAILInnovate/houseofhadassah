import { useState, useEffect } from 'react';
import { ChefHat, Plus, Check } from 'lucide-react';

// --- IMAGE IMPORTS ---
import puffPuffImage from '../assets/puff-puff.jpg';
import jollofImage from '../assets/jollof-rice.jpg';
import meatPieImage from '../assets/meat-pie.jpg';
import grilledChickenImage from '../assets/grilled-chicken.jpg';
import efoRiroImage from '../assets/efo-riro.jpg'; 
import springRollsImage from '../assets/spring-rolls.jpg';
import chinChinImage from '../assets/chinchin.webp';
import lambRibsImage from '../assets/lambribs.jpg';
import suyaImage from '../assets/suya.jpg'; 
import fishImage from '../assets/grilledfish.jpg';
import coconutRiceImage from '../assets/coconutrice.jpg';

// --- MENU DATA ---
const menuItems = [
  // --- MAIN DISHES ---
  { 
    name: 'Jollof Rice', 
    description: 'Basmati rice, red peppers, onions, garlic, scotch bonnets, tomato purée, bay leaves, dried thyme, curry powder, white pepper, chicken stock.', 
    price: '£45 (Med) / £80 (Lrg)', 
    minOrder: 'M: 15+ ppl | L: 40+ ppl', 
    allergens: 'Contains: Chicken Stock.', 
    category: 'MAIN DISHES', 
    image: jollofImage 
  },
  { 
    name: 'Coconut Rice', 
    description: 'Long-grain or basmati rice cooked with coconut milk, chicken/veg stock, crayfish, coconut oil, thyme, and habanero.', 
    price: '£55 (Med) / £90 (Lrg)', 
    minOrder: 'M: 15+ ppl | L: 40+ ppl', 
    allergens: 'Contains: Shellfish (Crayfish).', 
    category: 'MAIN DISHES', 
    image: coconutRiceImage 
  },
  { 
    name: 'Grilled XXL Fish', 
    description: 'Seasoned with ginger, garlic, thyme, parsley, paprika, chilli, spring onion, olive oil, and lemon.', 
    price: '£35 (Med) / £70 (Lrg)', 
    minOrder: 'Medium or Large Tray', 
    allergens: 'Contains: Fish.', 
    category: 'MAIN DISHES', 
    image: fishImage 
  },
  { 
    name: 'Assorted Spinach Stew', 
    description: 'Rich stew with Fish, Beef, Cowleg, Chicken, Chilli, Ginger, Garlic, Palm Oil, Peppers, Onion, Tomatoes.', 
    price: '£25 (Med) / £50 (Lrg)', 
    minOrder: 'Medium or Large Bowl', 
    allergens: 'Contains: Fish.', 
    category: 'MAIN DISHES', 
    image: efoRiroImage 
  },
  { 
    name: 'Grilled Chicken', 
    description: 'Succulent chicken pieces seasoned and grilled to perfection.', 
    price: '£30', 
    minOrder: '20 Pieces', 
    allergens: '', 
    category: 'MAIN DISHES', 
    image: grilledChickenImage 
  },
  { 
    name: 'Goat Meat Suya', 
    description: 'Seasoned, BBQ, and smoked goat meat on wood.', 
    price: '£40', 
    minOrder: 'Per Tray', 
    allergens: 'Spicy.', 
    category: 'MAIN DISHES', 
    image: suyaImage 
  },
  { 
    name: 'Lamb Ribs Tray', 
    description: 'Seasoned, BBQ, and smoked on wood.', 
    price: '£45', 
    minOrder: 'Per Tray', 
    allergens: '', 
    category: 'MAIN DISHES', 
    image: lambRibsImage 
  },
  { 
    name: 'Delux Canapé Table', 
    description: 'A setup of 6 signature recipes from our menu. Perfect for events.', 
    price: '£370', 
    minOrder: '30 People', 
    allergens: 'Contact for details.', 
    category: 'MAIN DISHES', 
    image: null 
  },

  // --- SNACKS ---
  { 
    name: 'Signature Puff Puff', 
    description: 'Light, fluffy, and sweet fried dough balls. An irresistible classic available in standard trays or party platters.', 
    price: '£18 (Tray) / £45 (Platter)', 
    minOrder: 'Tray: ~35pcs | Platter: 100+', 
    allergens: 'Contains: Gluten.', 
    category: 'SNACKS', 
    image: puffPuffImage 
  },
  { 
    name: 'Meat Pie / Fish Pie', 
    description: 'Medium size savory pies with rich filling.', 
    price: '£1.50 each', 
    minOrder: 'Min Qty: 7', 
    allergens: 'Contains: Gluten, Fish (in Fish pie).', 
    category: 'SNACKS', 
    image: meatPieImage 
  },
  { 
    name: 'Veg Spring Rolls', 
    description: 'Crispy rolls with fresh vegetable filling.', 
    price: '£1.50 each', 
    minOrder: 'Min Qty: 7', 
    allergens: 'Contains: Gluten.', 
    category: 'SNACKS', 
    image: springRollsImage 
  },
  { 
    name: 'ChinChin', 
    description: 'Crunchy fried dough snack.', 
    price: '£5', 
    minOrder: '1 Bag', 
    allergens: 'Contains: Gluten.', 
    category: 'SNACKS', 
    image: chinChinImage 
  },
  { 
    name: 'Donuts', 
    description: 'Soft donuts, optionally with chocolate.', 
    price: '£2 each', 
    minOrder: 'Min Qty: 6', 
    allergens: 'Contains: Gluten.', 
    category: 'SNACKS', 
    image: null 
  },
  { 
    name: 'Variety Snack Box', 
    description: 'Chin chin, meat pie, chicken wing, puff puff, nicely packaged.', 
    price: '£11', 
    minOrder: 'Min Qty: 10 Boxes', 
    allergens: 'Various.', 
    category: 'SNACKS', 
    image: null 
  },
  { 
    name: 'Mini Variety Box', 
    description: 'Puff puff, chicken, pie packed for your event.', 
    price: '£6', 
    minOrder: 'Min Qty: 20 Boxes', 
    allergens: 'Various.', 
    category: 'SNACKS', 
    image: null 
  },
];

function MenuCard({ item, isSelected, onToggle }) {
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
             {item.category === 'MAIN DISHES' ? 'Main' : 'Snack'}
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

export default function Menu({ selectedItems = [], toggleItem }) {
  const [visibleItems, setVisibleItems] = useState(new Set());
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Number(entry.target.getAttribute('data-index'));
                setVisibleItems((prev) => new Set(prev).add(index));
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

  const snacks = menuItems.filter((item) => item.category === 'SNACKS');
  const mains = menuItems.filter((item) => item.category === 'MAIN DISHES');

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
                  Main Dishes
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
                  Snacks & Sides
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
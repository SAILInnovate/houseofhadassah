import { useState, useEffect } from 'react';

// Image Imports
import puffPuffImage from '../assets/puff-puff.jpg';
import jollofImage from '../assets/jollof-rice.jpg';
import meatPieImage from '../assets/meat-pie.jpg';
import friedRiceImage from '../assets/fried-rice.jpg';
import grilledChickenImage from '../assets/grilled-chicken.jpg';
import efoRiroImage from '../assets/efo-riro.jpg';
import moiMoiImage from '../assets/moi-moi.jpg';
import springRollsImage from '../assets/spring-rolls.jpg';

// Data Definition
const menuItems = [
  { 
    name: 'Puff Puff', 
    description: 'Light, fluffy, and sweet fried dough balls. An irresistible classic that melts in your mouth.', 
    price: '£18 per tray', 
    minOrder: 'Minimum 30 pieces', 
    allergens: 'Contains: Wheat, Gluten.', 
    category: 'SMALL BITES', 
    image: puffPuffImage 
  },
  { 
    name: 'Meat Pie', 
    description: 'Buttery, flaky pastry filled with richly seasoned minced meat, potatoes, and carrots.', 
    price: '£1.50 each', 
    minOrder: 'Minimum order of 8 pies', 
    allergens: 'Contains: Wheat, Gluten, Egg.', 
    category: 'SMALL BITES', 
    image: meatPieImage 
  },
  { 
    name: 'Spring Rolls', 
    description: 'Golden crispy rolls packed with fresh savory vegetable fillings and served with a dipping sauce.', 
    price: '£30 per tray', 
    minOrder: 'Minimum 50 pieces', 
    allergens: 'Contains: Wheat, Gluten.', 
    category: 'SMALL BITES', 
    image: springRollsImage 
  },
  { 
    name: 'Jollof Rice', 
    description: 'The crown jewel of our kitchen. Rich, smoky, and perfectly spiced tomato rice cooked with love.', 
    price: '£80 (Serves 10-12)', 
    minOrder: 'Full tray order', 
    allergens: 'Can be made vegan on request.', 
    category: 'MAINS', 
    image: jollofImage 
  },
  { 
    name: 'Fried Rice', 
    description: 'Vibrant, colorful rice stir-fried with mixed vegetables, shrimp, and liver for a deep flavor profile.', 
    price: '£75 (Serves 10-12)', 
    minOrder: 'Full tray order', 
    allergens: 'Contains: Shellfish. Can be customized.', 
    category: 'MAINS', 
    image: friedRiceImage 
  },
  { 
    name: 'Efo Riro', 
    description: 'A rich, savory spinach stew cooked with assorted meats, locust beans, and a bell pepper reduction.', 
    price: '£85 (Serves 8-10)', 
    minOrder: 'Full pot order', 
    allergens: 'Contains: Fish, Shellfish.', 
    category: 'MAINS', 
    image: efoRiroImage 
  },
  { 
    name: 'Grilled Chicken', 
    description: 'Succulent chicken pieces marinated overnight in our secret blend of West African spices and grilled to perfection.', 
    price: '£60 (Serves 8-10)', 
    minOrder: '10 piece minimum', 
    allergens: 'Contact for allergen information.', 
    category: 'MAINS', 
    image: grilledChickenImage 
  },
  { 
    name: 'Moi Moi', 
    description: 'A delicate, steamed bean pudding made with peppers, onions, eggs, and fish. Smooth and spicy.', 
    price: '£40 per tray', 
    minOrder: 'Minimum 20 pieces', 
    allergens: 'Contains: Egg, Fish.', 
    category: 'MAINS', 
    image: moiMoiImage 
  }
];

function MenuCard({ item }) {
  // Check if image is a placeholder string (starts with #) or a real imported image
  const isPlaceholder = typeof item.image === 'string' && item.image.startsWith('#');

  return (
    <div className="bg-white rounded-2xl overflow-hidden soft-shadow soft-shadow-hover h-full flex flex-col group border border-[#F0EAE0] transition-all duration-500">
      
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        {isPlaceholder ? (
           <div className="w-full h-full bg-[#E5E0D8] flex items-center justify-center text-[#A39890]">
             Image Coming Soon
           </div>
        ) : (
           <img 
             src={item.image} 
             alt={`A delicious serving of ${item.name}`} 
             className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
           />
        )}
        
        {/* Category Pill Tag */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[var(--color-brown)] uppercase tracking-wider shadow-sm z-10">
          {item.category}
        </div>
      </div>
      
      {/* Content Container */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Header: Name and Price */}
        <div className="flex justify-between items-baseline mb-4">
            <h3 className="text-2xl font-serif font-bold text-[var(--color-brown)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
              {item.name}
            </h3>
            {/* Split price to only show the main cost in bold, parenthesis info smaller if needed */}
            <span className="text-lg font-bold text-[var(--color-accent)] shrink-0 ml-4">
              {item.price.split('(')[0]}
            </span>
        </div>
        
        {/* Description */}
        <p className="text-[var(--color-text-muted)] mb-6 flex-grow leading-relaxed">
            {item.description}
        </p>
        
        {/* Footer: Details */}
        <div className="pt-6 border-t border-[#F0EAE0] space-y-3 text-sm">
            <p className="flex items-center gap-2 text-[var(--color-brown)] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
                {item.minOrder}
            </p>
            {item.allergens && (
                <p className="text-[var(--color-text-muted)] italic text-xs pl-3.5">
                    {item.allergens}
                </p>
            )}
            {/* Show full price details including serving size if it was split above */}
            {item.price.includes('(') && (
               <p className="text-[var(--color-text-muted)] text-xs pl-3.5">
                  *{item.price.substring(item.price.indexOf('('))}
               </p>
            )}
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  
  // Intersection Observer to trigger fade-in animations
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

  // Filter items by category
  const smallBites = menuItems.filter((item) => item.category === 'SMALL BITES');
  const mains = menuItems.filter((item) => item.category === 'MAINS');

  return (
    <section id="menu" className="py-24 lg:py-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up visible">
          <span className="text-[var(--color-accent)] font-bold tracking-widest text-sm uppercase mb-3 block">
            Our Kitchen
          </span>
          <h2 className="text-5xl lg:text-6xl text-[var(--color-brown)] mb-6 font-serif">
            Curated Menu
          </h2>
          <div className="w-24 h-1 bg-[#E5E0D8] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-[var(--color-text-muted)] text-lg leading-relaxed">
            Every dish is handcrafted with love, utilizing traditional recipes passed down through generations to bring you the authentic taste of home.
          </p>
        </div>

        <div className="space-y-24">
          
          {/* Small Bites Category */}
          <div className="relative">
            <div className="flex items-center gap-6 mb-12">
                <h3 className="text-3xl font-serif font-bold text-[var(--color-brown)] min-w-max">
                  Small Bites
                </h3>
                <div className="h-[1px] bg-[#E5E0D8] w-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {smallBites.map((item, index) => (
                <div 
                  key={index} 
                  className={`menu-item fade-in-up ${visibleItems.has(index) ? 'visible' : ''}`} 
                  data-index={index}
                >
                  <MenuCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Mains Category */}
          <div className="relative">
             <div className="flex items-center gap-6 mb-12">
                <h3 className="text-3xl font-serif font-bold text-[var(--color-brown)] min-w-max">
                  Mains
                </h3>
                <div className="h-[1px] bg-[#E5E0D8] w-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {mains.map((item, index) => {
                // Offset index to ensure animation timing flows sequentially from the previous section
                const globalIndex = index + smallBites.length;
                return (
                  <div 
                    key={globalIndex} 
                    className={`menu-item fade-in-up ${visibleItems.has(globalIndex) ? 'visible' : ''}`} 
                    data-index={globalIndex}
                  >
                    <MenuCard item={item} />
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
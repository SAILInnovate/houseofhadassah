import { useState, useEffect } from 'react';
import puffPuffImage from '../assets/puff-puff.jpg';
import jollofImage from '../assets/jollof-rice.jpg';
import meatPieImage from '../assets/meat-pie.jpg';
import friedRiceImage from '../assets/fried-rice.jpg';
import grilledChickenImage from '../assets/grilled-chicken.jpg';
import efoRiroImage from '../assets/efo-riro.jpg';
import moiMoiImage from '../assets/moi-moi.jpg';
import springRollsImage from '../assets/spring-rolls.jpg';

const menuItems = [
  { name: 'Puff Puff', description: 'Light, fluffy, and sweet fried dough balls. An irresistible classic.', price: '£18 per tray', minOrder: 'Minimum 30 pieces', allergens: 'Contains: Wheat, Gluten.', category: 'SMALL BITES', image: puffPuffImage },
  { name: 'Meat Pie', description: 'Flaky pastry filled with richly seasoned minced meat and vegetables.', price: '£1.50 each', minOrder: 'Minimum order of 8 pies', allergens: 'Contains: Wheat, Gluten, Egg.', category: 'SMALL BITES', image: meatPieImage },
  { name: 'Spring Rolls', description: 'Golden crispy rolls packed with savory vegetable fillings.', price: '£30 per tray', minOrder: 'Minimum 50 pieces', allergens: 'Contains: Wheat, Gluten.', category: 'SMALL BITES', image: springRollsImage },
  { name: 'Jollof Rice', description: 'The crown jewel. Rich, smoky, and perfectly spiced tomato rice.', price: '£80 (Serves 10-12)', minOrder: 'Full tray order', allergens: 'Can be made vegan on request.', category: 'MAINS', image: jollofImage },
  { name: 'Fried Rice', description: 'Colorful rice with mixed vegetables, shrimp, and other proteins.', price: '£75 (Serves 10-12)', minOrder: 'Full tray order', allergens: 'Contains: Shellfish. Can be customized.', category: 'MAINS', image: friedRiceImage },
  { name: 'Efo Riro', description: 'Rich spinach stew with assorted meats in a savory bell pepper sauce.', price: '£85 (Serves 8-10)', minOrder: 'Full pot order', allergens: 'Contains: Fish, Shellfish.', category: 'MAINS', image: efoRiroImage },
  { name: 'Grilled Chicken', description: 'Succulent chicken marinated in West African spices and grilled to perfection.', price: '£60 (Serves 8-10)', minOrder: '10 piece minimum', allergens: 'Contact for allergen information.', category: 'MAINS', image: grilledChickenImage },
  { name: 'Moi Moi', description: 'Steamed bean pudding with eggs, fish, and aromatic spices.', price: '£40 per tray', minOrder: 'Minimum 20 pieces', allergens: 'Contains: Egg, Fish.', category: 'MAINS', image: moiMoiImage }
];

function MenuCard({ item }) {
  const isPlaceholder = item.image.startsWith('#');
  return (
    <div className="border-2 border-black neo-shadow bg-white group transition-all hover:scale-[1.02] h-full flex flex-col">
      {isPlaceholder ? (<div className="h-48 w-full border-b-2 border-black" style={{ backgroundColor: item.image }}></div>) : (<img src={item.image} alt={`A photo of ${item.name}`} className="h-48 w-full object-cover border-b-2 border-black"/>)}
      <div className="p-6 space-y-3 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-[#562B00]">{item.name}</h3>
        <p className="text-[#212121] leading-relaxed flex-grow">{item.description}</p>
        <div className="font-semibold mt-2"><p className="text-lg text-black">{item.price}</p><p className="text-md text-[var(--color-accent)]">{item.minOrder}</p></div>
        <p className="text-sm text-gray-600 italic pt-3 border-t border-gray-200 mt-auto">{item.allergens}</p>
      </div>
    </div>
  );
}

export default function Menu() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { const index = Number(entry.target.getAttribute('data-index')); setVisibleItems((prev) => new Set(prev).add(index)); } }); }, { threshold: 0.1 });
    document.querySelectorAll('.menu-item').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const smallBites = menuItems.filter((item) => item.category === 'SMALL BITES');
  const mains = menuItems.filter((item) => item.category === 'MAINS');
  return (
    <section id="menu" className="py-16 lg:py-24 border-b-2 border-black"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-16"><h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#562B00] mb-4">OUR MENU</h2><div className="w-32 h-1 bg-[var(--color-accent)] mx-auto" /></div><div className="space-y-16"><div><h3 className="text-3xl lg:text-4xl text-[#562B00] mb-8 pb-4 border-b-2 border-black">SMALL BITES</h3><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{smallBites.map((item, index) => (<div key={index} className={`menu-item fade-in-up ${visibleItems.has(index) ? 'visible' : ''}`} data-index={index}><MenuCard item={item} /></div>))}</div></div><div><h3 className="text-3xl lg:text-4xl text-[#562B00] mb-8 pb-4 border-b-2 border-black">MAINS</h3><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{mains.map((item, index) => (<div key={index + smallBites.length} className={`menu-item fade-in-up ${visibleItems.has(index + smallBites.length) ? 'visible' : ''}`} data-index={index + smallBites.length}><MenuCard item={item} /></div>))}</div></div></div></div></section>
  );
}
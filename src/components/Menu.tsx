import { useState, useEffect } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Puff Puff',
    description: 'Light, fluffy, and sweet fried dough balls. An irresistible classic.',
    price: '£25 (Min 50 pieces)',
    category: 'SMALL BITES',
    image: '#F4A460'
  },
  {
    name: 'Samosas',
    description: 'Crispy pastry triangles filled with spiced meat or vegetables.',
    price: '£30 (Min 50 pieces)',
    category: 'SMALL BITES',
    image: '#CD853F'
  },
  {
    name: 'Spring Rolls',
    description: 'Golden crispy rolls packed with savory fillings.',
    price: '£30 (Min 50 pieces)',
    category: 'SMALL BITES',
    image: '#DEB887'
  },
  {
    name: 'Jollof Rice',
    description: 'The crown jewel. Rich, smoky, and perfectly spiced tomato rice.',
    price: '£80 (Serves 10-12)',
    category: 'MAINS',
    image: '#E2725B'
  },
  {
    name: 'Fried Rice',
    description: 'Colorful, flavorful rice with vegetables and your choice of protein.',
    price: '£75 (Serves 10-12)',
    category: 'MAINS',
    image: '#D2691E'
  },
  {
    name: 'Efo Riro',
    description: 'Rich spinach stew with assorted meats in palm oil sauce.',
    price: '£85 (Serves 8-10)',
    category: 'MAINS',
    image: '#2F4F2F'
  },
  {
    name: 'Grilled Chicken',
    description: 'Succulent chicken marinated in West African spices and grilled to perfection.',
    price: '£60 (Serves 8-10)',
    category: 'MAINS',
    image: '#8B4513'
  },
  {
    name: 'Moi Moi',
    description: 'Steamed bean pudding with eggs, fish, and aromatic spices.',
    price: '£40 (Min 20 pieces)',
    category: 'MAINS',
    image: '#DAA520'
  }
];

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="border-2 border-black neo-shadow bg-white group transition-all hover:scale-[1.02]">
      <div
        className="h-48 border-b-2 border-black transition-all"
        style={{ backgroundColor: item.image }}
      />
      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-bold text-[#562B00]">{item.name}</h3>
        <p className="text-[#212121] leading-relaxed">{item.description}</p>
        <p className="text-lg font-semibold text-[#E2725B]">{item.price}</p>
      </div>
    </div>
  );
}

export default function Menu() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.menu-item').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const smallBites = menuItems.filter((item) => item.category === 'SMALL BITES');
  const mains = menuItems.filter((item) => item.category === 'MAINS');

  return (
    <section id="menu" className="py-16 lg:py-24 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl text-[#562B00] mb-4">OUR MENU</h2>
          <div className="w-32 h-1 bg-[#E2725B] mx-auto" />
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-3xl lg:text-4xl text-[#562B00] mb-8 pb-4 border-b-2 border-black">
              SMALL BITES
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

          <div>
            <h3 className="text-3xl lg:text-4xl text-[#562B00] mb-8 pb-4 border-b-2 border-black">
              MAINS
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {mains.map((item, index) => (
                <div
                  key={index + smallBites.length}
                  className={`menu-item fade-in-up ${
                    visibleItems.has(index + smallBites.length) ? 'visible' : ''
                  }`}
                  data-index={index + smallBites.length}
                >
                  <MenuCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

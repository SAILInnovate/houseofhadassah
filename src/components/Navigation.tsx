import { Utensils } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#562B00] border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#hero" className="flex items-center gap-2 text-white font-bold text-lg hover:text-[#E2725B] transition-colors">
            <Utensils size={28} />
            <span className="hidden sm:inline">HADASSAH BITES</span>
          </a>

          <div className="flex items-center gap-4 md:gap-8">
            <a
              href="#menu"
              className="text-white hover:text-[#E2725B] transition-colors text-sm md:text-base font-medium"
            >
              MENU
            </a>
            <a
              href="#reviews"
              className="text-white hover:text-[#E2725B] transition-colors text-sm md:text-base font-medium"
            >
              REVIEWS
            </a>
            <a
              href="#enquiries"
              className="bg-[#E2725B] text-white px-4 py-2 border-2 border-black neo-shadow text-sm md:text-base font-semibold transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000]"
            >
              ENQUIRIES
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#562B00] text-white py-8 border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-lg flex items-center justify-center gap-2">
            Made with <Heart size={20} fill="#E2725B" className="text-[#E2725B]" /> by House of Hadassah Bites
          </p>
          <p className="text-sm opacity-75">
            © {currentYear} House of Hadassah Bites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

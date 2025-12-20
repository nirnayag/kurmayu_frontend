
import React from 'react';
import { Leaf } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'ailment-guide' | 'dosha-assessment' | 'treatment-center' | 'nutrition-hub' | 'consultation') => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const handleLink = (view: 'home' | 'ailment-guide' | 'dosha-assessment' | 'treatment-center' | 'nutrition-hub' | 'consultation', e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
    const hashes = {
      'home': '',
      'ailment-guide': '#ailment',
      'dosha-assessment': '#dosha',
      'treatment-center': '#treatment',
      'nutrition-hub': '#nutrition',
      'consultation': '#book'
    };
    window.location.hash = hashes[view];
  };

  return (
    <nav className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={(e) => handleLink('home', e)}
        >
          <Leaf className="text-emerald-700" size={28} />
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-none">Kurmayu Ayurveda</h1>
            <p className="text-[10px] text-gray-400 font-medium tracking-tight">Ancient Wisdom, Modern Application</p>
          </div>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8">
          <button 
            onClick={(e) => handleLink('home', e)}
            className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-emerald-700' : 'text-gray-600 hover:text-emerald-700'}`}
          >
            Home
          </button>
          <button 
            onClick={(e) => handleLink('ailment-guide', e)}
            className={`text-sm font-medium transition-colors ${currentView === 'ailment-guide' ? 'text-emerald-700' : 'text-gray-600 hover:text-emerald-700'}`}
          >
            Ailment Guide
          </button>
          <button 
            onClick={(e) => handleLink('dosha-assessment', e)}
            className={`text-sm font-medium transition-colors ${currentView === 'dosha-assessment' ? 'text-emerald-700' : 'text-gray-600 hover:text-emerald-700'}`}
          >
            Dosha Assessment
          </button>
          <button 
            onClick={(e) => handleLink('treatment-center', e)}
            className={`text-sm font-medium transition-colors ${currentView === 'treatment-center' ? 'text-emerald-700' : 'text-gray-600 hover:text-emerald-700'}`}
          >
            Treatment Center
          </button>
          <button 
            onClick={(e) => handleLink('nutrition-hub', e)}
            className={`text-sm font-medium transition-colors ${currentView === 'nutrition-hub' ? 'text-emerald-700' : 'text-gray-600 hover:text-emerald-700'}`}
          >
            Nutrition Hub
          </button>
        </div>

        {/* Action */}
        <button 
          onClick={(e) => handleLink('consultation', e)}
          className="bg-[#064E3B] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-emerald-900 transition-colors"
        >
          Book Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

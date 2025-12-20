
import React from 'react';
import { Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Leaf className="text-emerald-700/40" size={16} />
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">
            © 2025 Kurmayu Ayurveda. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-xs text-gray-400 font-medium uppercase tracking-widest hover:text-emerald-700 transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-gray-400 font-medium uppercase tracking-widest hover:text-emerald-700 transition-colors">Terms of Service</a>
          <a href="#" className="text-xs text-gray-400 font-medium uppercase tracking-widest hover:text-emerald-700 transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
// Added Star to the import list to fix the missing component errors
import { Leaf, Search, Calendar, CheckCircle2, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 md:pt-24 md:pb-36 bg-[#FDFCF7] overflow-hidden">
      {/* Decorative leaf backgrounds */}
      <div className="absolute top-20 -right-20 text-emerald-50/50 rotate-12 hidden lg:block">
        <Leaf size={600} strokeWidth={0.2} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Leaf size={16} />
              <span>Spring Renewal</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Ancient Wisdom, <br />
              <span className="text-emerald-700 italic">Modern Application</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Detoxify naturally with Panchakarma and seasonal cleansing. Experience holistic wellness that balances your unique constitution.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-[#064E3B] text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/10">
                Discover Your Dosha <Leaf size={18} />
              </button>
              <button className="w-full sm:w-auto bg-white border border-gray-200 text-gray-800 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                Find Your Solution <Search size={18} />
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-10 h-10 rounded-full border-2 border-white" />
                ))}
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">10,000+ Happy Patients</p>
                <p className="text-xs text-gray-500 font-medium">Trusted by families across India</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-20 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/seed/ayurvedahero/800/1000" 
                alt="Ayurvedic Treatment" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Dr. Card Overlay */}
            <div className="absolute -bottom-10 -left-10 md:left-0 z-30 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-emerald-50 hidden sm:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Dr. Ravi Shinde</h4>
                  <p className="text-xs text-emerald-600 font-medium">BAMS, MD (Ayurveda)</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed font-medium">
                "Ayurveda is not just about treatment, but a journey back to yourself."
              </p>
              <div className="flex items-center gap-2 text-amber-400">
                {/* Fixed: Use the Star icon component imported from lucide-react */}
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <span className="text-[10px] text-gray-400 font-bold ml-1 uppercase">25+ Years Experience</span>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-10 -right-8 z-30 bg-white/90 backdrop-blur px-5 py-3 rounded-xl shadow-lg border border-white/50 hidden md:block animate-bounce">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <CheckCircle2 size={16} />
                <span>Panchakarma Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

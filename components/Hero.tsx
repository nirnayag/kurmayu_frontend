
import React, { useState, useEffect } from 'react';
// Added Star to the import list to fix the missing component errors
import { Leaf, Search, Calendar, CheckCircle2, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-16 pb-12 bg-[#FDFCF7] overflow-hidden">
      {/* Decorative leaf backgrounds */}
      <div className="absolute top-20 -right-20 text-emerald-50/50 rotate-12 hidden lg:block">
        <Leaf size={700} strokeWidth={0.2} />
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
              <span className="text-emerald-700 italic">Moern Application</span>
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
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-10 h-10 rounded-full border-2 border-white" />
                ))}
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">10,000+ Happy Patients</p>
                <p className="text-xs text-gray-500 font-medium">Trusted by families across India</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            {/* Spacer to maintain height */}
            <div className="relative z-0 opacity-0 pointer-events-none">
              <img
                src=" https://thumbs.dreamstime.com/b/happy-young-indian-doctor-holding-hand-female-patient-giving-support-motivating-recovery-rehabilitation-telling-good-399999435.jpg"
                alt="Spacer"
                className="w-full max-h-[70vh] object-cover"
              />
            </div>

            {/* Image 1: Doctor */}
            <div
              style={{ transition: 'all 1s ease-in-out, z-index 0s linear 0.5s' }}
              className={`absolute top-0 left-0 w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-white
                ${activeImage === 0 ? 'z-20 scale-100 rotate-0 opacity-100' : 'z-10 scale-95 rotate-6 translate-x-8 opacity-60'}`}
            >
              <img
                src=" https://thumbs.dreamstime.com/b/happy-young-indian-doctor-holding-hand-female-patient-giving-support-motivating-recovery-rehabilitation-telling-good-399999435.jpg"
                alt="Ayurvedic Treatment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2: Medical Team */}
            <div
              style={{ transition: 'all 1s ease-in-out, z-index 0s linear 0.5s' }}
              className={`absolute top-0 left-0 w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-white
                ${activeImage === 1 ? 'z-20 scale-100 rotate-0 opacity-100' : 'z-10 scale-95 rotate-6 translate-x-8 opacity-60'}`}
            >
              <img
                src="https://www.keckmedicine.org/wp-content/uploads/2021/11/Medical-doctors-and-nurse-practitioners-discuss-paperwork-in-a-hallway.jpg.webp"
                alt="Medical Team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Dr. Card Overlay - Only show when doctor image is active? Or always on top? Let's keep it always on top but maybe fade it? */}
            <div className={`absolute -bottom-10 -left-10 md:left-0 z-30 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-emerald-50 hidden sm:block transition-opacity duration-500 `}>
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

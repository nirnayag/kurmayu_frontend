
import React from 'react';
import { Star, MessageCircle, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const SuccessStories: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-emerald-700 font-semibold mb-4 uppercase tracking-wider text-sm">
            <MessageCircle size={16} />
            Patient Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Real Transformations, Real Results</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how ancient Ayurvedic wisdom has transformed the lives of thousands of patients.
          </p>
        </div>

        <div className="relative">
          <div className="bg-emerald-50 rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
                <div className="mb-6 rounded-2xl overflow-hidden aspect-square">
                  <img src="https://i.pravatar.cc/400?img=32" alt="Priya Sharma" className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-center gap-1 text-amber-400 mb-4">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold">Priya Sharma</h4>
                  <p className="text-gray-500 text-sm mb-4">42 years • Mumbai, Maharashtra</p>
                  <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold">
                    <Calendar size={14} /> 8 months treatment
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 space-y-6">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-3">Condition Treated</h5>
                    <p className="text-sm font-semibold text-gray-900">Joint Pain & Arthritis</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-8">
              <div className="flex gap-4 mb-8">
                <span className="text-6xl font-serif text-emerald-200">“</span>
                <p className="text-2xl font-serif leading-relaxed text-gray-800">
                  After years of struggling with joint pain and trying various medications, I found lasting relief through Dr. Shinde's Ayurvedic approach. The personalized diet plan and herbal treatments transformed my energy levels completely.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StatusBox 
                  type="before" 
                  title="Before Treatment" 
                  desc="Frequent bloating, irregular bowel movements, low energy" 
                />
                <StatusBox 
                  type="after" 
                  title="After Treatment" 
                  desc="Regular digestion, increased vitality, improved quality of life" 
                />
              </div>

              <div className="bg-white/50 backdrop-blur-sm border border-white p-8 rounded-3xl">
                <h5 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-6 flex items-center gap-2">
                  <CheckCircle2 size={16} /> Key Results Achieved
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "80% reduction in joint pain and stiffness",
                    "Reduced dependency on pain medications",
                    "Improved mobility and flexibility",
                    "Better sleep and overall well-being"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-gray-500 text-sm font-medium mb-8">Join thousands of satisfied patients who have transformed their health naturally</p>
             <button className="bg-[#064E3B] text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 mx-auto">
                Start Your Healing Journey <ArrowRight size={20} />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatusBox: React.FC<{ type: 'before' | 'after', title: string, desc: string }> = ({ type, title, desc }) => (
  <div className={`p-6 rounded-2xl border ${type === 'before' ? 'bg-rose-50/50 border-rose-100' : 'bg-emerald-50/50 border-emerald-100'}`}>
    <div className="flex items-center gap-2 mb-3">
      {type === 'before' ? (
        <AlertCircleIcon className="text-rose-500" />
      ) : (
        <CheckCircle2 size={18} className="text-emerald-500" />
      )}
      <h5 className={`font-bold text-sm ${type === 'before' ? 'text-rose-900' : 'text-emerald-900'}`}>{title}</h5>
    </div>
    <p className="text-xs font-medium text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const AlertCircleIcon = ({ className }: { className: string }) => (
  <svg className={`w-[18px] h-[18px] ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export default SuccessStories;

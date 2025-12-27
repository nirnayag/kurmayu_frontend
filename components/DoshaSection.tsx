
import React from 'react';
import { Leaf, Info, ArrowRight, CheckCircle2 } from 'lucide-react';

const DoshaSection: React.FC = () => {
  return (
    <section className="py-24 bg-background-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-emerald-700 font-semibold mb-4 uppercase tracking-wider text-sm">
            <Leaf size={16} />
            Personalized Assessment
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Discover Your Unique Constitution</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Take our comprehensive dosha assessment to receive personalized health recommendations based on ancient Ayurvedic wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <DoshaCard
            type="Vata"
            elements="Air & Space"
            description="Creative, energetic, quick-thinking. Governs movement, breathing, and circulation."
            color="bg-amber-50 border-amber-200 text-amber-900"
            tagColor="bg-amber-100 text-amber-700"
          />
          <DoshaCard
            type="Pitta"
            elements="Fire & Water"
            description="Intelligent, focused, ambitious. Governs digestion, metabolism, and transformation."
            color="bg-rose-50 border-rose-200 text-rose-900"
            tagColor="bg-rose-100 text-rose-700"
          />
          <DoshaCard
            type="Kapha"
            elements="Earth & Water"
            description="Calm, stable, nurturing. Governs structure, lubrication, and immunity."
            color="bg-sky-50 border-sky-200 text-sky-900"
            tagColor="bg-sky-100 text-sky-700"
          />
        </div>

        <div className="bg-background-main border border-border-light rounded-[40px] p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-2">Complete Assessment</h3>
              <p className="text-text-secondary font-medium">26 questions • 10-12 minutes</p>
            </div>
            <div className="text-right">
              <span className="text-4xl font-serif text-text-disabled/20 block mb-1">0%</span>
              <p className="text-xs font-bold text-text-disabled uppercase tracking-widest">Progress</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <AssessmentStep number={1} title="Physical Traits" count={8} active />
            <AssessmentStep number={2} title="Mental Patterns" count={7} />
            <AssessmentStep number={3} title="Lifestyle Habits" count={6} />
            <AssessmentStep number={4} title="Health History" count={5} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#064E3B] text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 flex-1 shadow-lg shadow-emerald-900/10 hover:bg-emerald-800 transition-all">
              Start Assessment <ArrowRight size={20} />
            </button>
            <button className="bg-background-surface border border-border-light text-text-primary px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-background-secondary transition-all">
              Learn More <Info size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const DoshaCard: React.FC<{ type: string, elements: string, description: string, color: string, tagColor: string }> = ({ type, elements, description, color, tagColor }) => (
  <div className={`p-8 rounded-3xl border ${color} relative overflow-hidden group`}>
    <div className="relative z-10">
      <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-6 ${tagColor}`}>
        {elements}
      </div>
      <h3 className="text-2xl font-serif mb-4 flex items-center justify-between">
        {type}
        <Leaf size={20} className="opacity-40" />
      </h3>
      <p className="text-sm font-medium leading-relaxed opacity-90 mb-8">{description}</p>
      <div className="flex items-center gap-2 text-sm font-bold opacity-80 group-hover:opacity-100 transition-opacity">
        Explore {type} <ArrowRight size={16} />
      </div>
    </div>
    <div className="absolute -bottom-12 -right-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
      <Leaf size={180} />
    </div>
  </div>
);

const AssessmentStep: React.FC<{ number: number, title: string, count: number, active?: boolean }> = ({ number, title, count, active }) => (
  <div className={`p-6 rounded-2xl border transition-all ${active ? 'bg-background-surface border-emerald-200 shadow-md ring-1 ring-emerald-100' : 'bg-transparent border-border-light'}`}>
    <div className="flex items-center gap-2 mb-3">
      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${active ? 'bg-emerald-600 text-white' : 'bg-background-secondary text-text-disabled'}`}>
        {number}
      </span>
    </div>
    <h4 className={`font-bold mb-1 ${active ? 'text-text-primary' : 'text-text-disabled'}`}>{title}</h4>
    <p className="text-xs text-text-disabled font-medium">{count} questions</p>
  </div>
);

export default DoshaSection;

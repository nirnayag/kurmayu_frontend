
import React, { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';
import { Condition as ConditionModel } from '../models';
/* Added Phone to imports from lucide-react */
import {
  Search, BookOpen, Users, Trophy, TrendingUp, Calendar, Heart, Library,
  ChevronRight, Filter, X, ArrowRight, Download, AlertCircle, Droplets,
  Wind, Flame, Leaf, Activity, Brain, ShieldCheck, Sun, Star, Clock, Book,
  CheckCircle2, Plus, Stethoscope, Utensils, RefreshCcw, Info, Phone, PlayCircle
} from 'lucide-react';

const AilmentGuide: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [detailAilment, setDetailAilment] = useState<any | null>(null);
  const [detailApproach, setDetailApproach] = useState<any | null>(null);
  const [conditions, setConditions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConditions = async () => {
      try {
        const data = await apiService.getConditions();
        const mappedConditions = data.map((c: ConditionModel) => ({
          id: c._id,
          name: c.name,
          severity: 'Moderate', // Default
          severityColor: 'text-amber-600 bg-amber-50',
          description: c.description,
          dosha: 'Vata', // Default or parse from description/symptoms
          doshaColor: 'bg-amber-100 text-amber-800',
          image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600',
          tags: c.symptoms,
          timeframe: '3-6 months',
          articles: 12,
          categories: ['General'],
          fullDescription: c.description,
          protocol: ['Consult a practitioner', 'Follow Ayurvedic diet', 'Regular exercise']
        }));
        setConditions(mappedConditions);
      } catch (error) {
        console.error('Failed to fetch conditions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConditions();
  }, []);

  const stats = [
    { label: 'Conditions Covered', value: '150+', icon: <Book size={20} /> },
    { label: 'Patients Helped', value: '50K+', icon: <Users size={20} /> },
    { label: 'Success Rate', value: '85%', icon: <ShieldCheck size={20} /> },
    { label: 'Patient Satisfaction', value: '95%', icon: <TrendingUp size={20} /> },
  ];

  const approaches = [
    { title: 'Herbal Medicine', desc: 'Traditional herbs and formulations backed by modern research', icon: <Leaf size={20} className="text-emerald-600" />, detail: 'Focuses on using standardized extracts like Ashwagandha, Curcumin, and Brahmi to target specific metabolic pathways.' },
    { title: 'Panchakarma', desc: 'Detoxification and rejuvenation therapies', icon: <Droplets size={20} className="text-emerald-600" />, detail: 'A five-fold detoxification procedure that cleanses deep-seated toxins (Ama) from the cellular level.' },
    { title: 'Dietary Modifications', desc: 'Personalized nutrition plans based on constitution', icon: <Utensils size={20} className="text-emerald-600" />, detail: 'Utilizes the properties of food as medicine (Ahara) to balance the specific Dosha dominance in an individual.' },
    { title: 'Lifestyle Changes', desc: 'Daily routines and practices for holistic wellness', icon: <Sun size={20} className="text-emerald-600" />, detail: 'Aligning with circadian rhythms (Dinacharya) to ensure hormonal balance and mental clarity.' },
    { title: 'Mind-Body Practices', desc: 'Yoga, meditation, and breathing exercises', icon: <Heart size={20} className="text-emerald-600" />, detail: 'Integrating Pranayama and meditation to reduce stress-induced cortisol which aggravates Vata.' },
    { title: 'Seasonal Adaptations', desc: 'Adjusting treatments based on seasonal changes', icon: <Activity size={20} className="text-emerald-600" />, detail: 'Following Ritu Charya to proactively manage seasonal Dosha accumulation.' },
  ];

  return (
    <div className="bg-[#FDFCF7] min-h-screen">
      {/* Page Header */}
      <section className="pt-20 pb-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-50 p-4 rounded-3xl">
              <Book className="text-emerald-700" size={32} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 tracking-tight">Comprehensive Ailment Guide</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Explore our extensive database of health conditions with detailed Ayurvedic treatment protocols, evidence-based research, and personalized wellness guidance.
          </p>
        </div>
      </section>

      {/* Featured Condition Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="bg-[#F6FDF7] rounded-[40px] border border-emerald-50 overflow-hidden shadow-sm flex flex-col md:flex-row">
          <div className="md:w-1/2 relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover"
              alt="Arthritis Treatment"
            />
            <div className="absolute top-6 left-6 bg-emerald-900 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Featured Condition
            </div>
          </div>
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              <Star size={14} className="fill-emerald-700" /> Most Researched This Month
            </div>
            <h2 className="text-4xl font-serif text-gray-900 mb-6">Arthritis (Sandhivata)</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Comprehensive Ayurvedic approach to managing joint inflammation and pain through natural therapies, dietary modifications, and lifestyle changes. Our evidence-based protocols have helped thousands achieve lasting relief.
            </p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
              <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                <Users size={16} className="text-emerald-600" /> 15% of adults affected
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                <TrendingUp size={16} className="text-emerald-600" /> 85% success rate
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                <Clock size={16} className="text-emerald-600" /> 3-6 months
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                <Library size={16} className="text-emerald-600" /> High Evidence
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setDetailAilment(conditions[0])}
                className="bg-[#064E3B] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 text-sm hover:bg-emerald-900 transition-all"
              >
                <BookOpen size={18} /> Read Full Guide
              </button>
              <button className="bg-white border border-gray-100 text-gray-600 px-8 py-3 rounded-xl font-bold flex items-center gap-2 text-sm hover:bg-gray-50 transition-all">
                <Download size={18} /> Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-[#064E3B] py-12 mb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-emerald-100/40 text-[10px] font-bold uppercase tracking-[0.3em] text-center mb-10">Our Impact in Ayurvedic Healthcare</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center text-white">
                <div className="bg-emerald-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-500/20 text-emerald-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-serif font-bold mb-1">{stat.value}</div>
                <div className="text-[10px] text-emerald-100/60 font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Condition Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {conditions.map(c => (
          <div key={c.id} className="bg-white rounded-[40px] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all group flex flex-col shadow-sm">
            <div className="relative h-56 overflow-hidden">
              <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className={`absolute top-4 right-4 ${c.doshaColor} px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest`}>
                {c.dosha}
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-bold text-gray-900 leading-snug">{c.name}</h4>
                <span className={`${c.severityColor} px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-tight`}>{c.severity}</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-6">{c.description}</p>

              <div className="flex gap-4 mb-6 pt-4 border-t border-gray-50">
                {c.categories.map((cat, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="bg-gray-50 p-2 rounded-lg text-emerald-600 mb-1">
                      {cat.includes('Digestive') ? <Leaf size={14} /> :
                        cat.includes('Respiratory') ? <Wind size={14} /> :
                          cat.includes('Mental') ? <Brain size={14} /> : <Activity size={14} />}
                    </div>
                    <span className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter text-center">{cat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-50 mt-auto flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><Clock size={12} /> {c.timeframe}</span>
                  <span className="flex items-center gap-1"><Library size={12} /> {c.articles} articles</span>
                </div>
                <button
                  onClick={() => setDetailAilment(c)}
                  className="text-emerald-700 hover:gap-2 transition-all flex items-center gap-1"
                >
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Our Treatment Approaches */}
      <section className="bg-white py-24 border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif text-gray-900 mb-4">Our Treatment Approaches</h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">We combine ancient Ayurvedic wisdom with modern scientific validation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((app, i) => (
              <div key={i} onClick={() => setDetailApproach(app)} className="bg-gray-50/50 p-8 rounded-[32px] border border-gray-100 hover:shadow-lg transition-all cursor-pointer group">
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-emerald-50">
                  {app.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-3">{app.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium mb-4">{app.desc}</p>
                <div className="text-[10px] text-emerald-700 font-bold uppercase tracking-widest flex items-center gap-1">
                  Explore Approach <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ailment Detail Modal */}
      {detailAilment && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] shadow-2xl relative">
            <button onClick={() => setDetailAilment(null)} className="absolute top-8 right-8 p-3 hover:bg-gray-100 rounded-2xl transition-colors z-10"><X size={24} /></button>
            <div className="p-8 md:p-16">
              <div className="flex flex-col md:flex-row gap-12 mb-12">
                <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-lg h-64">
                  <img src={detailAilment.image} className="w-full h-full object-cover" alt={detailAilment.name} />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-4xl font-serif text-gray-900 mb-4">{detailAilment.name}</h2>
                  <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-4">Ayurvedic Pathogenesis</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{detailAilment.fullDescription || detailAilment.description}</p>
                </div>
              </div>
              <div className="bg-emerald-50 p-8 rounded-[32px] border border-emerald-100">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Activity className="text-emerald-600" /> Recommended Protocol</h3>
                <ul className="space-y-3">
                  {detailAilment.protocol?.map((step: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-emerald-900 font-medium"><CheckCircle2 size={16} /> {step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Approach Detail Modal */}
      {detailApproach && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[40px] shadow-2xl relative">
            <button onClick={() => setDetailApproach(null)} className="absolute top-8 right-8 p-3 hover:bg-gray-100 rounded-2xl transition-colors z-10"><X size={24} /></button>
            <div className="p-8 md:p-12">
              <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">{detailApproach.icon}</div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">{detailApproach.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{detailApproach.detail}</p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4 flex items-center gap-2"><ShieldCheck size={16} /> Clinical Relevance</h4>
                <p className="text-sm text-gray-600">This approach is integrated into over 90% of our clinical pathways, ensuring a balanced treatment experience that respects the body's natural state.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AccessCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all cursor-pointer group">
    <div className="bg-gray-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors">
      {icon}
    </div>
    <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-[10px] text-gray-400 font-bold uppercase leading-tight">{desc}</p>
  </div>
);

const FilterSelect: React.FC<{ label: string, options: string[] }> = ({ label, options }) => (
  <div className="space-y-2">
    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest pl-1">{label}</p>
    <select className="w-full px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs font-bold text-gray-600 focus:outline-none focus:ring-1 focus:ring-emerald-500/20">
      {options.map(opt => <option key={opt}>{opt}</option>)}
    </select>
  </div>
);

export default AilmentGuide;

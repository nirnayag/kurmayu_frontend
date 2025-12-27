
import React, { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';
import { Herb as HerbModel, Practitioner as PractitionerModel, Comparison as ComparisonModel } from '../models';
import {
  Leaf, Search, ArrowRight, CheckCircle2, Clock, Scale, X,
  ShieldCheck, Zap, Plus, Info, Star, ChevronDown, Filter,
  BookOpen, Droplets, Wind, Flame, Activity, Brain, Sun,
  Heart, Phone, AlertCircle, MapPin, Globe, Award, Languages,
  Stethoscope, Users, MessageCircle, PlayCircle, Beaker
} from 'lucide-react';

interface HerbData {
  id: string;
  name: string;
  botanicalName: string;
  category: string;
  doshas: string[];
  keyBenefits: string[];
  dosage: string;
  precautions: string;
  image: string;
  typeBadge: string;
  // Detail expansion
  rasa?: string;
  guna?: string;
  virya?: string;
  vipaka?: string;
  science?: string;
}

const TreatmentCenter: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Panchakarma');
  const [herbSearch, setHerbSearch] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [openSafety, setOpenSafety] = useState<number | null>(null);
  const [herbs, setHerbs] = useState<HerbData[]>([]);
  const [practitioners, setPractitioners] = useState<any[]>([]);
  const [allTreatments, setAllTreatments] = useState<any[]>([]);
  const [comparisonData, setComparisonData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [herbData, practitionerData, compareData, treatmentData] = await Promise.all([
          apiService.getHerbs(),
          apiService.getPractitioners(),
          apiService.getComparisons(),
          apiService.getTreatments()
        ]);

        setHerbs(herbData.map((h: HerbModel) => ({
          id: h._id || h.name.toLowerCase(),
          name: h.name,
          botanicalName: h.scientificName,
          category: h.type || 'Herbal Medicine',
          doshas: h.balancesDoshas || ['Vata', 'Pitta', 'Kapha'],
          keyBenefits: h.keyBenefits,
          dosage: h.dosage || 'Consult practitioner',
          precautions: h.precautions?.join(', ') || 'Consult practitioner',
          image: h.image || 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400',
          typeBadge: h.type || 'Herb',
          description: h.description,
          gallery: h.gallery
        })));

        setPractitioners(practitionerData.map((p: PractitionerModel) => ({
          name: p.name,
          deg: 'BAMS', // Default
          rating: 4.9,
          reviews: 100,
          exp: 10,
          loc: p.location,
          fee: 1000,
          status: 'Available',
          specs: [p.specialty],
          image: `https://i.pravatar.cc/150?u=${p.name}`
        })));

        const mappedComparisons: Record<string, any> = {};
        compareData.forEach((c: ComparisonModel) => {
          mappedComparisons[c.treatment_a.toLowerCase()] = {
            name: c.treatment_a,
            cat: 'Treatment',
            dur: '60 min',
            cost: 'Varies',
            intensity: 'Gentle',
            benefits: [c.comparison],
            bestFor: ['General wellness'],
            procedure: c.comparison
          };
        });
        setComparisonData(mappedComparisons);

        setAllTreatments(treatmentData.map((t: any) => ({
          id: t._id?.$oid || t._id || t.name.toLowerCase(),
          name: t.name,
          cat: t.category,
          dur: t.duration || '3-7 days',
          desc: t.description || 'Traditional Ayurvedic treatment for holistic wellness.',
          benefits: t.keyBenefits || ['Detoxification', 'Rejuvenation'],
          recommendedFor: t.recommendedFor,
          img: t.image || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600'
        })));

      } catch (error) {
        console.error('Failed to fetch treatment data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const categories = [
    { name: 'Panchakarma', icon: <Droplets size={16} /> },
    { name: 'Herbal Medicine', icon: <Leaf size={16} /> },
    { name: 'Massage Therapies', icon: <Zap size={16} /> },
    { name: 'Specialized Therapies', icon: <Star size={16} /> }
  ];

  const toggleSelection = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : (prev.length < 3 ? [...prev, id] : prev));
  };

  return (
    <div className="bg-background-main min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Zap size={14} className="fill-emerald-800" /> Traditional Healing Wisdom
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-text-primary leading-tight">
              Discover Authentic <br /> Ayurvedic Treatments
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
              Explore time-tested Panchakarma therapies and herbal remedies backed by ancient wisdom and modern research. Your journey to holistic wellness begins here.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#064E3B] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-900 transition-all shadow-lg">
                <Search size={18} /> Find Treatment
              </button>
              <button className="bg-background-surface border border-border-light text-text-secondary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-background-secondary transition-all">
                <BookOpen size={18} /> Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-background-surface shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" alt="Ayurvedic Ritual" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Treatment Categories */}
      <section className="py-24 bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Explore Treatment Categories</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {categories.map(cat => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all ${activeCategory === cat.name ? 'bg-[#064E3B] text-white shadow-lg' : 'bg-background-secondary text-text-secondary hover:bg-background-header'
                    }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50/50 rounded-[40px] p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allTreatments
                .filter(t => {
                  if (activeCategory === 'Panchakarma') return t.cat === 'Detoxification' || t.cat === 'Panchakarma';
                  if (activeCategory === 'Herbal Medicine') return t.cat === 'Herbal' || t.cat === 'Medicine';
                  if (activeCategory === 'Massage Therapies') return t.cat === 'Massage' || t.cat === 'Therapy';
                  return t.cat === activeCategory;
                })
                .map(t => (
                  <div key={t.id} className="bg-background-surface rounded-[32px] overflow-hidden border border-border-light shadow-sm hover:shadow-xl transition-all group">
                    <div className="relative h-48 overflow-hidden">
                      <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{t.dur}</div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold">{t.name}</h4>
                        <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg text-[10px] font-bold uppercase">{t.dur}</span>
                      </div>
                      <p className="text-text-disabled text-sm mb-4 font-medium line-clamp-2">{t.desc}</p>

                      {t.recommendedFor && (
                        <div className="mb-4">
                          <p className="text-emerald-900 font-bold text-[10px] uppercase tracking-widest mb-1">Recommended For</p>
                          <p className="text-xs text-text-secondary italic">{t.recommendedFor}</p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-6">
                        {t.benefits.slice(0, 3).map((b: string) => (
                          <span key={b} className="bg-background-secondary text-text-secondary px-2 py-1 rounded-md text-[9px] font-bold uppercase border border-border-light">
                            {b}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => {
                          (window as any).treatmentDetailData = { ...t, type: 'treatment', details: comparisonData[t.name.toLowerCase()] || {} };
                          window.location.hash = `#treatment/${t.id}`;
                        }}
                        className="w-full border border-emerald-900 text-emerald-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors"
                      >
                        <Info size={16} /> Learn More
                      </button>
                    </div>
                  </div>
                ))}
              {allTreatments.filter(t => {
                if (activeCategory === 'Panchakarma') return t.cat === 'Detoxification' || t.cat === 'Panchakarma';
                return t.cat === activeCategory;
              }).length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <p className="text-text-disabled font-medium">No treatments found in this category yet.</p>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* Herbal Medicine Database */}
      <section className="py-24 bg-background-surface border-t border-border-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-serif mb-4">Herbal Medicine Database</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {herbs.map(herb => (
              <div key={herb.id} className="bg-background-surface rounded-[40px] overflow-hidden border border-border-light shadow-sm hover:shadow-xl transition-all group flex flex-col text-left">
                <div className="relative h-48 overflow-hidden">
                  <img src={herb.image} alt={herb.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-900">{herb.typeBadge}</div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-2xl font-bold">{herb.name}</h4>
                    <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg text-[10px] font-bold uppercase">{herb.typeBadge}</span>
                  </div>
                  <p className="text-[11px] font-serif italic text-text-disabled mb-4">{herb.botanicalName}</p>

                  <div className="space-y-4 mb-6 flex-1">
                    <div>
                      <p className="text-emerald-900 font-bold text-[9px] uppercase tracking-widest mb-1">Dosage</p>
                      <p className="text-xs text-text-secondary">{herb.dosage}</p>
                    </div>

                    <div>
                      <p className="text-emerald-900 font-bold text-[9px] uppercase tracking-widest mb-2">Balances</p>
                      <div className="flex flex-wrap gap-1">
                        {herb.doshas.map((d: string) => (
                          <span key={d} className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${d === 'Vata' ? 'bg-blue-50 text-blue-600' :
                            d === 'Pitta' ? 'bg-red-50 text-red-600' :
                              'bg-emerald-50 text-emerald-600'
                            }`}>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-emerald-900 font-bold text-[9px] uppercase tracking-widest mb-2">Key Benefits</p>
                      <div className="flex flex-wrap gap-1">
                        {herb.keyBenefits.slice(0, 3).map((b: string) => (
                          <span key={b} className="bg-background-secondary text-text-secondary px-2 py-0.5 rounded text-[9px] font-bold uppercase border border-border-light">
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      (window as any).herbDetailData = herb;
                      window.location.hash = `#herb/${herb.id}`;
                    }}
                    className="w-full bg-[#064E3B] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-all"
                  >
                    <BookOpen size={18} /> View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Treatments */}
      <section className="py-24 bg-background-primary border-y border-border-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Compare Treatments</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Select up to 3 treatments to compare their features, benefits, and suitability for your needs.</p>
          </div>
          <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm mb-12">
            <h3 className="font-bold text-text-primary mb-8">Select Treatments ({selectedIds.length}/3)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.keys(comparisonData).map(id => (
                <div
                  key={id}
                  onClick={() => toggleSelection(id)}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer group relative ${selectedIds.includes(id)
                    ? 'border-emerald-500 bg-emerald-50/10'
                    : 'border-border-light hover:border-emerald-200'
                    }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-text-primary">{comparisonData[id].name}</h4>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedIds.includes(id) ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-border-light group-hover:border-emerald-300'}`}>
                      {selectedIds.includes(id) && <CheckCircle2 size={12} />}
                    </div>
                  </div>
                  <p className="text-[10px] text-text-disabled font-bold uppercase tracking-widest mb-4">{comparisonData[id].cat}</p>
                </div>
              ))}
            </div>
          </div>
          {selectedIds.length > 0 && (
            <div className="bg-background-surface rounded-[40px] border border-border-light shadow-xl overflow-hidden overflow-x-auto">
              <table className="w-full text-left min-w-[900px]">
                <thead>
                  <tr className="bg-background-secondary/50">
                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-text-disabled border-b border-border-light w-1/4">Feature</th>
                    {selectedIds.map(id => (
                      <th key={id} className="p-6 border-b border-border-light w-1/4">
                        <span className="text-lg font-bold text-text-primary">{comparisonData[id].name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <ComparisonRow label="Category" values={selectedIds.map(id => comparisonData[id].cat)} />
                  <ComparisonRow label="Duration" values={selectedIds.map(id => comparisonData[id].dur)} />
                  <ComparisonRow label="Intensity" values={selectedIds.map(id => <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase ${comparisonData[id].intensity === 'Gentle' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{comparisonData[id].intensity}</span>)} />
                  <ComparisonRow label="Cost Range" values={selectedIds.map(id => <span className="font-bold text-text-secondary">{comparisonData[id].cost}</span>)} />
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Practitioner Grid */}
      <section className="py-24 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-text-primary">Find Qualified Practitioners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practitioners.map(dr => (
              <div key={dr.name} className="bg-background-surface border border-border-light rounded-[40px] overflow-hidden hover:shadow-xl transition-all p-8 flex flex-col shadow-sm relative group">
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">{dr.status}</div>
                <div className="flex flex-col items-center text-center mb-8">
                  <img src={dr.image} alt={dr.name} className="w-24 h-24 rounded-full mb-4 border-4 border-emerald-50 object-cover" />
                  <h4 className="text-xl font-bold text-text-primary">{dr.name}</h4>
                  <p className="text-emerald-700 font-bold text-[10px] uppercase tracking-widest mt-1 mb-3">{dr.deg}</p>
                </div>
                <button
                  onClick={() => {
                    (window as any).practitionerDetailData = dr;
                    window.location.hash = `#practitioner/${dr.name}`;
                  }}
                  className="bg-[#064E3B] text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition-colors"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

const ComparisonRow: React.FC<{ label: string, values: React.ReactNode[] }> = ({ label, values }) => (
  <tr className="border-b border-border-light last:border-0 hover:bg-background-secondary/20 transition-colors">
    <td className="p-6 font-bold text-text-disabled uppercase tracking-widest text-[10px] w-1/4 bg-background-secondary/30">{label}</td>
    {values.map((v, i) => (
      <td key={i} className="p-6 text-text-secondary text-[11px] leading-relaxed w-1/4">
        {v}
      </td>
    ))}
  </tr>
);

const HerbProperty: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="bg-background-secondary p-3 rounded-xl border border-border-light text-center">
    <p className="text-[10px] text-text-disabled font-bold uppercase tracking-widest mb-1">{label}</p>
    <p className="text-[11px] font-bold text-text-primary">{value}</p>
  </div>
);

export default TreatmentCenter;

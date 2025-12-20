
import React, { useState } from 'react';
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
  const [detailItem, setDetailItem] = useState<any | null>(null);

  const categories = [
    { name: 'Panchakarma', icon: <Droplets size={16} /> },
    { name: 'Herbal Medicine', icon: <Leaf size={16} /> },
    { name: 'Massage Therapies', icon: <Zap size={16} /> },
    { name: 'Specialized Therapies', icon: <Star size={16} /> }
  ];

  const herbs: HerbData[] = [
    {
      id: 'ashwagandha',
      name: 'Ashwagandha',
      botanicalName: 'Withania somnifera',
      category: 'Adaptogen',
      doshas: ['Vata', 'Kapha'],
      keyBenefits: ['Stress relief', 'Energy boost', 'Immunity'],
      dosage: '3-6g daily',
      precautions: 'Avoid during pregnancy. Consult practitioner if on thyroid medication.',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400',
      typeBadge: 'Adaptogen',
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Ushna (Heating)',
      vipaka: 'Katu (Pungent)',
      science: 'Contains withanolides that regulate cortisol levels and support adrenal function.'
    },
    {
      id: 'triphala',
      name: 'Triphala',
      botanicalName: 'Amalaki, Bibhitaki, Haritaki',
      category: 'Digestive',
      doshas: ['Vata', 'Pitta', 'Kapha'],
      keyBenefits: ['Digestion', 'Detoxification', 'Eye health'],
      dosage: '3-6g daily',
      precautions: 'May cause loose stools initially. Reduce dose if needed.',
      image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=400',
      typeBadge: 'Digestive',
      rasa: 'Pancha Rasa (Five Tastes excluding Salty)',
      virya: 'Sheetavirya (Cooling)',
      science: 'Powerful antioxidant combination that supports bowel regularity and gut microbiome.'
    },
    {
      id: 'brahmi',
      name: 'Brahmi',
      botanicalName: 'Bacopa monnieri',
      category: 'Nervine',
      doshas: ['Pitta', 'Kapha'],
      keyBenefits: ['Memory', 'Focus', 'Anxiety relief'],
      dosage: '3-5g daily',
      precautions: 'May cause drowsiness. Take in morning or early afternoon.',
      image: 'https://images.unsplash.com/photo-1579954115545-a95591f28be0?auto=format&fit=crop&q=80&w=400',
      typeBadge: 'Nervine',
      science: 'Bacosides in Brahmi facilitate the repair of damaged neurons by enhancing kinase activity.'
    },
    {
      id: 'turmeric',
      name: 'Turmeric',
      botanicalName: 'Curcuma longa',
      category: 'Anti-inflammatory',
      doshas: ['Kapha', 'Vata'],
      keyBenefits: ['Inflammation', 'Joint health', 'Immunity'],
      dosage: '1-3g daily',
      precautions: 'May interact with blood thinners. Consult doctor if on medication.',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400',
      typeBadge: 'Anti-inflammatory',
      science: 'Curcumin modulates multiple signaling pathways associated with inflammation and cancer.'
    },
    {
      id: 'tulsi',
      name: 'Tulsi',
      botanicalName: 'Ocimum sanctum',
      category: 'Respiratory',
      doshas: ['Kapha', 'Vata'],
      keyBenefits: ['Respiratory health', 'Immunity', 'Stress relief'],
      dosage: '5-10 leaves daily',
      precautions: 'Safe for most people. May lower blood sugar levels.',
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=400',
      typeBadge: 'Respiratory',
      science: 'Contains eugenol and ursolic acid which have potent anti-microbial and anti-stress properties.'
    },
    {
      id: 'shatavari',
      name: 'Shatavari',
      botanicalName: 'Asparagus racemosus',
      category: 'Reproductive',
      doshas: ['Pitta', 'Vata'],
      keyBenefits: ['Hormonal balance', 'Reproductive health', 'Digestive support'],
      dosage: '3-6g daily',
      precautions: 'Avoid if allergic to asparagus. Consult during pregnancy.',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400',
      typeBadge: 'Reproductive',
      science: 'Acts as a phytoestrogen to regulate hormone cycles and soothe inflamed tissues.'
    }
  ];

  const practitioners = [
    { name: 'Dr. Ravi Shinde', deg: 'BAMS, MD (Ayurveda)', rating: 4.9, reviews: 248, exp: 15, loc: 'Mumbai, Maharashtra', fee: 1500, status: 'Available', specs: ['Panchakarma', 'Digestive Disorders', 'Stress Management'], image: 'https://i.pravatar.cc/150?u=dr_ravi' },
    { name: 'Dr. Priya Deshmukh', deg: 'BAMS, PhD (Ayurveda)', rating: 4.8, reviews: 192, exp: 12, loc: 'Pune, Maharashtra', fee: 1200, status: 'Available', specs: ["Women's Health", "Fertility", "Hormonal Balance"], image: 'https://i.pravatar.cc/150?u=dr_priya' },
    { name: 'Dr. Amit Kulkarni', deg: 'BAMS, MD (Panchakarma)', rating: 4.9, reviews: 315, exp: 18, loc: 'Nashik, Maharashtra', fee: 1800, status: 'Limited', specs: ['Panchakarma', 'Joint Disorders', 'Pain Management'], image: 'https://i.pravatar.cc/150?u=dr_amit' },
    { name: 'Dr. Sneha Patil', deg: 'BAMS, MD (Kayachikitsa)', rating: 4.7, reviews: 156, exp: 10, loc: 'Mumbai, Maharashtra', fee: 1000, status: 'Available', specs: ['Skin Disorders', 'Allergies', 'Immunity'], image: 'https://i.pravatar.cc/150?u=dr_sneha' },
    { name: 'Dr. Rajesh Joshi', deg: 'BAMS, MD (Shalya Tantra)', rating: 4.8, reviews: 203, exp: 14, loc: 'Thane, Maharashtra', fee: 1400, status: 'Available', specs: ['Anorectal Disorders', 'Wound Healing', 'Post-surgical Care'], image: 'https://i.pravatar.cc/150?u=dr_rajesh' },
    { name: 'Dr. Meera Sharma', deg: 'BAMS, MD (Swasthavritta)', rating: 4.9, reviews: 178, exp: 11, loc: 'Pune, Maharashtra', fee: 1100, status: 'Available', specs: ['Preventive Health', 'Lifestyle Disorders', 'Yoga Therapy'], image: 'https://i.pravatar.cc/150?u=dr_meera' }
  ];

  const comparisonData: Record<string, any> = {
    'abhyanga': { name: 'Abhyanga', cat: 'Massage Therapy', dur: '60-90 min', cost: '₹2,000-3,500', intensity: 'Gentle', benefits: ['Relaxation', 'Circulation', 'Skin health'], bestFor: ['General wellness', 'Stress management'], procedure: 'Systematic massage with warm medicated oils synchronized with breathing patterns.' },
    'shirodhara': { name: 'Shirodhara', cat: 'Specialized Therapy', dur: '45-60 min', cost: '₹3,000-5,000', intensity: 'Gentle', benefits: ['Mental calm', 'Sleep quality', 'Headache relief'], bestFor: ['Insomnia', 'Anxiety', 'Migraine'], procedure: 'A continuous stream of warm oil is poured on the forehead (ajna chakra) to calm the nervous system.' },
    'virechana': { name: 'Virechana', cat: 'Panchakarma', dur: '5-7 days', cost: '₹15,000-25,000', intensity: 'Moderate', benefits: ['Liver detox', 'Digestive health', 'Pitta balance'], bestFor: ['Digestive issues', 'Skin problems'], procedure: 'Therapeutic purgation using specific herbs to eliminate excess Pitta from the body.' },
    'basti': { name: 'Basti', cat: 'Panchakarma', dur: '8-30 days', cost: '₹25,000-50,000', intensity: 'Moderate', benefits: ['Joint health', 'Nervous system', 'Vata balance'], bestFor: ['Arthritis', 'Back pain', 'Constipation'], procedure: 'Enema therapy using herbal decoctions and oils to balance Vata at its root in the colon.' },
    'katibasti': { name: 'Kati Basti', cat: 'Specialized Therapy', dur: '30-45 min', cost: '₹1,500-2,500', intensity: 'Gentle', benefits: ['Back pain relief', 'Muscle tension'], bestFor: ['Lower back pain', 'Sciatica'], procedure: 'Warm oil pool held on the lower back using a dough ring to soothe deep tissue and nerves.' },
    'udvartana': { name: 'Udvartana', cat: 'Massage Therapy', dur: '45-60 min', cost: '₹2,500-4,000', intensity: 'Moderate', benefits: ['Weight loss', 'Cellulite reduction'], bestFor: ['Weight management', 'Kapha imbalance'], procedure: 'Dry powder massage using herbal blends to stimulate lymphatic drainage and metabolize fat.' }
  };

  const toggleSelection = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : (prev.length < 3 ? [...prev, id] : prev));
  };

  return (
    <div className="bg-[#FDFCF7] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Zap size={14} className="fill-emerald-800" /> Traditional Healing Wisdom
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight">
              Discover Authentic <br /> Ayurvedic Treatments
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
              Explore time-tested Panchakarma therapies and herbal remedies backed by ancient wisdom and modern research. Your journey to holistic wellness begins here.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#064E3B] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-900 transition-all shadow-lg">
                <Search size={18} /> Find Treatment
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
                <BookOpen size={18} /> Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
               <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" alt="Ayurvedic Ritual" className="w-full h-auto" />
             </div>
          </div>
        </div>
      </section>

      {/* Explore Treatment Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Explore Treatment Categories</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {categories.map(cat => (
                <button 
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all ${
                    activeCategory === cat.name ? 'bg-[#064E3B] text-white shadow-lg' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50/50 rounded-[40px] p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {['vamana', 'virechana', 'basti', 'nasya'].map(id => {
                const t = {
                  vamana: { name: 'Vamana', dur: '3-7 days', desc: 'Therapeutic emesis for Kapha-related disorders', benefits: ['Respiratory relief', 'Skin clarity'], img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600' },
                  virechana: { name: 'Virechana', dur: '5-7 days', desc: 'Purgation therapy for Pitta imbalances', benefits: ['Digestive health', 'Liver detox'], img: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&q=80&w=600' },
                  basti: { name: 'Basti', dur: '8-30 days', desc: 'Medicated enema for Vata disorders', benefits: ['Joint health', 'Nervous system'], img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600' },
                  nasya: { name: 'Nasya', dur: '7-14 days', desc: 'Nasal administration of medicated oils', benefits: ['Sinus relief', 'Mental clarity'], img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=600' }
                }[id as 'vamana'];
                
                return (
                  <div key={id} className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                     <div className="relative h-48 overflow-hidden">
                       <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{t.dur}</div>
                     </div>
                     <div className="p-8">
                       <h4 className="text-xl font-bold mb-2">{t.name}</h4>
                       <p className="text-gray-400 text-sm mb-4 font-medium">{t.desc}</p>
                       <button 
                        onClick={() => setDetailItem({ ...t, type: 'treatment', details: comparisonData[id] || {} })}
                        className="w-full border border-emerald-900 text-emerald-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors"
                       >
                          <Info size={16} /> Learn More
                       </button>
                     </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Herbal Medicine Database */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-serif mb-4">Herbal Medicine Database</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {herbs.map(herb => (
              <div key={herb.id} className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col text-left">
                <div className="relative h-48 overflow-hidden">
                  <img src={herb.image} alt={herb.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-900">{herb.typeBadge}</div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-2xl font-bold mb-1">{herb.name}</h4>
                  <p className="text-[11px] font-serif italic text-gray-400 mb-6">{herb.botanicalName}</p>
                  <button 
                    onClick={() => setDetailItem({ ...herb, type: 'herb' })}
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
      <section className="py-24 bg-[#F9FAF9] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Compare Treatments</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Select up to 3 treatments to compare their features, benefits, and suitability for your needs.</p>
          </div>
          <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm mb-12">
            <h3 className="font-bold text-gray-900 mb-8">Select Treatments ({selectedIds.length}/3)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.keys(comparisonData).map(id => (
                <div 
                  key={id}
                  onClick={() => toggleSelection(id)}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer group relative ${
                    selectedIds.includes(id) 
                      ? 'border-emerald-500 bg-emerald-50/10' 
                      : 'border-gray-100 hover:border-emerald-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">{comparisonData[id].name}</h4>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedIds.includes(id) ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-gray-200 group-hover:border-emerald-300'}`}>
                      {selectedIds.includes(id) && <CheckCircle2 size={12} />}
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">{comparisonData[id].cat}</p>
                </div>
              ))}
            </div>
          </div>
          {selectedIds.length > 0 && (
            <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden overflow-x-auto">
               <table className="w-full text-left min-w-[900px]">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100 w-1/4">Feature</th>
                    {selectedIds.map(id => (
                      <th key={id} className="p-6 border-b border-gray-100 w-1/4">
                        <span className="text-lg font-bold text-gray-900">{comparisonData[id].name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <ComparisonRow label="Category" values={selectedIds.map(id => comparisonData[id].cat)} />
                  <ComparisonRow label="Duration" values={selectedIds.map(id => comparisonData[id].dur)} />
                  <ComparisonRow label="Intensity" values={selectedIds.map(id => <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase ${comparisonData[id].intensity === 'Gentle' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{comparisonData[id].intensity}</span>)} />
                  <ComparisonRow label="Cost Range" values={selectedIds.map(id => <span className="font-bold text-gray-700">{comparisonData[id].cost}</span>)} />
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Practitioner Grid */}
      <section className="py-24 bg-[#F9FAF9]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-gray-900">Find Qualified Practitioners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practitioners.map(dr => (
              <div key={dr.name} className="bg-white border border-gray-100 rounded-[40px] overflow-hidden hover:shadow-xl transition-all p-8 flex flex-col shadow-sm relative group">
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">{dr.status}</div>
                <div className="flex flex-col items-center text-center mb-8">
                  <img src={dr.image} alt={dr.name} className="w-24 h-24 rounded-full mb-4 border-4 border-emerald-50 object-cover" />
                  <h4 className="text-xl font-bold text-gray-900">{dr.name}</h4>
                  <p className="text-emerald-700 font-bold text-[10px] uppercase tracking-widest mt-1 mb-3">{dr.deg}</p>
                </div>
                <button 
                  onClick={() => setDetailItem({ ...dr, type: 'practitioner' })}
                  className="bg-[#064E3B] text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition-colors"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {detailItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] shadow-2xl relative">
            <button 
              onClick={() => setDetailItem(null)}
              className="absolute top-8 right-8 p-3 hover:bg-gray-100 rounded-2xl transition-colors z-10"
            >
              <X size={24} />
            </button>

            {detailItem.type === 'treatment' && (
              <div className="p-8 md:p-16">
                <div className="flex flex-col md:flex-row gap-12 mb-12">
                  <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-lg h-64">
                    <img src={detailItem.img} className="w-full h-full object-cover" alt={detailItem.name} />
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-4xl font-serif text-gray-900 mb-4">{detailItem.name}</h2>
                    <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-6">{detailItem.dur} • Intensive Healing</p>
                    <p className="text-gray-500 leading-relaxed mb-8">{detailItem.desc}</p>
                    <div className="flex gap-2">
                       {detailItem.benefits.map((b:string) => <span key={b} className="bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase">{b}</span>)}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-12">
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><PlayCircle className="text-emerald-600" /> Procedure Breakdown</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                      <div className="space-y-2">
                        <p className="font-bold text-emerald-900 uppercase text-[10px] tracking-widest">Step 1: Preparation</p>
                        <p className="text-gray-600">Oleation and heating of the body to loosen toxins (ama).</p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-bold text-emerald-900 uppercase text-[10px] tracking-widest">Step 2: Core Therapy</p>
                        <p className="text-gray-600">{detailItem.details?.procedure || 'Main therapeutic administration as per protocol.'}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-bold text-emerald-900 uppercase text-[10px] tracking-widest">Step 3: Recovery</p>
                        <p className="text-gray-600">Gradual reintroduction of diet (Samsarjana Krama).</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div>
                       <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2"><CheckCircle2 size={18} /> Therapeutic Indications</h4>
                       <ul className="space-y-2 text-sm text-gray-500">
                         {detailItem.details?.bestFor?.map((f:string) => <li key={f} className="flex items-center gap-2">• {f}</li>) || <li>• Chronic lifestyle disorders</li>}
                       </ul>
                     </div>
                     <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                       <h4 className="font-bold text-rose-900 mb-4 flex items-center gap-2"><AlertCircle size={18} /> Contraindications</h4>
                       <p className="text-xs text-rose-800 leading-relaxed">Not suitable during menstruation, pregnancy, acute fever, or extreme physical weakness. Always consult with a Vaidya before beginning.</p>
                     </div>
                  </div>
                </div>
              </div>
            )}

            {detailItem.type === 'herb' && (
              <div className="p-8 md:p-16">
                <div className="flex flex-col md:flex-row gap-12 mb-12">
                  <div className="md:w-1/3 rounded-[32px] overflow-hidden shadow-lg h-80">
                    <img src={detailItem.image} className="w-full h-full object-cover" alt={detailItem.name} />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-4xl font-serif text-gray-900 mb-2">{detailItem.name}</h2>
                    <p className="text-[14px] font-serif italic text-gray-400 mb-8">{detailItem.botanicalName}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                       <HerbProperty label="Rasa" value={detailItem.rasa || 'Tikta'} />
                       <HerbProperty label="Virya" value={detailItem.virya || 'Ushna'} />
                       <HerbProperty label="Vipaka" value={detailItem.vipaka || 'Katu'} />
                       <HerbProperty label="Dosha" value={detailItem.doshas.join('/')} />
                    </div>

                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-3 flex items-center gap-2"><Beaker size={14} /> Modern Scientific Context</h4>
                      <p className="text-sm text-emerald-900 leading-relaxed">{detailItem.science || 'Ongoing clinical studies suggest potent bioactive compounds that modulate systemic health.'}</p>
                    </div>

                    <button className="bg-[#064E3B] text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-900 transition-all flex items-center gap-2">
                       Add to Wellness Basket <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {detailItem.type === 'practitioner' && (
              <div className="p-8 md:p-16">
                <div className="flex flex-col md:flex-row gap-12">
                   <div className="md:w-1/3 text-center">
                      <img src={detailItem.image} className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-emerald-50 object-cover" alt={detailItem.name} />
                      <h2 className="text-2xl font-bold">{detailItem.name}</h2>
                      <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-6">{detailItem.deg}</p>
                      <div className="bg-amber-50 p-4 rounded-2xl text-amber-800 text-xs font-medium border border-amber-100">
                         Featured Specialist: {detailItem.specs[0]}
                      </div>
                   </div>
                   <div className="md:w-2/3 space-y-8">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Clinical Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                           {detailItem.specs.map((s:string) => <span key={s} className="px-3 py-1 bg-gray-50 text-gray-500 rounded-lg text-xs font-bold">{s}</span>)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Biography</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Experienced Ayurvedic physician with over {detailItem.exp} years of practice in integrating traditional wisdom with modern diagnostics.</p>
                      </div>
                      <button className="w-full bg-[#064E3B] text-white py-4 rounded-xl font-bold hover:bg-emerald-900 transition-all">
                         Schedule Consultation
                      </button>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const ComparisonRow: React.FC<{ label: string, values: React.ReactNode[] }> = ({ label, values }) => (
  <tr className="border-b border-gray-50 last:border-0 hover:bg-gray-50/20 transition-colors">
    <td className="p-6 font-bold text-gray-400 uppercase tracking-widest text-[10px] w-1/4 bg-gray-50/30">{label}</td>
    {values.map((v, i) => (
      <td key={i} className="p-6 text-gray-600 text-[11px] leading-relaxed w-1/4">
        {v}
      </td>
    ))}
  </tr>
);

const HerbProperty: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{label}</p>
    <p className="text-[11px] font-bold text-gray-900">{value}</p>
  </div>
);

export default TreatmentCenter;

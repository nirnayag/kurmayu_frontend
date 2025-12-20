
import React, { useState } from 'react';
import { Search, Sparkles, AlertCircle, Loader2, ArrowRight, HeartPulse } from 'lucide-react';
import { checkSymptoms } from '../services/geminiService';
import { SymptomResult } from '../types';

const SymptomChecker: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<SymptomResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const res = await checkSymptoms(query);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-2 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <Sparkles size={80} />
        </div>
        
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
          <div className="flex-1 relative flex items-center group">
            <Search className="absolute left-6 text-gray-300 group-focus-within:text-emerald-500 transition-colors" size={24} />
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search symptoms like 'headache', 'digestion', 'joint pain'..."
              className="w-full pl-16 pr-8 py-6 rounded-2xl md:rounded-l-2xl md:rounded-r-none border-none bg-gray-50/50 focus:ring-0 text-lg"
            />
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="bg-[#064E3B] text-white px-10 py-6 rounded-2xl md:rounded-l-none md:rounded-r-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-800 transition-all disabled:opacity-70"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
            {loading ? 'Analyzing...' : 'Intelligent Check'}
          </button>
        </form>

        <div className="px-6 py-4 flex items-center gap-6 overflow-x-auto no-scrollbar">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex-shrink-0">Popular:</span>
          {['Headache', 'Digestive Issues', 'Joint Pain', 'Skin Problems', 'Stress'].map(tag => (
            <button 
              key={tag}
              onClick={() => { setQuery(tag); }}
              className="text-sm font-medium text-gray-500 hover:text-emerald-700 whitespace-nowrap"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {result && (
        <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-emerald-600 text-white p-3 rounded-xl">
                <HeartPulse size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-emerald-900 mb-1">{result.potentialAilment}</h3>
                <p className="text-emerald-800/70 font-medium">Ayurvedic Insight</p>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              {result.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles size={16} className="text-amber-500" />
                  General Guidance
                </h4>
                <ul className="space-y-3">
                  {result.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50/50 border border-amber-100 p-6 rounded-2xl">
                <h4 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <AlertCircle size={16} />
                  Disclaimer
                </h4>
                <p className="text-sm text-amber-800 leading-relaxed italic">
                  {result.disclaimer}
                </p>
              </div>
            </div>

            <button className="w-full bg-[#064E3B] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-800 transition-colors">
              Talk to Dr. Ravi Shinde for Professional Advice <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;

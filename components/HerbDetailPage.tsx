import React from 'react';
import { ArrowRight, Beaker } from 'lucide-react';
interface HerbDetailPageProps {
    herb: any;
    
}
const HerbProperty: React.FC<{ label: string, value: string }> = ({ label, value }) => (
    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{label}</p>
        <p className="text-[11px] font-bold text-gray-900">{value}</p>
    </div>
);
const HerbDetailPage: React.FC<HerbDetailPageProps> = ({ herb }) => {
    return (
        <div className="bg-[#FDFCF7] min-h-screen pt-20 pb-24">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-16">
                    <div className="flex flex-col md:flex-row gap-12 mb-12">
                        <div className="md:w-1/3 rounded-[32px] overflow-hidden shadow-lg h-80">
                            <img src={herb.image} className="w-full h-full object-cover" alt={herb.name} />
                        </div>
                        <div className="md:w-2/3">
                            <h1 className="text-4xl font-serif text-gray-900 mb-2">{herb.name}</h1>
                            <p className="text-[14px] font-serif italic text-gray-400 mb-8">{herb.botanicalName}</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <HerbProperty label="Rasa" value={herb.rasa || 'Tikta'} />
                                <HerbProperty label="Virya" value={herb.virya || 'Ushna'} />
                                <HerbProperty label="Vipaka" value={herb.vipaka || 'Katu'} />
                                <HerbProperty label="Dosha" value={herb.doshas.join('/')} />
                            </div>
                            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mb-8">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-3 flex items-center gap-2"><Beaker size={14} /> Description & Benefits</h4>
                                <p className="text-sm text-emerald-900 leading-relaxed mb-4">{herb.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {herb.keyBenefits.map((b: string) => (
                                        <span key={b} className="bg-white/50 text-emerald-800 px-2 py-1 rounded-md text-[10px] font-bold uppercase border border-emerald-100">
                                            {b}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Dosage</h4>
                                    <p className="text-sm text-gray-700 font-medium">{herb.dosage}</p>
                                </div>
                                <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-2">Precautions</h4>
                                    <p className="text-xs text-rose-700 leading-relaxed">{herb.precautions}</p>
                                </div>
                            </div>
                            <button className="bg-[#064E3B] text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-900 transition-all flex items-center gap-2">
                                Add to Wellness Basket <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HerbDetailPage;

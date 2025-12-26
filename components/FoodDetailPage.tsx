import React from 'react';
import { Database, Zap, Sparkles, CheckCircle2, ChefHat, ArrowRight } from 'lucide-react';
interface FoodDetailPageProps {
    food: any;
    
}
const HerbProperty: React.FC<{ label: string, value: string }> = ({ label, value }) => (
    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{label}</p>
        <p className="text-[11px] font-bold text-gray-900">{value}</p>
    </div>
);
const FoodDetailPage: React.FC<FoodDetailPageProps> = ({ food }) => {
    return (
        <div className="bg-[#FDFCF7] min-h-screen pt-20 pb-24">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-16">
                    <div className="flex flex-col md:flex-row gap-12 mb-12">
                        <div className="md:w-1/3 rounded-[32px] overflow-hidden shadow-xl h-[400px]">
                            <img src={food.image} className="w-full h-full object-cover" alt={food.name} />
                        </div>
                        <div className="md:w-2/3">
                            <div className="flex items-center gap-2 text-emerald-700 font-bold text-[10px] uppercase tracking-widest mb-4">
                                <Database size={14} /> Food Database Detail
                            </div>
                            <h1 className="text-4xl font-serif text-gray-900 mb-2">{food.name}</h1>
                            <p className="text-sm font-serif italic text-gray-400 mb-8">Sanskrit: {food.sanskrit}</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                <HerbProperty label="Rasa (Taste)" value={food.taste} />
                                <HerbProperty label="Virya (Potency)" value={food.potency} />
                                <HerbProperty label="Dosha Impact" value={food.dosha} />
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">Ayurvedic Perspective</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{food.description}</p>
                                </div>
                                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-2 flex items-center gap-2"><Zap size={14} /> Biochemistry</h4>
                                    <p className="text-sm text-amber-900 leading-relaxed font-medium">{food.biochemistry}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2"><Sparkles className="text-emerald-600" /> Health Benefits</h4>
                            <ul className="space-y-3">
                                {food.benefits.map((b: string) => (
                                    <li key={b} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                                        <CheckCircle2 size={16} className="text-emerald-500" /> {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2"><ChefHat className="text-emerald-600" /> Preparation Tips</h4>
                            <ul className="space-y-3">
                                {food.prepTips.map((tip: string) => (
                                    <li key={tip} className="flex items-start gap-3 text-sm text-gray-500">
                                        <ArrowRight size={14} className="mt-1 flex-shrink-0 text-emerald-400" /> {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FoodDetailPage;

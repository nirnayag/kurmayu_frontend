import React from 'react';
import { PlayCircle, CheckCircle2, AlertCircle } from 'lucide-react';
interface TreatmentDetailPageProps {
    treatment: any;

}
const TreatmentDetailPage: React.FC<TreatmentDetailPageProps> = ({ treatment }) => {
    return (
        <div className="bg-[#FDFCF7] min-h-screen pt-20 pb-24">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-12 mb-12">
                    <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-lg h-64">
                        <img src={treatment.img} className="w-full h-full object-cover" alt={treatment.name} />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <h1 className="text-4xl font-serif text-gray-900 mb-4">{treatment.name}</h1>
                        <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-6">{treatment.dur} • Intensive Healing</p>
                        <p className="text-gray-500 leading-relaxed mb-6">{treatment.desc}</p>
                        {treatment.recommendedFor && (
                            <div className="mb-6">
                                <p className="text-emerald-900 font-bold text-[10px] uppercase tracking-widest mb-2">Recommended For</p>
                                <p className="text-sm text-gray-600">{treatment.recommendedFor}</p>
                            </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                            {treatment.benefits.map((b: string) => <span key={b} className="bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase">{b}</span>)}
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
                                <p className="text-gray-600">{treatment.details?.procedure || 'Main therapeutic administration as per protocol.'}</p>
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
                                {treatment.details?.bestFor?.map((f: string) => <li key={f} className="flex items-center gap-2">• {f}</li>) || <li>• Chronic lifestyle disorders</li>}
                            </ul>
                        </div>
                        <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                            <h4 className="font-bold text-rose-900 mb-4 flex items-center gap-2"><AlertCircle size={18} /> Contraindications</h4>
                            <p className="text-xs text-rose-800 leading-relaxed">Not suitable during menstruation, pregnancy, acute fever, or extreme physical weakness. Always consult with a Vaidya before beginning.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
};
export default TreatmentDetailPage;

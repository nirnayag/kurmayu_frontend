import React from 'react';
import { Activity, CheckCircle2 } from 'lucide-react';
interface AilmentDetailPageProps {
    ailment: any;
    
}
const AilmentDetailPage: React.FC<AilmentDetailPageProps> = ({ ailment }) => {
    return (
        <div className="bg-[#FDFCF7] min-h-screen pt-20 pb-24">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-16">
                    <div className="flex flex-col md:flex-row gap-12 mb-12">
                        <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-lg h-64">
                            <img src={ailment.image} className="w-full h-full object-cover" alt={ailment.name} />
                        </div>
                        <div className="md:w-1/2 flex flex-col justify-center">
                            <h1 className="text-4xl font-serif text-gray-900 mb-4">{ailment.name}</h1>
                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-4">Ayurvedic Pathogenesis</p>
                            <p className="text-gray-600 leading-relaxed mb-6">{ailment.fullDescription || ailment.description}</p>
                        </div>
                    </div>
                    <div className="bg-emerald-50 p-8 rounded-[32px] border border-emerald-100">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Activity className="text-emerald-600" /> Recommended Protocol</h3>
                        <ul className="space-y-3">
                            {ailment.protocol?.map((step: string, i: number) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-emerald-900 font-medium"><CheckCircle2 size={16} /> {step}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AilmentDetailPage;

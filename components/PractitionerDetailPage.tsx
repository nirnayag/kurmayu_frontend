import React from 'react';
import { ArrowLeft } from 'lucide-react';
interface PractitionerDetailPageProps {
    practitioner: any;
    
}
const PractitionerDetailPage: React.FC<PractitionerDetailPageProps> = ({ practitioner }) => {
    return (
        <div className="bg-[#FDFCF7] min-h-screen pt-20 pb-24">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-16">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/3 text-center">
                            <img src={practitioner.image} className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-emerald-50 object-cover" alt={practitioner.name} />
                            <h1 className="text-2xl font-bold">{practitioner.name}</h1>
                            <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-6">{practitioner.deg}</p>
                            <div className="bg-amber-50 p-4 rounded-2xl text-amber-800 text-xs font-medium border border-amber-100">
                                Featured Specialist: {practitioner.specs[0]}
                            </div>
                        </div>
                        <div className="md:w-2/3 space-y-8">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Clinical Expertise</h4>
                                <div className="flex flex-wrap gap-2">
                                    {practitioner.specs.map((s: string) => <span key={s} className="px-3 py-1 bg-gray-50 text-gray-500 rounded-lg text-xs font-bold">{s}</span>)}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Biography</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">Experienced Ayurvedic physician with over {practitioner.exp} years of practice in integrating traditional wisdom with modern diagnostics.</p>
                            </div>
                            <button className="w-full bg-[#064E3B] text-white py-4 rounded-xl font-bold hover:bg-emerald-900 transition-all">
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PractitionerDetailPage;

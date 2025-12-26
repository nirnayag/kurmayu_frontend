import React from 'react';
import { ShieldCheck } from 'lucide-react';
interface ApproachDetailPageProps {
    approach: any;
    
}
const ApproachDetailPage: React.FC<ApproachDetailPageProps> = ({ approach }) => {
    return (
        <div className="bg-[#FDFCF7] min-h-screen pt-20 pb-24">
            <div className="max-w-3xl mx-auto px-4 md:px-8">
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-16">
                    <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">{approach.icon}</div>
                    <h1 className="text-3xl font-serif text-gray-900 mb-4">{approach.title}</h1>
                    <p className="text-gray-600 leading-relaxed mb-8">{approach.detail}</p>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4 flex items-center gap-2"><ShieldCheck size={16} /> Clinical Relevance</h4>
                        <p className="text-sm text-gray-600">This approach is integrated into over 90% of our clinical pathways, ensuring a balanced treatment experience that respects the body's natural state.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ApproachDetailPage;

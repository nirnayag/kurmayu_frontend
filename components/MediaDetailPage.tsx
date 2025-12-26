import React from 'react';
import { BookOpen, Leaf } from 'lucide-react';
import { MediaRecognition } from '../models';
interface MediaDetailPageProps {
    media: MediaRecognition;
}

const MediaDetailPage: React.FC<MediaDetailPageProps> = ({ media }) => {
    return (
        <div className="bg-[#FDFCF7] min-h-screen pt-20 pb-24">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden">
                    <div className="rounded-3xl overflow-hidden h-64 md:h-96">
                        <img src={media.thumbnail} className="w-full h-full object-cover" alt={media.title} />
                    </div>
                    <div className="p-8 md:p-12">
                        <div className="flex items-center gap-2 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-4">
                            <BookOpen size={14} /> Media Recognition: {media.source}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">{media.title}</h1>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">{media.publishedDate}</p>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">{media.description}</p>
                        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-center justify-between">
                            <p className="text-emerald-900 font-bold text-sm italic">"A testament to the efficacy of traditional wisdom."</p>
                            <Leaf className="text-emerald-300" size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MediaDetailPage;

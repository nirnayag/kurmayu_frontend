import React from 'react';
import { Clock, Users, ChefHat, CheckCircle2, Beaker } from 'lucide-react';
interface RecipeDetailPageProps {
    recipe: any;
    
}
const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({ recipe }) => {
    return (
        <div className="bg-[#FDFCF7] min-h-screen pt-20 pb-24">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-16">
                    <div className="flex flex-col md:flex-row gap-12 mb-12">
                        <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-lg h-80">
                            <img src={recipe.image} className="w-full h-full object-cover" alt={recipe.title} />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="text-4xl font-serif text-gray-900 mb-6">{recipe.title}</h1>
                            <div className="flex gap-6 mb-8 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                                <span className="flex items-center gap-1"><Clock size={14} /> {recipe.time}</span>
                                <span className="flex items-center gap-1"><Users size={14} /> {recipe.servings}</span>
                            </div>
                            <div className="space-y-4 mb-8">
                                <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Ingredients:</p>
                                <ul className="grid grid-cols-1 gap-2">
                                    {recipe.ingredients.map((ing: string) => (
                                        <li key={ing} className="text-sm text-gray-600 flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> {ing}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><ChefHat className="text-emerald-600" /> Preparation</h3>
                            <ol className="space-y-4">
                                {recipe.instructions.map((step: string, i: number) => (
                                    <li key={i} className="flex gap-4 text-sm text-gray-600">
                                        <span className="font-bold text-emerald-900">{i + 1}.</span>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div className="bg-emerald-50/50 p-8 rounded-[32px] border border-emerald-100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Beaker className="text-emerald-700" /> Therapeutic Insight</h3>
                            <p className="text-sm text-emerald-900 leading-relaxed italic">
                                {recipe.nutritionalInsight}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RecipeDetailPage;

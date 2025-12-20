
import React, { useState } from 'react';
import { 
  Utensils, Leaf, Calendar, Users, Search, ArrowRight, CheckCircle2, 
  XCircle, Flame, Droplets, Wind, Info, ChefHat, Star, Clock, Plus,
  ArrowUpRight, Sparkles, ShoppingBag, Heart, BookOpen, MessageCircle,
  X, Sun, Thermometer, Database, Apple, Wheat, Coffee, Carrot, Filter,
  Share2, Camera, User, Download, FileText, Beaker, Zap
} from 'lucide-react';

const NutritionHub: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<any | null>(null);
  const [selectedFood, setSelectedFood] = useState<any | null>(null);
  const [mealPlanDosha, setMealPlanDosha] = useState('');
  const [mealPlanSeason, setMealPlanSeason] = useState('');
  const [mealPlanGoal, setMealPlanGoal] = useState('');

  const recipes = [
    { 
      id: 'khichdi', 
      title: "Tri-Dosha Balancing Khichdi", 
      tags: ['Vata', 'Pitta', 'Kapha'], 
      time: "30 mins", 
      servings: "4 servings", 
      rating: 4.9, 
      reviews: 234,
      author: "Kindles Agni",
      image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=600",
      ingredients: ["1 cup Moong Dal", "1/2 cup Basmati Rice", "2 tsp Ghee", "Cumin, Ginger, Turmeric"],
      instructions: ["Rinse grains", "Sauté spices in ghee", "Pressure cook with 4 cups water"],
      nutritionalInsight: "High in fiber and protein, this kitchari is considered 'satvik' and promotes clarity of mind."
    },
    { 
      id: 'raita',
      title: "Cooling Cucumber Raita", 
      tags: ['Pitta'], 
      time: "10 mins", 
      servings: "4 servings", 
      rating: 4.7, 
      reviews: 189,
      author: "Cooling",
      image: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?auto=format&fit=crop&q=80&w=600",
      ingredients: ["Fresh Yogurt", "Grated Cucumber", "Roasted Cumin", "Mint Leaves"],
      instructions: ["Whisk yogurt", "Mix cucumber and spices", "Garnish with mint"],
      nutritionalInsight: "Cucumber and yogurt provide essential hydration and probiotics for gut health."
    },
    { 
      id: 'tea',
      title: "Warming Ginger Tea", 
      tags: ['Vata', 'Kapha'], 
      time: "15 mins", 
      servings: "2 servings", 
      rating: 4.8, 
      reviews: 312,
      author: "Strongly Kindles",
      image: "https://images.unsplash.com/photo-1594631252845-29fc4586c562?auto=format&fit=crop&q=80&w=600",
      ingredients: ["Fresh Ginger", "Cardamom Pods", "Honey", "Lemon"],
      instructions: ["Boil ginger in water", "Steep for 5 mins", "Cool slightly and add honey"],
      nutritionalInsight: "Ginger stimulates the agni (digestive fire) without aggravating pitta when used moderately."
    }
  ];

  const featuredFoods = [
    {
      id: 'turmeric',
      name: "Turmeric (Haldi)", 
      sanskrit: "Haridra", 
      taste: "Tikta (Bitter), Katu (Pungent)",
      potency: "Ushna (Heating)",
      dosha: "Balances Kapha & Vata, May increase Pitta in excess",
      benefits: ['Anti-inflammatory', 'Immune booster', 'Blood purifier', 'Digestive aid'],
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400",
      description: "Turmeric is the 'Golden Goddess' of Ayurveda. It is revered for its ability to purify the blood, heal skin conditions, and provide a potent anti-inflammatory effect throughout the system.",
      biochemistry: "Contains Curcuminoids which modulate signaling pathways associated with inflammation.",
      prepTips: ["Mix with black pepper to increase absorption", "Cook in ghee or oil for fat-soluble benefits"]
    },
    {
      id: 'mung',
      name: "Mung Dal (Green Gram)", 
      sanskrit: "Mudga", 
      taste: "Madhura (Sweet), Kashaya (Astringent)",
      potency: "Sheetavirya (Cooling)",
      dosha: "Balances all three doshas",
      benefits: ['Easy to digest', 'Protein-rich', 'Detoxifying', 'Nourishing'],
      image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=400",
      description: "Mung beans are the most digestible of all legumes. They are used extensively in cleansing diets because they nourish the tissues without clogging the channels.",
      biochemistry: "Rich in molybdenum, folate, and essential amino acids.",
      prepTips: ["Soak overnight to further increase digestibility", "Always cook with a pinch of hing (asafoetida)"]
    },
    {
      id: 'ghee',
      name: "Ghee (Clarified Butter)", 
      sanskrit: "Ghrita", 
      taste: "Madhura (Sweet)",
      potency: "Sheetavirya (Cooling)",
      dosha: "Balances Vata & Pitta, increases Kapha in excess",
      benefits: ['Enhances digestion', 'Nourishes tissues', 'Improves memory', 'Promotes longevity'],
      image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=400",
      description: "Ghee is considered 'Liquid Gold'. It is used as a carrier (anupana) for herbs to reach deep tissues and is the primary fat used for balancing pitta and vata.",
      biochemistry: "Rich in butyric acid, a short-chain fatty acid that supports gut health.",
      prepTips: ["Use as a sauté medium for spices", "Add a teaspoon to warm milk for sleep support"]
    }
  ];

  return (
    <div className="bg-[#FDFCF7] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden text-center max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
            <Sparkles size={14} className="fill-emerald-800" /> Personalized Nutrition Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-8">
            Nourish Your Body with <br />
            <span className="text-emerald-700 italic">Ancient Wisdom</span>
          </h1>
          <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover personalized dietary guidance based on your unique constitution, seasonal rhythms, and Ayurvedic principles. Transform your health through mindful eating and traditional nutrition wisdom.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#064E3B] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-900 transition-all shadow-lg">
               <Utensils size={18} /> Explore Meal Plans
            </button>
            <button className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
               <BookOpen size={18} /> Browse Recipes
            </button>
          </div>
        </div>

        {/* Top Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
           <TopCard icon={<Sparkles className="text-amber-500" />} title="Dosha-Based Plans" desc="Personalized nutrition for Vata, Pitta, and Kapha constitutions" />
           <TopCard icon={<Calendar className="text-emerald-500" />} title="Seasonal Wisdom" desc="Adapt your diet to nature's rhythms and local ingredients" />
           <TopCard icon={<Users className="text-blue-500" />} title="Community Recipes" desc="Traditional family remedies and shared wellness wisdom" />
        </div>
      </section>

      {/* Seasonal Nutrition Guidance */}
      <section className="py-24 bg-white border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Seasonal Nutrition Guidance</h2>
            <p className="text-gray-500">Align your diet with nature's rhythms. Each season brings unique nutritional needs based on Ayurvedic principles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SeasonCard 
              name="Spring (Vasant)" 
              months="March - May" 
              balance="Kapha"
              desc="Spring is the season when accumulated Kapha from winter begins to melt, potentially causing congestion and sluggishness. Focus on light, warm, and stimulating foods."
              recs={['Barley', 'Honey', 'Ginger', 'Leafy Greens', 'Bitter Vegetables']}
              reduce={['Heavy Dairy', 'Sweet Fruits', 'Cold Foods', 'Oily Foods']}
              image="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=600"
            />
            <SeasonCard 
              name="Summer (Grishma)" 
              months="June - August" 
              balance="Pitta"
              desc="Summer heat aggravates Pitta dosha, leading to inflammation and irritability. Emphasize cooling, hydrating foods and avoid excessive heat and spice."
              recs={['Coconut', 'Cucumber', 'Watermelon', 'Mint', 'Coriander']}
              reduce={['Spicy Foods', 'Sour Foods', 'Fermented Items', 'Hot Beverages']}
              image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600"
            />
            <SeasonCard 
              name="Monsoon (Varsha)" 
              months="September - October" 
              balance="Vata"
              desc="Monsoon season weakens digestion and increases Vata. Focus on warm, easily digestible foods with digestive spices to maintain strong Agni."
              recs={['Ginger Tea', 'Warm Soups', 'Cooked Vegetables', 'Rice', 'Moong Dal']}
              reduce={['Raw Salads', 'Street Food', 'Leafy Vegetables', 'Cold Drinks']}
              image="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&q=80&w=600"
            />
          </div>
        </div>
      </section>

      {/* Ayurvedic Recipes Grid */}
      <section className="py-24 bg-white border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-4">
                <Utensils size={14} /> Recipe Collection
              </div>
              <h2 className="text-4xl font-serif mb-4">Ayurvedic Recipes for Every Constitution</h2>
              <p className="text-gray-500">Discover delicious, healing recipes tailored to your dosha type and wellness goals</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {recipes.map(recipe => (
               <div key={recipe.id} className="bg-white rounded-[40px] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all group shadow-sm flex flex-col">
                 <div className="relative h-56 overflow-hidden">
                    <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 flex gap-1">
                      {recipe.tags.map(tag => (
                        <span key={tag} className="bg-white/90 backdrop-blur-md text-emerald-900 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                    <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-rose-500 hover:bg-rose-50 transition-colors">
                       <Heart size={16} />
                    </button>
                 </div>
                 <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                       <span className="flex items-center gap-1"><Clock size={12} /> {recipe.time}</span>
                       <span className="flex items-center gap-1"><Users size={12} /> {recipe.servings}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{recipe.title}</h4>
                    <p className="text-xs text-gray-400 mb-6 italic">A complete one-pot meal that balances all three doshas. Perfect for detoxification and easy...</p>
                    
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                            <Flame size={12} className="text-emerald-600" />
                         </div>
                         <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Kindles Agni</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star size={12} fill="currentColor" />
                        <span className="text-[10px] font-bold text-gray-900">{recipe.rating}</span>
                        <span className="text-[10px] text-gray-400">({recipe.reviews})</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-auto">
                       <button 
                         onClick={() => setSelectedRecipe(recipe)}
                         className="flex-1 bg-[#064E3B] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-900 transition-all flex items-center justify-center gap-2"
                        >
                          <Utensils size={14} /> View Recipe
                       </button>
                       <button className="p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                          <Share2 size={16} className="text-gray-400" />
                       </button>
                    </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Explore Nutritional Properties */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-4">
                <Database size={14} /> Ayurvedic Food Database
              </div>
              <h2 className="text-4xl font-serif mb-4">Explore Nutritional Properties</h2>
              <p className="text-gray-500">Comprehensive database of Ayurvedic foods with detailed information about their properties, effects on doshas, and health benefits</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredFoods.map((food) => (
                <FeaturedFoodCard 
                  key={food.id}
                  {...food}
                  onViewDetails={() => setSelectedFood(food)}
                />
              ))}
           </div>
        </div>
      </section>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] shadow-2xl relative">
            <button 
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-8 right-8 p-3 hover:bg-gray-100 rounded-2xl transition-colors z-10"
            >
              <X size={24} />
            </button>
            <div className="p-8 md:p-16">
              <div className="flex flex-col md:flex-row gap-12 mb-12">
                <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-lg h-80">
                  <img src={selectedRecipe.image} className="w-full h-full object-cover" alt={selectedRecipe.title} />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-4xl font-serif text-gray-900 mb-6">{selectedRecipe.title}</h2>
                  <div className="flex gap-6 mb-8 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Clock size={14} /> {selectedRecipe.time}</span>
                    <span className="flex items-center gap-1"><Users size={14} /> {selectedRecipe.servings}</span>
                  </div>
                  <div className="space-y-4 mb-8">
                     <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Ingredients:</p>
                     <ul className="grid grid-cols-1 gap-2">
                       {selectedRecipe.ingredients.map((ing:string) => (
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
                     {selectedRecipe.instructions.map((step:string, i:number) => (
                       <li key={i} className="flex gap-4 text-sm text-gray-600">
                          <span className="font-bold text-emerald-900">{i+1}.</span>
                          {step}
                       </li>
                     ))}
                   </ol>
                </div>
                <div className="bg-emerald-50/50 p-8 rounded-[32px] border border-emerald-100">
                   <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Beaker className="text-emerald-700" /> Therapeutic Insight</h3>
                   <p className="text-sm text-emerald-900 leading-relaxed italic">
                     {selectedRecipe.nutritionalInsight}
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Food Detail Modal */}
      {selectedFood && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] shadow-2xl relative">
            <button 
              onClick={() => setSelectedFood(null)}
              className="absolute top-8 right-8 p-3 hover:bg-gray-100 rounded-2xl transition-colors z-10"
            >
              <X size={24} />
            </button>
            <div className="p-8 md:p-16">
               <div className="flex flex-col md:flex-row gap-12 mb-12">
                  <div className="md:w-1/3 rounded-[32px] overflow-hidden shadow-xl h-[400px]">
                     <img src={selectedFood.image} className="w-full h-full object-cover" alt={selectedFood.name} />
                  </div>
                  <div className="md:w-2/3">
                     <div className="flex items-center gap-2 text-emerald-700 font-bold text-[10px] uppercase tracking-widest mb-4">
                        <Database size={14} /> Food Database Detail
                     </div>
                     <h2 className="text-4xl font-serif text-gray-900 mb-2">{selectedFood.name}</h2>
                     <p className="text-sm font-serif italic text-gray-400 mb-8">Sanskrit: {selectedFood.sanskrit}</p>
                     
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        <HerbProperty label="Rasa (Taste)" value={selectedFood.taste} />
                        <HerbProperty label="Virya (Potency)" value={selectedFood.potency} />
                        <HerbProperty label="Dosha Impact" value={selectedFood.dosha} />
                     </div>

                     <div className="space-y-6">
                        <div>
                           <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">Ayurvedic Perspective</h4>
                           <p className="text-sm text-gray-600 leading-relaxed">{selectedFood.description}</p>
                        </div>
                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                           <h4 className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-2 flex items-center gap-2"><Zap size={14} /> Biochemistry</h4>
                           <p className="text-sm text-amber-900 leading-relaxed font-medium">{selectedFood.biochemistry}</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                     <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2"><Sparkles className="text-emerald-600" /> Health Benefits</h4>
                     <ul className="space-y-3">
                        {selectedFood.benefits.map((b:string) => (
                           <li key={b} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                              <CheckCircle2 size={16} className="text-emerald-500" /> {b}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm">
                     <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2"><ChefHat className="text-emerald-600" /> Preparation Tips</h4>
                     <ul className="space-y-3">
                        {selectedFood.prepTips.map((tip:string) => (
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
      )}
    </div>
  );
};

// Sub-components
const TopCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all cursor-pointer group text-center">
    <div className="bg-gray-50 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-50 transition-colors">
       {icon}
    </div>
    <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-tight">{desc}</p>
  </div>
);

const SeasonCard: React.FC<{ name: string, months: string, balance: string, desc: string, recs: string[], reduce: string[], image: string }> = ({ name, months, balance, desc, recs, reduce, image }) => (
  <div className="bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col">
    <div className="h-48 relative">
       <img src={image} className="w-full h-full object-cover" alt={name} />
       <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">
         {months}
       </div>
    </div>
    <div className="p-8">
       <h4 className="text-xl font-bold text-gray-900 mb-1">{name}</h4>
       <div className="flex items-center gap-1.5 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-4">
          <Thermometer size={14} /> Balances {balance}
       </div>
       <p className="text-xs text-gray-500 leading-relaxed mb-6">{desc}</p>
       
       <div className="space-y-4">
          <div>
            <p className="text-[10px] text-emerald-800 font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
               <CheckCircle2 size={12} /> Recommended Foods
            </p>
            <div className="flex flex-wrap gap-1.5">
               {recs.map(r => <span key={r} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-[9px] font-bold uppercase">{r}</span>)}
            </div>
          </div>
          <div>
            <p className="text-[10px] text-rose-800 font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
               <XCircle size={12} /> Foods to Reduce
            </p>
            <div className="flex flex-wrap gap-1.5">
               {reduce.map(r => <span key={r} className="bg-rose-50 text-rose-700 px-2 py-1 rounded-md text-[9px] font-bold uppercase">{r}</span>)}
            </div>
          </div>
       </div>

       <button className="w-full mt-8 border border-emerald-900 text-emerald-900 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors">
          <BookOpen size={14} /> View Seasonal Recipes
       </button>
    </div>
  </div>
);

const CombinationItem: React.FC<{ title: string, desc: string, type?: 'good' | 'bad' }> = ({ title, desc, type = 'good' }) => (
  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
     <div className={`mt-1 flex-shrink-0 ${type === 'good' ? 'text-emerald-500' : 'text-rose-500'}`}>
        <Plus size={16} />
     </div>
     <div>
        <h5 className="font-bold text-gray-900 text-sm">{title}</h5>
        <p className="text-[11px] text-gray-500 leading-snug">{desc}</p>
     </div>
  </div>
);

const CheckboxItem: React.FC<{ label: string }> = ({ label }) => (
  <label className="flex items-center gap-4 p-4 rounded-xl border border-gray-50 hover:bg-emerald-50/50 cursor-pointer group transition-all">
     <div className="w-6 h-6 rounded-full border-2 border-gray-200 group-hover:border-emerald-500 flex items-center justify-center transition-colors">
        <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-10 scale-0 group-hover:scale-100 transition-all" />
     </div>
     <span className="text-sm font-medium text-gray-700">{label}</span>
  </label>
);

const CommunityCard: React.FC<{ title: string, author: string, desc: string, stats: any, image: string }> = ({ title, author, desc, stats, image }) => (
  <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
     <div className="h-48 overflow-hidden">
        <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={title} />
     </div>
     <div className="p-8">
        <div className="flex items-center gap-2 mb-4">
           <img src={`https://i.pravatar.cc/100?u=${author}`} className="w-6 h-6 rounded-full" />
           <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">{author}</p>
              <p className="text-[8px] text-emerald-700 font-bold uppercase tracking-tighter">Family Recipe Contributor</p>
           </div>
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-3">{title}</h4>
        <p className="text-xs text-gray-500 leading-relaxed italic mb-6">"{desc}"</p>
        <div className="flex items-center gap-6 pt-6 border-t border-gray-50 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
           <span className="flex items-center gap-1.5"><Heart size={14} /> {stats.likes}</span>
           <span className="flex items-center gap-1.5"><MessageCircle size={14} /> {stats.comments}</span>
           <span className="flex items-center gap-1.5"><Share2 size={14} /> {stats.shares}</span>
        </div>
     </div>
  </div>
);

const PropertyCategory: React.FC<{ icon: React.ReactNode, title: string, count: string }> = ({ icon, title, count }) => (
  <div className="bg-white border border-gray-100 p-6 rounded-3xl text-center hover:shadow-lg transition-all cursor-pointer group">
     <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 group-hover:bg-emerald-50 transition-colors">
       {icon}
     </div>
     <h4 className="text-[11px] font-bold text-gray-900 mb-1 leading-tight">{title}</h4>
     <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter">{count}</p>
  </div>
);

const FeaturedFoodCard: React.FC<{ name: string, sanskrit: string, taste: string, potency: string, dosha: string, benefits: string[], image: string, onViewDetails: () => void }> = ({ name, sanskrit, taste, potency, dosha, benefits, image, onViewDetails }) => (
  <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden flex flex-col shadow-sm">
     <div className="h-48 overflow-hidden">
        <img src={image} className="w-full h-full object-cover" alt={name} />
     </div>
     <div className="p-8 flex-1 flex flex-col">
        <h4 className="text-xl font-bold text-gray-900 mb-1">{name}</h4>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-6">Sanskrit: {sanskrit}</p>
        
        <div className="space-y-4 mb-8">
           <div className="flex items-start gap-3">
              <div className="bg-amber-50 p-1.5 rounded-lg text-amber-600"><Thermometer size={14} /></div>
              <div>
                 <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">Taste (Rasa)</p>
                 <p className="text-xs text-gray-900 font-medium leading-tight">{taste}</p>
              </div>
           </div>
           <div className="flex items-start gap-3">
              <div className="bg-rose-50 p-1.5 rounded-lg text-rose-600"><Flame size={14} /></div>
              <div>
                 <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">Potency (Virya)</p>
                 <p className="text-xs text-gray-900 font-medium leading-tight">{potency}</p>
              </div>
           </div>
        </div>

        <div className="mt-auto">
           <button 
             onClick={onViewDetails}
             className="w-full border border-gray-100 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
           >
              <Info size={14} /> View Full Details
           </button>
        </div>
     </div>
  </div>
);

const HerbProperty: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{label}</p>
    <p className="text-[11px] font-bold text-gray-900">{value}</p>
  </div>
);

export default NutritionHub;

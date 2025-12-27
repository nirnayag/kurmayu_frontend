
import React, { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';
import { Recipe as RecipeModel, FeaturedFood as FeaturedFoodModel, FamilyRecipe as FamilyRecipeModel, Nutrition as NutritionModel } from '../models';
import {
  Utensils, Leaf, Calendar, Users, Search, ArrowRight, CheckCircle2,
  XCircle, Flame, Droplets, Wind, Info, ChefHat, Star, Clock, Plus,
  ArrowUpRight, Sparkles, ShoppingBag, Heart, BookOpen, MessageCircle,
  X, Sun, Thermometer, Database, Apple, Wheat, Coffee, Carrot, Filter,
  Share2, Camera, User, Download, FileText, Beaker, Zap
} from 'lucide-react';

const NutritionHub: React.FC = () => {
  const [mealPlanDosha, setMealPlanDosha] = useState('');
  const [mealPlanSeason, setMealPlanSeason] = useState('');
  const [mealPlanGoal, setMealPlanGoal] = useState('');
  const [recipes, setRecipes] = useState<any[]>([]);
  const [featuredFoods, setFeaturedFoods] = useState<any[]>([]);
  const [familyRecipes, setFamilyRecipes] = useState<any[]>([]);
  const [seasons, setSeasons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recipeData, foodData, familyData, seasonalData] = await Promise.all([
          apiService.getRecipes(),
          apiService.getFeaturedFoods(),
          apiService.getFamilyRecipes(),
          apiService.getSeasonalGuidance()
        ]);

        setRecipes(recipeData.map((r: RecipeModel) => ({
          id: r._id || r.name.toLowerCase().replace(/\s+/g, '-'),
          title: r.name,
          tags: [r.constitution],
          time: r.time || "302 mins",
          servings: r.servings || "4 servings",
          rating: r.rating || 4.9,
          reviews: r.reviews || 100,
          author: r.author || "Ayurvedic Chef",
          image: r.image || "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=600",
          ingredients: r.ingredients,
          instructions: r.instructions || [],
          nutritionalInsight: r.description || ""
        })));

        setFeaturedFoods(foodData.map((f: FeaturedFoodModel) => ({
          id: f._id || f.name.toLowerCase().replace(/\s+/g, '-'),
          name: f.name,
          sanskrit: f.sanskrit_name,
          taste: f.taste || "Tikta (Bitter)",
          potency: f.potency || "Ushna (Heating)",
          dosha: f.dosha || "Balances Kapha & Vata",
          benefits: f.benefits,
          image: f.image || "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400",
          description: f.benefits.join('. '),
          biochemistry: f.biochemistry || "Rich in bioactive compounds.",
          prepTips: f.prepTips && f.prepTips.length > 0 ? f.prepTips : ["Use in cooking", "Mix with warm water"]
        })));

        setFamilyRecipes(familyData.map((fr: FamilyRecipeModel) => ({
          title: fr.name,
          author: fr.origin,
          desc: fr.benefits.join('. '),
          stats: {
            likes: fr.likes || 45,
            comments: fr.comments || 12,
            shares: fr.shares || 8
          },
          image: fr.image || "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=600"
        })));

        if (seasonalData && seasonalData.length > 0) {
          setSeasons(seasonalData.map((s: NutritionModel) => ({
            name: s.name,
            months: s.months,
            balance: s.balance,
            desc: s.desc,
            recs: s.recs,
            reduce: s.reduce,
            image: s.image
          })));
        }

      } catch (error) {
        console.error('Failed to fetch nutrition data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-background-main min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden text-center max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
            <Sparkles size={14} className="fill-emerald-800" /> Personalized Nutrition Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-text-primary leading-tight mb-8">
            Nourish Your Body with <br />
            <span className="text-emerald-700 italic">Ancient Wisdom</span>
          </h1>
          <p className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover personalized dietary guidance based on your unique constitution, seasonal rhythms, and Ayurvedic principles. Transform your health through mindful eating and traditional nutrition wisdom.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#064E3B] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-900 transition-all shadow-lg">
              <Utensils size={18} /> Explore Meal Plans
            </button>
            <button className="bg-background-surface border border-border-light text-text-secondary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-background-secondary transition-all">
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
      <section className="py-24 bg-background-primary border-y border-border-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Seasonal Nutrition Guidance</h2>
            <p className="text-text-secondary">Align your diet with nature's rhythms. Each season brings unique nutritional needs based on Ayurvedic principles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasons.map((season, idx) => (
              <SeasonCard
                key={idx}
                name={season.name}
                months={season.months}
                balance={season.balance}
                desc={season.desc}
                recs={season.recs}
                reduce={season.reduce}
                image={season.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ayurvedic Recipes Grid */}
      <section className="py-24 bg-background-secondary border-y border-border-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-4">
              <Utensils size={14} /> Recipe Collection
            </div>
            <h2 className="text-4xl font-serif mb-4">Ayurvedic Recipes for Every Constitution</h2>
            <p className="text-text-secondary">Discover delicious, healing recipes tailored to your dosha type and wellness goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recipes.map(recipe => (
              <div key={recipe.id} className="bg-background-surface rounded-[40px] border border-border-light overflow-hidden hover:shadow-2xl transition-all group shadow-sm flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 flex gap-1">
                    {recipe.tags.map(tag => (
                      <span key={tag} className="bg-background-surface/90 backdrop-blur-md text-emerald-900 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                  <button className="absolute top-4 right-4 bg-background-surface/90 p-2 rounded-full text-rose-500 hover:bg-rose-50 transition-colors">
                    <Heart size={16} />
                  </button>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-[10px] text-text-disabled font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1"><Clock size={12} /> {recipe.time}</span>
                    <span className="flex items-center gap-1"><Users size={12} /> {recipe.servings}</span>
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-2 leading-tight">{recipe.title}</h4>
                  <p className="text-xs text-text-disabled mb-6 italic">A complete one-pot meal that balances all three doshas. Perfect for detoxification and easy...</p>

                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                        <Flame size={12} className="text-emerald-600" />
                      </div>
                      <span className="text-[10px] text-text-secondary font-bold uppercase tracking-widest">Kindles Agni</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star size={12} fill="currentColor" />
                      <span className="text-[10px] font-bold text-text-primary">{recipe.rating}</span>
                      <span className="text-[10px] text-text-disabled">({recipe.reviews})</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <button
                      onClick={() => {
                        (window as any).recipeDetailData = recipe;
                        window.location.hash = `#recipe/${recipe.id}`;
                      }}
                      className="flex-1 bg-[#064E3B] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-900 transition-all flex items-center justify-center gap-2"
                    >
                      <Utensils size={14} /> View Recipe
                    </button>
                    <button className="p-3 border border-border-light rounded-xl hover:bg-background-secondary transition-all">
                      <Share2 size={16} className="text-text-disabled" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Nutritional Properties */}
      <section className="py-24 bg-background-primary border-t border-border-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-4">
              <Database size={14} /> Ayurvedic Food Database
            </div>
            <h2 className="text-4xl font-serif mb-4">Explore Nutritional Properties</h2>
            <p className="text-text-secondary">Comprehensive database of Ayurvedic foods with detailed information about their properties, effects on doshas, and health benefits</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredFoods.map((food) => (
              <FeaturedFoodCard
                key={food.id}
                {...food}
                onViewDetails={() => {
                  (window as any).foodDetailData = food;
                  window.location.hash = `#food/${food.id}`;
                }}
              />
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

// Sub-components
const TopCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-background-surface border border-border-light p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all cursor-pointer group text-center">
    <div className="bg-background-secondary w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-50 transition-colors">
      {icon}
    </div>
    <h4 className="font-bold text-text-primary mb-2">{title}</h4>
    <p className="text-[10px] text-text-disabled font-bold uppercase tracking-widest leading-tight">{desc}</p>
  </div>
);

const SeasonCard: React.FC<{ name: string, months: string, balance: string, desc: string, recs: string[], reduce: string[], image: string }> = ({ name, months, balance, desc, recs, reduce, image }) => (
  <div className="bg-background-surface border border-border-light rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col">
    <div className="h-48 relative">
      <img src={image} className="w-full h-full object-cover" alt={name} />
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">
        {months}
      </div>
    </div>
    <div className="p-8">
      <h4 className="text-xl font-bold text-text-primary mb-1">{name}</h4>
      <div className="flex items-center gap-1.5 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-4">
        <Thermometer size={14} /> Balances {balance}
      </div>
      <p className="text-xs text-text-secondary leading-relaxed mb-6">{desc}</p>

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
  <div className="flex items-start gap-4 p-4 bg-background-surface rounded-2xl shadow-sm">
    <div className={`mt-1 flex-shrink-0 ${type === 'good' ? 'text-emerald-500' : 'text-rose-500'}`}>
      <Plus size={16} />
    </div>
    <div>
      <h5 className="font-bold text-text-primary text-sm">{title}</h5>
      <p className="text-[11px] text-text-secondary leading-snug">{desc}</p>
    </div>
  </div>
);

const CheckboxItem: React.FC<{ label: string }> = ({ label }) => (
  <label className="flex items-center gap-4 p-4 rounded-xl border border-background-secondary hover:bg-emerald-50/50 cursor-pointer group transition-all">
    <div className="w-6 h-6 rounded-full border-2 border-border-light group-hover:border-emerald-500 flex items-center justify-center transition-colors">
      <div className="w-3 h-3 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-10 scale-0 group-hover:scale-100 transition-all" />
    </div>
    <span className="text-sm font-medium text-text-secondary">{label}</span>
  </label>
);

const CommunityCard: React.FC<{ title: string, author: string, desc: string, stats: any, image: string }> = ({ title, author, desc, stats, image }) => (
  <div className="bg-background-surface rounded-[40px] border border-border-light overflow-hidden shadow-sm hover:shadow-xl transition-all group">
    <div className="h-48 overflow-hidden">
      <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={title} />
    </div>
    <div className="p-8">
      <div className="flex items-center gap-2 mb-4">
        <img src={`https://i.pravatar.cc/100?u=${author}`} className="w-6 h-6 rounded-full" />
        <div>
          <p className="text-[10px] text-text-disabled font-bold uppercase tracking-widest leading-none mb-1">{author}</p>
          <p className="text-[8px] text-emerald-700 font-bold uppercase tracking-tighter">Family Recipe Contributor</p>
        </div>
      </div>
      <h4 className="text-lg font-bold text-text-primary mb-3">{title}</h4>
      <p className="text-xs text-text-secondary leading-relaxed italic mb-6">"{desc}"</p>
      <div className="flex items-center gap-6 pt-6 border-t border-border-light text-[10px] text-text-disabled font-bold uppercase tracking-widest">
        <span className="flex items-center gap-1.5"><Heart size={14} /> {stats.likes}</span>
        <span className="flex items-center gap-1.5"><MessageCircle size={14} /> {stats.comments}</span>
        <span className="flex items-center gap-1.5"><Share2 size={14} /> {stats.shares}</span>
      </div>
    </div>
  </div>
);

const PropertyCategory: React.FC<{ icon: React.ReactNode, title: string, count: string }> = ({ icon, title, count }) => (
  <div className="bg-background-surface border border-border-light p-6 rounded-3xl text-center hover:shadow-lg transition-all cursor-pointer group">
    <div className="bg-background-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 group-hover:bg-emerald-50 transition-colors">
      {icon}
    </div>
    <h4 className="text-[11px] font-bold text-text-primary mb-1 leading-tight">{title}</h4>
    <p className="text-[9px] text-text-disabled font-bold uppercase tracking-tighter">{count}</p>
  </div>
);

const FeaturedFoodCard: React.FC<{ name: string, sanskrit: string, taste: string, potency: string, dosha: string, benefits: string[], image: string, onViewDetails: () => void }> = ({ name, sanskrit, taste, potency, dosha, benefits, image, onViewDetails }) => (
  <div className="bg-background-surface rounded-[40px] border border-border-light overflow-hidden flex flex-col shadow-sm">
    <div className="h-48 overflow-hidden">
      <img src={image} className="w-full h-full object-cover" alt={name} />
    </div>
    <div className="p-8 flex-1 flex flex-col">
      <h4 className="text-xl font-bold text-text-primary mb-1">{name}</h4>
      <p className="text-[10px] text-text-disabled font-bold uppercase tracking-widest mb-6">Sanskrit: {sanskrit}</p>

      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-3">
          <div className="bg-amber-50 p-1.5 rounded-lg text-amber-600"><Thermometer size={14} /></div>
          <div>
            <p className="text-[9px] text-text-disabled font-bold uppercase tracking-widest mb-1">Taste (Rasa)</p>
            <p className="text-xs text-text-primary font-medium leading-tight">{taste}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="bg-rose-50 p-1.5 rounded-lg text-rose-600"><Flame size={14} /></div>
          <div>
            <p className="text-[9px] text-text-disabled font-bold uppercase tracking-widest mb-1">Potency (Virya)</p>
            <p className="text-xs text-text-primary font-medium leading-tight">{potency}</p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <button
          onClick={onViewDetails}
          className="w-full border border-border-light py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-background-secondary transition-all flex items-center justify-center gap-2"
        >
          <Info size={14} /> View Full Details
        </button>
      </div>
    </div>
  </div>
);

const HerbProperty: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="bg-background-secondary p-3 rounded-xl border border-border-light text-center">
    <p className="text-[10px] text-text-disabled font-bold uppercase tracking-widest mb-1">{label}</p>
    <p className="text-[11px] font-bold text-text-primary">{value}</p>
  </div>
);

export default NutritionHub;

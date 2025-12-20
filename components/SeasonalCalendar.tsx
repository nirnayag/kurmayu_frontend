
import React, { useState, useEffect } from 'react';
import { Leaf, Sun, CloudRain, Wind, Snowflake, CheckCircle2, ArrowRight, Utensils, Zap, Sprout } from 'lucide-react';

interface SeasonData {
  id: string;
  name: string;
  sanskritName: string;
  months: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  image: string;
  diet: string[];
  lifestyle: string[];
  herbs: string[];
}

const seasons: SeasonData[] = [
  {
    id: 'spring',
    name: 'Spring',
    sanskritName: 'Vasanta',
    months: 'March - May',
    description: 'A time of renewal and detoxification. As the earth warms, the Kapha accumulated in winter begins to liquefy.',
    color: 'emerald',
    icon: <Sprout size={24} />,
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800',
    diet: ['Favor bitter, pungent, and astringent tastes', 'Eat light, warm, and easy-to-digest foods', 'Reduce heavy, oily, and sweet items', 'Incorporate honey, ginger, and black pepper'],
    lifestyle: ['Wake up earlier with the sunrise', 'Increase physical activity/vigorous exercise', 'Practice Dry Massage (Udvartana)', 'Use Neti pot for nasal cleansing'],
    herbs: ['Trikatu (Ginger, Black Pepper, Pippali)', 'Triphala for detoxification', 'Turmeric for immunity', 'Tulsi for respiratory health']
  },
  {
    id: 'summer',
    name: 'Summer',
    sanskritName: 'Grishma',
    months: 'June - August',
    description: 'The peak of heat where Pitta can easily become aggravated. Focus on staying cool, hydrated, and calm.',
    color: 'amber',
    icon: <Sun size={24} />,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    diet: ['Favor sweet, bitter, and astringent tastes', 'Stay hydrated with coconut water and mint lime', 'Eat cooling fruits like watermelon and grapes', 'Avoid spicy, salty, and sour foods'],
    lifestyle: ['Avoid strenuous exercise during peak heat', 'Wear light, breathable cotton clothing', 'Apply sandalwood paste or rose water', 'Walk in the moonlight or near water'],
    herbs: ['Shatavari for cooling', 'Amla (Indian Gooseberry)', 'Fennel seeds for digestion', 'Brahmi for mental clarity']
  },
  {
    id: 'monsoon',
    name: 'Monsoon',
    sanskritName: 'Varsha',
    months: 'August - September',
    description: 'High humidity and dampness can weaken digestion (Agni) and aggravate Vata. Keeping warm and dry is key.',
    color: 'blue',
    icon: <CloudRain size={24} />,
    image: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&q=80&w=800',
    diet: ['Favor sour and salty tastes to balance Vata', 'Drink warm, boiled water', 'Use ghee in cooking for Agni support', 'Avoid raw vegetables and cold salads'],
    lifestyle: ['Keep the body dry and warm', 'Avoid daytime napping', 'Fumigate the living space with neem or resins', 'Practice grounding yoga asanas'],
    herbs: ['Ginger for digestive fire', 'Ashwagandha for strength', 'Guduchi for immunity', 'Haritaki for gut health']
  },
  {
    id: 'autumn',
    name: 'Autumn',
    sanskritName: 'Sharad',
    months: 'October - November',
    description: 'A transition period where Pitta accumulated in monsoon can manifest. Focus on gentle purgation and cooling.',
    color: 'orange',
    icon: <Wind size={24} />,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
    diet: ['Favor sweet and bitter tastes', 'Eat rice, wheat, and mung beans', 'Include cooling dairy like milk and ghee', 'Reduce onion, garlic, and alcohol'],
    lifestyle: ['Moderate exercise is recommended', 'Avoid direct sun exposure', 'Practice meditation and moon-gazing', 'Get adequate, restful sleep'],
    herbs: ['Neem for blood purification', 'Manjistha for skin health', 'Aloe Vera juice', 'Licorice (Yashtimadhu)']
  },
  {
    id: 'winter',
    name: 'Winter',
    sanskritName: 'Hemanta',
    months: 'December - February',
    description: 'The body’s digestive fire is strongest. Vata is naturally high but can be balanced with nourishment.',
    color: 'indigo',
    icon: <Snowflake size={24} />,
    image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=800',
    diet: ['Favor sweet, sour, and salty tastes', 'Eat hot, nourishing, and oily foods', 'Consume root vegetables and grains', 'Warm milk with spices at bedtime'],
    lifestyle: ['Daily oil massage (Abhyanga) is essential', 'Stay active and warm', 'Sunbathe during the daytime', 'Practice heating pranayamas (Surya Bhedana)'],
    herbs: ['Chyawanprash for vitality', 'Ashwagandha for grounding', 'Bala for muscle strength', 'Turmeric and Cinnamon']
  }
];

const SeasonalCalendar: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState<SeasonData>(seasons[0]);

  useEffect(() => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) setActiveSeason(seasons[0]); // Spring
    else if (month >= 5 && month <= 7) setActiveSeason(seasons[1]); // Summer
    else if (month >= 8 && month <= 8) setActiveSeason(seasons[2]); // Monsoon
    else if (month >= 9 && month <= 10) setActiveSeason(seasons[3]); // Autumn
    else setActiveSeason(seasons[4]); // Winter
  }, []);

  return (
    <section className="py-24 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold mb-4 uppercase tracking-wider text-sm">
              <Leaf size={16} />
              Ritu Charya
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Ayurvedic Seasonal Wellness</h2>
            <p className="text-gray-600">
              Align your lifestyle with the rhythms of nature. Every season brings unique energy changes that require specific adjustments to your diet and routine.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
             {seasons.map((s) => (
               <button
                 key={s.id}
                 onClick={() => setActiveSeason(s)}
                 className={`p-3 rounded-xl transition-all flex flex-col items-center gap-1 group ${
                   activeSeason.id === s.id 
                   ? 'bg-[#064E3B] text-white shadow-md' 
                   : 'text-gray-400 hover:bg-gray-50'
                 }`}
               >
                 {s.icon}
                 <span className={`text-[10px] font-bold uppercase tracking-tighter ${activeSeason.id === s.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                   {s.name}
                 </span>
               </button>
             ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl shadow-emerald-900/5 flex flex-col lg:flex-row">
          <div className="lg:w-2/5 relative min-h-[400px]">
            <img 
              src={activeSeason.image} 
              alt={activeSeason.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold uppercase mb-4">
                Current Season Highlight
              </div>
              <h3 className="text-4xl font-serif mb-2">{activeSeason.name}</h3>
              <p className="text-emerald-100/80 font-serif italic text-xl">{activeSeason.sanskritName} Ritu</p>
              <p className="mt-4 flex items-center gap-2 text-sm font-medium">
                <Calendar size={16} /> {activeSeason.months}
              </p>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 md:p-12 lg:p-16 space-y-12">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-800 mb-4">Seasonal Essence</h4>
              <p className="text-xl text-gray-700 leading-relaxed font-serif">
                "{activeSeason.description}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <RecommendationGroup 
                icon={<Utensils className="text-orange-500" />} 
                title="Ahara (Diet)" 
                items={activeSeason.diet} 
              />
              <RecommendationGroup 
                icon={<Zap className="text-blue-500" />} 
                title="Vihara (Lifestyle)" 
                items={activeSeason.lifestyle} 
              />
              <RecommendationGroup 
                icon={<Leaf className="text-emerald-500" />} 
                title="Aushadhi (Herbs)" 
                items={activeSeason.herbs} 
              />
              <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 flex flex-col justify-center">
                <h5 className="font-bold text-emerald-900 mb-4">Need a Personalized Plan?</h5>
                <p className="text-sm text-emerald-800/70 mb-6">Your unique Prakriti (Constitution) determines exactly how you should navigate the seasons.</p>
                <button className="flex items-center gap-2 text-emerald-900 font-bold hover:gap-3 transition-all">
                  Consult Dr. Ravi Shinde <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RecommendationGroup: React.FC<{ icon: React.ReactNode, title: string, items: string[] }> = ({ icon, title, items }) => (
  <div>
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2.5 bg-gray-50 rounded-xl">
        {icon}
      </div>
      <h5 className="font-bold text-gray-900 uppercase tracking-wide text-sm">{title}</h5>
    </div>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
          <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Calendar = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default SeasonalCalendar;

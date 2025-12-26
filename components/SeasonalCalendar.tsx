
import React, { useState, useEffect } from 'react';
import { apiService } from '../services/apiService';
import { Nutrition as NutritionModel } from '../models';
import { Leaf, Sun, CloudRain, Wind, Snowflake, CheckCircle2, ArrowRight, Utensils, Zap, Sprout, Calendar as CalendarIcon } from 'lucide-react';

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


const SeasonalCalendar: React.FC = () => {
  const [seasons, setSeasons] = useState<SeasonData[]>([]);
  const [activeSeason, setActiveSeason] = useState<SeasonData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuidance = async () => {
      try {
        const seasonalData = await apiService.getSeasonalGuidance();

        if (seasonalData && seasonalData.length > 0) {
          const mappedSeasons: SeasonData[] = seasonalData.map((s: NutritionModel, idx: number) => {
            // Determine icon and color based on season name
            let icon = <Leaf size={24} />;
            let color = 'emerald';
            let image = s.image || 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800';

            const name = s.name.toLowerCase();
            if (name.includes('spring')) {
              icon = <Sprout size={24} />;
              color = 'emerald';
            } else if (name.includes('summer')) {
              icon = <Sun size={24} />;
              color = 'amber';
            } else if (name.includes('monsoon') || name.includes('rain')) {
              icon = <CloudRain size={24} />;
              color = 'blue';
            } else if (name.includes('autumn') || name.includes('fall')) {
              icon = <Wind size={24} />;
              color = 'orange';
            } else if (name.includes('winter')) {
              icon = <Snowflake size={24} />;
              color = 'indigo';
            }

            return {
              id: s._id || `season-${idx}`,
              name: s.name,
              sanskritName: s.name.split('(')[1]?.replace(')', '') || s.name,
              months: s.months,
              description: s.desc,
              color: color,
              icon: icon,
              image: image,
              diet: s.recs,
              lifestyle: s.reduce,
              herbs: [] // API doesn't seem to provide herbs yet
            };
          });

          setSeasons(mappedSeasons);

          const month = new Date().getMonth();
          let currentSeason: SeasonData | undefined;

          // Try to find current season based on month mapping
          if (month >= 2 && month <= 4) currentSeason = mappedSeasons.find(s => s.name.toLowerCase().includes('spring'));
          else if (month >= 5 && month <= 7) currentSeason = mappedSeasons.find(s => s.name.toLowerCase().includes('summer'));
          else if (month >= 8 && month <= 8) currentSeason = mappedSeasons.find(s => s.name.toLowerCase().includes('monsoon'));
          else if (month >= 9 && month <= 10) currentSeason = mappedSeasons.find(s => s.name.toLowerCase().includes('autumn'));
          else currentSeason = mappedSeasons.find(s => s.name.toLowerCase().includes('winter'));

          setActiveSeason(currentSeason || mappedSeasons[0]);
        }
      } catch (error) {
        console.error('Failed to fetch seasonal guidance:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuidance();
  }, []);

  // Helper function to get color classes based on season color
  const getColorClasses = (colorName: string) => {
    const colorMap: Record<string, { bg: string; border: string; text: string }> = {
      'emerald': { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600' },
      'amber': { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600' },
      'orange': { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600' },
      'blue': { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
      'cyan': { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-600' },
      'indigo': { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600' },
    };
    return colorMap[colorName] || colorMap['cyan'];
  };

  if (loading || !activeSeason) {
    return (
      <section className="py-24 bg-[#F5F3EF] flex items-center justify-center min-h-[400px]">
        <div className="text-emerald-800 font-serif text-2xl animate-pulse">Loading Seasonal Wisdom...</div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-emerald-700 font-semibold mb-4 uppercase tracking-wider text-sm">
            <CalendarIcon size={16} />
            Seasonal Wisdom
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">Ayurvedic Seasonal Wellness Calendar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Align your health practices with nature's rhythms for optimal well-being throughout the year
          </p>
        </div>

        {/* Season Selector */}
        <div
          className="grid gap-4 mb-12 mx-auto max-w-6xl"
          style={{
            gridTemplateColumns: `repeat(${seasons.length <= 5 ? seasons.length : Math.ceil(seasons.length / 2)}, minmax(0, 1fr))`
          }}
        >
          {seasons.map((s) => {
            const colors = getColorClasses(s.color);
            return (
              <button
                key={s.id}
                onClick={() => setActiveSeason(s)}
                className={`px-8 py-4 rounded-2xl transition-all flex items-center gap-3 font-medium border-2 ${activeSeason?.id === s.id
                    ? `${colors.bg} ${colors.border} text-gray-900 shadow-md`
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
              >
                {s.icon}
                <div className="text-left">
                  <div className="font-bold">{s.name.split('(')[0].trim()}</div>
                  <div className="text-xs opacity-70">{s.months}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Sidebar - Season Details */}
          <div className="lg:col-span-2">
            <div className={`${getColorClasses(activeSeason.color).bg} rounded-3xl p-8 border ${getColorClasses(activeSeason.color).border} sticky top-24`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-white rounded-xl ${getColorClasses(activeSeason.color).text}`}>
                  {activeSeason.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{activeSeason.name}</h3>
                  <p className="text-sm text-gray-600">Kapha Season</p>
                </div>
              </div>

              <div className={`flex items-center gap-2 text-gray-700 mb-6 pb-6 border-b ${getColorClasses(activeSeason.color).border}`}>
                <CalendarIcon size={16} />
                <span className="font-medium">{activeSeason.months}</span>
              </div>

              <div className="mb-8">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={activeSeason.image}
                    alt={activeSeason.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Recommendations */}
          <div className="lg:col-span-3 space-y-8">
            {/* Diet Recommendations */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="p-2.5 bg-emerald-50 rounded-xl">
                  <Utensils className="text-emerald-600" size={20} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Diet Recommendations</h4>
              </div>
              <ul className="space-y-3">
                {activeSeason.diet.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lifestyle Recommendations */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="p-2.5 bg-blue-50 rounded-xl">
                  <Zap className="text-blue-600" size={20} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Lifestyle Recommendations</h4>
              </div>
              <ul className="space-y-3">
                {activeSeason.lifestyle.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Herbs Recommendations */}
            {activeSeason.herbs.length > 0 && (
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="p-2.5 bg-emerald-50 rounded-xl">
                    <Sprout className="text-emerald-600" size={20} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Herbs Recommendations</h4>
                </div>
                <ul className="space-y-3">
                  {activeSeason.herbs.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Personalized Plan CTA */}
            <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
              <h5 className="font-bold text-emerald-900 mb-3 text-lg">Need a Personalized Plan?</h5>
              <p className="text-sm text-emerald-800/80 mb-6 leading-relaxed">
                Your unique Prakriti (Constitution) determines exactly how you should navigate the seasons.
              </p>
              <button className="flex items-center gap-2 text-emerald-900 font-bold hover:gap-3 transition-all">
                Consult Dr. Ravi Shinde <ArrowRight size={18} />
              </button>
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

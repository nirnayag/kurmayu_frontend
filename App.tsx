
import React, { useState, useEffect } from 'react';
import {
  Leaf,
  Search,
  ArrowRight,
  Calendar,
  Users,
  Star,
  CheckCircle2,
  BookOpen,
  UserRound,
  Stethoscope,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Menu,
  X,
  Play
} from 'lucide-react';
import { checkSymptoms } from './services/geminiService';
import { apiService } from './services/apiService';
import { MediaRecognition } from './models';
import { SymptomResult, Dosha } from './types';

// Components - Ensuring all use relative paths
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SymptomChecker from './components/SymptomChecker';
import DoshaSection from './components/DoshaSection';
import SeasonalCalendar from './components/SeasonalCalendar';
import SuccessStories from './components/SuccessStories';
import Expertise from './components/Expertise';
import TrustSection from './components/TrustSection';
import AilmentGuide from './components/AilmentGuide';
import DoshaAssessment from './components/DoshaAssessment';
import TreatmentCenter from './components/TreatmentCenter';
import NutritionHub from './components/NutritionHub';
import ChatBot from './components/ChatBot';
import ConsultationPage from './components/ConsultationPage';

type ViewState = 'home' | 'ailment-guide' | 'dosha-assessment' | 'treatment-center' | 'nutrition-hub' | 'consultation';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [selectedMedia, setSelectedMedia] = useState<MediaRecognition | null>(null);
  const [mediaRecognitions, setMediaRecognitions] = useState<MediaRecognition[]>([]);

  // Handle navigation from hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#ailment') {
        setView('ailment-guide');
        window.scrollTo(0, 0);
      } else if (hash === '#dosha') {
        setView('dosha-assessment');
        window.scrollTo(0, 0);
      } else if (hash === '#treatment') {
        setView('treatment-center');
        window.scrollTo(0, 0);
      } else if (hash === '#nutrition') {
        setView('nutrition-hub');
        window.scrollTo(0, 0);
      } else if (hash === '#book') {
        setView('consultation');
        window.scrollTo(0, 0);
      } else {
        setView('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const data = await apiService.getMediaRecognitions();
        setMediaRecognitions(data);
      } catch (error) {
        console.error('Error fetching media recognitions:', error);
      }
    };
    fetchMedia();
  }, []);

  const navigateToBook = () => {
    setView('consultation');
    window.location.hash = '#book';
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (view) {
      case 'ailment-guide':
        return <AilmentGuide />;
      case 'dosha-assessment':
        return <DoshaAssessment onStart={() => console.log('Assessment Start')} />;
      case 'treatment-center':
        return <TreatmentCenter />;
      case 'nutrition-hub':
        return <NutritionHub />;
      case 'consultation':
        return <ConsultationPage />;
      case 'home':
      default:
        return (
          <main>
            <Hero />

            {/* Entry Points Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Your Health Journey Starts Here</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Access powerful tools to understand your body and find natural healing solutions.
                </p>
              </div>

              <SymptomChecker />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                <FeatureCard
                  icon={<Search className="w-6 h-6 text-blue-500" />}
                  title="Dosha Assessment"
                  description="Discover your unique constitution in 10 minutes"
                  link="#dosha"
                  color="bg-blue-50"
                />
                <FeatureCard
                  icon={<Leaf className="w-6 h-6 text-emerald-500" />}
                  title="Treatment Finder"
                  description="Find Ayurvedic solutions for your health concerns"
                  link="#ailment"
                  color="bg-emerald-50"
                />
                <FeatureCard
                  icon={<BookOpen className="w-6 h-6 text-amber-500" />}
                  title="Nutrition Guide"
                  description="Personalized dietary recommendations"
                  link="#nutrition"
                  color="bg-amber-50"
                />
                <FeatureCard
                  icon={<Calendar className="w-6 h-6 text-rose-500" />}
                  title="Book Consultation"
                  description="Connect with Dr. Ravi Shinde"
                  link="#book"
                  color="bg-rose-50"
                />
              </div>
            </section>

            <DoshaSection />
            <SeasonalCalendar />
            <TrustSection />

            {/* Holistic Recommendations */}
            <section className="py-24 bg-[#F5F3EF]">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                  <div className="lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=800" alt="Healing Herbs" className="w-full h-auto object-cover" />
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-12">
                    <div>
                      <h2 className="text-4xl font-serif mb-6">Experience the Healing Power of Ayurveda</h2>
                      <p className="text-gray-600 leading-relaxed mb-8">
                        Our approach combines ancient wisdom with modern precision, ensuring you receive
                        a plan that honors your body's unique intelligence.
                      </p>
                    </div>

                    <div className="space-y-8">
                      <RecommendationItem
                        title="Lifestyle Recommendations"
                        items={[
                          "Practice oil massage (Abhyanga) with sesame oil before bathing",
                          "Maintain regular sleep schedule, sleep early and wake with sunrise",
                          "Stay warm and avoid cold, windy environments",
                          "Practice gentle yoga and pranayama for circulation"
                        ]}
                      />
                      <RecommendationItem
                        title="Herbs Recommendations"
                        items={[
                          "Ashwagandha for strength and immunity",
                          "Chyawanprash for overall vitality",
                          "Triphala for digestion and detoxification",
                          "Brahmi for mental clarity"
                        ]}
                      />
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <button
                        onClick={navigateToBook}
                        className="bg-[#064E3B] text-white px-8 py-3 rounded-full hover:bg-emerald-800 transition-colors flex items-center gap-2"
                      >
                        Book Consultation <Calendar size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <SuccessStories />
            <Expertise />

            {/* Media Recognition */}
            <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold mb-8">
                <BookOpen size={20} />
                <h3 className="uppercase tracking-widest text-sm">Media Recognition</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mediaRecognitions.map((media, index) => (
                  <MediaCard
                    key={media._id || index}
                    source={media.source}
                    title={media.title}
                    date={media.publishedDate}
                    image={media.thumbnail}
                    onView={() => setSelectedMedia(media)}
                  />
                ))}
              </div>
            </section>

            {/* Pre-footer CTA */}
            <section className="py-24 bg-[#064E3B] text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Leaf size={300} strokeWidth={0.5} />
              </div>
              <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Begin Your Natural Healing Journey Today</h2>
                <p className="text-emerald-100/80 text-lg mb-12 leading-relaxed">
                  Experience the transformative power of authentic Ayurveda with personalized care from Dr. Ravi Shinde.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <button
                    onClick={navigateToBook}
                    className="bg-white text-[#064E3B] px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2"
                  >
                    Book Consultation <Calendar size={20} />
                  </button>
                  <a href="#dosha" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    Take Dosha Assessment <Leaf size={20} />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <SmallCTA
                    title="Ailment Guide"
                    desc="Browse health condition database"
                    image="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=200"
                    link="#ailment"
                  />
                  <SmallCTA
                    title="Treatment Center"
                    desc="Explore Panchakarma therapies"
                    image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=200"
                    link="#treatment"
                  />
                  <SmallCTA
                    title="Nutrition Hub"
                    desc="Dietary guidance and recipes"
                    image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=200"
                    link="#nutrition"
                  />
                </div>
              </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-white border-b border-gray-100">
              <div className="max-w-4xl mx-auto px-4">
                <div className="bg-[#FDFCF7] border border-emerald-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-serif mb-2">Stay Connected with Wellness Updates</h3>
                    <p className="text-gray-500">Subscribe to receive seasonal wellness tips, Ayurvedic recipes, and exclusive health insights.</p>
                  </div>
                  <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-64"
                    />
                    <button className="bg-[#064E3B] text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-800 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Media Detail Modal */}
            {selectedMedia && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
                <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[40px] shadow-2xl relative">
                  <button onClick={() => setSelectedMedia(null)} className="absolute top-8 right-8 p-3 hover:bg-gray-100 rounded-2xl transition-colors z-10"><X size={24} /></button>
                  <div className="p-8 md:p-12">
                    <div className="rounded-3xl overflow-hidden h-64 mb-8">
                      <img src={selectedMedia.thumbnail} className="w-full h-full object-cover" alt={selectedMedia.title} />
                    </div>
                    <div className="flex items-center gap-2 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-4">
                      <BookOpen size={14} /> Media Recognition: {selectedMedia.source}
                    </div>
                    <h2 className="text-3xl font-serif text-gray-900 mb-4">{selectedMedia.title}</h2>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">{selectedMedia.publishedDate}</p>
                    <p className="text-gray-600 leading-relaxed mb-8">{selectedMedia.description}</p>
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-center justify-between">
                      <p className="text-emerald-900 font-bold text-sm italic">"A testament to the efficacy of traditional wisdom."</p>
                      <Leaf className="text-emerald-300" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={setView} currentView={view} />
      {renderContent()}
      <Footer />
      {/* AI ChatBot is now a global floating component */}
      <ChatBot />
    </div>
  );
};

// Sub-components
const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string, link: string, color: string }> = ({ icon, title, description, link, color }) => (
  <a href={link} className={`p-8 rounded-2xl transition-all hover:shadow-lg ${color} border border-transparent hover:border-white group block`}>
    <div className="mb-6 bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
    <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
      Get Started <ArrowRight size={16} />
    </div>
  </a>
);

const RecommendationItem: React.FC<{ title: string, items: string[] }> = ({ title, items }) => (
  <div>
    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
      {title}
    </h4>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
          <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const MediaCard: React.FC<{ source: string, title: string, date: string, image: string, onView: () => void }> = ({ source, title, date, image, onView }) => (
  <div className="group cursor-pointer" onClick={onView}>
    <div className="rounded-2xl overflow-hidden mb-6 aspect-video">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
      <BookOpen size={14} />
      <span>{source}</span>
    </div>
    <h4 className="text-lg font-bold mb-2 group-hover:text-emerald-700 transition-colors leading-snug">{title}</h4>
    <p className="text-gray-400 text-sm">{date}</p>
  </div>
);

const SmallCTA: React.FC<{ title: string, desc: string, image: string, link?: string }> = ({ title, desc, image, link }) => (
  <a href={link || "#"} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-left flex items-start gap-4 hover:bg-white/10 transition-colors cursor-pointer group block">
    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div>
      <h4 className="font-bold mb-1 group-hover:text-emerald-300">{title}</h4>
      <p className="text-emerald-100/60 text-xs mb-2">{desc}</p>
      <div className="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
        Explore Now <ArrowRight size={12} />
      </div>
    </div>
  </a>
);

export default App;

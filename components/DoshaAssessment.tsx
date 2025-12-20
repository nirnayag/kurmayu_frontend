
import React from 'react';
import { 
  Sparkles, 
  UserRound, 
  Heart, 
  Calendar, 
  Activity, 
  Info, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface DoshaAssessmentProps {
  onStart?: () => void;
}

const DoshaAssessment: React.FC<DoshaAssessmentProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-[#F1F8F1] py-12 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-[40px] shadow-2xl shadow-emerald-900/10 p-8 md:p-16 relative overflow-hidden">
        {/* Header Section */}
        <div className="text-center relative z-10 mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DFF3E9] text-[#064E3B] rounded-full mb-6">
            <Sparkles size={32} />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-[#111827]">Discover Your Dosha</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Take our comprehensive assessment to understand your unique Ayurvedic constitution and receive personalized wellness recommendations
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <BenefitCard 
            icon={<UserRound size={24} />} 
            title="Discover Your Constitution" 
            description="Understand your unique mind-body type through ancient Ayurvedic wisdom"
            iconBg="bg-[#E6F6EF]"
            iconColor="text-[#10B981]"
          />
          <BenefitCard 
            icon={<Heart size={24} />} 
            title="Personalized Wellness Plan" 
            description="Receive customized dietary and lifestyle recommendations"
            iconBg="bg-[#ECFDF5]"
            iconColor="text-[#059669]"
          />
          <BenefitCard 
            icon={<Calendar size={24} />} 
            title="Seasonal Guidance" 
            description="Learn how to adapt your routine with changing seasons"
            iconBg="bg-[#F0FDF4]"
            iconColor="text-[#15803D]"
          />
          <BenefitCard 
            icon={<Activity size={24} />} 
            title="Balance Your Doshas" 
            description="Get insights on maintaining optimal health and preventing imbalances"
            iconBg="bg-[#F7FEE7]"
            iconColor="text-[#4D7C0F]"
          />
        </div>

        {/* What to Expect Box */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 mb-12 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <Info size={24} className="text-[#059669]" />
            <h2 className="text-2xl font-bold text-[#111827]">What to Expect</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <ExpectationItem text={<><span className="font-bold">30 Questions:</span> Comprehensive assessment covering physical, mental, and emotional characteristics</>} />
            <ExpectationItem text={<><span className="font-bold">10-15 Minutes:</span> Take your time to answer thoughtfully for accurate results</>} />
            <ExpectationItem text={<><span className="font-bold">Instant Results:</span> Receive your dosha profile immediately upon completion</>} />
            <ExpectationItem text={<><span className="font-bold">Personalized Recommendations:</span> Get tailored diet, lifestyle, and wellness guidance</>} />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center relative z-10">
          <button 
            onClick={onStart}
            className="bg-[#064E3B] text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 mx-auto hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20 group"
          >
            Begin Assessment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-6 text-gray-400 text-sm">
            Your responses are private and used only to generate your personalized results
          </p>
        </div>
      </div>
    </div>
  );
};

const BenefitCard: React.FC<{ icon: React.ReactNode, title: string, description: string, iconBg: string, iconColor: string }> = ({ icon, title, description, iconBg, iconColor }) => (
  <div className="flex items-start gap-6 p-6 rounded-2xl border border-gray-50 hover:border-emerald-100 transition-colors bg-white">
    <div className={`${iconBg} ${iconColor} p-4 rounded-xl flex-shrink-0`}>
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-[#111827] mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const ExpectationItem: React.FC<{ text: React.ReactNode }> = ({ text }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 size={18} className="text-[#10B981] mt-0.5 flex-shrink-0" />
    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
  </div>
);

export default DoshaAssessment;

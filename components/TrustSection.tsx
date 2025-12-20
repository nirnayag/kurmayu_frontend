
import React from 'react';
import { ShieldCheck, Lock, Award, Globe, Heart } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
          <TrustBadge icon={<ShieldCheck size={24} />} text="MCIM Registered" />
          <TrustBadge icon={<Lock size={24} />} text="Secure Consultations" />
          <TrustBadge icon={<Award size={24} />} text="25+ Yrs Excellence" />
          <TrustBadge icon={<Globe size={24} />} text="Global Patients" />
          <TrustBadge icon={<Heart size={24} />} text="100% Natural" />
        </div>
      </div>
    </section>
  );
};

const TrustBadge: React.FC<{ icon: React.ReactNode, text: string }> = ({ icon, text }) => (
  <div className="flex flex-col items-center gap-3 text-center group">
    <div className="text-emerald-700 group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900">{text}</span>
  </div>
);

export default TrustSection;

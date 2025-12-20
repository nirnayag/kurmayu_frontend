
import React from 'react';
import { Award, BookOpen, Users, Calendar, CheckCircle2, Leaf, HeartPulse, GraduationCap, ShieldCheck } from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <section className="py-24 bg-[#FDFCF7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-emerald-700 font-semibold mb-4 uppercase tracking-wider text-sm">
            <Award size={16} />
            Trust & Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Expertise You Can Trust</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dr. Ravi Shinde brings over 25 years of dedicated practice, combining traditional Ayurvedic wisdom with modern medical understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
              <img src="https://i.pravatar.cc/400?img=60" alt="Dr. Ravi Shinde" className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-emerald-50" />
              <h3 className="text-2xl font-bold mb-1">Dr. Ravi Shinde</h3>
              <p className="text-emerald-700 font-bold text-sm mb-4 uppercase tracking-widest">BAMS, MD (Ayurveda)</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Dr. Ravi Shinde is a renowned Ayurvedic physician with over 25 years of clinical experience. He specializes in Panchakarma therapies and integrative wellness.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Tag>Panchakarma Expert</Tag>
                <Tag>Chronic Disease Specialist</Tag>
                <Tag>Herbal Medicine</Tag>
                <Tag>Holistic Wellness</Tag>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <DegreeCard icon={<GraduationCap />} title="BAMS Degree" sub="Govt. Ayurvedic College, Pune" year="1998" />
              <DegreeCard icon={<Award />} title="MD (Ayurveda)" sub="Tilak Ayurved Mahavidyalaya, Pune" year="2002" />
              <DegreeCard icon={<ShieldCheck />} title="Panchakarma" sub="National Institute of Ayurveda" year="2005" />
              <DegreeCard icon={<BookOpen />} title="Research" sub="15+ International Publications" year="Ongoing" />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <StatCard icon={<Calendar className="text-emerald-600" />} label="Years Experience" value="25+" desc="Dedicated practice in traditional Ayurveda" />
              <StatCard icon={<Users className="text-blue-600" />} label="Patients Treated" value="10,000+" desc="Successful healing journeys completed" />
              <StatCard icon={<HeartPulse className="text-rose-600" />} label="Success Rate" value="95%" desc="Patient satisfaction and positive outcomes" />
              <StatCard icon={<BookOpen className="text-amber-600" />} label="Research Papers" value="15+" desc="Published in peer-reviewed journals" />
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100">
              <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
                <ShieldCheck className="text-emerald-600" />
                Professional Certifications
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <CertItem label="Ayurvedic Practitioners Association of India" status="Professional Membership" />
                <CertItem label="Maharashtra Council of Indian Medicine" status="Registered Practitioner" />
                <CertItem label="National Ayurvedic Medical Association" status="Certified Member" />
                <CertItem label="International Panchakarma Association" status="Specialist Certification" />
              </div>
            </div>

            <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100">
              <div className="flex items-center gap-4 text-emerald-900">
                <ShieldCheck size={24} className="flex-shrink-0" />
                <div>
                  <h5 className="font-bold">Your Safety & Privacy Guaranteed</h5>
                  <p className="text-sm opacity-80 mt-1">
                    All consultations are conducted with strict adherence to medical ethics and patient confidentiality. Dr. Shinde is registered with the Maharashtra Council of Indian Medicine.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 mt-6 flex-wrap">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800">
                  <CheckCircle2 size={14} /> HIPAA Compliant
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800">
                  <CheckCircle2 size={14} /> Certified Practitioner
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800">
                  <CheckCircle2 size={14} /> Ethical Practice
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-100">
    {children}
  </span>
);

const StatCard: React.FC<{ icon: React.ReactNode, label: string, value: string, desc: string }> = ({ icon, label, value, desc }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center group hover:shadow-lg transition-all">
    <div className="mb-4 bg-gray-50 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="text-3xl font-serif mb-1">{value}</div>
    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{label}</div>
    <p className="text-[10px] text-gray-500 font-medium">{desc}</p>
  </div>
);

const DegreeCard: React.FC<{ icon: React.ReactNode, title: string, sub: string, year: string }> = ({ icon, title, sub, year }) => (
  <div className="p-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl">
    <div className="text-emerald-700 mb-2">{icon}</div>
    <h5 className="font-bold text-xs">{title}</h5>
    <p className="text-[10px] text-gray-500 mb-1 leading-tight">{sub}</p>
    <p className="text-[10px] font-bold text-emerald-800">{year}</p>
  </div>
);

const CertItem: React.FC<{ label: string, status: string }> = ({ label, status }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
    <div>
      <h6 className="font-bold text-sm leading-tight text-gray-900">{label}</h6>
      <p className="text-xs text-gray-500 font-medium">{status}</p>
    </div>
  </div>
);

export default Expertise;

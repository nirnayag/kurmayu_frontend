
import React, { useState } from 'react';
import {
  Video,
  MapPin,
  Clock,
  Phone,
  Calendar,
  Star,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Monitor,
  Activity,
  Languages,
  ArrowRight,
  Stethoscope,
  Users,
  Heart
} from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleBookVideo = async () => {
    // Check for API key selection for premium video features as per instructions
    if (typeof (window as any).aistudio !== 'undefined') {
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await (window as any).aistudio.openSelectKey();
      }
      // Proceeding assuming success as per race condition instructions
    }
    alert("Booking Video Consultation... You will now be redirected to the payment gateway.");
  };

  const consultationTypes = [
    {
      title: "Video Consultation",
      price: "1,500",
      duration: "30-45 minutes",
      popular: true,
      icon: <Video className="text-emerald-600" size={24} />,
      includes: ["Real-time interaction with Dr. Shinde", "Screen sharing for reports review", "Recorded session for future reference", "Digital prescription delivery"],
      availability: "Available 7 days a week",
      onBook: handleBookVideo
    },
    {
      title: "In-Clinic Consultation",
      price: "2,000",
      duration: "45-60 minutes",
      icon: <MapPin className="text-emerald-600" size={24} />,
      includes: ["Complete physical examination", "Pulse diagnosis (Nadi Pariksha)", "Tongue and eye examination", "Personalized treatment plan"],
      availability: "Mon-Sat, 9 AM - 6 PM"
    },
    {
      title: "Follow-up Consultation",
      price: "800",
      duration: "15-20 minutes",
      icon: <Activity className="text-emerald-600" size={24} />,
      includes: ["Progress assessment", "Treatment plan adjustments", "Medication review", "Lifestyle guidance updates"],
      availability: "Available for existing patients"
    },
    {
      title: "Emergency Consultation",
      price: "2,500",
      duration: "20-30 minutes",
      icon: <Phone className="text-emerald-600" size={24} />,
      includes: ["Same-day availability", "Priority scheduling", "Immediate treatment recommendations", "24/7 support access"],
      availability: "Available 24/7"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      age: "42 years",
      loc: "Mumbai, Maharashtra",
      condition: "Chronic Digestive Issues",
      text: "After struggling with digestive problems for over 5 years and trying various treatments, I finally found relief through Dr. Shinde's Ayurvedic approach. His personalized treatment plan, including dietary modifications and herbal medicines, has completely transformed my health.",
      results: "80% symptom reduction",
      duration: "6 months",
      image: "https://i.pravatar.cc/100?img=32"
    },
    {
      name: "Rajesh Patel",
      age: "55 years",
      loc: "Pune, Maharashtra",
      condition: "Diabetes & Hypertension",
      text: "I was managing diabetes and high blood pressure with multiple medications when a friend recommended Dr. Shinde. His holistic approach combining Panchakarma therapy, lifestyle changes, and herbal supplements has been life-changing.",
      results: "Medication reduced by 50%",
      duration: "8 months",
      image: "https://i.pravatar.cc/100?img=12"
    },
    {
      name: "Anita Deshmukh",
      age: "38 years",
      loc: "Nagpur, Maharashtra",
      condition: "PCOS & Hormonal Imbalance",
      text: "Dealing with PCOS for years left me frustrated and hopeless. Dr. Shinde's comprehensive treatment approach addressed not just the symptoms but the root cause. His personalized diet plan, herbal medicines, and lifestyle guidance have regulated my cycles and improved my overall health.",
      results: "Regular cycles restored",
      duration: "10 months",
      image: "https://i.pravatar.cc/100?img=44"
    },
    {
      name: "Vikram Singh",
      age: "48 years",
      loc: "Nashik, Maharashtra",
      condition: "Chronic Joint Pain & Arthritis",
      text: "Years of joint pain and stiffness made daily activities challenging. Dr. Shinde's Ayurvedic treatment, including specialized oils, herbal medicines, and therapeutic procedures, has given me my mobility back. The pain has reduced dramatically, and I can now enjoy activities I had given up on.",
      results: "70% pain reduction",
      duration: "5 months",
      image: "https://i.pravatar.cc/100?img=59"
    }
  ];

  return (
    <div className="bg-background-main min-h-screen">
      {/* Header Banner */}
      <section className="pt-20 pb-12 text-center bg-background-main border-b border-border-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-widest mb-6">
            <Stethoscope size={16} /> Expert Consultation Portal
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-text-primary mb-6 tracking-tight">Book Your Ayurvedic Consultation</h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            Connect with Dr. Ravi Shinde for personalized Ayurvedic guidance and holistic healing solutions.
          </p>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="bg-background-surface rounded-[40px] border border-border-light shadow-sm overflow-hidden p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/4">
              <div className="relative group">
                <img
                  src="https://i.pravatar.cc/400?img=60"
                  alt="Dr. Ravi Shinde"
                  className="w-full aspect-square object-cover rounded-3xl border-4 border-emerald-50"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background-surface px-4 py-2 rounded-full shadow-lg border border-emerald-50 flex items-center gap-1">
                  <Star size={16} fill="currentColor" className="text-amber-400" />
                  <span className="font-bold text-sm">4.9</span>
                  <span className="text-text-disabled text-xs">(847 reviews)</span>
                </div>
              </div>
            </div>
            <div className="lg:w-3/4 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-text-primary">Dr. Ravi Shinde</h2>
                <p className="text-emerald-700 font-bold uppercase tracking-widest text-sm mt-1">BAMS, MD (Ayurveda), PhD (Panchakarma)</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center gap-2 text-text-secondary text-xs font-bold uppercase tracking-widest">
                    <Award size={16} className="text-emerald-600" /> 25+ Years Experience
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary text-xs font-bold uppercase tracking-widest">
                    <Users size={16} className="text-emerald-600" /> 10,000+ Patients Treated
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-text-primary uppercase tracking-widest text-xs">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {["Panchakarma Therapy", "Chronic Disease Management", "Digestive Disorders", "Stress & Lifestyle Disorders", "Women's Health", "Metabolic Conditions"].map(s => (
                    <span key={s} className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-100">{s}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-text-primary uppercase tracking-widest text-xs">Languages</h3>
                <div className="flex gap-2">
                  {["English", "Hindi", "Marathi", "Sanskrit"].map(l => (
                    <span key={l} className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-[10px] font-bold uppercase tracking-wider">{l}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-text-primary uppercase tracking-widest text-xs">About Dr. Shinde</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Dr. Ravi Shinde is a renowned Ayurvedic physician with over 25 years of clinical experience in traditional healing practices. He specializes in Panchakarma therapy and chronic disease management, combining ancient Ayurvedic wisdom with modern diagnostic approaches.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Dr. Shinde has successfully treated over 10,000 patients, helping them achieve holistic wellness through personalized treatment plans. His approach focuses on identifying root causes rather than just treating symptoms, ensuring long-term health benefits.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  He has published numerous research papers on Ayurvedic treatments and regularly conducts workshops and seminars to educate both practitioners and patients about the benefits of traditional medicine.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-text-primary uppercase tracking-widest text-xs">Certifications & Memberships</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                  {["Board Certified Ayurvedic Physician", "National Ayurveda Medical Association Member", "International Panchakarma Specialist", "Registered with Central Council of Indian Medicine"].map(c => (
                    <li key={c} className="flex items-center gap-2 text-sm text-text-secondary font-medium">
                      <CheckCircle2 size={16} className="text-emerald-500" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types Grid */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-serif text-text-primary">Choose Consultation Type</h2>
          <p className="text-text-secondary mt-2">Select the consultation format that best suits your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {consultationTypes.map((type, i) => (
            <div key={i} className="bg-background-surface border border-border-light rounded-[32px] p-8 shadow-sm flex flex-col hover:shadow-xl transition-all relative">
              {type.popular && (
                <div className="absolute -top-3 right-8 bg-[#064E3B] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  {type.icon}
                </div>
                <div className="text-right">
                  <p className="text-text-disabled text-[10px] font-bold uppercase tracking-widest mb-1">Starting from</p>
                  <p className="text-2xl font-serif text-text-primary">₹{type.price}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">{type.title}</h3>
              <div className="flex items-center gap-4 text-xs font-bold text-text-disabled uppercase tracking-widest mb-6">
                <span className="flex items-center gap-1"><Clock size={14} /> {type.duration}</span>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                <p className="text-[10px] text-text-disabled font-bold uppercase tracking-widest">Includes:</p>
                {type.includes.map((inc, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-text-secondary font-medium">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    {inc}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border-light flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[10px] text-text-disabled font-bold uppercase tracking-widest">
                  <Calendar size={14} /> {type.availability}
                </div>
                <button
                  onClick={type.onBook || (() => alert("Feature coming soon!"))}
                  className="w-full bg-[#064E3B] text-white py-4 rounded-xl font-bold hover:bg-emerald-900 transition-colors"
                >
                  Book {type.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-24 bg-background-primary border-y border-border-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-text-primary">Patient Success Stories</h2>
            <p className="text-text-secondary mt-4">Real transformations from real people</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background-primary p-8 rounded-[40px] border border-border-light flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-2xl object-cover" />
                  <div>
                    <h4 className="font-bold text-text-primary">{t.name}</h4>
                    <p className="text-xs text-text-secondary">{t.age} • {t.loc}</p>
                    <div className="flex gap-0.5 text-amber-400 mt-1">
                      {[...Array(5)].map((_, j) => <Star key={j} size={10} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <p className="text-emerald-700 font-bold text-[10px] uppercase tracking-widest mb-4">{t.condition}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-1 italic">
                  "{t.text}"
                </p>
                <div className="pt-6 border-t border-border-light flex flex-wrap justify-between items-center gap-4">
                  <div className="flex items-center gap-4 text-[10px] text-text-disabled font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Clock size={14} /> {t.duration}</span>
                    <span className="flex items-center gap-1 text-emerald-600"><Activity size={14} /> {t.results}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full font-bold text-sm border border-emerald-100">
              <CheckCircle2 size={18} /> 10,000+ Successful Treatments
              <span className="text-emerald-500/50 text-xs ml-2">Join thousands of satisfied patients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-background-main">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-700">
              <ShieldCheck size={32} />
            </div>
            <h4 className="font-bold">HIPAA Compliant</h4>
            <p className="text-xs text-text-secondary font-medium leading-relaxed">Your health information is encrypted and secure</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-blue-700">
              <Monitor size={32} />
            </div>
            <h4 className="font-bold">HD Video Quality</h4>
            <p className="text-xs text-text-secondary font-medium leading-relaxed">Crystal clear video consultations with secure platform</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-700">
              <Clock size={32} />
            </div>
            <h4 className="font-bold">Flexible Scheduling</h4>
            <p className="text-xs text-text-secondary font-medium leading-relaxed">Book appointments that fit your schedule</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background-primary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-text-primary mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How do I prepare for my consultation?", a: "Keep your medical reports handy, prepare a list of current medications, and note down your symptoms and concerns. For video consultations, ensure you have a stable internet connection and a quiet environment." },
              { q: "What if I need to reschedule?", a: "You can reschedule your appointment up to 24 hours before the scheduled time without any charges. Contact our support team or use the reschedule option in your confirmation email." },
              { q: "Will I receive a prescription?", a: "Yes, Dr. Shinde will provide a detailed digital prescription including herbal medicines, dietary recommendations, and lifestyle modifications. You'll receive it via email within 24 hours of your consultation." },
              { q: "Is follow-up support available?", a: "Absolutely! You can book follow-up consultations at a discounted rate. Dr. Shinde also provides email support for minor queries between consultations." }
            ].map((faq, i) => (
              <div key={i} className="bg-background-surface border border-border-light rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center group"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-50 p-2 rounded-lg text-emerald-700">
                      <Heart size={16} />
                    </div>
                    <span className="font-bold text-text-primary text-sm">{faq.q}</span>
                  </div>
                  <ChevronDown size={20} className={`text-text-disabled transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0 text-sm text-text-secondary leading-relaxed pl-[60px]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;

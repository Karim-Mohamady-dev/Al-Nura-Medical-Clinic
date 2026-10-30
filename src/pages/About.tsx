import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Award, Heart, Users, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const About: React.FC = () => {
  const { language } = useLanguage();

  const values = [
    {
      titleEn: 'Clinical Integrity',
      titleAr: 'النزاهة السريرية',
      descEn: 'Strict adherence to evidence-based medical science without unnecessary interventions.',
      descAr: 'الالتزام التام بالطب القائم على البراهين العلمية دون إجراءات أو تدخلات غير ضرورية.',
    },
    {
      titleEn: 'Patient Dignity & Discretion',
      titleAr: 'الكرامة والخصوصية المطلقة',
      descEn: 'A tranquil environment safeguarding patient confidentiality and personalized peace of mind.',
      descAr: 'بيئة هادئة تصون خصوصية المريض وسرية بياناته الطبية وراحته النفسية.',
    },
    {
      titleEn: 'Zero-Queue Respect for Time',
      titleAr: 'احترام وقت المريض',
      descEn: 'Prompt, scheduled entry with dedicated one-on-one attention from senior consultants.',
      descAr: 'مواعيد دقيقة دون تأخير مع تخصيص وقت كافٍ للاستماع للمريض ومناقشة حالته.',
    },
    {
      titleEn: 'Technological Excellence',
      titleAr: 'الريادة التقنية',
      descEn: 'Investing in cutting-edge 3D scanners, CAP laboratory automation, and painless laser tools.',
      descAr: 'الاستثمار في أحدث أجهزة المسح ثلاثي الأبعاد، والمختبرات الآلية، وتقنيات الليزر المريحة.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-16">
      
      {/* Hero Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
            {language === 'ar' ? 'عن عيادة النورة الطبية' : 'About Al Nura Medical Clinic'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#123047] tracking-tight leading-tight">
            {language === 'ar'
              ? 'صرح طبي تخصصي يعيد تعريف الرعاية الصحية الراقية في دولة الإمارات'
              : 'Redefining Specialized Healthcare Hospitality in the UAE'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {language === 'ar'
              ? 'تأسست عيادة النورة الطبية برؤية واضحة تهدف لتقديم رعاية صحية سريرية ذات مستوى عالمي في بيئة استشفائية راقية تجمع بين خبرة الاستشاريين الحاصلين على أعلى البوردات الغربية وأحدث التجهيزات التشخيصية المتطورة في دبي وأبوظبي.'
              : 'Al Nura Medical Clinic was established to elevate outpatient healthcare in the UAE by fusing rigorous Western-certified clinical mastery with serene hospitality, seamless WhatsApp appointment booking, and zero-wait consultation suites.'}
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#123047]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#159A91]" />
              <span>DHA &amp; DOH Licensed Facility</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#159A91]" />
              <span>Western Board-Certified Faculty</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img
              src="/images/hero_clinic_reception_1793322345096.jpg"
              alt="Al Nura Flagship Healthcare Atrium"
              className="w-full h-80 sm:h-96 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#123047] text-white flex items-center justify-center">
            <Heart className="w-5 h-5 text-[#159A91]" />
          </div>
          <h2 className="text-xl font-bold text-[#123047]">
            {language === 'ar' ? 'رسالتنا' : 'Our Mission'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {language === 'ar'
              ? 'تقديم رعاية طبية تخصصية وقائية وعلاجية متمحورة حول المريض، تستند إلى الدقة العلمية الصارمة، وتصون كرامة وخصوصية كل مراجع يضع ثقته فينا.'
              : 'To deliver patient-centered preventive and therapeutic specialized medical care grounded in scientific accuracy, dignity, empathy, and uncompromising patient privacy.'}
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#E8F5F2] border border-[#159A91]/20 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#159A91] text-white flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-[#123047]">
            {language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {language === 'ar'
              ? 'أن نكون الوجهة الأولى للرعاية الطبية التخصصية في المنطقة، ونموذجاً يُحتذى به في الجمع بين التميز السريري وتجربة المريض الخالية من الإجهاد.'
              : 'To stand as the foremost outpatient specialty clinic in the GCC, setting the benchmark for clinical excellence harmonized with stress-free patient coordination.'}
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
            {language === 'ar' ? 'المبادئ التوجيهية' : 'Foundational Pillars'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123047] tracking-tight">
            {language === 'ar' ? 'قيمنا الجوهرية' : 'Our Core Clinical Values'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2.5">
              <span className="text-xs font-bold text-[#159A91]">0{idx + 1}.</span>
              <h3 className="text-base font-bold text-[#123047]">
                {language === 'ar' ? v.titleAr : v.titleEn}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'ar' ? v.descAr : v.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Facilities Showcase */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
              {language === 'ar' ? 'جولة في مرافقنا' : 'Sanctuary Interior'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123047] tracking-tight mt-1">
              {language === 'ar' ? 'المرافق والتجهيزات الطبية الحديثة' : 'Medical Facilities & Diagnostic Wings'}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <img
              src="/images/hero_clinic_reception_1793322345096.jpg"
              alt="Atrium Reception Lounge"
              className="w-full h-56 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-4">
              <h3 className="font-bold text-sm text-[#123047]">
                {language === 'ar' ? 'ردهة الاستقبال الرئيسية' : 'Flagship Atrium & Concierge'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'ar' ? 'أجواء مريحة وهادئة ترحب بالمراجعين.' : 'Tranquil travertine and natural daylight lounge.'}
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <img
              src="/images/clinic_facility_suite_1793322346030.jpg"
              alt="Private Clinical Consultation Suite"
              className="w-full h-56 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-4">
              <h3 className="font-bold text-sm text-[#123047]">
                {language === 'ar' ? 'أجنحة الفحص والاستشارة الخاصة' : 'Private Examination Suites'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'ar' ? 'مجهزة بأحدث شاشات العرض التشخيصية.' : 'Equipped with digital high-definition screens.'}
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <img
              src="/images/medical_laboratory_dx_1793322347324.jpg"
              alt="Automated Diagnostic Laboratory"
              className="w-full h-56 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-4">
              <h3 className="font-bold text-sm text-[#123047]">
                {language === 'ar' ? 'المختبر التشخيصي الآلي' : 'Automated Diagnostic Laboratory'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'ar' ? 'نتائج مخبرية فورية في نفس اليوم.' : 'Rapid high-precision pathology analysis.'}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SPECIALTIES } from '../data/specialties';
import { DOCTORS } from '../data/doctors';
import { MEDICAL_SERVICES } from '../data/services';
import { BRANCHES } from '../data/branches';
import { INSURANCE_PROVIDERS } from '../data/insurance';
import { TESTIMONIALS } from '../data/testimonials';
import { MEDICAL_ARTICLES } from '../data/articles';
import { FAQS } from '../data/faqs';
import { BranchStatusBadge } from '../components/common/BranchStatusBadge';
import {
  Calendar,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Sparkles,
  ChevronRight,
  Star,
  Building2,
  HeartPulse,
  Activity,
  Smile,
  Baby,
  Bone,
  Stethoscope,
  ChevronDown,
  Navigation,
} from 'lucide-react';
import { WHATSAPP_CONFIG, getQuickChatWhatsAppUrl, buildAppointmentMessageEn, buildAppointmentMessageAr, generateWhatsAppUrl } from '../config/whatsapp';

// Icon resolver helper for dynamic specialty icons
function renderSpecialtyIcon(iconName: string) {
  switch (iconName) {
    case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5" />;
    case 'Smile': return <Smile className="w-5 h-5" />;
    case 'Baby': return <Baby className="w-5 h-5" />;
    case 'Activity': return <Activity className="w-5 h-5" />;
    case 'Bone': return <Bone className="w-5 h-5" />;
    case 'Stethoscope': return <Stethoscope className="w-5 h-5" />;
    default: return <HeartPulse className="w-5 h-5" />;
  }
}

interface HomeProps {
  onNavigate: (page: string, params?: any) => void;
  onSelectDoctor: (doctor: any) => void;
  onSelectSpecialty: (specialty: any) => void;
  onSelectService: (service: any) => void;
  onSelectBranch: (branch: any) => void;
  onSelectArticle: (article: any) => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onSelectDoctor,
  onSelectSpecialty,
  onSelectService,
  onSelectBranch,
  onSelectArticle,
}) => {
  const { t, language } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0]?.id || null);

  const featuredDoctors = DOCTORS.filter((d) => d.featured).slice(0, 4);
  const featuredSpecialties = SPECIALTIES.filter((s) => s.featured).slice(0, 6);
  const previewServices = MEDICAL_SERVICES.slice(0, 4);
  const previewFaqs = FAQS.slice(0, 6);

  const handleQuickWhatsAppDoctor = (doc: any) => {
    const today = new Date().toISOString().split('T')[0];
    const msg = language === 'ar'
      ? buildAppointmentMessageAr({
          patientName: '[اسم المريض]',
          phone: '[رقم الهاتف]',
          specialty: doc.specialtyName.ar,
          doctor: doc.name.ar,
          branch: 'داون تاون دبي / مارينا',
          preferredDate: today,
          preferredTime: 'صباحاً أو مساءً',
          appointmentType: 'استشارة طبية',
          isExistingPatient: false,
        })
      : buildAppointmentMessageEn({
          patientName: '[Patient Name]',
          phone: '[Phone Number]',
          specialty: doc.specialtyName.en,
          doctor: doc.name.en,
          branch: 'Downtown Dubai / Marina',
          preferredDate: today,
          preferredTime: 'Morning or Afternoon',
          appointmentType: 'Consultation',
          isExistingPatient: false,
        });

    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-slate-200/70 bg-gradient-to-b from-[#E8F5F2]/40 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5F2] border border-[#159A91]/20 text-[#123047] text-xs font-semibold tracking-wide">
                <ShieldCheck className="w-4 h-4 text-[#159A91]" />
                <span>{t('hero_badge')}</span>
              </div>

              {/* Refined Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#123047] tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                <span>{t('hero_title_1')} </span>
                <span className="text-[#159A91] block sm:inline">{t('hero_title_highlight')} </span>
                <span>{t('hero_title_2')}</span>
              </h1>

              {/* Subtitle / Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                {t('hero_description')}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onNavigate('booking')}
                  className="py-3.5 px-6 rounded-xl bg-[#123047] hover:bg-[#159A91] text-white text-sm font-semibold flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-[0.98] group"
                >
                  <Calendar className="w-4 h-4 text-[#159A91] group-hover:text-white" />
                  <span>{t('action_book_appointment')}</span>
                </button>

                <button
                  onClick={() => onNavigate('doctors')}
                  className="py-3.5 px-6 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#123047] text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>{t('action_explore_doctors')}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 rtl:rotate-180" />
                </button>

                <a
                  href={getQuickChatWhatsAppUrl(language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 rounded-xl bg-[#E8F5F2] hover:bg-[#159A91]/15 text-[#159A91] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors font-mono"
                  title="WhatsApp: +201017238942"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>{WHATSAPP_CONFIG.displayFormatted}</span>
                </a>
              </div>

              {/* Adjacency Trust Indicators */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200/80 text-xs">
                <div>
                  <div className="font-extrabold text-lg sm:text-xl text-[#123047] tabular-nums">
                    {t('hero_stat_1_val')}
                  </div>
                  <div className="text-slate-500 text-[11px] font-medium leading-tight mt-0.5">
                    {t('hero_stat_1_label')}
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-lg sm:text-xl text-[#123047] tabular-nums">
                    {t('hero_stat_2_val')}
                  </div>
                  <div className="text-slate-500 text-[11px] font-medium leading-tight mt-0.5">
                    {t('hero_stat_2_label')}
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-lg sm:text-xl text-[#123047] tabular-nums">
                    {t('hero_stat_3_val')}
                  </div>
                  <div className="text-slate-500 text-[11px] font-medium leading-tight mt-0.5">
                    {t('hero_stat_3_label')}
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-lg sm:text-xl text-[#159A91]">
                    {t('hero_stat_4_val')}
                  </div>
                  <div className="text-slate-500 text-[11px] font-medium leading-tight mt-0.5">
                    {t('hero_stat_4_label')}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero High-Impact Architecture Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <img
                  src="/images/hero_clinic_reception_1793322345096.jpg"
                  alt="Al Nura Medical Clinic Flagship Reception Atrium in Dubai"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 ltr:left-5 rtl:right-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Downtown Dubai Flagship Center</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold leading-tight text-white">
                    {language === 'ar' ? 'بيئة استشفائية راقية تواكب أعلى المقاييس العالمية' : 'A Tranquil Healthcare Sanctuary in Downtown Dubai'}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-xs text-white/80">
                    <span>Valet P1 Available</span>
                    <span>·</span>
                    <span className="text-emerald-300">Open 6 Days Weekly</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CLINICAL SPECIALTIES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
              {language === 'ar' ? 'الأقسام الطبية المعتمدة' : 'Clinical Disciplines'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123047] tracking-tight mt-1">
              {t('section_specialties_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              {t('section_specialties_subtitle')}
            </p>
          </div>
          <button
            onClick={() => onNavigate('specialties')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#159A91] hover:text-[#123047] transition-colors whitespace-nowrap shrink-0 group"
          >
            <span>{t('action_explore_specialties')}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSpecialties.map((spec) => (
            <div
              key={spec.id}
              onClick={() => onSelectSpecialty(spec)}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#159A91]/40 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E8F5F2] text-[#159A91] flex items-center justify-center mb-4 group-hover:bg-[#159A91] group-hover:text-white transition-colors">
                  {renderSpecialtyIcon(spec.iconName)}
                </div>
                <h3 className="text-base font-bold text-[#123047] group-hover:text-[#159A91] transition-colors">
                  {spec.name[language]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {spec.shortDesc[language]}
                </p>

                {/* Common conditions */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {spec.conditions.slice(0, 3).map((cond, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      {cond[language]}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-semibold text-[#159A91] pt-2">
                <span>{language === 'ar' ? 'تفاصيل التخصص والأطباء' : 'View Discipline & Doctors'}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED DOCTORS SHOWCASE */}
      <section className="bg-gradient-to-b from-slate-50 to-[#FAFCFB] py-14 sm:py-20 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
                {language === 'ar' ? 'الخبرات السريرية' : 'Medical Leadership'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123047] tracking-tight mt-1">
                {t('section_doctors_title')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                {t('section_doctors_subtitle')}
              </p>
            </div>
            <button
              onClick={() => onNavigate('doctors')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#159A91] hover:text-[#123047] transition-colors whitespace-nowrap shrink-0 group"
            >
              <span>{t('action_explore_doctors')}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Doctor Portrait & Specialty Header */}
                <div>
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={doc.avatarUrl}
                      alt={doc.name[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 ltr:left-3 rtl:right-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#123047]/90 text-white shadow-sm">
                        {doc.specialtyName[language]}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#123047] leading-snug">
                      {doc.name[language]}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium line-clamp-1">
                      {doc.title[language]}
                    </p>
                    <p className="text-xs text-[#159A91] font-semibold line-clamp-1">
                      {doc.qualifications[language]}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                      <span>{doc.experienceYears} {language === 'ar' ? 'سنة خبرة' : 'yrs exp'}</span>
                      <span>·</span>
                      <span>{doc.languages.slice(0, 2).join(', ')}</span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 pt-2 leading-relaxed">
                      {doc.bio[language]}
                    </p>
                  </div>
                </div>

                {/* Actions: View Profile & WhatsApp Appointment */}
                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={() => onSelectDoctor(doc)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#123047] text-xs font-semibold transition-colors"
                  >
                    {t('action_view_profile')}
                  </button>

                  <button
                    onClick={() => handleQuickWhatsAppDoctor(doc)}
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'حجز بالواتساب' : 'WhatsApp Appointment'}</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. THE AL NURA DISTINCTION (WHY CHOOSE US) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
            {language === 'ar' ? 'فلسفة الرعاية المتميزة' : 'Clinical Standards'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123047] tracking-tight mt-1">
            {t('section_why_choose_title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            {t('section_why_choose_subtitle')}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Advanced Suites with Image */}
          <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="p-6 sm:p-8 space-y-3">
              <span className="text-xs font-bold text-[#159A91] uppercase tracking-wider">
                01. Precision Architecture
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#123047]">
                {language === 'ar' ? 'أجنحة طبية واستشارية خاصة متطورة' : 'State-of-the-Art Private Diagnostic Suites'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                {language === 'ar'
                  ? 'تم تصميم كل عيادة لتوفير الراحة التامة والخصوصية المطلقة لمرضانا، مع تزويدها بأحدث أجهزة التصوير الصوتي والشاشات الرقمية العالية الدقة.'
                  : 'Every examination room is equipped with high-definition volumetric diagnostics, ergonomic examination suites, and soothing ambient lighting.'}
              </p>
            </div>
            <div className="h-64 sm:h-72 overflow-hidden bg-slate-100">
              <img
                src="/images/clinic_facility_suite_1793322346030.jpg"
                alt="Al Nura Private Consultation Suite"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Card 2: Zero Queue Guarantee */}
          <div className="rounded-2xl border border-slate-200 bg-[#E8F5F2]/50 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#159A91] uppercase tracking-wider">
                02. Dedicated Attention
              </span>
              <h3 className="text-xl font-bold text-[#123047]">
                {language === 'ar' ? 'انعدام أوقات الانتظار واحترام وقتك' : 'Zero Waiting Queue Protocol'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'ar'
                  ? 'نعتمد نظام مواعيد صارم ومحدد بدقة، مما يتيح لك الدخول المباشر إلى غرفة الاستشارة دون تأخير، مع تخصيص وقت كافٍ للاستماع لك.'
                  : 'We operate on a strictly staggered consultation model ensuring immediate entry to your physician without crowded waiting lounges.'}
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#159A91]" />
                  <span>{language === 'ar' ? 'استشارة استشارية كافية لمدة ٣٠-٤٥ دقيقة' : 'Comprehensive 30–45 min consultations'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#159A91]" />
                  <span>{language === 'ar' ? 'فريق تنسيق مخصص لمتابعة كل مريض' : 'Dedicated patient concierge liaison'}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-semibold text-[#159A91]">
              {language === 'ar' ? 'خدمة متميزة في كل زيارة' : 'Guaranteed Consultation Timelines'}
            </div>
          </div>

          {/* Card 3: Western Board Faculty */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-3">
            <span className="text-xs font-bold text-[#159A91] uppercase tracking-wider">
              03. World-Class Clinicians
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#123047]">
              {language === 'ar' ? 'استشاريون يحملون البورد الأمريكي والأوروبي' : 'Internationally Board-Certified Consultants'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'ar'
                ? 'فريقنا الطبي يضم أسماء لامعة تخرجت ومارست الطب في أعرق المستشفيات الجامعية في بريطانيا وفرنسا وألمانيا والولايات المتحدة.'
                : 'Our faculty holds credentials from leading medical academies in London, Paris, and Zurich with rigorous continuous professional training.'}
            </p>
          </div>

          {/* Card 4: In-House Diagnostic Lab with Image */}
          <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-1/2 h-56 sm:h-full overflow-hidden bg-slate-100 shrink-0">
              <img
                src="/images/medical_laboratory_dx_1793322347324.jpg"
                alt="Automated Clinical Diagnostics Wing"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-3">
              <span className="text-xs font-bold text-[#159A91] uppercase tracking-wider">
                04. Rapid Insights
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#123047]">
                {language === 'ar' ? 'مختبر تشخيصي آلي متطور بنتائج في نفس اليوم' : 'In-House CAP Automated Laboratory Wing'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'ar'
                  ? 'تحاليل الدم الشاملة والهرمونات ووظائف الأعضاء تصدر خلال ساعات قليلة لمناقشتها مباشرة مع طبيبك دون الحاجة للعودة في يوم آخر.'
                  : 'Automated analyzers produce routine biochemistry, hematology, and hormonal assays within 2 to 4 hours for immediate physician action.'}
              </p>
              <div className="text-xs font-semibold text-[#159A91] pt-1">
                {language === 'ar' ? 'دقة متناهية وسرعة فائقة' : 'Gold-Standard Analytical Accuracy'}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SIGNATURE MEDICAL SERVICES & PROTOCOLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
              {language === 'ar' ? 'العلاجات المتقدمة' : 'Signature Procedures'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123047] tracking-tight mt-1">
              {t('section_services_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              {t('section_services_subtitle')}
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#159A91] hover:text-[#123047] transition-colors whitespace-nowrap shrink-0 group"
          >
            <span>{t('action_view_all_services')}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previewServices.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onSelectService(srv)}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#159A91]/40 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-[#159A91]">
                    {language === 'ar' ? 'إجراء تخصصي' : 'Specialized Care'}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>{srv.durationMinutes} {language === 'ar' ? 'دقيقة' : 'mins'}</span>
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#123047] group-hover:text-[#159A91] transition-colors">
                  {srv.title[language]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {srv.description[language]}
                </p>

                {/* Benefits */}
                <div className="mt-4 space-y-1.5">
                  {srv.benefits.slice(0, 2).map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#159A91] shrink-0" />
                      <span className="line-clamp-1">{b[language]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#159A91]">
                <span>{language === 'ar' ? 'عرض تفاصيل الفحص والتعليمات' : 'View Procedure Details & Prep'}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BRANCH LOCATIONS WITH LIVE UAE TIMEZONE */}
      <section className="bg-slate-50 py-14 sm:py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
                {language === 'ar' ? 'شبكة الفروع' : 'Center Locations'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123047] tracking-tight mt-1">
                {t('section_branches_title')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                {t('section_branches_subtitle')}
              </p>
            </div>
            <button
              onClick={() => onNavigate('branches')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#159A91] hover:text-[#123047] transition-colors whitespace-nowrap shrink-0 group"
            >
              <span>{t('action_view_branches')}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {BRANCHES.map((branch) => (
              <div
                key={branch.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={branch.imageUrl}
                      alt={branch.name[language]}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 ltr:left-3 rtl:right-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#123047]/90 text-white">
                        {branch.emirate[language]}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    {/* Real-time Open/Closed badge using Asia/Dubai calculation */}
                    <div>
                      <BranchStatusBadge branch={branch} showDetails={true} />
                    </div>

                    <h3 className="text-base font-bold text-[#123047] leading-tight">
                      {branch.name[language]}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {branch.fullAddress[language]}
                    </p>

                    <div className="pt-2 text-xs text-slate-600 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-slate-800">
                          {language === 'ar' ? 'المواقف:' : 'Parking:'}
                        </span>
                        <span className="truncate">{branch.parkingInfo[language]}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-slate-800">
                          {language === 'ar' ? 'الهاتف:' : 'Phone:'}
                        </span>
                        <a href={`tel:${branch.phone}`} className="text-[#159A91] font-semibold">
                          {branch.phoneDisplay}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={() => onSelectBranch(branch)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#123047] text-xs font-semibold transition-colors"
                  >
                    {language === 'ar' ? 'عرض تفاصيل الفرع وجدول الساعات' : 'View Schedule & Details'}
                  </button>

                  <a
                    href={branch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#159A91]" />
                    <span>{t('action_get_directions')}</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. HOW TO BOOK VIA WHATSAPP (3 EASY STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#123047] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
              WhatsApp Scheduling
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t('section_booking_steps_title')}
            </h2>
            <p className="text-xs sm:text-sm text-white/80">
              {t('section_booking_steps_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#159A91] text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="text-base font-bold text-white">
                {language === 'ar' ? 'حدد الطبيب والموعد' : 'Select Doctor & Time'}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {language === 'ar'
                  ? 'اختر التخصص الطبي، الاستشاري المفضل، والفرع الأقرب إليك، وحدد اليوم والوقت المناسب لجدولك.'
                  : 'Choose your desired specialty, consultant physician, preferred branch location, and convenient time window.'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm space-y-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="text-base font-bold text-white">
                {language === 'ar' ? 'افتح الواتساب تلقائياً' : 'Automated WhatsApp Launch'}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {language === 'ar'
                  ? 'يقوم نظامنا بتنسيق رسالة حجز رسمية كاملة وفتحها في تطبيق الواتساب الخاص بك على الرقم المعتمد.'
                  : 'Our form formats your clinical appointment request cleanly and opens WhatsApp prefilled with your exact parameters.'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#159A91] text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="text-base font-bold text-white">
                {language === 'ar' ? 'تأكيد فوري من المنسق' : 'Prompt Confirmation'}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {language === 'ar'
                  ? 'يراجع منسق العيادة التوفر ويرسل لك تأكيداً كتابياً مع رابط التقويم وإرشادات الزيارة.'
                  : 'Our scheduling coordinator checks the physician’s calendar and confirms your slot with preparation instructions.'}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-white/70 text-center sm:text-left rtl:sm:text-right">
              {language === 'ar' ? 'رقم الواتساب المركزي المعتمد للمركز: 201017238942+' : 'Central UAE Clinic WhatsApp Destination: +20 101 723 8942'}
            </span>
            <button
              onClick={() => onNavigate('booking')}
              className="py-3 px-6 rounded-xl bg-[#159A91] hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold transition-colors shrink-0 shadow-sm"
            >
              {t('action_book_appointment')}
            </button>
          </div>

        </div>
      </section>

      {/* 8. INSURANCE PARTNERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
            {language === 'ar' ? 'التغطية التأمينية' : 'Direct Billing'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123047] tracking-tight mt-1">
            {t('section_insurance_title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            {t('section_insurance_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INSURANCE_PROVIDERS.map((ins) => (
            <div
              key={ins.id}
              onClick={() => onNavigate('insurance')}
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#159A91] hover:shadow-sm transition-all cursor-pointer text-center space-y-1.5 group"
            >
              <div className="h-8 flex items-center justify-center font-extrabold tracking-wider text-sm text-slate-800 group-hover:text-[#159A91] transition-colors">
                {ins.logoText}
              </div>
              <div className="text-[11px] font-semibold text-slate-700 truncate">
                {ins.name[language]}
              </div>
              <div className="text-[10px] text-slate-400">
                {ins.networkTier[language]}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => onNavigate('insurance')}
            className="text-xs font-semibold text-[#159A91] hover:underline"
          >
            {language === 'ar' ? 'عرض كافة تفاصيل شبكات التأمين وبطاقات التغطية ←' : 'View Full Insurance Details & Pre-Approval Guidelines →'}
          </button>
        </div>
      </section>

      {/* 9. PATIENT REFLECTIONS (TESTIMONIALS) */}
      <section className="bg-gradient-to-b from-[#E8F5F2]/40 to-transparent py-14 sm:py-20 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
              {language === 'ar' ? 'ثقة مرضانا' : 'Patient Experience'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123047] tracking-tight mt-1">
              {t('section_testimonials_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              {t('section_testimonials_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{test.quote[language]}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-0.5">
                  <strong className="text-xs font-bold text-[#123047] block">
                    {test.patientName[language]}
                  </strong>
                  <div className="text-[11px] text-[#159A91] font-medium">
                    {test.serviceReceived[language]}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {test.branchName[language]} · {test.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-400">
            {language === 'ar' ? 'آراء استعراضية لمرضى نموذجية لأغراض العرض والتقييم' : 'Representative patient testimonials for demonstration evaluation'}
          </div>
        </div>
      </section>

      {/* 10. EVIDENCE-BASED MEDICAL ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
              {language === 'ar' ? 'التثقيف الطبي' : 'Clinical Education'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123047] tracking-tight mt-1">
              {t('section_articles_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              {t('section_articles_subtitle')}
            </p>
          </div>
          <button
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#159A91] hover:text-[#123047] transition-colors whitespace-nowrap shrink-0 group"
          >
            <span>{language === 'ar' ? 'استعراض كافة المقالات' : 'View All Articles'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEDICAL_ARTICLES.slice(0, 3).map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#159A91]/40 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2 font-medium">
                  <span className="text-[#159A91] font-semibold">{art.category[language]}</span>
                  <span>·</span>
                  <span>{art.readTimeMinutes} {language === 'ar' ? 'دقائق' : 'mins'}</span>
                </div>
                <h3 className="text-base font-bold text-[#123047] group-hover:text-[#159A91] transition-colors leading-snug">
                  {art.title[language]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {art.excerpt[language]}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700 truncate">{art.authorName[language]}</span>
                <span className="text-[#159A91] font-semibold">{t('action_read_article')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
            {language === 'ar' ? 'المساعدة والإرشادات' : 'Patient Support'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123047] tracking-tight mt-1">
            {t('section_faq_title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {t('section_faq_subtitle')}
          </p>
        </div>

        <div className="space-y-3">
          {previewFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full text-left rtl:text-right p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#123047] hover:bg-slate-50/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question[language]}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#159A91]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer[language]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('faq')}
            className="text-xs font-semibold text-[#159A91] hover:underline"
          >
            {language === 'ar' ? 'استعراض كافة الأسئلة الشائعة وتصنيفاتها ←' : 'Browse All Categorized FAQs →'}
          </button>
        </div>
      </section>

      {/* 12. BOTTOM CONCIERGE CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#123047] to-[#159A91] text-white p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left rtl:md:text-right">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              {language === 'ar' ? 'فريق خدمة المراجعين على مدار اليوم' : 'Dedicated Healthcare Concierge'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {language === 'ar' ? 'هل تود استشارة أطبائنا أو حجز موعد؟' : 'Ready to Schedule Your Consultation?'}
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {language === 'ar'
                ? 'فريق منسقي الرعاية الطبية في عيادة النورة متاح لمساعدتك عبر الواتساب لتأكيد موعدك وإجابة استفسارات التأمين فوراً.'
                : 'Connect with our UAE patient care coordinators via WhatsApp (+201017238942) for prompt appointment confirmation.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('booking')}
              className="py-3.5 px-6 rounded-xl bg-white hover:bg-slate-100 text-[#123047] text-xs sm:text-sm font-bold shadow-md transition-colors text-center"
            >
              {t('action_book_appointment')}
            </button>

            <a
              href={getQuickChatWhatsAppUrl(language)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t('action_whatsapp_inquiry')}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

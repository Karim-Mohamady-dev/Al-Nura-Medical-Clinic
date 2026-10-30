import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText, CheckCircle2, Shield, AlertCircle, Accessibility, Calendar } from 'lucide-react';

interface PatientResourcesProps {
  onNavigateBooking: () => void;
}

export const PatientResources: React.FC<PatientResourcesProps> = ({ onNavigateBooking }) => {
  const { language } = useLanguage();

  const whatToBring = [
    {
      titleEn: 'Original Emirates ID Card',
      titleAr: 'بطاقة الهوية الإماراتية الأصلية',
      descEn: 'Mandatory under UAE health regulations for identity verification and insurance billing.',
      descAr: 'إلزامية بموجب اللوائح الصحية في الدولة للتحقق من الهوية وربط مطالبات التأمين.',
    },
    {
      titleEn: 'Health Insurance Card (Physical or Digital)',
      titleAr: 'بطاقة التأمين الصحي (الفعلية أو الرقمية)',
      descEn: 'Please ensure your card is active and that your network covers the requested specialty.',
      descAr: 'يرجى التأكد من سريان البطاقة وشمول شبكتها للتخصص والفرع المطلوب.',
    },
    {
      titleEn: 'Previous Medical Reports & Imaging',
      titleAr: 'التقارير الطبية السابقة وصور الأشعة',
      descEn: 'Bring any recent blood tests, MRI/CT scans, or discharge summaries for doctor review.',
      descAr: 'إحضار نتائج التحاليل السابقة وصور الرنين أو الأشعة السينية للاطلاع عليها.',
    },
    {
      titleEn: 'List of Current Prescription Medications',
      titleAr: 'قائمة الأدوية الموصوفة الحالية',
      descEn: 'Including dosages and supplements to avoid dangerous pharmaceutical interactions.',
      descAr: 'بما في ذلك الجرعات والمكملات الغذائية لتجنب أي تعارضات دوائية غير مرغوبة.',
    },
  ];

  const rights = [
    {
      en: 'Receive considerate, respectful, and dignified healthcare regardless of background.',
      ar: 'الحصول على رعاية صحية محترمة تراعي كرامة المريض وخصوصيته دون أي تمييز.',
    },
    {
      en: 'Complete confidentiality of all medical consultations, tests, and clinical files.',
      ar: 'السرية والخصوصية التامة لكافة الاستشارات الطبية والتحاليل والسجلات السريرية.',
    },
    {
      en: 'Thorough explanation of diagnosis, treatment options, potential risks, and alternative pathways.',
      ar: 'تلقي شرح وافٍ للتشخيص وخيارات العلاج والمخاطر والبدائل بلغة واضحة ومفهومة.',
    },
    {
      en: 'Right to request a qualified second opinion or change consulting physician without prejudice.',
      ar: 'الحق في طلب رأي طبي ثانٍ أو تغيير الطبيب المعالج بكل حرية ومرونة.',
    },
  ];

  const responsibilities = [
    {
      en: 'Provide accurate and complete medical history, previous conditions, and allergies.',
      ar: 'تقديم معلومات طبية دقيقة وتاريخ مرضي شامل بما في ذلك التحسس الدوائي والغذائي.',
    },
    {
      en: 'Arrive punctually at scheduled appointment times or notify the clinic at least 24 hours prior to cancel.',
      ar: 'الالتزام بموعد الحضور في الوقت المحدد أو إشعار العيادة قبل ٢٤ ساعة على الأقل في حال الإلغاء.',
    },
    {
      en: 'Follow prescribed therapeutic and medication regimens agreed upon with the physician.',
      ar: 'الالتزام بالخطة العلاجية والدوائية المتفق عليها مع الطبيب الاستشاري لضمان التعافي.',
    },
    {
      en: 'Treat healthcare personnel, clinical staff, and fellow patients with mutual dignity and respect.',
      ar: 'التعامل مع الكوادر الطبية والتمريضية والمراجعين الآخرين باحترام وتقدير متبادل.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
          {language === 'ar' ? 'إرشادات المراجعين' : 'Patient Information & Guidelines'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight">
          {language === 'ar' ? 'دليل وموارد المريض' : 'Patient Resources & Care Guide'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          {language === 'ar'
            ? 'كل ما تحتاج لمعرفته قبل زيارتك لعيادة النورة، من المستندات المطلوبة وحقوق المريض إلى سياسة المواعيد وسهولة الوصول.'
            : 'Everything you need to know ahead of your visit to Al Nura, from preparation checklists and insurance verification to patient rights and accessibility.'}
        </p>
      </div>

      {/* What to Bring Checklist */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
            {language === 'ar' ? 'الاستعداد للزيارة' : 'Pre-Visit Checklist'}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#123047] mt-1">
            {language === 'ar' ? 'ما يجب إحضاره إلى موعدك الطبي' : 'What to Bring to Your Appointment'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whatToBring.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E8F5F2] text-[#159A91] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#123047]">
                  {language === 'ar' ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {language === 'ar' ? item.descAr : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Patient Rights & Responsibilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Rights */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#159A91]" />
            <h2 className="text-lg font-bold text-[#123047]">
              {language === 'ar' ? 'حقوق المريض' : 'Patient Rights'}
            </h2>
          </div>
          <ul className="space-y-3 text-xs text-slate-600">
            {rights.map((r, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#159A91] shrink-0 mt-1.5" />
                <span>{language === 'ar' ? r.ar : r.en}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#123047]" />
            <h2 className="text-lg font-bold text-[#123047]">
              {language === 'ar' ? 'مسؤوليات المريض' : 'Patient Responsibilities'}
            </h2>
          </div>
          <ul className="space-y-3 text-xs text-slate-600">
            {responsibilities.map((res, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                <span>{language === 'ar' ? res.ar : res.en}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Accessibility & Special Accommodations */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#E8F5F2] border border-[#159A91]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white text-[#159A91] flex items-center justify-center shrink-0 shadow-sm">
            <Accessibility className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#123047]">
              {language === 'ar' ? 'أصحاب الهمم وتسهيلات الوصول الشامل' : 'People of Determination & Accessibility'}
            </h3>
            <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
              {language === 'ar'
                ? 'كافة فروعنا مهيأة بالكامل لكراسي الدفع المتحركة مع مداخل بدون عتبات، ومصاعد مخصصة، وأسرّة فحص كهربائية قابلة للتعديل وفريق مدرب لتقديم أي مساعدة إضافية.'
                : 'All Al Nura branches feature step-free entrances, wheelchair accessibility, automated doors, accessible diagnostic couches, and trained concierge escorts.'}
            </p>
          </div>
        </div>

        <button
          onClick={onNavigateBooking}
          className="py-3 px-6 rounded-xl bg-[#123047] hover:bg-[#159A91] text-white text-xs font-semibold whitespace-nowrap transition-colors shrink-0 shadow-sm"
        >
          {language === 'ar' ? 'حجز موعد طبي' : 'Schedule Appointment'}
        </button>
      </div>

    </div>
  );
};

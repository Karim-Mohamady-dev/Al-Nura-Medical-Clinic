import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, FileText, AlertTriangle, CalendarX, Lock } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface LegalProps {
  initialTab?: string;
}

export const Legal: React.FC<LegalProps> = ({ initialTab = 'privacy' }) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const tabs = [
    { id: 'privacy', labelEn: 'Privacy Policy', labelAr: 'إشعار وسياسة الخصوصية' },
    { id: 'terms', labelEn: 'Terms of Use', labelAr: 'شروط وأحكام الاستخدام' },
    { id: 'disclaimer', labelEn: 'Medical Disclaimer', labelAr: 'إخلاء المسؤولية الطبية' },
    { id: 'cancellation', labelEn: 'Appointment & Cancellation', labelAr: 'سياسة المواعيد والإلغاء' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
          {language === 'ar' ? 'السياسات والشروط القانونية' : 'Legal & Governance'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight">
          {language === 'ar' ? 'السياسات القانونية وإخلاء المسؤولية' : 'Clinic Policies & Legal Notices'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          {language === 'ar'
            ? 'الوثائق القانونية المعتمدة لعيادة النورة الطبية لحماية خصوصية المراجعين وبيان شروط الاستخدام.'
            : 'Formal regulatory disclosures, patient confidentiality guidelines, and terms of service for Al Nura Medical Clinic.'}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-[#123047] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {language === 'ar' ? tab.labelAr : tab.labelEn}
          </button>
        ))}
      </div>

      {/* Content Container */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        
        {/* Privacy Policy */}
        {activeTab === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#159A91]">
              <Lock className="w-5 h-5" />
              <h2 className="text-lg font-bold text-[#123047]">
                {language === 'ar' ? 'إشعار الخصوصية وحماية بيانات المرضى' : 'Patient Privacy & Data Protection Notice'}
              </h2>
            </div>
            <p>
              {language === 'ar'
                ? 'تلتزم عيادة النورة الطبية بأعلى معايير حماية البيانات وسرية المعلومات الصحية المعمول بها في دولة الإمارات العربية المتحدة ووفقاً للوائح هيئة الصحة بدبي ودائرة الصحة بأبوظبي.'
                : 'Al Nura Medical Clinic is committed to upholding the highest standards of medical data confidentiality in compliance with UAE federal healthcare governance and local health authority mandates.'}
            </p>
            <div className="p-4 rounded-2xl bg-[#E8F5F2] border border-[#159A91]/20 space-y-1 font-medium text-slate-800">
              <strong className="block text-[#123047]">
                {language === 'ar' ? 'المعمارية التقنية الخالية من تخزين البيانات:' : 'Frontend Zero-Persistence Protocol:'}
              </strong>
              <p className="text-xs text-slate-600">
                {language === 'ar'
                  ? 'هذا الموقع الإلكتروني مصمم بالكامل دون أي خوادم أو قواعد بيانات خلفية لتخزين بيانات المراجعين. عند تعبئة نموذج حجز موعد أو استفسار، يتم تشفير نص الرسالة فقط وفتحها في تطبيق الواتساب الآمن الخاص بك لإرسالها مباشرة إلى كادر المركز.'
                  : 'This website operates purely as a client-side interface with zero server databases or session cookie trackers. All appointment and inquiry details are compiled strictly in frontend memory and routed through your encrypted WhatsApp application.'}
              </p>
            </div>
          </div>
        )}

        {/* Terms of Use */}
        {activeTab === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#123047]">
              <FileText className="w-5 h-5 text-[#159A91]" />
              <h2 className="text-lg font-bold text-[#123047]">
                {language === 'ar' ? 'شروط وأحكام استخدام الموقع' : 'Terms & Conditions of Portal Use'}
              </h2>
            </div>
            <p>
              {language === 'ar'
                ? 'يخضع الدخول إلى هذا الموقع واستخدامه للشروط والأحكام الآتية. باستخدامك للموقع، فإنك توافق على الالتزام الكامل بهذه الشروط.'
                : 'Access to and utilization of this healthcare portal is governed by the following operational conditions. Navigating the site indicates full acceptance.'}
            </p>
            <ul className="list-disc ltr:pl-5 rtl:pr-5 space-y-2 text-xs">
              <li>
                {language === 'ar'
                  ? 'طلب الموعد عبر الواتساب يعد طلباً مبدئياً ولا يعتبر حجزاً نهائياً إلا بعد استلام تأكيد كتابي من منسق العيادة.'
                  : 'An appointment request dispatched via WhatsApp constitutes an initial inquiry and is only finalized upon written clinic confirmation.'}
              </li>
              <li>
                {language === 'ar'
                  ? 'المعلومات الواردة على هذا الموقع مخصصة لأغراض التثقيف الصحي العام ولا تغني عن الاستشارة الطبية المباشرة.'
                  : 'All published clinical overviews are educational in nature and do not establish a formal physician-patient relationship until clinical consultation.'}
              </li>
            </ul>
          </div>
        )}

        {/* Medical Disclaimer */}
        {activeTab === 'disclaimer' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-600">
              <AlertTriangle className="w-5 h-5" />
              <h2 className="text-lg font-bold text-[#123047]">
                {language === 'ar' ? 'إخلاء المسؤولية الطبية' : 'Medical Disclaimer'}
              </h2>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-2">
              <strong className="block font-bold">
                {language === 'ar' ? 'ليست بديلاً عن الرعاية الطبية الفورية أو الطارئة' : 'Not a Substitute for Emergency Medical Care'}
              </strong>
              <p className="text-xs leading-relaxed">
                {language === 'ar'
                  ? 'عيادة النورة هي مركز عيادات خارجية تخصصي. في حالات الطوارئ الطبية الحرجة كألم الصدر المفاجئ أو صعوبة التنفس الحادة، يُرجى الاتصال فوراً برقم الطوارئ الوطني 998 أو التوجه لأقرب قسم طوارئ في مستشفى عام.'
                  : 'Al Nura is an outpatient specialty facility. For life-threatening emergencies, severe chest pain, or acute respiratory distress, please immediately call 998 (UAE National Ambulance) or proceed to the nearest emergency hospital.'}
              </p>
            </div>
            <p className="text-xs text-slate-500">
              {SITE_CONFIG.isDemoNotice[language]}
            </p>
          </div>
        )}

        {/* Cancellation Policy */}
        {activeTab === 'cancellation' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#159A91]">
              <CalendarX className="w-5 h-5" />
              <h2 className="text-lg font-bold text-[#123047]">
                {language === 'ar' ? 'سياسة تأكيد وإلغاء المواعيد' : 'Appointment Scheduling & Cancellation Policy'}
              </h2>
            </div>
            <p>
              {language === 'ar'
                ? 'نظراً لأن عيادتنا تتبع بروتوكول انعدام أوقات الانتظار وتخصص أوقات استشارة كاملة لكل مريض، فإننا نرجو من مراجعينا الكرام الالتزام بالآتي:'
                : 'Because Al Nura adheres to a strict zero-queue consultation philosophy dedicating extended one-on-one time with each physician, we request cooperation with the following:'}
            </p>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <strong className="block text-slate-900 font-semibold">
                  {language === 'ar' ? 'إشعار الإلغاء قبل ٢٤ ساعة:' : '24-Hour Advance Cancellation Notice:'}
                </strong>
                <p className="text-slate-600 mt-0.5">
                  {language === 'ar'
                    ? 'في حال تعذر الحضور، يرجى إرسال رسالة واتساب بسيطة قبل ٢٤ ساعة لتعديل الموعد وإتاحته لمريض آخر.'
                    : 'If unable to attend, please send a quick WhatsApp reply at least 24 hours prior to reschedule.'}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <strong className="block text-slate-900 font-semibold">
                  {language === 'ar' ? 'الحضور قبل الموعد بـ ١٥ دقيقة:' : 'Arrive 15 Minutes Prior:'}
                </strong>
                <p className="text-slate-600 mt-0.5">
                  {language === 'ar'
                    ? 'لإتمام مطابقة بطاقة الهوية الإماراتية وفحص العلامات الحيوية الأولية بسلاسة.'
                    : 'Allows effortless Emirates ID verification and preliminary vital signs screening.'}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

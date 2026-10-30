import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { INSURANCE_PROVIDERS } from '../data/insurance';
import { ShieldCheck, CheckCircle2, MessageSquare, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { getQuickChatWhatsAppUrl } from '../config/whatsapp';

export const Insurance: React.FC = () => {
  const { language } = useLanguage();
  const [selectedBranchFilter, setSelectedBranchFilter] = useState('');

  const filteredProviders = selectedBranchFilter
    ? INSURANCE_PROVIDERS.filter((p) => p.branchesCovered.includes(selectedBranchFilter))
    : INSURANCE_PROVIDERS;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
          {language === 'ar' ? 'التغطية التأمينية المباشرة' : 'Direct Billing Network'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight">
          {language === 'ar' ? 'شركاء التأمين الصحي والتغطيات' : 'Health Insurance Partners'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          {language === 'ar'
            ? 'نعمل بنظام التغطية والموافقة الإلكترونية المباشرة مع أبرز شبكات التأمين الصحي المحلية والعالمية لتيسير حصولك على أرقى رعاية صحية.'
            : 'Al Nura coordinates cashless electronic direct billing with major UAE and global insurance networks. Verify your card tier coverage with our team.'}
        </p>
        <div className="pt-1">
          <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-slate-100/90 border border-slate-200 text-[11px] text-slate-600">
            <span className="font-bold text-slate-800">
              {language === 'ar' ? 'ملاحظة توضيحية:' : 'Demonstration Note:'}
            </span>
            <span>
              {language === 'ar'
                ? 'شعارات شبكات التأمين ونسب التغطية معروضة كنماذج استعراضية تجريبية للتقييم التقني.'
                : 'Insurance provider logos and network tiers are representative demonstration mockups for technical evaluation.'}
            </span>
          </div>
        </div>
      </div>

      {/* Guide Card */}
      <div className="bg-gradient-to-br from-[#123047] to-[#159A91] text-white rounded-3xl p-6 sm:p-10 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>{language === 'ar' ? 'التحقق الإلكتروني السريع' : 'Fast Electronic Verification'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {language === 'ar' ? 'كيف تستفيد من التأمين الصحي في عيادة النورة؟' : 'How Direct Billing Works at Al Nura'}
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            {language === 'ar'
              ? 'يرجى إبراز بطاقة الهوية الإماراتية الأصلية مع بطاقتك التأمينية عند الوصول. يقوم موظف الاستقبال بالتحقق من الأهلية والموافقة فورياً دون الحاجة لدفع التكاليف نقداً، عدا نسبة المشاركة المحددة في وثيقتك.'
              : 'Simply present your original Emirates ID and your insurance card upon arrival. Our front desk verifies policy eligibility and pre-authorization electronically within minutes.'}
          </p>
        </div>

        <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm space-y-3 text-xs text-white/90">
          <strong className="block font-bold text-white">
            {language === 'ar' ? 'استفسار فوري عن بطاقتك:' : 'Verify Your Policy:'}
          </strong>
          <p className="text-[11px] text-white/70 leading-relaxed">
            {language === 'ar'
              ? 'أرسل صورة بطاقتك التأمينية لمنسق التأمين عبر الواتساب للتحقق المسبق من التغطية قبل الزيارة.'
              : 'Send a snapshot of your insurance card via WhatsApp for prior eligibility validation.'}
          </p>
          <a
            href={getQuickChatWhatsAppUrl(language, 'Insurance Coverage Verification')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{language === 'ar' ? 'فحص بطاقة التأمين عبر واتساب' : 'WhatsApp Card Check'}</span>
          </a>
        </div>
      </div>

      {/* Insurance Providers Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#123047]">
            {language === 'ar' ? 'شبكات التأمين المعتمدة' : 'Approved Insurance Carriers'}
          </h2>
          <span className="text-xs text-slate-400">
            {filteredProviders.length} {language === 'ar' ? 'شبكات معتمدة' : 'Carriers'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProviders.map((prov) => (
            <div
              key={prov.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="h-10 flex items-center justify-start text-lg font-extrabold tracking-wider text-[#123047]">
                  {prov.logoText}
                </div>
                <h3 className="text-sm font-bold text-[#123047] leading-snug">
                  {prov.name[language]}
                </h3>
                <span className="inline-block text-[11px] font-semibold text-[#159A91] bg-[#E8F5F2] px-2 py-0.5 rounded">
                  {prov.networkTier[language]}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {prov.description[language]}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                <div className="font-medium text-slate-700">
                  {language === 'ar' ? 'نسبة التحمل:' : 'Copay:'} {prov.copayNote[language]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance FAQ snippet */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
        <h3 className="text-base font-bold text-[#123047] flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#159A91]" />
          <span>{language === 'ar' ? 'معلومات هامة لحاملي وثائق التأمين' : 'Essential Insurance Information'}</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="space-y-1">
            <strong className="block text-slate-900 font-semibold">
              {language === 'ar' ? '١. الهوية الإماراتية إلزامية' : '1. Emirates ID Mandatory'}
            </strong>
            <p>{language === 'ar' ? 'تتطلب أنظمة التأمين بالدولة إبراز الهوية الأصلية للتحقق الرقمي.' : 'UAE health regulators mandate original Emirates ID for claim validation.'}</p>
          </div>
          <div className="space-y-1">
            <strong className="block text-slate-900 font-semibold">
              {language === 'ar' ? '٢. الموافقات المسبقة' : '2. Pre-Authorization'}
            </strong>
            <p>{language === 'ar' ? 'الفحوصات والأشعة المتقدمة قد تستلزم موافقة إلكترونية تستغرق ١٥-٣٠ دقيقة.' : 'Advanced imaging or specialized labs may require 15–30 min e-approvals.'}</p>
          </div>
          <div className="space-y-1">
            <strong className="block text-slate-900 font-semibold">
              {language === 'ar' ? '٣. استرداد الدفع الشخصي' : '3. Reimbursement Support'}
            </strong>
            <p>{language === 'ar' ? 'نوفر فواتير ضريبية وتقارير معتمدة في حال رغبتك بالاسترداد من شركات غير مسجلة.' : 'Itemized VAT invoices and signed claim forms provided for non-network plans.'}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BRANCHES } from '../data/branches';
import { ContactFormData } from '../types';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  Send,
} from 'lucide-react';
import { WHATSAPP_CONFIG, buildInquiryWhatsAppUrl } from '../config/whatsapp';
import { SITE_CONFIG } from '../config/site';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'general',
    branchId: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasSent, setHasSent] = useState(false);

  const inquiryTypes = [
    { id: 'general', label: t('contact_type_general') },
    { id: 'appointment', label: t('contact_type_appointment') },
    { id: 'doctor', label: t('contact_type_doctor') },
    { id: 'services', label: t('contact_type_services') },
    { id: 'insurance', label: t('contact_type_insurance') },
    { id: 'branch', label: t('contact_type_branch') },
    { id: 'feedback', label: t('contact_type_feedback') },
    { id: 'complaints', label: t('contact_type_complaints') },
  ];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = t('booking_validation_name');
    }
    if (!formData.phone.trim()) {
      errs.phone = t('booking_validation_phone');
    }
    if (!formData.message.trim()) {
      errs.message = t('contact_validation_message');
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedTypeObj = inquiryTypes.find((i) => i.id === formData.inquiryType);
    const selectedBranchObj = BRANCHES.find((b) => b.id === formData.branchId);

    const targetUrl = buildInquiryWhatsAppUrl(
      {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || undefined,
        inquiryType: selectedTypeObj ? selectedTypeObj.label : formData.inquiryType,
        branch: selectedBranchObj ? selectedBranchObj.name[language] : undefined,
        message: formData.message.trim(),
      },
      language
    );

    window.open(targetUrl, '_blank');
    setHasSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
          {language === 'ar' ? 'خدمة رعاية المراجعين' : 'Patient Relations & Support'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight">
          {t('contact_page_title')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          {t('contact_page_subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Details & Info */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-[#123047] text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
            <div>
              <span className="text-xs font-semibold text-[#159A91] uppercase tracking-wider">
                {language === 'ar' ? 'التواصل المباشر' : 'Immediate Assistance'}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {language === 'ar' ? 'قنوات الاتصال المعتمدة' : 'Direct Clinic Contacts'}
              </h3>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#159A91]" />
                </div>
                <div>
                  <strong className="block text-white font-semibold">
                    {language === 'ar' ? 'هاتف الاستقبال المركزي' : 'Toll-Free UAE Line'}
                  </strong>
                  <a href="tel:+97148002568" className="text-white/80 hover:text-white transition-colors">
                    {SITE_CONFIG.phoneDisplay} (+971 4 800 2568)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <strong className="block text-white font-semibold">
                    {language === 'ar' ? 'الواتساب الطبي المعتمد' : 'Official WhatsApp Hub'}
                  </strong>
                  <span className="text-white/80 font-mono block">
                    {WHATSAPP_CONFIG.displayFormatted}
                  </span>
                  <span className="text-[11px] text-white/60">
                    {language === 'ar' ? 'استجابة سريعة على مدار ساعات العمل' : 'Real-time booking and inquiries'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#159A91]" />
                </div>
                <div>
                  <strong className="block text-white font-semibold">
                    {language === 'ar' ? 'البريد الإلكتروني للإدارة' : 'Email Administration'}
                  </strong>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-white/80 hover:text-white transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#159A91]" />
                </div>
                <div>
                  <strong className="block text-white font-semibold">
                    {language === 'ar' ? 'أوقات العمل المركزية' : 'Operating Timings'}
                  </strong>
                  <span className="text-white/80 block">
                    {language === 'ar' ? 'الإثنين - السبت: ٠٨:٠٠ صباحاً - ٠٩:٠٠ مساءً' : 'Monday – Saturday: 08:00 – 21:00'}
                  </span>
                  <span className="text-white/60 text-[11px] block">
                    {language === 'ar' ? 'الأحد: ١٠:٠٠ صباحاً - ٠٦:٠٠ مساءً (داون تاون ومارينا)' : 'Sunday: 10:00 – 18:00 (Downtown & Marina)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Emergency Alert */}
            <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 text-xs text-white/80 space-y-1">
              <strong className="text-amber-300 font-bold block">
                {language === 'ar' ? 'تنبيه الطوارئ الإسعافية: 998' : 'Acute Emergency Hotline: 998'}
              </strong>
              <p className="text-[11px] leading-relaxed text-white/70">
                {t('footer_emergency_notice')}
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: WhatsApp Inquiry Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-6">
          
          <div>
            <h3 className="text-lg font-bold text-[#123047]">
              {language === 'ar' ? 'نموذج إرسال الاستفسار عبر الواتساب' : 'Submit Structured WhatsApp Inquiry'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {t('contact_disclaimer')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Inquiry Category */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">
                {t('contact_field_inquiry_type')} <span className="text-rose-500">*</span>
              </label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs sm:text-sm focus:border-[#159A91] focus:outline-none"
              >
                {inquiryTypes.map((it) => (
                  <option key={it.id} value={it.id}>
                    {it.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">
                  {t('booking_field_patient_name')} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder={language === 'ar' ? 'اسمك بالكامل...' : 'Your full name'}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  className={`w-full p-3 rounded-xl border text-xs sm:text-sm ${
                    errors.name ? 'border-rose-400' : 'border-slate-200 focus:border-[#159A91]'
                  } focus:outline-none`}
                />
                {errors.name && (
                  <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">
                  {t('booking_field_phone')} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+971 50 123 4567"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  className={`w-full p-3 rounded-xl border text-xs sm:text-sm ${
                    errors.phone ? 'border-rose-400' : 'border-slate-200 focus:border-[#159A91]'
                  } focus:outline-none`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">
                  {t('booking_field_email')}
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#159A91] focus:outline-none"
                />
              </div>

              {/* Branch */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">
                  {t('booking_field_branch')}
                </label>
                <select
                  value={formData.branchId}
                  onChange={(e) => setFormData({ ...formData, branchId: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs sm:text-sm focus:border-[#159A91] focus:outline-none"
                >
                  <option value="">{language === 'ar' ? 'أي فرع / استفسار عام' : 'Any Branch / General'}</option>
                  {BRANCHES.map((b) => (
                    <option key={b.id} value={b.id}>{b.name[language]}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">
                {t('contact_field_message')} <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={4}
                placeholder={t('contact_field_message_placeholder')}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: '' });
                }}
                className={`w-full p-3 rounded-xl border text-xs sm:text-sm ${
                  errors.message ? 'border-rose-400' : 'border-slate-200 focus:border-[#159A91]'
                } focus:outline-none`}
              />
              {errors.message && (
                <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t('action_submit_inquiry')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {hasSent && (
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs text-center border border-emerald-200">
                {language === 'ar'
                  ? 'تم فتح تطبيق الواتساب بنجاح! اضغط على زر الإرسال لإرسال استفسارك للمركز.'
                  : 'WhatsApp inquiry launched! Please tap send inside WhatsApp to deliver your inquiry.'}
              </div>
            )}

          </form>

        </div>

      </div>

    </div>
  );
};

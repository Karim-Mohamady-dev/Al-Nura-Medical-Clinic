import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { MessageSquare, X, ChevronRight, Calendar, HelpCircle, MapPin } from 'lucide-react';
import { WHATSAPP_CONFIG, getQuickChatWhatsAppUrl } from '../../config/whatsapp';

interface FloatingWhatsAppProps {
  onNavigate: (page: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      icon: Calendar,
      title: language === 'ar' ? 'طلب حجز موعد جديد' : 'Request Appointment',
      subtitle: language === 'ar' ? 'اختر الطبيب والتاريخ' : 'Pick doctor & schedule',
      action: () => {
        onNavigate('booking');
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      icon: HelpCircle,
      title: language === 'ar' ? 'استفسار طبي أو تأمين' : 'Medical & Insurance Inquiry',
      subtitle: language === 'ar' ? 'محادثة مباشرة مع الاستقبال' : 'Chat directly with clinic desk',
      action: () => {
        window.open(getQuickChatWhatsAppUrl(language, 'Insurance & Services'), '_blank');
        setIsOpen(false);
      },
    },
    {
      icon: MapPin,
      title: language === 'ar' ? 'مواقع الفروع وساعات العمل' : 'Branch Locations & Hours',
      subtitle: language === 'ar' ? 'دبي داون تاون ومارينا وأبوظبي' : 'Downtown, Marina & Abu Dhabi',
      action: () => {
        onNavigate('branches');
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
  ];

  return (
    <div className="fixed bottom-18 md:bottom-6 ltr:right-4 rtl:left-4 z-50 flex flex-col items-end rtl:items-start">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] bg-white border border-slate-200/90 rounded-2xl shadow-2xl overflow-hidden transition-all animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-[#123047] text-white p-4 flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <h4 className="font-bold text-sm tracking-tight">{t('whatsapp_popup_title')}</h4>
              </div>
              <p className="text-white/80 text-xs mt-1 leading-snug">
                {t('whatsapp_popup_desc')}
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/10 text-[11px] text-[#159A91] font-mono">
                {WHATSAPP_CONFIG.displayFormatted}
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Options */}
          <div className="p-3 space-y-2 bg-[#FAFCFB]">
            {quickOptions.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <button
                  key={idx}
                  onClick={opt.action}
                  className="w-full text-left rtl:text-right p-3 rounded-xl border border-slate-200/80 bg-white hover:bg-[#E8F5F2] hover:border-[#159A91]/40 transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E8F5F2] text-[#159A91] flex items-center justify-center shrink-0 group-hover:bg-[#159A91] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#123047]">{opt.title}</div>
                      <div className="text-[11px] text-slate-500">{opt.subtitle}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#159A91] rtl:rotate-180 transition-transform" />
                </button>
              );
            })}

            {/* Direct Open WhatsApp Button */}
            <a
              href={getQuickChatWhatsAppUrl(language)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'ar' ? 'فتح المحادثة المباشرة بالواتساب' : 'Open Direct WhatsApp Chat'}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Open WhatsApp medical coordination"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />
        )}
      </button>
    </div>
  );
};

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FAQS } from '../data/faqs';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';
import { getQuickChatWhatsAppUrl } from '../config/whatsapp';

export const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0]?.id || null);

  const categories = [
    { id: 'all', labelEn: 'All Questions', labelAr: 'كافة الأسئلة' },
    { id: 'appointments', labelEn: 'Appointments & WhatsApp', labelAr: 'المواعيد والواتساب' },
    { id: 'doctors', labelEn: 'Doctors & Credentials', labelAr: 'الأطباء والخبرات' },
    { id: 'specialties', labelEn: 'Specialties', labelAr: 'التخصصات' },
    { id: 'services', labelEn: 'Medical Services', labelAr: 'الخدمات والفحوصات' },
    { id: 'insurance', labelEn: 'Health Insurance', labelAr: 'التأمين الصحي' },
    { id: 'branches', labelEn: 'Branches & Access', labelAr: 'الفروع وساعات العمل' },
    { id: 'payments', labelEn: 'Payment Methods', labelAr: 'طرق الدفع' },
    { id: 'support', labelEn: 'Emergencies & Support', labelAr: 'الدعم والطوارئ' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    if (activeCategory !== 'all' && faq.category !== activeCategory) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const qMatch = faq.question[language].toLowerCase().includes(q);
      const aMatch = faq.answer[language].toLowerCase().includes(q);
      if (!qMatch && !aMatch) return false;
    }
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      
      {/* Header */}
      <div className="space-y-2 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
          {language === 'ar' ? 'مركز المساعدة والاستفسارات' : 'Support Center'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight">
          {language === 'ar' ? 'الأسئلة الشائعة والأجوبة الطبية' : 'Frequently Asked Questions'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          {language === 'ar'
            ? 'إجابات واضحة ومفصلة حول حجز المواعيد، التغطية التأمينية، أطباء العيادة، ومواعيد عمل الفروع.'
            : 'Find answers regarding appointment scheduling through WhatsApp, insurance direct billing, branch facilities, and consultation preparation.'}
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md mx-auto">
        <Search className="w-4 h-4 text-slate-400 absolute ltr:left-3.5 rtl:right-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={language === 'ar' ? 'ابحث في الأسئلة الشائعة...' : 'Search questions...'}
          className="w-full ltr:pl-10 rtl:pr-10 pr-4 rtl:pl-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#159A91]"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100/80 rounded-xl">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeCategory === cat.id
                ? 'bg-white text-[#123047] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {language === 'ar' ? cat.labelAr : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Accordions */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div
              key={faq.id}
              className="border border-slate-200/90 rounded-2xl bg-white overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                className="w-full text-left rtl:text-right p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#123047] hover:bg-slate-50 transition-colors"
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
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer[language]}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* WhatsApp Help CTA */}
      <div className="p-6 rounded-2xl bg-[#E8F5F2] border border-[#159A91]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-sm text-[#123047]">
            {language === 'ar' ? 'هل لديك سؤال غير مدرج هنا؟' : 'Still have questions?'}
          </h3>
          <p className="text-xs text-slate-600 mt-0.5">
            {language === 'ar'
              ? 'تواصل مباشرة مع منسق الرعاية في عيادة النورة عبر الواتساب.'
              : 'Our patient care coordinators are ready to assist you directly via WhatsApp.'}
          </p>
        </div>
        <a
          href={getQuickChatWhatsAppUrl(language)}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 transition-colors shrink-0 shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>{language === 'ar' ? 'محادثة فورية بالواتساب' : 'Chat via WhatsApp'}</span>
        </a>
      </div>

    </div>
  );
};

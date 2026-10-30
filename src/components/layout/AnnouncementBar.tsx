import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, AlertCircle, Globe } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <div className="bg-[#123047] text-white border-b border-white/10 text-xs py-2 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Insurance Notice & Emergency Info */}
        <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="hidden md:inline-flex items-center gap-1.5 text-white/90">
            <span className="w-1.5 h-1.5 rounded-full bg-[#159A91]" aria-hidden="true" />
            {t('announcement_text')}
          </span>
          <span className="inline-flex md:hidden items-center gap-1.5 text-white/90">
            <span className="w-1.5 h-1.5 rounded-full bg-[#159A91]" aria-hidden="true" />
            {t('announcement_emergency')}
          </span>
        </div>

        {/* Right: Phone & Language switcher */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="tel:+97148002568"
            className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            title="Call Clinic Reception"
          >
            <Phone className="w-3 h-3 text-[#159A91]" aria-hidden="true" />
            <span className="font-medium tracking-tight">800-ALNURA (2568)</span>
          </a>

          <div className="hidden sm:block text-white/30">|</div>

          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#159A91]"
            aria-label={`Switch language to ${language === 'en' ? 'Arabic' : 'English'}`}
          >
            <Globe className="w-3 h-3 text-[#159A91]" aria-hidden="true" />
            <span className="font-semibold">{t('other_lang_name')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

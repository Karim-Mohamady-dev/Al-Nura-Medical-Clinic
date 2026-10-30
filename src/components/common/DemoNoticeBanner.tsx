import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SITE_CONFIG } from '../../config/site';
import { Info } from 'lucide-react';

export const DemoNoticeBanner: React.FC = () => {
  const { language } = useLanguage();

  return (
    <aside aria-label="Demonstration Notice" className="bg-[#123047] text-white/90 text-xs py-2 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-[#159A91] shrink-0" aria-hidden="true" />
          <span className="font-medium tracking-wide">
            {SITE_CONFIG.isDemoNotice[language]}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-white/70 text-[11px] shrink-0">
          <span>WhatsApp: +20 101 723 8942</span>
          <span>·</span>
          <span>UAE Outpatient Practice</span>
        </div>
      </div>
    </aside>
  );
};

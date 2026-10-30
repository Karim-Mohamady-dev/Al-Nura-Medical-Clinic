import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Calendar, MessageSquare, Phone } from 'lucide-react';
import { getQuickChatWhatsAppUrl } from '../../config/whatsapp';

interface MobileBottomBarProps {
  onNavigate: (page: string) => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg"
      style={{ maxHeight: '14vh' }}
      role="region"
      aria-label="Mobile quick actions"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* WhatsApp Direct Chat */}
        <a
          href={getQuickChatWhatsAppUrl(language)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span className="truncate">{t('sticky_whatsapp_chat')}</span>
        </a>

        {/* Book Appointment CTA */}
        <button
          onClick={() => {
            onNavigate('booking');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#123047] hover:bg-[#159A91] text-white text-xs font-semibold shadow-sm transition-colors"
          aria-label="Book appointment"
        >
          <Calendar className="w-4 h-4 text-[#159A91] shrink-0" />
          <span className="truncate">{t('sticky_book_appointment')}</span>
        </button>

        {/* Quick Call */}
        <a
          href="tel:+97148002568"
          className="p-2.5 rounded-xl bg-slate-100 text-[#123047] hover:bg-slate-200 transition-colors shrink-0"
          aria-label="Call clinic reception"
          title="Call 800-ALNURA"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

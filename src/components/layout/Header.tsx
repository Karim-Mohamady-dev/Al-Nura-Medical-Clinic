import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, Calendar, MessageSquare, ChevronDown, Sparkles } from 'lucide-react';
import { WHATSAPP_CONFIG, getQuickChatWhatsAppUrl } from '../../config/whatsapp';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, params?: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { t, language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const mainNavItems = [
    { id: 'doctors', label: t('nav_doctors') },
    { id: 'specialties', label: t('nav_specialties') },
    { id: 'services', label: t('nav_services') },
    { id: 'branches', label: t('nav_branches') },
    { id: 'insurance', label: t('nav_insurance') },
  ];

  const secondaryNavItems = [
    { id: 'about', label: t('nav_about') },
    { id: 'resources', label: t('nav_resources') },
    { id: 'blog', label: t('nav_blog') },
    { id: 'faq', label: t('nav_faq') },
    { id: 'contact', label: t('nav_contact') },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAFCFB]/95 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left rtl:text-right flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none group"
          aria-label="Al Nura Medical Clinic Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#123047] to-[#159A91] flex items-center justify-center text-white shadow-sm group-hover:shadow transition-shadow">
            <span className="font-extrabold text-lg tracking-tight">N</span>
          </div>
          <div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-[#123047] block leading-tight">
              {language === 'ar' ? 'عيادة النورة الطبية' : 'Al Nura Medical Clinic'}
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-[#159A91] block uppercase tracking-wider">
              {language === 'ar' ? 'مركز تخصصي معتمد' : 'Specialized Healthcare UAE'}
            </span>
          </div>
        </button>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#243746]">
          {mainNavItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 text-sm ${
                  isActive
                    ? 'text-[#159A91] font-semibold border-b-2 border-[#159A91]'
                    : 'text-[#243746]/80 hover:text-[#123047]'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* More menu dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className="flex items-center gap-1 text-[#243746]/80 hover:text-[#123047] transition-colors whitespace-nowrap shrink-0 py-1"
              aria-expanded={moreDropdownOpen}
            >
              <span>{language === 'ar' ? 'المزيد' : 'More'}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {moreDropdownOpen && (
              <div className="absolute top-full ltr:right-0 rtl:left-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-50">
                {secondaryNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-left rtl:text-right px-4 py-2 text-sm text-[#243746] hover:bg-[#E8F5F2] hover:text-[#159A91] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick WhatsApp Link on Desktop */}
          <a
            href={getQuickChatWhatsAppUrl(language)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#159A91] bg-[#E8F5F2] hover:bg-[#159A91]/15 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="Chat via WhatsApp (+201017238942)"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          {/* Primary CTA: Book Appointment */}
          <button
            onClick={() => handleNavClick('booking')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#123047] hover:bg-[#159A91] active:scale-[0.98] rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4 text-[#159A91] group-hover:text-white" />
            <span>{t('action_book_appointment')}</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#123047] hover:bg-slate-100 transition-colors focus-visible:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-[#FAFCFB] px-4 pt-4 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {[...mainNavItems, ...secondaryNavItems].map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left rtl:text-right px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#159A91] text-white'
                      : 'text-[#243746] hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="text-xs font-semibold text-[#159A91] px-3 py-2 rounded-lg bg-[#E8F5F2]"
            >
              {language === 'en' ? 'تغيير اللغة إلى العربية' : 'Switch to English'}
            </button>

            <a
              href="tel:+97148002568"
              className="text-xs font-semibold text-[#123047] px-3 py-2 rounded-lg bg-slate-100"
            >
              800-ALNURA
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_CONFIG, getQuickChatWhatsAppUrl } from '../../config/whatsapp';
import { SITE_CONFIG } from '../../config/site';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();

  const handleLink = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#123047] text-white pt-16 pb-24 md:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#159A91] to-emerald-400 flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
                N
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight block">
                  {language === 'ar' ? 'عيادة النورة الطبية' : 'Al Nura Medical Clinic'}
                </span>
                <span className="text-xs text-[#159A91] block font-medium">
                  {SITE_CONFIG.tagline[language]}
                </span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              {t('footer_tagline')}
            </p>

            {/* Direct Contact Points */}
            <div className="pt-2 space-y-2 text-xs text-white/80">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#159A91] shrink-0" />
                <a href="tel:+97148002568" className="hover:text-white transition-colors">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getQuickChatWhatsAppUrl(language)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-mono"
                >
                  WhatsApp: {WHATSAPP_CONFIG.displayFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#159A91] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Emergency Hotline Box */}
            <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-white/80">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">
                  {language === 'ar' ? 'طوارئ الإسعاف الوطني: 998' : 'National Emergency Ambulance: 998'}
                </strong>
                <span className="text-[11px] text-white/60">
                  {t('footer_emergency_notice')}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t('footer_quick_links')}
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button onClick={() => handleLink('doctors')} className="hover:text-[#159A91] transition-colors">
                  {t('nav_doctors')}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('specialties')} className="hover:text-[#159A91] transition-colors">
                  {t('nav_specialties')}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-[#159A91] transition-colors">
                  {t('nav_services')}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('branches')} className="hover:text-[#159A91] transition-colors">
                  {t('nav_branches')}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('insurance')} className="hover:text-[#159A91] transition-colors">
                  {t('nav_insurance')}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('booking')} className="hover:text-[#159A91] transition-colors font-semibold text-white">
                  {t('nav_book_appointment')}
                </button>
              </li>
            </ul>
          </div>

          {/* Clinical Specialties */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t('footer_clinical_specialties')}
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button onClick={() => handleLink('specialties')} className="hover:text-[#159A91] transition-colors">
                  {language === 'ar' ? 'أمراض القلب والشرايين' : 'Cardiovascular Health'}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('specialties')} className="hover:text-[#159A91] transition-colors">
                  {language === 'ar' ? 'الجلدية والطب التجميلي' : 'Dermatology & Aesthetics'}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('specialties')} className="hover:text-[#159A91] transition-colors">
                  {language === 'ar' ? 'تقويم الأسنان الرقمي' : 'Digital Orthodontics'}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('specialties')} className="hover:text-[#159A91] transition-colors">
                  {language === 'ar' ? 'النساء والولادة وطب الأجنة' : 'Obstetrics & Gynecology'}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('specialties')} className="hover:text-[#159A91] transition-colors">
                  {language === 'ar' ? 'جراحة العظام والطب الرياضي' : 'Orthopedics & Sports Medicine'}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('specialties')} className="hover:text-[#159A91] transition-colors">
                  {language === 'ar' ? 'الفحوصات التنفيذية الشاملة' : 'Executive Health Screenings'}
                </button>
              </li>
            </ul>
          </div>

          {/* Branches & Operating Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t('footer_branches')}
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <div>
                <strong className="text-white block font-semibold">Downtown Dubai Flagship</strong>
                <span className="text-[11px] block text-white/60">Boulevard Plaza Tower 1 · Valet P1</span>
                <span className="text-[11px] block text-[#159A91]">Mon–Sat: 08:00 – 21:00</span>
              </div>
              <div>
                <strong className="text-white block font-semibold">Dubai Marina Wellness</strong>
                <span className="text-[11px] block text-white/60">Marina Promenade Tower · Walk</span>
                <span className="text-[11px] block text-[#159A91]">Daily: 08:30 – 20:30</span>
              </div>
              <div>
                <strong className="text-white block font-semibold">Abu Dhabi Al Maryah</strong>
                <span className="text-[11px] block text-white/60">Al Sila Tower, ADGM Square</span>
                <span className="text-[11px] block text-[#159A91]">Mon–Sat: 08:00 – 20:00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Demonstration Notices */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          
          <div className="space-y-1 text-center md:text-left rtl:md:text-right">
            <div>
              © 2026 {SITE_CONFIG.name[language]}. {t('footer_all_rights_reserved')}
            </div>
            <div className="text-[11px] text-white/40">
              {t('footer_demo_notice')}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/70">
            <button onClick={() => handleLink('legal-privacy')} className="hover:text-white transition-colors">
              {t('legal_privacy_policy')}
            </button>
            <span>·</span>
            <button onClick={() => handleLink('legal-terms')} className="hover:text-white transition-colors">
              {t('legal_terms_conditions')}
            </button>
            <span>·</span>
            <button onClick={() => handleLink('legal-disclaimer')} className="hover:text-white transition-colors">
              {t('legal_medical_disclaimer')}
            </button>
            <span>·</span>
            <button onClick={() => handleLink('legal-cancellation')} className="hover:text-white transition-colors">
              {t('legal_cancellation_policy')}
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

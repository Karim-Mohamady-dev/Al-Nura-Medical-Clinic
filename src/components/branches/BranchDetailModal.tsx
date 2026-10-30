import React, { useEffect } from 'react';
import { Branch } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { X, Calendar, MessageSquare, MapPin, Phone, Car, Accessibility, Clock, Navigation } from 'lucide-react';
import { BranchStatusBadge } from '../common/BranchStatusBadge';
import { getQuickChatWhatsAppUrl } from '../../config/whatsapp';

interface BranchDetailModalProps {
  branch: Branch | null;
  onClose: () => void;
  onBookAtBranch: (branchId: string, branch?: Branch) => void;
}

export const BranchDetailModal: React.FC<BranchDetailModalProps> = ({
  branch,
  onClose,
  onBookAtBranch,
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (!branch) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [branch, onClose]);

  if (!branch) return null;

  // Days order: 1 (Mon) to 6 (Sat) then 0 (Sun)
  const daysOrder = [1, 2, 3, 4, 5, 6, 0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative my-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 ltr:right-4 rtl:left-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with image */}
        <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
          <img
            src={branch.imageUrl}
            alt={branch.name[language]}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#123047] via-[#123047]/60 to-transparent" />
          <div className="absolute bottom-4 ltr:left-6 rtl:right-6 right-6">
            <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
              {branch.emirate[language]} · {branch.area[language]}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {branch.name[language]}
            </h3>
            <div className="mt-1">
              <BranchStatusBadge branch={branch} showDetails={false} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Address & Navigation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-start gap-2.5 text-xs text-slate-700">
              <MapPin className="w-4 h-4 text-[#159A91] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-semibold">{branch.fullAddress[language]}</strong>
                <span className="text-slate-500">{branch.phoneDisplay}</span>
              </div>
            </div>
            <a
              href={branch.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#123047] hover:bg-[#159A91] text-white text-xs font-medium transition-colors shrink-0"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'فتح في خرائط جوجل' : 'Google Maps'}</span>
            </a>
          </div>

          {/* Weekly Schedule Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#159A91]" />
              <span>{language === 'ar' ? 'ساعات العمل الأسبوعية (توقيت الإمارات)' : 'Weekly Operational Schedule (UAE Time)'}</span>
            </h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 text-xs">
              {daysOrder.map((dayIdx) => {
                const sched = branch.weeklySchedule[dayIdx];
                if (!sched) return null;
                return (
                  <div key={dayIdx} className="p-3 flex items-center justify-between hover:bg-slate-50/80 transition-colors">
                    <span className="font-semibold text-slate-900 w-28">
                      {sched.dayName[language]}
                    </span>
                    <div className="flex-1 text-right rtl:text-left">
                      {sched.isOpen ? (
                        sched.isShifted ? (
                          <span className="text-slate-700">
                            {sched.openTime} – {sched.closeTime} &amp; {sched.shift2OpenTime} – {sched.shift2CloseTime}
                          </span>
                        ) : (
                          <span className="text-slate-700">
                            {sched.openTime} – {sched.closeTime}
                          </span>
                        )
                      ) : (
                        <span className="text-amber-800 font-medium">
                          {language === 'ar' ? 'مغلق (عطلة أسبوعية)' : 'Closed'}
                        </span>
                      )}
                      {sched.note && (
                        <span className="block text-[11px] text-slate-400 mt-0.5">
                          {sched.note[language]}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Parking & Accessibility */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="font-semibold text-[#123047] flex items-center gap-1.5">
                <Car className="w-4 h-4 text-[#159A91]" />
                <span>{language === 'ar' ? 'مواقف السيارات وصف السيارات' : 'Valet & Visitor Parking'}</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                {branch.parkingInfo[language]}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="font-semibold text-[#123047] flex items-center gap-1.5">
                <Accessibility className="w-4 h-4 text-[#159A91]" />
                <span>{language === 'ar' ? 'تسهيلات أصحاب الهمم' : 'Accessibility Features'}</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                {branch.accessibilityInfo[language]}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => {
                onBookAtBranch(branch.id, branch);
                onClose();
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-[#123047] hover:bg-[#159A91] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#159A91]" />
              <span>{language === 'ar' ? 'حجز موعد في هذا الفرع' : 'Book at this Branch'}</span>
            </button>

            <a
              href={getQuickChatWhatsAppUrl(language, branch.name[language])}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'ar' ? 'تواصل عبر الواتساب' : 'WhatsApp Desk'}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

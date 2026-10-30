import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BRANCHES } from '../data/branches';
import { Branch } from '../types';
import { BranchStatusBadge } from '../components/common/BranchStatusBadge';
import {
  MapPin,
  Phone,
  MessageSquare,
  Navigation,
  Car,
  Accessibility,
  Clock,
  Calendar,
} from 'lucide-react';
import { getQuickChatWhatsAppUrl } from '../config/whatsapp';

interface BranchesPageProps {
  onSelectBranch: (branch: Branch) => void;
  onBookAtBranch: (branchId: string) => void;
}

export const Branches: React.FC<BranchesPageProps> = ({
  onSelectBranch,
  onBookAtBranch,
}) => {
  const { language } = useLanguage();
  const daysOrder = [1, 2, 3, 4, 5, 6, 0]; // Mon through Sun

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
          {language === 'ar' ? 'مواقعنا في دولة الإمارات' : 'UAE Center Network'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight">
          {language === 'ar' ? 'فروع العيادة ومواعيد العمل' : 'Branch Locations & Schedules'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          {language === 'ar'
            ? 'مراكزنا الطبية مجهزة بأعلى المعايير في داون تاون دبي وممشى مارينا وحي المارية المالي بأبوظبي مع خدمة صف السيارات وسهولة وصول كاملة.'
            : 'Find comprehensive details on our flagship outpatient centers in Downtown Dubai, Dubai Marina, and Abu Dhabi Al Maryah, complete with live UAE operating hours and parking guides.'}
        </p>
      </div>

      {/* Branches List */}
      <div className="space-y-12">
        {BRANCHES.map((branch) => (
          <div
            key={branch.id}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Left Photo & Badges */}
            <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[280px]">
              <img
                src={branch.imageUrl}
                alt={branch.name[language]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 ltr:left-4 rtl:right-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#123047] text-white shadow-sm">
                  {branch.emirate[language]}
                </span>
              </div>
              <div className="absolute bottom-4 ltr:left-4 rtl:right-4 text-white lg:hidden">
                <h3 className="text-lg font-bold">{branch.name[language]}</h3>
              </div>
            </div>

            {/* Right Information & Schedule */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                
                {/* Header & Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-[#123047]">
                      {branch.name[language]}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {branch.area[language]}
                    </p>
                  </div>
                  <div>
                    <BranchStatusBadge branch={branch} showDetails={true} />
                  </div>
                </div>

                {/* Address & Contacts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div className="flex items-start gap-2 text-slate-700">
                    <MapPin className="w-4 h-4 text-[#159A91] shrink-0 mt-0.5" />
                    <span className="leading-snug">{branch.fullAddress[language]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-4 h-4 text-[#159A91] shrink-0" />
                    <a href={`tel:${branch.phone}`} className="font-semibold text-[#123047] hover:underline">
                      {branch.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Weekly Operating Hours Compact Table */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#159A91]" />
                    <span>{language === 'ar' ? 'ساعات العمل الأسبوعية (بتوقيت دولة الإمارات)' : 'Weekly Schedule (UAE Time)'}</span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {daysOrder.map((dayIdx) => {
                      const sched = branch.weeklySchedule[dayIdx];
                      if (!sched) return null;
                      return (
                        <div key={dayIdx} className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                          <div className="font-bold text-slate-800 text-[11px]">
                            {sched.dayName[language]}
                          </div>
                          <div className="text-[11px] text-slate-600 mt-0.5">
                            {sched.isOpen ? (
                              <span>{sched.openTime} - {sched.closeTime}</span>
                            ) : (
                              <span className="text-amber-800 font-medium">
                                {language === 'ar' ? 'مغلق' : 'Closed'}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Parking & Accessibility */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <Car className="w-4 h-4 text-[#159A91] shrink-0 mt-0.5" />
                    <span className="text-[11px]">{branch.parkingInfo[language]}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Accessibility className="w-4 h-4 text-[#159A91] shrink-0 mt-0.5" />
                    <span className="text-[11px]">{branch.accessibilityInfo[language]}</span>
                  </div>
                </div>

              </div>

              {/* CTAs */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onBookAtBranch(branch.id)}
                  className="py-2.5 px-4 rounded-xl bg-[#123047] hover:bg-[#159A91] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#159A91]" />
                  <span>{language === 'ar' ? 'حجز موعد في هذا الفرع' : 'Book at Branch'}</span>
                </button>

                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#159A91]" />
                  <span>{language === 'ar' ? 'خرائط جوجل' : 'Directions'}</span>
                </a>

                <a
                  href={getQuickChatWhatsAppUrl(language, branch.name[language])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'واتساب الفرع' : 'WhatsApp'}</span>
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

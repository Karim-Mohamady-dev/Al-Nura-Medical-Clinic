import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MEDICAL_SERVICES } from '../data/services';
import { SPECIALTIES } from '../data/specialties';
import { MedicalService } from '../types';
import { Clock, CheckCircle2, Search, ChevronRight, MessageSquare, Calendar } from 'lucide-react';
import { getQuickChatWhatsAppUrl } from '../config/whatsapp';

interface ServicesPageProps {
  onSelectService: (service: MedicalService) => void;
  onBookService: (serviceId: string, specialtyId: string) => void;
}

export const Services: React.FC<ServicesPageProps> = ({
  onSelectService,
  onBookService,
}) => {
  const { language } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const filteredServices = MEDICAL_SERVICES.filter((srv) => {
    if (selectedSpecialty && srv.specialtyId !== selectedSpecialty) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const titleMatch = srv.title[language].toLowerCase().includes(q);
      const descMatch = srv.description[language].toLowerCase().includes(q);
      const benMatch = srv.benefits.some((b) => b[language].toLowerCase().includes(q));
      if (!titleMatch && !descMatch && !benMatch) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
          {language === 'ar' ? 'الخدمات والإجراءات التشخيصية' : 'Diagnostic Protocols & Therapies'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight">
          {language === 'ar' ? 'الخدمات الطبية والفحوصات التخصصية' : 'Clinical Services & Treatments'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          {language === 'ar'
            ? 'نقدم باقة واسعة من الفحوصات الطبية المتقدمة والبروتوكولات الوقائية المصممة وفق أعلى المعايير لضمان صحتك وسلامتك.'
            : 'Explore our precision medical services, from executive cardiology audits and digital mole mapping to regenerative joint injections and 4D prenatal imaging.'}
        </p>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute ltr:left-3.5 rtl:right-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={language === 'ar' ? 'ابحث عن خدمة أو فحص طبي...' : 'Search clinical service or test...'}
            className="w-full ltr:pl-10 rtl:pr-10 pr-4 rtl:pl-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#159A91]"
          />
        </div>

        <select
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
          className="py-2.5 px-3 rounded-xl border border-slate-200 text-xs bg-white text-slate-800 focus:border-[#159A91] focus:outline-none max-w-xs"
        >
          <option value="">{language === 'ar' ? 'جميع التخصصات' : 'All Specialties'}</option>
          {SPECIALTIES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name[language]}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredServices.map((srv) => (
          <div
            key={srv.id}
            className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-semibold text-[#159A91]">
                  {language === 'ar' ? 'رعاية تخصصية' : 'Specialized Care'}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-medium">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{srv.durationMinutes} {language === 'ar' ? 'دقيقة تقريباً' : 'mins est.'}</span>
                </span>
              </div>

              <h3
                onClick={() => onSelectService(srv)}
                className="text-lg font-bold text-[#123047] group-hover:text-[#159A91] transition-colors cursor-pointer"
              >
                {srv.title[language]}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {srv.description[language]}
              </p>

              {/* Benefits */}
              <div className="mt-4 space-y-1.5">
                {srv.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#159A91] shrink-0 mt-0.5" />
                    <span>{b[language]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => onSelectService(srv)}
                className="text-xs font-semibold text-[#159A91] hover:underline flex items-center gap-1"
              >
                <span>{language === 'ar' ? 'تعليمات الاستعداد والتفاصيل' : 'Preparation & FAQs'}</span>
                <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>

              <button
                onClick={() => onBookService(srv.id, srv.specialtyId)}
                className="py-2 px-4 rounded-xl bg-[#123047] hover:bg-[#159A91] text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-[#159A91]" />
                <span>{language === 'ar' ? 'حجز الفحص' : 'Book Test'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SPECIALTIES } from '../data/specialties';
import { Specialty } from '../types';
import {
  HeartPulse,
  Sparkles,
  Smile,
  Baby,
  Activity,
  Bone,
  Stethoscope,
  ChevronRight,
  Search,
} from 'lucide-react';

function renderSpecialtyIcon(iconName: string) {
  switch (iconName) {
    case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
    case 'Sparkles': return <Sparkles className="w-6 h-6" />;
    case 'Smile': return <Smile className="w-6 h-6" />;
    case 'Baby': return <Baby className="w-6 h-6" />;
    case 'Activity': return <Activity className="w-6 h-6" />;
    case 'Bone': return <Bone className="w-6 h-6" />;
    case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
    default: return <HeartPulse className="w-6 h-6" />;
  }
}

interface SpecialtiesPageProps {
  onSelectSpecialty: (specialty: Specialty) => void;
  onBookAppointment: (specialtyId: string) => void;
}

export const Specialties: React.FC<SpecialtiesPageProps> = ({
  onSelectSpecialty,
  onBookAppointment,
}) => {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');

  const filteredSpecialties = SPECIALTIES.filter((s) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      s.name[language].toLowerCase().includes(q) ||
      s.shortDesc[language].toLowerCase().includes(q) ||
      s.conditions.some((c) => c[language].toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
          {language === 'ar' ? 'الرعاية التخصصية الشاملة' : 'Comprehensive Clinical Disciplines'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight">
          {language === 'ar' ? 'التخصصات والأقسام الطبية' : 'Medical Specialties Directory'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          {language === 'ar'
            ? 'نقدم رعاية تخصصية شاملة في ١٢ قسماً طبياً مجهزاً بأحدث التقنيات وأفضل الكوادر الطبية والاستشارية.'
            : 'Explore our 12 accredited clinical departments delivering personalized patient care, specialized procedures, and diagnostic precision.'}
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute ltr:left-3.5 rtl:right-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={language === 'ar' ? 'ابحث عن تخصص أو حالة طبية...' : 'Search specialty or treated condition...'}
          className="w-full ltr:pl-10 rtl:pr-10 pr-4 rtl:pl-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#159A91]"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSpecialties.map((spec) => (
          <div
            key={spec.id}
            onClick={() => onSelectSpecialty(spec)}
            className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#159A91]/40 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E8F5F2] text-[#159A91] flex items-center justify-center mb-4 group-hover:bg-[#159A91] group-hover:text-white transition-colors">
                {renderSpecialtyIcon(spec.iconName)}
              </div>
              <h3 className="text-base font-bold text-[#123047] group-hover:text-[#159A91] transition-colors">
                {spec.name[language]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {spec.shortDesc[language]}
              </p>

              {/* Conditions */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {spec.conditions.slice(0, 3).map((cond, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                  >
                    {cond[language]}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs font-semibold text-[#159A91] pt-2">
              <span>{language === 'ar' ? 'عرض التخصص والأطباء' : 'View Discipline Details'}</span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

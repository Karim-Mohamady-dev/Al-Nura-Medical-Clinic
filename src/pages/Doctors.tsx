import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DOCTORS } from '../data/doctors';
import { SPECIALTIES } from '../data/specialties';
import { BRANCHES } from '../data/branches';
import { Doctor } from '../types';
import {
  Search,
  Filter,
  X,
  MessageSquare,
  Globe,
  Award,
  Calendar,
  SlidersHorizontal,
  ChevronDown,
} from 'lucide-react';
import { buildAppointmentMessageEn, buildAppointmentMessageAr, generateWhatsAppUrl } from '../config/whatsapp';

interface DoctorsPageProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onBookAppointment: (doctorId: string, specialtyId: string) => void;
  initialSpecialtyFilter?: string;
  initialBranchFilter?: string;
}

export const Doctors: React.FC<DoctorsPageProps> = ({
  onSelectDoctor,
  onBookAppointment,
  initialSpecialtyFilter = '',
  initialBranchFilter = '',
}) => {
  const { t, language } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialtyFilter);
  const [selectedBranch, setSelectedBranch] = useState(initialBranchFilter);
  const [selectedGender, setSelectedGender] = useState<'all' | 'female' | 'male'>('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedConsultationType, setSelectedConsultationType] = useState('all');
  const [sortBy, setSortBy] = useState<'experience' | 'name'>('experience');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Available spoken languages in dataset
  const availableLanguages = ['Arabic', 'English', 'French', 'German', 'Spanish'];

  // Filter & Sort Logic (Pure Frontend)
  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter((doc) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = doc.name[language].toLowerCase().includes(q);
        const titleMatch = doc.title[language].toLowerCase().includes(q);
        const specMatch = doc.specialtyName[language].toLowerCase().includes(q);
        const condMatch = doc.conditionsTreated.some((c) =>
          c[language].toLowerCase().includes(q)
        );
        const expMatch = doc.expertise.some((e) =>
          e[language].toLowerCase().includes(q)
        );

        if (!nameMatch && !titleMatch && !specMatch && !condMatch && !expMatch) {
          return false;
        }
      }

      // 2. Specialty Filter
      if (selectedSpecialty && doc.specialtyId !== selectedSpecialty) {
        return false;
      }

      // 3. Branch Filter
      if (selectedBranch && !doc.branchIds.includes(selectedBranch)) {
        return false;
      }

      // 4. Gender Filter
      if (selectedGender !== 'all' && doc.gender !== selectedGender) {
        return false;
      }

      // 5. Language Filter
      if (selectedLanguage !== 'all' && !doc.languages.includes(selectedLanguage)) {
        return false;
      }

      // 6. Consultation Type Filter
      if (
        selectedConsultationType !== 'all' &&
        !doc.consultationTypes.includes(selectedConsultationType as any)
      ) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'experience') {
        return b.experienceYears - a.experienceYears;
      } else {
        return a.name[language].localeCompare(b.name[language]);
      }
    });
  }, [
    searchQuery,
    selectedSpecialty,
    selectedBranch,
    selectedGender,
    selectedLanguage,
    selectedConsultationType,
    sortBy,
    language,
  ]);

  const activeFiltersCount = [
    selectedSpecialty,
    selectedBranch,
    selectedGender !== 'all',
    selectedLanguage !== 'all',
    selectedConsultationType !== 'all',
  ].filter(Boolean).length;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedSpecialty('');
    setSelectedBranch('');
    setSelectedGender('all');
    setSelectedLanguage('all');
    setSelectedConsultationType('all');
    setSortBy('experience');
  };

  const handleWhatsAppBooking = (doc: Doctor) => {
    const today = new Date().toISOString().split('T')[0];
    const message = language === 'ar'
      ? buildAppointmentMessageAr({
          patientName: '[اسم المريض]',
          phone: '[رقم الهاتف]',
          specialty: doc.specialtyName.ar,
          doctor: doc.name.ar,
          branch: 'داون تاون دبي / مارينا',
          preferredDate: today,
          preferredTime: 'صباحاً أو مساءً',
          appointmentType: 'استشارة طبية',
          isExistingPatient: false,
        })
      : buildAppointmentMessageEn({
          patientName: '[Patient Name]',
          phone: '[Phone Number]',
          specialty: doc.specialtyName.en,
          doctor: doc.name.en,
          branch: 'Downtown Dubai / Marina',
          preferredDate: today,
          preferredTime: 'Morning or Afternoon',
          appointmentType: 'Consultation',
          isExistingPatient: false,
        });

    window.open(generateWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      
      {/* Page Header */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
          {language === 'ar' ? 'الكوادر الطبية المعتمدة' : 'Clinical Faculty Directory'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight">
          {language === 'ar' ? 'دليل الأطباء والاستشاريين' : 'Find Your Medical Specialist'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          {language === 'ar'
            ? 'تصفح قائمة استشاريينا في فروع دبي وأبوظبي، مع إمكانية التصفية حسب التخصص، الفرع، واللغة وحجز الموعد مباشرة عبر الواتساب.'
            : 'Explore our specialized outpatient medical faculty across Dubai and Abu Dhabi. Filter by specialty, location, or spoken language with instant WhatsApp booking.'}
        </p>
        <div className="pt-1">
          <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-slate-100/90 border border-slate-200 text-[11px] text-slate-600">
            <span className="font-bold text-slate-800">
              {language === 'ar' ? 'ملاحظة توضيحية:' : 'Demonstration Note:'}
            </span>
            <span>
              {language === 'ar'
                ? 'الملفات الشخصية والمؤهلات والمواعيد معروضة كنماذج استعراضية تجريبية لأغراض تقييم المنصة.'
                : 'Physician profiles, qualifications, and schedules are illustrative samples provided for system demonstration and clinic evaluation.'}
            </span>
          </div>
        </div>
      </div>

      {/* Search & Filter Controls Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-sm space-y-4">
        
        {/* Top Search Input & Mobile Filter Toggle */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute ltr:left-3.5 rtl:right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('filter_search_placeholder')}
              className="w-full ltr:pl-10 rtl:pr-10 pr-4 rtl:pl-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#159A91] focus:ring-1 focus:ring-[#159A91] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute ltr:right-3 rtl:left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="lg:hidden flex items-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-semibold text-[#123047] hover:bg-slate-50 transition-colors shrink-0"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#159A91]" />
            <span>{t('action_filter')}</span>
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#159A91] text-white text-[10px] flex items-center justify-center font-bold">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        {/* Desktop Filter Row */}
        <div className="hidden lg:grid grid-cols-6 gap-3 pt-2 text-xs">
          
          {/* Specialty Dropdown */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              {t('booking_field_specialty')}
            </label>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full py-2 px-2.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-800 focus:border-[#159A91] focus:outline-none"
            >
              <option value="">{t('filter_all_specialties')}</option>
              {SPECIALTIES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name[language]}
                </option>
              ))}
            </select>
          </div>

          {/* Branch Dropdown */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              {t('booking_field_branch')}
            </label>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full py-2 px-2.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-800 focus:border-[#159A91] focus:outline-none"
            >
              <option value="">{t('filter_all_branches')}</option>
              {BRANCHES.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name[language]}
                </option>
              ))}
            </select>
          </div>

          {/* Gender Filter */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              {t('filter_gender')}
            </label>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value as any)}
              className="w-full py-2 px-2.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-800 focus:border-[#159A91] focus:outline-none"
            >
              <option value="all">{t('filter_gender_all')}</option>
              <option value="female">{t('filter_gender_female')}</option>
              <option value="male">{t('filter_gender_male')}</option>
            </select>
          </div>

          {/* Language Filter */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              {t('filter_language')}
            </label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full py-2 px-2.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-800 focus:border-[#159A91] focus:outline-none"
            >
              <option value="all">{t('filter_language_all')}</option>
              {availableLanguages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          {/* Consultation Format */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              {t('filter_consultation_type')}
            </label>
            <select
              value={selectedConsultationType}
              onChange={(e) => setSelectedConsultationType(e.target.value)}
              className="w-full py-2 px-2.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-800 focus:border-[#159A91] focus:outline-none"
            >
              <option value="all">{t('filter_consultation_all')}</option>
              <option value="in-person">{language === 'ar' ? 'استشارة حضورية' : 'In-Person Consultation'}</option>
              <option value="telehealth">{language === 'ar' ? 'استشارة عن بُعد' : 'Telehealth Remote'}</option>
              <option value="second-opinion">{language === 'ar' ? 'رأي طبي ثانٍ' : 'Second Opinion'}</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">
              {t('filter_sort_by')}
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full py-2 px-2.5 rounded-lg border border-slate-200 text-xs bg-white text-slate-800 focus:border-[#159A91] focus:outline-none font-medium"
            >
              <option value="experience">{t('filter_sort_experience')}</option>
              <option value="name">{t('filter_sort_name')}</option>
            </select>
          </div>

        </div>

        {/* Mobile Filter Drawer */}
        {mobileFilterOpen && (
          <div className="lg:hidden pt-4 border-t border-slate-200 space-y-3 text-xs">
            <div>
              <label className="block font-semibold text-slate-600 mb-1">
                {t('booking_field_specialty')}
              </label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-white"
              >
                <option value="">{t('filter_all_specialties')}</option>
                {SPECIALTIES.map((s) => (
                  <option key={s.id} value={s.id}>{s.name[language]}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-600 mb-1">
                {t('booking_field_branch')}
              </label>
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-white"
              >
                <option value="">{t('filter_all_branches')}</option>
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>{b.name[language]}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-600 mb-1">
                  {t('filter_gender')}
                </label>
                <select
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-white"
                >
                  <option value="all">{t('filter_gender_all')}</option>
                  <option value="female">{t('filter_gender_female')}</option>
                  <option value="male">{t('filter_gender_male')}</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-600 mb-1">
                  {t('filter_sort_by')}
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-white"
                >
                  <option value="experience">{t('filter_sort_experience')}</option>
                  <option value="name">{t('filter_sort_name')}</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={handleResetFilters}
                className="text-xs text-rose-600 font-semibold underline"
              >
                {t('action_clear_filters')}
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="py-2 px-4 rounded-xl bg-[#123047] text-white text-xs font-semibold"
              >
                {language === 'ar' ? 'عرض النتائج' : 'Apply Filters'}
              </button>
            </div>
          </div>
        )}

        {/* Results Counter & Active Filter Indicators */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-100">
          <div>
            {t('filter_results_count', { count: filteredDoctors.length })}
          </div>

          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-slate-400">
                {activeFiltersCount} {language === 'ar' ? 'فلاتر مفعلة' : 'active filters'}
              </span>
              <button
                onClick={handleResetFilters}
                className="text-[#159A91] hover:underline font-semibold"
              >
                {t('action_clear_filters')}
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Doctor Cards Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => {
            const affiliatedBranches = BRANCHES.filter((b) => doc.branchIds.includes(b.id));

            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Doctor Portrait & Info */}
                <div>
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={doc.avatarUrl}
                      alt={doc.name[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 ltr:left-3 rtl:right-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#123047]/90 text-white shadow-sm">
                        {doc.specialtyName[language]}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div>
                      <h3 className="text-lg font-bold text-[#123047] leading-snug">
                        {doc.name[language]}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {doc.title[language]}
                      </p>
                    </div>

                    <div className="text-xs font-semibold text-[#159A91]">
                      {doc.qualifications[language]}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-1">
                      <span className="flex items-center gap-1 font-medium text-slate-700">
                        <Award className="w-3.5 h-3.5 text-amber-500" />
                        <span>{doc.experienceYears} {language === 'ar' ? 'سنة خبرة' : 'yrs exp'}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5 text-sky-500" />
                        <span>{doc.languages.join(', ')}</span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed pt-1">
                      {doc.bio[language]}
                    </p>

                    {/* Affiliated Branches */}
                    <div className="pt-2 flex flex-wrap gap-1 text-[11px] text-slate-500">
                      {affiliatedBranches.map((b) => (
                        <span key={b.id} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {b.area[language]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions: View Profile & WhatsApp Appointment */}
                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={() => onSelectDoctor(doc)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#123047] text-xs font-semibold transition-colors"
                  >
                    {t('action_view_profile')}
                  </button>

                  <button
                    onClick={() => handleWhatsAppBooking(doc)}
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'حجز موعد عبر الواتساب' : 'WhatsApp Appointment'}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#123047]">{t('filter_empty_title')}</h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            {t('filter_empty_desc')}
          </p>
          <button
            onClick={handleResetFilters}
            className="py-2 px-5 rounded-xl bg-[#159A91] hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
          >
            {t('action_clear_filters')}
          </button>
        </div>
      )}

    </div>
  );
};

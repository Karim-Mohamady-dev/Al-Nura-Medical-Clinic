import React, { useState, useEffect, useId } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SPECIALTIES } from '../data/specialties';
import { DOCTORS } from '../data/doctors';
import { BRANCHES } from '../data/branches';
import { AppointmentFormData } from '../types';
import {
  Calendar,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Clock,
  User,
  Phone,
  Mail,
  AlertCircle,
  ArrowRight,
  Edit2,
  ExternalLink,
  X,
} from 'lucide-react';
import {
  WHATSAPP_CONFIG,
  buildAppointmentMessageEn,
  buildAppointmentMessageAr,
  generateWhatsAppUrl,
} from '../config/whatsapp';

interface BookingPageProps {
  initialDoctorId?: string;
  initialSpecialtyId?: string;
  initialBranchId?: string;
  onClose?: () => void;
}

export const Booking: React.FC<BookingPageProps> = ({
  initialDoctorId = '',
  initialSpecialtyId = '',
  initialBranchId = '',
  onClose,
}) => {
  const { t, language } = useLanguage();

  // Form State (React State Only - NO Storage, NO Backend)
  const [formData, setFormData] = useState<AppointmentFormData>({
    specialtyId: initialSpecialtyId || (initialDoctorId ? DOCTORS.find((d) => d.id === initialDoctorId)?.specialtyId || '' : ''),
    doctorId: initialDoctorId || '',
    branchId: initialBranchId || '',
    preferredDate: '',
    preferredTime: 'morning',
    patientName: '',
    phone: '',
    email: '',
    isExistingPatient: false,
    appointmentType: 'consultation',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [hasLaunchedWhatsApp, setHasLaunchedWhatsApp] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  const handleCloseModal = () => {
    setShowSummaryModal(false);
    if (hasLaunchedWhatsApp) {
      // Clear sensitive form state when booking request has been initiated
      setFormData({
        specialtyId: '',
        doctorId: '',
        branchId: '',
        preferredDate: '',
        preferredTime: 'morning',
        patientName: '',
        phone: '',
        email: '',
        isExistingPatient: false,
        appointmentType: 'consultation',
        notes: '',
      });
      setErrors({});
      setHasLaunchedWhatsApp(false);
      setGeneratedWhatsAppUrl('');
      if (onClose) {
        onClose();
      }
    }
  };

  useEffect(() => {
    if (!showSummaryModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSummaryModal, hasLaunchedWhatsApp]);

  // Time slot options
  const timeSlots = [
    { id: 'morning', labelEn: 'Morning (08:30 – 12:00)', labelAr: 'الفترة الصباحية (٠٨:٣٠ – ١٢:٠٠)' },
    { id: 'midday', labelEn: 'Midday (12:00 – 15:30)', labelAr: 'فترة الظهيرة (١٢:٠٠ – ١٥:٣٠)' },
    { id: 'afternoon', labelEn: 'Afternoon (15:30 – 18:00)', labelAr: 'فترة العصر (١٥:٣٠ – ١٨:٠٠)' },
    { id: 'evening', labelEn: 'Evening (18:00 – 21:00)', labelAr: 'الفترة المسائية (١٨:٠٠ – ٢١:٠٠)' },
  ];

  // Appointment types
  const appointmentTypes = [
    { id: 'consultation', label: t('booking_type_consultation') },
    { id: 'followup', label: t('booking_type_followup') },
    { id: 'second-opinion', label: t('booking_type_second_opinion') },
    { id: 'telehealth', label: t('booking_type_telehealth') },
  ];

  // Doctors filtered by selected specialty
  const availableDoctors = formData.specialtyId
    ? DOCTORS.filter((d) => d.specialtyId === formData.specialtyId)
    : DOCTORS;

  // Selected object helpers
  const selectedSpecialtyObj = SPECIALTIES.find((s) => s.id === formData.specialtyId);
  const selectedDoctorObj = DOCTORS.find((d) => d.id === formData.doctorId);
  const selectedBranchObj = BRANCHES.find((b) => b.id === formData.branchId);

  // Tomorrow as minimum booking date
  const todayStr = new Date().toISOString().split('T')[0];

  // Field validation
  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.patientName.trim()) {
      errs.patientName = t('booking_validation_name');
    } else if (formData.patientName.trim().length < 3) {
      errs.patientName = language === 'ar' ? 'الاسم يجب أن يحتوي على ٣ أحرف على الأقل.' : 'Name must be at least 3 characters.';
    }

    if (!formData.phone.trim()) {
      errs.phone = t('booking_validation_phone');
    } else if (!/^[+]?[\d\s-]{8,18}$/.test(formData.phone.trim())) {
      errs.phone = language === 'ar' ? 'يرجى إدخال رقم هاتف صحيح مع رمز الدولة.' : 'Please enter a valid telephone format with country code.';
    }

    if (!formData.specialtyId) {
      errs.specialtyId = t('booking_validation_specialty');
    }

    if (!formData.branchId) {
      errs.branchId = t('booking_validation_branch');
    }

    if (!formData.preferredDate) {
      errs.preferredDate = t('booking_validation_date');
    }

    if (!formData.preferredTime) {
      errs.preferredTime = t('booking_validation_time');
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setShowSummaryModal(true);
    }
  };

  const handleConfirmAndLaunchWhatsApp = () => {
    const specialtyName = selectedSpecialtyObj
      ? selectedSpecialtyObj.name[language]
      : (language === 'ar' ? 'عام' : 'General');

    const doctorName = selectedDoctorObj
      ? selectedDoctorObj.name[language]
      : (language === 'ar' ? 'أي استشاري متاح' : 'Any Available Consultant');

    const branchName = selectedBranchObj
      ? selectedBranchObj.name[language]
      : (language === 'ar' ? 'أقرب فرع' : 'Nearest Branch');

    const selectedSlotObj = timeSlots.find((s) => s.id === formData.preferredTime);
    const timeLabel = selectedSlotObj
      ? (language === 'ar' ? selectedSlotObj.labelAr : selectedSlotObj.labelEn)
      : formData.preferredTime;

    const selectedTypeObj = appointmentTypes.find((a) => a.id === formData.appointmentType);
    const typeLabel = selectedTypeObj ? selectedTypeObj.label : formData.appointmentType;

    const message = language === 'ar'
      ? buildAppointmentMessageAr({
          patientName: formData.patientName.trim(),
          phone: formData.phone.trim(),
          specialty: specialtyName,
          doctor: doctorName,
          branch: branchName,
          preferredDate: formData.preferredDate,
          preferredTime: timeLabel,
          appointmentType: typeLabel,
          isExistingPatient: formData.isExistingPatient,
          notes: formData.notes.trim() || undefined,
        })
      : buildAppointmentMessageEn({
          patientName: formData.patientName.trim(),
          phone: formData.phone.trim(),
          specialty: specialtyName,
          doctor: doctorName,
          branch: branchName,
          preferredDate: formData.preferredDate,
          preferredTime: timeLabel,
          appointmentType: typeLabel,
          isExistingPatient: formData.isExistingPatient,
          notes: formData.notes.trim() || undefined,
        });

    const targetUrl = generateWhatsAppUrl(message);
    setGeneratedWhatsAppUrl(targetUrl);
    window.open(targetUrl, '_blank');
    setHasLaunchedWhatsApp(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      
      {/* Title & Guidelines Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left rtl:sm:text-right">
          <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
            {language === 'ar' ? 'خدمة المواعيد الفورية' : 'Instant Appointment Scheduling'}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight">
            {t('booking_page_title')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
            {t('booking_page_subtitle')}
          </p>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="self-start sm:self-center inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <span>{language === 'ar' ? '← العودة للصفحة السابقة' : '← Return to Previous Page'}</span>
          </button>
        )}
      </div>

      {/* Transparent Disclaimer Box */}
      <div className="p-4 rounded-2xl bg-[#E8F5F2] border border-[#159A91]/30 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#159A91] shrink-0 mt-0.5" />
        <div className="text-xs text-[#123047] space-y-1">
          <strong className="block font-bold">
            {language === 'ar' ? 'الخصوصية وعدم تخزين البيانات الشخصية' : 'Zero-Storage Privacy Assurance'}
          </strong>
          <p className="text-slate-600 leading-relaxed">
            {t('booking_disclaimer_notice')}
          </p>
        </div>
      </div>

      {/* Main Booking Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8">
        
        {/* Step 1: Specialty & Doctor */}
        <div className="space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#123047]">
              {t('booking_step_1')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Specialty Field */}
            <div>
              <label htmlFor="booking-specialty-select" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t('booking_field_specialty')} <span className="text-rose-500">*</span>
              </label>
              <select
                id="booking-specialty-select"
                value={formData.specialtyId}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    specialtyId: e.target.value,
                    doctorId: '', // reset doctor if specialty changes
                  });
                  if (errors.specialtyId) setErrors({ ...errors, specialtyId: '' });
                }}
                className={`w-full p-3 rounded-xl border text-xs sm:text-sm bg-white text-slate-800 focus:outline-none focus:ring-1 ${
                  errors.specialtyId ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 focus:border-[#159A91] focus:ring-[#159A91]'
                }`}
              >
                <option value="">{t('booking_field_specialty_placeholder')}</option>
                {SPECIALTIES.map((spec) => (
                  <option key={spec.id} value={spec.id}>
                    {spec.name[language]}
                  </option>
                ))}
              </select>
              {errors.specialtyId && (
                <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.specialtyId}</span>
                </p>
              )}
            </div>

            {/* Doctor Field */}
            <div>
              <label htmlFor="booking-doctor-select" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t('booking_field_doctor')}
              </label>
              <select
                id="booking-doctor-select"
                value={formData.doctorId}
                onChange={(e) => {
                  setFormData({ ...formData, doctorId: e.target.value });
                  if (errors.doctorId) setErrors({ ...errors, doctorId: '' });
                }}
                className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white text-slate-800 focus:outline-none focus:border-[#159A91] focus:ring-1 focus:ring-[#159A91]"
              >
                <option value="">
                  {language === 'ar' ? 'أي استشاري متاح في هذا التخصص' : 'Any Available Consultant in Discipline'}
                </option>
                {availableDoctors.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name[language]} ({doc.qualifications[language]})
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Step 2: Branch & Preferred Date */}
        <div className="space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#123047]">
              {t('booking_step_2')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Branch Field */}
            <div>
              <label htmlFor="booking-branch-select" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t('booking_field_branch')} <span className="text-rose-500">*</span>
              </label>
              <select
                id="booking-branch-select"
                value={formData.branchId}
                onChange={(e) => {
                  setFormData({ ...formData, branchId: e.target.value });
                  if (errors.branchId) setErrors({ ...errors, branchId: '' });
                }}
                className={`w-full p-3 rounded-xl border text-xs sm:text-sm bg-white text-slate-800 focus:outline-none focus:ring-1 ${
                  errors.branchId ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 focus:border-[#159A91] focus:ring-[#159A91]'
                }`}
              >
                <option value="">{t('booking_field_branch_placeholder')}</option>
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name[language]} ({b.emirate[language]})
                  </option>
                ))}
              </select>
              {errors.branchId && (
                <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.branchId}</span>
                </p>
              )}
            </div>

            {/* Date Field */}
            <div>
              <label htmlFor="booking-date-input" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t('booking_field_date')} <span className="text-rose-500">*</span>
              </label>
              <input
                id="booking-date-input"
                type="date"
                min={todayStr}
                value={formData.preferredDate}
                onChange={(e) => {
                  setFormData({ ...formData, preferredDate: e.target.value });
                  if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                }}
                className={`w-full p-3 rounded-xl border text-xs sm:text-sm bg-white text-slate-800 focus:outline-none focus:ring-1 ${
                  errors.preferredDate ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 focus:border-[#159A91] focus:ring-[#159A91]'
                }`}
              />
              {errors.preferredDate && (
                <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.preferredDate}</span>
                </p>
              )}
            </div>

            {/* Time Slot Field */}
            <div>
              <label htmlFor="booking-time-select" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t('booking_field_time')} <span className="text-rose-500">*</span>
              </label>
              <select
                id="booking-time-select"
                value={formData.preferredTime}
                onChange={(e) => {
                  setFormData({ ...formData, preferredTime: e.target.value });
                  if (errors.preferredTime) setErrors({ ...errors, preferredTime: '' });
                }}
                className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white text-slate-800 focus:outline-none focus:border-[#159A91] focus:ring-1 focus:ring-[#159A91]"
              >
                {timeSlots.map((ts) => (
                  <option key={ts.id} value={ts.id}>
                    {language === 'ar' ? ts.labelAr : ts.labelEn}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Step 3: Patient Information */}
        <div className="space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#123047]">
              {t('booking_step_3')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Full Name */}
            <div>
              <label htmlFor="booking-patient-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t('booking_field_patient_name')} <span className="text-rose-500">*</span>
              </label>
              <input
                id="booking-patient-name"
                type="text"
                placeholder={language === 'ar' ? 'الاسم الثلاثي أو الكامل...' : 'e.g. Mariam Al-Mansouri'}
                value={formData.patientName}
                onChange={(e) => {
                  setFormData({ ...formData, patientName: e.target.value });
                  if (errors.patientName) setErrors({ ...errors, patientName: '' });
                }}
                className={`w-full p-3 rounded-xl border text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 ${
                  errors.patientName ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 focus:border-[#159A91] focus:ring-[#159A91]'
                }`}
              />
              {errors.patientName && (
                <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.patientName}</span>
                </p>
              )}
            </div>

            {/* Mobile Phone */}
            <div>
              <label htmlFor="booking-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t('booking_field_phone')} <span className="text-rose-500">*</span>
              </label>
              <input
                id="booking-phone"
                type="tel"
                placeholder="+971 50 123 4567"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: '' });
                }}
                className={`w-full p-3 rounded-xl border text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 ${
                  errors.phone ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200 focus:border-[#159A91] focus:ring-[#159A91]'
                }`}
              />
              {errors.phone && (
                <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Email (Optional) */}
            <div>
              <label htmlFor="booking-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t('booking_field_email')}
              </label>
              <input
                id="booking-email"
                type="email"
                placeholder="name@example.ae"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#159A91] focus:ring-1 focus:ring-[#159A91]"
              />
            </div>

          </div>

          {/* Patient Status & Appointment Type Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* Patient Status Radio */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                {t('booking_field_patient_status')}
              </label>
              <div className="flex items-center gap-4">
                <label className="inline-flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="patientStatus"
                    checked={!formData.isExistingPatient}
                    onChange={() => setFormData({ ...formData, isExistingPatient: false })}
                    className="accent-[#159A91]"
                  />
                  <span>{t('booking_patient_new')}</span>
                </label>
                <label className="inline-flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="patientStatus"
                    checked={formData.isExistingPatient}
                    onChange={() => setFormData({ ...formData, isExistingPatient: true })}
                    className="accent-[#159A91]"
                  />
                  <span>{t('booking_patient_existing')}</span>
                </label>
              </div>
            </div>

            {/* Appointment Type */}
            <div>
              <label htmlFor="booking-appointment-type" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t('booking_field_appointment_type')}
              </label>
              <select
                id="booking-appointment-type"
                value={formData.appointmentType}
                onChange={(e) => setFormData({ ...formData, appointmentType: e.target.value as any })}
                className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white text-slate-800 focus:border-[#159A91] focus:outline-none"
              >
                {appointmentTypes.map((tItem) => (
                  <option key={tItem.id} value={tItem.id}>
                    {tItem.label}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Additional Notes */}
          <div>
            <label htmlFor="booking-notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
              {t('booking_field_notes')}
            </label>
            <textarea
              id="booking-notes"
              rows={3}
              placeholder={t('booking_field_notes_placeholder')}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#159A91] focus:outline-none focus:ring-1 focus:ring-[#159A91]"
            />
          </div>

        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center sm:text-left rtl:sm:text-right">
            <span>{language === 'ar' ? 'الوجهة الرسمية للواتساب:' : 'Official WhatsApp Destination:'} </span>
            <span className="font-bold text-[#123047] font-mono">{WHATSAPP_CONFIG.displayFormatted}</span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-[#123047] hover:bg-[#159A91] active:scale-[0.98] text-white text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>{language === 'ar' ? 'مراجعة الطلب وفتح الواتساب' : 'Review & Proceed to WhatsApp'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>

      </form>

      {/* SUMMARY & COMPLETION MODAL */}
      {showSummaryModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 relative my-6">
            
            {/* Dedicated Top Close X Button */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-5 ltr:right-5 rtl:left-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#159A91] cursor-pointer"
              aria-label={t('action_close')}
            >
              <X className="w-4 h-4" />
            </button>

            {!hasLaunchedWhatsApp ? (
              /* Review State (Before Launching WhatsApp) */
              <>
                {/* Modal Header */}
                <div className="space-y-1 pe-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
                    {language === 'ar' ? 'الخطوة الأخيرة' : 'Final Confirmation'}
                  </span>
                  <h3 className="text-xl font-bold text-[#123047]">
                    {t('booking_summary_title')}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {t('booking_summary_subtitle')}
                  </p>
                </div>

                {/* Summary Details Card */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-xs text-slate-700">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">{t('booking_field_patient_name')}:</span>
                    <span className="font-bold text-slate-900">{formData.patientName}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">{t('booking_field_phone')}:</span>
                    <span className="font-bold text-slate-900 font-mono">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">{t('booking_field_specialty')}:</span>
                    <span className="font-semibold text-slate-900">
                      {selectedSpecialtyObj ? selectedSpecialtyObj.name[language] : '—'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">{t('booking_field_doctor')}:</span>
                    <span className="font-semibold text-slate-900">
                      {selectedDoctorObj ? selectedDoctorObj.name[language] : (language === 'ar' ? 'أي استشاري متاح' : 'Any Available')}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">{t('booking_field_branch')}:</span>
                    <span className="font-semibold text-slate-900">
                      {selectedBranchObj ? selectedBranchObj.name[language] : '—'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">{t('booking_field_date')}:</span>
                    <span className="font-bold text-[#159A91]">{formData.preferredDate}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">{t('booking_field_time')}:</span>
                    <span className="font-semibold text-slate-900">
                      {timeSlots.find((s) => s.id === formData.preferredTime)?.[language === 'ar' ? 'labelAr' : 'labelEn']}
                    </span>
                  </div>
                  {formData.notes && (
                    <div className="py-1">
                      <span className="text-slate-400 font-medium block">{t('booking_field_notes')}:</span>
                      <span className="text-slate-600 block mt-0.5">{formData.notes}</span>
                    </div>
                  )}
                </div>

                {/* WhatsApp Instruction Notice */}
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                    <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp Destination: {WHATSAPP_CONFIG.displayFormatted}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-emerald-900/80">
                    {t('booking_whatsapp_instruction')}
                  </p>
                </div>

                {/* Notice */}
                <div className="text-[11px] text-slate-400 text-center leading-relaxed">
                  {t('booking_disclaimer_notice')}
                </div>

                {/* Modal Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSummaryModal(false)}
                    className="w-full sm:w-1/3 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {t('action_edit')}
                  </button>

                  <button
                    type="button"
                    onClick={handleConfirmAndLaunchWhatsApp}
                    className="w-full sm:w-2/3 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t('action_confirm_and_open_whatsapp')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </>
            ) : (
              /* Post-Submission Completion State */
              <>
                {/* Status Indicator Icon */}
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.25]" />
                </div>

                {/* Modal Header */}
                <div className="text-center space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    {language === 'ar' ? 'طلب جاهز في واتساب' : 'Request Ready in WhatsApp'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#123047]">
                    {t('booking_completion_title')}
                  </h3>
                </div>

                {/* Required Accurate Status Message */}
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm leading-relaxed text-center sm:text-left rtl:sm:text-right font-medium">
                  {t('booking_completion_desc')}
                </div>

                {/* Compact Details Summary */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">{t('booking_field_patient_name')}:</span>
                    <span className="font-bold text-slate-900">{formData.patientName}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">{t('booking_field_specialty')}:</span>
                    <span className="font-semibold text-slate-900">
                      {selectedSpecialtyObj ? selectedSpecialtyObj.name[language] : '—'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">{t('booking_field_doctor')}:</span>
                    <span className="font-semibold text-slate-900">
                      {selectedDoctorObj ? selectedDoctorObj.name[language] : (language === 'ar' ? 'أي استشاري متاح' : 'Any Available')}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">{t('booking_field_branch')}:</span>
                    <span className="font-semibold text-slate-900">
                      {selectedBranchObj ? selectedBranchObj.name[language] : '—'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400 font-medium">{t('booking_field_date')}:</span>
                    <span className="font-bold text-[#159A91]">
                      {formData.preferredDate} ({timeSlots.find((s) => s.id === formData.preferredTime)?.[language === 'ar' ? 'labelAr' : 'labelEn']})
                    </span>
                  </div>
                </div>

                {/* WhatsApp Status & Fallback Link */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>WhatsApp: {WHATSAPP_CONFIG.displayFormatted}</span>
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                      {language === 'ar' ? 'بانتظار إرسال الرسالة' : 'Awaiting Message Send'}
                    </span>
                  </div>
                  {generatedWhatsAppUrl && (
                    <a
                      href={generatedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#159A91] hover:underline flex items-center gap-1 font-semibold mt-1"
                    >
                      <span>{t('booking_whatsapp_fallback')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {/* Prominent Done - Close and Back Actions */}
                <div className="flex flex-col gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#123047] hover:bg-[#159A91] active:scale-[0.98] text-white text-sm font-bold shadow-lg shadow-slate-900/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t('action_done_close')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {t('action_back_to_website')}
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

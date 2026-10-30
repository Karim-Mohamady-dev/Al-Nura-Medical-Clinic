import React, { useEffect } from 'react';
import { Doctor } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { X, Calendar, MessageSquare, Award, Globe, Building2, CheckCircle2, Stethoscope } from 'lucide-react';
import { BRANCHES } from '../../data/branches';
import { buildAppointmentMessageEn, buildAppointmentMessageAr, generateWhatsAppUrl } from '../../config/whatsapp';

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBookAppointment: (doctorId: string, specialtyId: string, doctor?: Doctor) => void;
}

export const DoctorDetailModal: React.FC<DoctorDetailModalProps> = ({
  doctor,
  onClose,
  onBookAppointment,
}) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    if (!doctor) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [doctor, onClose]);

  if (!doctor) return null;

  const doctorBranches = BRANCHES.filter((b) => doctor.branchIds.includes(b.id));

  const handleQuickWhatsAppBook = () => {
    const today = new Date().toISOString().split('T')[0];
    const message = language === 'ar'
      ? buildAppointmentMessageAr({
          patientName: '[اسم المريض]',
          phone: '[رقم الهاتف]',
          specialty: doctor.specialtyName.ar,
          doctor: doctor.name.ar,
          branch: doctorBranches[0]?.name.ar || 'أقرب فرع',
          preferredDate: today,
          preferredTime: 'صباحاً أو مساءً',
          appointmentType: 'استشارة طبية',
          isExistingPatient: false,
          notes: 'حجز مباشر من الملف الشخصي للطبيب',
        })
      : buildAppointmentMessageEn({
          patientName: '[Patient Name]',
          phone: '[Phone Number]',
          specialty: doctor.specialtyName.en,
          doctor: doctor.name.en,
          branch: doctorBranches[0]?.name.en || 'Preferred Branch',
          preferredDate: today,
          preferredTime: 'Morning or Afternoon',
          appointmentType: 'Consultation',
          isExistingPatient: false,
          notes: 'Direct inquiry from doctor profile',
        });

    window.open(generateWhatsAppUrl(message), '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="doctor-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative my-6">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 ltr:right-4 rtl:left-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors focus-visible:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header with Portrait & Basic Details */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-[#123047] to-[#159A91] text-white rounded-t-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white/10 border-2 border-white/20 shrink-0 shadow-md">
              <img
                src={doctor.avatarUrl}
                alt={doctor.name[language]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1.5 flex-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                {doctor.specialtyName[language]}
              </span>
              <h3 id="doctor-modal-title" className="text-2xl font-bold tracking-tight text-white">
                {doctor.name[language]}
              </h3>
              <p className="text-sm text-white/90 font-medium">
                {doctor.title[language]}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-white/80 pt-1">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  <span>{doctor.experienceYears} {language === 'ar' ? 'سنة خبرة' : 'Years Experience'}</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-sky-300" />
                  <span>{doctor.languages.join(', ')}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Qualifications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              {language === 'ar' ? 'المؤهلات والبوردات الطبية' : 'Board Certifications & Credentials'}
            </h4>
            <p className="text-sm font-semibold text-[#123047]">
              {doctor.qualifications[language]}
            </p>
          </div>

          {/* Biography */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {language === 'ar' ? 'نبذة عن الطبيب' : 'Physician Biography'}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {doctor.bio[language]}
            </p>
          </div>

          {/* Clinical Expertise */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              {language === 'ar' ? 'مجالات الخبرة السريرية' : 'Areas of Clinical Expertise'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {doctor.expertise.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#159A91] shrink-0" />
                  <span>{item[language]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions Treated */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              {language === 'ar' ? 'الحالات التي يتم علاجها' : 'Conditions Treated'}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {doctor.conditionsTreated.map((cond, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#E8F5F2] text-[#123047]"
                >
                  {cond[language]}
                </span>
              ))}
            </div>
          </div>

          {/* Branch Availability & Schedule */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#159A91]" />
              <span>{language === 'ar' ? 'الفروع وساعات العمل المعتمدة' : 'Practice Locations & Schedule'}</span>
            </h4>
            <p className="text-xs text-slate-700 font-medium">
              {doctor.workingDays[language]}
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-500">
              {doctorBranches.map((b) => (
                <span key={b.id} className="text-[#159A91] font-semibold">
                  • {b.name[language]}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => {
                onBookAppointment(doctor.id, doctor.specialtyId, doctor);
                onClose();
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-[#123047] hover:bg-[#159A91] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#159A91]" />
              <span>{language === 'ar' ? 'حجز موعد في العيادة' : 'Select Doctor & Book'}</span>
            </button>

            <button
              onClick={handleQuickWhatsAppBook}
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'ar' ? 'طلب موعد عبر الواتساب' : 'WhatsApp Appointment'}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

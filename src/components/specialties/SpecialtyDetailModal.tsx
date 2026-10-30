import React, { useEffect } from 'react';
import { Specialty } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { X, Calendar, MessageSquare, CheckCircle, HelpCircle } from 'lucide-react';
import { DOCTORS } from '../../data/doctors';
import { getQuickChatWhatsAppUrl } from '../../config/whatsapp';

interface SpecialtyDetailModalProps {
  specialty: Specialty | null;
  onClose: () => void;
  onBookSpecialty: (specialtyId: string, specialty?: Specialty) => void;
}

export const SpecialtyDetailModal: React.FC<SpecialtyDetailModalProps> = ({
  specialty,
  onClose,
  onBookSpecialty,
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (!specialty) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [specialty, onClose]);

  if (!specialty) return null;

  const relatedDoctors = DOCTORS.filter((d) => d.specialtyId === specialty.id);

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

        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#123047] text-white rounded-t-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#159A91]">
            {language === 'ar' ? 'التخصص الطبي' : 'Clinical Specialty'}
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-white mt-1">
            {specialty.name[language]}
          </h3>
          <p className="text-sm text-white/80 mt-2 leading-relaxed">
            {specialty.fullDesc[language]}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Services list */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              {language === 'ar' ? 'الخدمات والإجراءات الطبية المتاحة' : 'Clinical Services & Procedures'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {specialty.services.map((srv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle className="w-3.5 h-3.5 text-[#159A91] shrink-0" />
                  <span>{srv[language]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {language === 'ar' ? 'الحالات الشائعة التي يتم علاجها' : 'Commonly Treated Conditions'}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {specialty.conditions.map((cond, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#E8F5F2] text-[#123047]"
                >
                  {cond[language]}
                </span>
              ))}
            </div>
          </div>

          {/* Related Doctors */}
          {relatedDoctors.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                {language === 'ar' ? 'الأطباء الاستشاريون في هذا القسم' : 'Consultants in this Discipline'}
              </h4>
              <div className="space-y-2">
                {relatedDoctors.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-3">
                      <img
                        src={doc.avatarUrl}
                        alt={doc.name[language]}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <div className="text-xs font-bold text-[#123047]">{doc.name[language]}</div>
                        <div className="text-[11px] text-slate-500">{doc.qualifications[language]}</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-[#159A91]">
                      {doc.experienceYears} {language === 'ar' ? 'سنة خبرة' : 'yrs exp'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specialty FAQs */}
          {specialty.faqs.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-[#159A91]" />
                <span>{language === 'ar' ? 'سؤال شائع عن التخصص' : 'Specialty FAQ'}</span>
              </h4>
              {specialty.faqs.map((faq, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <div className="font-semibold text-slate-800">{faq.question[language]}</div>
                  <div className="text-slate-600">{faq.answer[language]}</div>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => {
                onBookSpecialty(specialty.id, specialty);
                onClose();
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-[#123047] hover:bg-[#159A91] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#159A91]" />
              <span>{language === 'ar' ? 'حجز موعد في هذا التخصص' : 'Book Specialty Appointment'}</span>
            </button>

            <a
              href={getQuickChatWhatsAppUrl(language, specialty.name[language])}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'ar' ? 'استفسار واتساب عن التخصص' : 'WhatsApp Inquiry'}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

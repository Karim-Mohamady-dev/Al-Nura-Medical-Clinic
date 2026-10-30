import React, { useEffect } from 'react';
import { MedicalService } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { X, Calendar, MessageSquare, Clock, CheckCircle2, AlertCircle, Building2 } from 'lucide-react';
import { BRANCHES } from '../../data/branches';
import { getQuickChatWhatsAppUrl } from '../../config/whatsapp';

interface ServiceDetailModalProps {
  service: MedicalService | null;
  onClose: () => void;
  onBookService: (serviceId: string, specialtyId: string, service?: MedicalService) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (!service) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  const serviceBranches = BRANCHES.filter((b) => service.branchIds.includes(b.id));

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
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#159A91]">
            <Clock className="w-3.5 h-3.5" />
            <span>{service.durationMinutes} {language === 'ar' ? 'دقيقة (المدة التقريبية)' : 'Mins Estimated Duration'}</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-white mt-1">
            {service.title[language]}
          </h3>
          <p className="text-sm text-white/80 mt-2 leading-relaxed">
            {service.description[language]}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Clinical Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              {language === 'ar' ? 'الفوائد والمزايا السريرية' : 'Key Clinical Benefits'}
            </h4>
            <div className="space-y-2">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#159A91] shrink-0 mt-0.5" />
                  <span>{benefit[language]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              {language === 'ar' ? 'تفاصيل الإجراء وكيفية تنفيذه' : 'Procedure & Diagnostic Scope'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              {service.treatmentInfo[language]}
            </p>
          </div>

          {/* Preparation Instructions */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>{language === 'ar' ? 'تعليمات وإرشادات الاستعداد للزيارة' : 'Preparation Instructions'}</span>
            </h4>
            <p className="text-xs text-amber-950 leading-relaxed">
              {service.preparationInstructions[language]}
            </p>
          </div>

          {/* Branch Availability */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#159A91]" />
              <span>{language === 'ar' ? 'الفروع التي تتوفر بها هذه الخدمة' : 'Available Branch Locations'}</span>
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {serviceBranches.map((b) => (
                <span
                  key={b.id}
                  className="px-3 py-1.5 rounded-lg font-semibold bg-[#E8F5F2] text-[#123047]"
                >
                  {b.name[language]}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => {
                onBookService(service.id, service.specialtyId, service);
                onClose();
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-[#123047] hover:bg-[#159A91] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#159A91]" />
              <span>{language === 'ar' ? 'حجز موعد لهذه الخدمة' : 'Book This Service'}</span>
            </button>

            <a
              href={getQuickChatWhatsAppUrl(language, service.title[language])}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'ar' ? 'استفسار عبر الواتساب' : 'WhatsApp Inquiry'}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

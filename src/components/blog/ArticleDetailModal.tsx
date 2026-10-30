import React, { useEffect } from 'react';
import { MedicalArticle } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { X, Calendar, Clock, User, Share2, MessageSquare } from 'lucide-react';
import { getQuickChatWhatsAppUrl } from '../../config/whatsapp';

interface ArticleDetailModalProps {
  article: MedicalArticle | null;
  onClose: () => void;
  onBookConsultation: (article?: MedicalArticle) => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onBookConsultation,
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (!article) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [article, onClose]);

  if (!article) return null;

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
          <div className="flex items-center gap-3 text-xs text-[#159A91] mb-2 font-semibold">
            <span>{article.category[language]}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{article.readTimeMinutes} {language === 'ar' ? 'دقائق قراءة' : 'min read'}</span>
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
            {article.title[language]}
          </h3>
          <div className="flex items-center gap-2 mt-3 text-xs text-white/70">
            <User className="w-3.5 h-3.5 text-[#159A91]" />
            <span className="font-medium text-white">{article.authorName[language]}</span>
            <span>({article.authorTitle[language]})</span>
            <span>·</span>
            <span>{article.publishDate}</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 space-y-5">
          <div className="text-xs sm:text-sm font-medium text-slate-500 italic pb-2 border-b border-slate-100 leading-relaxed">
            "{article.excerpt[language]}"
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph[language]}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">
              {language === 'ar' ? 'الكلمات المفتاحية:' : 'Tags:'}
            </span>
            {article.tags.map((tag, idx) => (
              <span key={idx} className="text-xs text-[#159A91] bg-[#E8F5F2] px-2.5 py-0.5 rounded-full">
                #{tag[language]}
              </span>
            ))}
          </div>

          {/* Consultation CTA Banner */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <strong className="text-xs text-slate-900 block font-semibold">
                {language === 'ar' ? 'هل لديك أسئلة حول هذه الحالة الطبية؟' : 'Have clinical questions regarding this condition?'}
              </strong>
              <span className="text-[11px] text-slate-500">
                {language === 'ar' ? 'استشر أحد خبرائنا المتخصصين في عيادة النورة' : 'Schedule a consultation with our specialist faculty.'}
              </span>
            </div>
            <button
              onClick={() => {
                onBookConsultation(article);
                onClose();
              }}
              className="px-4 py-2 rounded-lg bg-[#123047] hover:bg-[#159A91] text-white text-xs font-semibold whitespace-nowrap transition-colors"
            >
              {language === 'ar' ? 'طلب موعد طبي' : 'Book Consultation'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

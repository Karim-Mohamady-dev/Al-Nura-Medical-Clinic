import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MEDICAL_ARTICLES } from '../data/articles';
import { MedicalArticle } from '../types';
import { Clock, Search, ArrowRight, User } from 'lucide-react';

interface BlogPageProps {
  onSelectArticle: (article: MedicalArticle) => void;
}

export const Blog: React.FC<BlogPageProps> = ({ onSelectArticle }) => {
  const { language } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = Array.from(new Set(MEDICAL_ARTICLES.map((a) => a.category[language])));

  const filteredArticles = MEDICAL_ARTICLES.filter((art) => {
    if (selectedCategory && art.category[language] !== selectedCategory) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const titleMatch = art.title[language].toLowerCase().includes(q);
      const excerptMatch = art.excerpt[language].toLowerCase().includes(q);
      const tagMatch = art.tags.some((t) => t[language].toLowerCase().includes(q));
      if (!titleMatch && !excerptMatch && !tagMatch) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#159A91]">
          {language === 'ar' ? 'المكتبة والتثقيف الصحي' : 'Clinical Health Insights'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123047] tracking-tight">
          {language === 'ar' ? 'المقالات والرؤى الطبية الموثوقة' : 'Medical Articles & Wellness Library'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
          {language === 'ar'
            ? 'مقالات طبية متخصصة ومستندة للأدلة العلمية كتبها استشاريو عيادة النورة لمساعدتك في اتخاذ قرارات صحية مستنيرة.'
            : 'Evidence-based healthcare guides authored by our consultant faculty covering cardiovascular resilience, dermatological health, and family wellness in the Gulf.'}
        </p>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute ltr:left-3.5 rtl:right-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={language === 'ar' ? 'ابحث في المقالات أو المواضيع الطبية...' : 'Search medical articles...'}
            className="w-full ltr:pl-10 rtl:pr-10 pr-4 rtl:pl-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:border-[#159A91] focus:outline-none"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="py-2.5 px-3 rounded-xl border border-slate-200 text-xs bg-white text-slate-800 focus:border-[#159A91] focus:outline-none max-w-xs"
        >
          <option value="">{language === 'ar' ? 'جميع الأقسام' : 'All Categories'}</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((art) => (
          <div
            key={art.id}
            onClick={() => onSelectArticle(art)}
            className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#159A91]/40 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2 font-medium">
                <span className="text-[#159A91] font-semibold">{art.category[language]}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{art.readTimeMinutes} {language === 'ar' ? 'دقائق' : 'mins'}</span>
                </span>
              </div>

              <h3 className="text-base font-bold text-[#123047] group-hover:text-[#159A91] transition-colors leading-snug">
                {art.title[language]}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                {art.excerpt[language]}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700 truncate">{art.authorName[language]}</span>
              <span className="text-[#159A91] font-semibold flex items-center gap-1">
                <span>{language === 'ar' ? 'قراءة' : 'Read'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

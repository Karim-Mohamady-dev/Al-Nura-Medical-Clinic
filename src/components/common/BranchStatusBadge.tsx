import React, { useState, useEffect } from 'react';
import { Branch } from '../../types';
import { calculateBranchStatus, BranchStatusResult } from '../../utils/timezone';
import { useLanguage } from '../../context/LanguageContext';
import { Clock } from 'lucide-react';

interface BranchStatusBadgeProps {
  branch: Branch;
  showDetails?: boolean;
}

export const BranchStatusBadge: React.FC<BranchStatusBadgeProps> = ({ branch, showDetails = true }) => {
  const { language } = useLanguage();
  const [status, setStatus] = useState<BranchStatusResult>(() =>
    calculateBranchStatus(branch.weeklySchedule)
  );

  useEffect(() => {
    // Re-check status every 60 seconds
    const interval = setInterval(() => {
      setStatus(calculateBranchStatus(branch.weeklySchedule));
    }, 60000);
    return () => clearInterval(interval);
  }, [branch.weeklySchedule]);

  const statusText = language === 'ar' ? status.statusTextAr : status.statusTextEn;

  return (
    <div className="inline-flex items-center gap-1.5 text-xs">
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[11px] font-medium tracking-tight ${status.badgeClass}`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            status.isOpen ? 'bg-emerald-600' : 'bg-amber-600'
          }`}
          aria-hidden="true"
        />
        <span>{status.isOpen ? (language === 'ar' ? 'مفتوح الآن' : 'Open Now') : (language === 'ar' ? 'مغلق حالياً' : 'Closed Now')}</span>
      </span>
      {showDetails && (
        <span className="text-slate-500 text-[11px] flex items-center gap-1">
          <Clock className="w-3 h-3 text-slate-400" aria-hidden="true" />
          <span>{statusText}</span>
        </span>
      )}
    </div>
  );
};

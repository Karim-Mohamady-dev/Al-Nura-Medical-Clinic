import { DaySchedule } from '../types';

export interface BranchStatusResult {
  isOpen: boolean;
  statusTextEn: string;
  statusTextAr: string;
  badgeClass: string;
}

/**
 * Gets the current time in UAE (Asia/Dubai, UTC+4)
 * Uses Intl.DateTimeFormat to reliably parse wall-clock time in UAE across any environment
 */
export function getUaeCurrentDate(): Date {
  const now = new Date();
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Dubai',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    });
    const parts = formatter.formatToParts(now);
    const map: Record<string, number> = {};
    for (const part of parts) {
      if (part.type !== 'literal') {
        map[part.type] = parseInt(part.value, 10);
      }
    }
    const hour = map.hour === 24 ? 0 : (map.hour || 0);
    return new Date(map.year, (map.month || 1) - 1, map.day, hour, map.minute || 0, map.second || 0);
  } catch {
    // Fallback if Intl is unavailable or fails
    const dubaiDateStr = now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' });
    return new Date(dubaiDateStr);
  }
}

/**
 * Helper to parse "HH:MM" into minutes from midnight
 */
function parseTimeToMinutes(timeStr: string): number {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + (minutes || 0);
}

/**
 * Finds next open time across subsequent days
 */
function getNextOpenInfo(weeklySchedule: Record<number, DaySchedule>, fromDayOfWeek: number) {
  for (let step = 1; step <= 7; step++) {
    const checkDay = (fromDayOfWeek + step) % 7;
    const schedule = weeklySchedule[checkDay];
    if (schedule && schedule.isOpen) {
      return {
        isTomorrow: step === 1,
        dayName: schedule.dayName,
        openTime: schedule.openTime || '08:00',
      };
    }
  }
  return {
    isTomorrow: true,
    dayName: { en: 'Tomorrow', ar: 'غداً' },
    openTime: '08:00',
  };
}

/**
 * Calculates whether a branch is currently open in UAE time and provides localized summary
 */
export function calculateBranchStatus(
  weeklySchedule: Record<number, DaySchedule>,
  nowDubai: Date = getUaeCurrentDate()
): BranchStatusResult {
  const dayOfWeek = nowDubai.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const currentMinutes = nowDubai.getHours() * 60 + nowDubai.getMinutes();
  
  const todaySchedule = weeklySchedule[dayOfWeek];

  if (!todaySchedule || !todaySchedule.isOpen) {
    const nextInfo = getNextOpenInfo(weeklySchedule, dayOfWeek);
    const targetLabelEn = nextInfo.isTomorrow ? 'tomorrow' : nextInfo.dayName.en;
    const targetLabelAr = nextInfo.isTomorrow ? 'غداً' : nextInfo.dayName.ar;
    return {
      isOpen: false,
      statusTextEn: `Closed Today · Opens ${targetLabelEn} at ${nextInfo.openTime}`,
      statusTextAr: `مغلق اليوم · يفتح ${targetLabelAr} الساعة ${nextInfo.openTime}`,
      badgeClass: 'text-amber-800 bg-amber-50 border-amber-200',
    };
  }

  const openMinutes = todaySchedule.openTime ? parseTimeToMinutes(todaySchedule.openTime) : 480; // 08:00
  const closeMinutes = todaySchedule.closeTime ? parseTimeToMinutes(todaySchedule.closeTime) : 1260; // 21:00

  // Check shifted hours if exists
  if (todaySchedule.isShifted && todaySchedule.shift2OpenTime && todaySchedule.shift2CloseTime) {
    const shift1Open = openMinutes;
    const shift1Close = closeMinutes;
    const shift2Open = parseTimeToMinutes(todaySchedule.shift2OpenTime);
    const shift2Close = parseTimeToMinutes(todaySchedule.shift2CloseTime);

    if (currentMinutes >= shift1Open && currentMinutes < shift1Close) {
      return {
        isOpen: true,
        statusTextEn: `Open Now · Closes at ${todaySchedule.closeTime}`,
        statusTextAr: `مفتوح الآن · يغلق الساعة ${todaySchedule.closeTime}`,
        badgeClass: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      };
    } else if (currentMinutes >= shift1Close && currentMinutes < shift2Open) {
      return {
        isOpen: false,
        statusTextEn: `Break · Evening shift opens at ${todaySchedule.shift2OpenTime}`,
        statusTextAr: `فترة استراحة · يفتح المساء الساعة ${todaySchedule.shift2OpenTime}`,
        badgeClass: 'text-amber-800 bg-amber-50 border-amber-200',
      };
    } else if (currentMinutes >= shift2Open && currentMinutes < shift2Close) {
      return {
        isOpen: true,
        statusTextEn: `Open Now · Closes at ${todaySchedule.shift2CloseTime}`,
        statusTextAr: `مفتوح الآن · يغلق الساعة ${todaySchedule.shift2CloseTime}`,
        badgeClass: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      };
    }
  }

  // Standard non-shifted day
  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    return {
      isOpen: true,
      statusTextEn: `Open Now · Closes at ${todaySchedule.closeTime}`,
      statusTextAr: `مفتوح الآن · يغلق الساعة ${todaySchedule.closeTime}`,
      badgeClass: 'text-emerald-800 bg-emerald-50 border-emerald-200',
    };
  } else if (currentMinutes < openMinutes) {
    return {
      isOpen: false,
      statusTextEn: `Closed · Opens at ${todaySchedule.openTime}`,
      statusTextAr: `مغلق · يفتح الساعة ${todaySchedule.openTime}`,
      badgeClass: 'text-slate-700 bg-slate-100 border-slate-200',
    };
  } else {
    // Closed for the day
    const nextInfo = getNextOpenInfo(weeklySchedule, dayOfWeek);
    const targetLabelEn = nextInfo.isTomorrow ? 'tomorrow' : nextInfo.dayName.en;
    const targetLabelAr = nextInfo.isTomorrow ? 'غداً' : nextInfo.dayName.ar;
    return {
      isOpen: false,
      statusTextEn: `Closed for Today · Opens ${targetLabelEn} at ${nextInfo.openTime}`,
      statusTextAr: `مغلق لبقية اليوم · يفتح ${targetLabelAr} الساعة ${nextInfo.openTime}`,
      badgeClass: 'text-slate-700 bg-slate-100 border-slate-200',
    };
  }
}

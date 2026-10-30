import { Branch } from '../types';
import { WHATSAPP_CONFIG } from '../config/whatsapp';

export const BRANCHES: Branch[] = [
  {
    id: 'downtown-dubai',
    name: {
      en: 'Downtown Dubai Flagship Center',
      ar: 'فرع داون تاون دبي الرئيسي',
    },
    emirate: { en: 'Dubai', ar: 'دبي' },
    city: { en: 'Dubai', ar: 'دبي' },
    area: { en: 'Downtown / Burj Khalifa District', ar: 'منطقة داون تاون / برج خليفة' },
    fullAddress: {
      en: 'Level 2, Boulevard Plaza Tower 1, Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, UAE',
      ar: 'الطابق الثاني، برج بوليفارد بلازا ١، بوليفارد الشيخ محمد بن راشد، داون تاون دبي، الإمارات',
    },
    googleMapsUrl: 'https://maps.google.com/?q=25.1972,55.2744',
    coordinates: { lat: 25.1972, lng: 55.2744 },
    imageUrl: '/images/hero_clinic_reception_1793322345096.jpg',
    phone: '+97148002568',
    phoneDisplay: '+971 4 800 2568',
    whatsapp: WHATSAPP_CONFIG.cleanNumber,
    specialtyIds: ['cardiology', 'dermatology', 'dentistry', 'pediatrics', 'gynecology', 'orthopedics', 'family-medicine', 'laboratory', 'physiotherapy'],
    parkingInfo: {
      en: 'Complimentary 3-hour valet parking at Boulevard Plaza Tower 1 entrance. EV charging stations available on B1.',
      ar: 'خدمة صف السيارات (فاليه) مجانية لمدة ٣ ساعات عند مدخل برج بوليفارد بلازا ١. تتوفر محطات شحن السيارات الكهربائية في الطابق B1.',
    },
    accessibilityInfo: {
      en: 'Fully step-free wheelchair accessibility, dedicated elevator access, accessible examination tables, and trained support staff.',
      ar: 'مجهز بالكامل لمستخدمي الكراسي المتحركة بدون عتبات، مصاعد مخصصة، أسرّة فحص كهربائية مهيأة، وفريق مدرب لتقديم المساعدة.',
    },
    weeklySchedule: {
      // 0 = Sunday
      0: {
        dayName: { en: 'Sunday', ar: 'الأحد' },
        isOpen: true,
        openTime: '10:00',
        closeTime: '18:00',
        note: { en: 'Weekend family consultation hours', ar: 'مواعيد استشارات نهاية الأسبوع للعائلات' },
      },
      // 1 = Monday
      1: {
        dayName: { en: 'Monday', ar: 'الإثنين' },
        isOpen: true,
        openTime: '08:00',
        closeTime: '21:00',
      },
      // 2 = Tuesday
      2: {
        dayName: { en: 'Tuesday', ar: 'الثلاثاء' },
        isOpen: true,
        openTime: '08:00',
        closeTime: '21:00',
      },
      // 3 = Wednesday
      3: {
        dayName: { en: 'Wednesday', ar: 'الأربعاء' },
        isOpen: true,
        openTime: '08:00',
        closeTime: '21:00',
      },
      // 4 = Thursday
      4: {
        dayName: { en: 'Thursday', ar: 'الخميس' },
        isOpen: true,
        openTime: '08:00',
        closeTime: '21:00',
      },
      // 5 = Friday (Split shift example common in UAE)
      5: {
        dayName: { en: 'Friday', ar: 'الجمعة' },
        isOpen: true,
        openTime: '08:00',
        closeTime: '12:30',
        isShifted: true,
        shift2OpenTime: '14:30',
        shift2CloseTime: '21:00',
        note: { en: 'Prayer break between 12:30 PM and 2:30 PM', ar: 'استراحة صلاة الجمعة بين ١٢:٣٠ ظهراً و ٢:٣٠ عصراً' },
      },
      // 6 = Saturday
      6: {
        dayName: { en: 'Saturday', ar: 'السبت' },
        isOpen: true,
        openTime: '09:00',
        closeTime: '20:00',
      },
    },
    holidayNotice: {
      en: 'Urgent consultations available via on-call physician during UAE national holidays.',
      ar: 'تتوفر الاستشارات العاجلة عبر الطبيب المناوب خلال العطلات الرسمية في الدولة.',
    },
  },
  {
    id: 'dubai-marina',
    name: {
      en: 'Dubai Marina Wellness Branch',
      ar: 'فرع دبي مارينا لصحة العائلة',
    },
    emirate: { en: 'Dubai', ar: 'دبي' },
    city: { en: 'Dubai', ar: 'دبي' },
    area: { en: 'Dubai Marina Walk', ar: 'ممشى دبي مارينا' },
    fullAddress: {
      en: 'Ground Floor, Marina Promenade Tower, Al Emreet Street, Dubai Marina, UAE',
      ar: 'الطابق الأرضي، برج مارينا بروميناد، شارع الإمريت، دبي مارينا، الإمارات',
    },
    googleMapsUrl: 'https://maps.google.com/?q=25.0784,55.1378',
    coordinates: { lat: 25.0784, lng: 55.1378 },
    imageUrl: '/images/clinic_facility_suite_1793322346030.jpg',
    phone: '+97148002569',
    phoneDisplay: '+971 4 800 2569',
    whatsapp: WHATSAPP_CONFIG.cleanNumber,
    specialtyIds: ['dermatology', 'dentistry', 'pediatrics', 'family-medicine', 'physiotherapy', 'ophthalmology', 'gastroenterology'],
    parkingInfo: {
      en: 'Direct underground visitor parking with clinic validation stamped at reception. Marina Promenade visitor bays P1.',
      ar: 'مواقف سيارات أرضية مباشرة للزوار مع تصديق تذكرة الموقف مجاناً في مكتب الاستقبال (طابق P1).',
    },
    accessibilityInfo: {
      en: 'Direct street level walk-in access without steps, wide automated double doors, and handicap designated parking bays.',
      ar: 'دخول مباشر من مستوى الشارع دون درجات، أبواب إلكترونية مزدوجة عريضة، ومواقف مخصصة لأصحاب الهمم.',
    },
    weeklySchedule: {
      0: {
        dayName: { en: 'Sunday', ar: 'الأحد' },
        isOpen: true,
        openTime: '09:00',
        closeTime: '19:00',
      },
      1: {
        dayName: { en: 'Monday', ar: 'الإثنين' },
        isOpen: true,
        openTime: '08:30',
        closeTime: '20:30',
      },
      2: {
        dayName: { en: 'Tuesday', ar: 'الثلاثاء' },
        isOpen: true,
        openTime: '08:30',
        closeTime: '20:30',
      },
      3: {
        dayName: { en: 'Wednesday', ar: 'الأربعاء' },
        isOpen: true,
        openTime: '08:30',
        closeTime: '20:30',
      },
      4: {
        dayName: { en: 'Thursday', ar: 'الخميس' },
        isOpen: true,
        openTime: '08:30',
        closeTime: '20:30',
      },
      5: {
        dayName: { en: 'Friday', ar: 'الجمعة' },
        isOpen: true,
        openTime: '09:00',
        closeTime: '12:00',
        isShifted: true,
        shift2OpenTime: '15:00',
        shift2CloseTime: '20:00',
        note: { en: 'Midday prayer break', ar: 'استراحة صلاة الجمعة' },
      },
      6: {
        dayName: { en: 'Saturday', ar: 'السبت' },
        isOpen: true,
        openTime: '09:00',
        closeTime: '20:00',
      },
    },
  },
  {
    id: 'abu-dhabi-al-maryah',
    name: {
      en: 'Abu Dhabi Al Maryah Medical Wing',
      ar: 'فرع أبوظبي - جزيرة المارية',
    },
    emirate: { en: 'Abu Dhabi', ar: 'أبوظبي' },
    city: { en: 'Abu Dhabi', ar: 'أبوظبي' },
    area: { en: 'Al Maryah Island Financial District', ar: 'حي المارية المالي' },
    fullAddress: {
      en: 'Concourse Level, Al Sila Tower, Abu Dhabi Global Market Square, Al Maryah Island, Abu Dhabi, UAE',
      ar: 'مستوى الكونكورس، برج السلع، ساحة سوق أبوظبي العالمي، جزيرة المارية، أبوظبي، الإمارات',
    },
    googleMapsUrl: 'https://maps.google.com/?q=24.5005,54.3888',
    coordinates: { lat: 24.5005, lng: 54.3888 },
    imageUrl: '/images/doctor_consultation_scene_1793322347413.jpg',
    phone: '+97128002570',
    phoneDisplay: '+971 2 800 2570',
    whatsapp: WHATSAPP_CONFIG.cleanNumber,
    specialtyIds: ['cardiology', 'gynecology', 'orthopedics', 'family-medicine', 'ent', 'laboratory'],
    parkingInfo: {
      en: 'VIP valet parking available at Al Sila Tower podium, with easy indoor bridge access connecting from The Galleria.',
      ar: 'خدمة فاليه كبار الشخصيات عند بهو برج السلع، مع مدخل متصل بالممر المكيف من مول الغاليريا.',
    },
    accessibilityInfo: {
      en: 'Full wheelchair accessibility with elevator braille indicators, wide medical treatment suites, and hearing-loop equipped receptions.',
      ar: 'سهولة وصول كاملة للكراسي المتحركة مع مصاعد مزودة بلغة برايل، وأجهزة مساعدة سمعية في مكاتب الاستقبال.',
    },
    weeklySchedule: {
      0: {
        dayName: { en: 'Sunday', ar: 'الأحد' },
        isOpen: false, // Closed on Sunday for demonstration
        note: { en: 'Closed on Sundays · Emergency on-call team available', ar: 'مغلق أيام الأحد · يتوفر فريق الطوارئ المناوب' },
      },
      1: {
        dayName: { en: 'Monday', ar: 'الإثنين' },
        isOpen: true,
        openTime: '08:00',
        closeTime: '20:00',
      },
      2: {
        dayName: { en: 'Tuesday', ar: 'الثلاثاء' },
        isOpen: true,
        openTime: '08:00',
        closeTime: '20:00',
      },
      3: {
        dayName: { en: 'Wednesday', ar: 'الأربعاء' },
        isOpen: true,
        openTime: '08:00',
        closeTime: '20:00',
      },
      4: {
        dayName: { en: 'Thursday', ar: 'الخميس' },
        isOpen: true,
        openTime: '08:00',
        closeTime: '20:00',
      },
      5: {
        dayName: { en: 'Friday', ar: 'الجمعة' },
        isOpen: true,
        openTime: '08:00',
        closeTime: '12:00',
        isShifted: true,
        shift2OpenTime: '15:00',
        shift2CloseTime: '19:30',
      },
      6: {
        dayName: { en: 'Saturday', ar: 'السبت' },
        isOpen: true,
        openTime: '09:00',
        closeTime: '18:00',
      },
    },
  },
];

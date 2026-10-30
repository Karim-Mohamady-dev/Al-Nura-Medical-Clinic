export type Language = 'en' | 'ar';

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface Doctor {
  id: string;
  name: LocalizedString;
  title: LocalizedString;
  specialtyId: string;
  specialtyName: LocalizedString;
  subspecialty?: LocalizedString;
  qualifications: LocalizedString;
  experienceYears: number;
  languages: string[]; // e.g. ['English', 'Arabic', 'French']
  gender: 'female' | 'male';
  branchIds: string[];
  avatarUrl: string;
  bio: LocalizedString;
  expertise: LocalizedString[];
  conditionsTreated: LocalizedString[];
  treatments: LocalizedString[];
  workingDays: LocalizedString;
  consultationTypes: ('in-person' | 'telehealth' | 'second-opinion')[];
  featured?: boolean;
}

export interface Specialty {
  id: string;
  name: LocalizedString;
  shortDesc: LocalizedString;
  fullDesc: LocalizedString;
  iconName: string;
  imageUrl: string;
  services: LocalizedString[];
  conditions: LocalizedString[];
  faqs: { question: LocalizedString; answer: LocalizedString }[];
  featured?: boolean;
}

export interface MedicalService {
  id: string;
  title: LocalizedString;
  specialtyId: string;
  description: LocalizedString;
  benefits: LocalizedString[];
  treatmentInfo: LocalizedString;
  preparationInstructions: LocalizedString;
  branchIds: string[];
  durationMinutes: number;
  faqs: { question: LocalizedString; answer: LocalizedString }[];
}

export interface DaySchedule {
  dayName: LocalizedString;
  isOpen: boolean;
  openTime?: string; // '08:00'
  closeTime?: string; // '20:00'
  isShifted?: boolean;
  shift2OpenTime?: string;
  shift2CloseTime?: string;
  note?: LocalizedString;
}

export interface Branch {
  id: string;
  name: LocalizedString;
  emirate: LocalizedString;
  city: LocalizedString;
  area: LocalizedString;
  fullAddress: LocalizedString;
  googleMapsUrl: string;
  coordinates: { lat: number; lng: number };
  imageUrl: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  specialtyIds: string[];
  parkingInfo: LocalizedString;
  accessibilityInfo: LocalizedString;
  weeklySchedule: Record<number, DaySchedule>; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  holidayNotice?: LocalizedString;
}

export interface InsuranceProvider {
  id: string;
  name: LocalizedString;
  networkTier: LocalizedString;
  description: LocalizedString;
  copayNote: LocalizedString;
  requiresPreAuth: boolean;
  branchesCovered: string[];
  logoText: string;
  accentColor: string;
}

export interface Testimonial {
  id: string;
  patientName: LocalizedString;
  serviceReceived: LocalizedString;
  branchName: LocalizedString;
  doctorName?: LocalizedString;
  quote: LocalizedString;
  rating: number; // 5
  date: string;
}

export interface MedicalArticle {
  id: string;
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString[];
  category: LocalizedString;
  authorName: LocalizedString;
  authorTitle: LocalizedString;
  publishDate: string;
  readTimeMinutes: number;
  featured?: boolean;
  tags: LocalizedString[];
}

export interface FAQItem {
  id: string;
  category: 'appointments' | 'doctors' | 'specialties' | 'services' | 'insurance' | 'branches' | 'payments' | 'support';
  question: LocalizedString;
  answer: LocalizedString;
}

export interface AppointmentFormData {
  specialtyId: string;
  doctorId: string;
  branchId: string;
  preferredDate: string;
  preferredTime: string;
  patientName: string;
  phone: string;
  email: string;
  isExistingPatient: boolean;
  appointmentType: 'consultation' | 'followup' | 'second-opinion' | 'telehealth';
  notes: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  inquiryType: 'general' | 'appointment' | 'doctor' | 'services' | 'insurance' | 'branch' | 'feedback' | 'complaints';
  branchId: string;
  message: string;
}

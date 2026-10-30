/**
 * Centralized WhatsApp Configuration
 * Single source of truth for the clinic's WhatsApp number and message templates.
 */

export const WHATSAPP_CONFIG = {
  // Configured destination number
  rawNumber: '01017238942',
  internationalNumber: '+201017238942',
  cleanNumber: '201017238942',
  baseUrl: 'https://wa.me/201017238942',
  displayFormatted: '+20 101 723 8942',
} as const;

export interface AppointmentMessageData {
  patientName: string;
  phone: string;
  specialty: string;
  doctor: string;
  branch: string;
  preferredDate: string;
  preferredTime: string;
  appointmentType: string;
  isExistingPatient: boolean;
  notes?: string;
}

export interface InquiryMessageData {
  name: string;
  phone: string;
  email?: string;
  inquiryType: string;
  branch?: string;
  message: string;
}

/**
 * Builds the appointment booking WhatsApp message in English
 */
export function buildAppointmentMessageEn(data: AppointmentMessageData): string {
  const patientType = data.isExistingPatient ? 'Existing Patient' : 'New Patient';
  const notesText = data.notes && data.notes.trim() ? data.notes.trim() : 'None';

  return `Hello, I would like to request a medical appointment.

Patient Name: ${data.patientName}
Phone: ${data.phone}
Patient Status: ${patientType}
Specialty: ${data.specialty}
Doctor: ${data.doctor}
Branch: ${data.branch}
Preferred Date: ${data.preferredDate}
Preferred Time: ${data.preferredTime}
Appointment Type: ${data.appointmentType}
Additional Notes: ${notesText}

Please contact me to confirm availability.`;
}

/**
 * Builds the appointment booking WhatsApp message in Arabic
 */
export function buildAppointmentMessageAr(data: AppointmentMessageData): string {
  const patientType = data.isExistingPatient ? 'مريض حالي' : 'مريض جديد';
  const notesText = data.notes && data.notes.trim() ? data.notes.trim() : 'لا يوجد';

  return `مرحباً، أرغب في طلب حجز موعد طبي.

اسم المريض: ${data.patientName}
رقم الهاتف: ${data.phone}
حالة المريض: ${patientType}
التخصص: ${data.specialty}
الطبيب: ${data.doctor}
الفرع: ${data.branch}
التاريخ المفضل: ${data.preferredDate}
الوقت المفضل: ${data.preferredTime}
نوع الموعد: ${data.appointmentType}
ملاحظات إضافية: ${notesText}

يرجى التواصل معي لتأكيد الموعد.`;
}

/**
 * Builds the URL to open WhatsApp with the encoded message
 */
export function generateWhatsAppUrl(message: string): string {
  return `${WHATSAPP_CONFIG.baseUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates an inquiry WhatsApp URL
 */
export function buildInquiryWhatsAppUrl(data: InquiryMessageData, lang: 'en' | 'ar'): string {
  let message = '';
  if (lang === 'ar') {
    message = `مرحباً، لدي استفسار لعيادة النورة الطبية.

الاسم: ${data.name}
رقم الهاتف: ${data.phone}
${data.email ? `البريد الإلكتروني: ${data.email}\n` : ''}نوع الاستفسار: ${data.inquiryType}
${data.branch ? `الفرع المفضل: ${data.branch}\n` : ''}نص الرسالة: ${data.message}

شكراً لمساعدتكم.`;
  } else {
    message = `Hello, I have an inquiry for Al Nura Medical Clinic.

Name: ${data.name}
Phone: ${data.phone}
${data.email ? `Email: ${data.email}\n` : ''}Inquiry Type: ${data.inquiryType}
${data.branch ? `Preferred Branch: ${data.branch}\n` : ''}Message: ${data.message}

Thank you for your assistance.`;
  }

  return generateWhatsAppUrl(message);
}

/**
 * Quick general inquiry URL
 */
export function getQuickChatWhatsAppUrl(lang: 'en' | 'ar', context?: string): string {
  const message = lang === 'ar'
    ? `مرحباً، أود التواصل مع خدمة العملاء في عيادة النورة الطبية${context ? ` بخصوص ${context}` : ''}.`
    : `Hello, I would like to speak with Al Nura Medical Clinic customer care${context ? ` regarding ${context}` : ''}.`;
  return generateWhatsAppUrl(message);
}

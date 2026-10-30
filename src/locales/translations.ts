export interface TranslationDictionary {
  // Navigation
  nav_home: string;
  nav_doctors: string;
  nav_specialties: string;
  nav_services: string;
  nav_branches: string;
  nav_about: string;
  nav_insurance: string;
  nav_resources: string;
  nav_blog: string;
  nav_faq: string;
  nav_contact: string;
  nav_book_appointment: string;
  nav_call_now: string;
  nav_whatsapp: string;
  
  // Top bar announcement
  announcement_text: string;
  announcement_call: string;
  announcement_emergency: string;
  
  // Language Switcher
  lang_switch_label: string;
  current_lang_name: string;
  other_lang_name: string;

  // Actions
  action_book_appointment: string;
  action_book_with_doctor: string;
  action_view_profile: string;
  action_explore_doctors: string;
  action_explore_specialties: string;
  action_view_all_services: string;
  action_view_branches: string;
  action_whatsapp_inquiry: string;
  action_call_clinic: string;
  action_get_directions: string;
  action_submit_booking: string;
  action_submit_inquiry: string;
  action_filter: string;
  action_clear_filters: string;
  action_read_article: string;
  action_back: string;
  action_close: string;
  action_edit: string;
  action_confirm_and_open_whatsapp: string;
  action_learn_more: string;

  // Hero section
  hero_badge: string;
  hero_title_1: string;
  hero_title_highlight: string;
  hero_title_2: string;
  hero_description: string;
  hero_stat_1_val: string;
  hero_stat_1_label: string;
  hero_stat_2_val: string;
  hero_stat_2_label: string;
  hero_stat_3_val: string;
  hero_stat_3_label: string;
  hero_stat_4_val: string;
  hero_stat_4_label: string;

  // Section Headers
  section_specialties_title: string;
  section_specialties_subtitle: string;
  section_doctors_title: string;
  section_doctors_subtitle: string;
  section_why_choose_title: string;
  section_why_choose_subtitle: string;
  section_services_title: string;
  section_services_subtitle: string;
  section_branches_title: string;
  section_branches_subtitle: string;
  section_booking_steps_title: string;
  section_booking_steps_subtitle: string;
  section_insurance_title: string;
  section_insurance_subtitle: string;
  section_testimonials_title: string;
  section_testimonials_subtitle: string;
  section_articles_title: string;
  section_articles_subtitle: string;
  section_faq_title: string;
  section_faq_subtitle: string;

  // Booking Flow
  booking_page_title: string;
  booking_page_subtitle: string;
  booking_step_1: string;
  booking_step_2: string;
  booking_step_3: string;
  booking_step_4: string;
  booking_field_specialty: string;
  booking_field_specialty_placeholder: string;
  booking_field_doctor: string;
  booking_field_doctor_placeholder: string;
  booking_field_branch: string;
  booking_field_branch_placeholder: string;
  booking_field_date: string;
  booking_field_time: string;
  booking_field_time_placeholder: string;
  booking_field_patient_name: string;
  booking_field_phone: string;
  booking_field_email: string;
  booking_field_patient_status: string;
  booking_patient_new: string;
  booking_patient_existing: string;
  booking_field_appointment_type: string;
  booking_type_consultation: string;
  booking_type_followup: string;
  booking_type_second_opinion: string;
  booking_type_telehealth: string;
  booking_field_notes: string;
  booking_field_notes_placeholder: string;
  booking_summary_title: string;
  booking_summary_subtitle: string;
  booking_disclaimer_notice: string;
  booking_whatsapp_instruction: string;
  booking_validation_name: string;
  booking_validation_phone: string;
  booking_validation_specialty: string;
  booking_validation_doctor: string;
  booking_validation_branch: string;
  booking_validation_date: string;
  booking_validation_time: string;
  booking_completion_title: string;
  booking_completion_desc: string;
  action_done_close: string;
  action_back_to_website: string;
  booking_whatsapp_fallback: string;

  // Filters
  filter_search_placeholder: string;
  filter_all_specialties: string;
  filter_all_branches: string;
  filter_gender: string;
  filter_gender_all: string;
  filter_gender_female: string;
  filter_gender_male: string;
  filter_language: string;
  filter_language_all: string;
  filter_consultation_type: string;
  filter_consultation_all: string;
  filter_sort_by: string;
  filter_sort_experience: string;
  filter_sort_name: string;
  filter_results_count: string;
  filter_empty_title: string;
  filter_empty_desc: string;

  // Branch Real-Time Status
  status_open_now: string;
  status_closed: string;
  branch_hours_title: string;
  branch_valet: string;
  branch_accessible: string;
  branch_phone_label: string;

  // Contact Page
  contact_page_title: string;
  contact_page_subtitle: string;
  contact_field_inquiry_type: string;
  contact_type_general: string;
  contact_type_appointment: string;
  contact_type_doctor: string;
  contact_type_services: string;
  contact_type_insurance: string;
  contact_type_branch: string;
  contact_type_feedback: string;
  contact_type_complaints: string;
  contact_field_message: string;
  contact_field_message_placeholder: string;
  contact_disclaimer: string;
  contact_validation_message: string;

  // Floating & Sticky Buttons
  sticky_book_appointment: string;
  sticky_whatsapp_chat: string;
  whatsapp_popup_title: string;
  whatsapp_popup_desc: string;
  whatsapp_opt_book: string;
  whatsapp_opt_inquire: string;
  whatsapp_opt_branches: string;

  // Footer & Legal
  footer_tagline: string;
  footer_quick_links: string;
  footer_clinical_specialties: string;
  footer_branches: string;
  footer_contact_info: string;
  footer_working_hours: string;
  footer_emergency_notice: string;
  footer_all_rights_reserved: string;
  footer_demo_notice: string;
  legal_privacy_policy: string;
  legal_terms_conditions: string;
  legal_cookie_policy: string;
  legal_medical_disclaimer: string;
  legal_cancellation_policy: string;
}

export const TRANSLATIONS: Record<'en' | 'ar', TranslationDictionary> = {
  en: {
    nav_home: 'Home',
    nav_doctors: 'Doctors',
    nav_specialties: 'Specialties',
    nav_services: 'Services & Care',
    nav_branches: 'Branches',
    nav_about: 'About Clinic',
    nav_insurance: 'Insurance',
    nav_resources: 'Patient Guide',
    nav_blog: 'Medical Insights',
    nav_faq: 'FAQs',
    nav_contact: 'Contact & Inquiries',
    nav_book_appointment: 'Book Appointment',
    nav_call_now: 'Call Clinic',
    nav_whatsapp: 'WhatsApp Support',

    announcement_text: 'Accepting all major UAE insurance networks with direct billing at Downtown Dubai, Marina & Abu Dhabi.',
    announcement_call: 'Direct Desk: +971 4 800 2568',
    announcement_emergency: 'National Emergency: 998',

    lang_switch_label: 'Language',
    current_lang_name: 'English',
    other_lang_name: 'العربية',

    action_book_appointment: 'Book Appointment',
    action_book_with_doctor: 'Request Appointment via WhatsApp',
    action_view_profile: 'View Doctor Profile',
    action_explore_doctors: 'Explore Doctors Directory',
    action_explore_specialties: 'View All Specialties',
    action_view_all_services: 'View Comprehensive Services',
    action_view_branches: 'Explore Branch Locations',
    action_whatsapp_inquiry: 'Chat on WhatsApp',
    action_call_clinic: 'Call Reception Desk',
    action_get_directions: 'Google Maps Directions',
    action_submit_booking: 'Submit Request via WhatsApp',
    action_submit_inquiry: 'Send Inquiry via WhatsApp',
    action_filter: 'Filter Results',
    action_clear_filters: 'Reset All Filters',
    action_read_article: 'Read Medical Article',
    action_back: 'Back',
    action_close: 'Close Window',
    action_edit: 'Modify Details',
    action_confirm_and_open_whatsapp: 'Confirm & Open WhatsApp',
    action_learn_more: 'Discover More',

    hero_badge: 'Accredited UAE Specialized Healthcare Provider',
    hero_title_1: 'Pioneering Healthcare,',
    hero_title_highlight: 'Personalized Clinical Excellence',
    hero_title_2: 'in the UAE',
    hero_description: 'Al Nura Medical Clinic brings together Western board-certified consultants, state-of-the-art diagnostic suites, and seamless WhatsApp appointment scheduling across prestigious centers in Dubai and Abu Dhabi.',
    hero_stat_1_val: '18+',
    hero_stat_1_label: 'Medical Disciplines',
    hero_stat_2_val: '100%',
    hero_stat_2_label: 'Board-Certified Consultants',
    hero_stat_3_val: '3',
    hero_stat_3_label: 'UAE Center Locations',
    hero_stat_4_val: 'Direct',
    hero_stat_4_label: 'Major Insurance Billing',

    section_specialties_title: 'Clinical Specialties',
    section_specialties_subtitle: 'Expert multidisciplinary care designed around patient precision, dignity, and clinical efficacy.',
    section_doctors_title: 'Distinguished Medical Faculty',
    section_doctors_subtitle: 'Internationally accredited physicians and surgeons committed to evidence-based healthcare in the UAE.',
    section_why_choose_title: 'The Al Nura Distinction',
    section_why_choose_subtitle: 'Delivering five-star clinical hospitality, zero waiting queues, and comprehensive diagnostic clarity.',
    section_services_title: 'Signature Treatments & Diagnostic Protocols',
    section_services_subtitle: 'From advanced preventative cardiology to painless laser orthodontics and volumetric 4D prenatal imaging.',
    section_branches_title: 'Prestigious UAE Locations',
    section_branches_subtitle: 'Conveniently situated in Downtown Dubai, Dubai Marina, and Al Maryah Island with dedicated valet parking.',
    section_booking_steps_title: 'Effortless WhatsApp Appointment Journey',
    section_booking_steps_subtitle: 'Requesting your preferred consultation takes less than 60 seconds with no app download required.',
    section_insurance_title: 'Approved Insurance Partners',
    section_insurance_subtitle: 'We coordinate electronic direct billing with major regional and global health insurance networks.',
    section_testimonials_title: 'Patient Reflections',
    section_testimonials_subtitle: 'Authentic feedback from families and executives who place their healthcare confidence in Al Nura.',
    section_articles_title: 'Evidence-Based Health Insights',
    section_articles_subtitle: 'Peer-reviewed clinical guides authored by our consultant physicians for Gulf lifestyle wellness.',
    section_faq_title: 'Frequently Asked Questions',
    section_faq_subtitle: 'Clear answers concerning insurance, appointment scheduling, branch schedules, and patient care.',

    booking_page_title: 'Request a Medical Appointment',
    booking_page_subtitle: 'Select your preferred doctor, branch, and consultation date. Your structured request will open directly in WhatsApp for swift clinic confirmation.',
    booking_step_1: '1. Specialty & Doctor',
    booking_step_2: '2. Branch & Preferred Date',
    booking_step_3: '3. Patient Details',
    booking_step_4: '4. Summary & WhatsApp',
    booking_field_specialty: 'Medical Specialty',
    booking_field_specialty_placeholder: 'Select a specialty...',
    booking_field_doctor: 'Physician / Consultant',
    booking_field_doctor_placeholder: 'Select a doctor or any available...',
    booking_field_branch: 'Preferred Branch Location',
    booking_field_branch_placeholder: 'Select clinic branch...',
    booking_field_date: 'Preferred Appointment Date',
    booking_field_time: 'Preferred Time Slot',
    booking_field_time_placeholder: 'Select time window...',
    booking_field_patient_name: 'Patient Full Name',
    booking_field_phone: 'Mobile Contact Number (with Country Code)',
    booking_field_email: 'Email Address (Optional)',
    booking_field_patient_status: 'Patient Status',
    booking_patient_new: 'New Patient (First Visit)',
    booking_patient_existing: 'Existing Patient',
    booking_field_appointment_type: 'Appointment Type',
    booking_type_consultation: 'Initial In-Person Consultation',
    booking_type_followup: 'Follow-up Review',
    booking_type_second_opinion: 'Comprehensive Second Opinion',
    booking_type_telehealth: 'Telehealth Remote Consultation',
    booking_field_notes: 'Additional Medical Notes or Inquiries (Optional)',
    booking_field_notes_placeholder: 'Briefly describe your symptoms or specific request...',
    booking_summary_title: 'Appointment Request Summary',
    booking_summary_subtitle: 'Please review your details. When you proceed, WhatsApp will open with these details prefilled.',
    booking_disclaimer_notice: 'Important Notice: Your appointment request will be sent through WhatsApp. The clinic must confirm your appointment separately. No patient medical data is stored on this website.',
    booking_whatsapp_instruction: 'Upon clicking below, WhatsApp will launch with your request formatted. Please press "Send" in WhatsApp to dispatch it to our scheduling desk.',
    booking_validation_name: 'Please enter the patient’s full name.',
    booking_validation_phone: 'Please enter a valid mobile number with country code (e.g. +971 50 123 4567).',
    booking_validation_specialty: 'Please select a clinical specialty.',
    booking_validation_doctor: 'Please choose a doctor or select any available consultant.',
    booking_validation_branch: 'Please choose your preferred branch.',
    booking_validation_date: 'Please choose your preferred appointment date.',
    booking_validation_time: 'Please choose your preferred time window.',
    booking_completion_title: 'Request Prepared Successfully',
    booking_completion_desc: 'Your appointment request is ready in WhatsApp. Please send the message to contact our clinic. Our team will contact you to confirm your appointment.',
    action_done_close: 'Done – Close',
    action_back_to_website: 'Back to Website',
    booking_whatsapp_fallback: 'Click here if WhatsApp did not open automatically',

    filter_search_placeholder: 'Search doctor by name, specialty, or condition...',
    filter_all_specialties: 'All Specialties',
    filter_all_branches: 'All Branches',
    filter_gender: 'Doctor Gender',
    filter_gender_all: 'All Genders',
    filter_gender_female: 'Female Physicians',
    filter_gender_male: 'Male Physicians',
    filter_language: 'Spoken Language',
    filter_language_all: 'All Languages',
    filter_consultation_type: 'Consultation Format',
    filter_consultation_all: 'All Formats',
    filter_sort_by: 'Sort By',
    filter_sort_experience: 'Years of Experience (Highest)',
    filter_sort_name: 'Doctor Name (A-Z)',
    filter_results_count: 'Showing {count} doctors matching your criteria',
    filter_empty_title: 'No Doctors Found Matching Your Criteria',
    filter_empty_desc: 'Try adjusting or clearing your active filters to view all available medical specialists.',

    status_open_now: 'Open Now',
    status_closed: 'Closed',
    branch_hours_title: 'Weekly Clinical Schedule (UAE Asia/Dubai Time)',
    branch_valet: 'Valet Parking Available',
    branch_accessible: 'Step-Free Wheelchair Access',
    branch_phone_label: 'Direct Branch Reception',

    contact_page_title: 'Contact Al Nura Clinic & Inquiries',
    contact_page_subtitle: 'Have a medical inquiry, insurance question, or special request? Send us a message directly via WhatsApp or call our desk.',
    contact_field_inquiry_type: 'Nature of Inquiry',
    contact_type_general: 'General Clinic Inquiry',
    contact_type_appointment: 'Appointment Rescheduling / Inquiries',
    contact_type_doctor: 'Physician & Specialty Query',
    contact_type_services: 'Diagnostic Services & Packages',
    contact_type_insurance: 'Insurance Pre-Authorization & Direct Billing',
    contact_type_branch: 'Branch Location & Valet Access',
    contact_type_feedback: 'Patient Experience Feedback',
    contact_type_complaints: 'Confidential Patient Affairs',
    contact_field_message: 'Your Detailed Inquiry',
    contact_field_message_placeholder: 'Write your message or inquiry here...',
    contact_disclaimer: 'Notice: Messages sent via this form launch WhatsApp with your details prefilled. We do not store or process your personal health records on this server.',
    contact_validation_message: 'Please write your inquiry message.',

    sticky_book_appointment: 'Book Appointment',
    sticky_whatsapp_chat: 'WhatsApp Care',
    whatsapp_popup_title: 'Al Nura WhatsApp Concierge',
    whatsapp_popup_desc: 'Connect immediately with our UAE scheduling desk (+201017238942) for prompt assistance.',
    whatsapp_opt_book: '📅 Request New Appointment',
    whatsapp_opt_inquire: '💬 General Medical Inquiry',
    whatsapp_opt_branches: '📍 Branch Directions & Timings',

    footer_tagline: 'Delivering world-class clinical expertise, dignified patient experiences, and seamless medical coordination across the United Arab Emirates.',
    footer_quick_links: 'Quick Links',
    footer_clinical_specialties: 'Key Specialties',
    footer_branches: 'Our UAE Branches',
    footer_contact_info: 'Contact & Coordination',
    footer_working_hours: 'Central Operating Hours',
    footer_emergency_notice: 'For acute, life-threatening medical emergencies, immediately dial 998 for UAE National Ambulance Service.',
    footer_all_rights_reserved: 'All rights reserved.',
    footer_demo_notice: 'Demonstration Healthcare Website Prototype · Developed for preview & evaluation · Uses WhatsApp destination: +201017238942 · No persistent patient health storage.',
    legal_privacy_policy: 'Privacy Notice',
    legal_terms_conditions: 'Terms of Use',
    legal_cookie_policy: 'Cookie Policy',
    legal_medical_disclaimer: 'Medical Disclaimer',
    legal_cancellation_policy: 'Appointment & Cancellation Policy',
  },

  ar: {
    nav_home: 'الرئيسية',
    nav_doctors: 'الأطباء',
    nav_specialties: 'التخصصات',
    nav_services: 'الخدمات الطبية',
    nav_branches: 'الفروع',
    nav_about: 'عن العيادة',
    nav_insurance: 'التأمين الصحي',
    nav_resources: 'دليل المريض',
    nav_blog: 'المقالات الطبية',
    nav_faq: 'الأسئلة الشائعة',
    nav_contact: 'اتصل بنا والاستفسارات',
    nav_book_appointment: 'حجز موعد',
    nav_call_now: 'اتصل بالعيادة',
    nav_whatsapp: 'واتساب خدمة المرضى',

    announcement_text: 'نقبل كبرى شبكات التأمين الصحي بالدولة بنظام التغطية المباشرة في فروع داون تاون دبي ومارينا وأبوظبي.',
    announcement_call: 'الاستقبال المباشر: 2568 800 4 971+',
    announcement_emergency: 'طوارئ الدولة: 998',

    lang_switch_label: 'اللغة',
    current_lang_name: 'العربية',
    other_lang_name: 'English',

    action_book_appointment: 'حجز موعد طبي',
    action_book_with_doctor: 'طلب موعد عبر الواتساب',
    action_view_profile: 'عرض الملف الطبي',
    action_explore_doctors: 'استعراض دليل الأطباء',
    action_explore_specialties: 'عرض كافة التخصصات',
    action_view_all_services: 'استعراض الخدمات الشاملة',
    action_view_branches: 'استعراض مواقع الفروع',
    action_whatsapp_inquiry: 'محادثة فورية عبر واتساب',
    action_call_clinic: 'الاتصال بمكتب الاستقبال',
    action_get_directions: 'الاتجاهات عبر خرائط جوجل',
    action_submit_booking: 'إرسال طلب الحجز عبر واتساب',
    action_submit_inquiry: 'إرسال الاستفسار عبر واتساب',
    action_filter: 'تصفية النتائج',
    action_clear_filters: 'إعادة ضبط الفلاتر',
    action_read_article: 'قراءة المقال الطبي',
    action_back: 'رجوع',
    action_close: 'إغلاق النافذة',
    action_edit: 'تعديل البيانات',
    action_confirm_and_open_whatsapp: 'تأكيد وفتح تطبيق واتساب',
    action_learn_more: 'اكتشف المزيد',

    hero_badge: 'مركز طبي تخصصي معتمد بدولة الإمارات العربية المتحدة',
    hero_title_1: 'رعاية صحية رائدة،',
    hero_title_highlight: 'وتميز سريري فائق العناية',
    hero_title_2: 'في دولة الإمارات',
    hero_description: 'تجمع عيادة النورة الطبية نخبة من الاستشاريين الحاصلين على البوردات الغربية مع أحدث أجنحة الفحص والتشخيص المخبري وتجربة حجز مواعيد فورية وسلسة عبر الواتساب في دبي وأبوظبي.',
    hero_stat_1_val: '+١٨',
    hero_stat_1_label: 'تخصصاً وقسماً طبياً',
    hero_stat_2_val: '١٠٠٪',
    hero_stat_2_label: 'استشاريون يحملون البورد الغربي',
    hero_stat_3_val: '٣',
    hero_stat_3_label: 'فروع رئيسية في الإمارات',
    hero_stat_4_val: 'مباشرة',
    hero_stat_4_label: 'تغطية كبرى شركات التأمين',

    section_specialties_title: 'التخصصات والأقسام الطبية',
    section_specialties_subtitle: 'رعاية تخصصية متكاملة مصممة وفق أحدث المعايير الطبية المعتمدة لصحة الفرد والعائلة.',
    section_doctors_title: 'الهيئة الطبية الاستشارية',
    section_doctors_subtitle: 'أطباء وجراحون معتمدون دولياً بخبرات سريرية راسخة والتزام تام بأخلاقيات الطب الحديث.',
    section_why_choose_title: 'معايير التميز في عيادة النورة',
    section_why_choose_subtitle: 'ضيافة سريرية بمستوى خمس نجوم، انعدام فترات الانتظار، ودقة تشخيصية متناهية.',
    section_services_title: 'الفحوصات المتقدمة والبروتوكولات التشخيصية',
    section_services_subtitle: 'من برامج وقاية القلب والفحوصات التنفيذية حتى تقويم الأسنان الشفاف وتصوير الأجنة رباعي الأبعاد.',
    section_branches_title: 'فروعنا في أرقى مناطق الدولة',
    section_branches_subtitle: 'مواقع استراتيجية في داون تاون دبي ودبي مارينا وجزيرة المارية بأبوظبي مع خدمة صف السيارات.',
    section_booking_steps_title: 'رحلة حجز الموعد بخطوات يسيرة',
    section_booking_steps_subtitle: 'طلب موعدك مع طبيبك المفضل يستغرق أقل من دقيقة عبر الواتساب دون الحاجة لتحميل تطبيقات إضافية.',
    section_insurance_title: 'شركاء شبكات التأمين الصحي',
    section_insurance_subtitle: 'نوفر خدمة التغطية المباشرة والموافقات الإلكترونية السريعة مع أبرز شركات التأمين الوطنية والعالمية.',
    section_testimonials_title: 'آراء وشهادات المراجعين',
    section_testimonials_subtitle: 'تجارب واقعية لمرضانا وعائلاتهم الذين وضعوا ثقتهم في الرعاية الصحية بعيادة النورة.',
    section_articles_title: 'مقالات ورؤى طبية موثوقة',
    section_articles_subtitle: 'أدلة إرشادية مستندة للأبحاث الطبية كتبها استشاريونا لتعزيز صحة ونمط حياة سكان الخليج.',
    section_faq_title: 'الأسئلة الشائعة',
    section_faq_subtitle: 'إجابات شاملة حول التأمين الصحي، مواعيد العيادات، جداول الفروع، وكيفية الاستعداد للزيارة.',

    booking_page_title: 'طلب حجز موعد طبي',
    booking_page_subtitle: 'اختر التخصص والطبيب المفضل والفرع والتاريخ المناسب. سيتم فتح رسالة منظمة في تطبيق الواتساب لتأكيد موعدك مباشرة مع منسق العيادة.',
    booking_step_1: '١. التخصص والطبيب',
    booking_step_2: '٢. الفرع والتاريخ المفضل',
    booking_step_3: '٣. بيانات المريض',
    booking_step_4: '٤. الملخص والواتساب',
    booking_field_specialty: 'التخصص الطبي المطلوب',
    booking_field_specialty_placeholder: 'اختر التخصص الطبي...',
    booking_field_doctor: 'الطبيب / الاستشاري',
    booking_field_doctor_placeholder: 'اختر الطبيب أو أي استشاري متاح...',
    booking_field_branch: 'فرع العيادة المفضل',
    booking_field_branch_placeholder: 'اختر فرع العيادة...',
    booking_field_date: 'التاريخ المفضل للموعد',
    booking_field_time: 'الفترة الزمنية المفضلة',
    booking_field_time_placeholder: 'اختر توقيت الزيارة...',
    booking_field_patient_name: 'اسم المريض بالكامل',
    booking_field_phone: 'رقم الهاتف المحمول (مع رمز الدولة)',
    booking_field_email: 'البريد الإلكتروني (اختياري)',
    booking_field_patient_status: 'حالة المريض',
    booking_patient_new: 'مريض جديد (الزيارة الأولى)',
    booking_patient_existing: 'مريض حالي بالعيادة',
    booking_field_appointment_type: 'نوع الموعد',
    booking_type_consultation: 'استشارة أولية حضورية',
    booking_type_followup: 'مراجعة ومتابعة نتائج',
    booking_type_second_opinion: 'رأي طبي ثانٍ متكامل',
    booking_type_telehealth: 'استشارة طبية عن بُعد',
    booking_field_notes: 'ملاحظات إضافية أو وصف للأعراض (اختياري)',
    booking_field_notes_placeholder: 'اكتب بإيجاز أي تفاصيل أو متطلبات خاصة...',
    booking_summary_title: 'ملخص طلب حجز الموعد',
    booking_summary_subtitle: 'يرجى مراجعة التفاصيل. عند المتابعة سيتم فتح تطبيق الواتساب مع كتابة هذه البيانات مسبقاً.',
    booking_disclaimer_notice: 'تنبيه هام: سيتم إرسال طلب حجز الموعد عبر تطبيق الواتساب. وسيقوم المركز بتأكيد الموعد بشكل منفصل. لا يتم تخزين أي بيانات للمريض على هذا الموقع.',
    booking_whatsapp_instruction: 'عند الضغط على الزر أدناه، سيفتح تطبيق الواتساب برسالتك المجهزة. يرجى الضغط على زر "إرسال" في الواتساب لإتمام إرسال الطلب لمركز المواعيد.',
    booking_validation_name: 'يرجى إدخال اسم المريض بالكامل.',
    booking_validation_phone: 'يرجى إدخال رقم هاتف محمول صحيح مع مفتاح الدولة (مثال: 971501234567+).',
    booking_validation_specialty: 'يرجى اختيار التخصص الطبي.',
    booking_validation_doctor: 'يرجى اختيار الطبيب أو تحديد أي استشاري متاح.',
    booking_validation_branch: 'يرجى اختيار فرع العيادة.',
    booking_validation_date: 'يرجى تحديد التاريخ المفضل.',
    booking_validation_time: 'يرجى تحديد وقت الموعد المفضل.',
    booking_completion_title: 'تم تجهيز طلبك بنجاح',
    booking_completion_desc: 'تم تجهيز طلب الحجز في واتساب. يُرجى إرسال الرسالة للتواصل مع العيادة. سيقوم فريقنا بالتواصل معك لتأكيد الموعد.',
    action_done_close: 'تم – إغلاق',
    action_back_to_website: 'العودة للموقع',
    booking_whatsapp_fallback: 'اضغط هنا إذا لم يفتح تطبيق واتساب تلقائياً',

    filter_search_placeholder: 'ابحث عن طبيب بالاسم أو التخصص أو الأعراض...',
    filter_all_specialties: 'جميع التخصصات',
    filter_all_branches: 'جميع الفروع',
    filter_gender: 'جنس الطبيب',
    filter_gender_all: 'الكل (ذكور وإناث)',
    filter_gender_female: 'طبيبات فقط',
    filter_gender_male: 'أطباء فقط',
    filter_language: 'اللغة المنطوقة',
    filter_language_all: 'جميع اللغات',
    filter_consultation_type: 'طريقة الاستشارة',
    filter_consultation_all: 'كافة الخيارات',
    filter_sort_by: 'الترتيب حسب',
    filter_sort_experience: 'سنوات الخبرة (الأعلى أولاً)',
    filter_sort_name: 'اسم الطبيب (أبجدياً)',
    filter_results_count: 'عرض {count} أطباء يطابقون خيارات البحث',
    filter_empty_title: 'لم يتم العثور على أطباء يطابقون بحثك',
    filter_empty_desc: 'جرّب تعديل الفلاتر المحددة أو إعادة ضبطها لعرض كافة الكوادر الطبية المتوفرة.',

    status_open_now: 'مفتوح الآن',
    status_closed: 'مغلق',
    branch_hours_title: 'جدول الدوام الأسبوعي للفرع (توقيت الإمارات)',
    branch_valet: 'خدمة صف السيارات (فاليه) متوفرة',
    branch_accessible: 'مهيأ بالكامل لأصحاب الهمم',
    branch_phone_label: 'هاتف الاستقبال المباشر للفرع',

    contact_page_title: 'التواصل والاستفسارات الطبية',
    contact_page_subtitle: 'هل لديك استفسار طبي، سؤال حول التأمين، أو رغبة في التنسيق المسبق؟ تواصل معنا مباشرة عبر الواتساب أو اتصل بكاونتر العيادة.',
    contact_field_inquiry_type: 'تصنيف الاستفسار',
    contact_type_general: 'استفسار عام عن العيادة',
    contact_type_appointment: 'تعديل أو استفسار عن موعد',
    contact_type_doctor: 'سؤال حول الأطباء والتخصصات',
    contact_type_services: 'استفسار عن الفحوصات والباقات',
    contact_type_insurance: 'موافقات التأمين الصحي المباشر',
    contact_type_branch: 'مواقع الفروع والوصول والمواقف',
    contact_type_feedback: 'ملاحظات وتجربة المراجعين',
    contact_type_complaints: 'علاقات المرضى والسرية التامة',
    contact_field_message: 'نص الاستفسار أو الرسالة',
    contact_field_message_placeholder: 'اكتب استفسارك أو رسالتك هنا بالتفصيل...',
    contact_disclaimer: 'تنبيه: إرسال هذا النموذج يقوم بتجهيز رسالة الواتساب وفتحها للتواصل المباشر. لا نقوم بحفظ أو إرسال بياناتك الطبية لأي خادم.',
    contact_validation_message: 'يرجى كتابة نص الاستفسار أو الرسالة.',

    sticky_book_appointment: 'حجز موعد',
    sticky_whatsapp_chat: 'تواصل واتساب',
    whatsapp_popup_title: 'مساعد الواتساب الطبي',
    whatsapp_popup_desc: 'تواصل مباشرة مع فريق التنسيق الطبي بالدولة (+201017238942) لخدمة سريعة وفورية.',
    whatsapp_opt_book: '📅 طلب حجز موعد جديد',
    whatsapp_opt_inquire: '💬 استفسار طبي عام',
    whatsapp_opt_branches: '📍 مواقع الفروع وساعات العمل',

    footer_tagline: 'تقديم أرقى مستويات الرعاية السريرية المتخصصة، والخصوصية التامة، والتنسيق الطبي الميسر في دولة الإمارات العربية المتحدة.',
    footer_quick_links: 'روابط سريعة',
    footer_clinical_specialties: 'أبرز التخصصات',
    footer_branches: 'فروعنا في الإمارات',
    footer_contact_info: 'التواصل والتنسيق',
    footer_working_hours: 'ساعات العمل المركزية',
    footer_emergency_notice: 'في حالات الطوارئ الطبية الحرجة التي تهدد الحياة، يُرجى الاتصال فوراً بالإسعاف الوطني لدولة الإمارات على الرقم 998.',
    footer_all_rights_reserved: 'جميع الحقوق محفوظة.',
    footer_demo_notice: 'نسخة تجريبية نموذجية لموقع رعاية صحية · مصممة لأغراض العرض والتقييم · تعتمد رقم الواتساب: 201017238942+ · لا تتضمن تخزيناً لبيانات المرضى.',
    legal_privacy_policy: 'إشعار الخصوصية',
    legal_terms_conditions: 'شروط الاستخدام',
    legal_cookie_policy: 'سياسة ملفات تعريف الارتباط',
    legal_medical_disclaimer: 'إخلاء المسؤولية الطبية',
    legal_cancellation_policy: 'سياسة المواعيد والإلغاء',
  },
};

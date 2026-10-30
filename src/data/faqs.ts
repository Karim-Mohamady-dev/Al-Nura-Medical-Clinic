import { FAQItem } from '../types';

export const FAQS: FAQItem[] = [
  // Appointments
  {
    id: 'faq-1',
    category: 'appointments',
    question: {
      en: 'How does appointment booking work through WhatsApp?',
      ar: 'كيف تتم عملية حجز المواعيد عبر تطبيق الواتساب؟',
    },
    answer: {
      en: 'When you submit the appointment request form on our website, a structured summary message is automatically generated and opens directly in your WhatsApp app. You simply review and press Send. Our patient coordinator reviews the doctor’s schedule and replies promptly to confirm your exact consultation slot.',
      ar: 'عند تقديم نموذج طلب الموعد على الموقع، يتم تنسيق رسالة تحتوي على كافة التفاصيل وفتحها تلقائياً في تطبيق الواتساب الخاص بك. ما عليك سوى الضغط على زر الإرسال، وسيقوم منسق المواعيد بالرد الفوري لتأكيد الموعد المناسب لجدول الطبيب.',
    },
  },
  {
    id: 'faq-2',
    category: 'appointments',
    question: {
      en: 'Is my appointment confirmed immediately after sending the WhatsApp message?',
      ar: 'هل يعتبر الموعد مؤكداً بمجرد إرسال رسالة الواتساب؟',
    },
    answer: {
      en: 'The WhatsApp message is an official appointment request. Your booking is finalized as soon as our clinic coordinator verifies availability and sends you a written confirmation with calendar details and preparation instructions.',
      ar: 'رسالة الواتساب تمثل طلب حجز رسمي، ويتم تأكيد الموعد نهائياً بمجرد مراجعة المنسق لجدول الطبيب وإرسال رسالة تأكيد كتابية لك تحتوي على تفاصيل الموعد وتوجيهات الزيارة.',
    },
  },
  {
    id: 'faq-3',
    category: 'appointments',
    question: {
      en: 'Can I reschedule or cancel my appointment via WhatsApp?',
      ar: 'هل يمكنني تعديل أو إلغاء موعدي عبر الواتساب؟',
    },
    answer: {
      en: 'Yes. Simply send a quick reply to our WhatsApp number (+201017238942) with your name and requested time change. We kindly request at least 24 hours notice for rescheduling so that other patients may be accommodated.',
      ar: 'نعم بالتأكيد، يكفي إرسال رسالة عبر نفس محادثة الواتساب (+201017238942) تتضمن اسمك والموعد الجديد المطلوب. ونرجو إشعارنا قبل ٢٤ ساعة على الأقل لإتاحة الفرصة لمراجعين آخرين.',
    },
  },

  // Doctors
  {
    id: 'faq-4',
    category: 'doctors',
    question: {
      en: 'What credentials do the physicians at Al Nura Clinic hold?',
      ar: 'ما هي المؤهلات والشهادات التي يحملها أطباء عيادة النورة؟',
    },
    answer: {
      en: 'All consultants and specialists at Al Nura are fully licensed by Dubai Health Authority (DHA) and the Department of Health Abu Dhabi (DOH). Our physicians hold Western board certifications (CCST UK, French Board, German Facharzt, American Board) with average clinical experience exceeding 15 years.',
      ar: 'كافة الاستشاريين والأخصائيين في عيادة النورة مرخصون بالكامل من هيئة الصحة بدبي ودائرة الصحة بأبوظبي، ويحملون بوردات واعتمادات غربية مرموقة (البورد الأمريكي، الزمالة البريطانية، البورد الفرنسي، الفاخ أرتست الألماني) بمتوسط خبرة يتجاوز ١٥ عاماً.',
    },
  },
  {
    id: 'faq-5',
    category: 'doctors',
    question: {
      en: 'Can I request a female doctor for my consultation?',
      ar: 'هل يمكنني طلب طبيبة أنثى للمعاينة والاستشارة؟',
    },
    answer: {
      en: 'Yes. You can use the gender filter on our Doctors Directory page to view our experienced female consultants across Cardiology, Gynecology, Pediatrics, Dermatology, and Physiotherapy.',
      ar: 'نعم بالتأكيد. يمكنك استخدام فلتر الجنس في دليل الأطباء للاطلاع على الطبيبات الاستشاريات في تخصصات القلب، النساء، الأطفال، الجلدية، والعلاج الطبيعي.',
    },
  },

  // Specialties
  {
    id: 'faq-6',
    category: 'specialties',
    question: {
      en: 'Which medical specialties are offered at Al Nura Clinic?',
      ar: 'ما هي التخصصات الطبية المتوفرة في عيادة النورة؟',
    },
    answer: {
      en: 'We feature 12 primary clinical disciplines including Cardiology, Dermatology, Orthodontics, Pediatrics, Obstetrics & Gynecology, Orthopedics & Sports Medicine, ENT, Family Medicine, Gastroenterology, Physiotherapy, Ophthalmology, and Diagnostic Laboratory & Imaging.',
      ar: 'نوفر ١٢ تخصصاً طبياً رئيسياً تشمل أمراض القلب، الجلدية، تقويم الأسنان، طب الأطفال، النساء والولادة، جراحة العظام والطب الرياضي، الأنف والأذن والحنجرة، طب الأسرة، الجهاز الهضمي، العلاج الطبيعي، العيون، والمختبر والأشعة التشخيصية.',
    },
  },
  {
    id: 'faq-7',
    category: 'specialties',
    question: {
      en: 'Do I need a general physician referral before seeing a specialist?',
      ar: 'هل أحتاج إلى تحويل من طبيب عام قبل مقابلة الطبيب الاستشاري؟',
    },
    answer: {
      en: 'In most cases at Al Nura Clinic you may book directly with any specialist or consultant of your choice. Some specific insurance policies require a primary care referral for direct billing reimbursement.',
      ar: 'يمكنك في معظم الحالات حجز موعد مباشر مع أي استشاري دون الحاجة لتحويل، إلا إذا كانت وثيقة التأمين الصحي الخاصة بك تشترط إحالة أولية لتغطية التكاليف مباشرة.',
    },
  },

  // Services
  {
    id: 'faq-8',
    category: 'services',
    question: {
      en: 'How do I prepare for an Executive Annual Health Checkup?',
      ar: 'كيف أستعد للفحص الصحي الدوري والتنفيذي الشامل؟',
    },
    answer: {
      en: 'Please fast for 10-12 hours overnight prior to your morning appointment (water is permitted). Avoid strenuous exercise or heavy alcohol consumption the evening before, and wear comfortable two-piece clothing.',
      ar: 'يُرجى الصيام لمدة ١٠ إلى ١٢ ساعة خلال الليل قبل موعدك الصباحي (شرب الماء مسموح). تجنب التمارين الشاقة في الليلة السابقة وارتدِ ملابس قطنية مريحة مكونة من قطعتين.',
    },
  },
  {
    id: 'faq-9',
    category: 'services',
    question: {
      en: 'Are pediatric vaccinations available according to the UAE national immunization card?',
      ar: 'هل تتوفر تطعيمات الأطفال وفق جدول التطعيمات الوطني لدولة الإمارات؟',
    },
    answer: {
      en: 'Yes. Our pediatric department strictly adheres to DHA and MoHAP mandatory childhood immunization protocols. Vaccines are stored in continuous temperature-monitored medical cold chains and documented officially.',
      ar: 'نعم، يلتزم قسم طب الأطفال بدقة بجدول التطعيمات الإلزامي المعتمد من هيئة الصحة ووزارة الصحة، وتُحفظ اللقاحات في ثلاجات طبية إلكترونية مزودة بنظام مراقبة مستمرة للحرارة.',
    },
  },

  // Insurance
  {
    id: 'faq-10',
    category: 'insurance',
    question: {
      en: 'Which health insurance networks are accepted on a direct-billing basis?',
      ar: 'ما هي شبكات التأمين الصحي المقبولة بنظام التغطية والدفع المباشر؟',
    },
    answer: {
      en: 'We accept major UAE health insurance providers including Daman (Thiqa & Enhanced), GIG Gulf (AXA), NextCare, MetLife, Cigna, MedNet, Sukoon (Oman Insurance), and SAICO. Our insurance desk validates your card electronically in minutes.',
      ar: 'نقبل كبرى شبكات التأمين الصحي بالإمارات ومنها ضمان (ثقة والموسعة)، جي آي جي الخليج (أكسا)، نكست كير، ميتلايف، سيجنا، ميدنت، سكون، وسايكو. ويقوم مكتب التأمين بالتحقق الإلكتروني من بطاقتك خلال دقائق معدودة.',
    },
  },
  {
    id: 'faq-11',
    category: 'insurance',
    question: {
      en: 'What documents should I bring for my insurance direct billing claim?',
      ar: 'ما هي المستندات المطلوبة للاستفادة من التأمين المباشر؟',
    },
    answer: {
      en: 'Please present your original Emirates ID and your physical or digital health insurance card at reception. The Emirates ID is mandatory under UAE healthcare regulations for insurance verification.',
      ar: 'يُرجى إبراز بطاقة الهوية الإماراتية الأصلية وبطاقة التأمين الصحي (الفعلية أو الرقمية) عند مكتب الاستقبال، حيث تعد الهوية إلزامية بموجب اللوائح الصحية في الدولة للتحقق من التأمين.',
    },
  },

  // Branches
  {
    id: 'faq-12',
    category: 'branches',
    question: {
      en: 'Where are Al Nura clinics located in the UAE?',
      ar: 'أين تقع فروع عيادة النورة في دولة الإمارات؟',
    },
    answer: {
      en: 'We currently operate three flagship centers: Downtown Dubai (Boulevard Plaza Tower 1), Dubai Marina (Marina Promenade Walk), and Abu Dhabi (Al Maryah Island Financial District, Al Sila Tower). All branches feature dedicated parking and step-free accessibility.',
      ar: 'نمتلك حالياً ثلاثة فروع رئيسية: داون تاون دبي (برج بوليفارد بلازا ١)، دبي مارينا (ممشى مارينا بروميناد)، وأبوظبي (حي المارية المالي، برج السلع). وتتميز جميع الفروع بمواقف سيارات وسهولة وصول كاملة.',
    },
  },
  {
    id: 'faq-13',
    category: 'branches',
    question: {
      en: 'Is valet parking available at your clinic branches?',
      ar: 'هل تتوفر خدمة صف السيارات (الفاليه) في فروع المركز؟',
    },
    answer: {
      en: 'Yes. Complimentary 3-hour valet parking is provided at our Downtown Dubai and Abu Dhabi Al Maryah branches. Dubai Marina provides direct validated underground parking with elevator access.',
      ar: 'نعم. تتوفر خدمة صف السيارات المجانية لمدة ٣ ساعات في فرعي داون تاون دبي وأبوظبي جزيرة المارية، بينما يوفر فرع دبي مارينا مواقف سفلية مباشرة مع تصديق التذكرة مجاناً.',
    },
  },

  // Payments
  {
    id: 'faq-14',
    category: 'payments',
    question: {
      en: 'What payment methods are accepted if I am self-paying or have a copay?',
      ar: 'ما هي وسائل الدفع المقبولة للسداد الشخصي أو دفع نسبة التحمل؟',
    },
    answer: {
      en: 'We accept all major credit and debit cards (Visa, MasterCard, American Express), Apple Pay, Samsung Pay, and UAE Dirhams cash. We provide detailed itemized VAT invoices suitable for submission to private reimbursement providers.',
      ar: 'نقبل جميع بطاقات الائتمان والخصم المباشر (فيزا، ماستركارد، أمريكان إكسبريس)، أبل باي، سامسونج باي، والنقد بالدرهم الإماراتي، مع تزويدك بفاتورة ضريبية مفصلة ومعتمدة للاسترداد المالي.',
    },
  },

  // Support
  {
    id: 'faq-15',
    category: 'support',
    question: {
      en: 'What should I do in the event of an acute medical emergency?',
      ar: 'ما الذي يجب فعله في حالات الطوارئ الطبية الحرجة؟',
    },
    answer: {
      en: 'Al Nura is an outpatient specialty clinic. For life-threatening emergencies, severe chest pain, loss of consciousness, or major trauma, please immediately dial 998 for the UAE National Ambulance Service or proceed to the nearest emergency hospital.',
      ar: 'عيادة النورة هي مركز عيادات خارجية تخصصي. في حالات الطوارئ التي تهدد الحياة أو آلام الصدر الحادة أو فقدان الوعي، يُرجى الاتصال فوراً بالإسعاف الوطني لدولة الإمارات على الرقم 998 أو التوجه لأقرب قسم طوارئ في المستشفيات.',
    },
  },
  {
    id: 'faq-16',
    category: 'support',
    question: {
      en: 'How can I send general feedback or a confidential inquiry?',
      ar: 'كيف يمكنني إرسال ملاحظات أو استفسار خاص وسري؟',
    },
    answer: {
      en: 'You can use the Contact page form on our website to send an inquiry directly to our management team via WhatsApp, or email us at care@alnura-clinic.ae. Patient privacy and experience are paramount.',
      ar: 'يمكنك استخدام نموذج صفحة اتصل بنا لإرسال استفسارك مباشرة لإدارة رعاية المرضى عبر الواتساب، أو مراسلتنا على care@alnura-clinic.ae. خصوصية ورضا المرضى هما أولويتنا القصوى.',
    },
  },
];

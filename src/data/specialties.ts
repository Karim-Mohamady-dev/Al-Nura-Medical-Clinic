import { Specialty } from '../types';

export const SPECIALTIES: Specialty[] = [
  {
    id: 'cardiology',
    name: {
      en: 'Cardiology & Vascular Health',
      ar: 'أمراض القلب والأوعية الدموية',
    },
    shortDesc: {
      en: 'Advanced cardiovascular diagnostics, preventive screenings, hypertension and heart care.',
      ar: 'فحوصات قلبية متقدمة وتشخيص وقائي وعلاج ضغط الدم ورعاية متكاملة لصحة القلب.',
    },
    fullDesc: {
      en: 'Our Cardiology department provides comprehensive assessment and management of heart and vascular conditions utilizing state-of-the-art echocardiography, stress testing, continuous Holter monitoring, and tailored preventive cardiology pathways.',
      ar: 'يقدم قسم القلب تقييماً شاملاً لأمراض القلب والأوعية باستخدام أحدث أجهزة تخطيط صدى القلب واختبارات الجهد ومراقبة هولتر المستمرة وبرامج الوقاية القلبية المخصصة.',
    },
    iconName: 'HeartPulse',
    imageUrl: '/images/doctor_consultation_scene_1793322347413.jpg',
    services: [
      { en: 'Echocardiography & Doppler', ar: 'تخطيط صدى القلب والدوبلر' },
      { en: '24/48-Hour Holter ECG Monitoring', ar: 'مراقبة نبضات القلب بهولتر ٢٤/٤٨ ساعة' },
      { en: 'Treadmill Cardiac Stress Testing', ar: 'فحص الجهد القلبي على السير المتحرك' },
      { en: 'Hypertension Management Clinic', ar: 'عيادة ضبط ومتابعة ضغط الدم' },
    ],
    conditions: [
      { en: 'Coronary Artery Disease', ar: 'قصور الشرايين التاجية' },
      { en: 'Hypertension', ar: 'ارتفاع ضغط الدم' },
      { en: 'Arrhythmias & Palpitations', ar: 'اضطرابات النبض والخفقان' },
      { en: 'Hyperlipidemia & Cholesterol', ar: 'ارتفاع الكوليسترول والدهون الثلاثية' },
    ],
    faqs: [
      {
        question: { en: 'What should I wear for a cardiac stress test?', ar: 'ماذا يجب أن أرتدي لفحص الجهد القلبي؟' },
        answer: { en: 'Wear comfortable athletic clothing and running shoes. Avoid caffeine 12 hours prior.', ar: 'ارتدِ ملابس وأحذية رياضية مريحة وتجنب تناول الكافيين قبل ١٢ ساعة من الفحص.' },
      },
    ],
    featured: true,
  },
  {
    id: 'dermatology',
    name: {
      en: 'Dermatology & Aesthetic Medicine',
      ar: 'الجلدية والطب التجميلي',
    },
    shortDesc: {
      en: 'Medical dermatology, skin cancer screenings, laser treatments, and advanced cosmetic therapies.',
      ar: 'علاج الأمراض الجلدية وفحص الشامات بالليزر والعلاجات التجميلية المتطورة.',
    },
    fullDesc: {
      en: 'Combining evidence-based clinical dermatology with refined aesthetic medicine. We treat acute and chronic skin disorders, eczema, psoriasis, acne, and offer advanced non-surgical rejuvenation.',
      ar: 'نجمع بين طب الجلدية السريري الدقيق والحلول التجميلية غير الجراحية لعلاج الأكزيما والصدفية وحب الشباب وتجديد نضارة البشرة.',
    },
    iconName: 'Sparkles',
    imageUrl: '/images/clinic_facility_suite_1793322346030.jpg',
    services: [
      { en: 'Digital Dermoscopy Skin Screening', ar: 'التنظير الرقمي لفحص الشامات' },
      { en: 'Medical Laser Therapy', ar: 'العلاج بالليزر الطبي' },
      { en: 'Eczema & Psoriasis Management', ar: 'علاج الأكزيما والصدفية' },
      { en: 'Customized Rejuvenation & Peels', ar: 'التقشير العلاجي وتجديد البشرة' },
    ],
    conditions: [
      { en: 'Cystic Acne & Rosacea', ar: 'حب الشباب الشديد والوردية' },
      { en: 'Melasma & Hyperpigmentation', ar: 'الكلف والتصبغات الجلدية' },
      { en: 'Hair Thinning & Alopecia', ar: 'تساقط الشعر والثعلبة' },
      { en: 'Allergic Contact Dermatitis', ar: 'التهاب الجلد التماسي التحسسي' },
    ],
    faqs: [
      {
        question: { en: 'How often should I get a full skin mole check?', ar: 'كم مرة ينصح بإجراء فحص الشامات الجلدي؟' },
        answer: { en: 'In the UAE climate, an annual digital dermoscopy exam is recommended for everyone.', ar: 'في مناخ دولة الإمارات، يوصى بإجراء فحص سنوي رقمي للشامات للجميع.' },
      },
    ],
    featured: true,
  },
  {
    id: 'dentistry',
    name: {
      en: 'Dentistry & Orthodontics',
      ar: 'طب وجراحة وتجميل الأسنان',
    },
    shortDesc: {
      en: 'Preventive, restorative, implantology, and invisible orthodontics for radiant smiles.',
      ar: 'طب الأسنان الوقائي والترميمي والزراعة وتقويم الأسنان الشفاف لابتسامة واثقة.',
    },
    fullDesc: {
      en: 'Comprehensive oral health suite equipped with digital 3D intraoral scanners, pain-free laser dentistry, dental implants, Invisalign orthodontic aligners, and cosmetic veneers.',
      ar: 'جناح متكامل لصحة الفم والأسنان بأحدث الماسحات الرقمية ثلاثية الأبعاد وعلاجات الليزر غير المؤلمة وزراعة الأسنان والتقويم الشفاف.',
    },
    iconName: 'Smile',
    imageUrl: '/images/clinic_facility_suite_1793322346030.jpg',
    services: [
      { en: 'Digital Smile Design & Veneers', ar: 'تصميم الابتسامة الرقمي والقشور الخزفية' },
      { en: 'Clear Aligner Orthodontics', ar: 'تقويم الأسنان الشفاف' },
      { en: 'Titanium & Zirconia Dental Implants', ar: 'زراعة الأسنان بالتيتانيوم والزيركون' },
      { en: 'Laser Periodontal Therapy', ar: 'علاج اللثة المتقدم بالليزر' },
    ],
    conditions: [
      { en: 'Malocclusion & Crowded Teeth', ar: 'عدم تطابق الأسنان وازدحامها' },
      { en: 'Periodontitis & Gum Bleeding', ar: 'التهابات وأمراض اللثة' },
      { en: 'Tooth Enamel Wear & Erosion', ar: 'تآكل وتضرر مينا الأسنان' },
      { en: 'Missing Teeth', ar: 'فقدان الأسنان' },
    ],
    faqs: [
      {
        question: { en: 'Are 3D dental scans safe during pregnancy?', ar: 'هل المسح الرقمي للأسنان آمن أثناء الحمل؟' },
        answer: { en: 'Yes, optical 3D scanners emit zero ionizing radiation and are completely safe.', ar: 'نعم، الماسح الرقمي البصري لا يصدر أي إشعاع وهو آمن تماماً.' },
      },
    ],
    featured: true,
  },
  {
    id: 'pediatrics',
    name: {
      en: 'Pediatrics & Adolescent Care',
      ar: 'طب الأطفال ورعاية اليافعين',
    },
    shortDesc: {
      en: 'Gentle, compassionate healthcare from newborn checks through adolescent developmental wellness.',
      ar: 'رعاية صحية حانية وشاملة من فحوصات المواليد حتى نمو وتطور المراهقين.',
    },
    fullDesc: {
      en: 'Our pediatric team supports families through every milestone: newborn screenings, UAE mandatory vaccination schedules, childhood asthma, allergy profiling, and developmental assessments in child-friendly suites.',
      ar: 'يرافق فريقنا الطبي العائلات في كل مرحلة: فحوصات حديثي الولادة، جدول التطعيمات الإماراتي، علاج حساسية وربو الأطفال، ومتابعة التطور البدني والذهني في بيئة مبهجة ومريحة.',
    },
    iconName: 'Baby',
    imageUrl: '/images/doctor_consultation_scene_1793322347413.jpg',
    services: [
      { en: 'UAE Ministry Vaccination Schedule', ar: 'جدول تطعيمات وزارة الصحة والوقاية' },
      { en: 'Newborn & Developmental Milestones', ar: 'تقييم نمو حديثي الولادة والأطفال' },
      { en: 'Pediatric Allergy & Asthma Clinic', ar: 'عيادة حساسية وربو الأطفال' },
      { en: 'Nutritional & Growth Guidance', ar: 'إرشادات التغذية السليمة والنمو' },
    ],
    conditions: [
      { en: 'Childhood Respiratory Infections', ar: 'التهابات الجهاز التنفسي لدى الأطفال' },
      { en: 'Atopic Eczema & Food Allergies', ar: 'الأكزيما وحساسية الأغذية' },
      { en: 'Growth Faltering & Colic', ar: 'المغص واضطرابات زيادة الوزن' },
      { en: 'Pediatric Sleep Disturbances', ar: 'اضطرابات نوم الأطفال' },
    ],
    faqs: [
      {
        question: { en: 'Do you follow the UAE national vaccination card?', ar: 'هل تعتمدون سجل التطعيمات الوطني لدولة الإمارات؟' },
        answer: { en: 'Yes, our clinic strictly administers and records vaccines in line with DHA/MoHAP guidelines.', ar: 'نعم، نلتزم بدقة ببروتوكولات التطعيم المعتمدة من هيئة الصحة ووزارة الصحة.' },
      },
    ],
    featured: true,
  },
  {
    id: 'gynecology',
    name: {
      en: 'Obstetrics & Gynecology',
      ar: 'النساء والولادة وصحة المرأة',
    },
    shortDesc: {
      en: 'Dedicated women’s health, prenatal care, fertility counseling, and minimally invasive wellness.',
      ar: 'رعاية متخصصة لصحة المرأة ومتابعة الحمل واستشارات الخصوبة والعلاجات النسائية.',
    },
    fullDesc: {
      en: 'Specialized healthcare designed around women at every stage of life. From pre-conceptional counseling, 4D obstetric ultrasound, high-risk pregnancy monitoring, to hormonal management and menopause transitions.',
      ar: 'رعاية مصممة لصحة المرأة في مختلف مراحل العمر، من متابعة الحمل بالموجات فوق الصوتية رباعية الأبعاد، حتى توازن الهرمونات ومرحلة سن الأمان.',
    },
    iconName: 'Activity',
    imageUrl: '/images/clinic_facility_suite_1793322346030.jpg',
    services: [
      { en: '4D High-Resolution Fetal Ultrasound', ar: 'تصوير الجنين رباعي الأبعاد عالي الدقة' },
      { en: 'Comprehensive Antenatal Packages', ar: 'باقات متكاملة لرعاية ومتابعة الحمل' },
      { en: 'PCOS & Hormonal Optimization', ar: 'علاج تكيس المبايض واضطراب الهرمونات' },
      { en: 'Cervical Cancer Screening (Pap Smear)', ar: 'مسحة عنق الرحم والفحص المبكر' },
    ],
    conditions: [
      { en: 'Polycystic Ovary Syndrome (PCOS)', ar: 'متلازمة تكيس المبايض' },
      { en: 'Endometriosis & Pelvic Pain', ar: 'بطانة الرحم المهاجرة وآلام الحوض' },
      { en: 'Menstrual Irregularities', ar: 'اضطرابات وعدم انتظام الدورة الشهرية' },
      { en: 'Uterine Fibroids', ar: 'الألياف الرحمية' },
    ],
    faqs: [
      {
        question: { en: 'When should I book my first prenatal visit?', ar: 'متى ينبغي حجز أول زيارة لمتابعة الحمل؟' },
        answer: { en: 'Typically between weeks 6 and 8 of pregnancy for initial ultrasound viability check.', ar: 'عادة بين الأسبوع السادس والثامن لإجراء الفحص الأولي وتأكيد نبض الجنين.' },
      },
    ],
    featured: true,
  },
  {
    id: 'orthopedics',
    name: {
      en: 'Orthopedics & Sports Medicine',
      ar: 'جراحة العظام والطب الرياضي',
    },
    shortDesc: {
      en: 'Joint preservation, spinal care, sports injury rehabilitation, and modern pain relief.',
      ar: 'الحفاظ على المفاصل، علاج العمود الفقري، تأهيل الإصابات الرياضية وتسكين الآلام.',
    },
    fullDesc: {
      en: 'Dedicated to restoring mobility and eliminating musculoskeletal pain. We provide joint injections, arthroscopic surgery consultation, non-surgical spine decompression, and athlete rehabilitation.',
      ar: 'قسم متخصص في استعادة الحركة وتخفيف آلام المفاصل والعمود الفقري عبر الحقن العلاجية وجراحات المنظار والتأهيل الرياضي المتقدم.',
    },
    iconName: 'Bone',
    imageUrl: '/images/doctor_consultation_scene_1793322347413.jpg',
    services: [
      { en: 'Platelet-Rich Plasma (PRP) Joint Injections', ar: 'حقن البلازما الغنية بالصفائح للمفاصل' },
      { en: 'Sports Injury & Ligament Rehabilitation', ar: 'علاج إصابات الملاعب والأربطة' },
      { en: 'Non-Surgical Spine & Disc Decompression', ar: 'علاج الانزلاق الغضروفي بدون جراحة' },
      { en: 'Post-Fracture Orthopedic Care', ar: 'متابعة وتأهيل ما بعد الكسور' },
    ],
    conditions: [
      { en: 'Knee Osteoarthritis', ar: 'خشونة واحتكاك مفصل الركبة' },
      { en: 'Lumbar & Cervical Disc Herniation', ar: 'ديسك أسفل الظهر والرقبة' },
      { en: 'Rotator Cuff & Shoulder Impingement', ar: 'التهاب أوتار الكتف وتمزق الكفة المدورة' },
      { en: 'Ankle Sprains & Tendonitis', ar: 'التواء الكاحل والتهاب الأوتار' },
    ],
    faqs: [
      {
        question: { en: 'Can knee osteoarthritis be treated without surgery?', ar: 'هل يمكن علاج خشونة الركبة دون تدخل جراحي؟' },
        answer: { en: 'Yes, regenerative PRP, hyaluronic acid, and targeted physical therapy provide substantial relief in early-to-moderate stages.', ar: 'نعم، تساعد حقن البلازما وحمض الهيالورونيك والعلاج الطبيعي في المراحل المبكرة والمتوسطة بشكل ملحوظ.' },
      },
    ],
    featured: true,
  },
  {
    id: 'ent',
    name: {
      en: 'ENT (Otolaryngology)',
      ar: 'الأنف والأذن والحنجرة',
    },
    shortDesc: {
      en: 'Diagnosis and treatment for hearing loss, sinus congestion, vertigo, and snoring.',
      ar: 'تشخيص وعلاج ضعف السمع، الجيوب الأنفية، الدوار، ومشاكل الشخير وانقطاع التنفس.',
    },
    fullDesc: {
      en: 'Comprehensive diagnostics using high-definition fiberoptic endoscopy, audiometric hearing assessments, vestibular testing, and specialized treatments for chronic sinusitis and voice disorders.',
      ar: 'فحوصات دقيقة بالمناظير الضوئية عالية الدقة واختبارات قياس السمع وعلاج التهاب الجيوب المزمن ومشاكل التوازن والصوت.',
    },
    iconName: 'Ear',
    imageUrl: '/images/clinic_facility_suite_1793322346030.jpg',
    services: [
      { en: 'Video Nasal Endoscopy', ar: 'تنظير الأنف والجيوب بالفيديو' },
      { en: 'Pure Tone Audiometry Hearing Tests', ar: 'فحص قياس السمع بالنغمات النقية' },
      { en: 'Benign Positional Vertigo (BPPV) Maneuvers', ar: 'مناورات علاج دوار الوضعة الحركي' },
      { en: 'Snoring & Sleep Apnea Evaluation', ar: 'تقييم الشخير وانقطاع التنفس أثناء النوم' },
    ],
    conditions: [
      { en: 'Chronic Sinusitis & Polyps', ar: 'التهاب الجيوب الأنفية المزمن والزوائد' },
      { en: 'Deviated Nasal Septum', ar: 'انحراف وتعديل الحاجز الأنفي' },
      { en: 'Tinnitus & Hearing Loss', ar: 'طنين الأذن وضعف السمع' },
      { en: 'Vocal Cord Nodules & Hoarseness', ar: 'بحة الصوت وعقيدات الأحبال الصوتية' },
    ],
    faqs: [
      {
        question: { en: 'Is a nasal endoscopy painful?', ar: 'هل تنظير الأنف مؤلم؟' },
        answer: { en: 'No, a gentle topical numbing spray is applied, making it completely painless and quick.', ar: 'كلا، يتم تطبيق بخاخ موضعي مخدر خفيف مما يجعل الفحص مريحاً وسريعاً للغاية.' },
      },
    ],
    featured: false,
  },
  {
    id: 'family-medicine',
    name: {
      en: 'Family & General Medicine',
      ar: 'طب الأسرة والطب العام',
    },
    shortDesc: {
      en: 'First-line comprehensive health stewardship, executive health checks, and chronic illness care.',
      ar: 'الرعاية الصحية الأولية المتكاملة، الفحوصات الدورية الشاملة، ومتابعة الأمراض المزمنة.',
    },
    fullDesc: {
      en: 'Serving as your primary healthcare partner for routine prevention, acute illnesses, annual health checks, diabetes screening, and personalized lifestyle medicine programs.',
      ar: 'الشريك الطبي الأساسي لصحة العائلة، الفحوصات السنوية الوقائية، الفحص المبكر للسكري، وبرامج تعديل نمط الحياة المتوازنة.',
    },
    iconName: 'Stethoscope',
    imageUrl: '/images/doctor_consultation_scene_1793322347413.jpg',
    services: [
      { en: 'Executive Annual Health Checkups', ar: 'الفحص الطبي الدوري الشامل' },
      { en: 'Type 2 Diabetes Optimization', ar: 'خطة التحكم المتكاملة بالسكري' },
      { en: 'Travel Health & Vaccination Advice', ar: 'استشارات وصحة السفر والتطعيم' },
      { en: 'Acute Illness & Infection Care', ar: 'علاج النزلات والأمراض الحادة' },
    ],
    conditions: [
      { en: 'Metabolic Syndrome & Pre-diabetes', ar: 'متلازمة الأيض ومرحلة ما قبل السكري' },
      { en: 'Vitamin D Deficiency & Fatigue', ar: 'نقص فيتامين د والإرهاق المزمن' },
      { en: 'Gastrointestinal Upsets', ar: 'اضطرابات الجهاز الهضمي العارضة' },
      { en: 'Seasonal Allergies & Flu', ar: 'الحساسية الموسمية ونزلات الإنفلونزا' },
    ],
    faqs: [
      {
        question: { en: 'How long does an Executive Health Check take?', ar: 'كم يستغرق الفحص الصحي التنفيذي الشامل؟' },
        answer: { en: 'Approximately 2 hours including comprehensive fasting lab draws and physician review.', ar: 'حوالي ساعتين تشمل سحب العينات المخبرية على الريق ومراجعة الطبيب الاستشاري.' },
      },
    ],
    featured: true,
  },
  {
    id: 'gastroenterology',
    name: {
      en: 'Gastroenterology & Liver Health',
      ar: 'أمراض الجهاز الهضمي والكبد',
    },
    shortDesc: {
      en: 'Digestive tract care, endoscopy consultations, IBS management, and liver screenings.',
      ar: 'رعاية صحة الجهاز الهضمي، استشارات المناظير، علاج القولون العصبي، وفحوصات الكبد.',
    },
    fullDesc: {
      en: 'Expert care for digestive disorders, acid reflux (GERD), irritable bowel syndrome, fatty liver disease, and advanced endoscopic evaluations.',
      ar: 'خبرة متخصصة في علاج ارتجاع المريء، متلازمة القولون العصبي، دهون الكبد، واستشارات المناظير الهضمية التشخيصية والعلاجية.',
    },
    iconName: 'ShieldAlert',
    imageUrl: '/images/clinic_facility_suite_1793322346030.jpg',
    services: [
      { en: 'Gastroscopy & Colonoscopy Consults', ar: 'استشارات مناظير المعدة والقولون' },
      { en: 'IBS & Gut Microbiome Management', ar: 'علاج متلازمة القولون وصحة البكتيريا النافعة' },
      { en: 'H. Pylori Breath Test & Treatment', ar: 'فحص وعلاج جرثومة المعدة عبر التنفس' },
      { en: 'Fatty Liver FibroScan Evaluation', ar: 'تقييم دهون وتليف الكبد بجهاز الفايبروسكان' },
    ],
    conditions: [
      { en: 'Gastroesophageal Reflux Disease (GERD)', ar: 'ارتجاع المريء وحموضة المعدة المزمنة' },
      { en: 'Irritable Bowel Syndrome (IBS)', ar: 'متلازمة القولون العصبي' },
      { en: 'Non-Alcoholic Fatty Liver (NAFLD)', ar: 'الكبد الدهني غير الكحولي' },
      { en: 'Celiac & Gluten Intolerance', ar: 'الداء الزلاقي وحساسية الجلوتين' },
    ],
    faqs: [
      {
        question: { en: 'Do I need to fast before an H. Pylori breath test?', ar: 'هل يلزم الصيام قبل فحص جرثومة المعدة بالتنفس؟' },
        answer: { en: 'Yes, fast for at least 4 hours before the test for accurate detection.', ar: 'نعم، يجب الصيام لمدة ٤ ساعات على الأقل قبل الفحص لضمان دقة النتيجة.' },
      },
    ],
    featured: false,
  },
  {
    id: 'physiotherapy',
    name: {
      en: 'Physiotherapy & Rehabilitation',
      ar: 'العلاج الطبيعي والتأهيل الحركي',
    },
    shortDesc: {
      en: 'One-on-one kinetic therapy, posture correction, dry needling, and sports recovery.',
      ar: 'جلسات فردية للعلاج الحركي، تصحيح القوام، الإبر الجافة، والتعافي الرياضي.',
    },
    fullDesc: {
      en: 'Equipped with private treatment cubicles and functional rehabilitation gym. Our physiotherapists design customized kinetic recovery plans for chronic spine pain, post-surgical recovery, and athletic conditioning.',
      ar: 'مجهز بكبائن علاج خاصة وصالة تأهيل حركي متكاملة. يضع أخصائيونا برامج علاجية مخصصة لآلام الظهر والرقبة وتأهيل ما بعد الجراحات والإصابات الرياضية.',
    },
    iconName: 'Sparkle',
    imageUrl: '/images/clinic_facility_suite_1793322346030.jpg',
    services: [
      { en: 'Dry Needling & Myofascial Release', ar: 'الإبر الجافة وتحرير اللفافة العضلية' },
      { en: 'Spinal Posture & Ergonomics Rehab', ar: 'تأهيل وتصحيح انحناءات العمود الفقري' },
      { en: 'Post-Operative Orthopedic Therapy', ar: 'التأهيل الحركي بعد العمليات الجراحية' },
      { en: 'Tecar & Deep Heat Therapy', ar: 'العلاج الحراري العميق بجهاز التيكار' },
    ],
    conditions: [
      { en: 'Cervicogenic Neck & Headaches', ar: 'آلام الرقبة والصداع العنقي' },
      { en: 'Lower Back Sciatica & Stiffness', ar: 'ألم عرق النسا وتيبس أسفل الظهر' },
      { en: 'Frozen Shoulder (Adhesive Capsulitis)', ar: 'الكتف المتجمدة وتيبس المفصل' },
      { en: 'Plantar Fasciitis', ar: 'التهاب اللفافة الأخمصية بمسمار القدم' },
    ],
    faqs: [
      {
        question: { en: 'Does health insurance in the UAE cover physiotherapy?', ar: 'هل يغطي التأمين الصحي في الإمارات جلسات العلاج الطبيعي؟' },
        answer: { en: 'Most comprehensive UAE insurance policies cover physiotherapy sessions with a physician referral.', ar: 'تغطي معظم وثائق التأمين بالإمارات جلسات العلاج الطبيعي عند وجود إحالة طبية.' },
      },
    ],
    featured: false,
  },
  {
    id: 'laboratory',
    name: {
      en: 'Diagnostic Laboratory & Imaging',
      ar: 'المختبر التشخيصي والأشعة',
    },
    shortDesc: {
      en: 'High-throughput automated laboratory, rapid biochemistry, hormonal assays, and ultrasound.',
      ar: 'مختبر آلي عالي الدقة لفحوصات الدم والكيمياء الحيوية والهرمونات والتصوير التلفزيوني.',
    },
    fullDesc: {
      en: 'Our CAP-standard in-house automated laboratory produces rapid, gold-standard diagnostic insights: biochemistry, hematology, immunology, tumor markers, and diagnostic ultrasound scans.',
      ar: 'مختبر معتمد يقدم نتائج دقيقة وسريعة لفحوصات الدم الشاملة، تحاليل الهرمونات، كفاءة الغدة الدرقية، وفحوصات السونار التشخيصية.',
    },
    iconName: 'FlaskConical',
    imageUrl: '/images/medical_laboratory_dx_1793322347324.jpg',
    services: [
      { en: 'Comprehensive Metabolic & Lipid Panels', ar: 'فحوصات وظائف الكبد والكلى والدهون' },
      { en: 'Thyroid & Complete Hormonal Profiles', ar: 'تحاليل الغدة الدرقية والهرمونات' },
      { en: 'Food Intolerance & Allergen Testing', ar: 'فحص عدم تحمل الأطعمة والحساسية' },
      { en: 'Abdominal & Soft Tissue Ultrasound', ar: 'الموجات فوق الصوتية للبطن والأنسجة' },
    ],
    conditions: [
      { en: 'Anemia & Iron Deficiencies', ar: 'فقر الدم ونقص الحديد والفيتامينات' },
      { en: 'Thyroid Dysfunction (Hypo/Hyper)', ar: 'خمول أو فرط نشاط الغدة الدرقية' },
      { en: 'Inflammatory Markers (CRP, ESR)', ar: 'مؤشرات الالتهاب المناعي' },
      { en: 'Liver & Renal Impairments', ar: 'اعتلال وظائف الكبد والكلى' },
    ],
    faqs: [
      {
        question: { en: 'When do I receive routine blood test results?', ar: 'متى تصدر نتائج تحاليل الدم الروتينية؟' },
        answer: { en: 'Most routine biochemistry and CBC results are ready within 2 to 4 hours.', ar: 'تتوفر معظم نتائج صورة الدم ووظائف الأعضاء خلال ساعتين إلى ٤ ساعات.' },
      },
    ],
    featured: false,
  },
  {
    id: 'ophthalmology',
    name: {
      en: 'Ophthalmology & Eye Care',
      ar: 'طب وجراحة العيون',
    },
    shortDesc: {
      en: 'Vision correction, dry eye therapy, glaucoma monitoring, and diabetic retinopathy exams.',
      ar: 'فحص النظر، علاج جفاف العين، مراقبة ضغط العين، وفحص شبكية مرضى السكري.',
    },
    fullDesc: {
      en: 'State-of-the-art optical suite with non-contact tonometry, optical coherence tomography (OCT), and specialized treatments for dry eye syndrome prevalent in arid environments.',
      ar: 'جناح عيون متطور مزود بأحدث أجهزة قياس ضغط العين وتصوير الشبكية الطبقي (OCT) وعلاجات متخصصة لجفاف العين الشائع في المنطقة.',
    },
    iconName: 'Eye',
    imageUrl: '/images/clinic_facility_suite_1793322346030.jpg',
    services: [
      { en: 'High-Definition Optical Coherence Tomography (OCT)', ar: 'التصوير المقطعي للشبكية عالي الدقة' },
      { en: 'IPL & Thermal Pulsation Dry Eye Therapy', ar: 'علاج جفاف العين بالنبضات الضوئية' },
      { en: 'Computer Vision Syndrome Screening', ar: 'فحص إجهاد العين الناتج عن الشاشات' },
      { en: 'Glaucoma & Intraocular Pressure Tracking', ar: 'فحص ومتابعة ضغط العين والمياه الزرقاء' },
    ],
    conditions: [
      { en: 'Severe Evaporative Dry Eye', ar: 'متلازمة جفاف العين التبخيري' },
      { en: 'Diabetic Retinal Changes', ar: 'اعتلال الشبكية السكري' },
      { en: 'Blepharitis & Meibomian Gland Dysfunction', ar: 'التهاب حواف الجفون والغدد الدهنية' },
      { en: 'Refractive Errors (Myopia & Astigmatism)', ar: 'عيوب الإبصار وقصر النظر والاستجماتيزم' },
    ],
    faqs: [
      {
        question: { en: 'Does screen time permanently damage the eyes?', ar: 'هل استخدام الشاشات يضر بالعين بشكل دائم؟' },
        answer: { en: 'Prolonged exposure induces eye strain and severe tear film evaporation, both treatable with specialized drops and ergonomic habits.', ar: 'يسبب إجهاداً وجفافاً في الغشاء الدمعي، ويمكن علاجه بقطرات مخصصة وتنظيم فترات الراحة.' },
      },
    ],
    featured: false,
  },
];

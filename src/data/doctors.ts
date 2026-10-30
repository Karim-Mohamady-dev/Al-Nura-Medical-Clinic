import { Doctor } from '../types';

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-amina-al-hashimi',
    name: {
      en: 'Dr. Amina Al-Hashimi',
      ar: 'د. أمينة الهاشمي',
    },
    title: {
      en: 'Consultant Cardiologist & Heart Rhythm Specialist',
      ar: 'استشارية أمراض القلب واضطرابات النبض',
    },
    specialtyId: 'cardiology',
    specialtyName: {
      en: 'Cardiology',
      ar: 'أمراض القلب',
    },
    subspecialty: {
      en: 'Echocardiography & Preventive Cardiology',
      ar: 'تخطيط صدى القلب وطب القلب الوقائي',
    },
    qualifications: {
      en: 'FRCP (UK), FACC (USA), CCT Cardiology (London)',
      ar: 'زمالة الكلية الملكية للأطباء (بريطانيا)، زمالة الكلية الأمريكية لطب القلب',
    },
    experienceYears: 18,
    languages: ['Arabic', 'English', 'French'],
    gender: 'female',
    branchIds: ['downtown-dubai', 'abu-dhabi-al-maryah'],
    avatarUrl: '/images/doctor_consultation_scene_1793322347413.jpg',
    bio: {
      en: 'Dr. Amina is a renowned UAE consultant cardiologist with over 18 years of clinical experience across leading teaching hospitals in London and Dubai. She specializes in non-invasive cardiac imaging, arterial hypertension, and women’s cardiovascular health.',
      ar: 'تعد الدكتورة أمينة من أبرز استشاريي أمراض القلب في دولة الإمارات، بخبرة سريرية تتجاوز ١٨ عاماً في مستشفيات لندن ودبي الجامعية. تتخصص في التصوير القلبي غير الجراحي، وارتفاع ضغط الدم الشرياني، وصحة القلب للمرأة.',
    },
    expertise: [
      { en: 'Stress Echocardiography', ar: 'تخطيط صدى القلب الإجهادي' },
      { en: 'Women’s Heart Disease', ar: 'أمراض القلب لدى النساء' },
      { en: 'Arterial Hypertension Optimization', ar: 'ضبط ضغط الدم الشرياني المعقد' },
      { en: 'Cardiac Biomarker Analysis', ar: 'تحليل المؤشرات الحيوية القلبية' },
    ],
    conditionsTreated: [
      { en: 'Coronary Artery Disease', ar: 'قصور الشريان التاجي' },
      { en: 'Heart Failure with Preserved Ejection Fraction', ar: 'قصور عضلة القلب' },
      { en: 'Syncope & Unexplained Dizziness', ar: 'نوبات الإغماء والدوار القلبي' },
      { en: 'Elevated Lipoprotein(a)', ar: 'ارتفاع البروتين الدهني القلبي' },
    ],
    treatments: [
      { en: '24-hour Ambulatory Blood Pressure Profiling', ar: 'تخطيط ضغط الدم على مدار ٢٤ ساعة' },
      { en: 'Cardiopulmonary Exercise Testing', ar: 'اختبار الجهد القلبي الرئوي' },
      { en: 'Holter Arrhythmia Detection', ar: 'تشخيص اضطرابات النظم بجهاز هولتر' },
    ],
    workingDays: {
      en: 'Mon, Tue, Thu (Downtown Dubai) · Sat (Abu Dhabi)',
      ar: 'الإثنين، الثلاثاء، الخميس (داون تاون دبي) · السبت (أبوظبي)',
    },
    consultationTypes: ['in-person', 'telehealth', 'second-opinion'],
    featured: true,
  },
  {
    id: 'dr-karim-mansour',
    name: {
      en: 'Dr. Karim Mansour',
      ar: 'د. كريم منصور',
    },
    title: {
      en: 'Consultant Dermatologist & Mohs Micrographic Surgeon',
      ar: 'استشاري الأمراض الجلدية وجراحة موس الدقيقة',
    },
    specialtyId: 'dermatology',
    specialtyName: {
      en: 'Dermatology',
      ar: 'الجلدية والتجميل',
    },
    subspecialty: {
      en: 'Aesthetic Laser Medicine & Skin Oncology',
      ar: 'طب الليزر التجميلي وأورام الجلد السطحية',
    },
    qualifications: {
      en: 'MD, Board Certified Dermatology (France), Fellow ASDS',
      ar: 'دكتوراه الطب، البورد الفرنسي في الأمراض الجلدية، زمالة الجمعية الأمريكية لجراحة الجلد',
    },
    experienceYears: 15,
    languages: ['Arabic', 'English', 'French'],
    gender: 'male',
    branchIds: ['downtown-dubai', 'dubai-marina'],
    avatarUrl: '/images/clinic_facility_suite_1793322346030.jpg',
    bio: {
      en: 'Trained at Saint-Louis Hospital in Paris, Dr. Karim Mansour brings sophisticated aesthetic judgment coupled with rigorous diagnostic precision to dermatology. He is a recognized authority on photoprotection and pigmentary disorders in Gulf skin phototypes.',
      ar: 'تلقى الدكتور كريم تدريبه في مستشفى سان لويس بباريس، ويجمع بين الحس التجميلي الرفيع والدقة التشخيصية الصارمة. خبير معتمد في الحماية من الشمس وعلاج تصبغات البشرة للأنماط الخليجية.',
    },
    expertise: [
      { en: 'Digital Photofinder Mole Mapping', ar: 'الخرائط الرقمية للشامات بجهاز فوتوفايندر' },
      { en: 'Fractional Pico Laser Resurfacing', ar: 'تجديد البشرة بليزر البيكو والفركشنال' },
      { en: 'Complex Cystic Acne Protocols', ar: 'بروتوكولات حب الشباب المتكيس المتقدمة' },
      { en: 'Melasma & Hormonal Pigmentation', ar: 'علاج الكلف والتصبغات الهرمونية' },
    ],
    conditionsTreated: [
      { en: 'Severe Psoriasis & Atopic Eczema', ar: 'الصدفية الحادة والأكزيما التأتبية' },
      { en: 'Sun-Induced Actinic Keratosis', ar: 'التقرن الشعاعي الناتج عن أشعة الشمس' },
      { en: 'Alopecia Areata & Scarring Hair Loss', ar: 'الثعلبة البقعية وتساقط الشعر التندبي' },
      { en: 'Rosacea & Facial Telangiectasia', ar: 'الوردية وتوسع الشعيرات الدموية الوجهية' },
    ],
    treatments: [
      { en: 'Subcision & RF Microneedling for Scars', ar: 'تقطيع الندبات والإبر الدقيقة بالتردد الراديوي' },
      { en: 'Targeted Biologic Therapy Infusions', ar: 'العلاجات البيولوجية الموجهة لأمراض الجلد' },
      { en: 'Customized Medical Peeling', ar: 'التقشير الكيميائي الطبي التخصصي' },
    ],
    workingDays: {
      en: 'Mon, Wed, Fri (Dubai Marina) · Tue, Thu (Downtown)',
      ar: 'الإثنين، الأربعاء، الجمعة (دبي مارينا) · الثلاثاء، الخميس (داون تاون)',
    },
    consultationTypes: ['in-person', 'telehealth'],
    featured: true,
  },
  {
    id: 'dr-layla-al-mazrouei',
    name: {
      en: 'Dr. Layla Al-Mazrouei',
      ar: 'د. ليلى المزروعي',
    },
    title: {
      en: 'Consultant Obstetrician & Gynecologist',
      ar: 'استشارية جراحة النساء والولادة وطب الأجنة',
    },
    specialtyId: 'gynecology',
    specialtyName: {
      en: 'Obstetrics & Gynecology',
      ar: 'النساء والولادة',
    },
    subspecialty: {
      en: 'Maternal-Fetal Medicine & Minimally Invasive Surgery',
      ar: 'طب الأجنة والحمل الحرج والجراحة النسائية بالمنظار',
    },
    qualifications: {
      en: 'MRCOG (UK), MD (McGill), Fellowship Maternal Fetal Medicine',
      ar: 'عضوية الكلية الملكية لأطباء النساء والتوليد (لندن)، دكتوراه من جامعة ماكجيل بكندا',
    },
    experienceYears: 16,
    languages: ['Arabic', 'English'],
    gender: 'female',
    branchIds: ['downtown-dubai', 'abu-dhabi-al-maryah'],
    avatarUrl: '/images/doctor_consultation_scene_1793322347413.jpg',
    bio: {
      en: 'Dr. Layla provides empathetic, high-tier obstetric and gynecological care tailored for contemporary women. Her patient philosophy emphasizes holistic birth planning, early screening, and empowering women through thorough medical education.',
      ar: 'تقدم الدكتورة ليلى رعاية نسائية وتوليدية راقية ترتكز على التعاطف والخصوصية التامة، وتدعم خطط الولادة الطبيعية الآمنة، الفحص المبكر لصحة الجنين، وتوازن الهرمونات النسائية.',
    },
    expertise: [
      { en: 'High-Resolution 4D Fetal Anomaly Scans', ar: 'تصوير تفصيلي لسلامة الجنين رباعي الأبعاد' },
      { en: 'Polycystic Ovarian Syndrome (PCOS)', ar: 'علاج متلازمة تكيس المبايض التكاملي' },
      { en: 'Minimally Invasive Hysteroscopy', ar: 'تنظير الرحم التشخيصي والعلاجي الدقيق' },
      { en: 'Recurrent Pregnancy Loss Workup', ar: 'فحوصات الإجهاض المتكرر وتأخر الحمل' },
    ],
    conditionsTreated: [
      { en: 'High-Risk Pregnancies', ar: 'حالات الحمل عالي الخطورة' },
      { en: 'Endometriosis Pain & Adenomyosis', ar: 'آلام بطانة الرحم المهاجرة وتغدد الرحم' },
      { en: 'Postpartum Pelvic Floor Laxity', ar: 'ضعف عضلات الحوض بعد الولادة' },
      { en: 'Menopausal Vasomotor Symptoms', ar: 'أعراض هبات الحرارة في سن الأمان' },
    ],
    treatments: [
      { en: 'Comprehensive Antenatal Ultrasound', ar: 'فحوصات الموجات فوق الصوتية الشاملة للحمل' },
      { en: 'Hormone Replacement Therapy (HRT) Balancing', ar: 'العلاج التعويضي المتوازن بالهرمونات البديلة' },
      { en: 'ThinPrep Liquid Cytology Pap Smears', ar: 'مسحات عنق الرحم بالسائل عالي الدقة' },
    ],
    workingDays: {
      en: 'Sun, Tue, Wed (Downtown Dubai) · Thu (Abu Dhabi)',
      ar: 'الأحد، الثلاثاء، الأربعاء (داون تاون دبي) · الخميس (أبوظبي)',
    },
    consultationTypes: ['in-person', 'telehealth', 'second-opinion'],
    featured: true,
  },
  {
    id: 'dr-tariq-el-sherif',
    name: {
      en: 'Dr. Tariq El-Sherif',
      ar: 'د. طارق الشريف',
    },
    title: {
      en: 'Consultant Orthopedic Surgeon & Sports Traumatologist',
      ar: 'استشاري جراحة العظام وإصابات الملاعب الرياضية',
    },
    specialtyId: 'orthopedics',
    specialtyName: {
      en: 'Orthopedics',
      ar: 'جراحة العظام',
    },
    subspecialty: {
      en: 'Knee & Shoulder Arthroscopy, Joint Preservation',
      ar: 'مناظير الركبة والكتف وعلاجات ترميم المفاصل',
    },
    qualifications: {
      en: 'MBBS, FRCS (Tr & Orth) Edinburgh, Fellowship Zurich',
      ar: 'زمالة كلية الجراحين الملكية بإدنبرة (إصابات وجراحة العظام)، زمالة ميونخ وزيورخ',
    },
    experienceYears: 20,
    languages: ['Arabic', 'English', 'German'],
    gender: 'male',
    branchIds: ['downtown-dubai', 'abu-dhabi-al-maryah'],
    avatarUrl: '/images/doctor_consultation_scene_1793322347413.jpg',
    bio: {
      en: 'Having served as consulting surgeon for elite sports teams across Europe and the GCC, Dr. Tariq El-Sherif brings unmatched expertise in knee ligament reconstruction, meniscus repair, and non-surgical biological cartilage therapies.',
      ar: 'عمل استشارياً رياضياً للعديد من الأندية الرياضية المرموقة في أوروبا والخليج العربي. يتمتع بخبرة واسعة في عمليات الرباط الصليبي، وترميم الغضاريف الهلالية، وحقن الخلايا التجديدية للمفاصل.',
    },
    expertise: [
      { en: 'ACL & Multi-Ligament Knee Reconstruction', ar: 'ترميم وإعادة بناء الرباط الصليبي والأربطة' },
      { en: 'Rotator Cuff Arthroscopic Repair', ar: 'إصلاح أوتار مفصل الكتف بالمنظار الجراحي' },
      { en: 'Autologous Conditioned Plasma (ACP) Injections', ar: 'حقن البلازما التجديدية الذاتية المركزة' },
      { en: 'Complex Spine Posture Optimization', ar: 'علاج انحرافات وآلام العمود الفقري' },
    ],
    conditionsTreated: [
      { en: 'Meniscus Tears & Chondral Defects', ar: 'تمزق الغضروف الهلالي وعيوب الغضاريف' },
      { en: 'Calcific Tendinitis of the Shoulder', ar: 'التهاب أوتار الكتف المتكلسة' },
      { en: 'Early & Moderate Knee Osteoarthritis', ar: 'خشونة مفصل الركبة المبكرة والمتوسطة' },
      { en: 'Patellofemoral Pain Syndrome', ar: 'آلام مفصل الرضفة وعظمة الصابونة' },
    ],
    treatments: [
      { en: 'Ultrasound-Guided Viscosupplementation', ar: 'حقن حمض الهيالورونيك الموجهة بالسونار' },
      { en: 'High-Concentration PRP Joint Infiltration', ar: 'حقن المفاصل بتركيزات البلازما العالية' },
      { en: 'Extracorporeal Shockwave Therapy (ESWT)', ar: 'العلاج بالموجات التصادمية لتكلس الأوتار' },
    ],
    workingDays: {
      en: 'Mon, Wed (Downtown Dubai) · Tue, Thu (Abu Dhabi)',
      ar: 'الإثنين، الأربعاء (داون تاون دبي) · الثلاثاء، الخميس (أبوظبي)',
    },
    consultationTypes: ['in-person', 'second-opinion'],
    featured: true,
  },
  {
    id: 'dr-sarah-jenkins',
    name: {
      en: 'Dr. Sarah Jenkins',
      ar: 'د. سارة جنكينز',
    },
    title: {
      en: 'Specialist Pediatrician & Neonatal Care Physician',
      ar: 'أخصائية طب الأطفال وحديثي الولادة',
    },
    specialtyId: 'pediatrics',
    specialtyName: {
      en: 'Pediatrics',
      ar: 'طب الأطفال',
    },
    subspecialty: {
      en: 'Pediatric Allergy & Child Neuro-Development',
      ar: 'حساسية الأطفال والنمو العصبي السلوكي',
    },
    qualifications: {
      en: 'MBChB (Manchester), MRCPCH (UK), DHA Licensed Specialist',
      ar: 'بكالوريوس الطب والجراحة (مانشستر)، عضوية الكلية الملكية لطب الأطفال (لندن)',
    },
    experienceYears: 13,
    languages: ['English', 'Spanish'],
    gender: 'female',
    branchIds: ['downtown-dubai', 'dubai-marina'],
    avatarUrl: '/images/clinic_facility_suite_1793322346030.jpg',
    bio: {
      en: 'Dr. Sarah Jenkins is cherished by Dubai families for her calm, reassuring clinical presence. Specializing in childhood allergy management, eczema flareups, infant feeding milestones, and pediatric asthma prevention.',
      ar: 'تحظى الدكتورة سارة بتقدير كبير من العائلات في دبي لأسلوبها المطمئن مع الأطفال. متخصصة في تشخيص وعلاج حساسية الصدر والأنف، وتغذية الرضع، والتحكم في نوبات الربو الموسمي.',
    },
    expertise: [
      { en: 'Infant Food Allergies & Eczema', ar: 'حساسية الأغذية والأكزيما عند الرضع' },
      { en: 'Childhood Asthma Inhaler Plans', ar: 'خطط الوقاية والتحكم بربو الأطفال' },
      { en: 'Developmental Screening & Speech Milestones', ar: 'متابعة مراحل النمو والنطق والتطور' },
      { en: 'Pediatric Immunity & Vaccination Safety', ar: 'مناعة الأطفال وبرامج التطعيمات المعتمدة' },
    ],
    conditionsTreated: [
      { en: 'Recurrent Tonsillitis & Ear Infections', ar: 'التهابات اللوزتين والأذن الوسطى المتكررة' },
      { en: 'Infant Colic & Gastroesophageal Reflux', ar: 'مغص الرضع والارتجاع المعدي المريئي' },
      { en: 'Allergic Rhinitis & Adenoid Hypertrophy', ar: 'حساسية الأنف وتضخم اللحمية' },
      { en: 'Childhood Growth Faltering', ar: 'بطء زيادة الوزن وقصر القامة النسبي' },
    ],
    treatments: [
      { en: 'Skin Prick Allergen Testing', ar: 'اختبار وخز الجلد للحساسية' },
      { en: 'UAE Ministry Growth Tracking Audits', ar: 'تقييم منحنيات النمو المعتمدة بالإمارات' },
      { en: 'Preventive Well-Child Surveillance', ar: 'الفحص الدوري الشامل لصحة الطفل' },
    ],
    workingDays: {
      en: 'Sun, Mon, Wed (Dubai Marina) · Thu, Sat (Downtown)',
      ar: 'الأحد، الإثنين، الأربعاء (دبي مارينا) · الخميس، السبت (داون تاون)',
    },
    consultationTypes: ['in-person', 'telehealth'],
    featured: true,
  },
  {
    id: 'dr-omar-al-zaabi',
    name: {
      en: 'Dr. Omar Al-Zaabi',
      ar: 'د. عمر الزعابي',
    },
    title: {
      en: 'Consultant Orthodontist & Invisible Aligner Master',
      ar: 'استشاري تقويم الأسنان وجراحة الفكين التقويمية',
    },
    specialtyId: 'dentistry',
    specialtyName: {
      en: 'Dentistry',
      ar: 'طب وتقويم الأسنان',
    },
    subspecialty: {
      en: 'Invisalign Diamond Provider & Digital Smile Architecture',
      ar: 'مقدم معتمد ماسي لتقويم الإنفزلاين وتصميم الابتسامة',
    },
    qualifications: {
      en: 'BDS, MSc Orthodontics (Sweden), MOrth RCS (Edinburgh)',
      ar: 'ماجستير تقويم الأسنان من السويد، عضوية كلية الجراحين الملكية بإدنبرة',
    },
    experienceYears: 17,
    languages: ['Arabic', 'English'],
    gender: 'male',
    branchIds: ['downtown-dubai', 'dubai-marina'],
    avatarUrl: '/images/clinic_facility_suite_1793322346030.jpg',
    bio: {
      en: 'Dr. Omar Al-Zaabi is an internationally recognized orthodontist celebrated for minimally invasive, invisible tooth alignment protocols. He combines 3D facial aesthetic harmony with fast-tracked orthodontic biomechanics.',
      ar: 'استشاري تقويم أسنان إماراتي معروف بدقة تخطيطه لتقويم الأسنان غير المرئي. يركز على تناسق ملامح الوجه والابتسامة باستخدام أحدث تقنيات المحاكاة ثلاثية الأبعاد.',
    },
    expertise: [
      { en: 'Clear Aligner Orthodontics (Invisalign)', ar: 'التقويم الشفاف بدون أسلاك معدنية' },
      { en: 'Surgical Orthodontic Planning', ar: 'التخطيط التقويمي للجراحات التقويمية للفكين' },
      { en: 'Adult Deep Bite & Crossbite Correction', ar: 'تصحيح العضة العميقة والمعكوسة للبالغين' },
      { en: 'Accelerated Orthodontic Mechanics', ar: 'تقنيات تسريع حركة الأسنان الآمنة' },
    ],
    conditionsTreated: [
      { en: 'Severe Dental Crowding', ar: 'ازدحام وتراكب الأسنان الشديد' },
      { en: 'Spacing & Diastema', ar: 'الفراغات والمسافات بين الأسنان' },
      { en: 'Temporomandibular Joint (TMJ) Strain', ar: 'إجهاد وطقطقة مفصل الفك الصدغي' },
      { en: 'Relapsed Post-Braces Misalignment', ar: 'انتكاس حركة الأسنان بعد التقويم السابق' },
    ],
    treatments: [
      { en: 'iTero 5D Lumina Optical Scan', ar: 'المسح الرقمي الفوري بجهاز آيتيرو 5D' },
      { en: 'Custom Digital Retainers Fabrication', ar: 'تفصيل مثبتات الأسنان الرقمية الدقيقة' },
      { en: 'Accelerated Low-Friction Bracket Systems', ar: 'أنظمة الحاصرات التقويمية ذاتية الإغلاق' },
    ],
    workingDays: {
      en: 'Sun, Tue, Thu (Downtown) · Wed, Sat (Dubai Marina)',
      ar: 'الأحد، الثلاثاء، الخميس (داون تاون) · الأربعاء، السبت (دبي مارينا)',
    },
    consultationTypes: ['in-person', 'telehealth'],
    featured: false,
  },
  {
    id: 'dr-fatima-nour',
    name: {
      en: 'Dr. Fatima Nour',
      ar: 'د. فاطمة نور',
    },
    title: {
      en: 'Consultant Family Physician & Preventive Medicine Specialist',
      ar: 'استشارية طب الأسرة والطب الوقائي ونمط الحياة',
    },
    specialtyId: 'family-medicine',
    specialtyName: {
      en: 'Family Medicine',
      ar: 'طب الأسرة',
    },
    subspecialty: {
      en: 'Longevity Medicine & Metabolic Optimization',
      ar: 'طب طول العمر الصحي وضبط متلازمة الأيض',
    },
    qualifications: {
      en: 'MBBS, MRCGP (UK), Board Certified Lifestyle Medicine (ABLM)',
      ar: 'عضوية الكلية الملكية البريطانية للممارسين العامين، البورد الأمريكي لطب نمط الحياة',
    },
    experienceYears: 14,
    languages: ['Arabic', 'English'],
    gender: 'female',
    branchIds: ['downtown-dubai', 'dubai-marina', 'abu-dhabi-al-maryah'],
    avatarUrl: '/images/doctor_consultation_scene_1793322347413.jpg',
    bio: {
      en: 'Dr. Fatima Nour champions proactive longevity medicine, focusing on root-cause identification rather than mere symptom management. She leads Al Nura’s Executive Health Assessment programs.',
      ar: 'تقود الدكتورة فاطمة نور برامج الفحص الدوري الشامل والتنفيذي في عيادة النورة، مع تركيز دقيق على الكشف المبكر عن السكري ومقاومة الإنسولين وبرامج تعزيز الحيوية وطول العمر الصحي.',
    },
    expertise: [
      { en: 'Comprehensive Executive Health Profiling', ar: 'الفحوصات التنفيذية الدورية الشاملة' },
      { en: 'Type 2 Diabetes Reversal Strategies', ar: 'استراتيجيات تحسين ومقاومة السكري' },
      { en: 'Thyroid & Adrenal Fatigue Assessments', ar: 'تقييم كفاءة الغدة الدرقية والغدة الكظرية' },
      { en: 'Personalized Nutritional & Micronutrient Plans', ar: 'خطط التغذية الدقيقة والمكملات المصممة' },
    ],
    conditionsTreated: [
      { en: 'Insulin Resistance & Prediabetes', ar: 'مقاومة الإنسولين ومرحلة ما قبل السكري' },
      { en: 'Chronic Fatigue & Sleep Deprivation', ar: 'الإرهاق المزمن واضطرابات جودة النوم' },
      { en: 'Subclinical Hypothyroidism', ar: 'قصور الغدة الدرقية تحت السريري' },
      { en: 'Functional Gastrointestinal Bloating', ar: 'الانتفاخ واضطراب وظائف الهضم' },
    ],
    treatments: [
      { en: 'Continuous Glucose Monitor (CGM) Calibration', ar: 'تركيب ومعايرة مجسات قياس السكر المستمرة' },
      { en: 'Comprehensive Cardiovascular Risk Scoring', ar: 'تقييم مخاطر الأوعية الدموية المستقبلي' },
      { en: 'Targeted Vitamin & Antioxidant IV Therapy', ar: 'علاجات الفيتامينات ومضادات الأكسدة الوريدية' },
    ],
    workingDays: {
      en: 'Mon, Wed (Downtown) · Tue (Marina) · Fri (Abu Dhabi)',
      ar: 'الإثنين، الأربعاء (داون تاون) · الثلاثاء (مارينا) · الجمعة (أبوظبي)',
    },
    consultationTypes: ['in-person', 'telehealth', 'second-opinion'],
    featured: true,
  },
  {
    id: 'dr-zayd-kabbani',
    name: {
      en: 'Dr. Zayd Kabbani',
      ar: 'د. زيد قباني',
    },
    title: {
      en: 'Consultant ENT & Rhinology Surgeon',
      ar: 'استشاري جراحة الأنف والأذن والحنجرة وجراحة الجيوب الأنفية',
    },
    specialtyId: 'ent',
    specialtyName: {
      en: 'ENT',
      ar: 'الأنف والأذن والحنجرة',
    },
    subspecialty: {
      en: 'Endoscopic Sinus Surgery & Snoring Solutions',
      ar: 'جراحة الجيوب بالمنظار وعلاج الشخير',
    },
    qualifications: {
      en: 'MD, German Board in ENT (Facharzt), European Board ORL-HNS',
      ar: 'البورد الألماني في جراحة الأنف والأذن والحنجرة (فاخ أرتست)، البورد الأوروبي',
    },
    experienceYears: 19,
    languages: ['Arabic', 'English', 'German'],
    gender: 'male',
    branchIds: ['downtown-dubai', 'abu-dhabi-al-maryah'],
    avatarUrl: '/images/doctor_consultation_scene_1793322347413.jpg',
    bio: {
      en: 'Dr. Zayd earned his specialization in Hannover, Germany, accumulating deep surgical acumen in complex endoscopic sinus surgeries, balloon sinuplasty, nasal airway reconstruction, and obstructive sleep apnea.',
      ar: 'نال تخصصه في هانوفر بألمانيا، ويمتلك مهارة جراحية عالية في عمليات الجيوب الأنفية المتقدمة بالمنظار، وتوسيع الجيوب بالبالون، وتعديل انحراف الحاجز الأنفي وعلاج انقطاع التنفس أثناء النوم.',
    },
    expertise: [
      { en: 'Functional Endoscopic Sinus Surgery (FESS)', ar: 'جراحة الجيوب الأنفية الوظيفية بالمنظار' },
      { en: 'Minimally Invasive Balloon Sinuplasty', ar: 'توسيع الجيوب الأنفية بالبالون دون جراحة' },
      { en: 'Radiofrequency Turbinate Reduction', ar: 'تصغير قرنيات الأنف بالتردد الحراري' },
      { en: 'Snoring & Palate Stiffening Treatments', ar: 'علاج الشخير وترهل سقف الحلق' },
    ],
    conditionsTreated: [
      { en: 'Refractory Chronic Rhinosinusitis', ar: 'التهاب الجيوب الأنفية المزمن المقاوم للأدوية' },
      { en: 'Severe Nasal Septal Deviation', ar: 'انحراف وتضيق مجرى التنفس الأنفي' },
      { en: 'Eustachian Tube Dysfunction', ar: 'انسداد واعتلال قناة استاكيوس بالأذن' },
      { en: 'Laryngeal Reflux & Vocal Fatigue', ar: 'الارتجاع الحنجري وإجهاد الصوت' },
    ],
    treatments: [
      { en: 'High-Definition Video Nasopharyngoscopy', ar: 'فحص البلعوم والأنف بالمنظار فائق الوضوح' },
      { en: 'Tympanometry & Middle Ear Impedance', ar: 'فحص ضغط الأذن الوسطى وحركة الطبلة' },
      { en: 'Home Sleep Study Apnea Diagnostics', ar: 'الفحص المنزلي لاضطرابات التنفس أثناء النوم' },
    ],
    workingDays: {
      en: 'Sun, Tue (Abu Dhabi) · Wed, Thu, Sat (Downtown)',
      ar: 'الأحد، الثلاثاء (أبوظبي) · الأربعاء، الخميس، السبت (داون تاون)',
    },
    consultationTypes: ['in-person', 'second-opinion'],
    featured: false,
  },
  {
    id: 'dr-nadia-boussaid',
    name: {
      en: 'Dr. Nadia Boussaid',
      ar: 'د. نادية بو سعيد',
    },
    title: {
      en: 'Senior Lead Physiotherapist & Kinetic Movement Specialist',
      ar: 'أخصائية أولى في العلاج الطبيعي والتأهيل الحركي المتقدم',
    },
    specialtyId: 'physiotherapy',
    specialtyName: {
      en: 'Physiotherapy',
      ar: 'العلاج الطبيعي والتأهيل',
    },
    subspecialty: {
      en: 'Spine Rehabilitation & Dry Needling Certified',
      ar: 'تأهيل العمود الفقري وشهادة الإبر الجافة المعتمدة',
    },
    qualifications: {
      en: 'DPT, CMPT, Dry Needling Certification (South Africa)',
      ar: 'دكتوراه العلاج الطبيعي، أخصائية علاج يدوي معتمد، جنوب أفريقيا',
    },
    experienceYears: 12,
    languages: ['Arabic', 'English', 'French'],
    gender: 'female',
    branchIds: ['downtown-dubai', 'dubai-marina'],
    avatarUrl: '/images/clinic_facility_suite_1793322346030.jpg',
    bio: {
      en: 'Dr. Nadia specializes in spine health, postural realignment, and neuromuscular motor retraining. She works closely with patients recovering from herniated discs, sports injuries, and chronic office-related postural strain.',
      ar: 'تتخصص الدكتورة نادية في صحة العمود الفقري، وإعادة التوازن العضلي الحركي، وعلاج آلام الانزلاق الغضروفي، وتيبس الرقبة وأسفل الظهر الناتج عن بيئات العمل المكتبية.',
    },
    expertise: [
      { en: 'Spinal Decompression & Manual Mobilization', ar: 'تخفيف ضغط الفقرات والتحريك اليدوي للمفاصل' },
      { en: 'Dry Needling Trigger Point Release', ar: 'تحرير نقاط الألم العضلي بالإبر الجافة' },
      { en: 'Clinical Pilates & Core Kinetic Stability', ar: 'تمارين البيلاتس العلاجية لثبات الجذع' },
      { en: 'Post-Surgical Joint Rehabilitation', ar: 'برامج التأهيل الحركي بعد العمليات الجراحية' },
    ],
    conditionsTreated: [
      { en: 'Lumbar Disc Bulge & Sciatic Pain', ar: 'بروز الديسك القطني وآلام عرق النسا' },
      { en: 'Chronic Tension Neck Pain & Migraines', ar: 'آلام الرقبة التوترية المزمنة والصداع' },
      { en: 'Hamstring & Calf Tendinopathies', ar: 'اعتلال وتمزق أوتار الفخذ والساق' },
      { en: 'Postural Kyphosis & Forward Head Posture', ar: 'تقوس الظهر وانحناء الرأس للأمام' },
    ],
    treatments: [
      { en: 'Targeted Radiofrequency Tecar Therapy', ar: 'العلاج بالتردد الراديوي لتسريع الشفاء' },
      { en: 'Kinetic Movement Screening & Retraining', ar: 'تقييم الحركة الحركية وإعادة تصحيح النمط' },
      { en: 'Ergonomic Workplace Assessment Advisory', ar: 'استشارات تصحيح الوضعيات المكتبية المريحة' },
    ],
    workingDays: {
      en: 'Mon, Wed, Fri (Downtown) · Tue, Thu, Sat (Dubai Marina)',
      ar: 'الإثنين، الأربعاء، الجمعة (داون تاون) · الثلاثاء، الخميس، السبت (دبي مارينا)',
    },
    consultationTypes: ['in-person'],
    featured: false,
  },
  {
    id: 'dr-hassan-qasim',
    name: {
      en: 'Dr. Hassan Qasim',
      ar: 'د. حسن قاسم',
    },
    title: {
      en: 'Consultant Gastroenterologist & Hepatologist',
      ar: 'استشاري أمراض الجهاز الهضمي والكبد والمناظير',
    },
    specialtyId: 'gastroenterology',
    specialtyName: {
      en: 'Gastroenterology',
      ar: 'الجهاز الهضمي والكبد',
    },
    subspecialty: {
      en: 'Advanced Diagnostic Endoscopy & IBS Therapeutics',
      ar: 'المناظير الهضمية المتقدمة وعلاج القولون العصبي',
    },
    qualifications: {
      en: 'MBChB, MRCP (London), FRCP, AGA Fellow',
      ar: 'عضوية وزمالة الكلية الملكية للأطباء (لندن)، زمالة الجمعية الأمريكية للجهاز الهضمي',
    },
    experienceYears: 21,
    languages: ['Arabic', 'English'],
    gender: 'male',
    branchIds: ['downtown-dubai', 'dubai-marina'],
    avatarUrl: '/images/doctor_consultation_scene_1793322347413.jpg',
    bio: {
      en: 'With over two decades of clinical mastery in gastroenterology, Dr. Hassan Qasim provides comprehensive consultations for acid peptic disorders, inflammatory bowel disease, fatty liver, and complex abdominal symptoms.',
      ar: 'بخبرة طبية تفوق عقدين في الجهاز الهضمي، يقدم الدكتور حسن قاسم استشارات متكاملة لأمراض ارتجاع المريء، والقولون التقرحي، والكبد الدهني، وعلاج عسر الهضم المزمن.',
    },
    expertise: [
      { en: 'Screening Colonoscopy & Polypectomy Consults', ar: 'استشارات فحص القولون الوقائي وإزالة الزوائد' },
      { en: 'Gut Microbiome & Chronic Bloating Care', ar: 'علاج اضطراب بكتيريا الأمعاء والانتفاخ' },
      { en: 'Non-Invasive Liver FibroScan Staging', ar: 'قياس مرونة ودهون الكبد بجهاز فايبروسكان' },
      { en: 'Inflammatory Bowel Disease (IBD) Optimization', ar: 'متابعة داء كرون والتهاب القولون التقرحي' },
    ],
    conditionsTreated: [
      { en: 'Severe Acid Reflux & Barrett’s Esophagus', ar: 'ارتجاع المريء الشديد ومريء باريت' },
      { en: 'Irritable Bowel Syndrome with Constipation/Diarrhea', ar: 'القولون العصبي المصحوب بالإمساك أو الإسهال' },
      { en: 'Metabolic Associated Steatotic Liver (MASLD)', ar: 'دهون الكبد المرتبطة بالتمثيل الغذائي' },
      { en: 'Chronic Dyspepsia & Indigestion', ar: 'عسر الهضم المزمن وحرقة المعدة' },
    ],
    treatments: [
      { en: '13C-Urea Breath Testing for H. Pylori', ar: 'فحص جرثومة المعدة الدقيق بنظير اليوريا' },
      { en: 'Comprehensive Food Intolerance Panel Review', ar: 'تحليل عدم تحمل الأطعمة ومسببات الحساسية' },
      { en: 'Biological Infusion Guidance for Colitis', ar: 'العلاجات البيولوجية المتقدمة لقولون تقرحي' },
    ],
    workingDays: {
      en: 'Sun, Tue, Thu (Dubai Marina) · Mon, Wed (Downtown)',
      ar: 'الأحد، الثلاثاء، الخميس (دبي مارينا) · الإثنين، الأربعاء (داون تاون)',
    },
    consultationTypes: ['in-person', 'telehealth', 'second-opinion'],
    featured: false,
  },
];

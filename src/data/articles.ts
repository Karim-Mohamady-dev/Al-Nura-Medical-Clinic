import { MedicalArticle } from '../types';

export const MEDICAL_ARTICLES: MedicalArticle[] = [
  {
    id: 'art-1',
    slug: 'cardiac-health-in-the-gulf-climate',
    title: {
      en: 'Heart Health in Warm Climates: Hydration, Electrolytes, and Blood Pressure',
      ar: 'صحة القلب في المناخ الحار: أهمية السوائل، الأملاح، وضبط ضغط الدم',
    },
    excerpt: {
      en: 'Understanding how high ambient temperatures affect vascular dilation, blood pressure readings, and why annual screenings remain crucial.',
      ar: 'كيف تؤثر درجات الحرارة المرتفعة على تمدد الأوعية الدموية وقراءات الضغط، ولماذا تبقى الفحوصات السنوية ضرورة لا غنى عنها.',
    },
    content: [
      {
        en: 'Living in the Arabian Gulf offers abundant sunshine, but the intense heat demands proactive awareness of cardiovascular mechanics. High temperatures induce cutaneous vasodilation—the widening of superficial blood vessels to radiate excess heat. This natural cooling mechanism can inadvertently lower blood pressure, causing lightheadedness, while dehydration concentrates the blood, increasing cardiovascular workload.',
        ar: 'تتميز منطقة الخليج العربي بطقس مشمس على مدار العام، غير أن درجات الحرارة المرتفعة تتطلب وعياً بآليات عمل القلب والشرايين. يؤدي التعرض للحرارة إلى توسع الأوعية الدموية السطحية للتخلص من الحرارة الزائدة، ما قد يؤدي لانخفاض ضغط الدم المفاجئ، في حين يزيد نقص السوائل من لزوجة الدم وإجهاد عضلة القلب.',
      },
      {
        en: 'For individuals managing hypertension or taking ACE inhibitors and beta-blockers, summer temperature shifts often require tailored dosage reviews by a consultant cardiologist. Maintaining adequate hydration is not merely about water volume; balanced electrolytes (potassium, sodium, magnesium) are vital for steady cardiac electrical rhythm.',
        ar: 'بالنسبة للمصابين بارتفاع ضغط الدم أو الذين يتناولون أدوية موسعة للشرايين، قد يستدعي الانتقال بين الفصول مراجعة الجرعات مع الطبيب الاستشاري. كما أن الحفاظ على الترطيب لا يقتصر على كمية الماء فقط، بل يحتاج توازناً في الأملاح المعدنية (البوتاسيوم والمغنيسيوم) لضمان انتظام ضربات القلب.',
      },
      {
        en: 'We advocate for an annual resting echocardiogram and comprehensive lipid subfraction panel for all residents aged 35 and above, ensuring that vascular elasticity and coronary perfusion are preserved proactively.',
        ar: 'ننصح بإجراء فحص سنوي لصدى القلب (الإيكو) وفحص الدهون الشامل لجميع المقيمين في الدولة ابتداءً من سن ٣٥ عاماً، لحماية مرونة الشرايين وتدفق الدم للقلب بشكل وقائي.',
      },
    ],
    category: { en: 'Cardiology', ar: 'أمراض القلب' },
    authorName: { en: 'Dr. Amina Al-Hashimi', ar: 'د. أمينة الهاشمي' },
    authorTitle: { en: 'Consultant Cardiologist', ar: 'استشارية أمراض القلب' },
    publishDate: 'April 14, 2026',
    readTimeMinutes: 5,
    featured: true,
    tags: [
      { en: 'Heart Health', ar: 'صحة القلب' },
      { en: 'Hydration', ar: 'السوائل والترطيب' },
      { en: 'Prevention', ar: 'الوقاية' },
    ],
  },
  {
    id: 'art-2',
    slug: 'sun-protection-and-skin-pigmentation-uae',
    title: {
      en: 'Photoprotection & Melasma in the UAE: Evidence-Based Dermatology Insights',
      ar: 'الحماية من الشمس وتصبغات الكلف في الإمارات: رؤى طبية مستندة للأدلة',
    },
    excerpt: {
      en: 'Why broad-spectrum protection against UVA, UVB, and High Energy Visible (HEV) blue light is essential for preventing pigmentary relapse.',
      ar: 'أهمية الحماية واسعة النطاق من أشعة الشمس والضوء الأزرق لمنع عودة تصبغات البشرة والكلف المستعصي.',
    },
    content: [
      {
        en: 'In the UAE, the UV index frequently reaches extreme values (11+). For individuals with Fitzpatrick skin types III through V, sun exposure rapidly stimulates melanocytes, triggering stubborn melasma and post-inflammatory hyperpigmentation. Traditional sunscreens that solely block UVB are inadequate; modern dermatological consensus highlights High Energy Visible (HEV) blue light and infrared heat as equally potent pigmentation catalysts.',
        ar: 'يصل مؤشر الأشعة فوق البنفسجية في دولة الإمارات إلى مستويات قياسية (١١ فما فوق). بالنسبة لأصحاب البشرة الحنطية والشرقية، يؤدي التعرض للشمس إلى تنشيط الخلايا الصبغية بشكل متسارع، مما يسبب الكلف العنيد. وتؤكد الأبحاث الحديثة أن الضوء الأزرق والحرارة يساهمان في ظهور التصبغات بنفس درجة أشعة الشمس.',
      },
      {
        en: 'Effective management requires tinted mineral sunscreens containing iron oxides, which physically block visible light wavelengths. Pairing physical sunscreens with stabilized oral antioxidants such as polypodium leucotomos creates a dual-layer defense system against cutaneous oxidative stress.',
        ar: 'تتطلب خطة العلاج الناجحة استخدام واقيات شمس معدنية تحتوي على أكاسيد الحديد التي تشكل حاجزاً فيزيائياً ضد الضوء المرئي، إلى جانب مضادات الأكسدة الموضعية مثل فيتامين سي لتعزيز مقاومة البشرة للإجهاد التأكسدي.',
      },
      {
        en: 'Annual digital mole mapping using epiluminescence dermoscopy remains the single most effective tool for distinguishing benign solar lentigines from suspicious dysplastic lesions.',
        ar: 'يبقى الفحص السنوي الرقمي للشامات بجهاز الديرموسكوب الطريقة الأكثر أماناً للتفريق بين التصبغات الشمسية السطحية والوحمات غير النمطية التي تتطلب عناية خاصة.',
      },
    ],
    category: { en: 'Dermatology', ar: 'الجلدية والتجميل' },
    authorName: { en: 'Dr. Karim Mansour', ar: 'د. كريم منصور' },
    authorTitle: { en: 'Consultant Dermatologist', ar: 'استشاري الأمراض الجلدية' },
    publishDate: 'April 02, 2026',
    readTimeMinutes: 4,
    featured: true,
    tags: [
      { en: 'Skin Care', ar: 'العناية بالبشرة' },
      { en: 'Melasma', ar: 'الكلف' },
      { en: 'Sun Protection', ar: 'الوقاية من الشمس' },
    ],
  },
  {
    id: 'art-3',
    slug: 'prenatal-milestones-and-4d-scans',
    title: {
      en: 'The Trimester Timeline: Navigating Prenatal Diagnostics and Fetal Development',
      ar: 'دليل مراحل الحمل الثلاث: الفحوصات التشخيصية وتطور الجنين',
    },
    excerpt: {
      en: 'A comprehensive medical guide for expectant mothers on essential blood screenings, ultrasound anatomy scans, and maternal nutrition.',
      ar: 'دليل طبي شامل للأمهات الحوامل حول فحوصات الدم الضرورية، السونار التشريحي للجنين، والتغذية الصحية المتوازنة.',
    },
    content: [
      {
        en: 'A healthy pregnancy journey is built upon structured, timely clinical surveillance. In the first trimester (weeks 1 to 13), non-invasive prenatal testing (NIPT) screens cell-free fetal DNA with 99% accuracy for chromosomal variations, offering peace of mind early without invasive procedure risks.',
        ar: 'تبدأ رحلة الأمومة السليمة بمتابعة طبية دقيقة ومنظمة. في الثلث الأول من الحمل (الأسابيع ١ إلى ١٣)، يتيح فحص الحمض النووي للجنين في دم الأم (NIPT) فحص الكروموسومات بدقة تصل إلى ٩٩٪ دون أي مخاطر تذكر على الحمل.',
      },
      {
        en: 'The second trimester anomaly scan at 20-22 weeks represents a vital milestone. Using high-resolution volumetric ultrasound, we evaluate intracranial anatomy, ventricular heart outflow tracts, renal perfusion, and placental insertion. HD-Live 4D rendering provides detailed visualization of the baby’s movements and facial symmetry.',
        ar: 'يمثل فحص سلامة الأعضاء في الثلث الثاني (الأسبوع ٢٠-٢٢) محطة جوهرية، حيث يتم فحص تكوين الدماغ وحجرات القلب وعمود الجنين الفقري بدقة متناهية. كما يوفر التصوير رباعي الأبعاد فرصة لرؤية حركات الجمل وملامحه بوضوح بديع.',
      },
      {
        en: 'Third trimester care pivots toward fetal biometry, amniotic fluid quantification, and Doppler resistance index measurements to guarantee optimal fetal well-being in preparation for birth.',
        ar: 'يركز الثلث الثالث على متابعة قياسات نمو الجنين، كمية السائل الأمنيوسي، وتدفق الدم عبر الحبل السري لضمان سلامة الجنين واستعداد الأم لولادة آمنة.',
      },
    ],
    category: { en: 'Obstetrics', ar: 'النساء والولادة' },
    authorName: { en: 'Dr. Layla Al-Maktoum', ar: 'د. ليلى المكتوم' },
    authorTitle: { en: 'Consultant Obstetrician', ar: 'استشارية النساء والولادة' },
    publishDate: 'March 28, 2026',
    readTimeMinutes: 6,
    featured: false,
    tags: [
      { en: 'Pregnancy', ar: 'الحمل' },
      { en: 'Ultrasound', ar: 'الموجات فوق الصوتية' },
      { en: 'Maternal Care', ar: 'صحة الأم' },
    ],
  },
  {
    id: 'art-4',
    slug: 'modern-management-of-desk-posture-and-sciatica',
    title: {
      en: 'The Modern Executive Spine: Preventing Neck Strain and Sciatic Nerve Compression',
      ar: 'صحة العمود الفقري لرواد الأعمال: الوقاية من آلام الرقبة وتسكين عرق النسا',
    },
    excerpt: {
      en: 'How prolonged sitting in air-conditioned offices triggers disc dehydration, and how kinetic therapy reverses mechanical overload.',
      ar: 'كيف يؤدي الجلوس الطويل في المكاتب المكيفة إلى جفاف فقرات الظهر، وكيف يعيد العلاج الحركي التوازن للمفاصل.',
    },
    content: [
      {
        en: 'Modern knowledge workers spend an average of 9 to 11 hours seated daily. While ergonomically designed furniture helps, static sustained sitting increases intradiscal lumbar pressure by up to 150% compared to standing. Over time, this mechanical compression dehydrates lumbar intervertebral discs, making them vulnerable to micro-fissuring and nerve-root impingement.',
        ar: 'يقضي الكثير من المهنيين والموظفين ما بين ٩ إلى ١١ ساعة يومياً في وضعية الجلوس. وعلى الرغم من المقاعد المريحة، فإن الجلوس المطول يزيد الضغط على غضاريف أسفل الظهر بنسبة تصل إلى ١٥٠٪ مقارنة بالوقوف، مما يؤدي لجفاف الأقراص الغضروفية وزيادة احتمالية ضغط الأعصاب.',
      },
      {
        en: 'Sciatica typically manifests as sharp, burning, or tingling pain radiating from the gluteal fold down the posterior thigh to the calf. In our specialized kinetic clinic, conservative multimodal therapy—combining targeted radiofrequency heat, decompression traction, and motor retraining—resolves over 88% of acute lumbar disc radiculopathies without surgical intervention.',
        ar: 'يظهر عرق النسا على شكل ألم حاد أو شعور بالحرقة والخدر يمتد من أسفل الظهر وأعلى الفخذ إلى ربلة الساق. ويساعد العلاج التحفظي المتكامل—الذي يجمع بين التردد الحراري، تخفيف الضغط الميكانيكي، وتمارين تقوية الجذع—في شفاء أكثر من ٨٨٪ من الحالات دون تدخل جراحي.',
      },
      {
        en: 'Adopting the 45:5 movement rule (45 minutes seated followed by 5 minutes of walking and spinal extension) significantly preserves intervertebral fluid flow and prevents recurring pain episodes.',
        ar: 'إن تطبيق قاعدة ٤٥:٥ (٤٥ دقيقة جلوس تتبعها ٥ دقائق من المشي والإطالة الخفيفة) يساهم بشكل فعال في تنشيط الدورة الدموية للفقرات وتجنب نوبات الألم المتكررة.',
      },
    ],
    category: { en: 'Physiotherapy', ar: 'العلاج الطبيعي' },
    authorName: { en: 'Dr. Nadia Boussaid', ar: 'د. نادية بو سعيد' },
    authorTitle: { en: 'Lead Physiotherapist', ar: 'أخصائية أولى في العلاج الطبيعي' },
    publishDate: 'March 19, 2026',
    readTimeMinutes: 5,
    featured: false,
    tags: [
      { en: 'Spine Health', ar: 'صحة العمود الفقري' },
      { en: 'Sciatica', ar: 'عرق النسا' },
      { en: 'Ergonomics', ar: 'بيئة العمل المريحة' },
    ],
  },
  {
    id: 'art-5',
    slug: 'childhood-allergies-and-air-quality',
    title: {
      en: 'Pediatric Allergies and Indoor Air Quality: A Parent’s Guide to Respiratory Wellness',
      ar: 'حساسية الأطفال وجودة الهواء الداخلي: دليل الآباء لصحة الجهاز التنفسي',
    },
    excerpt: {
      en: 'Managing dust mite allergens, AC filter maintenance, and identifying childhood asthma triggers early.',
      ar: 'التعامل مع عث الغبار، صيانة فلاتر التكييف، والتشخيص المبكر لمثيرات حساسية الصدر عند الأطفال.',
    },
    content: [
      {
        en: 'Given that families spend up to 90% of their time indoors during hot summer months, the quality of recirculated indoor air directly dictates pediatric respiratory resilience. Air conditioning units, when not serviced with HEPA filtration, can harbour microscopic dust mite proteins and fungal spores, the most prevalent triggers for perennial allergic rhinitis and nighttime coughing in children.',
        ar: 'مع قضاء الأطفال معظم أوقاتهم في الأماكن المغلقة خلال أشهر الصيف، تؤثر جودة الهواء الداخلي بشكل مباشر على صحة جهازهم التنفسي. وقد تصبح فلاتر التكييف غير النظيفة بيئة لتكاثر عث الغبار ومسببات التحسس، وهي السبب الأبرز للسعال الليلي وانسداد الأنف المزمن لدى الصغار.',
      },
      {
        en: 'Differentiating a simple viral cold from allergic sensitization is straightforward: viral colds resolve within 7-10 days and are accompanied by fever, while allergy symptoms persist for weeks, manifesting as clear watery rhinorrhea, morning sneezing fits, and dark infraorbital allergic shiners.',
        ar: 'يمكن التمييز بين نزلة البرد الفيروسية والحساسية بسهولة: تزول نزلات البرد خلال أسبوع وتصحبها حرارة، بينما تستمر الحساسية لأسابيع وتظهر بسيلان أنفي شفاف، نوبات عطاس صباحية، وهالات داكنة مميزة تحت عيني الطفل.',
      },
      {
        en: 'Our pediatric team utilizes painless skin prick testing to isolate precise triggers, allowing parents to implement targeted environmental control measures rather than relying indefinitely on oral antihistamines.',
        ar: 'يوفر فريق طب الأطفال اختبارات وخز الجلد الدقيقة وغير المؤلمة لتحديد مسببات الحساسية بدقة، مما يساعد الأهل على تنظيم بيئة المنزل وتجنب الاعتماد المطول على أدوية الحساسية.',
      },
    ],
    category: { en: 'Pediatrics', ar: 'طب الأطفال' },
    authorName: { en: 'Dr. Sarah Jenkins', ar: 'د. سارة جنكينز' },
    authorTitle: { en: 'Specialist Pediatrician', ar: 'أخصائية طب الأطفال' },
    publishDate: 'March 05, 2026',
    readTimeMinutes: 4,
    featured: false,
    tags: [
      { en: 'Child Health', ar: 'صحة الطفل' },
      { en: 'Allergy', ar: 'الحساسية' },
      { en: 'Air Quality', ar: 'جودة الهواء' },
    ],
  },
  {
    id: 'art-6',
    slug: 'executive-longevity-and-metabolic-health',
    title: {
      en: 'Metabolic Optimization: Beyond Standard Fasting Glucose and Cholesterol',
      ar: 'تحسين التمثيل الغذائي وطول العمر الصحي: ما وراء فحوصات السكر والكوليسترول التقليدية',
    },
    excerpt: {
      en: 'How fasting insulin, ApoB, and continuous glucose monitoring reveal metabolic health years before diagnostic diabetes emerges.',
      ar: 'كيف يكشف الإنسولين الصائم وبروتين ApoB ومجسات السكر المستمرة صحة الأيض قبل سنوات من تشخيص السكري.',
    },
    content: [
      {
        en: 'Conventional medicine frequently classifies individuals as healthy until fasting glucose crosses 100 mg/dL or HbA1c reaches 5.7%. However, compensatory hyperinsulinemia—where the pancreas overproduces insulin to keep blood glucose normal—often predates overt diabetes by 10 to 15 years, driving arterial inflammation, visceral adiposity, and endothelial stiffness along the way.',
        ar: 'يعتمد الطب التقليدي غالباً على تصنيف الشخص كمعافى طالما كان سكر الدم الصائم أقل من ١٠٠ ملغ/ديسيلتر. لكن مقاومة الإنسولين الخفية—حيث يفرز البنكرياس كميات مضاعفة لضبط السكر—تبدأ قبل ظهور السكري بعشر إلى خمس عشرة سنة، مسببة التهاب الشرايين وتراكم الدهون الحشوية.',
      },
      {
        en: 'In our Executive Longevity consultations, we calculate the HOMA-IR score, measure Apolipoprotein B (ApoB) to capture atherogenic particle count accurately, and evaluate high-sensitivity C-reactive protein (hs-CRP). By analyzing these advanced biomarkers, we design personalized nutritional rhythms and strength protocols that restore mitochondrial insulin sensitivity.',
        ar: 'في استشارات الفحص التنفيذي المتقدمة، نقوم بقياس معامل مقاومة الإنسولين (HOMA-IR)، وفحص بروتين ApoB لمعرفة العدد الحقيقي للجزيئات الضارة، ومؤشر الالتهاب الوعائي (hs-CRP)، لوضع خطة تغذية دقيقة وتمارين مقاومة تستعيد كفاءة الخلايا وحيويتها.',
      },
      {
        en: 'Proactive preventative testing transforms healthcare from reactive disease management into long-term vitality preservation.',
        ar: 'إن الفحوصات الوقائية الدقيقة تنقل الرعاية الصحية من مجرد رد فعل متأخر على المرض إلى استثمار مبكر في الصحة وطول العمر المفعم بالنشاط.',
      },
    ],
    category: { en: 'Family Medicine', ar: 'طب الأسرة' },
    authorName: { en: 'Dr. Fatima Nour', ar: 'د. فاطمة نور' },
    authorTitle: { en: 'Consultant Family Physician', ar: 'استشارية طب الأسرة' },
    publishDate: 'February 22, 2026',
    readTimeMinutes: 5,
    featured: true,
    tags: [
      { en: 'Longevity', ar: 'طول العمر الصحي' },
      { en: 'Metabolic Health', ar: 'صحة الأيض' },
      { en: 'Diabetes Prevention', ar: 'الوقاية من السكري' },
    ],
  },
];

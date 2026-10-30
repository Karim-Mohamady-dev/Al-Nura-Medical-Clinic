import { MedicalService } from '../types';

export const MEDICAL_SERVICES: MedicalService[] = [
  {
    id: 'executive-cardiac-screening',
    title: {
      en: 'Executive Cardiovascular Screening Protocol',
      ar: 'بروتوكول الفحص القلبي التنفيذي المتقدم',
    },
    specialtyId: 'cardiology',
    description: {
      en: 'A thorough preventive assessment engineered to detect asymptomatic coronary artery plaque, arrhythmias, and vascular stiffness years before symptoms manifest.',
      ar: 'تقييم وقائي شامل مصمم لاكتشاف تكلسات الشرايين التاجية واضطرابات النبض وتصلب الأوعية في وقت مبكر قبل ظهور أي أعراض.',
    },
    benefits: [
      { en: 'Early risk stratification using advanced echocardiography & biomarkers', ar: 'تحديد دقيق لمخاطر القلب باستخدام السونار والمؤشرات الحيوية' },
      { en: 'Direct consultation and same-day personalized risk score report', ar: 'استشارة فورية مع استشاري القلب وتقرير مفصل في نفس اليوم' },
      { en: 'Tailored dietary, exercise, and lipid stabilization strategy', ar: 'خطة مخصصة للتغذية والرياضة وضبط الكوليسترول والدهون' },
    ],
    treatmentInfo: {
      en: 'Includes 12-lead resting ECG, transthoracic echocardiogram with color Doppler, treadmill cardiac stress test, high-sensitivity Troponin & hs-CRP laboratory markers, and consultation with a consultant cardiologist.',
      ar: 'يشمل تخطيط القلب الكهربائي، تصوير صدى القلب بالإيكو والدوبلر الملون، فحص الجهد على السير، تحاليل التروبونين وبروتين سي التفاعلي الحساس، واستشارة مباشرة مع استشاري أمراض القلب.',
    },
    preparationInstructions: {
      en: 'Fast for 6 hours prior for lipid labs. Wear comfortable sportswear and sneakers. Avoid caffeine, energy drinks, and tea for 12 hours.',
      ar: 'الصيام لمدة ٦ ساعات لإجراء تحاليل الدهون. ارتداء ملابس وأحذية رياضية مريحة. الامتناع عن الشاي والقهوة ومشروبات الطاقة قبل الفحص بـ ١٢ ساعة.',
    },
    branchIds: ['downtown-dubai', 'abu-dhabi-al-maryah'],
    durationMinutes: 90,
    faqs: [
      {
        question: { en: 'Who benefits most from this screening?', ar: 'من هم الأكثر استفادة من هذا الفحص؟' },
        answer: { en: 'Individuals aged 35+, smokers, executives with demanding stress levels, or those with family history of early heart disease.', ar: 'الأفراد فوق عمر ٣٥ عاماً، المدخنون، أصحاب المهن ذات الضغوط العالية، ومن لديهم تاريخ عائلي لأمراض القلب المبكرة.' },
      },
    ],
  },
  {
    id: 'digital-mole-mapping',
    title: {
      en: 'Digital Total Body Mole Mapping & Dermoscopy',
      ar: 'المسح الرقمي الشامل للشامات وفحص الجلد بالديرموسكوب',
    },
    specialtyId: 'dermatology',
    description: {
      en: 'Automated total-body photographic tracking and high-magnification digital epiluminescence microscopy to monitor atypical moles and skin lesions.',
      ar: 'تصوير رقمي عالي الدقة لكامل الجسم ومجهر ديرموسكوبي متطور لتسجيل ومتابعة الشامات والتغيرات الجلدية المشبوهة بدقة بالغة.',
    },
    benefits: [
      { en: 'Detects microscopic melanoma changes far earlier than the naked eye', ar: 'يكتشف التغيرات المجهرية المبكرة بدقة تفوق الفحص بالعين المجردة' },
      { en: 'Stores digital high-resolution baseline images for future comparative scans', ar: 'يحفظ صوراً مرجعية للمقارنة التلقائية في الزيارات السنوية اللاحقة' },
      { en: 'Eliminates unnecessary preventative surgical excisions of benign moles', ar: 'يجنب المريض الاستئصال الجراحي غير الضروري للشامات الحميدة' },
    ],
    treatmentInfo: {
      en: 'You stand before an automated medical imaging tower that captures standardized multi-angle photographic panels of your skin surface. Every distinct mole is indexed and evaluated by the dermatologist.',
      ar: 'يقف المريض أمام وحدة تصوير طبية آلية تلتقط صوراً معيارية متعددة الزوايا لسطح الجلد، ثم يقوم استشاري الجلدية بفحص وتوثيق كل شامة بالمجهر الضوئي الرقمي.',
    },
    preparationInstructions: {
      en: 'Remove all makeup, nail polish, and self-tanning lotions before the examination for unobstructed visualization.',
      ar: 'إزالة مساحيق التجميل وطلاء الأظافر ومستحضرات التسمير الذاتي قبل الفحص للحصول على رؤية جلدية واضحة ودقيقة.',
    },
    branchIds: ['downtown-dubai', 'dubai-marina'],
    durationMinutes: 45,
    faqs: [
      {
        question: { en: 'Is there any radiation involved in mole mapping?', ar: 'هل ينطوي مسح الشامات على أي أشعة ضارة؟' },
        answer: { en: 'None whatsoever. The technology relies purely on standard digital photography with polarized clinical lighting.', ar: 'كلا على الإطلاق، الجهاز يعتمد كلياً على التصوير الفوتوغرافي الرقمي مع إضاءة استقطابية خاصة.' },
      },
    ],
  },
  {
    id: 'invisalign-clear-aligners',
    title: {
      en: 'Invisalign Clear Orthodontic Alignment',
      ar: 'تقويم الأسنان الشفاف إنفزلاين بدون أسلاك',
    },
    specialtyId: 'dentistry',
    description: {
      en: 'Removable, virtually invisible custom aligners fabricated via 3D computer modeling that gently move your teeth into perfect alignment without metal brackets.',
      ar: 'قوالب شفافة متحركة ومريحة تصمم رقمياً بتقنية ثلاثية الأبعاد لتحريك الأسنان تدريجياً لابتسامة مستقيمة دون أسلاك أو حاصرات معدنية.',
    },
    benefits: [
      { en: 'Virtually undetectable aesthetic appearance during social and business interactions', ar: 'مظهر شفاف غير ملحوظ في المناسبات وبيئة العمل اليومية' },
      { en: 'Fully removable for effortless eating, brushing, and flossing', ar: 'يمكن إزالتها بسهولة لتناول الطعام وتنظيف الأسنان بالفرشاة والخيط' },
      { en: 'Digital preview (ClinCheck) shows your anticipated smile transformation prior to starting', ar: 'معاينة النتيجة النهائية المتوقعة للابتسامة بتقنية المحاكاة قبل بدء العلاج' },
    ],
    treatmentInfo: {
      en: 'Begins with an optical 3D scan of your dental arches using the iTero system. A bespoke sequence of medical-grade aligners is fabricated and monitored at bi-monthly check-ins.',
      ar: 'يبدأ الفحص بمسح ضوئي دقيق للأسنان بجهاز آيتيرو، تليها صناعة سلسلة مخصصة من القوالب الطبية المريحة مع متابعة دورية منتظمة كل شهرين.',
    },
    preparationInstructions: {
      en: 'Bring any previous dental records, X-rays, or previous retainer details if available.',
      ar: 'إحضار أي سجلات طبية سابقة أو صور أشعة للأسنان إن وجدت في موعد الاستشارة الأول.',
    },
    branchIds: ['downtown-dubai', 'dubai-marina'],
    durationMinutes: 40,
    faqs: [
      {
        question: { en: 'How many hours daily must I wear the aligners?', ar: 'كم ساعة يومياً يجب ارتداء القوالب الشفافة؟' },
        answer: { en: 'Between 20 and 22 hours per day, removing them only for meals and dental hygiene.', ar: 'بين ٢٠ و ٢٢ ساعة يومياً، وتنزع فقط أثناء تناول الوجبات وتفريش الأسنان.' },
      },
    ],
  },
  {
    id: 'prenatal-4d-fetal-ultrasound',
    title: {
      en: 'Advanced 4D HD-Live Fetal Imaging & Anomaly Scan',
      ar: 'تصوير الجنين التفصيلي رباعي الأبعاد فائق الوضوح',
    },
    specialtyId: 'gynecology',
    description: {
      en: 'State-of-the-art volumetric ultrasound rendering real-time facial expressions, movement, and anatomical organ integrity of your unborn baby.',
      ar: 'تصوير تلفزيوني متطور يتيح للوالدين رؤية حركات الجمل وملامحه بوضوح حقيقي، مع تقييم دقيق لسلامة الأعضاء ونمو الجنين.',
    },
    benefits: [
      { en: 'Exceptional diagnostic clarity of fetal heart chambers, brain, spine, and kidneys', ar: 'دقة تشخيصية عالية لفحص حجرات قلب الجنين، الدماغ، والعمود الفقري' },
      { en: 'HD-Live surface lighting simulates realistic lifelike skin tones', ar: 'إضاءة رقمية متقدمة تعكس ملامح الطفل وحركاته بطريقة حية ومؤثرة' },
      { en: 'Digital video clips and photo suite provided for expectant parents', ar: 'تسليم مقاطع فيديو وصور رقمية تذكارية للوالدين فور انتهاء الجلسة' },
    ],
    treatmentInfo: {
      en: 'Conducted in a private maternity suite by a maternal-fetal medicine consultant using high-frequency transabdominal acoustic probes with ambient display screens.',
      ar: 'تُجرى الجلسة في جناح أمومة خاص ومريح بواسطة استشارية طب الأجنة، مع شاشات عرض كبيرة تتيح للأسرة متابعة الفحص بارتياح تام.',
    },
    preparationInstructions: {
      en: 'Drink 2 glasses of water 30 minutes before the scan. Avoid applying thick belly creams or oils on the day of the exam.',
      ar: 'شرب كوبين من الماء قبل الفحص بنصف ساعة. تجنب وضع زيوت أو كريمات ترطيب سميكة على منطقة البطن يوم الفحص.',
    },
    branchIds: ['downtown-dubai', 'abu-dhabi-al-maryah'],
    durationMinutes: 45,
    faqs: [
      {
        question: { en: 'What is the optimal gestational age for 4D scans?', ar: 'ما هو أفضل وقت لإجراء تصوير الجنين رباعي الأبعاد؟' },
        answer: { en: 'Between 26 and 30 weeks of gestation, when facial features are well formed and amniotic fluid is ideal.', ar: 'بين الأسبوع ٢٦ والأسبوع ٣٠ من الحمل، حيث تكون ملامح الوجه مكتملة وكمية السائل الأمنيوسي مثالية.' },
      },
    ],
  },
  {
    id: 'prp-joint-regeneration',
    title: {
      en: 'Platelet-Rich Plasma (PRP) Joint Infiltration',
      ar: 'حقن البلازما الغنية بالصفائح الدموية لتجديد المفاصل',
    },
    specialtyId: 'orthopedics',
    description: {
      en: 'Autologous concentrated platelets derived from your own blood, injected under ultrasound guidance to accelerate natural cartilage and tendon repair.',
      ar: 'استخلاص الصفائح المركزة من دم المريض نفسه وحقنها بدقة تحت توجيه الموجات فوق الصوتية لتحفيز تعافي الغضاريف والأربطة التالفة.',
    },
    benefits: [
      { en: '100% natural and biocompatible treatment with zero risk of allergic rejection', ar: 'علاج طبيعي ١٠٠٪ ومستخلص ذاتياً دون أي احتمالية لرفض مناعي' },
      { en: 'Reduces joint inflammation, stiffness, and reliance on pain medication', ar: 'يخفف التهاب المفاصل والتيبس الصباحي ويقلل الاعتماد على المسكنات' },
      { en: 'Delays or eliminates the necessity for invasive joint replacement surgeries', ar: 'يساعد في تأخير أو تجنب العمليات الجراحية لتبديل المفاصل' },
    ],
    treatmentInfo: {
      en: 'A standard sample of your blood is drawn and processed in an advanced dual-spin centrifuge. The purified platelet layer is injected directly into the joint capsule under sterile ultrasound vision.',
      ar: 'يتم سحب عينة دم عادية وفصلها بجهاز طرد مركزي متطور، ثم تُحقن طبقة الصفائح المركزة مباشرة في المفصل تحت تعقيم كامل ومتابعة دقيقة بالسونار.',
    },
    preparationInstructions: {
      en: 'Discontinue anti-inflammatory painkillers (NSAIDs like ibuprofen) for 5 days prior as they inhibit platelet activation.',
      ar: 'التوقف عن تناول مسكنات الالتهاب اللاستيرويدية (مثل الآيبوبروفين) قبل ٥ أيام لأنها تعطل تنشيط الصفائح الدموية.',
    },
    branchIds: ['downtown-dubai', 'abu-dhabi-al-maryah'],
    durationMinutes: 45,
    faqs: [
      {
        question: { en: 'How soon can I walk after the injection?', ar: 'هل يمكنني المشي مباشرة بعد جلسة حقن البلازما؟' },
        answer: { en: 'You can walk out immediately, but strenuous athletic activity should be avoided for 48 hours.', ar: 'نعم، يمكن المشي والخروج فوراً، مع تجنب الرياضات العنيفة أو المجهدة لمدة ٤٨ ساعة.' },
      },
    ],
  },
  {
    id: 'executive-annual-checkup',
    title: {
      en: 'Comprehensive Executive Health Assessment',
      ar: 'الفحص الطبي السنوي التنفيذي الشامل',
    },
    specialtyId: 'family-medicine',
    description: {
      en: 'A premier half-day biological audit encompassing comprehensive blood analysis, cardio-metabolic screening, ultrasound imaging, and a physician lifestyle consult.',
      ar: 'فحص شامل ومتكامل يستغرق ساعتين يغطي تحاليل الدم الكاملة، وظائف الأعضاء، فحوصات القلب، السونار، واستشارة طبية مفصلة.',
    },
    benefits: [
      { en: 'Detects silent conditions such as prediabetes, occult liver strain, and early vascular risks', ar: 'يكتشف الأمراض الصامتة كبدايات السكري واعتلال الكبد ومخاطر الشرايين' },
      { en: 'Detailed biometric report provided with actionable nutrition and wellness roadmaps', ar: 'تقرير طبي متكامل مع خطة عملية للغذاء والمكملات وتحسين نمط الحياة' },
      { en: 'Dedicated executive patient concierge to coordinate all tests smoothly without queues', ar: 'منسق رعاية مخصص لمرافقة المراجع خلال الفحوصات بسلاسة وبدون انتظار' },
    ],
    treatmentInfo: {
      en: 'Includes complete blood count, kidney and liver enzymes, lipid subfractions, HbA1c, thyroid panel, Vitamin D & B12, abdominal ultrasound, ECG, audiometry, visual acuity, and doctor evaluation.',
      ar: 'يشمل تحاليل صورة الدم، وظائف الكبد والكلى، السكر التراكمي، دهون الدم، الغدة الدرقية، الفيتامينات، سونار البطن، تخطيط القلب، فحص السمع والنظر، واستشارة الطبيب.',
    },
    preparationInstructions: {
      en: 'Fasting for 10-12 hours is mandatory. Water is permitted. Wear comfortable clothing with easy arm access.',
      ar: 'الصيام لمدة ١٠ إلى ١٢ ساعة إلزامي مع السماح بشرب الماء العادي. ارتداء ملابس مريحة تسهل سحب العينات وفحص الجسم.',
    },
    branchIds: ['downtown-dubai', 'dubai-marina', 'abu-dhabi-al-maryah'],
    durationMinutes: 120,
    faqs: [
      {
        question: { en: 'Can I choose to add food allergy or hormone panels?', ar: 'هل يمكن إضافة فحوصات الهرمونات أو حساسية الطعام للباقة؟' },
        answer: { en: 'Yes, add-on panels can be seamlessly incorporated during your initial intake consultation.', ar: 'نعم، يمكن إضافة باقات الفحص التكميلية أثناء الاستشارة الأولية بكل سهولة.' },
      },
    ],
  },
  {
    id: 'pediatric-comprehensive-wellness',
    title: {
      en: 'Comprehensive Child Growth & Allergy Profiling',
      ar: 'فحص نمو وتطور الطفل وحساسية الصدر والأطعمة',
    },
    specialtyId: 'pediatrics',
    description: {
      en: 'Holistic clinical audit of child physical growth, neurological milestones, sensory acuity, and allergy profiling in a welcoming family environment.',
      ar: 'تقييم شامل للنمو الجسدي والعصبي للطفل، فحص سلامة السمع والنظر، وتشخيص حساسية الصدر والجلد والأغذية في بيئة دافئة ومرحة.',
    },
    benefits: [
      { en: 'Verifies on-track milestone achievement and timely immunization compliance', ar: 'التأكد من التطور الطبيعي للطفل ومطابقة التطعيمات لجدول وزارة الصحة' },
      { en: 'Identifies hidden dietary allergens that trigger childhood colic, reflux, or eczema', ar: 'تحديد الأطعمة المسببة لحساسية الجلد أو مغص وارتجاع الرضع' },
      { en: 'Empowers parents with science-backed sleep, feeding, and behavioural guidance', ar: 'تزويد الوالدين بإرشادات طبية موثوقة للنوم السليم والتغذية والتفاعل السلوكي' },
    ],
    treatmentInfo: {
      en: 'Conducted by pediatric specialists. Includes percentile tracking, head circumference, reflex assessment, respiratory auscultation, nutritional consult, and optional skin prick allergen testing.',
      ar: 'تُجرى الجلسة مع أخصائي الأطفال وتشمل قياس منحنيات النمو، محيط الرأس، فحص الصدر والحلق، تقييم التغذية واختبار وخز الجلد للحساسية عند الحاجة.',
    },
    preparationInstructions: {
      en: 'Bring your child’s official UAE vaccination booklet and any school or nursery observation reports.',
      ar: 'إحضار دفتر التطعيمات الرسمي للطفل وسجلات أي ملاحظات صحية سابقة من المدرسة أو الحضانة.',
    },
    branchIds: ['downtown-dubai', 'dubai-marina'],
    durationMinutes: 45,
    faqs: [
      {
        question: { en: 'Are all vaccines provided according to DHA and MoHAP schedules?', ar: 'هل كافة التطعيمات مطابقة لبروتوكول هيئة الصحة بدبي ووزارة الصحة؟' },
        answer: { en: 'Yes, all biological vaccines are maintained in cold-chain certified medical refrigeration and registered officially.', ar: 'نعم، جميع اللقاحات محفوظة وفق المعايير الطبية المعتمدة ويتم توثيقها في السجل الرسمي.' },
      },
    ],
  },
  {
    id: 'endoscopic-sinus-evaluation',
    title: {
      en: 'Fiberoptic Video Nasal Endoscopy & Sinus Evaluation',
      ar: 'تنظير الأنف والجيوب الهوائية بالفيديو فائق الدقة',
    },
    specialtyId: 'ent',
    description: {
      en: 'Ultra-thin illuminated fiberoptic examination of nasal passages, sinus drainage ostia, and vocal cord mobility with real-time video display.',
      ar: 'فحص مجهري ضوئي دقيق لممرات الأنف وتجاويف الجيوب والأحبال الصوتية بواسطة منظار مرن متطور مع شاشة عرض فورية.',
    },
    benefits: [
      { en: 'Precise visual diagnosis of chronic nasal blockage, polyps, and sinus infection focus', ar: 'تشخيص فوري ودقيق لأسباب انسداد الأنف المزمن واللحميات والتهاب الجيوب' },
      { en: 'Identifies vocal cord nodules, hoarseness causes, and acid reflux laryngeal damage', ar: 'اكتشاف أسباب بحة الصوت وعقيدات الأحبال الصوتية وتأثيرات ارتجاع المريء' },
      { en: 'Painless procedure performed in 5-10 minutes with rapid topical numbing', ar: 'إجراء غير مؤلم وسريع يستغرق دقائق قليلة بعد وضع رذاذ تخدير موضعي خفيف' },
    ],
    treatmentInfo: {
      en: 'A tiny, flexible high-resolution micro-camera is gently introduced through the nostrils while the patient breathes comfortably, capturing high-definition pictures for medical review.',
      ar: 'يتم تمرير كاميرا مجهرية مرنة وخفيفة عبر فتحة الأنف بينما يتنفس المريض براحة تامة، مع التقاط صور عالية الدقة لشرح الحالة للمريض بالتفصيل.',
    },
    preparationInstructions: {
      en: 'No fasting required. Notify the ENT physician if you have a history of frequent nosebleeds or are taking blood thinners.',
      ar: 'لا يلزم الصيام قبل الفحص. يُرجى إبلاغ الطبيب في حال وجود تاريخ لنزيف الأنف أو تناول أدوية مسيلة للدم.',
    },
    branchIds: ['downtown-dubai', 'abu-dhabi-al-maryah'],
    durationMinutes: 30,
    faqs: [
      {
        question: { en: 'Can I drive myself home after the nasal endoscopy?', ar: 'هل يمكنني القيادة والعودة للعمل مباشرة بعد الفحص؟' },
        answer: { en: 'Yes, no sedation is used, allowing you to return to normal activities immediately.', ar: 'نعم، لا يتم استخدام أي مهدئات عامة، ويمكنك متابعة يومك بصورة طبيعية فوراً.' },
      },
    ],
  },
  {
    id: 'kinetic-spine-rehabilitation',
    title: {
      en: 'Targeted Kinetic Spinal Decompression & Kinetic Rehab',
      ar: 'جلسات تخفيف ضغط الفقرات والتأهيل الحركي المتقدم للعمود الفقري',
    },
    specialtyId: 'physiotherapy',
    description: {
      en: 'Specialized physical rehabilitation combining mechanical spine mobilization, manual myofascial release, and kinetic stabilization exercises.',
      ar: 'برنامج علاجي وتأهيلي يجمع بين تحريك فقرات الظهر بدقة، تحرير الشد العضلي العميق، وتقوية عضلات الجذع المساندة لمنع تجدد الألم.',
    },
    benefits: [
      { en: 'Relieves nerve pinching caused by herniated discs and radiating leg sciatica', ar: 'تخفيف الضغط عن جذور الأعصاب وتسكين آلام عرق النسا الممتدة للساق' },
      { en: 'Restores spinal range of motion and alleviates chronic morning stiffness', ar: 'استعادة مرونة وحركة الظهر والتخلص من التيبس الصباحي المزعج' },
      { en: 'Corrects forward head and slumped office posture through ergonomic bio-feedback', ar: 'تصحيح وضعية الرأس المتقدم والكتفين الناتجة عن الجلوس الطويل أمام الحاسوب' },
    ],
    treatmentInfo: {
      en: 'Includes hands-on orthopedic manual therapy, deep tissue radiofrequency warming, guided kinetic retraining on specialized resistance apparatus, and posture coaching.',
      ar: 'تشمل الجلسة العلاج اليدوي للمفاصل والعضلات، التدفئة العميقة بجهاز التيكار، تمارين تقوية موجهة بأجهزة طبية متخصصة، وتوجيهات للجلوس الصحي.',
    },
    preparationInstructions: {
      en: 'Wear comfortable stretch sportswear that allows unrestricted physical movement during therapeutic exercises.',
      ar: 'ارتداء ملابس رياضية قطنية مريحة ومرنة تسمح بالحركة وأداء التمارين العلاجية بسلاسة.',
    },
    branchIds: ['downtown-dubai', 'dubai-marina'],
    durationMinutes: 60,
    faqs: [
      {
        question: { en: 'How many sessions are typically required?', ar: 'كم عدد الجلسات التي يحتاجها المريض عادة؟' },
        answer: { en: 'Most patients experience noticeable relief within 3 to 6 targeted sessions.', ar: 'يشعر غالبية المرضى بتحسن ملموس وانخفاض ملحوظ في الألم خلال ٣ إلى ٦ جلسات.' },
      },
    ],
  },
  {
    id: 'dry-eye-ipl-therapy',
    title: {
      en: 'Intense Pulsed Light (IPL) Meibomian Gland Therapy',
      ar: 'علاج جفاف العين المزمن بالنبضات الضوئية المكثفة (IPL)',
    },
    specialtyId: 'ophthalmology',
    description: {
      en: 'Non-invasive light pulses applied around the periorbital zone to unblock clogged eyelid oil glands and restore normal tear film stability in arid climates.',
      ar: 'تقنية ضوئية متطورة غير جراحية حول منطقة العين تعمل على تنشيط الغدد الدهنية في الجفون وإعادة التوازن للغشاء الدمعي في مناخ المنطقة الجاف.',
    },
    benefits: [
      { en: 'Long-lasting relief from stinging, burning, gritty ocular sensations and eye fatigue', ar: 'راحة مستمرة من الحرقان والشعور بوجود رمل في العين والإجهاد البصري' },
      { en: 'Reduces heavy dependence on artificial tear drops throughout the day', ar: 'يقلل الاعتماد المستمر على قطرات الدموع الاصطناعية المتكررة' },
      { en: 'Treats ocular rosacea and persistent eyelid margin inflammation', ar: 'يعالج الوردية العينية والتهاب حواف الجفون المزمن' },
    ],
    treatmentInfo: {
      en: 'Eye shields are placed. Gentle light flashes stimulate parasympathetic nerves and liquefy hardened meibum within the eyelids, followed by gentle gland expression.',
      ar: 'يتم وضع واقيات خاصة لحماية العينين، ثم تطبق نبضات ضوئية خفيفة تعمل على إذابة الدهون المتصلبة في مسام الجفون واستعادة إفرازها الطبيعي.',
    },
    preparationInstructions: {
      en: 'Avoid intense sun tanning for 7 days prior. Do not wear eye makeup or contact lenses to the clinic on treatment day.',
      ar: 'تجنب التعرض المباشر لأشعة الشمس الحارقة قبل أسبوع. عدم وضع مكياج العين أو ارتداء العدسات اللاصقة في يوم الجلسة.',
    },
    branchIds: ['dubai-marina'],
    durationMinutes: 30,
    faqs: [
      {
        question: { en: 'Is IPL eye therapy painful?', ar: 'هل علاج جفاف العين بالنبضات الضوئية مؤلم؟' },
        answer: { en: 'Most patients feel a warm sensation akin to a gentle rubber-band tap. It is well-tolerated without anesthesia.', ar: 'يشعر المريض بإحساس دافئ ومريح يشبه لمسة خفيفة، ولا يتطلب أي تخدير.' },
      },
    ],
  },
  {
    id: 'h-pylori-breath-testing',
    title: {
      en: '13C-Urea Breath Testing for Helicobacter Pylori',
      ar: 'فحص جرثومة المعدة بالتنفس بنظير الكربون ١٣ غير المشع',
    },
    specialtyId: 'gastroenterology',
    description: {
      en: 'The non-invasive gold standard test to detect active stomach ulcer bacteria without endoscopy or radiation.',
      ar: 'الفحص الطبي المعتمد عالمياً لتأكيد وجود جرثومة المعدة النشطة بدقة متناهية ودون الحاجة للمنظار أو التعرض لأي إشعاع.',
    },
    benefits: [
      { en: '98%+ diagnostic accuracy for active infection detection', ar: 'دقة تشخيصية تفوق ٩٨٪ في كشف النشاط البكتيري لجرثومة المعدة' },
      { en: 'Non-radioactive, completely safe for children, adults, and pregnant women', ar: 'آمن تماماً وخالٍ من الإشعاع ومناسب للأطفال والبالغين والحوامل' },
      { en: 'Rapid results available within 24 hours to initiate or confirm antibiotic eradication', ar: 'ظهور النتيجة خلال ٢٤ ساعة للبدء في العلاج الثلاثي أو تأكيد الشفاء التام' },
    ],
    treatmentInfo: {
      en: 'The patient breathes into a sample collection bag, consumes a small citrus flavored solution, waits 15 minutes, and breathes into a second bag for mass spectrometry analysis.',
      ar: 'يتنفس المريض في كيس جمع العينة الأول، ثم يتناول محلولاً بنكهة البرتقال، وينتظر ١٥ دقيقة ثم يتنفس في الكيس الثاني للتحليل المخبري الفوري.',
    },
    preparationInstructions: {
      en: 'Fast for at least 4 hours. Stop proton pump inhibitors (omeprazole/esomeprazole) for 14 days and antibiotics for 4 weeks before testing.',
      ar: 'الصيام لمدة ٤ ساعات. التوقف عن أدوية حموضة المعدة (مثل أوميبرازول) لمدة ١٤ يوماً والمضادات الحيوية لمدة ٤ أسابيع لضمان دقة النتيجة.',
    },
    branchIds: ['downtown-dubai', 'dubai-marina'],
    durationMinutes: 30,
    faqs: [
      {
        question: { en: 'Can I do the test if I drank water an hour ago?', ar: 'هل يمكن إجراء الفحص إذا شربت ماءً قبل ساعة؟' },
        answer: { en: 'A few small sips of water are acceptable, but substantial fluid intake should be avoided within 2 hours.', ar: 'رشفات بسيطة من الماء مقبولة، لكن يُفضل الامتناع عن شرب كميات كبيرة قبل الفحص بساعتين.' },
      },
    ],
  },
  {
    id: 'comprehensive-hormonal-metabolic-panel',
    title: {
      en: 'Comprehensive Hormonal & Micronutrient Blood Profile',
      ar: 'الباقة المتقدمة لتحاليل الهرمونات والفيتامينات والمعادن الدقيقة',
    },
    specialtyId: 'laboratory',
    description: {
      en: 'Broad-spectrum biochemistry analyzing thyroid, adrenal cortisol, reproductive hormones, ferritin, Vitamin D, Vitamin B12, and inflammatory markers.',
      ar: 'فحص مخبري متكامل يقيس كفاءة الغدة الدرقية، هرمونات التوتر والخصوبة، مخزون الحديد، فيتامين د، وفيتامين ب١٢ والمؤشرات الحيوية.',
    },
    benefits: [
      { en: 'Identifies obscure causes of unremitting fatigue, hair loss, and brain fog', ar: 'يكتشف الأسباب الدقيقة وراء الإرهاق المستمر وتساقط الشعر وصعوبة التركيز' },
      { en: 'Analyzed in our CAP-accredited automated pathology laboratory', ar: 'تُجرى التحاليل في مختبرنا الآلي المعتمد بأعلى معايير الدقة وضبط الجودة' },
      { en: 'Results delivered securely with customized physician commentary', ar: 'تسليم النتائج بتقرير واضح مع شرح طبي توجيهي من الطبيب المختص' },
    ],
    treatmentInfo: {
      en: 'A rapid, comfortable venous blood draw performed by experienced phlebotomists using sterile micro-needles and vacutainer systems.',
      ar: 'سحب عينة دم وريدية سريعة ومريحة بواسطة أخصائي سحب عينات متمرس باستخدام إبر دقيقة ومعقمة بأعلى درجات العناية.',
    },
    preparationInstructions: {
      en: 'Morning fasting for 8 to 10 hours is advised for optimal hormonal baseline accuracy. Morning water intake is encouraged.',
      ar: 'يُفضل الصيام الصباحي لمدة ٨ إلى ١٠ ساعات لدقة هرمونات الصباح. يُشجع شرب الماء لتسهيل سحب العينة.',
    },
    branchIds: ['downtown-dubai', 'dubai-marina', 'abu-dhabi-al-maryah'],
    durationMinutes: 20,
    faqs: [
      {
        question: { en: 'How soon are the results ready?', ar: 'متى تظهر نتائج هذا الفحص؟' },
        answer: { en: 'Complete results are ready within 6 to 12 hours on the same business day.', ar: 'تكتمل كافة النتائج المخبرية خلال ٦ إلى ١٢ ساعة في نفس يوم الفحص.' },
      },
    ],
  },
];

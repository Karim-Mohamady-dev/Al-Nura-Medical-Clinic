import { InsuranceProvider } from '../types';

export const INSURANCE_PROVIDERS: InsuranceProvider[] = [
  {
    id: 'daman-thiqa',
    name: {
      en: 'Daman National Health Insurance (Thiqa & Care)',
      ar: 'ضمان للتأمين الصحي (برامج ثقة والرعاية)',
    },
    networkTier: {
      en: 'Enhanced & Comprehensive Network Tiers',
      ar: 'الشبكة الماسية والموسعة والشاملة',
    },
    description: {
      en: 'Direct billing for outpatient consultations, diagnostics, and procedures across all Al Nura branches in Dubai and Abu Dhabi.',
      ar: 'تغطية مباشرة للاستشارات والتحاليل والإجراءات في جميع فروع عيادة النورة في دبي وأبوظبي.',
    },
    copayNote: {
      en: 'Copay varies between 0% and 20% according to your individual card policy specification.',
      ar: 'نسبة التحمل تتراوح بين ٠٪ و ٢٠٪ حسب فئة بطاقة التأمين الخاصة بالمشترك.',
    },
    requiresPreAuth: true,
    branchesCovered: ['downtown-dubai', 'dubai-marina', 'abu-dhabi-al-maryah'],
    logoText: 'DAMAN',
    accentColor: '#006272',
  },
  {
    id: 'gig-gulf-axa',
    name: {
      en: 'GIG Gulf (Formerly AXA Insurance)',
      ar: 'جي آي جي الخليج (أكسا للتأمين سابقاً)',
    },
    networkTier: {
      en: 'Star, VIP, and Regional Gold Tiers',
      ar: 'الشبكة الذهبية وفئة النخبة VIP',
    },
    description: {
      en: 'Seamless cashless authorization for specialist consultations, advanced radiology, and clinical laboratory investigations.',
      ar: 'موافقة فورية غير نقدية للاستشارات التخصصية، الأشعة المتقدمة، والفحوصات المخبرية الدقيقة.',
    },
    copayNote: {
      en: 'Direct billing with standard policy deductible applicable at reception desk.',
      ar: 'تغطية مباشرة مع دفع نسبة المشاركة المحددة في جدول وثيقة التأمين.',
    },
    requiresPreAuth: true,
    branchesCovered: ['downtown-dubai', 'dubai-marina', 'abu-dhabi-al-maryah'],
    logoText: 'GIG GULF',
    accentColor: '#E21A2C',
  },
  {
    id: 'nextcare',
    name: {
      en: 'NextCare Health Network',
      ar: 'شبكة نكست كير للرعاية الصحية',
    },
    networkTier: {
      en: 'General Network (GN, GN+, Premium)',
      ar: 'الشبكة العامة المعتمدة (GN, GN+, الممتازة)',
    },
    description: {
      en: 'Fast digital e-approval connectivity directly integrated with our billing desk for prompt validation.',
      ar: 'ربط إلكتروني مباشر للحصول على الموافقات الفورية دون تأخير عند كاونتر الاستقبال.',
    },
    copayNote: {
      en: 'Copay as stipulated on the NextCare digital health pass.',
      ar: 'نسبة التحمل بحسب ما هو مسجل في بطاقة نكست كير الرقمية.',
    },
    requiresPreAuth: false,
    branchesCovered: ['downtown-dubai', 'dubai-marina'],
    logoText: 'NEXTCARE',
    accentColor: '#005EB8',
  },
  {
    id: 'metlife',
    name: {
      en: 'MetLife Gulf Health',
      ar: 'ميتلايف الخليج للرعاية الصحية',
    },
    networkTier: {
      en: 'Global & Platinum Medical Networks',
      ar: 'الشبكة البلاتينية والعالمية المتميزة',
    },
    description: {
      en: 'Comprehensive outpatient coverage including preventative screenings and pediatric vaccinations.',
      ar: 'تغطية واسعة للعيادات الخارجية تشمل الفحوصات الدورية الوقائية وتطعيمات الأطفال.',
    },
    copayNote: {
      en: 'Flat co-payment or percentage per outpatient encounter.',
      ar: 'مبلغ مقطوع أو نسبة مشاركة ثابتة لكل زيارة استشارية.',
    },
    requiresPreAuth: true,
    branchesCovered: ['downtown-dubai', 'dubai-marina', 'abu-dhabi-al-maryah'],
    logoText: 'METLIFE',
    accentColor: '#007ABC',
  },
  {
    id: 'cigna-global',
    name: {
      en: 'Cigna Global & Middle East',
      ar: 'سيجنا العالمية والشرق الأوسط',
    },
    networkTier: {
      en: 'Comprehensive International Healthcare Plans',
      ar: 'باقات الرعاية الصحية العالمية الشاملة',
    },
    description: {
      en: 'Direct settlement for international corporate policyholders and diplomatic families residing in the UAE.',
      ar: 'تسوية مباشرة لحاملي الوثائق الدولية لموظفي الشركات العالمية والعائلات المقيمة بالدولة.',
    },
    copayNote: {
      en: '0% deductible for executive corporate tiers.',
      ar: 'نسبة تحمل ٠٪ لفئات الشركات التنفيذية المعتمدة.',
    },
    requiresPreAuth: false,
    branchesCovered: ['downtown-dubai', 'dubai-marina', 'abu-dhabi-al-maryah'],
    logoText: 'CIGNA',
    accentColor: '#0982C6',
  },
  {
    id: 'mednet',
    name: {
      en: 'MedNet UAE',
      ar: 'ميدنت الإمارات للتأمين الصحي',
    },
    networkTier: {
      en: 'Gold, Silver Plus & Executive Networks',
      ar: 'الشبكة الذهبية والفضية بلس والتنفيذية',
    },
    description: {
      en: 'Covers outpatient consultations, prescription medicines, and clinical diagnostics.',
      ar: 'تغطي الاستشارات الخارجية وصرف الأدوية والتحاليل المخبرية والأشعة.',
    },
    copayNote: {
      en: 'Deductible percentage applied based on network tier.',
      ar: 'تطبيق نسبة التحمل المقررة وفقاً لفئة الشبكة المصرح بها.',
    },
    requiresPreAuth: true,
    branchesCovered: ['downtown-dubai', 'dubai-marina'],
    logoText: 'MEDNET',
    accentColor: '#1A3E68',
  },
  {
    id: 'sukoon-oman',
    name: {
      en: 'Sukoon (Oman Insurance Company)',
      ar: 'سكون (شركة عُمان للتأمين سابقاً)',
    },
    networkTier: {
      en: 'Prestige & Comprehensive Network',
      ar: 'شبكة بريستيج والشبكة الشاملة',
    },
    description: {
      en: 'Full direct billing access for primary and specialist care throughout our UAE clinics.',
      ar: 'تغطية مباشرة لكافة التخصصات الطبية ورعاية اليوم الواحد في فروعنا بالإمارات.',
    },
    copayNote: {
      en: 'Standard UAE health insurance co-insurance rate applies.',
      ar: 'تطبق نسبة التحمل المعتمدة في شروط وثيقة التأمين الصحي.',
    },
    requiresPreAuth: false,
    branchesCovered: ['downtown-dubai', 'dubai-marina', 'abu-dhabi-al-maryah'],
    logoText: 'SUKOON',
    accentColor: '#284E7A',
  },
  {
    id: 'saico-health',
    name: {
      en: 'SAICO Health Insurance',
      ar: 'سايكو للتأمين الطبي',
    },
    networkTier: {
      en: 'Network A & Network B Plus',
      ar: 'الشبكة (أ) والشبكة (ب) بلس',
    },
    description: {
      en: 'Accepted across multiple clinical departments with automated digital eligibility verification.',
      ar: 'معتمدة في مختلف الأقسام الطبية مع التحقق الرقمي الفوري من الأهلية.',
    },
    copayNote: {
      en: 'Subject to annual deductible limit defined by insurer.',
      ar: 'تخضع لسقف التحمل السنوي المحدد في العقد مع شركة التأمين.',
    },
    requiresPreAuth: true,
    branchesCovered: ['downtown-dubai', 'dubai-marina'],
    logoText: 'SAICO',
    accentColor: '#123047',
  },
];

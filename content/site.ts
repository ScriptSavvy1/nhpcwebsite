import type { Bilingual, NavItem } from './types';

export const PORTAL_URL = 'https://portal.nhpc.gov.so';

export const orgName: Bilingual = {
  en: 'National Health Professionals Council',
  so: 'Golaha Mihnadlayaasha Caafimaadka Qaranka',
};

export const tagline: Bilingual = {
  en: 'We safeguard Health Care and Well-being for All',
  so: 'Waxaan ilaalinaa Daryeelka Caafimaadka iyo Fayoobida Dhammaan',
};

export const missionShort: Bilingual = {
  en: 'The independent statutory body that registers and licenses health professionals, accredits health facilities, and approves health training institutions across Somalia under Act Lr.31.',
  so: 'Hay’adda sharciga ah ee madax-bannaan ee diiwaangelisa oo shatiyeysa mihnadlayaasha caafimaadka, aqoonsata xarumaha caafimaadka, oo ansixisa machadyada tababarka caafimaadka ee Soomaaliya sida uu dhigayo Sharciga Lr.31.',
};

export const contact = {
  email: 'info@nhpc.gov.so',
  whatsapp: '+252 61 3843534',
  complaintsLine: '2376',
  domain: 'nhpc.gov.so',
  hours: {
    en: 'Sat–Wed 08:00–16:00 · Thu 08:00–14:00',
    so: 'Sab–Arb 08:00–16:00 · Kham 08:00–14:00',
  } satisfies Bilingual,
  headquarters: {
    en: 'Mogadishu, Federal Republic of Somalia',
    so: 'Muqdisho, Jamhuuriyadda Federaalka Soomaaliya',
  } satisfies Bilingual,
};

// The fraud warning must appear in BOTH languages at once, always.
export const fraudWarning = {
  en: 'NHPC never requests payment via personal accounts.',
  so: 'NHPC marnaba kuma codsado lacag ku bixi akoon shakhsi ah.',
} satisfies Bilingual;

// ─────────────────────────────────────────────────────────────
// Primary navigation — 5 top-level items, split BY AUDIENCE.
// hrefs are lang-agnostic; the [lang] prefix is added at render time.
// ─────────────────────────────────────────────────────────────
export const primaryNav: NavItem[] = [
  {
    label: { en: 'Home', so: 'Bogga Hore' },
    href: '/',
  },
  {
    label: { en: 'Public', so: 'Dadweynaha' },
    href: '/public/verify',
    children: [
      { label: { en: 'Verify a Professional or Facility', so: 'Xaqiiji Mihnadle ama Xarun' }, href: '/public/verify' },
      // Filing a complaint now happens on the NHPC portal (the portal team owns
      // the complaint form). All "file a complaint" actions link out there.
      { label: { en: 'File a Complaint', so: 'Gudbi Cabasho' }, href: PORTAL_URL, external: true },
      { label: { en: 'How a Complaint is Handled', so: 'Sida Cabasho loo Maareeyo' }, href: '/public/complaints/process' },
      { label: { en: 'Patient Rights Charter', so: 'Axdiga Xuquuqda Bukaanka' }, href: '/public/rights' },
      { label: { en: 'Disciplinary Outcomes', so: 'Go’aannada Edbinta' }, href: '/public/disciplinary' },
      { label: { en: 'Report Fraud', so: 'Soo Sheeg Khiyaano' }, href: '/public/report-fraud' },
    ],
  },
  {
    label: { en: 'Professionals', so: 'Mihnadlayaasha' },
    href: '/professionals/register',
    children: [
      { label: { en: 'Registration', so: 'Diiwaangelin' }, href: '/professionals/register' },
      { label: { en: 'Licence Renewal', so: 'Cusbooneysiinta Shatiga' }, href: '/professionals/renew' },
      { label: { en: 'CPD', so: 'Horumarinta Mihnadeed (CPD)' }, href: '/professionals/cpd' },
      { label: { en: 'Examinations', so: 'Imtixaanaadka' }, href: '/professionals/examinations' },
      { label: { en: 'Internship Programme', so: 'Barnaamijka Tababarka' }, href: '/professionals/internship' },
      { label: { en: 'Standards & Code of Conduct', so: 'Heerarka iyo Xeerka Anshaxa' }, href: '/professionals/standards' },
      { label: { en: 'Foreign-Qualified Practitioners', so: 'Mihnadlayaasha Shahaadada Dibadda' }, href: '/professionals/foreign' },
    ],
  },
  {
    label: { en: 'Facilities', so: 'Xarumaha' },
    href: '/facilities/register',
    children: [
      { label: { en: 'Facility Registration', so: 'Diiwaangelinta Xarunta' }, href: '/facilities/register' },
      { label: { en: 'Inspection Regime', so: 'Nidaamka Kormeerka' }, href: '/facilities/inspection' },
      { label: { en: 'Institution Accreditation', so: 'Aqoonsiga Machadyada' }, href: '/institutions/accreditation' },
      { label: { en: 'Programme Approval', so: 'Ansixinta Barnaamijyada' }, href: '/institutions/programmes' },
    ],
  },
  {
    label: { en: 'About', so: 'Ku Saabsan' },
    href: '/about',
    children: [
      { label: { en: 'About NHPC', so: 'Ku Saabsan NHPC' }, href: '/about' },
      { label: { en: 'The Council', so: 'Golaha' }, href: '/about/council' },
      { label: { en: 'Secretariat & Committees', so: 'Xoghaynta iyo Guddiyada' }, href: '/about/secretariat' },
      { label: { en: 'NHPC Act Lr.31', so: 'Sharciga NHPC Lr.31' }, href: '/about/act' },
      { label: { en: 'News & Notices', so: 'Wararka iyo Ogeysiisyada' }, href: '/news' },
      { label: { en: 'Contact', so: 'Xiriir' }, href: '/contact' },
    ],
  },
];

// Persistent header action buttons.
export const headerActions = {
  verify: {
    label: { en: 'Verify', so: 'Xaqiiji' } satisfies Bilingual,
    href: '/public/verify',
  },
  reportMalpractice: {
    label: { en: 'Report Malpractice', so: 'Soo Sheeg Xad-gudub' } satisfies Bilingual,
    // External: the complaint form lives on the portal.
    href: PORTAL_URL,
    external: true,
  },
};

export const footerQuickLinks: NavItem[] = [
  { label: { en: 'Verify', so: 'Xaqiiji' }, href: '/public/verify' },
  { label: { en: 'File a Complaint', so: 'Gudbi Cabasho' }, href: PORTAL_URL, external: true },
  { label: { en: 'Register', so: 'Diiwaangelin' }, href: '/professionals/register' },
  { label: { en: 'NHPC Act Lr.31', so: 'Sharciga Lr.31' }, href: '/about/act' },
  { label: { en: 'Resources', so: 'Kheyraadka' }, href: '/resources' },
  { label: { en: 'Contact', so: 'Xiriir' }, href: '/contact' },
];

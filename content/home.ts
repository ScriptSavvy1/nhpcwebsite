import type { Bilingual, NavItem, Stat } from './types';

// ─── Hero ────────────────────────────────────────────────────────────
export const heroHeading: Bilingual = {
  en: 'Safeguarding health care for all Somalis',
  so: 'Ilaalinta daryeelka caafimaadka dhammaan Soomaalida',
};

export const heroKicker: Bilingual = {
  en: 'Independent statutory regulator · Act Lr.31',
  so: 'Hay’ad sharci oo madax-bannaan · Sharciga Lr.31',
};

// ─── Audience doors ──────────────────────────────────────────────────
// The primary navigation device on the homepage. Icons are mapped by id
// inside AudienceGrid so this stays plain data.
export type AudienceId = 'public' | 'professionals' | 'facilities';

export type Audience = {
  id: AudienceId;
  title: Bilingual;
  blurb: Bilingual;
  /** Landing href for the whole door. */
  href: string;
  links: NavItem[]; // exactly three
};

export const audiences: Audience[] = [
  {
    id: 'public',
    title: { en: 'For the Public', so: 'Dadweynaha' },
    blurb: {
      en: 'Check a practitioner or facility, report malpractice, and understand your rights as a patient.',
      so: 'Hubi mihnadle ama xarun, soo sheeg xad-gudub, oo fahan xuquuqdaada bukaan ahaan.',
    },
    href: '/public/verify',
    links: [
      { label: { en: 'Verify a Professional or Facility', so: 'Xaqiiji Mihnadle ama Xarun' }, href: '/public/verify' },
      { label: { en: 'File a Complaint', so: 'Gudbi Cabasho' }, href: '/public/complaints' },
      { label: { en: 'Patient Rights Charter', so: 'Axdiga Xuquuqda Bukaanka' }, href: '/public/rights' },
    ],
  },
  {
    id: 'professionals',
    title: { en: 'For Professionals', so: 'Mihnadlayaasha' },
    blurb: {
      en: 'Register, renew your licence, meet CPD requirements, and sit council examinations.',
      so: 'Is-diiwaangeli, cusbooneysii shatigaaga, buuxi shuruudaha CPD, oo gal imtixaanaadka Golaha.',
    },
    href: '/professionals/register',
    links: [
      { label: { en: 'Registration', so: 'Diiwaangelin' }, href: '/professionals/register' },
      { label: { en: 'Licence Renewal', so: 'Cusbooneysiinta Shatiga' }, href: '/professionals/renew' },
      { label: { en: 'CPD Requirements', so: 'Shuruudaha CPD' }, href: '/professionals/cpd' },
    ],
  },
  {
    id: 'facilities',
    title: { en: 'Facilities & Institutions', so: 'Xarumaha & Machadyada' },
    blurb: {
      en: 'Register a health facility, prepare for inspection, and accredit a health training institution.',
      so: 'Diiwaangeli xarun caafimaad, u diyaargarow kormeerka, oo aqoonsii machad tababar caafimaad.',
    },
    href: '/facilities/register',
    links: [
      { label: { en: 'Facility Registration', so: 'Diiwaangelinta Xarunta' }, href: '/facilities/register' },
      { label: { en: 'Inspection Regime', so: 'Nidaamka Kormeerka' }, href: '/facilities/inspection' },
      { label: { en: 'Institution Accreditation', so: 'Aqoonsiga Machadyada' }, href: '/institutions/accreditation' },
    ],
  },
];

// ─── Statistics ──────────────────────────────────────────────────────
// PLACEHOLDER — NHPC has not published figures. Do NOT invent numbers.
// Shown as "—" with a caption until real data is available.
export const stats: Stat[] = [
  {
    value: '—',
    label: { en: 'Registered health professionals', so: 'Mihnadlayaasha caafimaadka diiwaangashan' },
    placeholder: true,
  },
  {
    value: '—',
    label: { en: 'Licensed health facilities', so: 'Xarumaha caafimaadka ee shati leh' },
    placeholder: true,
  },
  {
    value: '—',
    label: { en: 'Accredited training institutions', so: 'Machadyada tababarka ee la aqoonsaday' },
    placeholder: true,
  },
];

export const statsCaption: Bilingual = {
  en: 'Figures will be published as the national register is finalised.',
  so: 'Tirooyinka waa la daabici doonaa marka diiwaanka qaran la dhammeystiro.',
};

// ─── About teaser ────────────────────────────────────────────────────
export const aboutTeaser: Bilingual = {
  en: 'NHPC is the independent statutory body established under Act Lr.31 to register and license health professionals, accredit health facilities, and approve health training institutions — protecting the public from malpractice and upholding professional ethics across Somalia.',
  so: 'NHPC waa hay’adda sharciga ah ee madax-bannaan ee lagu aasaasay Sharciga Lr.31 si ay u diiwaangeliso oo u shatiyeyso mihnadlayaasha caafimaadka, u aqoonsato xarumaha caafimaadka, oo u ansixiso machadyada tababarka — iyadoo bulshada ka ilaalinaysa xad-gudub oo dhowraysa anshaxa mihnadeed guud ahaan Soomaaliya.',
};

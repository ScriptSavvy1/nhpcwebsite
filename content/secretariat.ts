import type { Bilingual } from './types';

/** One of the Council's three special committees (Art. 17(1)). Local to
 *  /about/secretariat. */
export type SpecialCommittee = {
  name: Bilingual;
  /** What the Act says the committee does. */
  remit: Bilingual;
  ref: Bilingual;
  /** The page covering the work this committee does, if there is one. */
  href: string | null;
};

// ─────────────────────────────────────────────────────────────
// REAL, from Articles 13, 14 and 17 of the NHPC Act Lr.31.
//
// The Act is English-only; the Somali here is a working translation.
// ─────────────────────────────────────────────────────────────

/** The administrative staff of the NHPC, as listed at Article 13. These are
 *  POSTS, not people — the Act names roles and the Council has not published
 *  who holds them. Do not add names here. */
export const staffRoles: Bilingual[] = [
  { en: 'Secretary General of the NHPC — the executive of the NHPC', so: 'Xoghayaha Guud ee NHPC — fulinta NHPC' },
  { en: 'Deputy Secretary General of the NHPC', so: 'Ku-xigeenka Xoghayaha Guud ee NHPC' },
  { en: 'Registration, License and Accreditation', so: 'Diiwaangelinta, Shatiyeynta iyo Aqoonsiga' },
  { en: 'Training and Development Subcommittee', so: 'Guddi-hoosaadka Tababarka iyo Horumarinta' },
  { en: 'Quality Assurance', so: 'Hubinta Tayada' },
  { en: 'Legal and Professional Ethics', so: 'Sharciga iyo Anshaxa Mihnadeed' },
  { en: 'Accountant', so: 'Xisaabiyaha' },
  { en: 'Treasurer', so: 'Khasnajiga' },
];

/** The Secretariat's powers and duties, Article 14. Summarised from the
 *  Act's own list. */
export const secretariatDuties: Bilingual[] = [
  {
    en: 'Support, coordinate and supervise the sub-committees established by the Council.',
    so: 'Taageer, isku dubarid oo kormeer guddi-hoosaadyada uu Goluhu aasaasay.',
  },
  {
    en: 'Ensure the Council’s decisions are implemented in accordance with NHPC regulations, and execute them.',
    so: 'Hubi in go’aannada Golaha la fuliyo si waafaqsan xeerarka NHPC, oo fuli.',
  },
  {
    en: 'Represent the Council and carry out its duties while the Council is not in session — but the Secretariat cannot suspend or reverse a Council decision.',
    so: 'Matal Golaha oo qabo hawlihiisa marka uusan Goluhu fadhi ku jirin — laakiin Xoghayntu ma hakin karto ama ma beddeli karto go’aan Gole.',
  },
  {
    en: 'Carry out the day-to-day activities of the NHPC.',
    so: 'Qabo hawlaha maalin-kasta ee NHPC.',
  },
  {
    en: 'Prepare and submit reports to the Council, and perform such other matters as the Council directs.',
    so: 'Diyaari oo u gudbi warbixinno Golaha, oo qabo arrimo kale oo uu Goluhu faro.',
  },
];

/** The three special committees, Article 17(1). Their remits are the Act's
 *  own words, summarised. There are exactly three — do not add a fourth
 *  without checking Article 17. */
export const specialCommittees: SpecialCommittee[] = [
  {
    name: { en: 'Medical Research Committee', so: 'Guddiga Cilmi-baarista Caafimaadka' },
    remit: {
      en: 'Reviews all medical procedures submitted to the Council for approval.',
      so: 'Wuxuu dib u eegaa dhammaan habraacyada caafimaad ee Golaha loo soo gudbiyo si loo ansixiyo.',
    },
    ref: { en: 'Article 17(1)(a)', so: 'Qodobka 17aad (1)(a)' },
    href: null,
  },
  {
    name: {
      en: 'Health Professional Disciplinary Committee',
      so: 'Guddiga Edbinta Mihnadlayaasha Caafimaadka',
    },
    remit: {
      en: 'Deals with allegations of misconduct and other relevant complaints brought to the Council’s attention.',
      so: 'Wuxuu qabtaa eedeymaha xad-gudubka iyo cabashooyinka kale ee la xiriira ee Golaha la gaadhsiiyo.',
    },
    ref: { en: 'Article 17(1)(b)', so: 'Qodobka 17aad (1)(b)' },
    href: '/public/complaints/process',
  },
  {
    name: {
      en: 'Health Professionals Assessment Committee',
      so: 'Guddiga Qiimaynta Mihnadlayaasha Caafimaadka',
    },
    remit: {
      en: 'Conducts examinations for health professionals who are in the process of registering.',
      so: 'Wuxuu qabtaa imtixaanada mihnadlayaasha caafimaadka ee ku jira habka diiwaangelinta.',
    },
    ref: { en: 'Article 17(1)(c)', so: 'Qodobka 17aad (1)(c)' },
    href: '/professionals/examinations',
  },
];

import type { Bilingual } from './types';

/** One block of the Act, at map resolution. Local to /about/act. */
export type ActPart = {
  /** Article range label, e.g. "Articles 41–52". */
  articles: Bilingual;
  subject: Bilingual;
  /** The page on this site that covers it, lang-agnostic. null = the Act
   *  deals with it but no page summarises it. */
  href: string | null;
};

/** The Act's total article count. Real — see the PDF. */
export const totalArticles = 73;

// A MAP, not a summary. Every range below is transcribed from the Act's own
// "Arrangement of Articles". The job of /about/act is to get a reader to the
// right place — the PDF for authority, or the page that explains their
// situation. Do NOT grow this into a restatement of 73 articles: the Act is
// the authoritative text and it is one click away.
//
// Check any new row against the Arrangement of Articles before adding it.
// Article 17 is Special Committees, NOT the Council's functions — those are
// Article 10. Guessing an article number here sends people to the wrong law.
export const actParts: ActPart[] = [
  {
    articles: { en: 'Articles 1–3', so: 'Qodobbada 1–3' },
    subject: {
      en: 'The Council: its establishment as an independent body, its objectives, and how it is constituted.',
      so: 'Golaha: aasaaskiisa oo ah hay’ad madax-bannaan, ujeeddooyinkiisa, iyo sida loo dhisay.',
    },
    href: '/about/council',
  },
  {
    articles: { en: 'Article 10', so: 'Qodobka 10aad' },
    subject: {
      en: 'The Council’s mandates and functions — what it exists to do.',
      so: 'Waajibaadka iyo hawlaha Golaha — waxa uu u jiro.',
    },
    href: '/about',
  },
  {
    articles: { en: 'Articles 13–17', so: 'Qodobbada 13–17' },
    subject: {
      en: 'The Secretariat that runs the Council day to day, and the three special committees.',
      so: 'Xoghaynta maalin-kasta u shaqeysa Golaha, iyo saddexda guddi ee gaarka ah.',
    },
    href: '/about/secretariat',
  },
  {
    articles: { en: 'Article 23', so: 'Qodobka 23aad' },
    subject: {
      en: 'The categories of fee the Council is authorised to charge. Fees outside these categories are not lawful.',
      so: 'Noocyada khidmadaha ee Golaha loo oggol yahay inuu qaado. Khidmadaha ka baxsan noocyadan sharci ma aha.',
    },
    href: null,
  },
  {
    articles: { en: 'Articles 24–39', so: 'Qodobbada 24–39' },
    subject: {
      en: 'Registration of health professionals: who must register, the requirements, internship, re-registration, foreign-qualified practitioners, and the offence of practising unregistered.',
      so: 'Diiwaangelinta mihnadlayaasha caafimaadka: cidda waajib ku tahay inay is-diiwaangeliso, shuruudaha, tababarka, dib-u-diiwaangelinta, mihnadlayaasha shahaadada dibadda, iyo dembiga ah ka-shaqaynta iyadoon la diiwaangelin.',
    },
    href: '/professionals/register',
  },
  {
    articles: { en: 'Articles 42–46', so: 'Qodobbada 42–46' },
    subject: {
      en: 'The licence to practise: its validity, renewal, cancellation, and what happens when it lapses.',
      so: 'Shatiga shaqada: ansaxnimadiisa, cusbooneysiintiisa, burintiisa, iyo waxa dhaca marka uu dhaco.',
    },
    href: '/professionals/renew',
  },
  {
    articles: { en: 'Articles 40 and 62–64', so: 'Qodobbada 40 iyo 62–64' },
    subject: {
      en: 'Professional conduct and offences, advertising, and protection of professional and specialist titles.',
      so: 'Anshaxa mihnadeed iyo dembiyada, xayeysiinta, iyo ilaalinta cinwaannada mihnadeed iyo kuwa takhasuska.',
    },
    href: '/professionals/standards',
  },
  {
    articles: { en: 'Articles 41 and 47–52', so: 'Qodobbada 41 iyo 47–52' },
    subject: {
      en: 'Health facilities: registration, licensing, inspection, closure, and the consequences of operating unlicensed.',
      so: 'Xarumaha caafimaadka: diiwaangelinta, shatiyeynta, kormeerka, xidhitaanka, iyo cawaaqibka ka-shaqaynta shati la’aan.',
    },
    href: '/facilities/register',
  },
  {
    articles: { en: 'Articles 53–56', so: 'Qodobbada 53–56' },
    subject: {
      en: 'Health training institutions and the approval, evaluation and review of their programmes.',
      so: 'Machadyada tababarka caafimaadka iyo ansixinta, qiimaynta iyo dib-u-eegista barnaamijyadooda.',
    },
    href: '/institutions/accreditation',
  },
  {
    articles: { en: 'Article 69', so: 'Qodobka 69aad' },
    subject: {
      en: 'Appeals against a decision of the Council.',
      so: 'Racfaanka ka dhanka ah go’aan uu Goluhu gaadho.',
    },
    href: null,
  },
];

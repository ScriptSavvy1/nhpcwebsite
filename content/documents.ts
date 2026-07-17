import type { Bilingual, DocumentEntry } from './types';

export type DocCategory = DocumentEntry['category'];

export const categoryLabels: Record<DocCategory | 'all', Bilingual> = {
  all: { en: 'All', so: 'Dhammaan' },
  act: { en: 'The Act', so: 'Sharciga' },
  professionals: { en: 'Professionals', so: 'Mihnadlayaasha' },
  facilities: { en: 'Facilities', so: 'Xarumaha' },
  standards: { en: 'Standards', so: 'Heerarka' },
  forms: { en: 'Forms', so: 'Foomamka' },
};

// Typed inventory of hosted PDFs. Add a PDF here and it appears in the
// /resources hub and any DocumentCard grid — components never change.
// File sizes are the exact on-disk sizes measured in /public/documents.
export const documents: DocumentEntry[] = [
  {
    id: 'act-lr31',
    title: {
      en: 'National Health Professionals Council Act, Lr.31',
      so: 'Sharciga Golaha Mihnadlayaasha Caafimaadka Qaranka, Lr.31',
    },
    description: {
      en: 'The full legal framework establishing the NHPC and regulating health professionals, facilities, and training institutions. 73 Articles.',
      so: 'Qaab-dhismeedka sharci ee dhammeystiran ee aasaasay NHPC oo xukuma mihnadlayaasha caafimaadka, xarumaha, iyo machadyada tababarka. 73 Qodob.',
    },
    href: '/documents/nhpc-act-lr31-2020.pdf',
    fileSize: '339 KB',
    language: 'SO/EN',
    lastUpdated: '2026-07-16',
    docRef: 'NHPC / ACT / Lr.31',
    category: 'act',
  },
  {
    id: 'hpr-req',
    title: {
      en: 'Registration Requirements for Health Professionals',
      so: 'Shuruudaha Laga Doonayo Mihnadlayaasha Caafimaadka',
    },
    description: {
      en: 'The documents an individual health professional must submit to register with NHPC under Article 25.',
      so: 'Dukumiintiyada uu mihnadlaha caafimaadku waa inuu u soo gudbiyo si uu isuga diiwaangeliyo NHPC sida uu dhigayo Qodobka 25aad.',
    },
    href: '/documents/nhpc-health-professional-registration-requirements-so-en.pdf',
    fileSize: '260 KB',
    language: 'SO/EN',
    lastUpdated: '2026-07-16',
    docRef: 'NHPC / HPR-REQ / 01',
    category: 'professionals',
  },
  {
    id: 'hfr-req',
    title: {
      en: 'Registration Requirements for Health Facilities',
      so: 'Shuruudaha Laga Doonayo Xarumaha Caafimaadka',
    },
    description: {
      en: 'The documents a health facility must submit to register with NHPC under Article 41(3).',
      so: 'Dukumiintiyada ay xarunta caafimaadku waa inay u soo gudbiso si ay isuga diiwaangeliso NHPC sida uu dhigayo Qodobka 41aad (3).',
    },
    href: '/documents/nhpc-health-facility-registration-requirements-so-en.pdf',
    fileSize: '261 KB',
    language: 'SO/EN',
    lastUpdated: '2026-07-16',
    docRef: 'NHPC / HFR-REQ / 01',
    category: 'facilities',
  },
  {
    id: 'code-of-conduct',
    title: {
      en: 'Code of Conduct for Registered Health Professionals',
      so: 'Xeerka Anshax Wanaagga Mihnadlayaasha Caafimaadka ee Diiwaangashan',
    },
    description: {
      en: 'The seven principles of professional conduct binding every registered health professional. To be read alongside Act Articles 40, 46 and 62.',
      so: 'Toddobada mabda’ ee anshaxa mihnadeed ee ku waajib ah mihnadle kasta oo diiwaangashan. Waa in la akhriyaa la jaan-qaadka Qodobbada 40, 46 iyo 62.',
    },
    href: '/documents/nhpc-xeerka-anshax-wanaagga-code-of-conduct-so.pdf',
    fileSize: '297 KB',
    language: 'SO',
    lastUpdated: '2026-07-16',
    docRef: 'NHPC / COC / 01',
    category: 'standards',
  },

  // NOT YET PUBLISHED. NHPC has not produced this form — href is null, so
  // the card renders as "not yet published" rather than a broken link.
  // Do not invent a file. When the PDF exists: drop it in
  // /public/documents/, set href, fileSize and lastUpdated. Nothing else
  // changes — it is already referenced by /public/complaints.
  {
    id: 'complaint-form',
    title: {
      en: 'Complaint Form',
      so: 'Foomka Cabashada',
    },
    description: {
      en: 'The form to complete and email to NHPC when filing a complaint. Not yet published — until it is, email us the details listed on this page.',
      so: 'Foomka aad buuxin lahayd oo aad NHPC ugu soo diri lahayd markaad cabasho gudbinayso. Weli lama daabicin — ilaa intaas, noo soo iimayl gareey faahfaahinta boggano ku qoran.',
    },
    href: null,
    language: 'SO/EN',
    docRef: 'NHPC / CMP-FORM / 01',
    category: 'forms',
  },
];

export function documentById(id: string): DocumentEntry | undefined {
  return documents.find((d) => d.id === id);
}

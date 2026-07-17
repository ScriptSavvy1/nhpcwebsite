// ─────────────────────────────────────────────────────────────
// Shared content types. Every user-facing string is Bilingual from
// the start — English is the landing default, Somali is first-class.
// ─────────────────────────────────────────────────────────────

export type Lang = 'en' | 'so';

export type Bilingual = { en: string; so: string };

/** Language a hosted PDF is written in — independent of the site language. */
export type DocLanguage = 'SO' | 'EN' | 'SO/EN';

export type NavItem = {
  label: Bilingual;
  /** Path WITHOUT the /[lang] prefix, e.g. "/public/complaints". */
  href: string;
  children?: NavItem[];
};

export type DocumentEntry = {
  id: string;
  title: Bilingual;
  description: Bilingual;
  /** Absolute path under /public, e.g. "/documents/nhpc-act-lr31-2020.pdf".
   *  NULL when NHPC has not published the document yet — the card then
   *  renders as a plain "not yet published" panel and is never a link. We
   *  do not ship links to files that do not exist. */
  href: string | null;
  /** Omitted while unpublished. */
  fileSize?: string;
  language: DocLanguage;
  /** ISO date string, e.g. "2026-07-16". Omitted while unpublished. */
  lastUpdated?: string;
  docRef: string;
  /** Coarse grouping for the /resources filter. */
  category: 'act' | 'professionals' | 'facilities' | 'standards' | 'forms';
};

/** A single requirement / process / complaint-stage row for NumberedRows. */
export type NumberedItem = {
  title: Bilingual;
  detail?: Bilingual;
};

export type FeeRow = {
  item: Bilingual;
  amount: Bilingual;
  note?: Bilingual;
};

export type FaqEntry = {
  question: Bilingual;
  answer: Bilingual;
};

/** A published disciplinary decision.
 *
 *  NEVER add a complainant's name, or any field that could identify them.
 *  Publishing outcomes builds public trust; publishing the person who
 *  complained destroys it, and would deter the next complaint. Only the
 *  subject of the decision is named. */
export type DisciplinaryOutcome = {
  /** ISO date of the decision. */
  date: string;
  subjectType: 'professional' | 'facility' | 'institution';
  /** The subject of the decision — the party sanctioned, never the complainant. */
  subjectName: Bilingual;
  finding: Bilingual;
  sanction: Bilingual;
  /** The Act provision relied on, e.g. "Art. 40". */
  article: Bilingual;
};

/** A scheduled council examination.
 *
 *  Do NOT invent sittings, dates, venues or deadlines. An exam deadline is
 *  something a candidate plans their year around; a wrong one is worse than
 *  no table at all. */
export type ExamSitting = {
  exam: Bilingual;
  cadre: Bilingual;
  /** ISO date of the sitting. */
  date: string;
  /** ISO date registration closes. */
  registrationDeadline: string;
  venue: Bilingual;
  status: 'open' | 'closed';
};

/** One constituency's seat allocation on the Council.
 *
 *  This is STRUCTURE, not a placeholder: Article 3 fixes the composition, so
 *  it is publishable today. Do not edit the numbers to match who happens to
 *  be sitting — the allocation is what the law says, and a vacant seat is
 *  still a seat. */
export type CouncilSeat = {
  /** The body represented or nominating. */
  constituency: Bilingual;
  seats: number;
};

/** A named, appointed member of the Council.
 *
 *  Separate from CouncilSeat by design. The composition is law and ships now;
 *  the names are appointments and ship when the Council publishes them. Do
 *  NOT invent members, and do not guess who holds a seat. */
export type CouncilMember = {
  name: Bilingual;
  /** The seat held — should correspond to a CouncilSeat constituency. */
  constituency: Bilingual;
  /** e.g. Chairperson. Omit for ordinary members. */
  role?: Bilingual;
  /** ISO date the three-year term began (Art. 3(8)). */
  termStart: string;
};

/** A CPD provider accredited by the Council.
 *
 *  Do NOT invent providers. Listing an unaccredited provider would send a
 *  professional to buy CPD that will not count towards their renewal. */
export type CpdProvider = {
  name: Bilingual;
  /** What the provider is accredited to deliver. */
  scope: Bilingual;
  /** Accreditation reference issued by the Council. */
  ref: string;
  /** ISO date the accreditation expires. */
  validUntil: string;
};

export type NoticeType = 'notice' | 'exam' | 'cpd' | 'disciplinary' | 'press';

export type Notice = {
  slug: string;
  type: NoticeType;
  date: string; // ISO
  title: Bilingual;
  summary: Bilingual;
};

export type Stat = {
  value: string;
  label: Bilingual;
  /** true until NHPC publishes a real figure. */
  placeholder?: boolean;
};

/** A cited Act provision — the ref label is localised (e.g. "Article 25(3)"
 *  / "Qodobka 25aad (3)"). */
export type RegulationCitation = {
  ref: Bilingual;
  text: Bilingual;
};

/** One class of registration. Classes are PARALLEL VARIANTS a person
 *  chooses between — never stages in a sequence. Rendering them as an
 *  ordered flow would tell an applicant they must first do something they
 *  do not need to do. */
export type RegistrationClass = {
  name: Bilingual;
  whoItsFor: Bilingual;
  /** Maximum duration / validity, e.g. "Maximum 6 months (Art. 37(3))". */
  cap: Bilingual;
  conditions: Bilingual[];
};

/** The single content contract every regulation page is built from.
 *  Facilities / renew / internship / institutions / foreign each supply
 *  one of these — the layout JSX is never copied. */
export type RegulationContent = {
  slug: string;
  title: Bilingual;
  /** One-line description under the title. */
  intro: Bilingual;
  docRef: string;
  /** "Who this applies to" — bullet statements. */
  whoApplies: Bilingual[];
  /** PARALLEL VARIANTS of registration to choose between (Art. 27 domestic
   *  classes; Art. 36–38 foreign classes). Rendered as a comparison, never
   *  a sequence. Optional — omit when a flow has a single class. */
  classes?: RegistrationClass[];
  /** WHAT YOU MUST SUBMIT. For registration pages the Somali is the
   *  authoritative official text; English is a working translation.
   *  Optional — a page with nothing to submit (e.g. an inspection regime
   *  you are subject to) omits it. */
  requirements?: NumberedItem[];
  // ── Section boundaries — keep these distinct or the seam reopens ──
  /** THE APPLICATION FLOW. Ordered steps to get registered. Ends at
   *  approval. Nothing after approval belongs here. Optional — a page that
   *  is a regime rather than an application (e.g. inspection) has none, and
   *  its absence also suppresses the Apply CTA: no application, no button. */
  process?: NumberedItem[];
  /** WHAT YOU MUST KEEP DOING WHILE REGISTERED. Ongoing, recurring, or
   *  conditional duties (display licence, renew, notify changes, CPD,
   *  periodic inspection). NOT enforcement: closure/invalidation/
   *  withdrawal are the RESULT of failing an obligation and live in
   *  `faqs`, never here. Optional — omit when a flow has none. */
  obligations?: NumberedItem[];
  /** Fee categories authorised by Article 23. Optional — omit where the Act
   *  authorises no fee (do not invent a category to fill the section). */
  fees?: FeeRow[];
  feesNote?: Bilingual;
  /** HEADLINE NUMBERS AND DEADLINES — scannable legal facts surfaced in
   *  a prominent callout (validity periods, decision windows, penalties). */
  keyFacts: RegulationCitation[];
  /** IDs into content/documents.ts for the Documents & Forms grid. */
  documentIds: string[];
  /** QUESTIONS PEOPLE ACTUALLY ASK — including "what happens if I fail an
   *  obligation" (enforcement consequences belong here). */
  faqs: FaqEntry[];
  /** The governing Article LIST ONLY, e.g. "Articles 24–30, 39 and 72".
   *  ActFooter composes the surrounding sentence — do not repeat it here. */
  governingArticles: Bilingual;
  /** CTA label; defaults to "Apply Online". */
  applyLabel?: Bilingual;
  /** Context shown beside the Apply CTA. */
  applyNote?: Bilingual;
};

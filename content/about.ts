import type { Bilingual } from './types';

// ─────────────────────────────────────────────────────────────
// REAL, from Articles 1 and 10 of the NHPC Act Lr.31.
// The Act is English-only; the Somali here is a working translation.
// ─────────────────────────────────────────────────────────────

/** The Council's mandates and functions, Article 10. Summarised from the
 *  Act's own ten-item list — the Act's wording governs. */
export const mandates: Bilingual[] = [
  {
    en: 'Register and license all health professionals, and regulate their professional conduct.',
    so: 'Diiwaangeli oo shatiyee dhammaan mihnadlayaasha caafimaadka, oo xukun anshaxooda mihnadeed.',
  },
  {
    en: 'Maintain practice standards among health professionals, consistent with self-regulation and high standards of public health.',
    so: 'Ilaali heerarka shaqada ee mihnadlayaasha caafimaadka, si waafaqsan is-xukunka iyo heerar sare oo caafimaadka bulshada ah.',
  },
  {
    en: 'Improve standards of qualification in the health professions.',
    so: 'Kor u qaad heerarka shahaadooyinka xirfadaha caafimaadka.',
  },
  {
    en: 'Promote the integrity and status of the health professions, including declaring a practice undesirable where necessary.',
    so: 'Horumari daacadnimada iyo maqaamka xirfadaha caafimaadka, oo ay ku jirto ku dhawaaqidda in hawl gaar ah aan la doonayn marka loo baahdo.',
  },
  {
    en: 'License and accredit public and private health facilities and services, and monitor quality assurance of facilities, services and medical education.',
    so: 'Shatiyee oo aqoonso xarumaha iyo adeegyada caafimaadka ee dawladda iyo kuwa gaarka ah, oo kormeer hubinta tayada xarumaha, adeegyada iyo waxbarashada caafimaadka.',
  },
  {
    en: 'Investigate allegations of professional misconduct and impose such sanctions as may be necessary.',
    so: 'Baadh eedeymaha xad-gudubka mihnadeed oo soo rog ciqaabaha lagama maarmaanka ah.',
  },
  {
    en: 'Protect and assist the public in all matters relating to malpractice of the health profession.',
    so: 'Ilaali oo caawi dadweynaha dhammaan arrimaha la xiriira xad-gudubka xirfadda caafimaadka.',
  },
  {
    en: 'Advise the Ministry of Health, other line ministries and stakeholders on matters relating to the health profession.',
    so: 'La tali Wasaaradda Caafimaadka, wasaaradaha kale ee khuseeya iyo daneeyayaasha arrimaha la xiriira xirfadda caafimaadka.',
  },
];

/** The honest boundary. Every line here is a limit a real visitor hits — a
 *  patient wanting compensation, a professional wanting a job, someone
 *  needing urgent care. Saying so up front is cheaper than a wasted trip.
 *
 *  Keep this grounded: the Act tells us what NHPC does, and these are the
 *  things it therefore does not. Do not add a limit you cannot support. */
export const notOurRole: Bilingual[] = [
  {
    en: 'We are not a hospital or a clinic. We do not treat patients — if you need medical care, go to a registered health facility. In an emergency, seek care first.',
    so: 'Ma nihin isbitaal ama xarun caafimaad. Bukaanka ma daaweyno — haddii aad u baahan tahay daryeel caafimaad, aad xarun caafimaad oo diiwaangashan. Xaalad degdeg ah, marka hore raadi daryeel.',
  },
  {
    en: 'We are not a court. We can discipline a professional or a facility; we cannot award you compensation or damages.',
    so: 'Ma nihin maxkamad. Waxaan edbin karnaa mihnadle ama xarun; laakiin magdhow lacageed ku siin kari mayno.',
  },
  {
    en: 'We do not employ health professionals and we do not place them in jobs. Registration is a licence to practise, not an offer of work.',
    so: 'Ma shaqaaleysiino mihnadlayaasha caafimaadka mana shaqo gelinno. Diiwaangelintu waa shati aad ku shaqeyso, ma aha ballanqaad shaqo.',
  },
  {
    en: 'We do not run the health system or set clinical treatment guidelines. That is the Ministry of Health.',
    so: 'Ma maamulno nidaamka caafimaadka mana dejinno tilmaamaha daaweynta. Taasi waa Wasaaradda Caafimaadka.',
  },
];

import type { CouncilMember, CouncilSeat } from './types';

// ─────────────────────────────────────────────────────────────
// REAL, from Article 3 of the NHPC Act Lr.31. Not a placeholder.
//
// Transcribed from the Act's own composition table. The English is the
// Act's wording — these are the names of specific BODIES, not professions:
// the seat belongs to the Somali Nursing Association, not to "nursing".
// Do not paraphrase them back into profession names; who holds a seat is
// the whole point of publishing the composition.
//
// The Act is English-only, so the Somali here is a working translation.
//
// Do not adjust these numbers to match who is sitting. A vacant seat is
// still a seat.
// ─────────────────────────────────────────────────────────────
export const councilSeats: CouncilSeat[] = [
  { constituency: { en: 'Ministry of Health', so: 'Wasaaradda Caafimaadka' }, seats: 2 },
  {
    constituency: { en: 'Ministry of Higher Education', so: 'Wasaaradda Waxbarashada Sare' },
    seats: 1,
  },
  {
    constituency: {
      en: 'Ministry of Justice and Constitutions',
      so: 'Wasaaradda Cadaaladda iyo Dastuurka',
    },
    seats: 1,
  },
  {
    constituency: { en: 'Somali Medical Association', so: 'Ururka Dhakhaatiirta Soomaaliyeed' },
    seats: 3,
  },
  {
    constituency: { en: 'Somali Nursing Association', so: 'Ururka Kalkaalisooyinka Soomaaliyeed' },
    seats: 1,
  },
  {
    constituency: { en: 'Somali Midwifery Association', so: 'Ururka Umulisooyinka Soomaaliyeed' },
    seats: 1,
  },
  {
    constituency: { en: 'Health Training Institutions', so: 'Machadyada Tababarka Caafimaadka' },
    seats: 1,
  },
  {
    constituency: {
      en: 'Somali Laboratory Technologists Association',
      so: 'Ururka Farsamayaqaannada Shaybaarka Soomaaliyeed',
    },
    seats: 1,
  },
  {
    constituency: {
      en: 'Somali Pharmacists Association',
      so: 'Ururka Farmashiyeyaasha Soomaaliyeed',
    },
    seats: 1,
  },
  {
    constituency: {
      en: 'Somali Public Health Association',
      so: 'Ururka Caafimaadka Bulshada Soomaaliyeed',
    },
    seats: 1,
  },
  {
    constituency: {
      en: 'Private Health Facility',
      so: 'Xarunta Caafimaadka ee Gaarka loo leeyahay',
    },
    seats: 1,
  },
  { constituency: { en: 'Somali Civil Society', so: 'Bulshada Rayidka ah ee Soomaaliyeed' }, seats: 1 },
];

/** Derived, never hardcoded — if a seat row changes, the total follows.
 *  The Act states the total is 15; this must agree with it. */
export const totalSeats = councilSeats.reduce((sum, s) => sum + s.seats, 0);

// The 15 appointed members, transcribed from the Minister of Health's
// appointment letter (Ref. MOH/FRS/MO/0439, dated 19 April 2026). These are
// real, officially named appointees — not placeholders. Names are recorded as
// written in the letter; constituency strings match councilSeats above.
// Three-year term from appointment (Art. 3(8)).
export const councilMembers: CouncilMember[] = [
  { name: { en: 'Dr. Abdirahman Awale Hassan', so: 'Dr. Abdirahman Awale Hassan' }, constituency: { en: 'Ministry of Health', so: 'Wasaaradda Caafimaadka' }, termStart: '2026-04-19' },
  { name: { en: 'Cali Cabdiraxmaan Cismaan', so: 'Cali Cabdiraxmaan Cismaan' }, constituency: { en: 'Ministry of Health', so: 'Wasaaradda Caafimaadka' }, termStart: '2026-04-19' },
  { name: { en: 'Dr. Ibraahim Cabdulaahi Guuleed', so: 'Dr. Ibraahim Cabdulaahi Guuleed' }, constituency: { en: 'Ministry of Justice and Constitutions', so: 'Wasaaradda Cadaaladda iyo Dastuurka' }, termStart: '2026-04-19' },
  { name: { en: 'Dr. Abdiladif Ahmed Hassan', so: 'Dr. Abdiladif Ahmed Hassan' }, constituency: { en: 'Ministry of Higher Education', so: 'Wasaaradda Waxbarashada Sare' }, termStart: '2026-04-19' },
  { name: { en: 'Dr. Luul Maxamuud Maxamed', so: 'Dr. Luul Maxamuud Maxamed' }, constituency: { en: 'Somali Medical Association', so: 'Ururka Dhakhaatiirta Soomaaliyeed' }, termStart: '2026-04-19' },
  { name: { en: 'Dr. Qaasim Xaaji Xuseen', so: 'Dr. Qaasim Xaaji Xuseen' }, constituency: { en: 'Somali Medical Association', so: 'Ururka Dhakhaatiirta Soomaaliyeed' }, termStart: '2026-04-19' },
  { name: { en: 'Dr. Mohamed Mumin Aanoy', so: 'Dr. Mohamed Mumin Aanoy' }, constituency: { en: 'Somali Medical Association', so: 'Ururka Dhakhaatiirta Soomaaliyeed' }, termStart: '2026-04-19' },
  { name: { en: 'Naciima Cumar Ibraahim', so: 'Naciima Cumar Ibraahim' }, constituency: { en: 'Somali Midwifery Association', so: 'Ururka Umulisooyinka Soomaaliyeed' }, termStart: '2026-04-19' },
  { name: { en: 'Marwa Zamzam Mohamed Aadam', so: 'Marwa Zamzam Mohamed Aadam' }, constituency: { en: 'Somali Nursing Association', so: 'Ururka Kalkaalisooyinka Soomaaliyeed' }, termStart: '2026-04-19' },
  { name: { en: 'Cimraan Axmed Cabdulqadir', so: 'Cimraan Axmed Cabdulqadir' }, constituency: { en: 'Somali Public Health Association', so: 'Ururka Caafimaadka Bulshada Soomaaliyeed' }, termStart: '2026-04-19' },
  { name: { en: 'Dr. Daa’uud Macalin Isxaaq Aweys', so: 'Dr. Daa’uud Macalin Isxaaq Aweys' }, constituency: { en: 'Somali Pharmacists Association', so: 'Ururka Farmashiyeyaasha Soomaaliyeed' }, termStart: '2026-04-19' },
  { name: { en: 'Axmed Abuukar Maxamed', so: 'Axmed Abuukar Maxamed' }, constituency: { en: 'Somali Laboratory Technologists Association', so: 'Ururka Farsamayaqaannada Shaybaarka Soomaaliyeed' }, termStart: '2026-04-19' },
  { name: { en: 'Cusmaan Muxidiin Macalin-Shaatax', so: 'Cusmaan Muxidiin Macalin-Shaatax' }, constituency: { en: 'Somali Civil Society', so: 'Bulshada Rayidka ah ee Soomaaliyeed' }, termStart: '2026-04-19' },
  { name: { en: 'Dr. Tahliil Cabdi Afrah', so: 'Dr. Tahliil Cabdi Afrah' }, constituency: { en: 'Health Training Institutions', so: 'Machadyada Tababarka Caafimaadka' }, termStart: '2026-04-19' },
  { name: { en: 'Dr. Mohamed Abdullahi Isse (Galadiid)', so: 'Dr. Mohamed Abdullahi Isse (Galadiid)' }, constituency: { en: 'Private Health Facility', so: 'Xarunta Caafimaadka ee Gaarka loo leeyahay' }, termStart: '2026-04-19' },
];

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

// PLACEHOLDER — the Council has not published its appointments.
//
// DO NOT invent members, and do not guess who holds a seat. Naming the wrong
// person as a health regulator is a defamation risk and a trust failure at
// the same time. Launches empty; add a member here and the list renders.
export const councilMembers: CouncilMember[] = [];

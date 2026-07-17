import type { ExamSitting } from './types';

// PLACEHOLDER — the Council has not published an examination schedule.
// Launches empty. DO NOT invent sittings, dates, deadlines or venues: a
// candidate plans their year around these, and a wrong date is worse than
// an empty table.
//
// The structure is real: add a sitting here and the schedule renders. When
// sittings exist, also add a matching `exam` notice to content/news.ts so
// the deadline surfaces on the homepage NoticeBoard — that is the most-used
// thing on a regulator's site, and the table alone will not surface it.
export const sittings: ExamSitting[] = [];

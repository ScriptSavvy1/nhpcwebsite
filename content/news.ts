import type { Notice } from './types';

// PLACEHOLDER — no official notices published yet. Do NOT invent news.
// The NoticeBoard renders an honest empty state until real notices are
// added here. Item rendering (incl. red-bordered exam deadlines) is ready.
export const notices: Notice[] = [];

/** Newest first, limited to `count`. */
export function latestNotices(count: number): Notice[] {
  return [...notices]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, count);
}

export function noticeBySlug(slug: string): Notice | undefined {
  return notices.find((n) => n.slug === slug);
}

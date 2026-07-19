'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ShieldCheck, Flag, ChevronDown } from 'lucide-react';
import type { Lang } from '@/content/types';
import { t, localizedHref } from '@/lib/i18n';
import { orgName, primaryNav, headerActions } from '@/content/site';
import LanguageToggle from './LanguageToggle';

// Strip the /[lang] prefix → first path segment ('' for the home page).
function firstSegment(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean); // ['en','public','verify']
  return parts[1] ?? '';
}

// The Facilities door owns both /facilities and /institutions routes.
function sectionsFor(href: string): string[] {
  const seg = href.split('/').filter(Boolean)[0] ?? '';
  if (seg === 'facilities') return ['facilities', 'institutions'];
  return seg ? [seg] : [''];
}

export default function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? `/${lang}`;
  const active = firstSegment(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  // Which desktop dropdown is open (by top-level href), if any.
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === '/' ? active === '' : sectionsFor(href).includes(active);

  const navLinkClass = (activeItem: boolean) =>
    [
      'inline-flex items-center gap-1 border-b-2 px-3 py-1.5 text-sm font-semibold transition-colors duration-150',
      activeItem
        ? 'border-nhpc-red text-nhpc-dark'
        : 'border-transparent text-nhpc-grey hover:text-nhpc-dark',
    ].join(' ');

  return (
    <header className="sticky top-0 z-40 border-b border-nhpc-rule bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 lg:h-20 lg:gap-6">
        {/* Wordmark */}
        <Link
          href={localizedHref('/', lang)}
          className="flex min-w-0 flex-1 items-center gap-2.5 lg:flex-none lg:gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/nhpc-stamp.png"
            alt={t(orgName, lang) + ' — official seal'}
            width={40}
            height={40}
            priority
            className="h-10 w-10 flex-none"
          />
          {/* Wordmark — English only. */}
          <span className="block min-w-0 leading-tight">
            <span className="block max-w-[26ch] text-[11px] font-bold uppercase tracking-tight text-nhpc-dark sm:max-w-[24ch] sm:text-sm lg:text-base">
              {orgName.en}
            </span>
          </span>
        </Link>

        {/* Desktop primary nav — top-level items link to their landing page;
            items with children reveal a dropdown on hover and on keyboard
            focus (Esc / focus-out closes). */}
        <nav
          className="hidden flex-1 items-center justify-center lg:flex"
          aria-label={lang === 'so' ? 'Nave weyn' : 'Primary'}
        >
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              const itemActive = isActive(item.href);
              const hasChildren = !!item.children?.length;

              if (!hasChildren) {
                return (
                  <li key={item.href}>
                    <Link
                      href={localizedHref(item.href, lang)}
                      aria-current={itemActive ? 'page' : undefined}
                      className={navLinkClass(itemActive)}
                    >
                      {t(item.label, lang)}
                    </Link>
                  </li>
                );
              }

              const open = openMenu === item.href;
              return (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.href)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setOpenMenu(null);
                  }}
                >
                  <Link
                    href={localizedHref(item.href, lang)}
                    aria-current={itemActive ? 'page' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open}
                    onFocus={() => setOpenMenu(item.href)}
                    className={navLinkClass(itemActive)}
                  >
                    {t(item.label, lang)}
                    <ChevronDown
                      className={[
                        'h-4 w-4 transition-transform duration-150',
                        open ? 'rotate-180' : '',
                      ].join(' ')}
                      aria-hidden="true"
                    />
                  </Link>

                  {open && (
                    <ul className="absolute left-0 top-full z-50 mt-1 min-w-[248px] rounded-lg border border-nhpc-rule bg-white py-2">
                      {item.children!.map((child) => {
                        const cls =
                          'block px-4 py-2 text-sm text-nhpc-grey transition-colors duration-150 hover:bg-nhpc-wash hover:text-nhpc-dark';
                        return (
                          <li key={child.href}>
                            {child.external ? (
                              <a
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cls}
                                onClick={() => setOpenMenu(null)}
                              >
                                {t(child.label, lang)}
                              </a>
                            ) : (
                              <Link
                                href={localizedHref(child.href, lang)}
                                className={cls}
                                onClick={() => setOpenMenu(null)}
                              >
                                {t(child.label, lang)}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right actions */}
        <div className="ml-auto flex flex-none items-center gap-2 lg:ml-0 lg:gap-3">
          <div className="hidden sm:block">
            <LanguageToggle lang={lang} />
          </div>

          {/* Verify — outline blue. Icon-only below sm. Links out to the portal
              verify tool. */}
          <a
            href={headerActions.verify.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md border border-nhpc-blue px-3 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:bg-nhpc-wash"
          >
            <ShieldCheck className="h-4 w-4 flex-none" aria-hidden="true" />
            <span className="hidden sm:inline">{t(headerActions.verify.label, lang)}</span>
            <span className="sr-only sm:hidden">{t(headerActions.verify.label, lang)}</span>
          </a>

          {/* Report Malpractice — outline RED only, never filled. Opens WhatsApp
              to report (a downloadable form to email will follow). */}
          <a
            href={headerActions.reportMalpractice.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md border-2 border-nhpc-red px-3 text-sm font-semibold text-nhpc-dark transition-colors duration-150 hover:bg-nhpc-wash"
          >
            <Flag className="h-4 w-4 flex-none text-nhpc-red" aria-hidden="true" />
            <span className="hidden sm:inline">{t(headerActions.reportMalpractice.label, lang)}</span>
            <span className="sr-only sm:hidden">
              {t(headerActions.reportMalpractice.label, lang)}
            </span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-nhpc-dark lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={
              mobileOpen
                ? lang === 'so'
                  ? 'Xir menu-ka'
                  : 'Close menu'
                : lang === 'so'
                  ? 'Fur menu-ka'
                  : 'Open menu'
            }
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav panel — 5 sections as accordions exposing children */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-nhpc-rule bg-white lg:hidden"
          aria-label={lang === 'so' ? 'Nave weyn' : 'Primary'}
        >
          <ul className="mx-auto max-w-6xl divide-y divide-nhpc-rule px-4 pb-4">
            {primaryNav.map((item) => {
              const hasChildren = !!item.children?.length;
              const expanded = openSection === item.href;
              return (
                <li key={item.href} className="py-1">
                  <div className="flex items-center">
                    <Link
                      href={localizedHref(item.href, lang)}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      onClick={() => setMobileOpen(false)}
                      className={[
                        'flex-1 py-2 text-base font-semibold',
                        isActive(item.href) ? 'text-nhpc-dark' : 'text-nhpc-grey',
                      ].join(' ')}
                    >
                      {t(item.label, lang)}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        className="p-2 text-nhpc-grey"
                        aria-expanded={expanded}
                        aria-label={
                          (expanded
                            ? lang === 'so'
                              ? 'Laab '
                              : 'Collapse '
                            : lang === 'so'
                              ? 'Kala fur '
                              : 'Expand ') + t(item.label, lang)
                        }
                        onClick={() => setOpenSection(expanded ? null : item.href)}
                      >
                        <ChevronDown
                          className={[
                            'h-5 w-5 transition-transform duration-150',
                            expanded ? 'rotate-180' : '',
                          ].join(' ')}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>
                  {hasChildren && expanded && (
                    <ul className="pb-2 pl-3">
                      {item.children!.map((child) => {
                        const cls =
                          'block border-l-2 border-nhpc-rule py-2 pl-3 text-sm text-nhpc-grey transition-colors duration-150 hover:border-nhpc-blue hover:text-nhpc-dark';
                        return (
                          <li key={child.href}>
                            {child.external ? (
                              <a
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileOpen(false)}
                                className={cls}
                              >
                                {t(child.label, lang)}
                              </a>
                            ) : (
                              <Link
                                href={localizedHref(child.href, lang)}
                                onClick={() => setMobileOpen(false)}
                                className={cls}
                              >
                                {t(child.label, lang)}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
            <li className="py-3">
              <LanguageToggle lang={lang} />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

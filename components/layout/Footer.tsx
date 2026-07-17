import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import type { Lang } from '@/content/types';
import { t, localizedHref } from '@/lib/i18n';
import {
  orgName,
  tagline,
  contact,
  fraudWarning,
  footerQuickLinks,
} from '@/content/site';

export default function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-nhpc-dark text-white">
      {/* Fraud warning — always in BOTH languages, red left-border */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="border-l-4 border-nhpc-red bg-white/5 px-4 py-3">
            <p className="text-sm font-semibold text-white">{fraudWarning.en}</p>
            <p className="text-sm text-white/80" lang="so">
              {fraudWarning.so}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-3">
        {/* Identity */}
        <div>
          <div className="flex items-center gap-3">
            {/* Seal sits on a WHITE circular plate — never directly on dark */}
            <span className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-white">
              <Image
                src="/nhpc-stamp.png"
                alt={t(orgName, lang) + ' — official seal'}
                width={56}
                height={56}
                className="h-14 w-14"
              />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold uppercase tracking-tight">
                {orgName.en}
              </span>
              <span className="block text-xs text-white/70">{orgName.so}</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-white/80">{t(tagline, lang)}</p>
          <p className="mt-3 text-xs text-white/60">
            {lang === 'so'
              ? 'Aasaasay Sharciga Lr.31, Jamhuuriyadda Federaalka Soomaaliya.'
              : 'Established under Act Lr.31, Federal Republic of Somalia.'}
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label={lang === 'so' ? 'Xiriirinta degdegga ah' : 'Quick links'}>
          <h2 className="text-xs font-bold uppercase tracking-wide text-white/60">
            {lang === 'so' ? 'Xiriirinta Degdegga' : 'Quick Links'}
          </h2>
          <ul className="mt-4 space-y-2">
            {footerQuickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={localizedHref(item.href, lang)}
                  className="text-sm text-white/85 transition-colors duration-150 hover:text-white hover:underline"
                >
                  {t(item.label, lang)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wide text-white/60">
            {lang === 'so' ? 'Xiriir' : 'Contact'}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 flex-none text-nhpc-tint" aria-hidden="true" />
              <span>{t(contact.hours, lang)}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 flex-none text-nhpc-tint" aria-hidden="true" />
              <span>
                {lang === 'so' ? 'Khadka cabashooyinka 24/7: ' : 'Complaints line 24/7: '}
                <a href={`tel:${contact.complaintsLine}`} className="font-semibold hover:underline">
                  {contact.complaintsLine}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 flex-none text-nhpc-tint" aria-hidden="true" />
              <span>
                WhatsApp:{' '}
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  {contact.whatsapp}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 flex-none text-nhpc-tint" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="font-semibold hover:underline">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-nhpc-tint" aria-hidden="true" />
              <span>{t(contact.headquarters, lang)}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-white/60">
          © {year} {orgName.en} ({contact.domain}).{' '}
          {lang === 'so' ? 'Dhammaan xuquuqdu way dhowran tahay.' : 'All rights reserved.'}
        </div>
      </div>
    </footer>
  );
}

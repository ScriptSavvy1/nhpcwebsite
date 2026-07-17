import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { isLang, t, localizedHref } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { staffRoles, secretariatDuties, specialCommittees } from '@/content/secretariat';
import PageHeader from '@/components/ui/PageHeader';
import ActFooter from '@/components/ui/ActFooter';
import SectionBand from '@/components/ui/SectionBand';
import EmptyState from '@/components/ui/EmptyState';

// Same split as /about/council: the STRUCTURE is law (Arts. 13, 14, 17) and
// ships today; the names are appointments and ship when published. The Act
// lists posts, not people.
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: lang === 'so' ? 'Xoghaynta iyo Guddiyada' : 'Secretariat & Committees',
    description:
      lang === 'so'
        ? 'Xoghaynta Guud ee maalin-kasta u shaqeysa Golaha, iyo saddexda guddi ee gaarka ah ee Qodobka 17aad.'
        : 'The General Secretariat that runs the Council day to day, and the three special committees under Article 17.',
  };
}

export default function SecretariatPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const so = lang === 'so';

  return (
    <>
      <PageHeader
        kicker="NHPC Act Lr.31 · Articles 13, 14 and 17"
        title={so ? 'Xoghaynta iyo Guddiyada' : 'Secretariat & Committees'}
        intro={
          so
            ? 'Goluhu wuxuu go’aannada gaadhaa. Xoghayntu waa cutubka maalin-kasta shaqeeya ee go’aannadaas fuliya, saddex guddi oo gaarka ahna waxay qabtaan shaqada takhasuska leh.'
            : 'The Council takes the decisions. The Secretariat is the day-to-day arm that carries them out, and three special committees do the specialist work.'
        }
      />

      <div className="mx-auto max-w-4xl px-4">
        {/* Art 13 — the posts. */}
        <section className="pt-10" aria-labelledby="staff-heading">
          <SectionBand id="staff-heading">
            {so ? 'Qaab-dhismeedka Xoghaynta' : 'How the Secretariat is structured'}
          </SectionBand>
          <p className="mt-4 leading-relaxed text-nhpc-grey">
            {so
              ? 'Qodobka 13aad wuxuu qeexayaa jagooyinka shaqaalaha maamulka ee NHPC.'
              : 'Article 13 sets out the administrative posts of the NHPC.'}
          </p>
          <ul className="mt-5 divide-y divide-nhpc-rule border-y border-nhpc-rule">
            {staffRoles.map((role) => (
              <li key={role.en} className="py-3 leading-relaxed text-slate-800">
                {t(role, lang)}
              </li>
            ))}
          </ul>
        </section>

        {/* Art 14 — what it does, and the limit on its power. */}
        <section className="pt-10" aria-labelledby="duties-heading">
          <SectionBand id="duties-heading">
            {so ? 'Awoodaha iyo waajibaadka Xoghaynta' : 'Powers and duties of the Secretariat'}
          </SectionBand>
          <ul className="mt-5 space-y-2.5">
            {secretariatDuties.map((duty) => (
              <li key={duty.en} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-nhpc-blue"
                  aria-hidden="true"
                />
                <span className="leading-relaxed text-slate-800">{t(duty, lang)}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Art 17 — exactly three. */}
        <section className="pt-10" aria-labelledby="committees-heading">
          <SectionBand id="committees-heading">
            {so ? 'Saddexda guddi ee gaarka ah' : 'The three special committees'}
          </SectionBand>
          <p className="mt-4 leading-relaxed text-nhpc-grey">
            {so
              ? 'Qodobka 17aad wuxuu dhigayaa in Goluhu aasaaso saddex guddi oo gaar ah, oo xubnahoodu lagu doorto aqoontooda, xirfadahooda iyo waaya-aragnimadooda ballaadhan. Guddi kastaa wuxuu doortaa guddoomiyihiisa, wuxuuna soo gudbiyaa talooyinkiisa Golaha.'
              : 'Article 17 requires the Council to establish three special committees, whose members are selected for their knowledge, skills and wide-ranging experience. Each committee elects its own chairperson and reports its conclusions and recommendations to the Council.'}
          </p>
          <ul className="mt-5 space-y-3">
            {specialCommittees.map((c) => {
              const inner = (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wide text-nhpc-blue">
                    {t(c.ref, lang)}
                  </p>
                  <p className="mt-1 font-semibold text-nhpc-dark">{t(c.name, lang)}</p>
                  <p className="mt-1 leading-relaxed text-slate-800">{t(c.remit, lang)}</p>
                </>
              );

              if (!c.href) {
                return (
                  <li
                    key={c.ref.en}
                    className="rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue p-4"
                  >
                    {inner}
                  </li>
                );
              }

              return (
                <li key={c.ref.en}>
                  <Link
                    href={localizedHref(c.href, lang)}
                    className="group flex items-start justify-between gap-3 rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue p-4 transition-colors duration-150 hover:border-nhpc-blue"
                  >
                    <span>{inner}</span>
                    <ArrowRight
                      className="mt-1 h-4 w-4 flex-none text-nhpc-grey transition-colors duration-150 group-hover:text-nhpc-blue"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Who holds the posts — not published. */}
        <section className="pt-10" aria-labelledby="who-heading">
          <SectionBand id="who-heading">
            {so ? 'Cidda jagooyinka haysata' : 'Who holds these posts'}
          </SectionBand>
          <div className="mt-5">
            <EmptyState
              lang={lang}
              heading={{
                en: 'Secretariat and committee appointments have not been published yet.',
                so: 'Magacaabista Xoghaynta iyo guddiyada weli lama daabicin.',
              }}
              body={{
                en: 'The Act fixes the posts and the committees; the Council has not published who fills them. Names will be listed here once it does. For anything you need now, use the contact details on this website.',
                so: 'Sharcigu wuxuu go’aamiyay jagooyinka iyo guddiyada; Goluhu ma daabicin cidda buuxisa. Magacyada halkan ayaa lagu taxi doonaa marka la daabaco. Waxa aad hadda u baahan tahay, isticmaal xogta xiriirka ee websaydkan.',
              }}
            />
          </div>
          <Link
            href={localizedHref('/contact', lang)}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-nhpc-blue transition-colors duration-150 hover:text-nhpc-dark"
          >
            {so ? 'La xiriir NHPC' : 'Contact NHPC'}
            <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
          </Link>
        </section>

        <ActFooter
          articles={{ en: 'Articles 13, 14 and 17', so: 'Qodobbada 13, 14 iyo 17' }}
          lang={lang}
        />
      </div>
    </>
  );
}

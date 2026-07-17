import type { Metadata } from 'next';
import { isLang, t } from '@/lib/i18n';
import type { Lang } from '@/content/types';
import { councilSeats, councilMembers, totalSeats } from '@/content/council';
import PageHeader from '@/components/ui/PageHeader';
import ActFooter from '@/components/ui/ActFooter';
import SectionBand from '@/components/ui/SectionBand';
import EmptyState from '@/components/ui/EmptyState';

// The composition is LAW (Art. 3) and ships today. The names are appointments
// and ship when the Council publishes them. Keeping the two apart is what
// lets a visitor see how the regulator is constituted before anyone is named.
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  return {
    title: lang === 'so' ? 'Golaha' : 'The Council',
    description:
      lang === 'so'
        ? `Sida Golaha loo dhisay: ${totalSeats} kursi oo uu Qodobka 3aad qeexayo.`
        : `How the Council is constituted: the ${totalSeats} seats fixed by Article 3.`,
  };
}

export default function CouncilPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isLang(params.lang) ? params.lang : 'en';
  const so = lang === 'so';

  const rules = [
    {
      ref: { en: 'Article 3(1)', so: 'Qodobka 3aad (1)' },
      text: {
        en: 'At least 30% of Council members must be female.',
        so: 'Ugu yaraan 30% xubnaha Golaha waa inay haween ahaadaan.',
      },
    },
    {
      ref: { en: 'Article 3(2)', so: 'Qodobka 3aad (2)' },
      text: {
        en: 'The chairperson and the deputy are elected by the Council members themselves.',
        so: 'Guddoomiyaha iyo ku-xigeenka waxaa doorta xubnaha Golaha laftooda.',
      },
    },
    {
      ref: { en: 'Article 3(3)', so: 'Qodobka 3aad (3)' },
      text: {
        en: 'A vacancy must be filled within four weeks; the replacement serves out the remainder of the term.',
        so: 'Kursi banaan waa in la buuxiyaa afar toddobaad gudahood; badalkuna wuxuu dhammaystiraa inta ka hadhay muddada.',
      },
    },
    {
      ref: { en: 'Article 3(8)', so: 'Qodobka 3aad (8)' },
      text: {
        en: 'Members serve a three-year term, and may be reappointed for one further term only.',
        so: 'Xubnuhu waxay adeegaan muddo saddex sano ah, waxaana dib loo magacaabi karaa hal muddo oo kale oo keliya.',
      },
    },
  ];

  return (
    <>
      <PageHeader
        kicker="NHPC Act Lr.31 · Article 3"
        title={so ? 'Golaha' : 'The Council'}
        intro={
          so
            ? `Golaha waxaa ka kooban ${totalSeats} kursi. Sharcigu ma sheegayo magacyo — wuxuu sheegayaa cidda matalaad leh iyo inta kursi ee mid kastaa leeyahay. Qaab-dhismeedkaas ayaa halkan ku qoran.`
            : `The Council has ${totalSeats} seats. The Act does not name individuals — it fixes who is represented and how many seats each constituency holds. That structure is set out below.`
        }
      />

      <div className="mx-auto max-w-4xl px-4">
        {/* Composition — real law, publishable today. */}
        <section className="pt-10" aria-labelledby="composition-heading">
          <SectionBand id="composition-heading">
            {so ? 'Sida Golaha loo dhisay' : 'How the Council is constituted'}
          </SectionBand>

          <table className="mt-5 hidden w-full border-collapse text-sm sm:table">
            <caption className="sr-only">
              {so
                ? `Qaybinta kuraasta Golaha sida uu dhigayo Qodobka 3aad — wadar ${totalSeats} kursi.`
                : `Allocation of Council seats under Article 3 — ${totalSeats} seats in total.`}
            </caption>
            <thead>
              <tr className="border-b border-nhpc-rule text-left">
                <th scope="col" className="py-2 pr-4 font-semibold text-nhpc-dark">
                  {so ? 'Matalaadda' : 'Constituency'}
                </th>
                <th scope="col" className="py-2 text-right font-semibold text-nhpc-dark">
                  {so ? 'Kuraasta' : 'Seats'}
                </th>
              </tr>
            </thead>
            <tbody>
              {councilSeats.map((s) => (
                <tr key={s.constituency.en} className="border-b border-nhpc-rule">
                  <td className="py-3 pr-4 text-slate-800">{t(s.constituency, lang)}</td>
                  <td className="py-3 text-right font-semibold text-nhpc-dark">{s.seats}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-b-2 border-nhpc-blue">
                <th scope="row" className="py-3 pr-4 text-left font-semibold text-nhpc-dark">
                  {so ? 'Wadarta' : 'Total'}
                </th>
                <td className="py-3 text-right font-bold text-nhpc-dark">{totalSeats}</td>
              </tr>
            </tfoot>
          </table>

          {/* Mobile: the seat count is the payload, so lead with it. */}
          <ul className="mt-5 divide-y divide-nhpc-rule border-y border-nhpc-rule sm:hidden">
            {councilSeats.map((s) => (
              <li key={s.constituency.en} className="flex items-start justify-between gap-4 py-3">
                <span className="text-sm leading-relaxed text-slate-800">
                  {t(s.constituency, lang)}
                </span>
                <span className="flex-none text-sm font-semibold text-nhpc-dark">{s.seats}</span>
              </li>
            ))}
            <li className="flex items-start justify-between gap-4 border-t-2 border-nhpc-blue py-3">
              <span className="text-sm font-semibold text-nhpc-dark">
                {so ? 'Wadarta' : 'Total'}
              </span>
              <span className="flex-none text-sm font-bold text-nhpc-dark">{totalSeats}</span>
            </li>
          </ul>
        </section>

        {/* Composition rules — also real law. */}
        <section className="pt-10" aria-labelledby="rules-heading">
          <SectionBand id="rules-heading">
            {so ? 'Shuruudaha xubinnimada' : 'Membership rules'}
          </SectionBand>
          <dl className="mt-5 border-l-[3px] border-nhpc-blue bg-nhpc-wash p-4">
            {rules.map((r, i) => (
              <div key={r.ref.en} className={i > 0 ? 'mt-3' : undefined}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-nhpc-blue">
                  {t(r.ref, lang)}
                </dt>
                <dd className="mt-0.5 leading-relaxed text-slate-800">{t(r.text, lang)}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Members — names are appointments, not law. Empty until published. */}
        <section className="pt-10" aria-labelledby="members-heading">
          <SectionBand id="members-heading">
            {so ? 'Xubnaha hadda jira' : 'Current members'}
          </SectionBand>

          {councilMembers.length === 0 ? (
            <div className="mt-5">
              <EmptyState
                lang={lang}
                heading={{
                  en: 'Council appointments have not been published yet.',
                  so: 'Magacaabista xubnaha Golaha weli lama daabicin.',
                }}
                body={{
                  en: 'The seats above are fixed by the Act. The members appointed to them will be listed here once the Council publishes them, and announced in News & Notices.',
                  so: 'Kuraasta kore waxaa go’aamiyay Sharcigu. Xubnaha loo magacaabo halkan ayaa lagu taxi doonaa marka Goluhu daabaco, waxaana lagu dhawaaqi doonaa Wararka & Ogeysiisyada.',
                }}
              />
            </div>
          ) : (
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {councilMembers.map((m) => (
                <li
                  key={m.name.en}
                  className="rounded-lg border border-l-[3px] border-nhpc-rule border-l-nhpc-blue p-4"
                >
                  <p className="font-semibold text-nhpc-dark">{t(m.name, lang)}</p>
                  {m.role && (
                    <p className="mt-0.5 text-sm font-semibold text-nhpc-blue">{t(m.role, lang)}</p>
                  )}
                  <p className="mt-1 text-sm leading-relaxed text-nhpc-grey">
                    {t(m.constituency, lang)}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <ActFooter
          articles={{ en: 'Article 3', so: 'Qodobka 3aad' }}
          lang={lang}
        />
      </div>
    </>
  );
}

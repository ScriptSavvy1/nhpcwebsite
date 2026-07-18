import type { Notice } from './types';

// Newest first. Add a Notice here and it appears on the homepage board, the
// /news index, and its own /news/[slug] page. Do NOT invent notices.
export const notices: Notice[] = [
  {
    slug: 'somalia-joins-iamra',
    type: 'press',
    // Publish date. Adjust to the official announcement date.
    date: '2026-07-18',
    title: {
      en: 'Somalia Joins the International Association of Medical Regulatory Authorities (IAMRA)',
      so: 'Soomaaliya oo ku Biirtay Ururka Caalamiga ah ee Kormeerka Caafimaadka Adduunka (IAMRA)',
    },
    summary: {
      en: 'Somalia becomes the 46th country in the global network of health regulators; NHPC becomes IAMRA’s 123rd member.',
      so: 'Soomaaliya waxay noqotay dalka 46-aad ee ku biira shabakadda caalamiga ah ee kormeerayaasha caafimaadka; NHPC-na waxay noqotay xubinta 123-aad ee IAMRA.',
    },
    body: [
      {
        en: 'The National Health Professionals Council (NHPC) of Somalia has become a full member of the International Association of Medical Regulatory Authorities (IAMRA), following the Association Secretariat’s assessment of Somalia’s membership application and its ratification by the General Council at IAMRA’s 16th International Conference, held in Dublin, Ireland.',
        so: 'Golaha Mihnadlayaasha Caafimaadka Qaranka ee Soomaaliya (NHPC) ayaa xubin rasmi ah ka noqday Ururka Caalamiga ah ee Kormeerka Caafimaadka Adduunka (IAMRA), kadib markii xoghaynta Ururku qiimeyn ku sameysay codsigii xubinnimo ee Soomaaliya, ayna Golaha Sare ku ansixiyeen Shirweynaha 16-aad ee Ururka oo ka dhacay magaalada Dublin ee dalka Ireland.',
      },
      {
        en: 'With this step, Somalia becomes the 46th country to join the global association, and the NHPC becomes IAMRA’s 123rd member authority.',
        so: 'Talaabadan, Soomaaliya waxay noqotay dalkii 46-aad ee ku biira ururkan caalamiga ah, halka Golaha Mihnadlayaasha Caafimaadka Qarankuna uu noqday xubinta 123-aad ee IAMRA.',
      },
      {
        en: 'Membership of IAMRA is a historic milestone that reflects Somalia’s commitment to implementing the international policies and systems used to safeguard the quality, integrity, and trustworthiness of health services, and the safety of communities worldwide. It gives Somalia a seat at the table — and a voice — in the global forums where the future of health regulation is decided.',
        so: 'Xubinnimada Ururkan waa talaabo taariikhi ah oo muujinaysa sida ay Soomaaliya uga go’an tahay dhaqangelinta siyaasadaha iyo nidaamyada caalamiga ah ee lagu xaqiijinayo tayada, hufnaanta, iyo kalsoonida adeegyada caafimaadka iyo bedqabka bulshooyinka dunida. Waxay Soomaaliya fursad u siinaysaa in ay codkeeda ku biiriso fagaaraha caalamiga ah ee looga arrinsanayo mustaqbalka kormeerka caafimaadka.',
      },
      {
        en: 'IAMRA brings together medical and health regulatory authorities from across the world to share standards, strengthen professional oversight, and protect the public from unsafe practice. For the NHPC, membership opens channels for technical cooperation, shared standards, and the exchange of knowledge with established regulators — support that strengthens the Council’s core mandate under Act Lr.31: registering and licensing health professionals, accrediting facilities and training institutions, and protecting the Somali public from malpractice.',
        so: 'IAMRA waxay isu keentaa hay’adaha kormeerka caafimaadka ee adduunka oo dhan si ay u wadaagaan heerarka, u xoojiyaan kormeerka xirfadeed, uguna difaacaan dadweynaha dhaqan caafimaad oo aan badqab lahayn. NHPC-da, xubinnimadu waxay furaysaa fursado iskaashi farsamo, heerar la wadaago, iyo is-weydaarsi aqooneed oo lala yeesho kormeerayaasha caalamka ee horumaray — taageero xoojinaysa hawsha aasaasiga ah ee Golaha sida uu dhigayo Sharciga Lr.31: diiwaangelinta iyo shatiyeynta mihnadlayaasha caafimaadka, aqoonsiga xarumaha iyo machadyada tababarka, iyo difaaca dadweynaha Soomaaliyeed ee dhibaatooyinka caafimaad.',
      },
      {
        en: 'The NHPC extends its gratitude to the Federal Government of Somalia, the Ministry of Health, and all partners whose support made this membership possible.',
        so: 'NHPC waxay u mahadnaqaysaa Dowladda Federaalka Soomaaliya, Wasaaradda Caafimaadka, iyo dhammaan la-hawlgalayaasha taageeradooda ay xubinnimadan suurtagal noqotay.',
      },
    ],
  },
];

/** Newest first, limited to `count`. */
export function latestNotices(count: number): Notice[] {
  return [...notices]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, count);
}

export function noticeBySlug(slug: string): Notice | undefined {
  return notices.find((n) => n.slug === slug);
}

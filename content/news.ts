import type { Notice } from './types';

// Newest first (sorted by date). Add a Notice here and it appears on the
// homepage board, the /news index, and its own /news/[slug] page.
//
// NOTE: the Somali on the conference / DataFlow / WHO items is a WORKING
// TRANSLATION (the source was supplied in English only) — replace with the
// Council's official Somali when available. The membership item's Somali is
// the official text supplied by NHPC.
export const notices: Notice[] = [
  {
    slug: 'nhpc-who-somalia-cooperation',
    type: 'press',
    // PLACEHOLDER date — no date was supplied for this item. Set the real one.
    date: '2026-07-18',
    title: {
      en: 'NHPC and WHO Somalia Discuss Strengthening Health Regulation Cooperation',
      so: 'NHPC iyo WHO Soomaaliya oo ka Wada-hadlay Xoojinta Iskaashiga Kormeerka Caafimaadka',
    },
    summary: {
      en: 'Talks focus on joint work to regulate the country’s health sector, build Council capacity, and improve the quality of health services in Somalia.',
      so: 'Wada-hadalladu waxay diirradda saareen wada-shaqeyn lagu kormeerayo qaybta caafimaadka dalka, lagu dhisayo kartida Golaha, laguna hagaajinayo tayada adeegyada caafimaadka Soomaaliya.',
    },
    body: [
      {
        en: 'A delegation from the National Health Professionals Council (NHPC), led by the Secretary General, Dr. Mohamed Adow, held a working meeting with the leadership of the World Health Organization (WHO) office in Somalia, headed by the Deputy WHO Representative and Acting Representative, Dr. Mohamed Kamil.',
        so: 'Wafdi ka socda Golaha Mihnadlayaasha Caafimaadka Qaranka (NHPC), oo uu hoggaaminayo Xoghayaha Guud, Dr. Mohamed Adow, ayaa kulan shaqo la yeeshay hoggaanka xafiiska Ururka Caafimaadka Adduunka (WHO) ee Soomaaliya, oo uu hoggaaminayo Ku-xigeenka Wakiilka WHO iyo Wakiilka ku-simaha, Dr. Mohamed Kamil.',
      },
      {
        en: 'The meeting focused on strengthening cooperation between the NHPC and WHO — working together to regulate the country’s health sector, build the capacity of the Council’s workforce, and improve the quality of health services in Somalia.',
        so: 'Kulanku wuxuu diirradda saaray xoojinta iskaashiga u dhexeeya NHPC iyo WHO — iyagoo wada-shaqeynaya si loo kormeero qaybta caafimaadka dalka, loo dhiso kartida shaqaalaha Golaha, loona hagaajiyo tayada adeegyada caafimaadka Soomaaliya.',
      },
      {
        en: 'Cooperation with the World Health Organization supports the NHPC’s core mandate under Act Lr.31: to register and license health professionals, accredit facilities and training institutions, and safeguard the Somali public through strong, well-resourced regulation.',
        so: 'Iskaashiga Ururka Caafimaadka Adduunku wuxuu taageeraa hawsha aasaasiga ah ee NHPC ee uu dhigayo Sharciga Lr.31: in la diiwaangeliyo lana shatiyeeyo mihnadlayaasha caafimaadka, la aqoonsado xarumaha iyo machadyada tababarka, oo dadweynaha Soomaaliyeed lagu ilaaliyo kormeer xoog leh oo hantidhawr wanaagsan leh.',
      },
    ],
  },
  {
    slug: 'nhpc-dataflow-credential-verification',
    type: 'press',
    date: '2025-09-07',
    title: {
      en: 'NHPC Meets DataFlow Group in Dublin to Advance Credential Verification',
      so: 'NHPC oo Dublin kula Kulantay DataFlow Group si Loo Horumariyo Xaqiijinta Shahaadooyinka',
    },
    summary: {
      en: 'Talks focus on verifying the qualifications of Somali health professionals abroad and screening foreign practitioners entering Somalia.',
      so: 'Wada-hadalladu waxay diirradda saareen xaqiijinta shahaadooyinka mihnadlayaasha caafimaadka Soomaaliyeed ee dibadda, iyo baaritaanka mihnadlayaasha ajnabiga ah ee Soomaaliya soo gala.',
    },
    body: [
      {
        en: 'The Secretary General of the National Health Professionals Council (NHPC), Mr. Mohamed Adow, held a working meeting in Dublin, Ireland, with the leadership of DataFlow Group — an international company specialising in the verification of professional credentials and qualifications for practitioners working across the world.',
        so: 'Xoghayaha Guud ee Golaha Mihnadlayaasha Caafimaadka Qaranka (NHPC), Mudane Mohamed Adow, ayaa Dublin ee dalka Ireland kulan shaqo la yeeshay hoggaanka DataFlow Group — shirkad caalami ah oo ku takhasustay xaqiijinta shahaadooyinka iyo aqoonta mihnadlayaasha ka shaqeeya adduunka oo dhan.',
      },
      {
        en: 'The meeting focused on how the NHPC and DataFlow Group could work together in two directions. First, to make it easier for Somali health professionals seeking work or further education abroad to have their qualifications recognised internationally. Second, to verify the credentials of foreign practitioners coming to work in Somalia’s health sector — a safeguard against forged certificates that protects the quality of the country’s health system and the safety of the Somali public.',
        so: 'Kulanku wuxuu diirradda saaray sida NHPC iyo DataFlow Group ay laba dhinac uga wada-shaqeyn karaan. Marka hore, in la fududeeyo in mihnadlayaasha caafimaadka Soomaaliyeed ee raadinaya shaqo ama waxbarasho dheeraad ah oo dibadda ah lagu aqoonsado shahaadooyinkooda heer caalami ah. Marka labaad, in la xaqiijiyo shahaadooyinka mihnadlayaasha ajnabiga ah ee u imanaya inay ka shaqeeyaan qaybta caafimaadka Soomaaliya — taasoo ka ilaalinaysa shahaadooyinka been-abuurka ah, difaacaysana tayada nidaamka caafimaadka dalka iyo badqabka dadweynaha Soomaaliyeed.',
      },
      {
        en: 'Primary source verification of this kind is a cornerstone of modern health regulation. It confirms that a qualification was genuinely issued by the institution named on it, closing the door to fraudulent certificates and giving employers, institutions, and patients confidence that a practitioner is who they claim to be. For the NHPC, a partnership of this kind strengthens its mandate under Act Lr.31 to register only those professionals who hold recognised, authenticated qualifications — including the requirement under Article 60 that foreign qualifications be properly authenticated before recognition.',
        so: 'Xaqiijinta isha aasaasiga ah ee noocan oo kale ah waa tiir muhiim ah oo ka mid ah kormeerka caafimaadka casriga ah. Waxay xaqiijisaa in shahaadada dhab ahaantii ay soo saartay machadka lagu magacaabay, iyadoo albaabka u xiraysa shahaadooyinka khiyaamada ah, siinaysana shaqo-bixiyeyaasha, machadyada, iyo bukaannada kalsooni ah in mihnadluhu yahay qofka uu sheegayo. NHPC, iskaashi noocan ah wuxuu xoojiyaa hawshiisa uu dhigayo Sharciga Lr.31 ee ah in la diiwaangeliyo oo keliya mihnadlayaasha haysta shahaadooyin la aqoonsan yahay oo la xaqiijiyay — oo ay ku jirto shuruudda Qodobka 60 ee ah in shahaadooyinka dibadda si sax ah loo xaqiijiyo ka hor inta aan la aqoonsan.',
      },
      {
        en: 'The discussions in Dublin mark an early step toward that cooperation. Further details will be published as the partnership develops.',
        so: 'Wada-hadalladii Dublin waxay calaamad u yihiin tallaabo hore oo iskaashigaas ah. Faahfaahin dheeraad ah ayaa la daabici doonaa marka iskaashigu horumaro.',
      },
    ],
  },
  {
    slug: 'somalia-joins-iamra',
    type: 'press',
    date: '2025-09-06',
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
  {
    slug: 'nhpc-iamra-conference-dublin',
    type: 'press',
    date: '2025-09-05',
    title: {
      en: 'NHPC Takes Part in the 16th IAMRA International Conference in Dublin',
      so: 'NHPC oo ka Qayb-gashay Shirweynihii 16-aad ee Caalamiga ah ee IAMRA oo ka Dhacay Dublin',
    },
    summary: {
      en: 'Somalia joins global regulators to exchange experience in health workforce oversight and strengthening public trust in health services.',
      so: 'Soomaaliya waxay la kulantay kormeerayaasha caalamiga ah si ay u wadaagaan waaya-aragnimada kormeerka shaqaalaha caafimaadka iyo xoojinta kalsoonida dadweynaha ee adeegyada caafimaadka.',
    },
    body: [
      {
        en: 'The Secretary General of the National Health Professionals Council (NHPC), Mr. Mohamed Adow, took part in the 16th International Conference of the International Association of Medical Regulatory Authorities (IAMRA), held in Dublin, the capital of Ireland.',
        so: 'Xoghayaha Guud ee Golaha Mihnadlayaasha Caafimaadka Qaranka (NHPC), Mudane Mohamed Adow, ayaa ka qayb-galay Shirweynihii 16-aad ee Caalamiga ah ee Ururka Caalamiga ah ee Kormeerka Caafimaadka Adduunka (IAMRA), oo ka dhacay Dublin, caasimadda dalka Ireland.',
      },
      {
        en: 'Hosted by the Medical Council of Ireland, the conference focused on the international exchange of experience in regulating health professionals, improving the quality of health systems, and strengthening public confidence in health services.',
        so: 'Shirweynaha, oo martigeliyay Golaha Caafimaadka Ireland (Medical Council of Ireland), wuxuu diirradda saaray is-weydaarsiga caalamiga ah ee waaya-aragnimada kormeerka mihnadlayaasha caafimaadka, hagaajinta tayada nidaamyada caafimaadka, iyo xoojinta kalsoonida dadweynaha ee adeegyada caafimaadka.',
      },
      {
        en: 'Participation in this conference is an opportunity for Somalia to take part in the global efforts and discussions aimed at improving the world’s health systems, and to learn from the experience of more established countries. It contributes to strengthening health care at home and to building a high-quality national health system aligned with international standards.',
        so: 'Ka-qaybgalka shirkan waa fursad ay Soomaaliya ku qayb-qaadato dadaallada iyo wada-hadallada caalamiga ah ee lagu doonayo in lagu hagaajiyo nidaamyada caafimaadka adduunka, iyo in laga barto waaya-aragnimada dalalka horumaray. Wuxuu gacan ka geystaa xoojinta daryeelka caafimaadka gudaha iyo dhisidda nidaam caafimaad qaran oo tayo sare leh oo waafaqsan heerarka caalamiga ah.',
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

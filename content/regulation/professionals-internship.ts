import type { RegulationContent } from '@/content/types';

// Internship Programme — Articles 28–29. The flow from provisional to
// permanent registration (an application-shaped path that ends at
// permanent registration). Ongoing internship conditions are obligations.
export const professionalsInternship: RegulationContent = {
  slug: 'professionals/internship',
  title: {
    en: 'Internship Programme',
    so: 'Barnaamijka Tababarka (Internship)',
  },
  intro: {
    en: 'Provisionally registered graduates complete a 24-month full-time internship before permanent registration. Articles 28–29 of the NHPC Act Lr.31.',
    so: 'Kuwa diiwaangelinta ku-meel-gaadhka ah ee qalin-jabiyay waxay dhammaystiraan tababar 24 bilood ah oo waqti-buuxa ah ka hor diiwaangelinta joogtada ah. Qodobbada 28–29 ee Sharciga Lr.31.',
  },
  docRef: 'NHPC Act Lr.31 · Articles 28–29',

  whoApplies: [
    {
      en: 'Graduates holding a qualification from a Council-recognised institution who are provisionally registered and completing supervised practice (Art. 28(1)).',
      so: 'Kuwa qalin-jabiyay ee haysta shahaado ka timid machad uu Goluhu aqoonsan yahay, oo si ku-meel-gaadh ah loo diiwaangeliyay oo dhammaystiraya shaqo kormeer lagu hayo (Qodobka 28(1)).',
    },
    {
      en: 'Health professionals progressing from provisional to permanent registration.',
      so: 'Mihnadlayaasha caafimaadka ee ka gudbaya diiwaangelinta ku-meel-gaadhka ah una gudbaya tan joogtada ah.',
    },
  ],

  requirements: [
    {
      title: {
        so: 'Shahaadada diiwaangelinta ku-meel-gaadhka ah oo uu bixiyay Goluhu',
        en: 'Provisional certificate of registration issued by the Council',
      },
    },
    {
      title: {
        so: 'Meel-gelin xarun caafimaad ama machad uu Goluhu ansixiyay',
        en: 'A placement at a health facility or institution approved by the Council',
      },
    },
    {
      title: {
        so: 'Nidaam kormeer oo daboolaya muddada tababarka',
        en: 'A supervision arrangement covering the internship period',
      },
    },
  ],

  process: [
    {
      title: { en: 'Obtain provisional registration', so: 'Hel diiwaangelin ku-meel-gaadh ah' },
      detail: {
        en: 'A graduate of a recognised institution is issued a provisional certificate of registration (Art. 28(1),(2)).',
        so: 'Qofka ka qalin-jabiyay machad la aqoonsan yahay waxaa loo bixiyaa shahaado diiwaangelin ku-meel-gaadh ah (Qodobka 28(1),(2)).',
      },
    },
    {
      title: { en: 'Serve a 24-month full-time internship', so: 'Qabo tababar 24 bilood ah oo waqti-buuxa' },
      detail: {
        en: 'Complete supervised practice at a Council-approved facility for the designated period (Art. 29(3), 28(4),(5)).',
        so: 'Ku dhammee shaqo kormeer lagu hayo xarun uu Goluhu ansixiyay muddada la qeexay (Qodobka 29(3), 28(4),(5)).',
      },
    },
    {
      title: { en: 'Sit the prescribed assessment', so: 'Gal qiimaynta la go’aamiyay' },
      detail: {
        en: 'Pass the examination assessing your ability to practise competently and safely (Art. 29(2)).',
        so: 'Ka gudub imtixaanka qiimeeya awooddaada aad ku shaqeyn karto si karti iyo badqab leh (Qodobka 29(2)).',
      },
    },
    {
      title: { en: 'Apply for permanent registration', so: 'Codso diiwaangelinta joogtada ah' },
      detail: {
        en: 'On completion and assessment, apply for permanent (general) registration (Art. 29).',
        so: 'Marka aad dhammaysato oo la ku qiimeeyo, codso diiwaangelinta joogtada ah (guud) (Qodobka 29).',
      },
    },
  ],

  obligations: [
    {
      title: {
        en: 'Practise only at a Council-approved facility',
        so: 'Ka shaqee oo keliya xarun uu Goluhu ansixiyay',
      },
      detail: {
        en: 'A provisional registrant may practise only in a health facility or institution approved by the Council (Art. 28(5)).',
        so: 'Qofka diiwaangelinta ku-meel-gaadhka ah wuxuu ka shaqeyn karaa oo keliya xarun ama machad uu Goluhu ansixiyay (Qodobka 28(5)).',
      },
    },
    {
      title: {
        en: 'Work under supervision for the designated period',
        so: 'Ka shaqee kormeer hoostiisa muddada la qeexay',
      },
      detail: {
        en: 'Provisional practice is temporary and supervised (Art. 28(1),(4)).',
        so: 'Shaqada ku-meel-gaadhka ah waa ku-meel-gaadh oo kormeer lagu hayo (Qodobka 28(1),(4)).',
      },
    },
    {
      title: {
        en: 'Complete within the provisional period',
        so: 'Ku dhammee muddada ku-meel-gaadhka ah',
      },
      detail: {
        en: 'Provisional registration cannot exceed two years (Art. 28(6)).',
        so: 'Diiwaangelinta ku-meel-gaadhka ah kama badnaan karto laba sano (Qodobka 28(6)).',
      },
    },
  ],

  fees: [
    { item: { en: 'Provisional registration fee', so: 'Khidmadda diiwaangelinta ku-meel-gaadhka ah' }, amount: { en: 'TBC', so: 'La sugayo' } },
    { item: { en: 'Assessment / examination fee', so: 'Khidmadda qiimaynta / imtixaanka' }, amount: { en: 'TBC', so: 'La sugayo' } },
  ],
  feesNote: {
    en: 'Fees are set by the Council under Article 23 and published separately. Amounts marked TBC are not yet confirmed — do not pay any amount requested outside official NHPC channels.',
    so: 'Khidmadaha waxaa dejiya Golaha sida uu dhigayo Qodobka 23aad, waana si gooni ah loo daabacaa. Qadarrada lagu calaamadeeyay “La sugayo” weli lama xaqiijin — ha bixin wax lacag ah oo laga codsado meelo aan ahayn qaadadaha rasmiga ah ee NHPC.',
  },

  keyFacts: [
    {
      ref: { en: 'Article 29(3)', so: 'Qodobka 29aad (3)' },
      text: {
        en: 'A 24-month full-time internship is required for permanent registration.',
        so: 'Diiwaangelinta joogtada ah waxaa loo baahan yahay tababar 24 bilood ah oo waqti-buuxa ah.',
      },
    },
    {
      ref: { en: 'Article 28(6)', so: 'Qodobka 28aad (6)' },
      text: {
        en: 'Provisional registration cannot exceed two years.',
        so: 'Diiwaangelinta ku-meel-gaadhka ah kama badnaan karto laba sano.',
      },
    },
    {
      ref: { en: 'Article 28(5)', so: 'Qodobka 28aad (5)' },
      text: {
        en: 'A provisional registrant may practise only at a Council-approved facility.',
        so: 'Qofka diiwaangelinta ku-meel-gaadhka ah wuxuu ka shaqeyn karaa oo keliya xarun uu Goluhu ansixiyay.',
      },
    },
  ],

  documentIds: ['act-lr31'],

  faqs: [
    {
      question: { en: 'How long is the internship?', so: 'Tababarku intee buu le’eg yahay?' },
      answer: {
        en: 'Twenty-four months of full-time supervised practice (Art. 29(3)).',
        so: 'Afar iyo labaatan bilood oo shaqo waqti-buuxa ah oo kormeer lagu hayo (Qodobka 29(3)).',
      },
    },
    {
      question: { en: 'Where can I do my internship?', so: 'Xaggee baan tababarka ku qaadan karaa?' },
      answer: {
        en: 'Only at a health facility or institution approved by the Council (Art. 28(5)).',
        so: 'Oo keliya xarun caafimaad ama machad uu Goluhu ansixiyay (Qodobka 28(5)).',
      },
    },
    {
      question: {
        en: 'What if I do not finish within the provisional period?',
        so: 'Maxaa dhacaya haddii aanan ku dhammayn muddada ku-meel-gaadhka ah?',
      },
      answer: {
        en: 'Provisional registration cannot be held for more than two years (Art. 28(6)). Complete your internship and assessment within that period to proceed to permanent registration.',
        so: 'Diiwaangelinta ku-meel-gaadhka ah lama hayn karo in ka badan laba sano (Qodobka 28(6)). Ku dhammee tababarka iyo qiimaynta muddadaas gudaheed si aad ugu gudubto diiwaangelinta joogtada ah.',
      },
    },
  ],

  governingArticles: {
    en: "Articles 28 and 29",
    so: "Qodobbada 28 iyo 29",
  },

  applyLabel: { en: 'Apply for Provisional Registration', so: 'Codso Diiwaangelin Ku-meel-gaadh ah' },
  applyNote: {
    en: 'Applications are submitted through the NHPC portal. This website does not process applications or payments.',
    so: 'Codsiyada waxaa loo gudbiyaa bogga NHPC. Websaydkani ma socodsiiyo codsiyo ama lacag-bixinno.',
  },
};

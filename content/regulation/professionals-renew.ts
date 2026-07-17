import type { RegulationContent } from '@/content/types';

// Licence Renewal — Article 44. An application flow (the renewal
// application) that ends at a renewed licence.
export const professionalsRenew: RegulationContent = {
  slug: 'professionals/renew',
  title: {
    en: 'Licence Renewal',
    so: 'Cusbooneysiinta Shatiga Shaqada',
  },
  intro: {
    en: 'Renew your licence to practise before it expires. A licence to practise is valid for two calendar years. Article 44 of the NHPC Act Lr.31.',
    so: 'Cusbooneysii shatiga shaqadaada ka hor inta uusan dhicin. Shatiga shaqadu wuxuu ansax yahay laba sano oo jaandheer ah. Qodobka 44aad ee Sharciga Lr.31.',
  },
  docRef: 'NHPC Act Lr.31 · Article 44',

  whoApplies: [
    {
      en: 'Any registered health professional whose licence to practise has expired or is due to expire (Art. 44(1)).',
      so: 'Mihnadle kasta oo caafimaad oo diiwaangashan oo shatigiisa shaqadu dhacay ama uu dhici doono (Qodobka 44(1)).',
    },
    {
      en: 'Professionals aged over 65, who must also pass a fitness-to-practise examination on renewal (Art. 44(6)).',
      so: 'Mihnadlayaasha ka weyn 65 sano, oo sidoo kale waa inay galaan imtixaan taam-ahaanshaha shaqada marka la cusbooneysiinayo (Qodobka 44(6)).',
    },
  ],

  requirements: [
    {
      title: {
        so: 'Foomka cusbooneysiinta shatiga shaqada oo la buuxiyay',
        en: 'Completed licence-to-practise renewal form',
      },
    },
    {
      title: {
        so: 'Caddeyn hawl-qiimayn iyo xaalad wanaagsan oo ka timid xarun caafimaad oo diiwaangashan',
        en: 'Evidence of performance appraisal and good standing from a registered health facility',
      },
    },
    {
      title: {
        so: 'Caddeyn shahaadooyin ama horumarinta mihnadeed ee joogtada ah (CPD)',
        en: 'Proof of qualifications or continuing professional development (CPD)',
      },
    },
    {
      title: {
        so: 'Baaritaan caafimaad',
        en: 'Health check',
      },
    },
    {
      title: {
        so: 'Ka-qaybgal imtixaanno, wareysiyo iyo qiimayn uu qabto Goluhu',
        en: 'Participation in examinations, interviews and assessments conducted by the Council',
      },
    },
  ],

  process: [
    {
      title: { en: 'Submit your renewal application before expiry', so: 'Gudbi codsiga cusbooneysiinta ka hor dhicitaanka' },
      detail: {
        en: 'Apply to renew before your current licence expires; an unrenewed licence is not valid (Art. 44(1), 44(7)).',
        so: 'Codso cusbooneysiinta ka hor inta uusan dhicin shatigaaga hadda jira; shati aan la cusbooneysiin ma ansax aha (Qodobka 44(1), 44(7)).',
      },
    },
    {
      title: { en: 'Verification of requirements', so: 'Xaqiijinta shuruudaha' },
      detail: {
        en: 'The Secretary General verifies that you satisfy every renewal requirement (Art. 44(3)).',
        so: 'Xoghayaha Guud ayaa xaqiijiya inaad buuxiso shuruud kasta oo cusbooneysiineed (Qodobka 44(3)).',
      },
    },
    {
      title: { en: 'Assessment', so: 'Qiimayn' },
      detail: {
        en: 'Professionals over 65 undergo a fitness-to-practise examination covering sight, hearing and mental fitness (Art. 44(6)).',
        so: 'Mihnadlayaasha ka weyn 65 waxay galaan imtixaan taam-ahaanshaha shaqada oo daboolaya aragga, maqalka iyo caafimaadka maskaxda (Qodobka 44(6)).',
      },
    },
    {
      title: { en: 'Council decision — renewed licence issued', so: 'Go’aanka Golaha — shati la cusbooneysiiyay la bixiyo' },
      detail: {
        en: 'If satisfied, the Council grants a renewed licence to practise (Art. 44(4)). Reasons are given for any refusal (Art. 44(5)).',
        so: 'Haddii uu ku qanco, Goluhu wuxuu bixiyaa shati shaqo oo la cusbooneysiiyay (Qodobka 44(4)). Sababaha diidmadana waa la sheegaa (Qodobka 44(5)).',
      },
    },
  ],

  obligations: [
    {
      title: {
        en: 'Keep your CPD current',
        so: 'Ku sii wad horumarinta mihnadeed (CPD)',
      },
      detail: {
        en: 'Continuing professional development is a standing requirement for each renewal (Art. 44(2)(c)).',
        so: 'Horumarinta mihnadeed ee joogtada ah waa shuruud joogto ah oo cusbooneysiin kasta (Qodobka 44(2)(c)).',
      },
    },
    {
      title: {
        en: 'Display your practising certificate',
        so: 'Ka soo bandhig shahaadadaada shaqada',
      },
      detail: {
        en: 'Show your practising certificate in a conspicuous place at your place of practice (Art. 45).',
        so: 'Ka muuji shahaadadaada shaqada meel muuqata oo ku taal goobta aad ka shaqeyso (Qodobka 45).',
      },
    },
    {
      title: {
        en: 'Report changes to your details within 7 days',
        so: 'Soo sheeg isbeddellada xogtaada 7 maalmood gudahood',
      },
      detail: {
        en: 'Notify the Secretary General of any change affecting your registration records within seven days (Art. 31).',
        so: 'U sheeg Xoghayaha Guud isbeddel kasta oo saameeya diiwaankaaga toddoba maalmood gudahood (Qodobka 31).',
      },
    },
  ],

  fees: [
    { item: { en: 'Licence renewal fee', so: 'Khidmadda cusbooneysiinta shatiga' }, amount: { en: 'TBC', so: 'La sugayo' } },
    { item: { en: 'Assessment / examination fee', so: 'Khidmadda qiimaynta / imtixaanka' }, amount: { en: 'TBC', so: 'La sugayo' } },
  ],
  feesNote: {
    en: 'Fees are set by the Council under Article 23 and published separately. Amounts marked TBC are not yet confirmed — do not pay any amount requested outside official NHPC channels.',
    so: 'Khidmadaha waxaa dejiya Golaha sida uu dhigayo Qodobka 23aad, waana si gooni ah loo daabacaa. Qadarrada lagu calaamadeeyay “La sugayo” weli lama xaqiijin — ha bixin wax lacag ah oo laga codsado meelo aan ahayn qaadadaha rasmiga ah ee NHPC.',
  },

  keyFacts: [
    {
      ref: { en: 'Article 42(8)', so: 'Qodobka 42aad (8)' },
      text: {
        en: 'A licence to practise is valid for two calendar years.',
        so: 'Shatiga shaqadu wuxuu ansax yahay laba sano oo jaandheer ah.',
      },
    },
    {
      ref: { en: 'Article 44(6)', so: 'Qodobka 44aad (6)' },
      text: {
        en: 'Professionals over 65 undergo a fitness-to-practise examination on renewal.',
        so: 'Mihnadlayaasha ka weyn 65 waxay galaan imtixaan taam-ahaanshaha shaqada marka la cusbooneysiinayo.',
      },
    },
    {
      ref: { en: 'Article 44(8)', so: 'Qodobka 44aad (8)' },
      text: {
        en: 'Practising after your licence is invalidated is an offence — a fine of up to US$700.',
        so: 'Ka-shaqaynta ka dib marka shatigaaga la buriyo waa dembi — ganaax ilaa US$700.',
      },
    },
  ],

  documentIds: ['act-lr31'],

  faqs: [
    {
      question: { en: 'When should I renew?', so: 'Goorma ayaan cusbooneysiin?' },
      answer: {
        en: 'Before your current licence expires. A licence that has not been renewed is not valid (Art. 44(7)).',
        so: 'Ka hor inta uusan dhicin shatigaaga hadda jira. Shati aan la cusbooneysiin ma ansax aha (Qodobka 44(7)).',
      },
    },
    {
      question: { en: 'I am over 65 — is anything different?', so: 'Waxaan ka weynahay 65 — wax kala duwan ma jiraan?' },
      answer: {
        en: 'Yes. You undergo a fitness-to-practise examination — sight, hearing and mental fitness — when you renew (Art. 44(6)).',
        so: 'Haa. Waxaad gashaa imtixaan taam-ahaanshaha shaqada — aragga, maqalka iyo caafimaadka maskaxda — marka aad cusbooneysiinayso (Qodobka 44(6)).',
      },
    },
    {
      question: {
        en: 'What if I keep practising after my licence lapses?',
        so: 'Maxaa dhacaya haddii aan sii shaqeeyo ka dib markuu shatigaygu dhaco?',
      },
      answer: {
        en: 'Practising after a licence is invalidated is an offence carrying a fine of up to US$700 (Art. 44(8)).',
        so: 'Ka-shaqaynta ka dib marka shatiga la buriyo waa dembi oo wata ganaax ilaa US$700 (Qodobka 44(8)).',
      },
    },
  ],

  governingArticles: {
    en: "Articles 42 and 44",
    so: "Qodobbada 42 iyo 44",
  },

  applyLabel: { en: 'Renew Licence', so: 'Cusbooneysii Shatiga' },
  applyNote: {
    en: 'Renewals are submitted through the NHPC portal. This website does not process applications or payments.',
    so: 'Cusbooneysiinta waxaa loo gudbiyaa bogga NHPC. Websaydkani ma socodsiiyo codsiyo ama lacag-bixinno.',
  },
};

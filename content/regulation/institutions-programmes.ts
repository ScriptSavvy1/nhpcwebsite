import type { RegulationContent } from '@/content/types';

// Training Programme Approval — Articles 54–56. An application flow
// (approving a programme) ending at an approved programme licence.
export const institutionsProgrammes: RegulationContent = {
  slug: 'institutions/programmes',
  title: {
    en: 'Training Programme Approval',
    so: 'Ansixinta Barnaamijka Tababarka',
  },
  intro: {
    en: 'Every health training programme must be approved by NHPC before it is offered. Articles 54–56 of the NHPC Act Lr.31.',
    so: 'Barnaamij kasta oo tababar caafimaad waa in NHPC ansixiyo ka hor inta aan la bixin. Qodobbada 54–56 ee Sharciga Lr.31.',
  },
  docRef: 'NHPC Act Lr.31 · Articles 54–56',

  whoApplies: [
    {
      en: 'Institutions establishing new health training programmes — and all existing programmes, which must also be approved (Art. 54(1)).',
      so: 'Machadyada sameynaya barnaamijyo tababar caafimaad oo cusub — iyo dhammaan barnaamijyada jira, oo sidoo kale waa in la ansixiyo (Qodobka 54(1)).',
    },
  ],

  requirements: [
    {
      title: {
        so: 'Codsi liisan ah oo la gudbiyo ka hor bilaabista barnaamijka (Qodobka 54(1))',
        en: 'A licence application submitted before the programme commences',
      },
    },
    {
      title: {
        so: 'Faahfaahin ku saabsan muddada barnaamijka iyo manhajka',
        en: 'Details of the programme duration and curriculum',
      },
    },
    {
      title: {
        so: 'Shahaadooyinka macallimiinta iyo hababka shaqaalaysiinta',
        en: 'Faculty qualifications and recruitment procedures',
      },
    },
    {
      title: {
        so: 'Qalab tababar iyo tas-hiilaad ku habboon',
        en: 'Suitable training equipment and facilities',
      },
    },
  ],

  process: [
    {
      title: { en: 'Apply before the programme commences', so: 'Codso ka hor inta aan barnaamijku bilaaban' },
      detail: {
        en: 'Apply for a licence to provide the training programme before training begins; existing programmes must also be approved (Art. 54(1)).',
        so: 'Codso liisan aad ku bixinayso barnaamijka tababarka ka hor inta aan tababarku bilaaban; barnaamijyada jirana waa in la ansixiyo (Qodobka 54(1)).',
      },
    },
    {
      title: { en: 'Evaluation against the criteria', so: 'Qiimayn iyadoo la eegayo shuruudaha' },
      detail: {
        en: 'The Council assesses duration, minimum standards, curriculum, faculty qualifications, and equipment (Art. 55(1)).',
        so: 'Goluhu wuxuu qiimeeyaa muddada, heerarka ugu yar, manhajka, shahaadooyinka macallimiinta, iyo qalabka (Qodobka 55(1)).',
      },
    },
    {
      title: { en: 'Decision — approve and licence, or reject', so: 'Go’aan — ansixi oo shati-sii, ama diid' },
      detail: {
        en: 'If it meets the requirements the Council approves and licenses the programme; otherwise it is rejected (Art. 54(2)).',
        so: 'Haddii uu buuxiyo shuruudaha Goluhu wuu ansixiyaa oo shati u siiyaa barnaamijka; haddii kale waa la diidaa (Qodobka 54(2)).',
      },
    },
  ],

  obligations: [
    {
      title: {
        en: 'Maintain the approved standards',
        so: 'Ilaali heerarka la ansixiyay',
      },
      detail: {
        en: 'Keep the programme to the standards, curriculum, faculty and equipment on which approval was granted (Art. 55).',
        so: 'Ku hay barnaamijka heerarka, manhajka, macallimiinta iyo qalabka lagu ansixiyay (Qodobka 55).',
      },
    },
    {
      title: {
        en: 'Undergo annual programme review',
        so: 'Soo mari dib-u-eegis barnaamij sannadle ah',
      },
      detail: {
        en: 'Programmes are reviewed every year, considering graduates’ performance (Art. 56(1)).',
        so: 'Barnaamijyada waxaa dib-u-eegis lagu sameeyaa sannad kasta, iyadoo la tixgelinayo waxqabadka kuwa qalin-jabiya (Qodobka 56(1)).',
      },
    },
  ],

  fees: [
    { item: { en: 'Programme approval fee', so: 'Khidmadda ansixinta barnaamijka' }, amount: { en: 'TBC', so: 'La sugayo' } },
    { item: { en: 'Programme evaluation fee', so: 'Khidmadda qiimaynta barnaamijka' }, amount: { en: 'TBC', so: 'La sugayo' } },
  ],
  feesNote: {
    en: 'Fees are set by the Council under Article 23 and published separately. Amounts marked TBC are not yet confirmed — do not pay any amount requested outside official NHPC channels.',
    so: 'Khidmadaha waxaa dejiya Golaha sida uu dhigayo Qodobka 23aad, waana si gooni ah loo daabacaa. Qadarrada lagu calaamadeeyay “La sugayo” weli lama xaqiijin — ha bixin wax lacag ah oo laga codsado meelo aan ahayn qaadadaha rasmiga ah ee NHPC.',
  },

  keyFacts: [
    {
      ref: { en: 'Article 54(5)', so: 'Qodobka 54aad (5)' },
      text: {
        en: 'Using an unapproved programme to prepare students — a fine of up to US$2,000, and an order to stop.',
        so: 'Isticmaalka barnaamij aan la ansixin si loo diyaariyo ardayda — ganaax ilaa US$2,000, iyo amar joojin ah.',
      },
    },
    {
      ref: { en: 'Article 54(3)', so: 'Qodobka 54aad (3)' },
      text: {
        en: 'Qualifications and certificates from unapproved programmes are not recognised.',
        so: 'Shahaadooyinka iyo aqoonsiyada barnaamijyada aan la ansixin lama aqoonsan.',
      },
    },
    {
      ref: { en: 'Article 56(2)', so: 'Qodobka 56aad (2)' },
      text: {
        en: 'The Council may revoke a programme licence if standards fall or graduates underperform.',
        so: 'Goluhu wuu burin karaa liisanka barnaamijka haddii heerarku hoos u dhacaan ama kuwa qalin-jabiyaa ay hoos u dhacaan.',
      },
    },
  ],

  documentIds: ['act-lr31'],

  faqs: [
    {
      question: {
        en: 'What if we run an unapproved programme?',
        so: 'Maxaa dhacaya haddii aan wadno barnaamij aan la ansixin?',
      },
      answer: {
        en: 'It is an offence carrying a fine of up to US$2,000, with an order to stop, and its qualifications are not recognised by the Council (Art. 54(3),(5)).',
        so: 'Waa dembi wata ganaax ilaa US$2,000, iyo amar joojin ah, shahaadooyinkiisana Goluhu ma aqoonsado (Qodobka 54(3),(5)).',
      },
    },
    {
      question: {
        en: 'How are programmes evaluated?',
        so: 'Sidee baa barnaamijyada loo qiimeeyaa?',
      },
      answer: {
        en: 'Against programme duration, minimum training standards, a standardised curriculum, faculty qualifications, and suitable equipment (Art. 55).',
        so: 'Iyadoo la eegayo muddada barnaamijka, heerarka ugu yar ee tababarka, manhaj la habeeyay, shahaadooyinka macallimiinta, iyo qalab ku habboon (Qodobka 55).',
      },
    },
    {
      question: {
        en: 'Can an approved programme lose its licence?',
        so: 'Barnaamij la ansixiyay ma lumin karaa liisankiisa?',
      },
      answer: {
        en: 'Yes. The Council may revoke the licence if the programme no longer meets the Act’s requirements, is not regularly offered, or its graduates underperform (Art. 56(2)).',
        so: 'Haa. Goluhu wuu burin karaa liisanka haddii barnaamijku uusan sii buuxin shuruudaha Sharciga, aan si joogto ah loo bixin, ama kuwa qalin-jabiya ay hoos u dhacaan (Qodobka 56(2)).',
      },
    },
  ],

  governingArticles: {
    en: "Articles 54–56",
    so: "Qodobbada 54–56",
  },

  applyLabel: { en: 'Apply for Programme Approval', so: 'Codso Ansixinta Barnaamijka' },
  applyNote: {
    en: 'Applications are submitted through the NHPC portal. This website does not process applications or payments.',
    so: 'Codsiyada waxaa loo gudbiyaa bogga NHPC. Websaydkani ma socodsiiyo codsiyo ama lacag-bixinno.',
  },
};

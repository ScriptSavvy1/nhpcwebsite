import type { RegulationContent } from '@/content/types';

// Health Education Institution Accreditation — Article 53. An application
// flow (licensing the institution) ending at a licence to provide health
// education. Withdrawal/closure are enforcement — they live in FAQ.
export const institutionsAccreditation: RegulationContent = {
  slug: 'institutions/accreditation',
  title: {
    en: 'Health Education Institution Accreditation',
    so: 'Aqoonsiga Machadka Waxbarashada Caafimaadka',
  },
  intro: {
    en: 'Health training institutions must be licensed by NHPC before providing any health education in Somalia. Article 53 of the NHPC Act Lr.31.',
    so: 'Machadyada tababarka caafimaadku waa inay NHPC ka shati-qaataan ka hor inta aysan bixin wax waxbarasho caafimaad ah oo Soomaaliya ah. Qodobka 53aad ee Sharciga Lr.31.',
  },
  docRef: 'NHPC Act Lr.31 · Article 53',

  whoApplies: [
    {
      en: 'Any educational facility wishing to offer education or training in health-related fields (Art. 53(1),(2)).',
      so: 'Machad kasta oo waxbarasho ah oo doonaya inuu bixiyo waxbarasho ama tababar ku saabsan qaybaha caafimaadka (Qodobka 53(1),(2)).',
    },
    {
      en: 'Institutions must apply before any education or training begins.',
      so: 'Machadyadu waa inay codsadaan ka hor inta aan bilaaban wax waxbarasho ama tababar ah.',
    },
  ],

  requirements: [
    {
      title: {
        so: 'Codsi loo gudbiyo Golaha ka hor bilaabista waxbarashada ama tababarka',
        en: 'An application submitted to the Council before education or training begins',
      },
    },
    {
      title: {
        so: 'Faahfaahin iyo caddeyn ku saabsan barnaamijyada waxbarasho ee la bixinayo',
        en: 'Details and proof of the education or training programmes offered',
      },
    },
    {
      title: {
        so: 'Bixinta khidmadaha loo baahan yahay',
        en: 'Payment of the required fees',
      },
    },
  ],

  process: [
    {
      title: { en: 'Submit your application', so: 'Gudbi codsigaaga' },
      detail: {
        en: 'Apply to the Council before starting, with programme details and the required fees (Art. 53(2),(3)).',
        so: 'U codso Golaha ka hor bilaabista, adigoo keenaya faahfaahinta barnaamijka iyo khidmadaha loo baahan yahay (Qodobka 53(2),(3)).',
      },
    },
    {
      title: { en: 'Council review', so: 'Dib-u-eegis Golaha' },
      detail: {
        en: 'The Council verifies that all particulars and documents meet the requirements and are true (Art. 53(4)).',
        so: 'Goluhu wuxuu xaqiijiyaa in dhammaan faahfaahinta iyo dukumiintiyadu ay buuxiyaan shuruudaha oo run yihiin (Qodobka 53(4)).',
      },
    },
    {
      title: { en: 'Decision', so: 'Go’aan' },
      detail: {
        en: 'The Council approves or rejects; the Secretary General notifies the institution in writing and gives reasons for any rejection (Art. 53(5)).',
        so: 'Goluhu wuu ansixiyaa ama diidaa; Xoghayaha Guud ayaa machadka qoraal ugu wargeliya oo sababaha diidmada sheega (Qodobka 53(5)).',
      },
    },
    {
      title: { en: 'Licence issued', so: 'Liisan la bixiyo' },
      detail: {
        en: 'If approved, a licence to provide health education is issued and recorded (Art. 53(5)(b),(c)).',
        so: 'Haddii la ansixiyo, waxaa la bixiyaa oo la diiwaangeliyaa liisan lagu bixinayo waxbarashada caafimaadka (Qodobka 53(5)(b),(c)).',
      },
    },
  ],

  obligations: [
    {
      title: {
        en: 'Comply with the terms of approval',
        so: 'U hoggaanso shuruudaha ansixinta',
      },
      detail: {
        en: 'Comply with the terms and conditions of the approval for the whole licence period (Art. 53(6)).',
        so: 'U hoggaanso shuruudaha iyo xaaladaha ansixinta inta lagu jiro muddada liisanka oo dhan (Qodobka 53(6)).',
      },
    },
    {
      title: {
        en: 'Cooperate with Council investigators',
        so: 'La shaqee baarayaasha Golaha',
      },
      detail: {
        en: 'The Council may appoint investigators at any time to verify compliance (Art. 53(7)).',
        so: 'Goluhu wuxuu wakhti kasta u magacaabi karaa baarayaal si loo xaqiijiyo u-hoggaansanaanta (Qodobka 53(7)).',
      },
    },
    {
      title: {
        en: 'Undergo annual review',
        so: 'Soo mari dib-u-eegis sannadle ah',
      },
      detail: {
        en: 'Certified training programmes are reviewed every year (Art. 56(1)).',
        so: 'Barnaamijyada tababarka la aqoonsan yahay waxaa dib-u-eegis lagu sameeyaa sannad kasta (Qodobka 56(1)).',
      },
    },
  ],

  fees: [
    { item: { en: 'Accreditation application fee', so: 'Khidmadda codsiga aqoonsiga' }, amount: { en: 'TBC', so: 'La sugayo' } },
    { item: { en: 'Programme evaluation fee', so: 'Khidmadda qiimaynta barnaamijka' }, amount: { en: 'TBC', so: 'La sugayo' } },
  ],
  feesNote: {
    en: 'Fees are set by the Council under Article 23 and published separately. Amounts marked TBC are not yet confirmed — do not pay any amount requested outside official NHPC channels.',
    so: 'Khidmadaha waxaa dejiya Golaha sida uu dhigayo Qodobka 23aad, waana si gooni ah loo daabacaa. Qadarrada lagu calaamadeeyay “La sugayo” weli lama xaqiijin — ha bixin wax lacag ah oo laga codsado meelo aan ahayn qaadadaha rasmiga ah ee NHPC.',
  },

  keyFacts: [
    {
      ref: { en: 'Article 53(12)', so: 'Qodobka 53aad (12)' },
      text: {
        en: 'Providing health education without a licence — a fine of up to US$3,000, and an order to stop.',
        so: 'Bixinta waxbarasho caafimaad iyada oo aan liisan lahayn — ganaax ilaa US$3,000, iyo amar joojin ah.',
      },
    },
    {
      ref: { en: 'Article 53(10)', so: 'Qodobka 53aad (10)' },
      text: {
        en: 'An institution whose licence is revoked must return it within 30 days.',
        so: 'Machadka liisankiisa la buriyo waa inuu soo celiyo 30 maalmood gudahood.',
      },
    },
    {
      ref: { en: 'Article 56(1)', so: 'Qodobka 56aad (1)' },
      text: {
        en: 'Certified training programmes are reviewed every year.',
        so: 'Barnaamijyada tababarka la aqoonsan yahay waxaa dib-u-eegis lagu sameeyaa sannad kasta.',
      },
    },
  ],

  documentIds: ['act-lr31'],

  faqs: [
    {
      question: {
        en: 'Can we teach before we are licensed?',
        so: 'Ma wax bari karnaa ka hor inta aan na la shati-siin?',
      },
      answer: {
        en: 'No. Providing any form of health education without a licence is an offence carrying a fine of up to US$3,000, and the institution is ordered to stop (Art. 53(1), 53(12)).',
        so: 'Maya. Bixinta nooc kasta oo waxbarasho caafimaad ah iyada oo aan liisan lahayn waa dembi oo wata ganaax ilaa US$3,000, machadkana waa la amraa inuu joojiyo (Qodobka 53(1), 53(12)).',
      },
    },
    {
      question: {
        en: 'What happens if our approval is withdrawn?',
        so: 'Maxaa dhacaya haddii ansixintayada la burinayo?',
      },
      answer: {
        en: 'The Council may withdraw approval in writing after giving the institution an opportunity to be heard (Art. 53(8)). A revoked institution must return its licence within 30 days (Art. 53(10)).',
        so: 'Goluhu wuxuu qoraal ku burin karaa ansixinta ka dib marka uu machadka fursad u siiyo in la dhageysto (Qodobka 53(8)). Machadka la buriyo waa inuu liisankiisa soo celiyo 30 maalmood gudahood (Qodobka 53(10)).',
      },
    },
    {
      question: {
        en: 'How often are we reviewed?',
        so: 'Immisa jeer baa nala dib-u-eegaa?',
      },
      answer: {
        en: 'Certified programmes are reviewed every year, taking into account the performance of graduates (Art. 56(1)).',
        so: 'Barnaamijyada la aqoonsan yahay waxaa dib-u-eegis lagu sameeyaa sannad kasta, iyada oo la tixgelinayo waxqabadka kuwa qalin-jabiya (Qodobka 56(1)).',
      },
    },
  ],

  governingArticles: {
    en: "Articles 53–56",
    so: "Qodobbada 53–56",
  },

  applyLabel: { en: 'Apply for Accreditation', so: 'Codso Aqoonsi' },
  applyNote: {
    en: 'Applications are submitted through the NHPC portal. This website does not process applications or payments.',
    so: 'Codsiyada waxaa loo gudbiyaa bogga NHPC. Websaydkani ma socodsiiyo codsiyo ama lacag-bixinno.',
  },
};

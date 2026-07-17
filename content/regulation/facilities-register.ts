import type { RegulationContent } from '@/content/types';

// Health Facility Registration — the deliberately awkward second instance.
// Different actor (owner/proprietor), 7 requirements, 2-year cycle, a
// 6-month inspection cadence, and closure/corrective-action provisions.
// Requirements: Somali is authoritative (NHPC / HFR-REQ / 01, Art. 41(3)).
export const facilitiesRegister: RegulationContent = {
  slug: 'facilities/register',
  title: {
    en: 'Health Facility Registration',
    so: 'Diiwaangelinta Xarunta Caafimaadka',
  },
  intro: {
    en: 'Every health facility must register with NHPC before providing health services. Article 41 of the NHPC Act Lr.31.',
    so: 'Xarun kasta oo caafimaad waa inay isaga diiwaangeliso NHPC ka hor inta aysan bixin adeegyo caafimaad. Qodobka 41aad ee Sharciga Lr.31.',
  },
  docRef: 'NHPC / HFR-REQ / 01',

  whoApplies: [
    {
      en: 'Any person or organisation establishing or operating a health facility — hospitals, clinics, laboratories, pharmacies, and specialised centres (Art. 41(1), 47(1)).',
      so: 'Qof kasta ama urur kasta oo dhisaya ama shaqaalaysiinaya xarun caafimaad — isbitaallo, rugo caafimaad, sheybaarro, farmasiyo, iyo xarumo takhasus leh (Qodobka 41(1), 47(1)).',
    },
    {
      en: 'The owner or proprietor is responsible for registering the facility before any health services commence (Art. 41(1)).',
      so: 'Milkiiluhu ama qofka xarunta leh ayaa mas’uul ka ah diiwaangelinta xarunta ka hor inta aan bilaaban wax adeeg caafimaad ah (Qodobka 41(1)).',
    },
    {
      en: 'Facilities formerly registered with the Ministry of Health and Social Care must re-register with NHPC.',
      so: 'Xarumaha hore uga diiwaangelsaneed Wasaaradda Caafimaadka iyo Daryeelka Bulshada waa inay dib isuga diiwaangeliyaan NHPC.',
    },
  ],

  // ── The 7 official Article-41(3) requirements (SO authoritative) ──
  requirements: [
    {
      title: {
        so: 'Shahaadada diiwaan gelinta ee dowlada hoose oo aan dhacsaneyn',
        en: 'Valid, unexpired local government registration certificate',
      },
    },
    {
      title: {
        so: 'Buuxinta Foomka Codsiga Diiwaangalinta Xarumaha Adeegyada Caafimaadka',
        en: 'Completed Health Service Facility Registration Application Form',
      },
    },
    {
      title: {
        so: 'Dukumiintiga lahaanshaha milkiyadeed ee xarunta caafimaadka',
        en: 'Proof of ownership documentation for the facility premises',
      },
    },
    {
      title: {
        so: 'Dokumiinti dhamaystiran oo ka hadlaaya xarunta adeegga caafimaadka waxa ay qabato iyo inta shaqaalo ay leedahay',
        en: 'A complete document describing the services the facility provides and its staffing establishment',
      },
    },
    {
      title: {
        so: 'Nuqulka diiwaangelintii hore (haddii ay hore uga diiwaangalsaneed Wasaaradda Caafimaadka iyo Daryeelka Bulshada)',
        en: 'A copy of any previous registration, if formerly registered with the Ministry of Health and Social Care',
      },
    },
    {
      title: {
        so: 'Warqadda dambi la’aanta milkiilaha',
        en: 'Certificate of good conduct (police clearance) for the owner',
      },
    },
    {
      title: {
        so: 'Bixin Khidmadda Diiwaan Gelinta',
        en: 'Payment of the registration fee',
      },
    },
  ],

  process: [
    {
      title: { en: 'Prepare your documents', so: 'Diyaari dukumiintiyadaada' },
      detail: {
        en: 'Gather all seven required documents above before you apply.',
        so: 'Soo ururi dhammaan toddobada dukumiinti ee kor ku xusan ka hor inta aadan codsan.',
      },
    },
    {
      title: {
        en: 'Apply before commencing services',
        so: 'Codso ka hor inta aadan bilaabin adeegyada',
      },
      detail: {
        en: 'Submit the application and registration fee to NHPC before the facility begins providing health services (Art. 41(1)).',
        so: 'U gudbi codsiga iyo khidmadda diiwaangelinta NHPC ka hor inta xaruntu bilaabin bixinta adeegyada caafimaadka (Qodobka 41(1)).',
      },
    },
    {
      title: { en: 'Inspection before licensing', so: 'Kormeer ka hor liisanka' },
      detail: {
        en: 'Every facility is inspected before a licence to operate is issued (Art. 51(1)). Inspectors verify premises, staffing, and equipment.',
        so: 'Xarun kasta waa la baaraa ka hor inta aan la bixin liisanka shaqada (Qodobka 51(1)). Kormeerayaashu waxay hubiyaan dhismaha, shaqaalaha, iyo qalabka.',
      },
    },
    {
      title: { en: 'Registration issued', so: 'Diiwaangelin la bixiyo' },
      detail: {
        en: 'On completion of all requirements the facility is recognised as a legally registered health facility (Art. 41(3)).',
        so: 'Marka dhammaan shuruudaha la dhammaystiro, xaruntu waxaa loo aqoonsadaa xarun caafimaad oo si sharci ah u diiwaangashan (Qodobka 41(3)).',
      },
    },
  ],

  // What the facility must keep doing once registered — ongoing duties,
  // not application steps and not enforcement consequences.
  obligations: [
    {
      title: {
        en: 'Display the licence prominently at the facility',
        so: 'Ka soo bandhig liisanka meel muuqata oo ku taal xarunta',
      },
      detail: {
        en: 'A copy of the licence must be shown in a prominent place on the premises (Art. 47(2)).',
        so: 'Nuqul liisanka ah waa in laga muujiyo meel muuqata oo ku taal xarunta (Qodobka 47(2)).',
      },
    },
    {
      title: {
        en: 'Undergo inspection at least every six months',
        so: 'Soo mari kormeer ugu yaraan lix bilood kasta',
      },
      detail: {
        en: 'Facilities are inspected before licensing and at least every six months thereafter (Art. 51(1)).',
        so: 'Xarumaha waa la baaraa ka hor liisanka, ka dibna ugu yaraan lix bilood kasta (Qodobka 51(1)).',
      },
    },
    {
      title: {
        en: 'Stay compliant with all licence conditions',
        so: 'Ku sii jir u-hoggaansanaanta shuruudaha liisanka',
      },
      detail: {
        en: 'Remain in full compliance with the conditions of the licence and provide any information the Council requires (Art. 49(2)).',
        so: 'Ku sii jir u-hoggaansanaan buuxda oo shuruudaha liisanka ah oo bixi macluumaad kasta oo Goluhu doonayo (Qodobka 49(2)).',
      },
    },
    {
      title: {
        en: 'Renew before expiry',
        so: 'Cusbooneysii ka hor dhicitaanka',
      },
      detail: {
        en: 'Facility registration is renewed every two years (Art. 41(5)); the licence to operate is renewed annually (Art. 49(1)).',
        so: 'Diiwaangelinta xarunta waxaa la cusbooneysiiyaa labadii sanaba mar (Qodobka 41(5)); liisanka shaqadana waxaa la cusbooneysiiyaa sannad kasta (Qodobka 49(1)).',
      },
    },
  ],

  // Figures are placeholders — set by the Council under Art. 23, TBC.
  fees: [
    {
      item: { en: 'Facility registration fee', so: 'Khidmadda diiwaangelinta xarunta' },
      amount: { en: 'TBC', so: 'La sugayo' },
    },
    {
      item: { en: 'Licence to operate issuance', so: 'Bixinta liisanka shaqada' },
      amount: { en: 'TBC', so: 'La sugayo' },
    },
  ],
  feesNote: {
    en: 'Fees are set by the Council under Article 23 and published separately. Amounts marked TBC are not yet confirmed — do not pay any amount requested outside official NHPC channels.',
    so: 'Khidmadaha waxaa dejiya Golaha sida uu dhigayo Qodobka 23aad, waana si gooni ah loo daabacaa. Qadarrada lagu calaamadeeyay “La sugayo” weli lama xaqiijin — ha bixin wax lacag ah oo laga codsado meelo aan ahayn qaadadaha rasmiga ah ee NHPC.',
  },

  keyFacts: [
    {
      ref: { en: 'Article 41(5)', so: 'Qodobka 41aad (5)' },
      text: {
        en: 'Facility registration is valid for two calendar years and is renewable every two years.',
        so: 'Diiwaangelinta xarunta waxay ansax tahay laba sano oo jaandheer ah, waana la cusbooneysiiyaa labadii sanaba mar.',
      },
    },
    {
      ref: { en: 'Article 51(1)', so: 'Qodobka 51aad (1)' },
      text: {
        en: 'Every facility is inspected before licensing and at least every six months thereafter.',
        so: 'Xarun kasta waa la baaraa ka hor liisanka, ka dibna ugu yaraan lix bilood kasta.',
      },
    },
    {
      ref: { en: 'Article 48', so: 'Qodobka 48aad' },
      text: {
        en: 'Operating a health facility without a licence is an offence — a fine of up to US$2,000.',
        so: 'Shaqaalaysiinta xarun caafimaad iyada oo aan liisan lahayn waa dembi — ganaax ilaa US$2,000.',
      },
    },
  ],

  documentIds: ['hfr-req', 'act-lr31'],

  faqs: [
    {
      question: {
        en: 'How long is facility registration valid?',
        so: 'Diiwaangelinta xaruntu intee bay ansax tahay?',
      },
      answer: {
        en: 'Two calendar years from the date of registration, renewable every two years (Art. 41(5)). Apply for renewal before it expires.',
        so: 'Laba sano oo jaandheer ah laga bilaabo taariikhda diiwaangelinta, waana la cusbooneysiiyaa labadii sanaba mar (Qodobka 41(5)). Codso cusbooneysiinta ka hor inta aysan dhicin.',
      },
    },
    {
      question: {
        en: 'How often is my facility inspected?',
        so: 'Xaruntayda immisa jeer baa la baaraa?',
      },
      answer: {
        en: 'Before a licence is issued, and at least every six months afterwards (Art. 51(1)). Inspectors carry ID and verify premises, staffing, and equipment. See the Inspection Regime page for details.',
        so: 'Ka hor inta aan liisanka la bixin, iyo ugu yaraan lix bilood kasta ka dib (Qodobka 51(1)). Kormeerayaashu waxay wataan aqoonsi, waxayna hubiyaan dhismaha, shaqaalaha, iyo qalabka. Eeg bogga Nidaamka Kormeerka.',
      },
    },
    {
      question: {
        en: 'What happens if my facility is found non-compliant?',
        so: 'Maxaa dhacaya haddii xaruntaydu la ogaado inaysan u-hoggaansmin?',
      },
      answer: {
        en: 'The Council issues a written notice of the violation. You then have seven days to submit a corrective action plan (Art. 52(3)). If the plan is unsatisfactory — or the breach causes imminent harm — the Council may revoke the licence and order closure (Art. 52).',
        so: 'Goluhu wuxuu soo saaraa ogeysiis qoraal ah oo ku saabsan xad-gudubka. Waxaad haysataa toddoba maalmood oo aad ku soo gudbiso qorshe saxid ah (Qodobka 52(3)). Haddii qorshuhu ku filnaan waayo — ama xad-gudubku uu keeno khatar degdeg ah — Goluhu wuxuu burin karaa liisanka oo amri karaa xiritaanka (Qodobka 52).',
      },
    },
    {
      question: {
        en: 'Can I operate before registering and licensing?',
        so: 'Ma shaqaalaysiin karaa ka hor diiwaangelinta iyo liisanka?',
      },
      answer: {
        en: 'No. No facility may operate without first receiving a licence. Operating without one is an offence with a fine of up to US$2,000 (Art. 48).',
        so: 'Maya. Xarun lama shaqaalaysiin karo iyada oo aan marka hore helin liisan. Ku shaqaynta iyada oo aan la haysan waa dembi oo wata ganaax ilaa US$2,000 (Qodobka 48).',
      },
    },
    {
      question: {
        en: 'We were registered with the Ministry of Health — do we re-register?',
        so: 'Waxaan ka diiwaangelsanayn Wasaaradda Caafimaadka — ma dib baan isu diiwaangelinaa?',
      },
      answer: {
        en: 'Yes. Register with NHPC and include a copy of your previous Ministry of Health and Social Care registration (requirement 5).',
        so: 'Haa. Isaga diiwaangeli NHPC oo ku dar nuqul ka mid ah diiwaangelintii hore ee Wasaaradda Caafimaadka iyo Daryeelka Bulshada (shuruudda 5aad).',
      },
    },
  ],

  governingArticles: {
    en: "Articles 41 and 47–52",
    so: "Qodobbada 41 iyo 47–52",
  },

  applyLabel: { en: 'Register a Facility', so: 'Diiwaangeli Xarun' },
  applyNote: {
    en: 'Applications are submitted through the NHPC portal. This website does not process applications or payments.',
    so: 'Codsiyada waxaa loo gudbiyaa bogga NHPC. Websaydkani ma socodsiiyo codsiyo ama lacag-bixinno.',
  },
};

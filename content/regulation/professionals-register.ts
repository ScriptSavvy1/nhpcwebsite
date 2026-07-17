import type { RegulationContent } from '@/content/types';

// Health Professional Registration — the REFERENCE regulation page.
// Requirements: Somali is the authoritative official text (from
// NHPC / HPR-REQ / 01, Art. 25); English is a working translation.
export const professionalsRegister: RegulationContent = {
  slug: 'professionals/register',
  title: {
    en: 'Health Professional Registration',
    so: 'Diiwaangelinta Mihnadlaha Caafimaadka',
  },
  intro: {
    en: 'Every health professional must register with NHPC before practising in Somalia. Article 25 of the NHPC Act Lr.31.',
    so: 'Mihnadle kasta oo caafimaad waa inuu isaga diiwaangeliyo NHPC ka hor inta uusan ka shaqeyn Soomaaliya. Qodobka 25aad ee Sharciga Lr.31.',
  },
  docRef: 'NHPC / HPR-REQ / 01',

  whoApplies: [
    {
      en: 'Graduates of a recognised health training institution seeking to practise in Somalia.',
      so: 'Kuwa ka qalin-jabiyay machad tababar caafimaad oo la aqoonsan yahay ee doonaya inay ka shaqeeyaan Soomaaliya.',
    },
    {
      en: 'Any health professional who must be registered before commencing work (Art. 25(1)).',
      so: 'Mihnadle kasta oo caafimaad oo waajib ku ah inuu diiwaangashan yahay ka hor inta uusan bilaabin shaqada (Qodobka 25(1)).',
    },
    {
      en: 'Foreign-qualified practitioners follow additional steps — see the Foreign-Qualified Practitioners page.',
      so: 'Mihnadlayaasha shahaadada dibadda ka qaatay waxay raacaan tallaabooyin dheeraad ah — eeg bogga Mihnadlayaasha Shahaadada Dibadda.',
    },
  ],

  // The three domestic classes defined by Article 27 — parallel variants,
  // not stages. A specialist applicant must not be told to start at
  // provisional.
  classes: [
    {
      name: { en: 'Provisional registration — Art. 28', so: 'Diiwaangelin ku-meel-gaadh ah — Qodobka 28' },
      whoItsFor: {
        en: 'A graduate of a Council-recognised institution entering supervised practice.',
        so: 'Qof ka qalin-jabiyay machad uu Goluhu aqoonsan yahay oo bilaabaya shaqo kormeer lagu hayo.',
      },
      cap: { en: 'Maximum 2 years (Art. 28(6))', so: 'Ugu badnaan 2 sano (Qodobka 28(6))' },
      conditions: [
        { en: 'A qualification from an educational institution recognised by the Council.', so: 'Shahaado ka timid machad waxbarasho oo Goluhu aqoonsan yahay.' },
        { en: 'Employment under supervision for a designated, fixed period.', so: 'Shaqo kormeer hoostiisa ah oo muddo go’an oo la qeexay.' },
        { en: 'You may practise only at a health facility or institution approved by the Council (Art. 28(5)).', so: 'Waxaad ka shaqeyn kartaa oo keliya xarun ama machad uu Goluhu ansixiyay (Qodobka 28(5)).' },
      ],
    },
    {
      name: { en: 'Permanent (general) registration — Art. 29', so: 'Diiwaangelin joogto ah (guud) — Qodobka 29' },
      whoItsFor: {
        en: 'A professional who has completed provisional registration, the internship and the assessment.',
        so: 'Mihnadle dhammaystiray diiwaangelinta ku-meel-gaadhka ah, tababarka iyo qiimaynta.',
      },
      cap: { en: 'Valid 3 calendar years (Art. 29(4))', so: 'Ansax 3 sano oo jaandheer ah (Qodobka 29(4))' },
      conditions: [
        { en: 'An approved Diploma or Bachelor qualification from a Somali institution established by law, or a recognised foreign institution.', so: 'Shahaado Diblooma ama Bachelor ah oo la ansixiyay oo ka timid machad Soomaaliyeed oo sharci ku dhisan, ama machad dibadeed oo la aqoonsan yahay.' },
        { en: 'Previously registered provisionally and completed the designated period.', so: 'Hore loogu diiwaangeliyay si ku-meel-gaadh ah oo la dhammaystiray muddada la qeexay.' },
        { en: 'A 24-month full-time internship at a Council-approved hospital (Art. 29(3)).', so: 'Tababar 24 bilood ah oo waqti-buuxa ah oo isbitaal uu Goluhu ansixiyay ah (Qodobka 29(3)).' },
        { en: 'Pass the assessment of competent and safe practice (Art. 29(2)), and provide original testimony documents.', so: 'Ka gudub qiimaynta shaqo karti iyo badqab leh (Qodobka 29(2)), oo keen dukumiintiyada asalka ah.' },
      ],
    },
    {
      name: { en: 'Specialist registration — Art. 30', so: 'Diiwaangelin takhasus — Qodobka 30' },
      whoItsFor: {
        en: 'An already-registered professional holding a postgraduate qualification in a recognised specialty.',
        so: 'Mihnadle horey u diiwaangashan oo haysta shahaado sare oo takhasus la aqoonsan yahay.',
      },
      cap: { en: 'Recognised specialty registration cannot exceed 24 months (Art. 30(4))', so: 'Diiwaangelinta takhasuska la aqoonsan yahay kama badnaan karto 24 bilood (Qodobka 30(4))' },
      conditions: [
        { en: 'An approved postgraduate qualification in the determined specialty (Art. 30(1)(a)).', so: 'Shahaado sare oo la ansixiyay oo ku saabsan takhasuska la go’aamiyay (Qodobka 30(1)(a)).' },
        { en: 'You must already be registered, and the specialty must be recognised (Art. 30(2)(b)).', so: 'Waa inaad horey u diiwaangashan tahay, takhasuskana waa in la aqoonsan yahay (Qodobka 30(2)(b)).' },
        { en: 'Your background must directly relate to your previous education (Art. 30(2)(a)).', so: 'Asalkaagu waa inuu si toos ah ula xiriiraa waxbarashadaadii hore (Qodobka 30(2)(a)).' },
      ],
    },
  ],

  // ── The 8 official Article-25 requirements (SO authoritative) ──
  requirements: [
    {
      title: {
        so: 'Shahaado Jaamacadeed oo ka tasdiiqsan Wasaaradda Waxbarashada',
        en: 'University degree certificate, authenticated by the Ministry of Education',
      },
    },
    {
      title: {
        so: 'Warqadda Faahfaahinta Shaqsiga (CV)',
        en: 'Curriculum Vitae (CV)',
      },
    },
    {
      title: {
        so: 'Shahaadada Tababarka Jaamacadda (Internship)',
        en: 'Internship / university training completion certificate',
      },
    },
    {
      title: {
        so: 'Shahaado Dugsi Sare',
        en: 'Secondary school certificate',
      },
    },
    {
      title: {
        so: 'Warqadda Dambila’aanta',
        en: 'Certificate of good conduct (police clearance)',
      },
    },
    {
      title: {
        so: 'Galfayl',
        en: 'Application file / folder',
      },
    },
    {
      title: {
        so: 'Labo Sawir oo Teesara Ah',
        en: 'Two (2) passport-size photographs',
      },
    },
    {
      title: {
        so: 'Aqoonsi Qaran (Nira) ama Baasaboor',
        en: 'National identity card (NIRA) or passport',
      },
    },
  ],

  process: [
    {
      title: {
        en: 'Prepare your documents',
        so: 'Diyaari dukumiintiyadaada',
      },
      detail: {
        en: 'Gather all eight required documents above. Incomplete applications are not accepted.',
        so: 'Soo ururi dhammaan siddeeda dukumiinti ee kor ku xusan. Codsi aan dhamaystirneyn lama aqbali doono.',
      },
    },
    {
      title: {
        en: 'Submit your application and pay the fee',
        so: 'Gudbi codsigaaga oo bixi khidmadda',
      },
      detail: {
        en: 'Applications are submitted online through the NHPC portal, with the prescribed fee (Art. 25(1)).',
        so: 'Codsiyada waxaa online loo gudbiyaa iyada oo loo marayo bogga NHPC, iyadoo la bixinayo khidmadda la go’aamiyay (Qodobka 25(1)).',
      },
    },
    {
      title: {
        en: 'Assessment — interview and examination',
        so: 'Qiimayn — wareysi iyo imtixaan',
      },
      detail: {
        en: 'The Health Professionals Assessment Committee conducts the prescribed interview and examination (Art. 26(1)(b)).',
        so: 'Guddiga Qiimaynta Mihnadlayaasha Caafimaadka ayaa qabta wareysiga iyo imtixaanka la go’aamiyay (Qodobka 26(1)(b)).',
      },
    },
    {
      title: {
        en: 'Council decision within 30 days',
        so: 'Go’aanka Golaha 30 maalmood gudahood',
      },
      detail: {
        en: 'The Council approves or rejects the application within 30 days of receipt; reasons are given for any refusal (Art. 25(3), 25(5)).',
        so: 'Goluhu wuxuu ansixiyaa ama diidaa codsiga 30 maalmood gudahood; sababaha diidmadana waa la sheegaa (Qodobka 25(3), 25(5)).',
      },
    },
    {
      title: {
        en: 'Registration issued; complete your internship',
        so: 'Diiwaangelin la bixiyo; dhammee tababarkaaga',
      },
      detail: {
        en: 'Provisional registrants complete a 24-month full-time internship and pass assessment before permanent registration (Art. 28, 29(3)).',
        so: 'Kuwa diiwaangelinta ku-meel-gaadhka ah waxay dhammaystiraan tababar 24 bilood ah oo waqti-buuxa ah oo gudbaan qiimaynta ka hor diiwaangelinta joogtada ah (Qodobka 28, 29(3)).',
      },
    },
  ],

  // What a registered professional must keep doing — ongoing duties,
  // not application steps and not enforcement consequences.
  obligations: [
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
    {
      title: {
        en: 'Complete continuing professional development (CPD)',
        so: 'Dhammee horumarinta mihnadeed ee joogtada ah (CPD)',
      },
      detail: {
        en: 'CPD is a requirement for licence renewal (Art. 44(2)(c), 34(5)(b)(i)).',
        so: 'CPD waa shuruud loogu baahan yahay cusbooneysiinta shatiga (Qodobka 44(2)(c), 34(5)(b)(i)).',
      },
    },
    {
      title: {
        en: 'Renew your licence to practise every two years',
        so: 'Cusbooneysii shatigaaga shaqada labadii sanaba mar',
      },
      detail: {
        en: 'A licence to practise is valid for two calendar years and must be renewed before it expires (Art. 42(8)).',
        so: 'Shatiga shaqadu wuxuu ansax yahay laba sano oo jaandheer ah waana in la cusbooneysiiyaa ka hor inta uusan dhicin (Qodobka 42(8)).',
      },
    },
  ],

  // Figures are placeholders — set by the Council under Art. 23, TBC.
  fees: [
    {
      item: { en: 'Registration application fee', so: 'Khidmadda codsiga diiwaangelinta' },
      amount: { en: 'TBC', so: 'La sugayo' },
    },
    {
      item: { en: 'Examination fee', so: 'Khidmadda imtixaanka' },
      amount: { en: 'TBC', so: 'La sugayo' },
    },
    {
      item: { en: 'Certificate of registration issuance', so: 'Bixinta shahaadada diiwaangelinta' },
      amount: { en: 'TBC', so: 'La sugayo' },
    },
  ],
  feesNote: {
    en: 'Fees are set by the Council under Article 23 and published separately. Amounts marked TBC are not yet confirmed — do not pay any amount requested outside official NHPC channels.',
    so: 'Khidmadaha waxaa dejiya Golaha sida uu dhigayo Qodobka 23aad, waana si gooni ah loo daabacaa. Qadarrada lagu calaamadeeyay “La sugayo” weli lama xaqiijin — ha bixin wax lacag ah oo laga codsado meelo aan ahayn qaadadaha rasmiga ah ee NHPC.',
  },

  keyFacts: [
    {
      ref: { en: 'Article 25(3)', so: 'Qodobka 25aad (3)' },
      text: {
        en: 'The Council approves or rejects a complete application within 30 days.',
        so: 'Goluhu wuxuu ansixiyaa ama diidaa codsi dhamaystiran 30 maalmood gudahood.',
      },
    },
    {
      ref: { en: 'Article 26(1)(b)', so: 'Qodobka 26aad (1)(b)' },
      text: {
        en: 'A prescribed interview and examination are required.',
        so: 'Waxaa loo baahan yahay wareysi iyo imtixaan la go’aamiyay.',
      },
    },
    {
      ref: { en: 'Article 29(3)', so: 'Qodobka 29aad (3)' },
      text: {
        en: 'A 24-month full-time internship is required for permanent registration.',
        so: 'Diiwaangelinta joogtada ah waxaa loo baahan yahay tababar 24 bilood ah oo waqti-buuxa ah.',
      },
    },
    {
      ref: { en: 'Article 29(4)', so: 'Qodobka 29aad (4)' },
      text: {
        en: 'General (permanent) registration is valid for three calendar years.',
        so: 'Diiwaangelinta guud (joogtada ah) waxay ansax tahay saddex sano oo jaandheer ah.',
      },
    },
    {
      ref: { en: 'Article 39', so: 'Qodobka 39aad' },
      text: {
        en: 'Practising without registration is an offence — a fine of up to US$2,000.',
        so: 'Ka-shaqaynta iyada oo aan diiwaangelin lahayn waa dembi — ganaax ilaa US$2,000.',
      },
    },
  ],

  documentIds: ['hpr-req', 'act-lr31'],

  faqs: [
    {
      question: { en: 'How long does registration take?', so: 'Diiwaangelintu intee bay qaadanaysaa?' },
      answer: {
        en: 'The Council decides within 30 days of receiving a complete application (Art. 25(3)). Incomplete applications are not accepted, so submit every required document.',
        so: 'Goluhu wuxuu go’aan gaadhaa 30 maalmood gudahood marka la helo codsi dhamaystiran (Qodobka 25(3)). Codsiyada aan dhamaystirneyn lama aqbalo, sidaas darteed soo gudbi dhammaan dukumiintiyada loo baahan yahay.',
      },
    },
    {
      question: { en: 'Do I have to sit an examination?', so: 'Ma waajib baa inaan galo imtixaan?' },
      answer: {
        en: 'Yes. A prescribed interview and examination conducted by the Council are a registration requirement (Art. 26(1)(b)).',
        so: 'Haa. Wareysi iyo imtixaan la go’aamiyay oo uu qabto Goluhu waa shuruud diiwaangelin (Qodobka 26(1)(b)).',
      },
    },
    {
      question: { en: 'How long is my registration valid?', so: 'Diiwaangelintaydu intee bay ansax tahay?' },
      answer: {
        en: 'General registration is valid for three calendar years (Art. 29(4)). Renew before it expires to keep practising lawfully.',
        so: 'Diiwaangelinta guud waxay ansax tahay saddex sano oo jaandheer ah (Qodobka 29(4)). Cusbooneysii ka hor inta aysan dhicin si aad si sharci ah ugu sii shaqayso.',
      },
    },
    {
      question: { en: 'I qualified abroad — where do I apply?', so: 'Dibadda ayaan wax ka bartay — xaggee baan ka codsadaa?' },
      answer: {
        en: 'Foreign-qualified practitioners follow additional steps and document authentication under Articles 36–38 and 60. See the Foreign-Qualified Practitioners page.',
        so: 'Mihnadlayaasha shahaadada dibadda ka qaatay waxay raacaan tallaabooyin dheeraad ah iyo tasdiiqid dukumiinti sida ku cad Qodobbada 36–38 iyo 60. Eeg bogga Mihnadlayaasha Shahaadada Dibadda.',
      },
    },
    {
      question: {
        en: 'What happens if I practise without registering?',
        so: 'Maxaa dhacaya haddii aan shaqeeyo iyada oo aan is-diiwaangelin?',
      },
      answer: {
        en: 'It is an offence under Article 39, carrying a fine of up to US$2,000. Six months after the Act commenced, no unregistered professional may provide health services (Art. 72).',
        so: 'Waa dembi sida uu dhigayo Qodobka 39aad, oo wata ganaax ilaa US$2,000. Lix bilood ka dib markii sharcigu dhaqan-galay, mihnadle aan diiwaangashaneyn ma bixin karo adeegyo caafimaad (Qodobka 72).',
      },
    },
  ],

  governingArticles: {
    en: "Articles 24–30, 39 and 72",
    so: "Qodobbada 24–30, 39 iyo 72",
  },

  applyNote: {
    en: 'Applications are submitted through the NHPC portal. This website does not process applications or payments.',
    so: 'Codsiyada waxaa loo gudbiyaa bogga NHPC. Websaydkani ma socodsiiyo codsiyo ama lacag-bixinno.',
  },
};

import type { RegulationContent } from '@/content/types';

// Foreign-Qualified Practitioners — Articles 36–38 and 60.
// Three PARALLEL registration classes with different caps and conditions —
// a foreign applicant chooses the one that fits, they are not stages.
export const professionalsForeign: RegulationContent = {
  slug: 'professionals/foreign',
  title: {
    en: 'Foreign-Qualified Practitioners',
    so: 'Mihnadlayaasha Shahaadada Dibadda',
  },
  intro: {
    en: 'Health professionals who qualified abroad must be registered and licensed by NHPC before working in Somalia. Articles 36–38 and 60 of the NHPC Act Lr.31.',
    so: 'Mihnadlayaasha caafimaadka ee shahaadada dibadda ka qaatay waa in NHPC diiwaangeliyo oo shati siiyo ka hor inta aysan ka shaqeyn Soomaaliya. Qodobbada 36–38 iyo 60 ee Sharciga Lr.31.',
  },
  docRef: 'NHPC Act Lr.31 · Articles 36–38, 60',

  whoApplies: [
    {
      en: 'Health professionals who obtained their qualification outside Somalia and wish to practise here (Art. 36(1)).',
      so: 'Mihnadlayaasha caafimaadka ee shahaadadooda ka heshay dibadda Soomaaliya oo doonaya inay halkan ka shaqeeyaan (Qodobka 36(1)).',
    },
    {
      en: 'By law, foreigners are forbidden from working as a health professional until they are registered and licensed by the Council (Art. 24(3)).',
      so: 'Sharci ahaan, ajaanibtu way ka mamnuuc yihiin inay ka shaqeeyaan mihnad caafimaad ilaa Goluhu diiwaangeliyo oo shati siiyo (Qodobka 24(3)).',
    },
  ],

  // Three parallel classes — never render as a sequence.
  classes: [
    {
      name: { en: 'Temporary (provisional) registration — Art. 37', so: 'Diiwaangelin ku-meel-gaadh ah — Qodobka 37' },
      whoItsFor: {
        en: 'A foreign professional serving at the request of the Somali government or a health facility permitted to employ foreigners.',
        so: 'Mihnadle ajnabi ah oo u adeegaya codsi ka yimid dowladda Soomaaliya ama xarun caafimaad oo loo ogolyahay inay shaqaalaysiiso ajaanib.',
      },
      cap: { en: 'Maximum 6 months (Art. 37(3))', so: 'Ugu badnaan 6 bilood (Qodobka 37(3))' },
      conditions: [
        { en: 'Legal residence in the Federal Republic of Somalia.', so: 'Deganaansho sharci ah oo Jamhuuriyadda Federaalka Soomaaliya ah.' },
        { en: 'Sufficient knowledge and training; passed the prescribed interview and examination.', so: 'Aqoon iyo tababar ku filan; ka gudubka wareysiga iyo imtixaanka la go’aamiyay.' },
        { en: 'Certificate of good standing from the registration body in your country of registration.', so: 'Warqad xaalad wanaagsan oo ka timid hay’adda diiwaangelinta dalka aad ka diiwaangashan tahay.' },
        { en: 'Proficiency in Arabic or English, or a language for which translators are available.', so: 'Aqoon Carabi ama Ingiriisi ah, ama luqad turjumaano loo heli karo.' },
        { en: 'Renewable after six months’ continuous employment at a Standard A or B facility, with a supervisor’s letter (Art. 37(5)).', so: 'Waa la cusbooneysiin karaa ka dib lix bilood oo shaqo joogto ah oo xarun Heer A ama B ah, iyadoo la keenayo warqad kormeeraha (Qodobka 37(5)).' },
      ],
    },
    {
      name: { en: 'Limited registration — Art. 38', so: 'Diiwaangelin xaddidan — Qodobka 38' },
      whoItsFor: {
        en: 'A foreign professional who has already held provisional registration and applies through a licensed health facility.',
        so: 'Mihnadle ajnabi ah oo hore u haystay diiwaangelin ku-meel-gaadh ah oo ka codsanaya xarun caafimaad oo shati leh.',
      },
      cap: { en: 'Maximum 12 months, renewable on facility application (Art. 38(5),(6))', so: 'Ugu badnaan 12 bilood, waana la cusbooneysiin karaa marka xaruntu codsato (Qodobka 38(5),(6))' },
      conditions: [
        { en: 'Legal residence in Somalia.', so: 'Deganaansho sharci ah oo Soomaaliya ah.' },
        { en: 'Previously registered provisionally.', so: 'Hore loogu diiwaangeliyay si ku-meel-gaadh ah.' },
        { en: 'Passed the prescribed examination conducted by the Council.', so: 'Ka gudubka imtixaanka la go’aamiyay ee uu Goluhu qabto.' },
        { en: 'An application submitted by a licensed health facility.', so: 'Codsi ay soo gudbiso xarun caafimaad oo shati leh.' },
        { en: 'Equivalent registration and good standing in your country of origin.', so: 'Diiwaangelin u dhiganta iyo xaalad wanaagsan oo dalkaaga asalka ah.' },
        { en: 'You may not hold limited registration in more than one specialty (Art. 38(3)).', so: 'Ma haysan kartid diiwaangelin xaddidan oo ka badan hal takhasus (Qodobka 38(3)).' },
      ],
    },
    {
      name: { en: 'Full registration — Art. 36', so: 'Diiwaangelin buuxda — Qodobka 36' },
      whoItsFor: {
        en: 'A foreign professional registering on the same basis as a domestic professional, with a fully authenticated qualification.',
        so: 'Mihnadle ajnabi ah oo isku diiwaangelinaya sida mihnadlaha gudaha, isagoo haysta shahaado si buuxda loo tasdiiqay.',
      },
      cap: { en: 'Per the class granted — general registration is valid 3 years (Art. 29(4))', so: 'Sida nooca la bixiyo — diiwaangelinta guud waxay ansax tahay 3 sano (Qodobka 29(4))' },
      conditions: [
        { en: 'Legal residence in Somalia.', so: 'Deganaansho sharci ah oo Soomaaliya ah.' },
        { en: 'A primary qualification from a recognised institution.', so: 'Shahaado aasaasi ah oo ka timid machad la aqoonsan yahay.' },
        { en: 'Passed the prescribed examination.', so: 'Ka gudubka imtixaanka la go’aamiyay.' },
        { en: 'Qualification authenticated under Article 60.', so: 'Shahaadada oo la tasdiiqay sida uu dhigayo Qodobka 60.' },
        { en: 'You are supervised by, and under the responsibility of, the health facility employing you (Art. 36(2)).', so: 'Waxaa ku kormeeraya oo mas’uul ka ah xarunta caafimaadka ee ku shaqaalaysiisay (Qodobka 36(2)).' },
      ],
    },
  ],

  requirements: [
    { title: { so: 'Deganaansho sharci ah oo Soomaaliya ah', en: 'Legal residence in Somalia' } },
    {
      title: {
        so: 'Shahaado aasaasi ah oo ka timid machad la aqoonsan yahay',
        en: 'A primary qualification from a recognised institution',
      },
    },
    {
      title: {
        so: 'Shahaadada oo ku qoran Ingiriisi ama Carabi — haddii kale, loo turjumo Soomaali, Ingiriisi ama Carabi',
        en: 'The qualification in English or Arabic — otherwise translated into Somali, English or Arabic',
      },
    },
    {
      title: {
        so: 'Shahaadada oo ay tasdiiqeen oo shaabadeeyeen Wasaaradda Waxbarashada Sare iyo Wasaaradda Arrimaha Dibadda ee dalka bixiyay',
        en: 'The qualification authenticated and stamped by the Ministry of Higher Education and the foreign ministry of the awarding country',
      },
    },
    {
      title: {
        so: 'Tasdiiq iyo shaabad ka timid Safaaradda Soomaaliya ee dalka shahaadada bixiyay',
        en: 'Authentication and stamp from the Somali Embassy in the country of award',
      },
    },
    {
      title: {
        so: 'Xaqiijin ka timid Wasaaradda Dhaqanka iyo Waxbarashada Sare ee Soomaaliya',
        en: 'Verification by the Ministry of Culture and Higher Education of Somalia',
      },
    },
    {
      title: {
        so: 'Ka gudubka imtixaanka la go’aamiyay',
        en: 'Passing the prescribed examination',
      },
    },
    {
      title: {
        so: 'Warqad xaalad wanaagsan oo ka timid hay’adda diiwaangelinta mihnadeed ee aad ka diiwaangashan tahay',
        en: 'A certificate of good standing from the professional registration body where you are registered',
      },
    },
  ],

  process: [
    {
      title: { en: 'Authenticate your qualification first', so: 'Marka hore tasdiiq shahaadadaada' },
      detail: {
        en: 'Complete the Article 60 authentication chain before you apply — awarding country’s ministries, the Somali Embassy, and the Somali Ministry of Culture and Higher Education.',
        so: 'Dhammee silsiladda tasdiiqa ee Qodobka 60 ka hor inta aadan codsan — wasaaradaha dalka bixiyay, Safaaradda Soomaaliya, iyo Wasaaradda Dhaqanka iyo Waxbarashada Sare ee Soomaaliya.',
      },
    },
    {
      title: { en: 'Submit your application and fees', so: 'Gudbi codsigaaga iyo khidmadaha' },
      detail: {
        en: 'Apply to the Council for the class of registration that fits your situation.',
        so: 'U codso Golaha nooca diiwaangelinta ku habboon xaaladdaada.',
      },
    },
    {
      title: { en: 'Interview and examination', so: 'Wareysi iyo imtixaan' },
      detail: {
        en: 'Sit the prescribed interview and examination arranged by the Council (Art. 36(1)(c), 37(2)(c)).',
        so: 'Gal wareysiga iyo imtixaanka la go’aamiyay ee uu Goluhu qabanqaabiyo (Qodobka 36(1)(c), 37(2)(c)).',
      },
    },
    {
      title: { en: 'Council decision — registration issued', so: 'Go’aanka Golaha — diiwaangelin la bixiyo' },
      detail: {
        en: 'The Council issues the applicable class of registration, or gives reasons for refusal (Art. 37(4)).',
        so: 'Goluhu wuxuu bixiyaa nooca diiwaangelinta khuseeya, ama wuxuu sheegaa sababaha diidmada (Qodobka 37(4)).',
      },
    },
  ],

  obligations: [
    {
      title: {
        en: 'Practise under the responsibility of your employing facility',
        so: 'Ka shaqee mas’uuliyadda xarunta ku shaqaalaysiisay',
      },
      detail: {
        en: 'A registered foreign professional is supervised by, and under the responsibility of, the facility employing them (Art. 36(2)).',
        so: 'Mihnadlaha ajnabiga ah ee diiwaangashan waxaa kormeera oo mas’uul ka ah xarunta shaqaalaysiisay (Qodobka 36(2)).',
      },
    },
    {
      title: {
        en: 'Stay within your registration’s cap and renew as required',
        so: 'Ku sii jir muddada diiwaangelintaada oo cusbooneysii sida loo baahan yahay',
      },
      detail: {
        en: 'Temporary registration cannot exceed six months (Art. 37(3)); limited registration cannot exceed twelve months and is renewed on the facility’s application (Art. 38(5),(6)).',
        so: 'Diiwaangelinta ku-meel-gaadhka ah kama badnaan karto lix bilood (Qodobka 37(3)); diiwaangelinta xaddidan kama badnaan karto laba iyo toban bilood waana la cusbooneysiiyaa marka xaruntu codsato (Qodobka 38(5),(6)).',
      },
    },
    {
      title: {
        en: 'Comply with any terms the Council sets, including supervision',
        so: 'U hoggaanso shuruudaha uu Goluhu dejiyo, oo ay ku jirto kormeerka',
      },
      detail: {
        en: 'The Council may specify the acts you may perform and the supervision required (Art. 38(4)).',
        so: 'Goluhu wuxuu qeexi karaa falalka aad qaban karto iyo kormeerka loo baahan yahay (Qodobka 38(4)).',
      },
    },
  ],

  fees: [
    {
      item: { en: 'Registration and licensing fee (foreign professionals)', so: 'Khidmadda diiwaangelinta iyo shatiga (mihnadlayaasha ajnabiga)' },
      amount: { en: 'TBC', so: 'La sugayo' },
    },
    { item: { en: 'Examination fee', so: 'Khidmadda imtixaanka' }, amount: { en: 'TBC', so: 'La sugayo' } },
  ],
  feesNote: {
    en: 'Fees are set by the Council under Article 23 and published separately. Amounts marked TBC are not yet confirmed — do not pay any amount requested outside official NHPC channels.',
    so: 'Khidmadaha waxaa dejiya Golaha sida uu dhigayo Qodobka 23aad, waana si gooni ah loo daabacaa. Qadarrada lagu calaamadeeyay “La sugayo” weli lama xaqiijin — ha bixin wax lacag ah oo laga codsado meelo aan ahayn qaadadaha rasmiga ah ee NHPC.',
  },

  keyFacts: [
    {
      ref: { en: 'Article 24(3)', so: 'Qodobka 24aad (3)' },
      text: {
        en: 'Foreigners may not work as a health professional until registered and licensed by the Council.',
        so: 'Ajaanibtu kama shaqeyn karaan mihnad caafimaad ilaa Goluhu diiwaangeliyo oo shati siiyo.',
      },
    },
    {
      ref: { en: 'Article 37(3)', so: 'Qodobka 37aad (3)' },
      text: {
        en: 'Temporary registration cannot exceed six months.',
        so: 'Diiwaangelinta ku-meel-gaadhka ah kama badnaan karto lix bilood.',
      },
    },
    {
      ref: { en: 'Article 38(5)', so: 'Qodobka 38aad (5)' },
      text: {
        en: 'Limited registration cannot exceed twelve months.',
        so: 'Diiwaangelinta xaddidan kama badnaan karto laba iyo toban bilood.',
      },
    },
    {
      ref: { en: 'Article 60', so: 'Qodobka 60aad' },
      text: {
        en: 'Foreign qualifications must be in English or Arabic and authenticated by the awarding country and the Somali Embassy.',
        so: 'Shahaadooyinka dibaddu waa inay ku qoran yihiin Ingiriisi ama Carabi oo ay tasdiiqaan dalka bixiyay iyo Safaaradda Soomaaliya.',
      },
    },
  ],

  documentIds: ['hpr-req', 'act-lr31'],

  faqs: [
    {
      question: { en: 'Which class applies to me?', so: 'Nooceebaa i khuseeya?' },
      answer: {
        en: 'Compare the three classes above. In short: temporary registration (Art. 37) if you are serving at the request of the government or a facility permitted to employ foreigners, capped at six months; limited registration (Art. 38) if you have already held provisional registration and a licensed facility applies for you, capped at twelve months; full registration (Art. 36) if you meet the Article 36 requirements with an Article 60 authenticated qualification.',
        so: 'Isbarbardhig saddexda nooc ee kor ku xusan. Kooban: diiwaangelin ku-meel-gaadh ah (Qodobka 37) haddii aad u adeegayso codsi ka yimid dowladda ama xarun loo ogolyahay inay ajaanib shaqaalaysiiso, oo ugu badnaan lix bilood; diiwaangelin xaddidan (Qodobka 38) haddii aad hore u haysatay diiwaangelin ku-meel-gaadh ah oo ay xarun shati leh kuu codsato, oo ugu badnaan laba iyo toban bilood; diiwaangelin buuxda (Qodobka 36) haddii aad buuxiso shuruudaha Qodobka 36 oo aad haysato shahaado la tasdiiqay sida Qodobka 60.',
      },
    },
    {
      question: {
        en: 'Can I work while my application is being processed?',
        so: 'Ma shaqeyn karaa inta codsigayga la eegayo?',
      },
      answer: {
        en: 'No. By law foreigners are forbidden from working as a health professional until they are registered and licensed by the Council (Art. 24(3)).',
        so: 'Maya. Sharci ahaan ajaanibtu way ka mamnuuc yihiin inay ka shaqeeyaan mihnad caafimaad ilaa Goluhu diiwaangeliyo oo shati siiyo (Qodobka 24(3)).',
      },
    },
    {
      question: {
        en: 'My certificate is not in English or Arabic — what do I do?',
        so: 'Shahaadadaydu kuma qoran Ingiriisi ama Carabi — maxaan sameeyaa?',
      },
      answer: {
        en: 'Have it translated into Somali, English or Arabic, and ensure it still meets the Article 60(1) authentication requirements (Art. 60(2)).',
        so: 'U turjun Soomaali, Ingiriisi ama Carabi, oo hubi inay wali buuxiso shuruudaha tasdiiqa ee Qodobka 60(1) (Qodobka 60(2)).',
      },
    },
    {
      question: {
        en: 'Can I hold limited registration in two specialties?',
        so: 'Ma haysan karaa diiwaangelin xaddidan oo laba takhasus ah?',
      },
      answer: {
        en: 'No. A foreign professional may not hold limited registration in the same health profession for more than one specialty (Art. 38(3)).',
        so: 'Maya. Mihnadlaha ajnabiga ah ma haysan karo diiwaangelin xaddidan oo isku mihnad caafimaad ah in ka badan hal takhasus (Qodobka 38(3)).',
      },
    },
  ],

  governingArticles: {
    en: "Articles 24(3), 36–38 and 60",
    so: "Qodobbada 24(3), 36–38 iyo 60",
  },

  applyLabel: { en: 'Apply as a Foreign Practitioner', so: 'Codso Mihnadle Ajnabi ahaan' },
  applyNote: {
    en: 'Applications are submitted through the NHPC portal. This website does not process applications or payments.',
    so: 'Codsiyada waxaa loo gudbiyaa bogga NHPC. Websaydkani ma socodsiiyo codsiyo ama lacag-bixinno.',
  },
};

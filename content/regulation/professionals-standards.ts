import type { RegulationContent } from '@/content/types';

// Standards & Code of Conduct — NHPC / COC / 01.
//
// This page SUMMARISES the Code. It does not reproduce it: the PDF is the
// authority and is linked from the Documents section. Each principle below
// is one or two sentences — if you find yourself restating the document,
// stop and link to it instead.
//
// The Code is Somali-only, so the Somali principle names are the official
// text and the English is a working translation.
//
// Contract fit: no requirements (nothing is submitted), no process (there
// is nothing to apply for — hence no Apply CTA), no fees. The seven
// principles are ongoing duties of a registered professional, which is
// exactly what `obligations` means.
export const professionalsStandards: RegulationContent = {
  slug: 'professionals/standards',
  title: {
    en: 'Standards & Code of Conduct',
    so: 'Heerarka & Xeerka Anshax Wanaagga',
  },
  intro: {
    en: 'The Code of Conduct binds every health professional registered with NHPC. Its seven principles are summarised below — the Code itself is the authority and should be read in full.',
    so: 'Xeerka Anshax Wanaaggu wuxuu ku waajib yahay mihnadle kasta oo caafimaad oo ka diiwaangashan NHPC. Toddobada mabda’ ee uu ka kooban yahay hoos ayaa lagu soo koobay — Xeerka laftiisu waa isha rasmiga ah, waana in la akhriyo oo dhan.',
  },
  docRef: 'NHPC / COC / 01',

  whoApplies: [
    {
      en: 'Every health professional registered with NHPC, in every setting, whatever their cadre.',
      so: 'Mihnadle kasta oo caafimaad oo ka diiwaangashan NHPC, goob kasta oo uu joogo, heer kastoo uu yahay.',
    },
    {
      en: 'Employers, who use the Code to understand what to expect of registered staff and what to support them with.',
      so: 'Shaqo-bixiyeyaasha, oo Xeerka ku fahmaya waxa ay ka filan karaan shaqaalaha diiwaangashan iyo waxa ay ku taageeraan.',
    },
    {
      en: 'The public, who are entitled to know the standard every registered professional is held to.',
      so: 'Dadweynaha, oo xaq u leh inay ogaadaan heerka laga rabo mihnadle kasta oo diiwaangashan.',
    },
  ],

  // The seven principles, summarised. Somali names are the official text.
  obligations: [
    {
      title: {
        so: 'U howlgalidda si bad-qab iyo anshax leh',
        en: 'Practise safely and ethically',
      },
      detail: {
        en: 'Provide only the care you are trained and competent to give, know the limits of your competence, and ask for help when you need it. Never provide care while under the influence of alcohol, khat or other intoxicants. Report anything — yours or a colleague’s — that harmed or could harm a patient.',
        so: 'Bixi oo keliya daryeelka aad u tababaran tahay oo aad karti u leedahay, ogow xadka aqoontaada, oo weydiiso caawimaad marka aad u baahato. Marnaba ha bixin daryeel adigoo isticmaalay khamri, jaad ama maandooriye kale. Ka warbixi wax kasta — kaaga ama kii shaqo-wadaagaaga — oo bukaan waxyeeleeyay ama waxyeelayn kara.',
      },
    },
    {
      title: {
        so: 'Xafidda xuquuqda bukaanka',
        en: 'Safeguard patients’ rights',
      },
      detail: {
        en: 'Always act in the patient’s best interest. Treat them with dignity and compassion, respect their culture, religion, gender, age and particular needs, obtain valid consent before treatment, respect a refusal of care, and keep their information confidential.',
        so: 'Had iyo jeer u shaqee sida ugu wanaagsan danta bukaanka. Kula dhaqan sharaf iyo naxariis, ixtiraam dhaqankooda, diintooda, jinsigooda, da’dooda iyo baahiyahooda gaarka ah, hel ogolaansho sugan ka hor daaweynta, ixtiraam diidmada daryeelka, oo ilaali xogtooda.',
      },
    },
    {
      title: {
        so: 'Si hufan u shaqaynta',
        en: 'Work collaboratively',
      },
      detail: {
        en: 'Recognise and respect the roles and expertise of colleagues, other professions and institutions. Work openly with patients, their carers and your team, honour your commitments, and use the resources of the workplace as they were intended.',
        so: 'Aqoonso oo ixtiraam kaalinta iyo khibradda asxaabtaada, takhasusyada kale iyo hay’adaha. Si furan ula shaqee bukaanka, daryeelayaashooda iyo kooxdaada, ka dhabee ballamahaaga, oo agabka goobta shaqada u isticmaal sidii loogu talagalay.',
      },
    },
    {
      title: {
        so: 'La xiriiridda si daah furan',
        en: 'Communicate openly',
      },
      detail: {
        en: 'Speak to patients and their families respectfully, honestly and in language they can understand, taking account of age, culture and capacity. Explain the treatment and obtain consent before proceeding, keep accurate records, escalate any change or concern to a senior immediately, and never claim skills or results you cannot support.',
        so: 'La hadal bukaanka iyo ehelkooda si ixtiraam, daacadnimo iyo luqad ay fahmi karaan, adigoo tixgelinaya da’da, dhaqanka iyo garaadka. U sharax daaweynta oo hel ogolaansho ka hor, keydi xog sax ah, isla markiiba u gudbi masuul sare isbeddel ama walaac kasta, oo marnaba ha sheegan xirfad ama natiijo aadan caddayn karin.',
      },
    },
    {
      title: {
        so: 'Mudnaan-siinta horumarinta tayada',
        en: 'Prioritise quality improvement',
      },
      detail: {
        en: 'Keep your knowledge current, take part in continuing professional development, and look for ways to raise the quality and safety of the care you give. Help teach colleagues, and refresh your skills — under supervision if needed — after a long absence from practice.',
        so: 'Aqoontaada ku hay waqtiga, ka qayb qaado joogteynta horumarinta xirfadda (CPD), oo raadi habab aad sare ugu qaaddo tayada iyo bad-qabka daryeelka aad bixiso. Ka caawi waxbaridda asxaabtaada, oo cusbooneysii xirfaddaada — kormeer hoostiis haddii loo baahdo — marka aad fasax dheer ka soo noqoto.',
      },
    },
    {
      title: {
        so: 'Ka hortagga xad-gudubyada',
        en: 'Prevent abuse',
      },
      detail: {
        en: 'Never take part in — or tolerate — violence, abuse, neglect or exploitation of a patient, their family or a colleague. Never engage in sexual misconduct or an inappropriate personal relationship with a patient. Report any such incident to NHPC and your employer at once, and cooperate fully with any investigation.',
        so: 'Marnaba ha ka qayb qaadan — hana u dul qaadan — rabshad, xad-gudub, dayacaad ama ka-faa’iidaysi bukaan, ehelkiisa ama shaqo-wadaag. Marnaba ha samayn xad-gudub galmo ama xiriir shaqsi ah oo aan habboonayn. Dhacdo kasta oo noocaas ah isla markiiba u sheeg NHPC iyo shaqo-bixiyahaaga, oo si buuxda ula shaqee baaritaan kasta.',
      },
    },
    {
      title: {
        so: 'U howlgal si sharaf ku dheehan tahay',
        en: 'Practise with integrity',
      },
      detail: {
        en: 'Never provide excessive or unnecessary services. Never accept or offer payment for referring a patient, and never refer to a service you or your family profit from. Never advertise falsely or misleadingly, never offer gifts or discounts to attract patients (Art. 62), and never use patients as testimonials.',
        so: 'Marnaba ha bixin adeeg xad-dhaaf ah ama aan loo baahnayn. Marnaba ha aqbalin ama ha bixin lacag gudbinta bukaan darteed, hana u gudbin adeeg aad adiga ama qoyskaagu faa’iido ka helayaan. Marnaba ha xayaysiin si been-abuur ah ama marin-habaabin ah, ha bixin hadiyado ama qiimo-dhimis si aad bukaanno u soo jiidato (Qodobka 62), hana u isticmaalin bukaanada marag-fur.',
      },
    },
  ],

  keyFacts: [
    {
      ref: { en: 'Article 17(1)(b)', so: 'Qodobka 17aad (1)(b)' },
      text: {
        en: 'The Health Professional Disciplinary Committee deals with allegations of misconduct.',
        so: 'Guddiga Edbinta Mihnadlayaasha Caafimaadka ayaa qabta eedeymaha xad-gudubka.',
      },
    },
    {
      ref: { en: 'Article 40', so: 'Qodobka 40aad' },
      text: {
        en: 'Offences by a registered professional — a fine of up to US$1,000, plus any punishment under Somali Criminal Law.',
        so: 'Dembiyada mihnadlaha diiwaangashan — ganaax ilaa US$1,000, iyo ciqaab kasta oo Sharciga Ciqaabta Soomaaliyeed ah.',
      },
    },
    {
      ref: { en: 'Article 40(8)', so: 'Qodobka 40aad (8)' },
      text: {
        en: 'Providing care beyond the scope of practice permitted for your registration is an offence.',
        so: 'Bixinta daryeel ka baxsan xadka shaqada ee diiwaangelintaadu ogolaato waa dembi.',
      },
    },
    {
      ref: { en: 'Article 46', so: 'Qodobka 46aad' },
      text: {
        en: 'A licence to practise is cancelled for professional misconduct — after you are given an opportunity to be heard.',
        so: 'Shatiga shaqada waa la buriyaa xad-gudub mihnadeed awgiis — ka dib marka lagu siiyo fursad aad ku hadasho.',
      },
    },
    {
      ref: { en: 'Article 62', so: 'Qodobka 62aad' },
      text: {
        en: 'False or misleading advertising — US$1,000 for an individual, US$2,000 for a facility.',
        so: 'Xayaysiis been-abuur ah ama marin-habaabin ah — US$1,000 shaqsiga, US$2,000 xarunta.',
      },
    },
  ],

  documentIds: ['code-of-conduct', 'act-lr31'],

  faqs: [
    {
      question: {
        en: 'Is this page the Code?',
        so: 'Boggani ma Xeerkii baa?',
      },
      answer: {
        en: 'No. This page is a summary. The Code of Conduct (NHPC / COC / 01) is the authority — download it from Documents below and read it in full. Where this summary differs from the Code, the Code governs.',
        so: 'Maya. Boggani waa soo-koobid. Xeerka Anshax Wanaagga (NHPC / COC / 01) ayaa ah isha rasmiga ah — ka soo deji Dukumiintiga hoose oo akhri oo dhan. Halka soo-koobankani ku kala duwan yahay Xeerka, Xeerka ayaa mudan.',
      },
    },
    {
      question: {
        en: 'What happens if I breach the Code?',
        so: 'Maxaa dhacaya haddii aan Xeerka ku xadgudbo?',
      },
      answer: {
        en: 'The Code is read alongside the Act. A breach can lead to disciplinary action by the Health Professional Disciplinary Committee (Art. 17(1)(b)) — including suspension or cancellation of your registration and licence (Art. 32, 46) — and to fines under Article 40. You are given an opportunity to be heard before any cancellation (Art. 32(3), 46(3)).',
        so: 'Xeerka waxaa la akhriyaa la jaan-qaadka Sharciga. Xad-gudubku wuxuu keeni karaa tallaabo edbin oo uu qaado Guddiga Edbinta Mihnadlayaasha Caafimaadka (Qodobka 17(1)(b)) — oo ay ku jirto hakinta ama burinta diiwaangelintaada iyo shatigaaga (Qodobka 32, 46) — iyo ganaaxyo sida Qodobka 40aad. Waxaa lagu siinayaa fursad aad ku hadasho ka hor burin kasta (Qodobka 32(3), 46(3)).',
      },
    },
    {
      question: {
        en: 'A colleague is not following the Code. What should I do?',
        so: 'Shaqo-wadaag Xeerka ma raacayo. Maxaan sameeyaa?',
      },
      answer: {
        en: 'The Code requires you to report it — to a senior at your workplace and to NHPC. Anyone, including a professional, can file a complaint, or call the 24/7 line on 2376.',
        so: 'Xeerku wuxuu kaa doonayaa inaad soo sheegto — masuul sare oo goobta shaqada ah iyo NHPC. Qof kasta, mihnadlaha oo kale, wuu gudbin karaa cabasho, ama wuxuu wici karaa khadka 24/7 ee 2376.',
      },
    },
  ],

  governingArticles: {
    en: 'Articles 17, 32, 40, 46 and 62',
    so: 'Qodobbada 17, 32, 40, 46 iyo 62',
  },
};

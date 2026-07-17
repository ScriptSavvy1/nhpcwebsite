import type { RegulationContent } from '@/content/types';

// Inspection Regime — Articles 51–52.
// NOT an application: a facility does not apply to be inspected, it is
// subject to inspection. Hence no `process` (and therefore no Apply CTA),
// no `requirements` (nothing is submitted), and no `fees` (Article 23
// authorises no inspection fee — inventing one to fill the section would
// be worse than omitting it).
export const facilitiesInspection: RegulationContent = {
  slug: 'facilities/inspection',
  title: {
    en: 'Inspection Regime',
    so: 'Nidaamka Kormeerka',
  },
  intro: {
    en: 'Every health facility is inspected before licensing and at least every six months thereafter. Articles 51–52 of the NHPC Act Lr.31.',
    so: 'Xarun kasta oo caafimaad waa la baaraa ka hor liisanka, ka dibna ugu yaraan lix bilood kasta. Qodobbada 51–52 ee Sharciga Lr.31.',
  },
  docRef: 'NHPC Act Lr.31 · Articles 51–52',

  whoApplies: [
    {
      en: 'Every licensed health facility, and any premises the Council believes are being used to provide health services (Art. 51(1),(4)).',
      so: 'Xarun kasta oo caafimaad oo shati leh, iyo goob kasta oo Goluhu aaminsan yahay in loo isticmaalayo bixinta adeegyada caafimaadka (Qodobka 51(1),(4)).',
    },
    {
      en: 'Facility owners, managers and staff present during an inspection (Art. 51(7)).',
      so: 'Milkiilayaasha xarumaha, maamulayaasha iyo shaqaalaha joogo inta lagu jiro kormeerka (Qodobka 51(7)).',
    },
  ],

  // No `requirements`, `process` or `fees` — see the note above.

  obligations: [
    {
      title: {
        en: 'Admit inspectors and give reasonable assistance',
        so: 'Ogolow kormeerayaasha oo sii caawimaad macquul ah',
      },
      detail: {
        en: 'Inspectors have full authority to enter and inspect a functioning health facility, with respect and dignity (Art. 51(4)). You must give the assistance they reasonably require (Art. 51(7)(b)).',
        so: 'Kormeerayaashu waxay awood buuxda u leeyihiin inay galaan oo baaraan xarun caafimaad oo shaqeynaysa, si ixtiraam iyo sharaf leh (Qodobka 51(4)). Waa inaad siisaa caawimaadda ay si macquul ah u doonayaan (Qodobka 51(7)(b)).',
      },
    },
    {
      title: {
        en: 'Keep licences and records available for inspection',
        so: 'Hay liisannada iyo diiwaannada oo diyaar u ah kormeerka',
      },
      detail: {
        en: 'Inspectors may examine the practising licences of professionals working at the facility, its registration, and the records required to be kept under the Act (Art. 51(5)), and any equipment in use (Art. 51(6)).',
        so: 'Kormeerayaashu waxay baari karaan shatiyada shaqada ee mihnadlayaasha ka shaqeeya xarunta, diiwaangelinteeda, iyo diiwaannada Sharcigu qabo in la hayo (Qodobka 51(5)), iyo qalab kasta oo la isticmaalayo (Qodobka 51(6)).',
      },
    },
    {
      title: {
        en: 'Display the licence at the facility',
        so: 'Ka soo bandhig liisanka xarunta',
      },
      detail: {
        en: 'A copy of the licence must be shown in a prominent place on the premises (Art. 47(2)).',
        so: 'Nuqul liisanka ah waa in laga muujiyo meel muuqata oo ku taal xarunta (Qodobka 47(2)).',
      },
    },
    {
      title: {
        en: 'If you receive a notice of violation, respond within 7 days',
        so: 'Haddii aad hesho ogeysiis xad-gudub, ka jawaab 7 maalmood gudahood',
      },
      detail: {
        en: 'On receipt of a written notice, submit a written corrective action plan with scheduled dates within seven days (Art. 52(2),(3)).',
        so: 'Marka aad hesho ogeysiis qoraal ah, soo gudbi qorshe saxid ah oo qoran leh taariikho jadwalaysan toddoba maalmood gudahood (Qodobka 52(2),(3)).',
      },
    },
  ],

  keyFacts: [
    {
      ref: { en: 'Article 51(1)', so: 'Qodobka 51aad (1)' },
      text: {
        en: 'Every facility is inspected before licensing and at least every six months thereafter.',
        so: 'Xarun kasta waa la baaraa ka hor liisanka, ka dibna ugu yaraan lix bilood kasta.',
      },
    },
    {
      ref: { en: 'Article 51(3)', so: 'Qodobka 51aad (3)' },
      text: {
        en: 'Inspectors must display their ID cards during inspections.',
        so: 'Kormeerayaashu waa inay soo bandhigaan kaararkooda aqoonsiga inta lagu jiro baaritaanka.',
      },
    },
    {
      ref: { en: 'Article 51(7)', so: 'Qodobka 51aad (7)' },
      text: {
        en: 'Obstructing an inspector, refusing assistance, or giving false information — a fine of up to US$1,000.',
        so: 'Ka hor-imaadka kormeeraha, diidmada caawimaadda, ama bixinta xog been ah — ganaax ilaa US$1,000.',
      },
    },
    {
      ref: { en: 'Article 52(3)', so: 'Qodobka 52aad (3)' },
      text: {
        en: 'A facility given notice of a violation has seven days to submit a corrective action plan.',
        so: 'Xarunta la siiyo ogeysiis xad-gudub waxay haysataa toddoba maalmood oo ay ku soo gudbiso qorshe saxid ah.',
      },
    },
  ],

  documentIds: ['hfr-req', 'act-lr31'],

  faqs: [
    {
      question: {
        en: 'What happens during an inspection?',
        so: 'Maxaa dhacaya inta lagu jiro kormeerka?',
      },
      answer: {
        en: 'Inspectors nominated by the Council display their ID cards (Art. 51(3)) and may enter and inspect the facility with respect and dignity (Art. 51(4)). They may examine staff practising licences, registration and records (Art. 51(5)) and equipment in use (Art. 51(6)). They then submit a written report of the outcome to the Council (Art. 51(8)).',
        so: 'Kormeerayaasha uu Goluhu magacaabo waxay soo bandhigaan kaararkooda aqoonsiga (Qodobka 51(3)) waxayna geli karaan oo baari karaan xarunta si ixtiraam iyo sharaf leh (Qodobka 51(4)). Waxay baari karaan shatiyada shaqada ee shaqaalaha, diiwaangelinta iyo diiwaannada (Qodobka 51(5)) iyo qalabka la isticmaalayo (Qodobka 51(6)). Kadibna waxay Golaha u gudbiyaan warbixin qoran oo natiijada ah (Qodobka 51(8)).',
      },
    },
    {
      question: {
        en: 'How do I know an inspector is genuine?',
        so: 'Sideen ku ogaanayaa in kormeeruhu yahay mid rasmi ah?',
      },
      answer: {
        en: 'Inspectors must display their ID cards during the inspection (Art. 51(3)). NHPC never requests payment via personal accounts — if payment is demanded, report it.',
        so: 'Kormeerayaashu waa inay soo bandhigaan kaararkooda aqoonsiga inta lagu jiro baaritaanka (Qodobka 51(3)). NHPC marnaba kuma codsado lacag ku bixi akoon shakhsi ah — haddii lacag lagaa dalbado, soo sheeg.',
      },
    },
    {
      question: {
        en: 'What happens if my facility is found non-compliant?',
        so: 'Maxaa dhacaya haddii xaruntayda la ogaado inaysan u-hoggaansmin?',
      },
      answer: {
        en: 'The Council gives written notice of the violation; you have seven days to submit a corrective action plan (Art. 52(2),(3)). If the Council accepts the plan you must implement it (Art. 52(4)). If the plan is unsatisfactory, the Council may revoke the licence and order closure (Art. 52(5)). Where serious violations cause significant harm, the Council can order immediate closure and revoke the licence at the same time (Art. 52(6)).',
        so: 'Goluhu wuxuu ku siiyaa ogeysiis qoraal ah oo xad-gudubka ah; waxaad haysataa toddoba maalmood oo aad ku soo gudbiso qorshe saxid ah (Qodobka 52(2),(3)). Haddii Goluhu aqbalo qorshaha waa inaad fulisaa (Qodobka 52(4)). Haddii qorshuhu ku filnaan waayo, Goluhu wuu burin karaa liisanka oo amri karaa xiritaanka (Qodobka 52(5)). Marka xad-gudubyo culus ay waxyeelo weyn geystaan, Goluhu wuxuu amri karaa xiritaan degdeg ah isla markaana burin karaa liisanka (Qodobka 52(6)).',
      },
    },
    {
      question: {
        en: 'What if someone at the facility obstructs an inspector?',
        so: 'Maxaa dhacaya haddii qof xarunta jooga uu hor-istaago kormeeraha?',
      },
      answer: {
        en: 'Delaying or obstructing an inspector, refusing reasonable assistance, or providing false or misleading information is an offence carrying a fine of up to US$1,000, and any resulting crimes are addressed under Somali Criminal Law (Art. 51(7)).',
        so: 'Dib-u-dhigista ama hor-istaagga kormeeraha, diidmada caawimaad macquul ah, ama bixinta xog been ah ama marin-habaabin ah waa dembi wata ganaax ilaa US$1,000, dembiyada ka dhashana waxaa lagu xallinayaa Sharciga Ciqaabta Soomaaliyeed (Qodobka 51(7)).',
      },
    },
  ],

  governingArticles: {
    en: "Articles 51 and 52",
    so: "Qodobbada 51 iyo 52",
  },
};

import type { Bilingual, NumberedItem } from './types';

// ─────────────────────────────────────────────────────────────────────
// The person filing a complaint is a patient or a family member, not a
// professional. Every string here ships fully translated — no TODOs, no
// silent fallback to English. A missing Somali string on this page is a
// failure, not a backlog item.
// ─────────────────────────────────────────────────────────────────────

export const complaintsTitle: Bilingual = {
  en: 'File a Complaint',
  so: 'Gudbi Cabasho',
};

export const complaintsIntro: Bilingual = {
  en: 'If a health professional, health facility, or health education institution has harmed you or failed in their duty, you can tell NHPC. Filing a complaint is free.',
  so: 'Haddii mihnadle caafimaad, xarun caafimaad, ama machad waxbarasho caafimaad uu waxyeelo kuu geystay ama uu ku gaabiyay waajibkiisa, waad u sheegi kartaa NHPC. Gudbinta cabashadu waa bilaash.',
};

// NHPC covers everything — unlike councils that must redirect people
// elsewhere. State it positively; no "go somewhere else" section exists.
export const coverageStatement: Bilingual = {
  en: 'NHPC accepts complaints against all health professionals, health facilities, and health education institutions.',
  so: 'NHPC waxay qaadaa cabashooyinka ka dhanka ah dhammaan mihnadlayaasha caafimaadka, xarumaha caafimaadka, iyo machadyada waxbarashada caafimaadka.',
};

// HPCSA's honest caveat — reproduced, not softened.
export const anonymousCaveat: Bilingual = {
  en: 'You may file anonymously. But please note: anonymous complaints are harder to investigate, we cannot update you on progress, and some matters cannot proceed without your evidence. If your concern is confidentiality rather than anonymity, give us your details — we will not disclose them to the subject unless the law requires it.',
  so: 'Waad soo gudbin kartaa cabasho aan magacaaga lahayn. Laakiin ogow: cabashada aan magac lahayn way adkaan kartaa in la baaro, mana suurtogal noqon karto in laguu soo celiyo natiijada. Haddii walaacaagu yahay sirta halkii uu ka ahaan lahaa magac-la’aanta, na sii xogtaada — uma sheegi doonno qofka la cabanayo haddii aan sharcigu na qasbin.',
};

// Expectation setting — do not bury this.
export const damagesNotice: Bilingual = {
  en: 'NHPC cannot award you compensation or damages. If you seek financial restitution, that is a matter for the courts. You may pursue both at the same time.',
  so: 'NHPC lama siin karo magdhow lacageed. Haddii aad doonayso magdhow, u tag maxkamadda. Labadaba isku mar ayaad u socodsiin kartaa.',
};

export const acknowledgementNotice: Bilingual = {
  en: 'We will send you an acknowledgement within 7 days.',
  so: 'Waxaan ku soo celin doonaa xaqiijin 7 maalmood gudahood.',
};

export const urgentNotice: Bilingual = {
  en: 'If someone is in immediate danger, do not use this form — call the 24/7 complaints line on 2376.',
  so: 'Haddii qof khatar degdeg ah ku jiro, ha isticmaalin foomkan — wac khadka cabashooyinka 24/7 ee 2376.',
};

// ── Ways to file ─────────────────────────────────────────────────────
// These channels are deliberately independent of the online form: if the
// form is ever removed (see the escape hatch on the complaints page), the
// page must still tell a patient exactly how to reach us.
export const waysToFileHeading: Bilingual = {
  en: 'Ways to file a complaint',
  so: 'Siyaabaha aad cabasho ku gudbin karto',
};
export const waysToFileIntro: Bilingual = {
  en: 'Use whichever is easiest for you. All of them reach the same team.',
  so: 'Isticmaal midka kuugu fudud. Dhammaantood waxay gaadhayaan koox isku mid ah.',
};
export const wayByPhone: Bilingual = { en: 'By phone', so: 'Taleefan' };
export const wayByPhoneBody: Bilingual = {
  en: 'Call the complaints line on 2376. It is open 24 hours a day, every day, and we will take your complaint over the phone.',
  so: 'Wac khadka cabashooyinka 2376. Wuxuu furan yahay 24 saacadood maalintii, maalin kasta, cabashadaadana waxaan ka qaadaynaa taleefanka.',
};
export const wayByEmail: Bilingual = { en: 'By email', so: 'Iimayl' };
export const wayByEmailBody: Bilingual = {
  en: 'Email info@nhpc.gov.so. Tell us what happened, the name of the person or facility, where and when it happened, and attach any photos or documents you have. Say if you wish to remain anonymous.',
  so: 'Iimayl u dir info@nhpc.gov.so. Noo sheeg waxa dhacay, magaca qofka ama xarunta, meesha iyo goorta ay dhacday, oo ku lifaaq sawirro ama dukumiinti kasta oo aad haysato. Sheeg haddii aad doonayso inaad magac-la’aan ahaato.',
};
export const wayByForm: Bilingual = {
  en: 'By downloading the complaint form',
  so: 'Adigoo soo dejinaya foomka cabashada',
};
export const wayByFormBody: Bilingual = {
  en: 'Download the complaint form, fill it in, and email it to info@nhpc.gov.so with any photos or documents attached.',
  so: 'Soo deji foomka cabashada, buuxi, oo ku soo dir info@nhpc.gov.so adigoo ku lifaaqaya sawirro ama dukumiinti kasta.',
};

// The anonymity section heading. The caveat itself (anonymousCaveat) is
// HPCSA's wording and is shown to everyone, not hidden behind a checkbox.
export const anonymousHeading: Bilingual = {
  en: 'Filing anonymously',
  so: 'Gudbinta magac-la’aan',
};

// ── Form labels ──────────────────────────────────────────────────────
export const formLabels = {
  legendSubject: { en: 'Who or what are you complaining about?', so: 'Yaa ama maxaad ka cabanaysaa?' } satisfies Bilingual,
  legendIncident: { en: 'What happened?', so: 'Maxaa dhacay?' } satisfies Bilingual,
  legendYou: { en: 'About you', so: 'Adiga kugu saabsan' } satisfies Bilingual,

  subjectType: { en: 'Type', so: 'Nooca' } satisfies Bilingual,
  subjectTypeProfessional: { en: 'A health professional', so: 'Mihnadle caafimaad' } satisfies Bilingual,
  subjectTypeFacility: { en: 'A health facility', so: 'Xarun caafimaad' } satisfies Bilingual,
  subjectTypeInstitution: { en: 'A health education institution', so: 'Machad waxbarasho caafimaad' } satisfies Bilingual,

  subjectName: { en: 'Name', so: 'Magaca' } satisfies Bilingual,
  subjectNameHelp: {
    en: 'The name of the person, facility, or institution.',
    so: 'Magaca qofka, xarunta, ama machadka.',
  } satisfies Bilingual,
  subjectRegNumber: { en: 'Registration number', so: 'Lambarka diiwaangelinta' } satisfies Bilingual,
  subjectRegNumberHelp: {
    en: 'If you know it. Most people do not — leave it blank.',
    so: 'Haddii aad taqaanid. Dadka badankiisu ma yaqaan — banaan uga tag.',
  } satisfies Bilingual,
  subjectLocation: { en: 'Location', so: 'Goobta' } satisfies Bilingual,
  subjectLocationHelp: {
    en: 'The facility or city where they work.',
    so: 'Xarunta ama magaalada ay ka shaqeeyaan.',
  } satisfies Bilingual,

  incidentDate: { en: 'Date it happened', so: 'Taariikhda ay dhacday' } satisfies Bilingual,
  incidentLocation: { en: 'Where it happened', so: 'Meesha ay ka dhacday' } satisfies Bilingual,
  description: { en: 'What happened', so: 'Waxa dhacay' } satisfies Bilingual,
  descriptionHelp: {
    en: 'Describe it in your own words. Include dates, names, and what was said or done. At least 50 characters.',
    so: 'Ku sharax ereyadaada. Ku dar taariikhaha, magacyada, iyo waxa la yidhi ama la sameeyay. Ugu yaraan 50 xaraf.',
  } satisfies Bilingual,
  desiredOutcome: { en: 'What outcome do you want?', so: 'Natiijo noocee ah ayaad doonaysaa?' } satisfies Bilingual,
  desiredOutcomeHelp: {
    en: 'Optional. It helps us understand what you are asking for.',
    so: 'Ikhtiyaari. Waxay naga caawinaysaa inaan fahanno waxa aad codsanayso.',
  } satisfies Bilingual,

  evidence: { en: 'Evidence', so: 'Caddeyn' } satisfies Bilingual,
  evidenceHelp: {
    en: 'Optional. Photos or PDFs — up to 5 files, 4MB in total.',
    so: 'Ikhtiyaari. Sawirro ama PDF — ilaa 5 fayl, wadar ahaan 4MB.',
  } satisfies Bilingual,

  anonymous: { en: 'I wish to remain anonymous', so: 'Waxaan doonayaa inaan magac-la’aan ahaado' } satisfies Bilingual,
  yourName: { en: 'Your name', so: 'Magacaaga' } satisfies Bilingual,
  yourPhone: { en: 'Phone number', so: 'Lambarka taleefanka' } satisfies Bilingual,
  yourEmail: { en: 'Email address', so: 'Cinwaanka iimaylka' } satisfies Bilingual,
  contactHelp: {
    en: 'Give us a phone number or an email address so we can reach you.',
    so: 'Na sii lambar taleefan ama cinwaan iimayl si aan kuula soo xiriirno.',
  } satisfies Bilingual,
  isPatient: { en: 'Are you the patient?', so: 'Ma adiga ayaa bukaanka ah?' } satisfies Bilingual,
  isPatientYes: { en: 'Yes, I am the patient', so: 'Haa, aniga ayaa bukaanka ah' } satisfies Bilingual,
  isPatientNo: {
    en: 'I am filing on behalf of someone else',
    so: 'Waxaan u gudbinayaa qof kale magaciis',
  } satisfies Bilingual,

  optional: { en: 'optional', so: 'ikhtiyaari' } satisfies Bilingual,
  required: { en: 'required', so: 'waa loo baahan yahay' } satisfies Bilingual,
  submit: { en: 'Submit complaint', so: 'Gudbi cabashada' } satisfies Bilingual,
  submitting: { en: 'Sending…', so: 'Waa la dirayaa…' } satisfies Bilingual,
};

// ── Validation messages ──────────────────────────────────────────────
export const formErrors = {
  subjectTypeRequired: { en: 'Choose what you are complaining about.', so: 'Dooro waxa aad ka cabanayso.' } satisfies Bilingual,
  subjectNameRequired: { en: 'Enter the name of the person, facility, or institution.', so: 'Geli magaca qofka, xarunta, ama machadka.' } satisfies Bilingual,
  descriptionRequired: { en: 'Tell us what happened.', so: 'Noo sheeg waxa dhacay.' } satisfies Bilingual,
  descriptionTooShort: {
    en: 'Please give us at least 50 characters so we can understand the complaint.',
    so: 'Fadlan na sii ugu yaraan 50 xaraf si aan u fahanno cabashada.',
  } satisfies Bilingual,
  nameRequired: { en: 'Enter your name, or choose to remain anonymous.', so: 'Geli magacaaga, ama dooro inaad magac-la’aan ahaato.' } satisfies Bilingual,
  contactRequired: {
    en: 'Give a phone number or an email address, or choose to remain anonymous.',
    so: 'Sii lambar taleefan ama cinwaan iimayl, ama dooro inaad magac-la’aan ahaato.',
  } satisfies Bilingual,
  emailInvalid: { en: 'That email address does not look right.', so: 'Cinwaanka iimaylku sax uma eka.' } satisfies Bilingual,
  filesTooMany: { en: 'You can attach up to 5 files.', so: 'Waxaad ku lifaaqi kartaa ilaa 5 fayl.' } satisfies Bilingual,
  filesTooLarge: { en: 'Your files come to more than 4MB in total. Remove one or attach smaller files.', so: 'Faylashaadu waxay ka badan yihiin 4MB wadar ahaan. Mid ka saar ama ku lifaaq faylal ka yaryar.' } satisfies Bilingual,
  fileType: { en: 'Only photos and PDF files can be attached.', so: 'Kaliya sawirro iyo faylal PDF ah ayaa la lifaaqi karaa.' } satisfies Bilingual,
  fixErrors: { en: 'Please check the highlighted fields.', so: 'Fadlan hubi meelaha la calaamadeeyay.' } satisfies Bilingual,
};

// ── Submission outcome ───────────────────────────────────────────────
export const successHeading: Bilingual = {
  en: 'Your complaint has been sent',
  so: 'Cabashadaadii waa la diray',
};
export const successReferenceLabel: Bilingual = {
  en: 'Your reference number',
  so: 'Lambarkaaga tixraaca',
};
export const successWriteItDown: Bilingual = {
  en: 'Write this number down. Quote it if you call us on 2376 — we cannot look up your complaint without it.',
  so: 'Lambarkan qor. Sheeg haddii aad naga soo wacdo 2376 — cabashadaada ma heli karno la’aanteed.',
};

// The send failed. Never pretend otherwise.
export const failureHeading: Bilingual = {
  en: 'Your complaint was NOT sent',
  so: 'Cabashadaadii LAMA dirin',
};
export const failureBody: Bilingual = {
  en: 'Something went wrong on our side and your complaint did not reach us. Nothing has been saved. Please try again — or call the 24/7 complaints line on 2376 and we will take your complaint over the phone.',
  so: 'Khalad ayaa dhinacayaga ka dhacay, cabashadaaduna nama soo gaadhin. Waxba lama kaydin. Fadlan mar kale isku day — ama wac khadka cabashooyinka 24/7 ee 2376 waxaanan cabashadaada ka qaadi doonnaa taleefanka.',
};
export const rateLimitedBody: Bilingual = {
  en: 'You have sent several complaints in a short time. Please wait an hour before sending another, or call 2376 if this is urgent.',
  so: 'Waxaad dirtay cabashooyin badan muddo gaaban gudaheed. Fadlan sug hal saac ka hor inta aadan mid kale dirin, ama wac 2376 haddii ay degdeg tahay.',
};

// ── /public/complaints/process — the seven stages ─────────────────────
export const processTitle: Bilingual = {
  en: 'How a Complaint is Handled',
  so: 'Sida Cabasho loo Maareeyo',
};
export const processIntro: Bilingual = {
  en: 'What happens after you file a complaint, and how long each stage takes. Adapted from the NHPC Act Lr.31, Article 17.',
  so: 'Waxa dhacaya ka dib marka aad cabasho gudbiso, iyo inta ay marxalad kastaa qaadato. Waxaa laga soo qaatay Sharciga NHPC Lr.31, Qodobka 17aad.',
};

export const processStages: NumberedItem[] = [
  {
    title: { en: 'Received', so: 'Helitaan' },
    detail: {
      en: 'We record your complaint and send you an acknowledgement within 7 days, quoting your reference number.',
      so: 'Waxaan diiwaangelinaa cabashadaada waxaanan kuu dirnaa xaqiijin 7 maalmood gudahood, annagoo ku sheegayna lambarkaaga tixraaca.',
    },
  },
  {
    title: { en: 'Screening', so: 'Baaritaan hordhac' },
    detail: {
      en: 'We check whether the person or facility is registered with NHPC, and whether there is enough detail to act on.',
      so: 'Waxaan hubinaa in qofka ama xaruntu ay ka diiwaangashan yihiin NHPC, iyo in ay jirto faahfaahin ku filan oo lagu talaabo qaadi karo.',
    },
  },
  {
    title: { en: 'Categorisation', so: 'Kala saarid' },
    detail: {
      en: 'We assess how serious the matter is. Anything outside the Act is referred to the appropriate authority — we tell you where it went.',
      so: 'Waxaan qiimeynaa inta uu arrinku culus yahay. Wax kasta oo sharciga ka baxsan waxaa loo gudbiyaa hay’adda ay khusayso — waanan kuu sheegaynaa halka la geeyay.',
    },
  },
  {
    title: { en: 'Mediation or preliminary inquiry', so: 'Dhexdhexaadin ama baaritaan hordhac' },
    detail: {
      en: 'The Health Professional Disciplinary Committee deals with allegations of misconduct (Art. 17(1)(b)). Some matters are resolved by mediation.',
      so: 'Guddiga Edbinta Mihnadlayaasha Caafimaadka ayaa qabta eedeymaha xad-gudubka (Qodobka 17(1)(b)). Arrimo qaar waxaa lagu xalliyaa dhexdhexaadin.',
    },
  },
  {
    title: { en: 'Response', so: 'Jawaab' },
    detail: {
      en: 'The person or facility complained about is given an opportunity to be heard before any decision is taken (Art. 32(3), 46(3)).',
      so: 'Qofka ama xarunta la cabanayo waxaa la siiyaa fursad ay ku hadlaan ka hor inta aan go’aan la qaadan (Qodobka 32(3), 46(3)).',
    },
  },
  {
    title: { en: 'Decision', so: 'Go’aan' },
    detail: {
      en: 'The Council decides and may impose sanctions — including cancelling registration or a licence (Art. 40, 46).',
      so: 'Goluhu wuu go’aamiyaa wuxuuna soo rogi karaa ciqaabo — oo ay ku jirto burinta diiwaangelinta ama liisanka (Qodobka 40, 46).',
    },
  },
  {
    title: { en: 'Appeal', so: 'Rafcaan' },
    detail: {
      en: 'Anyone dissatisfied with a decision may appeal to the Court within 30 days of the decision (Art. 69).',
      so: 'Qof kasta oo aan ku qanacsaneyn go’aanka wuxuu rafcaan u qaadan karaa Maxkamadda 30 maalmood gudahood (Qodobka 69).',
    },
  },
];

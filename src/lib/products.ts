export type Product = {
  id: string;
  name: string;
  category: string;
  mfg: string;
  exp: string;
  ingredients: string;
  usage: string;
  storage: string;
  warnings: string;
};

export const products: Product[] = [
  {
    id: "paracetamol-500",
    name: "Paracetamol 500 milligram tablets",
    category: "Pharmaceutical",
    mfg: "March 2026",
    exp: "February 2028",
    ingredients: "Each tablet contains Paracetamol 500 milligrams. Excipients: starch, povidone, magnesium stearate.",
    usage: "Adults and children over 12: take one or two tablets every 4 to 6 hours as needed. Do not take more than 8 tablets in 24 hours.",
    storage: "Store below 25 degrees Celsius in a dry place, away from direct sunlight. Keep out of reach of children.",
    warnings: "Do not use with other paracetamol-containing products. Consult a doctor if you have liver or kidney problems. In case of overdose, seek medical help immediately.",
  },
  {
    id: "vitamin-d3",
    name: "Vitamin D3 1000 IU softgels",
    category: "Supplement",
    mfg: "January 2026",
    exp: "December 2027",
    ingredients: "Cholecalciferol 1000 international units, sunflower oil, gelatin, glycerin.",
    usage: "Take one softgel daily with a meal, or as directed by your healthcare professional.",
    storage: "Store in a cool, dry place. Close the cap tightly after use.",
    warnings: "Do not exceed the recommended dose. Not a substitute for a balanced diet. Consult a doctor if pregnant or on medication.",
  },
  {
    id: "glucose-strips",
    name: "Blood glucose test strips, pack of 50",
    category: "Medical device",
    mfg: "May 2026",
    exp: "May 2027",
    ingredients: "Glucose oxidase enzyme strip for in-vitro diagnostic use only.",
    usage: "Insert a strip into the meter with the contact end first. Apply a drop of blood to the edge of the strip. Wait for the reading to be announced.",
    storage: "Store between 4 and 30 degrees Celsius. Use within 3 months of opening the vial. Keep the vial closed.",
    warnings: "For external use only. Do not reuse strips. Do not use after the expiry date.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const sections = (p: Product) => [
  { key: "name", label: "Product", text: p.name },
  { key: "dates", label: "Dates", text: `Manufactured ${p.mfg}. Expires ${p.exp}.` },
  { key: "ingredients", label: "Ingredients", text: p.ingredients },
  { key: "usage", label: "Dosage & usage", text: p.usage },
  { key: "storage", label: "Storage", text: p.storage },
  { key: "warnings", label: "Safety warnings", text: p.warnings },
];

export type Lang = "en" | "ml";

const ml: Record<string, Record<string, string>> = {
  "paracetamol-500": {
    name: "പാരസെറ്റമോൾ 500 മില്ലിഗ്രാം ഗുളികകൾ",
    dates: "നിർമ്മാണം മാർച്ച് 2026. കാലാവധി ഫെബ്രുവരി 2028.",
    ingredients: "ഓരോ ഗുളികയിലും 500 മില്ലിഗ്രാം പാരസെറ്റമോൾ അടങ്ങിയിരിക്കുന്നു.",
    usage: "മുതിർന്നവരും 12 വയസ്സിന് മുകളിലുള്ള കുട്ടികളും: ആവശ്യമെങ്കിൽ 4 മുതൽ 6 മണിക്കൂർ ഇടവിട്ട് ഒന്നോ രണ്ടോ ഗുളിക കഴിക്കുക. 24 മണിക്കൂറിൽ 8 ഗുളികയിൽ കൂടുതൽ കഴിക്കരുത്.",
    storage: "25 ഡിഗ്രി സെൽഷ്യസിൽ താഴെ, ഈർപ്പമില്ലാത്ത സ്ഥലത്ത്, നേരിട്ടുള്ള വെയിലേൽക്കാതെ സൂക്ഷിക്കുക. കുട്ടികൾക്ക് എത്താത്തിടത്ത് വയ്ക്കുക.",
    warnings: "പാരസെറ്റമോൾ അടങ്ങിയ മറ്റ് മരുന്നുകൾക്കൊപ്പം ഉപയോഗിക്കരുത്. കരൾ അല്ലെങ്കിൽ വൃക്ക രോഗമുണ്ടെങ്കിൽ ഡോക്ടറെ കാണുക. അമിതമായി കഴിച്ചാൽ ഉടൻ വൈദ്യസഹായം തേടുക.",
  },
  "vitamin-d3": {
    name: "വിറ്റാമിൻ ഡി3 1000 ഐ.യു. സോഫ്റ്റ്ജെൽ",
    dates: "നിർമ്മാണം ജനുവരി 2026. കാലാവധി ഡിസംബർ 2027.",
    ingredients: "കോളികാൽസിഫെറോൾ 1000 ഇന്റർനാഷണൽ യൂണിറ്റ്, സൂര്യകാന്തി എണ്ണ, ജെലാറ്റിൻ, ഗ്ലിസറിൻ.",
    usage: "ദിവസവും ഭക്ഷണത്തോടൊപ്പം ഒരു സോഫ്റ്റ്ജെൽ കഴിക്കുക, അല്ലെങ്കിൽ ഡോക്ടറുടെ നിർദ്ദേശപ്രകാരം.",
    storage: "തണുത്ത, ഈർപ്പമില്ലാത്ത സ്ഥലത്ത് സൂക്ഷിക്കുക. ഉപയോഗശേഷം അടപ്പ് നന്നായി അടയ്ക്കുക.",
    warnings: "നിർദ്ദേശിച്ച അളവിൽ കൂടുതൽ കഴിക്കരുത്. ഗർഭിണിയാണെങ്കിലോ മറ്റ് മരുന്നുകൾ കഴിക്കുന്നുണ്ടെങ്കിലോ ഡോക്ടറെ സമീപിക്കുക.",
  },
  "glucose-strips": {
    name: "ബ്ലഡ് ഗ്ലൂക്കോസ് ടെസ്റ്റ് സ്ട്രിപ്പുകൾ, 50 എണ്ണം",
    dates: "നിർമ്മാണം മേയ് 2026. കാലാവധി മേയ് 2027.",
    ingredients: "ഇൻ-വിട്രോ പരിശോധനയ്ക്ക് മാത്രമുള്ള ഗ്ലൂക്കോസ് ഓക്സിഡേസ് എൻസൈം സ്ട്രിപ്പ്.",
    usage: "സ്ട്രിപ്പ് മീറ്ററിലേക്ക് തിരുകുക. സ്ട്രിപ്പിന്റെ അറ്റത്ത് ഒരു തുള്ളി രക്തം വയ്ക്കുക. റീഡിംഗ് പറയുന്നതുവരെ കാത്തിരിക്കുക.",
    storage: "4 മുതൽ 30 ഡിഗ്രി സെൽഷ്യസ് വരെ സൂക്ഷിക്കുക. തുറന്ന് 3 മാസത്തിനുള്ളിൽ ഉപയോഗിക്കുക.",
    warnings: "ബാഹ്യ ഉപയോഗത്തിന് മാത്രം. സ്ട്രിപ്പുകൾ വീണ്ടും ഉപയോഗിക്കരുത്. കാലാവധി കഴിഞ്ഞാൽ ഉപയോഗിക്കരുത്.",
  },
};

const mlLabels: Record<string, string> = {
  name: "ഉൽപ്പന്നം", dates: "തീയതികൾ", ingredients: "ചേരുവകൾ",
  usage: "ഉപയോഗവും അളവും", storage: "സൂക്ഷിക്കേണ്ട വിധം", warnings: "സുരക്ഷാ മുന്നറിയിപ്പുകൾ",
};

export const localizedSections = (p: Product, lang: Lang) =>
  lang === "en"
    ? sections(p)
    : sections(p).map((s) => ({ ...s, label: mlLabels[s.key], text: ml[p.id]?.[s.key] ?? s.text }));

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { ArrowLeftRight, DollarSign, Search } from "lucide-react";

interface Currency {
  code: string;
  flag: string;
  nameEn: string;
  nameAr: string;
  rate: number;
}

const currencies: Currency[] = [
  { code: "USD", flag: "🇺🇸", nameEn: "US Dollar", nameAr: "دولار أمريكي", rate: 1 },
  { code: "EUR", flag: "🇪🇺", nameEn: "Euro", nameAr: "يورو", rate: 0.92 },
  { code: "GBP", flag: "🇬🇧", nameEn: "British Pound", nameAr: "جنيه إسترليني", rate: 0.79 },
  { code: "JPY", flag: "🇯🇵", nameEn: "Japanese Yen", nameAr: "ين ياباني", rate: 149.5 },
  { code: "SAR", flag: "🇸🇦", nameEn: "Saudi Riyal", nameAr: "ريال سعودي", rate: 3.75 },
  { code: "AED", flag: "🇦🇪", nameEn: "UAE Dirham", nameAr: "درهم إماراتي", rate: 3.67 },
  { code: "EGP", flag: "🇪🇬", nameEn: "Egyptian Pound", nameAr: "جنيه مصري", rate: 48.5 },
  { code: "JOD", flag: "🇯🇴", nameEn: "Jordanian Dinar", nameAr: "دينار أردني", rate: 0.71 },
  { code: "KWD", flag: "🇰🇼", nameEn: "Kuwaiti Dinar", nameAr: "دينار كويتي", rate: 0.31 },
  { code: "TRY", flag: "🇹🇷", nameEn: "Turkish Lira", nameAr: "ليرة تركية", rate: 32.1 },
  { code: "QAR", flag: "🇶🇦", nameEn: "Qatari Riyal", nameAr: "ريال قطري", rate: 3.64 },
  { code: "BHD", flag: "🇧🇭", nameEn: "Bahraini Dinar", nameAr: "دينار بحريني", rate: 0.376 },
  { code: "OMR", flag: "🇴🇲", nameEn: "Omani Rial", nameAr: "ريال عماني", rate: 0.385 },
  { code: "IQD", flag: "🇮🇶", nameEn: "Iraqi Dinar", nameAr: "دينار عراقي", rate: 1310 },
  { code: "LBP", flag: "🇱🇧", nameEn: "Lebanese Pound", nameAr: "ليرة لبنانية", rate: 89500 },
  { code: "SYP", flag: "🇸🇾", nameEn: "Syrian Pound", nameAr: "ليرة سورية", rate: 13000 },
  { code: "MAD", flag: "🇲🇦", nameEn: "Moroccan Dirham", nameAr: "درهم مغربي", rate: 10.1 },
  { code: "TND", flag: "🇹🇳", nameEn: "Tunisian Dinar", nameAr: "دينار تونسي", rate: 3.12 },
  { code: "DZD", flag: "🇩🇿", nameEn: "Algerian Dinar", nameAr: "دينار جزائري", rate: 134.5 },
  { code: "LYD", flag: "🇱🇾", nameEn: "Libyan Dinar", nameAr: "دينار ليبي", rate: 4.85 },
  { code: "SDG", flag: "🇸🇩", nameEn: "Sudanese Pound", nameAr: "جنيه سوداني", rate: 601 },
  { code: "YER", flag: "🇾🇪", nameEn: "Yemeni Rial", nameAr: "ريال يمني", rate: 250 },
  { code: "INR", flag: "🇮🇳", nameEn: "Indian Rupee", nameAr: "روبية هندية", rate: 83.1 },
  { code: "PKR", flag: "🇵🇰", nameEn: "Pakistani Rupee", nameAr: "روبية باكستانية", rate: 278 },
  { code: "CNY", flag: "🇨🇳", nameEn: "Chinese Yuan", nameAr: "يوان صيني", rate: 7.24 },
  { code: "KRW", flag: "🇰🇷", nameEn: "South Korean Won", nameAr: "وون كوري", rate: 1330 },
  { code: "CAD", flag: "🇨🇦", nameEn: "Canadian Dollar", nameAr: "دولار كندي", rate: 1.36 },
  { code: "AUD", flag: "🇦🇺", nameEn: "Australian Dollar", nameAr: "دولار أسترالي", rate: 1.53 },
  { code: "CHF", flag: "🇨🇭", nameEn: "Swiss Franc", nameAr: "فرنك سويسري", rate: 0.88 },
  { code: "SEK", flag: "🇸🇪", nameEn: "Swedish Krona", nameAr: "كرونة سويدية", rate: 10.45 },
  { code: "NOK", flag: "🇳🇴", nameEn: "Norwegian Krone", nameAr: "كرونة نرويجية", rate: 10.7 },
  { code: "DKK", flag: "🇩🇰", nameEn: "Danish Krone", nameAr: "كرونة دنماركية", rate: 6.88 },
  { code: "PLN", flag: "🇵🇱", nameEn: "Polish Zloty", nameAr: "زلوتي بولندي", rate: 4.02 },
  { code: "CZK", flag: "🇨🇿", nameEn: "Czech Koruna", nameAr: "كرونة تشيكية", rate: 23.2 },
  { code: "HUF", flag: "🇭🇺", nameEn: "Hungarian Forint", nameAr: "فورنت مجري", rate: 362 },
  { code: "RUB", flag: "🇷🇺", nameEn: "Russian Ruble", nameAr: "روبل روسي", rate: 92 },
  { code: "BRL", flag: "🇧🇷", nameEn: "Brazilian Real", nameAr: "ريال برازيلي", rate: 4.97 },
  { code: "MXN", flag: "🇲🇽", nameEn: "Mexican Peso", nameAr: "بيزو مكسيكي", rate: 17.15 },
  { code: "ZAR", flag: "🇿🇦", nameEn: "South African Rand", nameAr: "راند جنوب أفريقي", rate: 18.6 },
  { code: "THB", flag: "🇹🇭", nameEn: "Thai Baht", nameAr: "بات تايلندي", rate: 35.5 },
  { code: "MYR", flag: "🇲🇾", nameEn: "Malaysian Ringgit", nameAr: "رينغيت ماليزي", rate: 4.72 },
  { code: "IDR", flag: "🇮🇩", nameEn: "Indonesian Rupiah", nameAr: "روبية إندونيسية", rate: 15600 },
  { code: "PHP", flag: "🇵🇭", nameEn: "Philippine Peso", nameAr: "بيزو فلبيني", rate: 56.2 },
  { code: "SGD", flag: "🇸🇬", nameEn: "Singapore Dollar", nameAr: "دولار سنغافوري", rate: 1.34 },
  { code: "NZD", flag: "🇳🇿", nameEn: "New Zealand Dollar", nameAr: "دولار نيوزلندي", rate: 1.67 },
  { code: "NGN", flag: "🇳🇬", nameEn: "Nigerian Naira", nameAr: "نيرة نيجيرية", rate: 1550 },
  { code: "GHS", flag: "🇬🇭", nameEn: "Ghanaian Cedi", nameAr: "سيدي غاني", rate: 12.5 },
  { code: "KES", flag: "🇰🇪", nameEn: "Kenyan Shilling", nameAr: "شلن كيني", rate: 153 },
  { code: "ARS", flag: "🇦🇷", nameEn: "Argentine Peso", nameAr: "بيزو أرجنتيني", rate: 870 },
  { code: "COP", flag: "🇨🇴", nameEn: "Colombian Peso", nameAr: "بيزو كولومبي", rate: 3950 },
];

interface CurrencyPickerProps {
  value: string;
  onChange: (code: string) => void;
  label: string;
  lang: string;
}

const CurrencyPicker = ({ value, onChange, label, lang }: CurrencyPickerProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search) return currencies;
    const q = search.toLowerCase();
    return currencies.filter(
      (c) =>
        c.code.toLowerCase().includes(q) ||
        c.nameEn.toLowerCase().includes(q) ||
        c.nameAr.includes(q)
    );
  }, [search]);

  const selected = currencies.find((c) => c.code === value)!;

  return (
    <div className="relative">
      <label className="text-sm font-medium text-muted-foreground mb-1.5 block">{label}</label>
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground flex items-center gap-2 text-start"
      >
        <span className="text-xl">{selected.flag}</span>
        <span className="font-medium">{selected.code}</span>
        <span className="text-muted-foreground text-sm truncate">
          {lang === "ar" ? selected.nameAr : selected.nameEn}
        </span>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-50 top-full mt-1 w-full bg-card border border-border rounded-2xl shadow-card-hover overflow-hidden"
        >
          <div className="p-2 border-b border-border">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={lang === "ar" ? "ابحث عن عملة..." : "Search currency..."}
                className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                autoFocus
              />
            </div>
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filtered.map((c) => (
              <button
                key={c.code}
                onClick={() => {
                  onChange(c.code);
                  setOpen(false);
                  setSearch("");
                }}
                className={`w-full px-4 py-2.5 flex items-center gap-3 text-start hover:bg-muted transition-colors ${
                  c.code === value ? "bg-primary/10" : ""
                }`}
              >
                <span className="text-xl">{c.flag}</span>
                <span className="font-medium text-foreground text-sm">{c.code}</span>
                <span className="text-muted-foreground text-xs truncate">
                  {lang === "ar" ? c.nameAr : c.nameEn}
                </span>
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-sm text-muted-foreground py-4">
                {lang === "ar" ? "لا نتائج" : "No results"}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

const CurrencyConverter = () => {
  const { t, lang } = useLang();
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("SAR");
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    const a = parseFloat(amount);
    if (!a) return;
    const fromRate = currencies.find((c) => c.code === from)!.rate;
    const toRate = currencies.find((c) => c.code === to)!.rate;
    const inUSD = a / fromRate;
    setResult(Math.round(inUSD * toRate * 100) / 100);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setResult(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl gradient-secondary flex items-center justify-center">
          <DollarSign className="w-5 h-5 text-secondary-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">{t("currency.title")}</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">{t("currency.amount")}</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all"
            placeholder="100"
          />
        </div>

        <CurrencyPicker value={from} onChange={setFrom} label={t("currency.from")} lang={lang} />

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={swap}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"
          >
            <ArrowLeftRight className="w-4 h-4 text-muted-foreground" />
          </motion.button>
        </div>

        <CurrencyPicker value={to} onChange={setTo} label={t("currency.to")} lang={lang} />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={convert}
          className="w-full py-3.5 rounded-xl gradient-secondary text-secondary-foreground font-semibold text-lg glow-secondary"
        >
          {t("currency.convert")}
        </motion.button>
      </div>

      {result !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl gradient-surface shadow-card text-center space-y-2"
        >
          <p className="text-sm text-muted-foreground">{t("currency.result")}</p>
          <p className="text-4xl font-bold text-foreground">
            {result.toLocaleString()} <span className="text-lg text-muted-foreground">
              {currencies.find((c) => c.code === to)?.flag} {to}
            </span>
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default CurrencyConverter;

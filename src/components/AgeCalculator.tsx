import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { Cake, ChevronLeft, ChevronRight } from "lucide-react";

const currentYear = new Date().getFullYear();
const months = Array.from({ length: 12 }, (_, i) => i);
const monthNamesEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthNamesAr = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

const AgeCalculator = () => {
  const { t, lang } = useLang();
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(1);
  const [result, setResult] = useState<{ years: number; months: number; days: number; nextBirthdayDays: number } | null>(null);
  const yearScrollRef = useRef<HTMLDivElement>(null);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dayOptions = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const calculate = () => {
    const birth = new Date(year, month, day);
    const now = new Date();

    let years = now.getFullYear() - birth.getFullYear();
    let mos = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
      mos--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (mos < 0) {
      years--;
      mos += 12;
    }

    let nextBirthday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday <= now) {
      nextBirthday = new Date(now.getFullYear() + 1, birth.getMonth(), birth.getDate());
    }
    const nextBirthdayDays = Math.ceil((nextBirthday.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    setResult({ years, months: mos, days, nextBirthdayDays });
  };

  const scrollYear = (dir: number) => {
    setYear((prev) => Math.max(1920, Math.min(currentYear, prev + dir)));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
          <Cake className="w-5 h-5 text-accent-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">{t("age.title")}</h2>
      </div>

      <div className="space-y-4">
        {/* Year Picker */}
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            {lang === "ar" ? "السنة" : "Year"}
          </label>
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollYear(-1)}
              className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </motion.button>
            <div
              ref={yearScrollRef}
              className="flex-1 overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="flex gap-1.5 px-1">
                {Array.from({ length: currentYear - 1920 + 1 }, (_, i) => currentYear - i).map((y) => (
                  <motion.button
                    key={y}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setYear(y)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                      y === year
                        ? "gradient-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground hover:bg-border"
                    }`}
                  >
                    {y}
                  </motion.button>
                ))}
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollYear(1)}
              className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </motion.button>
          </div>
          <p className="text-center text-lg font-bold text-foreground mt-2">{year}</p>
        </div>

        {/* Month Picker */}
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            {lang === "ar" ? "الشهر" : "Month"}
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {months.map((m) => (
              <motion.button
                key={m}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMonth(m)}
                className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                  m === month
                    ? "gradient-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {lang === "ar" ? monthNamesAr[m] : monthNamesEn[m]}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Day Picker */}
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            {lang === "ar" ? "اليوم" : "Day"}
          </label>
          <div className="grid grid-cols-7 gap-1">
            {dayOptions.map((d) => (
              <motion.button
                key={d}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDay(d)}
                className={`py-1.5 rounded-lg text-xs font-medium transition-all ${
                  d === day
                    ? "gradient-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {d}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={calculate}
          className="w-full py-3.5 rounded-xl gradient-accent text-accent-foreground font-semibold text-lg"
        >
          {t("age.calculate")}
        </motion.button>
      </div>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "age.years", value: result.years },
              { label: "age.months", value: result.months },
              { label: "age.days", value: result.days },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-2xl gradient-surface shadow-card text-center">
                <p className="text-3xl font-bold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{t(item.label)}</p>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-2xl bg-accent/10 text-center">
            <p className="text-sm text-muted-foreground">{t("age.nextBirthday")}</p>
            <p className="text-2xl font-bold text-accent">{result.nextBirthdayDays} {t("age.days")}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AgeCalculator;

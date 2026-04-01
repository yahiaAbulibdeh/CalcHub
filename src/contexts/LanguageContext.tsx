import React, { createContext, useContext, useState, useEffect } from "react";

type Lang = "en" | "ar";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<string, Record<Lang, string>> = {
  // App
  "app.title": { en: "CalcHub", ar: "حاسبتي" },
  "app.subtitle": { en: "All-in-one calculator suite", ar: "مجموعة الآلات الحاسبة الشاملة" },
  
  // Nav
  "nav.bmi": { en: "BMI", ar: "مؤشر الكتلة" },
  "nav.currency": { en: "Currency", ar: "العملات" },
  "nav.age": { en: "Age", ar: "العمر" },
  "nav.loan": { en: "Loan", ar: "القرض" },
  
  // BMI
  "bmi.title": { en: "BMI Calculator", ar: "حاسبة مؤشر كتلة الجسم" },
  "bmi.weight": { en: "Weight (kg)", ar: "الوزن (كغ)" },
  "bmi.height": { en: "Height (cm)", ar: "الطول (سم)" },
  "bmi.calculate": { en: "Calculate BMI", ar: "احسب المؤشر" },
  "bmi.result": { en: "Your BMI", ar: "مؤشر كتلة جسمك" },
  "bmi.underweight": { en: "Underweight", ar: "نقص في الوزن" },
  "bmi.normal": { en: "Normal", ar: "طبيعي" },
  "bmi.overweight": { en: "Overweight", ar: "زيادة في الوزن" },
  "bmi.obese": { en: "Obese", ar: "سمنة" },
  
  // Currency
  "currency.title": { en: "Currency Converter", ar: "محوّل العملات" },
  "currency.amount": { en: "Amount", ar: "المبلغ" },
  "currency.from": { en: "From", ar: "من" },
  "currency.to": { en: "To", ar: "إلى" },
  "currency.convert": { en: "Convert", ar: "حوّل" },
  "currency.result": { en: "Result", ar: "النتيجة" },
  "currency.swap": { en: "Swap", ar: "تبديل" },
  
  // Age
  "age.title": { en: "Age Calculator", ar: "حاسبة العمر" },
  "age.birthdate": { en: "Birth Date", ar: "تاريخ الميلاد" },
  "age.calculate": { en: "Calculate Age", ar: "احسب العمر" },
  "age.years": { en: "Years", ar: "سنة" },
  "age.months": { en: "Months", ar: "شهر" },
  "age.days": { en: "Days", ar: "يوم" },
  "age.nextBirthday": { en: "Next Birthday In", ar: "عيد ميلادك القادم بعد" },
  
  // Loan
  "loan.title": { en: "Loan Calculator", ar: "حاسبة القرض" },
  "loan.amount": { en: "Loan Amount", ar: "مبلغ القرض" },
  "loan.rate": { en: "Interest Rate (%)", ar: "نسبة الفائدة (%)" },
  "loan.term": { en: "Term (months)", ar: "المدة (أشهر)" },
  "loan.calculate": { en: "Calculate", ar: "احسب" },
  "loan.monthly": { en: "Monthly Payment", ar: "القسط الشهري" },
  "loan.total": { en: "Total Payment", ar: "المبلغ الإجمالي" },
  "loan.interest": { en: "Total Interest", ar: "إجمالي الفائدة" },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [lang, dir]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));
  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};

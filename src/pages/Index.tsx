import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { Globe, Heart, DollarSign, Cake, Landmark } from "lucide-react";
import BMICalculator from "@/components/BMICalculator";
import CurrencyConverter from "@/components/CurrencyConverter";
import AgeCalculator from "@/components/AgeCalculator";
import LoanCalculator from "@/components/LoanCalculator";
import AdUnit from "@/components/AdUnit";
import AdUnit2 from "@/components/AdUnit2";
import EducationalContent from "@/components/EducationalContent";
import Footer from "@/components/Footer";

type Tab = "bmi" | "currency" | "age" | "loan";

const tabConfig: { id: Tab; icon: typeof Heart; gradient: string; navKey: string }[] = [
  { id: "bmi", icon: Heart, gradient: "gradient-health", navKey: "nav.bmi" },
  { id: "currency", icon: DollarSign, gradient: "gradient-secondary", navKey: "nav.currency" },
  { id: "age", icon: Cake, gradient: "gradient-accent", navKey: "nav.age" },
  { id: "loan", icon: Landmark, gradient: "gradient-primary", navKey: "nav.loan" },
];

const Index = () => {
  const { t, toggleLang, lang } = useLang();
  const [activeTab, setActiveTab] = useState<Tab>("bmi");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-8 pb-4 px-4">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground tracking-tight">{t("app.title")}</h1>
            <p className="text-sm text-muted-foreground mt-0.5">{t("app.subtitle")}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLang}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card shadow-card border border-border text-sm font-medium text-foreground"
          >
            <Globe className="w-4 h-4 text-muted-foreground" />
            {lang === "en" ? "عربي" : "EN"}
          </motion.button>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="px-4 pb-6">
        <div className="max-w-lg mx-auto flex gap-2">
          {tabConfig.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-2xl transition-all ${
                  isActive
                    ? `${tab.gradient} text-primary-foreground shadow-card-hover`
                    : "bg-card text-muted-foreground border border-border"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-semibold">{t(tab.navKey)}</span>
              </motion.button>
            );
          })}
        </div>
      </nav>

      <AdUnit2 />

      {/* Calculator Content */}
      <main className="px-4 pb-12">
        <div className="max-w-lg mx-auto">
          <motion.div
            className="bg-card rounded-3xl shadow-card p-6 border border-border"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === "bmi" && <BMICalculator />}
                {activeTab === "currency" && <CurrencyConverter />}
                {activeTab === "age" && <AgeCalculator />}
                {activeTab === "loan" && <LoanCalculator />}
                <EducationalContent calculator={activeTab} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <AdUnit />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

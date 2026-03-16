import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { Landmark } from "lucide-react";

const LoanCalculator = () => {
  const { t } = useLang();
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [result, setResult] = useState<{ monthly: number; total: number; interest: number } | null>(null);

  const calculate = () => {
    const p = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term);
    if (!p || !r || !n) return;

    const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    const interest = total - p;

    setResult({
      monthly: Math.round(monthly * 100) / 100,
      total: Math.round(total * 100) / 100,
      interest: Math.round(interest * 100) / 100,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
          <Landmark className="w-5 h-5 text-primary-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">{t("loan.title")}</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">{t("loan.amount")}</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            placeholder="100000"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">{t("loan.rate")}</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="5"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-1.5 block">{t("loan.term")}</label>
            <input
              type="number"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="60"
            />
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={calculate}
          className="w-full py-3.5 rounded-xl gradient-primary text-primary-foreground font-semibold text-lg glow-primary"
        >
          {t("loan.calculate")}
        </motion.button>
      </div>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          {[
            { label: "loan.monthly", value: result.monthly, highlight: true },
            { label: "loan.total", value: result.total, highlight: false },
            { label: "loan.interest", value: result.interest, highlight: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`p-4 rounded-2xl ${item.highlight ? "gradient-primary text-primary-foreground" : "gradient-surface shadow-card"} flex justify-between items-center`}
            >
              <span className={`text-sm ${item.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{t(item.label)}</span>
              <span className={`text-xl font-bold ${item.highlight ? "" : "text-foreground"}`}>{item.value.toLocaleString()}</span>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LoanCalculator;

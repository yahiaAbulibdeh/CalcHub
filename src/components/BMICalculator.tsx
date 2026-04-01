import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { Heart } from "lucide-react";

const BMICalculator = () => {
  const { t } = useLang();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<{ bmi: number; category: string } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (!w || !h) return;
    const bmi = w / (h * h);
    let category = "bmi.normal";
    if (bmi < 18.5) category = "bmi.underweight";
    else if (bmi < 25) category = "bmi.normal";
    else if (bmi < 30) category = "bmi.overweight";
    else category = "bmi.obese";
    setResult({ bmi: Math.round(bmi * 10) / 10, category });
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "bmi.underweight": return "text-accent";
      case "bmi.normal": return "text-primary";
      case "bmi.overweight": return "text-secondary";
      case "bmi.obese": return "text-destructive";
      default: return "text-primary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl gradient-health flex items-center justify-center">
          <Heart className="w-5 h-5 text-primary-foreground" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">{t("bmi.title")}</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">{t("bmi.weight")}</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            placeholder="70"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1.5 block">{t("bmi.height")}</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            placeholder="175"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={calculate}
          className="w-full py-3.5 rounded-xl gradient-health text-primary-foreground font-semibold text-lg transition-all glow-secondary"
        >
          {t("bmi.calculate")}
        </motion.button>
      </div>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl gradient-surface shadow-card text-center space-y-2"
        >
          <p className="text-sm text-muted-foreground">{t("bmi.result")}</p>
          <p className="text-5xl font-bold text-foreground">{result.bmi}</p>
          <p className={`text-lg font-semibold ${getCategoryColor(result.category)}`}>
            {t(result.category)}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default BMICalculator;

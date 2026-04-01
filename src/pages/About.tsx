import { useLang } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft, Info, Heart, DollarSign, Cake, Landmark, Zap, Shield, Globe } from "lucide-react";

const About = () => {
  const { lang } = useLang();

  const features = lang === "ar"
    ? [
        { icon: Heart, title: "حاسبة مؤشر كتلة الجسم (BMI)", desc: "احسب مؤشر كتلة جسمك بسرعة ودقة لمعرفة ما إذا كان وزنك صحياً. أداتنا تستخدم الصيغة الطبية المعتمدة عالمياً وتعطيك تصنيفاً فورياً لحالتك الصحية.", gradient: "gradient-health" },
        { icon: DollarSign, title: "محوّل العملات", desc: "حوّل بين أكثر من 50 عملة عالمية وعربية بسهولة. يدعم المحوّل جميع العملات الرئيسية والعربية مع واجهة بحث سريعة وسهلة الاستخدام.", gradient: "gradient-secondary" },
        { icon: Cake, title: "حاسبة العمر", desc: "اكتشف عمرك بالسنوات والأشهر والأيام بدقة متناهية. تخبرك أيضاً بعدد الأيام المتبقية لعيد ميلادك القادم.", gradient: "gradient-accent" },
        { icon: Landmark, title: "حاسبة القروض", desc: "خطط لقروضك بذكاء. احسب القسط الشهري وإجمالي المبلغ المدفوع وإجمالي الفوائد لأي قرض بنكي بإدخال المبلغ ونسبة الفائدة والمدة.", gradient: "gradient-primary" },
      ]
    : [
        { icon: Heart, title: "BMI Calculator", desc: "Quickly and accurately calculate your Body Mass Index to determine if your weight is healthy. Our tool uses the globally recognized medical formula and provides instant health status classification.", gradient: "gradient-health" },
        { icon: DollarSign, title: "Currency Converter", desc: "Convert between 50+ global and Arab currencies with ease. Supports all major and regional currencies with a fast, intuitive search interface.", gradient: "gradient-secondary" },
        { icon: Cake, title: "Age Calculator", desc: "Discover your exact age in years, months, and days with precision. Also tells you how many days until your next birthday.", gradient: "gradient-accent" },
        { icon: Landmark, title: "Loan Calculator", desc: "Plan your loans smartly. Calculate monthly payments, total amount paid, and total interest for any bank loan by entering the amount, interest rate, and term.", gradient: "gradient-primary" },
      ];

  return (
    <div className="min-h-screen bg-background">
      <header className="pt-8 pb-4 px-4">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4" />
            {lang === "ar" ? "العودة للرئيسية" : "Back to Home"}
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Info className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              {lang === "ar" ? "من نحن" : "About Us"}
            </h1>
          </div>
        </div>
      </header>

      <main className="px-4 pb-12">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Mission */}
          <div className="bg-card rounded-3xl shadow-card p-6 md:p-8 border border-border space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              {lang === "ar" ? "مهمتنا" : "Our Mission"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {lang === "ar"
                ? "CalcHub (حاسبتي) هو موقع إلكتروني مجاني يهدف إلى توفير أدوات حسابية دقيقة وسهلة الاستخدام للجميع. نؤمن بأن الجميع يستحق الوصول إلى أدوات حسابية موثوقة تساعدهم في اتخاذ قرارات مدروسة في حياتهم اليومية، سواء كانت متعلقة بالصحة أو المال أو التخطيط الشخصي."
                : "CalcHub is a free website dedicated to providing accurate and easy-to-use calculation tools for everyone. We believe everyone deserves access to reliable tools that help them make informed decisions in their daily lives, whether related to health, finance, or personal planning."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {lang === "ar"
                ? "تم تصميم جميع أدواتنا بعناية لتكون بسيطة وسريعة ودقيقة، مع دعم كامل للغة العربية والإنجليزية لخدمة أكبر عدد ممكن من المستخدمين حول العالم."
                : "All our tools are carefully designed to be simple, fast, and accurate, with full support for both Arabic and English to serve as many users as possible worldwide."}
            </p>
          </div>

          {/* Features */}
          <div className="bg-card rounded-3xl shadow-card p-6 md:p-8 border border-border space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              {lang === "ar" ? "أدواتنا" : "Our Tools"}
            </h2>
            <div className="space-y-5">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className={`w-10 h-10 rounded-xl ${feature.gradient} flex items-center justify-center shrink-0`}>
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why CalcHub */}
          <div className="bg-card rounded-3xl shadow-card p-6 md:p-8 border border-border space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              {lang === "ar" ? "لماذا CalcHub؟" : "Why CalcHub?"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Zap,
                  title: lang === "ar" ? "سريع ومجاني" : "Fast & Free",
                  desc: lang === "ar" ? "جميع الأدوات مجانية 100% وتعمل فوراً دون تسجيل" : "All tools are 100% free and work instantly without registration",
                },
                {
                  icon: Shield,
                  title: lang === "ar" ? "خصوصية تامة" : "Full Privacy",
                  desc: lang === "ar" ? "جميع الحسابات تتم في متصفحك ولا نخزن أي بيانات" : "All calculations happen in your browser — we store no data",
                },
                {
                  icon: Globe,
                  title: lang === "ar" ? "عربي وإنجليزي" : "Arabic & English",
                  desc: lang === "ar" ? "واجهة كاملة بالعربية والإنجليزية مع دعم RTL" : "Full interface in Arabic and English with RTL support",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="text-center p-4 rounded-2xl gradient-surface">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-bold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

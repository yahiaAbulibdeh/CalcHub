import { useLang } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

const TermsOfService = () => {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <header className="pt-8 pb-4 px-4">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4" />
            {lang === "ar" ? "العودة للرئيسية" : "Back to Home"}
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
              <FileText className="w-5 h-5 text-accent-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              {lang === "ar" ? "شروط الاستخدام" : "Terms of Service"}
            </h1>
          </div>
        </div>
      </header>

      <main className="px-4 pb-12">
        <div className="max-w-2xl mx-auto bg-card rounded-3xl shadow-card p-6 md:p-8 border border-border space-y-6">
          {lang === "ar" ? (
            <>
              <p className="text-muted-foreground leading-relaxed">آخر تحديث: أبريل 2026</p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">قبول الشروط</h2>
                <p className="text-muted-foreground leading-relaxed">
                  باستخدامك لموقع CalcHub (حاسبتي)، فإنك توافق على الالتزام بشروط الاستخدام هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام الموقع.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">وصف الخدمة</h2>
                <p className="text-muted-foreground leading-relaxed">
                  يوفر CalcHub مجموعة من الأدوات الحسابية المجانية عبر الإنترنت تشمل: حاسبة مؤشر كتلة الجسم (BMI)، محوّل العملات، حاسبة العمر، وحاسبة القروض. هذه الأدوات مصممة لأغراض إعلامية وتعليمية فقط.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">إخلاء المسؤولية</h2>
                <p className="text-muted-foreground leading-relaxed">
                  النتائج المقدمة من أدواتنا الحسابية هي لأغراض إرشادية فقط ولا تُعد بديلاً عن الاستشارة المهنية. لا نتحمل مسؤولية أي قرارات مالية أو صحية تُتخذ بناءً على نتائج هذه الأدوات. أسعار صرف العملات تقريبية وقد تختلف عن الأسعار الفعلية في السوق.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">الملكية الفكرية</h2>
                <p className="text-muted-foreground leading-relaxed">
                  جميع المحتويات المتاحة على الموقع، بما في ذلك التصميم والنصوص والرسومات والشعارات، هي ملك لـ CalcHub ومحمية بموجب قوانين حقوق الملكية الفكرية.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">الاستخدام المقبول</h2>
                <p className="text-muted-foreground leading-relaxed">
                  يجب استخدام الموقع للأغراض المشروعة فقط. يُحظر استخدام الموقع بطريقة قد تضر بالموقع أو تعطل خدماته أو تؤثر سلباً على تجربة المستخدمين الآخرين.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">تعديل الشروط</h2>
                <p className="text-muted-foreground leading-relaxed">
                  نحتفظ بالحق في تعديل شروط الاستخدام في أي وقت. ستصبح التعديلات سارية فور نشرها على الموقع. يُنصح بمراجعة هذه الصفحة بشكل دوري.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">التواصل</h2>
                <p className="text-muted-foreground leading-relaxed">
                  لأي استفسارات حول شروط الاستخدام، تواصل معنا عبر: contact@calchub.com
                </p>
              </section>
            </>
          ) : (
            <>
              <p className="text-muted-foreground leading-relaxed">Last updated: April 2026</p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using CalcHub, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the website.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  CalcHub provides a suite of free online calculation tools including: Body Mass Index (BMI) Calculator, Currency Converter, Age Calculator, and Loan Calculator. These tools are designed for informational and educational purposes only.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Results provided by our calculation tools are for guidance only and should not be considered a substitute for professional advice. We are not responsible for any financial or health decisions made based on these tools' results. Currency exchange rates are approximate and may differ from actual market rates.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including design, text, graphics, and logos, is the property of CalcHub and is protected by intellectual property laws.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Acceptable Use</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The website must be used for lawful purposes only. You may not use the site in any way that could damage, disable, or impair the service or interfere with other users' experience.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Modification of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes become effective immediately upon posting. You are advised to review this page periodically.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For any questions about these Terms of Service, contact us at: contact@calchub.com
                </p>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;

import { useLang } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

const PrivacyPolicy = () => {
  const { t, lang } = useLang();

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
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </h1>
          </div>
        </div>
      </header>

      <main className="px-4 pb-12">
        <div className="max-w-2xl mx-auto bg-card rounded-3xl shadow-card p-6 md:p-8 border border-border space-y-6">
          {lang === "ar" ? (
            <>
              <p className="text-muted-foreground leading-relaxed">
                آخر تحديث: أبريل 2026
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">مقدمة</h2>
                <p className="text-muted-foreground leading-relaxed">
                  نرحب بكم في CalcHub (حاسبتي). نحن نحترم خصوصيتكم ونلتزم بحماية بياناتكم الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتكم عند استخدام موقعنا الإلكتروني.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">المعلومات التي نجمعها</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>معلومات الاستخدام:</strong> نقوم بجمع معلومات حول كيفية تفاعلك مع موقعنا تلقائياً، بما في ذلك عنوان IP الخاص بك، ونوع المتصفح، والصفحات التي تزورها، ووقت الزيارة.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>بيانات الحاسبة:</strong> جميع الحسابات التي تقوم بها (مؤشر كتلة الجسم، تحويل العملات، حساب العمر، حساب القروض) تتم محلياً في متصفحك ولا يتم إرسالها أو تخزينها على خوادمنا.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">ملفات تعريف الارتباط (Cookies)</h2>
                <p className="text-muted-foreground leading-relaxed">
                  نستخدم ملفات تعريف الارتباط وتقنيات مماثلة لتحسين تجربتك وتحليل حركة المرور على الموقع. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">الإعلانات</h2>
                <p className="text-muted-foreground leading-relaxed">
                  نستخدم Google AdSense لعرض الإعلانات. قد تستخدم Google وشركاؤها ملفات تعريف الارتباط لعرض إعلانات مخصصة بناءً على زياراتك السابقة لموقعنا أو مواقع أخرى. يمكنك إلغاء الاشتراك في الإعلانات المخصصة من خلال <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">إعدادات إعلانات Google</a>.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">أمان البيانات</h2>
                <p className="text-muted-foreground leading-relaxed">
                  نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الكشف أو الإتلاف. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100%.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">حقوقك</h2>
                <p className="text-muted-foreground leading-relaxed">
                  لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها وحذفها. يمكنك أيضاً الاعتراض على معالجة بياناتك أو طلب تقييد المعالجة.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">التواصل معنا</h2>
                <p className="text-muted-foreground leading-relaxed">
                  إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر البريد الإلكتروني: contact@calchub.com
                </p>
              </section>
            </>
          ) : (
            <>
              <p className="text-muted-foreground leading-relaxed">
                Last updated: April 2026
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to CalcHub. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Usage Information:</strong> We automatically collect information about how you interact with our site, including your IP address, browser type, pages visited, and time of visit.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Calculator Data:</strong> All calculations you perform (BMI, currency conversion, age calculation, loan calculation) are processed locally in your browser and are never sent to or stored on our servers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar technologies to enhance your experience and analyze site traffic. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Advertising</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use Google AdSense to display advertisements. Google and its partners may use cookies to serve personalized ads based on your prior visits to our website or other websites. You can opt out of personalized advertising through <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, correct, and delete your personal data. You may also object to the processing of your data or request restriction of processing.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at: contact@calchub.com
                </p>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

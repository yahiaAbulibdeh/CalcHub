import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";

const Footer = () => {
  const { lang } = useLang();

  return (
    <footer className="border-t border-border bg-card mt-8">
      <div className="max-w-lg mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            {lang === "ar" ? "من نحن" : "About Us"}
          </Link>
          <span className="text-border">•</span>
          <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
            {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
          </Link>
          <span className="text-border">•</span>
          <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
            {lang === "ar" ? "شروط الاستخدام" : "Terms of Service"}
          </Link>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4">
          © {new Date().getFullYear()} CalcHub. {lang === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

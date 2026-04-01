import { useLang } from "@/contexts/LanguageContext";

type ContentKey = "bmi" | "currency" | "age" | "loan";

const content: Record<ContentKey, { en: { title: string; sections: { heading: string; text: string }[] }; ar: { title: string; sections: { heading: string; text: string }[] } }> = {
  bmi: {
    en: {
      title: "Understanding Body Mass Index (BMI)",
      sections: [
        {
          heading: "What is BMI?",
          text: "Body Mass Index (BMI) is a simple numerical measure that uses your height and weight to estimate whether your body weight falls within a healthy range. It is calculated by dividing your weight in kilograms by the square of your height in meters (BMI = kg/m²). While BMI doesn't directly measure body fat, it serves as a useful screening tool used by healthcare professionals worldwide.",
        },
        {
          heading: "BMI Categories",
          text: "BMI values are divided into standard categories: Underweight (below 18.5), Normal weight (18.5–24.9), Overweight (25–29.9), and Obese (30 and above). These ranges help identify potential health risks. A normal BMI is associated with lower risks of chronic diseases such as heart disease, diabetes, and hypertension.",
        },
        {
          heading: "Limitations of BMI",
          text: "While BMI is widely used, it has limitations. It doesn't distinguish between muscle mass and fat mass, so athletes with high muscle mass may have a high BMI despite being healthy. Additionally, BMI doesn't account for age, gender, ethnicity, or body fat distribution. It's best used as one of several health indicators alongside waist circumference, body fat percentage, and other clinical assessments.",
        },
        {
          heading: "Tips for a Healthy BMI",
          text: "Maintaining a healthy BMI involves a balanced diet rich in fruits, vegetables, whole grains, and lean proteins, combined with regular physical activity (at least 150 minutes of moderate exercise per week). Staying hydrated, getting adequate sleep, and managing stress also contribute to maintaining a healthy weight.",
        },
      ],
    },
    ar: {
      title: "فهم مؤشر كتلة الجسم (BMI)",
      sections: [
        {
          heading: "ما هو مؤشر كتلة الجسم؟",
          text: "مؤشر كتلة الجسم (BMI) هو مقياس رقمي بسيط يستخدم طولك ووزنك لتقدير ما إذا كان وزن جسمك ضمن النطاق الصحي. يُحسب بقسمة وزنك بالكيلوغرام على مربع طولك بالمتر (BMI = كغ/م²). على الرغم من أن مؤشر كتلة الجسم لا يقيس دهون الجسم بشكل مباشر، إلا أنه يُعد أداة فحص مفيدة يستخدمها متخصصو الرعاية الصحية حول العالم.",
        },
        {
          heading: "تصنيفات مؤشر كتلة الجسم",
          text: "تُقسم قيم مؤشر كتلة الجسم إلى تصنيفات معيارية: نقص الوزن (أقل من 18.5)، الوزن الطبيعي (18.5–24.9)، زيادة الوزن (25–29.9)، والسمنة (30 وأكثر). تساعد هذه النطاقات في تحديد المخاطر الصحية المحتملة. يرتبط مؤشر كتلة الجسم الطبيعي بمخاطر أقل للأمراض المزمنة مثل أمراض القلب والسكري وارتفاع ضغط الدم.",
        },
        {
          heading: "قيود مؤشر كتلة الجسم",
          text: "رغم انتشار استخدامه، لمؤشر كتلة الجسم قيود. فهو لا يميز بين الكتلة العضلية والدهون، لذلك قد يكون لدى الرياضيين ذوي الكتلة العضلية العالية مؤشر كتلة جسم مرتفع رغم كونهم أصحاء. كما أنه لا يأخذ في الاعتبار العمر أو الجنس أو العرق أو توزيع الدهون في الجسم. من الأفضل استخدامه كأحد المؤشرات الصحية إلى جانب محيط الخصر ونسبة الدهون وتقييمات سريرية أخرى.",
        },
        {
          heading: "نصائح لمؤشر كتلة جسم صحي",
          text: "يتطلب الحفاظ على مؤشر كتلة جسم صحي نظاماً غذائياً متوازناً غنياً بالفواكه والخضروات والحبوب الكاملة والبروتينات الخالية من الدهون، مع ممارسة نشاط بدني منتظم (150 دقيقة على الأقل من التمارين المعتدلة أسبوعياً). كما يساهم شرب الماء الكافي والنوم الجيد وإدارة التوتر في الحفاظ على وزن صحي.",
        },
      ],
    },
  },
  currency: {
    en: {
      title: "Understanding Currency Exchange",
      sections: [
        {
          heading: "How Currency Exchange Works",
          text: "Currency exchange is the process of converting one country's currency into another. Exchange rates fluctuate based on economic factors including inflation, interest rates, political stability, and market demand. Understanding these rates is essential for international travel, online shopping, remittances, and business transactions.",
        },
        {
          heading: "Types of Exchange Rates",
          text: "There are two main types: fixed (pegged) rates, where a government sets a rate against another currency (like the Saudi Riyal pegged to the US Dollar), and floating rates, which are determined by market forces. Many Arab countries use fixed or managed exchange rates for stability.",
        },
        {
          heading: "Tips for Currency Exchange",
          text: "To get the best exchange rates: compare rates from multiple sources, avoid exchanging at airports where rates are typically worse, consider using online transfer services for lower fees, and be aware of hidden charges. For large amounts, even small rate differences can result in significant savings.",
        },
      ],
    },
    ar: {
      title: "فهم تحويل العملات",
      sections: [
        {
          heading: "كيف يعمل تحويل العملات",
          text: "تحويل العملات هو عملية تبديل عملة دولة بعملة دولة أخرى. تتقلب أسعار الصرف بناءً على عوامل اقتصادية تشمل التضخم وأسعار الفائدة والاستقرار السياسي والطلب في السوق. فهم هذه الأسعار ضروري للسفر الدولي والتسوق عبر الإنترنت والتحويلات المالية والمعاملات التجارية.",
        },
        {
          heading: "أنواع أسعار الصرف",
          text: "هناك نوعان رئيسيان: الأسعار الثابتة (المربوطة)، حيث تحدد الحكومة سعراً مقابل عملة أخرى (مثل الريال السعودي المربوط بالدولار الأمريكي)، والأسعار العائمة التي تحددها قوى السوق. تستخدم العديد من الدول العربية أسعار صرف ثابتة أو مُدارة لتحقيق الاستقرار.",
        },
        {
          heading: "نصائح لتحويل العملات",
          text: "للحصول على أفضل أسعار الصرف: قارن الأسعار من مصادر متعددة، تجنب التحويل في المطارات حيث تكون الأسعار عادةً أسوأ، فكر في استخدام خدمات التحويل عبر الإنترنت لرسوم أقل، وانتبه للرسوم المخفية. بالنسبة للمبالغ الكبيرة، حتى الفروقات الصغيرة في الأسعار يمكن أن تؤدي إلى وفورات كبيرة.",
        },
      ],
    },
  },
  age: {
    en: {
      title: "Understanding Age Calculation",
      sections: [
        {
          heading: "How Age is Calculated",
          text: "Age calculation involves determining the time elapsed between a birth date and the current date. While it seems simple, precise age calculation must account for varying month lengths (28-31 days), leap years (every 4 years, with exceptions), and time zone differences. Our calculator handles all these complexities automatically.",
        },
        {
          heading: "Age in Different Cultures",
          text: "Different cultures calculate age differently. In most Western countries, age is counted from zero at birth. In some East Asian traditions, a baby is considered one year old at birth. In Islamic culture, age may be calculated using the Hijri (lunar) calendar, which results in a slightly different age than the Gregorian calendar.",
        },
        {
          heading: "Fun Age Facts",
          text: "Did you know? You're actually older in some calendar systems than others. A year on Mars is about 687 Earth days, so you'd be roughly half your Earth age on Mars. Also, because of leap years, people born on February 29th technically only have a birthday every four years!",
        },
      ],
    },
    ar: {
      title: "فهم حساب العمر",
      sections: [
        {
          heading: "كيف يُحسب العمر",
          text: "يتضمن حساب العمر تحديد الوقت المنقضي بين تاريخ الميلاد والتاريخ الحالي. رغم أنه يبدو بسيطاً، يجب أن يراعي الحساب الدقيق للعمر اختلاف أطوال الأشهر (28-31 يوماً)، والسنوات الكبيسة (كل 4 سنوات مع استثناءات)، وفروقات المناطق الزمنية. حاسبتنا تتعامل مع كل هذه التعقيدات تلقائياً.",
        },
        {
          heading: "العمر في الثقافات المختلفة",
          text: "تختلف طريقة حساب العمر بين الثقافات. في معظم الدول الغربية، يُحسب العمر من الصفر عند الولادة. في بعض التقاليد في شرق آسيا، يُعتبر الطفل في عمر سنة واحدة عند ولادته. في الثقافة الإسلامية، قد يُحسب العمر باستخدام التقويم الهجري (القمري)، مما يؤدي إلى عمر مختلف قليلاً عن التقويم الميلادي.",
        },
        {
          heading: "حقائق ممتعة عن العمر",
          text: "هل تعلم؟ أنت في الواقع أكبر سناً في بعض أنظمة التقويم من غيرها. السنة على المريخ تبلغ حوالي 687 يوماً أرضياً، لذا ستكون تقريباً نصف عمرك الأرضي على المريخ. أيضاً، بسبب السنوات الكبيسة، فإن الأشخاص المولودين في 29 فبراير يحتفلون بعيد ميلادهم فعلياً كل أربع سنوات فقط!",
        },
      ],
    },
  },
  loan: {
    en: {
      title: "Understanding Loan Calculations",
      sections: [
        {
          heading: "How Loan Payments Work",
          text: "Most loans use an amortization schedule where each monthly payment consists of both principal (the original amount borrowed) and interest. In the early years of a loan, a larger portion of each payment goes toward interest. Over time, as the principal decreases, more of each payment goes toward paying down the loan balance.",
        },
        {
          heading: "Understanding Interest Rates",
          text: "Interest rates represent the cost of borrowing money, expressed as a percentage of the loan amount per year. Fixed rates remain the same throughout the loan term, providing predictable payments. Variable rates can change based on market conditions. Even a small difference in interest rate (e.g., 0.5%) can result in thousands saved or spent over the life of a long-term loan.",
        },
        {
          heading: "Tips for Smart Borrowing",
          text: "Before taking a loan: compare offers from multiple lenders, understand the total cost (not just monthly payments), check for prepayment penalties, maintain a good credit score for better rates, and borrow only what you need. Consider making extra payments when possible to reduce total interest paid and shorten the loan term.",
        },
        {
          heading: "Islamic Finance Alternatives",
          text: "In Islamic finance, interest (Riba) is prohibited. Instead, alternatives like Murabaha (cost-plus financing), Ijara (leasing), and Musharaka (partnership) are used. These comply with Sharia law while providing similar financial solutions. Many banks in the Arab world offer both conventional and Islamic financing options.",
        },
      ],
    },
    ar: {
      title: "فهم حسابات القروض",
      sections: [
        {
          heading: "كيف تعمل أقساط القروض",
          text: "تستخدم معظم القروض جدول إطفاء حيث يتكون كل قسط شهري من أصل الدين (المبلغ الأصلي المقترض) والفائدة. في السنوات الأولى من القرض، يذهب جزء أكبر من كل دفعة نحو الفائدة. مع مرور الوقت، مع انخفاض أصل الدين، يذهب المزيد من كل دفعة نحو سداد رصيد القرض.",
        },
        {
          heading: "فهم أسعار الفائدة",
          text: "تمثل أسعار الفائدة تكلفة اقتراض المال، معبّراً عنها كنسبة مئوية من مبلغ القرض سنوياً. الأسعار الثابتة تبقى كما هي طوال فترة القرض، مما يوفر أقساطاً متوقعة. الأسعار المتغيرة يمكن أن تتغير بناءً على ظروف السوق. حتى فرق بسيط في سعر الفائدة (مثل 0.5%) يمكن أن يؤدي إلى توفير أو إنفاق آلاف خلال فترة القرض الطويل.",
        },
        {
          heading: "نصائح للاقتراض الذكي",
          text: "قبل أخذ قرض: قارن العروض من عدة جهات مقرضة، افهم التكلفة الإجمالية (وليس فقط الأقساط الشهرية)، تحقق من غرامات السداد المبكر، حافظ على تصنيف ائتماني جيد للحصول على أسعار أفضل، واقترض فقط ما تحتاجه. فكر في سداد دفعات إضافية عند الإمكان لتقليل إجمالي الفائدة المدفوعة وتقصير مدة القرض.",
        },
        {
          heading: "بدائل التمويل الإسلامي",
          text: "في التمويل الإسلامي، يُحرّم الربا (الفائدة). بدلاً من ذلك، تُستخدم بدائل مثل المرابحة (التمويل بالتكلفة مع هامش ربح)، والإجارة (التأجير)، والمشاركة. تتوافق هذه البدائل مع أحكام الشريعة الإسلامية مع توفير حلول مالية مماثلة. تقدم العديد من البنوك في العالم العربي خيارات التمويل التقليدي والإسلامي معاً.",
        },
      ],
    },
  },
};

interface EducationalContentProps {
  calculator: ContentKey;
}

const EducationalContent = ({ calculator }: EducationalContentProps) => {
  const { lang } = useLang();
  const data = content[calculator][lang];

  return (
    <article className="mt-8 space-y-5">
      <h2 className="text-xl font-bold text-foreground">{data.title}</h2>
      {data.sections.map((section, i) => (
        <section key={i} className="space-y-2">
          <h3 className="text-base font-semibold text-foreground">{section.heading}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{section.text}</p>
        </section>
      ))}
    </article>
  );
};

export default EducationalContent;

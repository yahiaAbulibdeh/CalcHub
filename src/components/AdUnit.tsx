import { useEffect, useRef } from "react";

const AdUnit = () => {
  const adRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!pushed.current && adRef.current) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        pushed.current = true;
      } catch (e) {
        // AdSense not loaded
      }
    }
  }, []);

  return (
    <div ref={adRef} className="my-6 max-w-lg mx-auto">
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-9218962599484368"
        data-ad-slot="5568885083"
      />
    </div>
  );
};

export default AdUnit;

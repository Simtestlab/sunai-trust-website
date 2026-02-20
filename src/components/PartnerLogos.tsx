import React, { useState, useEffect, useRef } from "react";
import l2 from "@/assets/logo2.png";
import l3 from "@/assets/logo3.png";
import l4 from "@/assets/logo4.png";
import l5 from "@/assets/logo5.png";
import l7 from "@/assets/logo7.png";

// Ordered partners to display at end of homepage as requested
const partners = [
  { src: l7, label: "Partner 6" },
  { src: l2, label: "Partner 1" },
  { src: l3, label: "Partner 2" },
  { src: l4, label: "Partner 3" },
  { src: l5, label: "Partner 4" },
];

const PartnerLogos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === "undefined") return 5;
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 1024) return 3;
    return 5;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 2500);
    return () => {
      if (intervalId) clearInterval(intervalId as ReturnType<typeof setInterval>);
    };
  }, [isVisible]);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(3);
      else setVisibleCount(5);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-base md:text-lg tracking-wider font-semibold text-black uppercase">
            Brands that trust us
          </h3>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
        </div>

        <div className="relative h-40 flex justify-center items-center">
          <div className="relative w-full max-w-5xl h-32 overflow-hidden flex justify-center gap-6">
            {(() => {
              const visible = [] as { src: string; alt: string }[];
              for (let i = 0; i < visibleCount; i++) {
                const idx = (currentIndex + i) % partners.length;
                visible.push({ src: partners[idx].src, alt: partners[idx].label });
              }
              return visible.map((logo, idx) => (
                <div key={idx} className="flex-1 bg-white rounded-xl shadow-sm p-6 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 md:w-28 lg:w-32 rounded-full bg-white p-2 flex items-center justify-center overflow-hidden">
                    <img src={logo.src} alt={logo.alt} className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-3">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-red-500 scale-125 shadow-lg"
                : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;

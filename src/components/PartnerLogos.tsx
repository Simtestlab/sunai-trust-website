import React, { useState, useEffect, useRef } from "react";
import l1 from "@/assets/logo1.jpg";
import l2 from "@/assets/logo2.png";
import l3 from "@/assets/logo3.png";
import l4 from "@/assets/logo4.jpg";
import l5 from "@/assets/logo5.png";
import l6 from "@/assets/logo6.png";
import l7 from "@/assets/logo7.png";

const logos = [l1, l2, l3, l4, l5, l6, l7];
const labels = [
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
  "Partner 5",
  "Partner 6",
  "Partner 7",
];

const PartnerLogos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Intersection Observer to detect visibility
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

  // Start scrolling only when visible
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-base md:text-lg tracking-wider font-semibold text-black uppercase">
            Brands that trust us
          </h3>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-2"></div>
        </div>

        {/* Scrolling Slider */}
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
          <div
            className="flex gap-10 items-center transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 20}%)` }} // 100 / 5 = 20
          >
            {logos.map((src, i) => (
              <div
                key={i}
                className="flex-1 min-w-[20%] flex items-center justify-center px-4"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white p-2 flex items-center justify-center overflow-hidden shadow-sm">
                  <img
                    src={src}
                    alt={labels[i]}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 gap-3">
          {logos.map((_, index) => (
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

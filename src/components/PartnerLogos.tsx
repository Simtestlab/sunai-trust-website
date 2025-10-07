import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const getVisibleLogos = () => {
    const visible: { src: string; label: string }[] = [];
    const visibleCount = 5; // number of logos visible at once
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % logos.length;
      visible.push({ src: logos[index], label: labels[index] });
    }
    return visible;
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h3 className="text-base md:text-lg tracking-wider font-semibold text-black uppercase">
            Brands that trust us
          </h3>
          <div className="w-12 h-0.5 bg-red-500 mx-auto mt-2"></div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}
          >
            {logos.map((src, i) => (
              <div
                key={i}
                className="flex-1 min-w-[20%] flex items-center justify-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white p-2 md:p-3 flex items-center justify-center overflow-hidden shadow-sm">
                  <img
                    src={src}
                    alt={labels[i] ?? `partner-${i}`}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-3">
          {logos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
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

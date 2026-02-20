import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-image.jpg";

const taglines = [
  "Nurturing Lives. Restoring Balance.",
  "Care. Create. Sustain.",
  "Empowering Generations. Sustaining Futures.",
];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden py-12 md:py-16 lg:py-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Community empowerment and positive change"
          fetchPriority="high"
          loading="eager"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-700/90 via-sky-500/70 to-sky-300/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 text-white">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-5 drop-shadow-lg">
              <span className="block">Listeing to</span>
              <span className="block text-accent">Needs,</span>
              <span className="block">Building</span>
              <span className="block text-accent">Features..!</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/95 mb-4 md:mb-5 max-w-2xl font-light leading-relaxed drop-shadow">
              We nurture young minds, protect nature, and strengthen community health.
              Together, we are building a compassionate ecosystem for a healthier,
              greener, and empowered tomorrow.
            </p>

            {/* Rotating tagline */}
            <div className="mb-5 md:mb-6 h-7 md:h-8 overflow-hidden">
              <p
                key={taglineIndex}
                className="text-base md:text-lg font-medium text-accent/90 tracking-wide animate-fade-up"
              >
                &ldquo;{taglines[taglineIndex]}&rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-10">
              <a
                href="/about-us"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-base md:text-lg hover:bg-accent/90 transition-colors"
              >
                About SUNAI
              </a>
              <a
                href="/volunteer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-white text-white font-semibold text-base md:text-lg hover:bg-white/10 transition-colors"
              >
                Be the Change
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 border-t border-white/20">
              {[
                { label: "Young Minds Mentored", value: "500+" },
                { label: "Trees Planted", value: "10,000+" },
                { label: "Lives Touched", value: "5,000+" },
                { label: "Communities Served", value: "50+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent">{stat.value}</p>
                  <p className="text-xs md:text-sm text-white/80 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

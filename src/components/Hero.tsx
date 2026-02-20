import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <section
      id="home"
      className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-4"
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-1">
              <span className="block">SUNAI is a</span>
              <span className="block text-accent">Movement of Hope.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-2 max-w-2xl font-light leading-snug">
              We nurture young minds, protect nature, and strengthen community health.
              Together, we are building a compassionate ecosystem for a healthier,
              greener, and empowered tomorrow.
            </p>

            {/* Rotating taglines */}
            <div className="mb-2 space-y-0">
              {[
                "Nurturing Lives. Restoring Balance.",
                "Care. Create. Sustain.",
                "Empowering Generations. Sustaining Futures.",
              ].map((tagline) => (
                <p
                  key={tagline}
                  className="text-base md:text-lg font-medium text-accent/90 tracking-wide"
                >
                  &ldquo;{tagline}&rdquo;
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mb-3">
              <a
                href="/about-us"
                className="inline-flex items-center justify-center px-8 py-2 rounded-full bg-accent text-accent-foreground font-semibold text-lg hover:bg-accent/90 transition-colors"
              >
                About SUNAI
              </a>
              <a
                href="/volunteer"
                className="inline-flex items-center justify-center px-8 py-2 rounded-full border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Be the Change
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-white/20">
              {[
                { label: "Young Minds Mentored", value: "500+" },
                { label: "Trees Planted", value: "10,000+" },
                { label: "Lives Touched", value: "5,000+" },
                { label: "Communities Served", value: "50+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
                  <p className="text-sm text-white/80 mt-1">{stat.label}</p>
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

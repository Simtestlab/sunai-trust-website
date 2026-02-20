import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";

const FeaturedStory = () => (
  <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

      {/* Story Section */}
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start mb-16 sm:mb-20 lg:mb-24">
        {/* Left – Story text */}
        <div className="scroll-reveal">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3 sm:mb-4">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 sm:mb-8 leading-tight">
            When Responsibility<br className="hidden sm:block" />Turned Into Action
          </h2>
          <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            <p className="italic text-slate-500">
              It began with a quiet realization —<br />
              the future we dream of will not build itself.
            </p>
            <p>
              We saw young minds full of potential but lacking direction.
              We saw nature asking for restoration.
              We saw families waiting for timely healthcare.
              And in those moments, we understood — <strong>change cannot be postponed.</strong>
            </p>
            <p>
              SUNAI was born not from abundance, but from <strong>responsibility</strong>.
              A responsibility to mentor the next generation. To restore environmental balance.
              To strengthen life-saving blood networks. To make healthcare more accessible and humane.
            </p>
            <p>
              What started as a thought became a movement.
              What began as concern became commitment.
            </p>
            <p className="text-slate-700 font-medium">
              Today, SUNAI stands as a growing force of compassion and structured action —
              uniting individuals, corporates, and communities under one shared purpose:
              to nurture lives, to protect our planet, to build a healthier, more empowered tomorrow.
            </p>
            <p className="text-teal-600 font-semibold italic">
              Because when intention is courageous, impact becomes inevitable.
            </p>
          </div>
        </div>

        {/* Right – About SUNAI */}
        <div className="scroll-reveal">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3 sm:mb-4">
            About SUNAI
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 sm:mb-8 leading-tight">
            Purpose-Driven.<br className="hidden sm:block" />Community-Led.
          </h2>
          <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            <p>
              SUNAI is a purpose-driven non-governmental organization (NGO) committed to building
              a sustainable and empowered future for the next generation. With a strong foundation
              in social responsibility and a recognized CSR certification, SUNAI works towards
              creating a balanced ecosystem where people, environment, and community grow together.
            </p>
            <p>
              We believe that meaningful change begins with collective action. Through structured
              programs and long-term initiatives, SUNAI focuses on uplifting individuals, protecting
              the environment, and strengthening public health systems.
            </p>
          </div>
          <div className="mt-6 sm:mt-8">
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-colors text-sm sm:text-base"
            >
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA – Be a Part of It */}
      <div className="bg-gradient-to-br from-teal-600 to-green-600 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 text-white text-center scroll-reveal">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 sm:mb-6">
          <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Be the Change. Be the Strength. Be SUNAI.
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Every Movement Grows<br className="hidden sm:block" />Stronger When More Hearts Join It.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-10 text-left">
          {[
            { action: "Your support", impact: "can mentor a young dreamer." },
            { action: "Your partnership", impact: "can restore a forest." },
            { action: "Your contribution", impact: "can save a life." },
            { action: "Your collaboration", impact: "can strengthen community healthcare." },
          ].map((item) => (
            <div key={item.action} className="bg-white/15 rounded-xl sm:rounded-2xl p-4 sm:p-5">
              <p className="font-bold text-sm sm:text-base md:text-lg mb-1">{item.action}</p>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed">{item.impact}</p>
            </div>
          ))}
        </div>
        <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          At SUNAI, we believe transformation happens when compassion turns into action. Whether you
          are an individual, a corporate partner, or a volunteer, your involvement becomes part of
          something greater — a collective effort to build a responsible and resilient future.
        </p>
        <p className="text-white font-semibold text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
          Do not just witness change. Be a part of it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/join-us"
            className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-bold px-8 sm:px-10 py-3 rounded-full hover:bg-white/90 transition-colors text-sm sm:text-base"
          >
            Partner with SUNAI <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 sm:px-10 py-3 rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base"
          >
            Shape Tomorrow
          </Link>
        </div>
      </div>

    </div>
  </section>
);

export default FeaturedStory;

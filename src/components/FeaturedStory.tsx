import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";

const FeaturedStory = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">

      {/* Story Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
        {/* Left – Story text */}
        <div className="scroll-reveal">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-teal-600 mb-4">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">
            When Responsibility<br />Turned Into Action
          </h2>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
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


      </div>

      {/* CTA removed per request */}

    </div>
  </section>
);

export default FeaturedStory;

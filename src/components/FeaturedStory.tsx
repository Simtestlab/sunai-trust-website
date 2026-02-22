const FeaturedStory = () => (
  <section className="py-8 bg-white">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="md:grid md:grid-cols-2 md:gap-8 md:items-start">
        <div className="scroll-reveal max-w-prose space-y-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
            Our Story
          </span>
          <h2 className="text-2xl md:text-3xl md:font-bold font-semibold text-slate-800 mb-2 leading-snug">
            When Responsibility<br />Turned Into Action
          </h2>
          <p className="italic text-slate-500 text-sm md:pr-6">
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
          <p className="text-slate-700 font-medium text-sm">
            Today, SUNAI stands as a growing force of compassion and structured action —
            uniting individuals, corporates, and communities under one shared purpose:
            to nurture lives, to protect our planet, to build a healthier, more empowered tomorrow.
          </p>
          <p className="text-emerald-600 font-semibold italic text-left text-sm pt-2">
            Because when intention is courageous, impact becomes inevitable.
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <svg className="w-full max-w-xs h-40 text-emerald-200" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="400" height="240" rx="12" fill="currentColor" opacity="0.06" />
            <g transform="translate(30,20)">
              <circle cx="120" cy="60" r="44" fill="#10B981" opacity="0.12" />
              <rect x="180" y="30" width="120" height="80" rx="8" fill="#059669" opacity="0.08" />
              <path d="M10 170c40-30 100-30 140 0s100 30 140 0" stroke="#059669" strokeWidth="6" strokeLinecap="round" opacity="0.06" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedStory;

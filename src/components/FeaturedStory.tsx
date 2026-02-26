import img1 from "@/assets/image1.png";
import img2 from "@/assets/image2.png";
import img3 from "@/assets/image3.png";
import img4 from "@/assets/image4.png";
import img5 from "@/assets/image5.png";
import img6 from "@/assets/image6.png";

const FeaturedStory = () => {
  const storyImages = [
    { src: img1, caption: "Mentoring the Next Generation" },
    { src: img2, caption: "Restoring Our Environment" },
    { src: img3, caption: "Strengthening Healthcare" },
    { src: img4, caption: "Saving Lives" },
    { src: img5, caption: "Protecting Nature" },
    { src: img6, caption: "Uniting Communities" },
  ];

  return (
    <section className="py-8 bg-white">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
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
          {/* Auto-scrolling image strip (vertical) */}
          <div className="w-full max-w-xs h-80 overflow-hidden">
            <div className="animate-scroll flex flex-col gap-4">
              {storyImages.concat(storyImages).map((img, idx) => (
                <div key={idx} className="w-full h-36 rounded-lg overflow-hidden relative">
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-2 left-3 text-white font-semibold text-sm drop-shadow">
                    {img.caption}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center text-sm font-semibold text-emerald-600">Snapshots from Our Work</div>
          </div>
        </div>
      </div>
    </div>
    <style>{`
      @keyframes vertical-scroll {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
      .animate-scroll {
        animation: vertical-scroll 20s linear infinite;
      }
      .animate-scroll:hover {
        animation-play-state: paused;
      }
    `}</style>
  </section>
  );
};

export default FeaturedStory;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import MissionVision from "@/components/MissionVision";
import person4 from "@/assets/person4.jpg";
import { useState, useEffect, useRef } from "react";

interface MemberProfile {
  img: string;
  name: string;
  title: string;
  desc: string;
}

const MemberCard = ({ img, name, title, desc }: MemberProfile) => {
  return (
    <div className="flex flex-col items-center text-center mb-4 sm:mb-8 w-full h-full bg-white rounded-2xl border border-border shadow-lg p-5 sm:p-6 md:p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in group">
      <div className="mb-4 sm:mb-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-primary/10 shadow-md group-hover:border-primary/30 transition-colors ring-2 ring-primary/5">
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between w-full space-y-2">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground">{name}</h3>
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide mt-1">
            {title}
          </p>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
          {desc}
        </p>
      </div>
    </div>
  );
};


const AboutUs = () => {
  const founder: MemberProfile = {
    img: person1,
    name: "[Founder Name]",
    title: "Founder",
    desc: "At SUNAI, we believe that true progress is not measured by growth alone, but by the positive impact we leave on society. SUNAI was founded with a simple yet powerful vision — to build an ecosystem where education empowers, nature thrives, and healthcare becomes accessible to every individual. Through initiatives like Sunai Uplift, Sunai Vanam, Sunai Life, and Sunai Health, we are striving to nurture future leaders, restore environmental balance, support life-saving efforts, and strengthen community healthcare systems.",
  };

  const coFounder: MemberProfile = {
    img: person2,
    name: "[Co-Founder Name]",
    title: "Co-Founder",
    desc: "SUNAI was born from a collective belief that meaningful change begins when intention transforms into action. As Co-Founder, I have witnessed how structured initiatives, when driven with transparency and purpose, can create long-term impact. Whether it is mentoring young minds, restoring ecological balance, organizing life-saving blood donation networks, or expanding healthcare access — every SUNAI initiative is designed to create measurable and lasting change.",
  };

  const boardMembers: MemberProfile[] = [
    {
      img: person3,
      name: "Dr. Rajesh Kumar",
      title: "Secretary",
      desc: "Dr. Rajesh comes with 15+ years of working experience at senior positions in large-scale operations, community mobilization, and field implementation. He has expertise in grassroots program delivery.",
    },
    {
      img: person4,
      name: "Vikram Patel",
      title: "Whole Time Trustee",
      desc: "Vikram is a seasoned professional with 20+ years of experience working on strategic partnerships, fundraising, and organizational development. He has expertise in building sustainable relationships.",
    },
  ];

  const advisoryMembers: MemberProfile[] = [
    {
      img: person3,
      name: "Anita Desai",
      title: "Advisory Board Member",
      desc: "Anita holds expertise in data analysis, impact evaluation, and program monitoring with 12+ years of experience. She specializes in developing comprehensive M&E frameworks.",
    },
    {
      img: person2,
      name: "Dr. Rajesh Kumar",
      title: "Secretary",
      desc: "Dr. Rajesh comes with 15+ years of working experience at senior positions in large-scale operations, community mobilization, and field implementation.",
    },
    {
      img: person4,
      name: "Vikram Patel",
      title: "Whole Time Trustee",
      desc: "Vikram is a seasoned professional with 20+ years of experience working on strategic partnerships, fundraising, and organizational development.",
    },
    {
      img: person3,
      name: "Anita Desai",
      title: "Advisory Board Member",
      desc: "Anita holds expertise in data analysis, impact evaluation, and program monitoring with 12+ years of experience.",
    },
  ];

  const advisoryCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = advisoryCarouselRef.current;
    if (!el) return;
    let timer: NodeJS.Timeout | null = null;
    const scrollNext = () => {
      if (!el) return;
      if (el.scrollLeft + el.offsetWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: el.offsetWidth, behavior: "smooth" });
      }
    };
    timer = setInterval(scrollNext, 3500);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 pt-6 sm:pt-8 md:pt-12 pb-4 md:pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-6 sm:mb-8 text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent leading-tight">
              About Us
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              Our mission is simple yet powerful — "Change is not built alone, it's built together
              to nurture lives, restore balance, and create opportunities for a better tomorrow."
            </p>
          </div>

          {/* About SUNAI Description */}
          <section className="mb-8 sm:mb-12 md:mb-16 animate-fade-in">
            <div className="bg-gradient-to-br from-teal-50 to-green-50 border border-teal-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3 sm:mb-4">
                  Who We Are
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
                  SUNAI — A Movement of Hope
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-3 sm:mb-4">
                  SUNAI is a purpose-driven non-governmental organization (NGO) committed to building
                  a sustainable and empowered future for the next generation. With a strong foundation
                  in social responsibility and a recognized CSR certification, SUNAI works towards
                  creating a balanced ecosystem where people, environment, and community grow together.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6">
                  We believe that meaningful change begins with collective action. Through structured
                  programs and long-term initiatives, SUNAI focuses on uplifting individuals, protecting
                  the environment, and strengthening public health systems.
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-2">
                  {[
                    "Nurturing Lives. Restoring Balance.",
                    "Care. Create. Sustain.",
                    "Empowering Generations. Sustaining Futures.",
                  ].map((tagline) => (
                    <span
                      key={tagline}
                      className="bg-teal-600/10 text-teal-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-teal-200"
                    >
                      &ldquo;{tagline}&rdquo;
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Founder & Co-Founder Section */}
          <section className="mb-6 sm:mb-8 md:mb-12">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
                Our Founders
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-teal-600 to-green-600 mx-auto mt-3 rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-stretch max-w-5xl mx-auto">
              <MemberCard {...founder} />
              <MemberCard {...coFounder} />
            </div>
          </section>

          {/* Board Members */}
          <section className="mb-4 sm:mb-6 md:mb-8">
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
                Board Members
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-teal-600 to-green-600 mx-auto mt-3 rounded-full" />
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 border border-slate-200 rounded-2xl p-5 sm:p-8 md:p-10 mb-6 sm:mb-8">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center max-w-3xl mx-auto mb-6 sm:mb-8">
                At SUNAI, we are committed to building a governance-driven social impact organization
                that aligns with structured CSR objectives and measurable community outcomes. The Board
                ensures that every initiative operates with strong compliance frameworks, financial transparency,
                and strategic accountability.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
                {[
                  "Clear impact metrics and reporting",
                  "Responsible fund utilization",
                  "Risk-managed project execution",
                  "Sustainable partnership models",
                ].map((focus) => (
                  <div key={focus} className="bg-white rounded-xl p-3 sm:p-4 text-center border border-slate-100 shadow-sm">
                    <p className="text-xs sm:text-sm text-slate-700 font-medium">{focus}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-stretch">
              {boardMembers.map((m, i) => (
                <MemberCard key={i} {...m} />
              ))}
            </div>
          </section>

          {/* Advisory Members */}
          <section className="mt-6 sm:mt-8 md:mt-16 mb-0 md:mb-6">
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
                Advisory Members
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-teal-600 to-green-600 mx-auto mt-3 rounded-full" />
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-green-50/30 border border-slate-200 rounded-2xl p-5 sm:p-8 md:p-10 mb-6 sm:mb-8">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
                SUNAI represents a structured and forward-looking model for collaborative social impact.
                Our Advisory Members support the organization in strengthening strategic planning,
                institutional partnerships, and scalable program design, ensuring alignment with national
                development priorities, ESG frameworks, and CSR mandates.
              </p>
            </div>
            <div className="relative -mx-2 sm:-mx-4 md:-mx-8 px-2 sm:px-4 md:px-8">
              <button
                aria-label="Previous"
                onClick={() => {
                  const el = advisoryCarouselRef.current;
                  if (!el) return;
                  el.scrollBy({ left: -el.offsetWidth, behavior: 'smooth' });
                }}
                className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 sm:p-3 shadow-md hidden md:inline-flex hover:bg-white transition-colors"
              >
                ‹
              </button>
              <div
                ref={advisoryCarouselRef}
                className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory flex gap-4 sm:gap-6 md:gap-8 pt-2 pb-2"
                style={{ scrollSnapType: 'x mandatory', scrollbarGutter: 'stable' }}
              >
                {advisoryMembers.map((m, i) => (
                  <div
                    key={i}
                    className="snap-start flex-shrink-0 w-[85vw] sm:w-[50%] lg:w-[31%]"
                    style={{ minHeight: '400px' }}
                  >
                    <MemberCard {...m} />
                  </div>
                ))}
              </div>
              <button
                aria-label="Next"
                onClick={() => {
                  const el = advisoryCarouselRef.current;
                  if (!el) return;
                  el.scrollBy({ left: el.offsetWidth, behavior: 'smooth' });
                }}
                className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 sm:p-3 shadow-md hidden md:inline-flex hover:bg-white transition-colors"
              >
                ›
              </button>
            </div>
          </section>

          {/* Mission Vision */}
          <section className="mb-0 md:mb-1 -mt-2 md:mt-0">
            <MissionVision />
          </section>
        </div>
      </main>

      {/* Legal Status & Account Details */}
      <div className="text-center mb-2 sm:mb-4 md:mb-5 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 inline-block">
          Legal Status and Account Details
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-teal-600 to-green-600 mx-auto mt-1 md:mt-3 rounded-full" />
      </div>

      <section className="mb-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto bg-white border border-border rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 lg:p-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {/* Legal Details */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary text-center mb-4 sm:mb-6">
                Legal Details
              </h3>
              {(() => {
                const [copied, setCopied] = useState(false);
                const text = `Trust Name: SUNAI - SUPPORT UPLIFT NOURISH AID ILLUMINATE\nPAN: ABHTS4028A\n12A (URN): \n80G (URN): \nCSR Reg: CSR00104523`;
                return (
                  <div className="bg-secondary/10 rounded-xl p-4 sm:p-5 border border-border shadow-md space-y-2 relative flex-col">
                    <button
                      className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 rounded hover:bg-gray-200 focus:outline-none"
                      title="Copy Legal Status"
                      onClick={() => {
                        navigator.clipboard.writeText(text);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1500);
                      }}
                    >
                      {copied ? (
                        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="9" y="9" width="14" height="14" rx="2" fill="#444" />
                          <rect x="5" y="5" width="14" height="14" rx="2" fill="#444" />
                          <path d="M13 16.5L15.5 19L19 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="9" y="9" width="14" height="14" rx="2" stroke="#444" strokeWidth="2" fill="#fff" />
                          <rect x="5" y="5" width="14" height="14" rx="2" stroke="#444" strokeWidth="2" fill="#fff" />
                        </svg>
                      )}
                    </button>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-primary text-center mb-2">Legal Status</h4>
                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                      <p><span className="font-semibold text-foreground">Trust Name:</span> SUNAI - SUPPORT UPLIFT NOURISH AID ILLUMINATE</p>
                      <p><span className="font-semibold text-foreground">Trust Reg No:</span> </p>
                      <p><span className="font-semibold text-foreground">Registration Date:</span> </p>
                      <p><span className="font-semibold text-foreground">PAN:</span> ABHTS4028A</p>
                      <p><span className="font-semibold text-foreground">12A (URN):</span> </p>
                      <p><span className="font-semibold text-foreground">80G (URN):</span> </p>
                      <p><span className="font-semibold text-foreground">CSR Reg:</span> CSR00104523</p>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Account Details */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary text-center mb-4 sm:mb-6">
                Account Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Indian Donors Card */}
                {(() => {
                  const [copied, setCopied] = useState(false);
                  return (
                    <div className="bg-secondary/10 rounded-xl p-4 sm:p-5 border border-border shadow-md space-y-1.5 sm:space-y-2 relative h-full flex flex-col">
                      <button
                        className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 rounded hover:bg-gray-200 focus:outline-none"
                        title="Copy Indian Donors Details"
                        onClick={() => {
                          const text = `Account Name: SUNAI Trust\nAccount No: 1358101009876\nBank: Canara Bank, Kolappalli Branch\nIFSC: CNRB0005373\nMICR: 641015057`;
                          navigator.clipboard.writeText(text);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 1500);
                        }}
                      >
                        {copied ? (
                          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" y="9" width="14" height="14" rx="2" fill="#444" />
                            <rect x="5" y="5" width="14" height="14" rx="2" fill="#444" />
                            <path d="M13 16.5L15.5 19L19 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" y="9" width="14" height="14" rx="2" stroke="#444" strokeWidth="2" fill="#fff" />
                            <rect x="5" y="5" width="14" height="14" rx="2" stroke="#444" strokeWidth="2" fill="#fff" />
                          </svg>
                        )}
                      </button>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-primary text-center mb-2">Indian Donors</h4>
                      <p className="text-xs sm:text-sm md:text-base"><span className="font-semibold text-foreground">Account Name:</span> SUNAI Trust</p>
                      <p className="text-xs sm:text-sm md:text-base"><span className="font-semibold text-foreground">Account No:</span> 1358101009876</p>
                      <p className="text-xs sm:text-sm md:text-base"><span className="font-semibold text-foreground">Bank:</span> Canara Bank, Kolappalli Branch</p>
                      <p className="text-xs sm:text-sm md:text-base"><span className="font-semibold text-foreground">IFSC:</span> CNRB0005373</p>
                      <p className="text-xs sm:text-sm md:text-base"><span className="font-semibold text-foreground">MICR:</span> 641015057</p>
                    </div>
                  );
                })()}

                {/* Foreign Donors Card */}
                {(() => {
                  const [copied, setCopied] = useState(false);
                  return (
                    <div className="bg-secondary/10 rounded-xl p-4 sm:p-5 border border-border shadow-md space-y-1.5 sm:space-y-2 relative h-full flex flex-col">
                      <button
                        className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 rounded hover:bg-gray-200 focus:outline-none"
                        title="Copy Foreign Donors Details"
                        onClick={() => {
                          const text = `Account Name: SUNAI Trust Overseas\nAccount No: 40105211399\nAccount Type: FCRA – Savings Account\nBank: State Bank of India, New Delhi Main Branch\nIFSC: SBIN0000691\nMICR: 110002087`;
                          navigator.clipboard.writeText(text);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 1500);
                        }}
                      >
                        {copied ? (
                          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" y="9" width="14" height="14" rx="2" fill="#444" />
                            <rect x="5" y="5" width="14" height="14" rx="2" fill="#444" />
                            <path d="M13 16.5L15.5 19L19 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" y="9" width="14" height="14" rx="2" stroke="#444" strokeWidth="2" fill="#fff" />
                            <rect x="5" y="5" width="14" height="14" rx="2" stroke="#444" strokeWidth="2" fill="#fff" />
                          </svg>
                        )}
                      </button>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-primary text-center mb-2">Foreign Donors</h4>
                      <p className="text-xs sm:text-sm md:text-base"><span className="font-semibold text-foreground">Account Name:</span> SUNAI Trust Overseas</p>
                      <p className="text-xs sm:text-sm md:text-base"><span className="font-semibold text-foreground">Account No:</span> 40105211399</p>
                      <p className="text-xs sm:text-sm md:text-base"><span className="font-semibold text-foreground">Account Type:</span> FCRA – Savings Account</p>
                      <p className="text-xs sm:text-sm md:text-base"><span className="font-semibold text-foreground">Bank:</span> State Bank of India, New Delhi Main Branch</p>
                      <p className="text-xs sm:text-sm md:text-base"><span className="font-semibold text-foreground">IFSC:</span> SBIN0000691</p>
                      <p className="text-xs sm:text-sm md:text-base"><span className="font-semibold text-foreground">MICR:</span> 110002087</p>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import MissionVision from "@/components/MissionVision";
import person4 from "@/assets/person4.jpg";
import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface MemberProfile {
  img: string;
  name: string;
  title: string;
  desc: string;
}

const MemberCard = ({ img, name, title, desc }: MemberProfile) => {
  return (
    <div className="flex flex-col items-center text-center mb-8 w-full h-full bg-white rounded-2xl border border-emerald-100 shadow-lg p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-up group">
      <div className="mb-6">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-emerald-50 shadow-md group-hover:border-emerald-200 transition-colors ring-2 ring-emerald-100">
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
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mt-1">
            {title}
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed pt-2">
          {desc}
        </p>
      </div>
    </div>
  );
};

const FounderCard = ({ img, name, title, desc }: MemberProfile) => {
  return (
    <div className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto bg-gradient-to-br from-white to-emerald-50/30 rounded-3xl border-2 border-emerald-100 shadow-xl p-10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-up">
      <div className="mb-6">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-emerald-100 shadow-lg ring-4 ring-emerald-50">
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-foreground">{name}</h3>
        <p className="text-base font-semibold text-emerald-600 uppercase tracking-wide">
          {title}
        </p>
        <p className="text-base text-muted-foreground leading-relaxed pt-2 max-w-xl">
          {desc}
        </p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  useScrollReveal();

  const founder: MemberProfile = {
    img: person1,
    name: "Mukesh Singh",
    title: "Founder & Program Director",
    desc: "At SUNAI, we believe that true progress is not measured by growth alone, but by the positive impact we leave on society. SUNAI was founded with a simple yet powerful vision — to build an ecosystem where education empowers, nature thrives, and healthcare becomes accessible to every individual.",
  };

  const cofounder: MemberProfile = {
    img: person2,
    name: "Dr. Rajesh Kumar",
    title: "Co-Founder",
    desc: "SUNAI was born from a collective belief that meaningful change begins when intention transforms into action. Our focus is not only on addressing immediate needs but on building sustainable solutions that strengthen society at its core.",
  };

  const boardMembers: MemberProfile[] = [
    {
      img: person4,
      name: "Vikram Patel",
      title: "Whole Time Trustee",
      desc: "Vikram is a seasoned professional with 20+ years of experience working on strategic partnerships, fundraising, and organizational development. He has expertise in building sustainable relationships with stakeholders.",
    },
    {
      img: person3,
      name: "Anita Desai",
      title: "Board Member",
      desc: "Anita holds expertise in data analysis, impact evaluation, and program monitoring with 12+ years of experience. She specializes in developing comprehensive M&E frameworks for community development programs.",
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
      img: person4,
      name: "Vikram Patel",
      title: "Advisory Member",
      desc: "Vikram is a seasoned professional with 20+ years of experience working on strategic partnerships, fundraising, and organizational development.",
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
      <main className="flex-1 container mx-auto px-4 pt-8 md:pt-12 pb-4 md:pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 green-gradient-text leading-tight">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              Our mission is simple yet powerful — "Change is not built alone, it's built together
              — to nurture lives, restore balance, and create opportunities for a better tomorrow."
            </p>
          </div>

          {/* About SUNAI Description */}
          <section className="mb-12 md:mb-16 scroll-reveal">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-3xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-emerald-600 mb-4">
                  Who We Are
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  SUNAI — A Movement of Hope
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  SUNAI is a purpose-driven non-governmental organization (NGO) committed to building
                  a sustainable and empowered future for the next generation. With a strong foundation
                  in social responsibility and a recognized CSR certification, SUNAI works towards
                  creating a balanced ecosystem where people, environment, and community grow together.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  We believe that meaningful change begins with collective action. Through structured
                  programs and long-term initiatives, SUNAI focuses on uplifting individuals, protecting
                  the environment, and strengthening public health systems.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-2">
                  {[
                    "Nurturing Lives. Restoring Balance.",
                    "Care. Create. Sustain.",
                    "Empowering Generations. Sustaining Futures.",
                  ].map((tagline) => (
                    <span
                      key={tagline}
                      className="bg-emerald-600/10 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full border border-emerald-200"
                    >
                      &ldquo;{tagline}&rdquo;
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Founder Section */}
          <section className="mb-12 md:mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Founder</h2>
              <div className="green-divider mt-3"></div>
            </div>
            <div className="flex justify-center">
              <FounderCard {...founder} />
            </div>
          </section>

          {/* Co-Founder Section */}
          <section className="mb-12 md:mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Co-Founder</h2>
              <div className="green-divider mt-3"></div>
            </div>
            <div className="flex justify-center">
              <FounderCard {...cofounder} />
            </div>
          </section>

          {/* Board Members */}
          <section className="mb-12 md:mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Board Members</h2>
              <div className="green-divider mt-3"></div>
            </div>
            <p className="text-base text-slate-600 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
              At SUNAI, we are committed to building a governance-driven social impact organization
              that aligns with structured CSR objectives and measurable community outcomes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-4xl mx-auto">
              {boardMembers.map((m, i) => (
                <MemberCard key={i} {...m} />
              ))}
            </div>
          </section>

          {/* Advisory Members */}
          <section className="mb-12 md:mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Advisory Members</h2>
              <div className="green-divider mt-3"></div>
            </div>
            <p className="text-base text-slate-600 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
              Our advisory board provides strategic guidance and expertise to
              ensure our programs achieve maximum impact and sustainability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-4xl mx-auto">
              {advisoryMembers.map((m, i) => (
                <MemberCard key={i} {...m} />
              ))}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-4 md:mb-8">
            <MissionVision />
          </section>
        </div>
      </main>

      {/* Legal Status Section */}
      <div className="text-center mb-4 md:mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Legal Status & Account Details
        </h2>
        <div className="green-divider mt-2"></div>
      </div>

      <section className="mb-8 px-4">
        <div className="max-w-6xl mx-auto bg-white border border-emerald-100 rounded-3xl shadow-xl p-10 md:p-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Legal Details */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-emerald-700 text-center mb-6">
                Legal Details
              </h3>
              <LegalStatusCard />
            </div>

            {/* Account Details */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-700 text-center mb-6">
                Account Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <IndianDonorCard />
                <ForeignDonorCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* Reusable copyable cards */
const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="absolute top-3 right-3 p-2 rounded-lg hover:bg-emerald-100 focus:outline-none transition-colors"
      title="Copy to clipboard"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
    >
      {copied ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 13l4 4L19 7" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="9" width="11" height="11" rx="2" stroke="#6b7280" strokeWidth="2" />
          <path d="M5 15V5a2 2 0 012-2h10" stroke="#6b7280" strokeWidth="2" />
        </svg>
      )}
    </button>
  );
};

const LegalStatusCard = () => {
  const text = `Trust Name: SUNAI - SUPPORT UPLIFT NOURISH AID ILLUMINATE\nPAN: ABHTS4028A\nCSR Reg: CSR00104523`;
  return (
    <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100 shadow-sm space-y-2 relative">
      <CopyButton text={text} />
      <h4 className="text-base font-semibold text-emerald-700 text-center mb-2">Legal Status</h4>
      <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
        <p><span className="font-semibold text-foreground">Trust Name:</span> SUNAI - SUPPORT UPLIFT NOURISH AID ILLUMINATE</p>
        <p><span className="font-semibold text-foreground">PAN:</span> ABHTS4028A</p>
        <p><span className="font-semibold text-foreground">CSR Reg:</span> CSR00104523</p>
      </div>
    </div>
  );
};

const IndianDonorCard = () => {
  const text = `Account Name: SUNAI Trust\nAccount No: 1358101009876\nBank: Canara Bank, Kolappalli Branch\nIFSC: CNRB0005373\nMICR: 641015057`;
  return (
    <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100 shadow-sm space-y-2 relative h-full">
      <CopyButton text={text} />
      <h4 className="text-base font-semibold text-emerald-700 text-center mb-2">Indian Donors</h4>
      <p className="text-sm"><span className="font-semibold text-foreground">Account Name:</span> SUNAI Trust</p>
      <p className="text-sm"><span className="font-semibold text-foreground">Account No:</span> 1358101009876</p>
      <p className="text-sm"><span className="font-semibold text-foreground">Bank:</span> Canara Bank, Kolappalli Branch</p>
      <p className="text-sm"><span className="font-semibold text-foreground">IFSC:</span> CNRB0005373</p>
      <p className="text-sm"><span className="font-semibold text-foreground">MICR:</span> 641015057</p>
    </div>
  );
};

const ForeignDonorCard = () => {
  const text = `Account Name: SUNAI Trust Overseas\nAccount No: 40105211399\nAccount Type: FCRA – Savings Account\nBank: State Bank of India, New Delhi Main Branch\nIFSC: SBIN0000691\nMICR: 110002087`;
  return (
    <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100 shadow-sm space-y-2 relative h-full">
      <CopyButton text={text} />
      <h4 className="text-base font-semibold text-emerald-700 text-center mb-2">Foreign Donors</h4>
      <p className="text-sm"><span className="font-semibold text-foreground">Account Name:</span> SUNAI Trust Overseas</p>
      <p className="text-sm"><span className="font-semibold text-foreground">Account No:</span> 40105211399</p>
      <p className="text-sm"><span className="font-semibold text-foreground">Account Type:</span> FCRA – Savings Account</p>
      <p className="text-sm"><span className="font-semibold text-foreground">Bank:</span> State Bank of India, New Delhi Main Branch</p>
      <p className="text-sm"><span className="font-semibold text-foreground">IFSC:</span> SBIN0000691</p>
      <p className="text-sm"><span className="font-semibold text-foreground">MICR:</span> 110002087</p>
    </div>
  );
};

export default AboutUs;

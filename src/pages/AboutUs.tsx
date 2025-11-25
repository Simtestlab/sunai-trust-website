import Header from "@/components/Header";
import Footer from "@/components/Footer";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import MissionVision from "@/components/MissionVision";
import person4 from "@/assets/person4.jpg";
import { useState } from "react";

interface MemberProfile {
  img: string;
  name: string;
  title: string;
  desc: string;
}

const MemberCard = ({ img, name, title, desc }: MemberProfile) => {
  return (
    <div className="flex flex-col items-center text-center mb-8 max-w-sm mx-auto bg-white rounded-2xl border border-border shadow-lg p-8 hover:shadow-elegant hover:scale-105 transition-all duration-300 animate-fade-in group">
      <div className="mb-6">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/10 shadow-md group-hover:border-primary/30 transition-colors ring-2 ring-primary/5">
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        <p className="text-sm font-semibold text-primary uppercase tracking-wide">
          {title}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed pt-2">
          {desc}
        </p>
      </div>
    </div>
  );
};

const FounderCard = ({ img, name, title, desc }: MemberProfile) => {
  return (
    <div className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto bg-gradient-to-br from-white to-secondary/20 rounded-3xl border-2 border-primary/20 shadow-elegant p-10 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scale-in">
      <div className="mb-6">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg ring-4 ring-primary/10">
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
        <p className="text-base font-semibold text-primary uppercase tracking-wide">
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
  const founder: MemberProfile = {
    img: person1,
    name: "Mukesh Singh",
    title: "Founder & Program Director",
    desc: "Mukesh has a rich experience of over 25 years marked by remarkable achievements and impactful leadership in the fields of rural development, strategic planning, and community engagement. He has led organizations across multiple states, focusing on sustainable development programs that create lasting change in marginalized communities.",
  };

  const boardMembers: MemberProfile[] = [
    {
      img: person2,
      name: "Dr. Rajesh Kumar",
      title: "Secretary",
      desc: "Dr. Rajesh comes with 15+ years of working experience at senior positions in large-scale operations, community mobilization, and field implementation. He has expertise in grassroots program delivery and has successfully coordinated programs across remote villages and urban settlements.",
    },
    {
      img: person4,
      name: "Vikram Patel",
      title: "Whole Time Trustee",
      desc: "Vikram is a seasoned professional with 20+ years of experience working on strategic partnerships, fundraising, and organizational development. He has expertise in building sustainable relationships with stakeholders and has been guiding the strategic direction of development initiatives.",
    },
  ];

  const advisoryMembers: MemberProfile[] = [
    {
      img: person3,
      name: "Anita Desai",
      title: "Advisory Board Member",
      desc: "Anita holds expertise in data analysis, impact evaluation, and program monitoring with 12+ years of experience. She specializes in developing comprehensive M&E frameworks and has been instrumental in measuring and demonstrating the impact of community development programs.",
    },
    {
      img: person2,
      name: "Dr. Rajesh Kumar",
      title: "Secretary",
      desc: "Dr. Rajesh comes with 15+ years of working experience at senior positions in large-scale operations, community mobilization, and field implementation. He has expertise in grassroots program delivery and has successfully coordinated programs across remote villages and urban settlements.",
    },
    {
      img: person4,
      name: "Vikram Patel",
      title: "Whole Time Trustee",
      desc: "Vikram is a seasoned professional with 20+ years of experience working on strategic partnerships, fundraising, and organizational development. He has expertise in building sustainable relationships with stakeholders and has been guiding the strategic direction of development initiatives.",
    },
    {
      img: person3,
      name: "Anita Desai",
      title: "Advisory Board Member",
      desc: "Anita holds expertise in data analysis, impact evaluation, and program monitoring with 12+ years of experience. She specializes in developing comprehensive M&E frameworks and has been instrumental in measuring and demonstrating the impact of community development programs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent leading-tight">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              "Change is not built alone, it's built together. Our team blends
              vision, skill, and compassion to serve communities. We turn
              purpose into action, and action into impact."
            </p>
          </div>

          {/* Founder */}
          <section className="mb-20">
            <div className="inline-block mb-10 mx-auto w-full text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Our Founder
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-teal-600 to-green-600 mx-auto mt-3 rounded-full" />
            </div>
            <div className="flex justify-center">
              <FounderCard {...founder} />
            </div>
          </section>

          {/* Board Members */}
          <section className="mb-20">
            <div className="inline-block mb-10 mx-auto w-full text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Board Members
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-teal-600 to-green-600 mx-auto mt-3 rounded-full" />
            </div>
            <p className="text-base text-slate-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
              Working together towards humanity - our dedicated leadership team
              brings decades of experience in social development, community
              engagement, and strategic planning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {boardMembers.map((m, i) => (
                <MemberCard key={i} {...m} />
              ))}
            </div>
          </section>

          {/* Advisory Members */}
          <section className="mb-20">
            <div className="inline-block mb-10 mx-auto w-full text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Advisory Members
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-teal-600 to-green-600 mx-auto mt-3 rounded-full" />
            </div>
            <p className="text-base text-slate-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
              Our advisory board provides strategic guidance and expertise to
              ensure our programs achieve maximum impact and sustainability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {advisoryMembers.map((m, i) => (
                <MemberCard key={i} {...m} />
              ))}
            </div>
          </section>
          <section className="mb-20">
            <MissionVision />
          </section>
        </div>
      </main>

      {/* Legal & Account Details Title */}
      <div className="inline-block mb-10 mx-auto w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 inline-block">
          Legal Status and Account Details
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-teal-600 to-green-600 mx-auto mt-3 rounded-full" />
      </div>

      <section className="mb-16">
        <div className="max-w-6xl mx-auto bg-white border border-border rounded-3xl shadow-elegant p-10 md:p-14">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Legal Status */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-6">
                Legal Status
              </h3>
              <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p><span className="font-semibold text-foreground">Trust Name:</span> SUNAI - SUPPORT UPLIFT NOURISH AID ILLUMINATE</p>
                <p><span className="font-semibold text-foreground">Trust Reg No:</span> Book-4/205/2023</p>
                <p><span className="font-semibold text-foreground">Registration Date:</span> 15/04/2023</p>
                <p><span className="font-semibold text-foreground">PAN:</span> ABHTS4028A</p>
                <p><span className="font-semibold text-foreground">12A (URN):</span> ABHTS4028A24CH01</p>
                <p><span className="font-semibold text-foreground">80G (URN):</span> ABHTS4028A24CH02</p>
                <p><span className="font-semibold text-foreground">CSR Reg:</span> CSR0001234</p>
              </div>
            </div>

            {/* Account Details */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-6">
                Account Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Indian Donors Card */}
                {(() => {
                  const [copied, setCopied] = useState(false);
                  return (
                    <div className="bg-secondary/10 rounded-xl p-5 border border-border shadow-md space-y-2 relative">
                      <button
                        className="absolute top-3 right-3 p-2 rounded hover:bg-gray-200 focus:outline-none"
                        title="Copy Indian Donors Details"
                        onClick={() => {
                          const text = `Account Name: SUNAI Trust\nAccount No: 1358101009876\nBank: Canara Bank, Kolappalli Branch\nIFSC: CNRB0005373\nMICR: 641015057`;
                          navigator.clipboard.writeText(text);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 1500);
                        }}
                      >
                        {copied ? (
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" y="9" width="14" height="14" rx="2" fill="#444"/>
                            <rect x="5" y="5" width="14" height="14" rx="2" fill="#444"/>
                            <path d="M13 16.5L15.5 19L19 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" y="9" width="14" height="14" rx="2" stroke="#444" strokeWidth="2" fill="#fff"/>
                            <rect x="5" y="5" width="14" height="14" rx="2" stroke="#444" strokeWidth="2" fill="#fff"/>
                          </svg>
                        )}
                      </button>
                      <h4 className="text-base md:text-lg font-semibold text-primary text-center mb-2">Indian Donors</h4>
                      <p className="text-sm md:text-base"><span className="font-semibold text-foreground">Account Name:</span> SUNAI Trust</p>
                      <p className="text-sm md:text-base"><span className="font-semibold text-foreground">Account No:</span> 1358101009876</p>
                      <p className="text-sm md:text-base"><span className="font-semibold text-foreground">Bank:</span> Canara Bank, Kolappalli Branch</p>
                      <p className="text-sm md:text-base"><span className="font-semibold text-foreground">IFSC:</span> CNRB0005373</p>
                      <p className="text-sm md:text-base"><span className="font-semibold text-foreground">MICR:</span> 641015057</p>
                    </div>
                  );
                })()}

                {/* Foreign Donors Card */}
                {(() => {
                  const [copied, setCopied] = useState(false);
                  return (
                    <div className="bg-secondary/10 rounded-xl p-5 border border-border shadow-md space-y-2 relative">
                      <button
                        className="absolute top-3 right-3 p-2 rounded hover:bg-gray-200 focus:outline-none"
                        title="Copy Foreign Donors Details"
                        onClick={() => {
                          const text = `Account Name: SUNAI Trust Overseas\nAccount No: 40105211399\nAccount Type: FCRA – Savings Account\nBank: State Bank of India, New Delhi Main Branch\nIFSC: SBIN0000691\nMICR: 110002087`;
                          navigator.clipboard.writeText(text);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 1500);
                        }}
                      >
                        {copied ? (
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" y="9" width="14" height="14" rx="2" fill="#444"/>
                            <rect x="5" y="5" width="14" height="14" rx="2" fill="#444"/>
                            <path d="M13 16.5L15.5 19L19 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" y="9" width="14" height="14" rx="2" stroke="#444" strokeWidth="2" fill="#fff"/>
                            <rect x="5" y="5" width="14" height="14" rx="2" stroke="#444" strokeWidth="2" fill="#fff"/>
                          </svg>
                        )}
                      </button>
                      <h4 className="text-base md:text-lg font-semibold text-primary text-center mb-2">Foreign Donors</h4>
                      <p className="text-sm md:text-base"><span className="font-semibold text-foreground">Account Name:</span> SUNAI Trust Overseas</p>
                      <p className="text-sm md:text-base"><span className="font-semibold text-foreground">Account No:</span> 40105211399</p>
                      <p className="text-sm md:text-base"><span className="font-semibold text-foreground">Account Type:</span> FCRA – Savings Account</p>
                      <p className="text-sm md:text-base"><span className="font-semibold text-foreground">Bank:</span> State Bank of India, New Delhi Main Branch</p>
                      <p className="text-sm md:text-base"><span className="font-semibold text-foreground">IFSC:</span> SBIN0000691</p>
                      <p className="text-sm md:text-base"><span className="font-semibold text-foreground">MICR:</span> 110002087</p>
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

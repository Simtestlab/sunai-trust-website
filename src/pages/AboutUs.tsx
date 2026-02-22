import Header from "@/components/Header";
import Footer from "@/components/Footer";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import MissionVision from "@/components/MissionVision";
import person4 from "@/assets/person4.jpg";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2, Quote } from "lucide-react";

interface MemberProfile {
  img: string;
  name: string;
  title: string;
  desc: string;
}

/* â”€â”€ Board / Advisory member card â”€â”€ */
const MemberCard = ({ img, name, title, desc }: MemberProfile) => (
  <div className="flex flex-col items-center text-center bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-8 group">
    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-100 ring-4 ring-emerald-50 shadow mb-5 group-hover:ring-emerald-200 transition-all">
      <img src={img} alt={name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <h3 className="text-lg font-bold text-slate-900">{name}</h3>
    <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mt-1 mb-4">{title}</p>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

/* â”€â”€ Leader card: vertical layout that works cleanly in 2-col grid â”€â”€ */
const LeaderCard = ({
  img, name, title, paragraphs, closing,
}: {
  img: string; name: string; title: string;
  paragraphs: (string | JSX.Element)[]; closing: string;
}) => (
  <div className="flex flex-col bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden h-full">
    {/* colour bar */}
    <div className="h-1.5 bg-gradient-to-r from-emerald-500 to-green-400 shrink-0" />
    {/* profile */}
    <div className="flex flex-col items-center pt-8 pb-4 px-8 bg-gradient-to-b from-emerald-50/60 to-white">
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md ring-4 ring-emerald-100 mb-4">
        <img src={img} alt={name} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <p className="text-lg font-extrabold text-slate-900 leading-tight text-center">{name}</p>
      <span className="mt-1 inline-block bg-emerald-600 text-white text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
        {title}
      </span>
    </div>
    {/* message */}
    <div className="flex-1 flex flex-col px-8 pb-8 pt-5">
      <Quote className="w-7 h-7 text-emerald-200 fill-emerald-100 mb-2 shrink-0" />
      <div className="flex-1 space-y-3 text-slate-600 text-sm leading-relaxed">
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <div className="mt-6 pt-5 border-t border-gray-100">
        <p className="italic text-slate-400 text-xs">{closing}</p>
        <p className="font-bold text-slate-800 mt-1 text-sm">{name}</p>
        <p className="text-xs text-emerald-600 mt-0.5">{title}</p>
      </div>
    </div>
  </div>
);

/* â”€â”€ Message panel for Board / Advisory â”€â”€ */
const MessagePanel = ({
  intro, bullets, closing, signoff,
}: {
  intro: string[]; bullets?: string[]; closing?: string; signoff: string;
}) => (
  <div className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 rounded-2xl p-8 md:p-10 text-white mb-10 shadow-xl overflow-hidden">
    <div className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
    <Quote className="w-10 h-10 text-emerald-400/30 fill-emerald-400/20 mb-5" />
    <div className="space-y-3 text-white/85 text-sm md:text-base leading-relaxed relative z-10">
      {intro.map((p, i) => <p key={i}>{p}</p>)}
      {bullets && (
        <ul className="mt-4 space-y-2 pl-1">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {closing && <p className="mt-4">{closing}</p>}
    </div>
    <p className="relative z-10 mt-7 pt-5 border-t border-white/10 text-sm font-semibold text-emerald-300 italic">{signoff}</p>
  </div>
);

const AboutUs = () => {
  useScrollReveal();

  const founder  = { img: person1, name: "Mukesh Singh",    title: "Founder & Program Director" };
  const cofounder = { img: person2, name: "Dr. Rajesh Kumar", title: "Co-Founder" };

  const boardMembers: MemberProfile[] = [
    {
      img: person4, name: "Vikram Patel", title: "Whole Time Trustee",
      desc: "Vikram is a seasoned professional with 20+ years of experience in strategic partnerships, fundraising, and organizational development.",
    },
    {
      img: person3, name: "Anita Desai", title: "Board Member",
      desc: "Anita holds expertise in data analysis, impact evaluation, and program monitoring with 12+ years of experience in M&E frameworks.",
    },
  ];

  const advisoryMembers: MemberProfile[] = [
    {
      img: person3, name: "Anita Desai", title: "Advisory Board Member",
      desc: "Anita holds expertise in data analysis, impact evaluation, and program monitoring with 12+ years of experience. She specializes in M&E frameworks.",
    },
    {
      img: person4, name: "Vikram Patel", title: "Advisory Member",
      desc: "Vikram is a seasoned professional with 20+ years of experience in strategic partnerships, fundraising, and organizational development.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header />

      {/* â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 py-24 md:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-amber-400/10 blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-emerald-300 mb-5">About Us</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Building a <span className="text-amber-400">Better Tomorrow</span>,<br className="hidden sm:block" /> Together
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto">
            &ldquo;Change is not built alone, it&rsquo;s built together to nurture lives, restore balance, and create opportunities for a better tomorrow.&rdquo;
          </p>
        </div>
      </section>

      <main className="flex-1">



        {/* â”€â”€ FOUNDERS GRID â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="py-20 bg-gray-50 scroll-reveal">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-600 mb-2 block">Leadership Messages</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Our Founders</h2>
              <div className="green-divider mt-3" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <LeaderCard
                img={founder.img} name={founder.name} title={founder.title}
                closing="With gratitude and commitment,"
                paragraphs={[
                  "At SUNAI, we believe that true progress is not measured by growth alone, but by the positive impact we leave on society.",
                  "SUNAI was founded with a simple yet powerful vision  to build an ecosystem where education empowers, nature thrives, and healthcare becomes accessible to every individual. We recognized that sustainable change cannot happen in isolation. It requires commitment, collaboration, and compassion.",
                  <>Through initiatives like <strong className="text-emerald-700">Sunai Uplift, Sunai Vanam, Sunai Life, and Sunai Health</strong>, we are striving to nurture future leaders, restore environmental balance, support life-saving efforts, and strengthen community healthcare systems.</>,
                  "Our journey is not just about launching projects  it is about building a movement where individuals, corporates, volunteers, and communities unite with a shared responsibility towards the next generation.",
                  "I invite you to join us in this mission. Together, let us create a future that is responsible, resilient, and rooted in humanity.",
                ]}
              />
              <LeaderCard
                img={cofounder.img} name={cofounder.name} title={cofounder.title}
                closing="Warm regards,"
                paragraphs={[
                  "SUNAI was born from a collective belief that meaningful change begins when intention transforms into action.",
                  "As Co-Founder, I have witnessed how structured initiatives, when driven with transparency and purpose, can create long-term impact. Our focus is not only on addressing immediate needs but on building sustainable solutions that strengthen society at its core.",
                  "Whether it is mentoring young minds, restoring ecological balance, organizing life-saving blood donation networks, or expanding healthcare access  every SUNAI initiative is designed to create measurable and lasting change.",
                  "We remain committed to integrity, accountability, and community partnership in every step of our journey.",
                  "Together, let us not just support a cause  let us shape a better future.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* â”€â”€ BOARD MEMBERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="py-20 bg-white scroll-reveal">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-600 mb-2 block">Governance</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Board Members</h2>
              <div className="green-divider mt-3" />
            </div>
            <MessagePanel
              signoff="Board of Directors, SUNAI"
              intro={[
                "At SUNAI, we are committed to building a governance-driven social impact organization that aligns with structured CSR objectives and measurable community outcomes.",
                "The Board ensures that every SUNAI initiative operates with strong compliance frameworks, financial transparency, and strategic accountability. Our programs  spanning mentorship, environmental sustainability, blood donation networks, and community healthcare  are designed with scalability, impact assessment, and long-term sustainability at their core.",
                "We focus on:",
              ]}
              bullets={[
                "Clear impact metrics and reporting systems",
                "Responsible fund utilization",
                "Risk-managed project execution",
                "Sustainable partnership models",
                "Regulatory and CSR compliance",
              ]}
              closing="Our priority is to create structured platforms where corporate partners can engage meaningfully, with clarity of purpose and measurable results. We invite organizations to collaborate with SUNAI in delivering accountable, high-impact CSR initiatives."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {boardMembers.map((m, i) => <MemberCard key={i} {...m} />)}
            </div>
          </div>
        </section>

        {/* â”€â”€ ADVISORY MEMBERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="py-20 bg-gray-50 scroll-reveal">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-600 mb-2 block">Strategic Guidance</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Advisory Members</h2>
              <div className="green-divider mt-3" />
            </div>
            <MessagePanel
              signoff="Advisory Council, SUNAI"
              intro={[
                "SUNAI represents a structured and forward-looking model for collaborative social impact.",
                "As Advisory Members, we support the organization in strengthening strategic planning, institutional partnerships, and scalable program design. Our focus is to ensure that SUNAI's initiatives align with national development priorities, ESG frameworks, and CSR mandates while delivering measurable outcomes on the ground.",
                "Through data-driven planning and operational discipline, SUNAI is positioned to execute impactful programs in education mentorship, environmental balance, blood donation ecosystems, and accessible healthcare services.",
                "We believe that sustainable development requires cross-sector collaboration. By integrating expertise, governance, and community engagement, SUNAI creates reliable platforms for corporates seeking credible and transparent CSR implementation partners.",
                "We look forward to enabling partnerships that are result-oriented, compliant, and socially transformative.",
              ]}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {advisoryMembers.map((m, i) => <MemberCard key={i} {...m} />)}
            </div>
          </div>
        </section>

        {/* â”€â”€ MISSION & VISION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="py-12 bg-white scroll-reveal">
          <div className="container mx-auto px-6 max-w-6xl">
            <MissionVision />
          </div>
        </section>

        {/* â”€â”€ LEGAL & BANK â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="py-20 bg-gray-50 scroll-reveal">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-600 mb-2 block">Transparency</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Legal Status &amp; Account Details</h2>
              <div className="green-divider mt-3" />
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-base font-bold text-emerald-700 text-center mb-5">Legal Details</h3>
                  <LegalStatusCard />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-base font-bold text-emerald-700 text-center mb-5">Account Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <IndianDonorCard />
                    <ForeignDonorCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
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
  const text = `Account Name: SUNAI Trust Overseas\nAccount No: 40105211399\nAccount Type: FCRA â€“ Savings Account\nBank: State Bank of India, New Delhi Main Branch\nIFSC: SBIN0000691\nMICR: 110002087`;
  return (
    <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100 shadow-sm space-y-2 relative h-full">
      <CopyButton text={text} />
      <h4 className="text-base font-semibold text-emerald-700 text-center mb-2">Foreign Donors</h4>
      <p className="text-sm"><span className="font-semibold text-foreground">Account Name:</span> SUNAI Trust Overseas</p>
      <p className="text-sm"><span className="font-semibold text-foreground">Account No:</span> 40105211399</p>
      <p className="text-sm"><span className="font-semibold text-foreground">Account Type:</span> FCRA â€“ Savings Account</p>
      <p className="text-sm"><span className="font-semibold text-foreground">Bank:</span> State Bank of India, New Delhi Main Branch</p>
      <p className="text-sm"><span className="font-semibold text-foreground">IFSC:</span> SBIN0000691</p>
      <p className="text-sm"><span className="font-semibold text-foreground">MICR:</span> 110002087</p>
    </div>
  );
};

export default AboutUs;

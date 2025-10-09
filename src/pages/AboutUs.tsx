import Header from "@/components/Header";
import Footer from "@/components/Footer";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import person4 from "@/assets/person4.jpg";

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
        <p className="text-sm font-semibold text-primary uppercase tracking-wide">{title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed pt-2">{desc}</p>
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
        <p className="text-base font-semibold text-primary uppercase tracking-wide">{title}</p>
        <p className="text-base text-muted-foreground leading-relaxed pt-2 max-w-xl">{desc}</p>
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
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-secondary/10 to-white">
      <Header />
      <main className="flex-1 px-4 py-16 md:px-8 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              "Change is not built alone, it's built together. Our team blends
              vision, skill, and compassion to serve communities. We turn
              purpose into action, and action into impact."
            </p>
          </div>

          {/* Founder Section */}
          <section className="mb-20">
            <div className="inline-block mb-10 mx-auto w-full text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 inline-block">
                Our Founder
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full"></div>
            </div>
            <div className="flex justify-center">
              <FounderCard {...founder} />
            </div>
          </section>

          {/* Board Members Section */}
          <section className="mb-20">
            <div className="inline-block mb-10 mx-auto w-full text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 inline-block">
                Board Members
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full"></div>
            </div>
            <p className="text-base text-muted-foreground mb-12 leading-relaxed text-center max-w-3xl mx-auto">
              Working together towards humanity - our dedicated leadership team
              brings decades of experience in social development, community
              engagement, and strategic planning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {boardMembers.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </section>

          {/* Advisory Members Section */}
          <section>
            <div className="inline-block mb-10 mx-auto w-full text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 inline-block">
                Advisory Members
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full"></div>
            </div>
            <p className="text-base text-muted-foreground mb-12 leading-relaxed text-center max-w-3xl mx-auto">
              Our advisory board provides strategic guidance and expertise to ensure
              our programs achieve maximum impact and sustainability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {advisoryMembers.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;

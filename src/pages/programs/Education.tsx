import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Target,
  Award,
  BookOpen,
  Briefcase,
  TrendingUp,
  GraduationCap,
  Lightbulb,
  ClipboardList,
  Handshake,
} from "lucide-react";
import educationHero from "@/assets/education.jpg";
import educationProgram from "@/assets/education.jpg";

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900">
      <Header />

      <section className="relative h-96 overflow-hidden">
        <div className="hero-bg-layer" style={{ backgroundImage: `url(${educationHero})` }} aria-hidden />
        <div className="absolute inset-0 bg-black/45 z-10 flex items-center justify-center" aria-hidden>
          <div className="text-center text-white max-w-4xl px-6">
            {/* <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">Mentorship Programme</h1> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">UPLIFT</h1>
            <p className="text-xl md:text-2xl mb-6 text-green-300">Structured Mentorship for Measurable Educational Impact</p>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Bridging Education and Real-World Industry
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Uplift is a structured mentorship and career development initiative designed to enhance
                  student employability, leadership capacity, and entrepreneurial readiness.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  The program bridges the critical gap between academic education and real-world industry
                  expectations by connecting students with experienced professionals, industry leaders, and
                  entrepreneurs who provide guided mentorship and practical exposure. Through a structured
                  framework, Uplift focuses on building career clarity, skill development, and future
                  readiness among students from diverse academic backgrounds.
                </p>
              </div>
              <div className="relative">
                <img
                  src={educationProgram}
                  alt="UPLIFT Program Activities"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold">CSR</div>
                    <div className="text-sm">Aligned Initiative</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xl md:text-2xl font-semibold text-emerald-600 leading-relaxed italic">
              "UPLIFT creates a transformational ecosystem connecting education, industry, and innovation — empowering students with the guidance, confidence, and skills to shape their future."
            </p>
          </div>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Program Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  number: "1,000+",
                  label: "Students Enrolled",
                  desc: "Across diverse backgrounds",
                },
                {
                  icon: Briefcase,
                  number: "200+",
                  label: "Industry Mentors",
                  desc: "Professionals & leaders",
                },
                {
                  icon: Award,
                  number: "85%",
                  label: "Career Clarity Rate",
                  desc: "Post-program outcomes",
                },
                {
                  icon: TrendingUp,
                  number: "50+",
                  label: "Workshops Delivered",
                  desc: "Skills & leadership training",
                },
              ].map((stat, idx) => (
                <Card
                  key={idx}
                  className="text-center p-6 bg-white hover:shadow-lg transition-shadow border border-slate-100"
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-emerald-600 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-slate-600">{stat.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              OBJECTIVE
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Uplift is aligned with corporate CSR goals in education, youth empowerment, and skill development.
              The program delivers measurable impact through the following focus areas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Career Awareness & Goal-Setting",
                  description:
                    "Equipping students with career clarity frameworks to set meaningful professional goals and chart a purposeful path forward.",
                  features: [
                    "Career mapping sessions",
                    "Industry exposure visits",
                    "Goal-setting workshops",
                    "Personal development plans",
                  ],
                },
                {
                  icon: Users,
                  title: "Industry Mentorship",
                  description:
                    "Connecting students with experienced professionals and industry leaders for guided one-on-one and group mentorship hours.",
                  features: [
                    "One-on-one mentoring",
                    "Group mentorship circles",
                    "Mentor-led webinars",
                    "Peer learning networks",
                  ],
                },
                {
                  icon: BookOpen,
                  title: "Skill Development & Leadership",
                  description:
                    "Structured workshops and training programs designed to build both technical and soft skills alongside leadership capacity.",
                  features: [
                    "Soft skills training",
                    "Leadership workshops",
                    "Communication skills",
                    "Problem-solving sessions",
                  ],
                },
                {
                  icon: GraduationCap,
                  title: "Higher Education Guidance",
                  description:
                    "Providing students with global exposure sessions and expert guidance for pursuing higher education opportunities.",
                  features: [
                    "Global education pathways",
                    "Scholarship guidance",
                    "Application support",
                    "International exposure sessions",
                  ],
                },
                {
                  icon: Lightbulb,
                  title: "Entrepreneurial Incubation",
                  description:
                    "Supporting aspiring student founders through incubation assistance, mentorship, and access to startup ecosystems.",
                  features: [
                    "Startup ideation support",
                    "Founder mentorship",
                    "Ecosystem access",
                    "Pitch preparation",
                  ],
                },
                {
                  icon: Briefcase,
                  title: "Employability Enhancement",
                  description:
                    "Career readiness modules designed to improve placement outcomes and prepare students for competitive job markets.",
                  features: [
                    "Resume building",
                    "Interview preparation",
                    "Placement readiness",
                    "Industry networking",
                  ],
                },
              ].map((program, idx) => (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600 bg-white border border-slate-100"
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="space-y-2">
                      {program.features.map((feature, featureIdx) => (
                        <div
                          key={featureIdx}
                          className="flex items-center text-sm"
                        >
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Impact &amp; Reporting
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              To ensure accountability and transparency, Uplift includes comprehensive reporting
              mechanisms that keep partner organizations informed of real outcomes and measurable progress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {[
                {
                  icon: ClipboardList,
                  title: "Enrollment & Progression Tracking",
                  description:
                    "Systematic tracking of student enrollment, program participation, and individual progression milestones throughout the mentorship journey.",
                  highlights: [
                    "Student enrollment records",
                    "Milestone tracking dashboard",
                    "Dropout prevention interventions",
                    "Progression benchmarks",
                  ],
                  cardBg: "bg-emerald-50 border-emerald-200",
                  iconBg: "bg-emerald-100",
                  iconColor: "text-emerald-600",
                },
                {
                  icon: TrendingUp,
                  title: "Mentor Engagement & Impact Metrics",
                  description:
                    "Detailed reporting on mentor hours delivered, student skill growth, career clarity improvements, and placement readiness outcomes.",
                  highlights: [
                    "Mentor engagement reports",
                    "Career clarity metrics",
                    "Skill growth assessments",
                    "Periodic CSR impact reports",
                  ],
                  cardBg: "bg-emerald-50 border-emerald-200",
                  iconBg: "bg-emerald-100",
                  iconColor: "text-emerald-600",
                },
              ].map((item, idx) => (
                <Card key={idx} className={`flex h-full flex-col border rounded-lg ${item.cardBg}`}>
                  <div className="p-6">
                    <div className={`w-12 h-12 mb-4 ${item.iconBg} rounded-full flex items-center justify-center`}>
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mt-2">{item.title}</h3>
                  </div>
                  <CardContent className="px-6 pb-6 flex-1">
                    <p className="text-slate-600 leading-relaxed mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-slate-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Partnership Opportunity</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Uplift offers corporates a structured platform to support youth development through scalable,
              transparent, and impact-driven initiatives aligned with sustainable development goals and CSR mandates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "SDG Aligned",
                  description:
                    "Directly aligned with UN Sustainable Development Goals for quality education and decent work.",
                },
                {
                  icon: Award,
                  title: "CSR Compliant",
                  description:
                    "Structured to meet corporate CSR mandates in education, skill development, and youth empowerment.",
                },
                {
                  icon: Handshake,
                  title: "Scalable Model",
                  description:
                    "A replicable and scalable framework that can be customized to match your organizational goals.",
                },
                {
                  icon: ClipboardList,
                  title: "Transparent Reporting",
                  description:
                    "Periodic impact reports with measurable metrics to demonstrate ROI on social investment.",
                },
              ].map((benefit, idx) => (
                <Card key={idx} className="text-center p-6 bg-white hover:shadow-lg transition-shadow border border-slate-100">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600">
          <div className="max-w-4xl mx-auto text-center px-6 text-white">
            <h2 className="text-3xl font-bold mb-4">Transform Students into Purpose-Driven Professionals</h2>
            <p className="text-xl mb-8 opacity-90">
              Together, we can transform students into confident, skilled, and purpose-driven professionals
              ready to contribute meaningfully to society and the economy.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Education;

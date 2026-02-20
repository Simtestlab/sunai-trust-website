import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Users,
  Target,
  Award,
  GraduationCap,
  ArrowRight,
  MapPin,
  Calendar,
  Briefcase,
  TrendingUp,
  Lightbulb,
  Brain,
} from "lucide-react";
import educationHero from "@/assets/education.jpg";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={educationHero}
          alt="SUNAI Uplift – Mentorship Programme"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Sunai Uplift
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Mentorship Programme
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Structured mentorship and career development for measurable educational impact
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1">

        {/* Stats */}
        <section className="py-14 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Users, value: "500+", label: "Students Mentored" },
                { icon: GraduationCap, value: "50+", label: "Industry Mentors" },
                { icon: Briefcase, value: "200+", label: "Career Sessions" },
                { icon: Award, value: "100%", label: "Structured Mentorship" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-3">
                    <stat.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3">
                  About the Programme
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Bridging the Gap Between Education &amp; Industry
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  SUNAI Uplift is a structured mentorship and career development initiative designed to
                  enhance student employability, leadership capacity, and entrepreneurial readiness.
                  The program bridges the critical gap between academic education and real-world industry
                  expectations.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  By connecting students with experienced professionals, industry leaders, and
                  entrepreneurs, we provide guided mentorship and practical exposure that transforms
                  academic knowledge into career-ready skills.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  SUNAI Uplift ensures that every mentorship session, workshop, and career engagement
                  activity is designed for measurable, transparent, and sustainable impact — making it
                  an ideal initiative for CSR partnerships.
                </p>
              </div>
              <div className="relative">
                <img
                  src={educationHero}
                  alt="Mentorship activities"
                  className="rounded-2xl shadow-lg w-full object-cover h-80"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm text-white/90">students empowered</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              CSR &amp; SDG Alignment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  sdg: "SDG 4 — Quality Education",
                  label: "Quality Education",
                  desc: "Ensures inclusive and equitable quality education and promotes lifelong learning opportunities for all.",
                },
                {
                  icon: Briefcase,
                  sdg: "SDG 8 — Decent Work",
                  label: "Decent Work & Economic Growth",
                  desc: "Enhances employability, career readiness, and entrepreneurial skills among youth from all backgrounds.",
                },
                {
                  icon: Users,
                  sdg: "SDG 10 — Reduced Inequalities",
                  label: "Reduced Inequalities",
                  desc: "Supports equal access to guidance and opportunity for diverse student communities across India.",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="text-center p-6 bg-white hover:shadow-lg transition-shadow border border-slate-100"
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                      {item.sdg}
                    </div>
                    <div className="text-lg font-semibold text-slate-800 mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm text-slate-600">{item.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Mentorship Pillars */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Key Mentorship Pillars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Career Guidance & Goal Setting",
                  description:
                    "Personalized sessions with mentors to help students identify strengths, set academic targets, and develop actionable career roadmaps.",
                  features: [
                    "Number of students mentored",
                    "Career pathway reports generated",
                    "Goal achievement tracking",
                    "One-on-one mentoring sessions",
                  ],
                },
                {
                  title: "Industry Exposure & Skill Building",
                  description:
                    "Workshops, internship facilitation, guest lectures, and real-world projects that provide direct insight into professional environments.",
                  features: [
                    "Industry workshops conducted",
                    "Internship placements facilitated",
                    "Guest lecture series",
                    "Real-world project assignments",
                  ],
                },
                {
                  title: "Entrepreneurial Development",
                  description:
                    "Encouraging innovative thinking through ideation labs, startup awareness sessions, and small-business planning workshops.",
                  features: [
                    "Student-led project ideas incubated",
                    "Entrepreneurship sessions conducted",
                    "Startup awareness drives",
                    "Business plan competitions",
                  ],
                },
                {
                  title: "Leadership & Soft Skills Training",
                  description:
                    "Focused training on communication, teamwork, emotional intelligence, and leadership — core skills required in the modern workplace.",
                  features: [
                    "Student feedback and growth metrics",
                    "Leadership assessment improvements",
                    "Communication workshops",
                    "Team-building exercises",
                  ],
                },
              ].map((program, idx) => (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-blue-600 bg-white border border-slate-100"
                >
                  <CardContent className="p-0">
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
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
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

        {/* CSR Impact Metrics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">CSR Impact Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Students Mentored",
                  description:
                    "Track direct beneficiaries through mentorship enrollment and session attendance records.",
                },
                {
                  icon: BookOpen,
                  title: "Workshops Conducted",
                  description:
                    "Measure skill-building through workshops, sessions, and practical training hours delivered.",
                },
                {
                  icon: Briefcase,
                  title: "Industry Partnerships",
                  description:
                    "Facilitate internships, corporate tie-ups, and industry visits for hands-on learning.",
                },
                {
                  icon: TrendingUp,
                  title: "Student Satisfaction",
                  description:
                    "Feedback data, satisfaction scores, and growth metrics from participants.",
                },
              ].map((benefit, idx) => (
                <Card
                  key={idx}
                  className="text-center p-6 bg-white hover:shadow-lg transition-shadow border border-slate-100"
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Mentorship Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {[
                {
                  location: "Coimbatore",
                  title: "First-Generation Career Pathways",
                  description:
                    "Over 200 first-generation college students from rural Tamil Nadu were connected with industry professionals through SUNAI Uplift. Within one academic year, 85% of participants reported clearer career goals, and 40+ students secured internships with partnered organizations.",
                  duration: "2023-Ongoing",
                },
                {
                  location: "Tamil Nadu",
                  title: "Women in STEM Leadership",
                  description:
                    "A dedicated mentorship cohort for young women pursuing STEM careers resulted in 60+ participants gaining hands-on workshop experience. Multiple participants went on to present at state-level science fairs, with three receiving national recognition for their innovation projects.",
                  duration: "2024-Ongoing",
                },
              ].map((story, idx) => (
                <Card
                  key={idx}
                  className="flex h-full flex-col border rounded-lg bg-blue-50 border-blue-200"
                >
                  <div className="p-6">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      <span className="font-semibold text-blue-600">
                        {story.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mt-3">
                      {story.title}
                    </h3>
                  </div>
                  <CardContent className="px-6 pb-2 flex-1">
                    <p className="text-slate-600 leading-relaxed">
                      {story.description}
                    </p>
                  </CardContent>
                  <div className="px-6 pb-6 mt-4 text-sm text-slate-500 flex items-center">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    <span>Project Duration: {story.duration}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center px-6 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Empower the Next Generation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Partner with SUNAI Uplift and make a measurable impact on student employability,
              leadership development, and career readiness. Every mentorship session creates ripples
              of change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold px-10 py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/join-us"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-10 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Education;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  ArrowRight,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import empowermentHero from "@/assets/empowerment.jpg";

const Empowerment = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={empowermentHero}
          alt="Empowerment Program"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Empowerment</h1>
            <p className="text-xl md:text-2xl mb-6">
              Building sustainable livelihoods through skill development,
              microfinance, and community-led initiatives
            </p>
            {/* Hero CTA commented out per request
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              Support Empowerment <TrendingUp className="ml-2 w-5 h-5" />
            </Button>
            */}
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Overview Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Empowering Communities for Sustainable Change
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  True empowerment comes from within communities. Our programs
                  focus on building capacity, developing skills, and creating
                  opportunities that enable individuals and communities to
                  become self-reliant and drive their own development.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Through skill development, women's empowerment, youth
                  engagement, and livelihood programs, we foster independence
                  that creates lasting positive change. Our approach emphasizes
                  community participation, local leadership, and sustainable
                  economic opportunities.
                </p>
                {/* Buttons removed per request
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Our Programs <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Success Stories
                  </Button>
                </div>
                */}
              </div>
              <div className="relative">
                <img
                  src={empowermentHero}
                  alt="Empowerment Program Activities"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold">75,000+</div>
                    <div className="text-sm">Lives Empowered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Empowerment Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  number: "75,000+",
                  label: "People Empowered",
                  desc: "Across all programs",
                },
                {
                  icon: Briefcase,
                  number: "15,000+",
                  label: "Jobs Created",
                  desc: "Sustainable livelihoods",
                },
                {
                  icon: GraduationCap,
                  number: "25,000+",
                  label: "Skills Trained",
                  desc: "Vocational programs",
                },
                {
                  icon: TrendingUp,
                  number: "80%",
                  label: "Income Increase",
                  desc: "Average improvement",
                },
              ].map((stat, idx) => (
                <Card
                  key={idx}
                  className="text-center p-6 bg-white hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-purple-600 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">{stat.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Empowerment Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Women's Empowerment",
                  description:
                    "Comprehensive programs focusing on women's economic independence, leadership development, and social empowerment.",
                  features: [
                    "Self-help groups",
                    "Microfinance access",
                    "Leadership training",
                    "Rights awareness",
                  ],
                },
                {
                  title: "Youth Skill Development",
                  description:
                    "Vocational training and skill development programs for youth to enhance employability and entrepreneurship.",
                  features: [
                    "Technical skills",
                    "Soft skills training",
                    "Job placement",
                    "Entrepreneurship support",
                  ],
                },
                {
                  title: "Rural Entrepreneurship",
                  description:
                    "Supporting rural entrepreneurs through business development, market linkages, and financial assistance.",
                  features: [
                    "Business planning",
                    "Market access",
                    "Financial support",
                    "Mentorship programs",
                  ],
                },
                {
                  title: "Digital Literacy",
                  description:
                    "Bridging the digital divide through technology training and digital financial inclusion programs.",
                  features: [
                    "Computer training",
                    "Internet skills",
                    "Digital payments",
                    "Online business",
                  ],
                },
                {
                  title: "Livelihood Programs",
                  description:
                    "Creating sustainable livelihood opportunities through agriculture, handicrafts, and small-scale industries.",
                  features: [
                    "Agricultural training",
                    "Handicraft development",
                    "Market linkages",
                    "Quality improvement",
                  ],
                },
                {
                  title: "Community Leadership",
                  description:
                    "Building local leadership capacity and strengthening community institutions for self-governance.",
                  features: [
                    "Leadership training",
                    "Governance skills",
                    "Community planning",
                    "Advocacy training",
                  ],
                },
              ].map((program, idx) => (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-purple-600"
                >
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="space-y-2">
                      {program.features.map((feature, featureIdx) => (
                        <div
                          key={featureIdx}
                          className="flex items-center text-sm"
                        >
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Empowerment Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  location: "Gujarat",
                  color: "purple",
                  title: "Women's Cooperative Success",
                  description: `"In Kutch district, our women's self-help group program has empowered 2,500 women to start 
                    their own businesses. The collective has generated ₹50 lakhs in annual revenue, with 
                    average income increasing by 300% for participating women."`,
                  duration: "2018-Ongoing",
                },
                {
                  location: "Karnataka",
                  color: "orange",
                  title: "Youth Employment Program",
                  description: `"Our skill development center in Bangalore has trained 1,200+ youth in IT and hospitality 
                    sectors. 85% of graduates secured employment with leading companies, with starting salaries 
                    250% higher than local averages."`,
                  duration: "2020-Ongoing",
                },
              ].map((story, idx) => (
                <Card
                  key={idx}
                  className={`flex flex-col justify-between h-full p-8 bg-${story.color}-50 border-${story.color}-200`}
                >
                  <CardContent className="flex flex-col flex-1 p-0">
                    <div className="flex items-center mb-4">
                      <MapPin
                        className={`w-5 h-5 text-${story.color}-600 mr-2`}
                      />
                      <span className={`text-${story.color}-600 font-semibold`}>
                        {story.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                      {story.description}
                    </p>
                    <div className="text-sm text-gray-500 mt-auto">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Project Duration: {story.duration}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))]">
          <div className="max-w-4xl mx-auto text-center px-6 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Empower Communities, Transform Lives
            </h2>
            <p className="text-xl mb-8 opacity-90">
              When communities are empowered, change becomes sustainable. Join
              us in building capacity and creating opportunities that last for
              generations.
            </p>
            {/* Bottom CTA buttons removed per request
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                Fund Empowerment
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Skill Development Volunteer
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Corporate Skills Partnership
              </Button>
            </div>
            */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Empowerment;

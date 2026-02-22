import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Users,
  Target,
  Award,
  Stethoscope,
  ArrowRight,
  MapPin,
  Calendar,
  Activity,
} from "lucide-react";
import healthHero from "@/assets/health.jpg";

const Health = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="hero-bg-layer" style={{ backgroundImage: `url(${healthHero})` }} aria-hidden />
        <div className="absolute inset-0 bg-black/45 z-10 flex items-center justify-center" aria-hidden>
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">Diagnostic & Healthcare Centres</h1>
            <p className="text-xl md:text-2xl mb-6 text-green-300">Enabling community-driven health initiatives to strengthen well-being and build a healthier future for all.</p>
            {/* Hero CTA commented out per request
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              Plant with Us <TreePine className="ml-2 w-5 h-5" />
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
                  Healthcare Cannot Wait
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Access to quality healthcare is a fundamental right, yet
                  millions in rural and underserved communities lack basic
                  medical services. Our comprehensive healthcare programs bridge
                  this gap by bringing medical care directly to communities that
                  need it most.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Through mobile health clinics, telemedicine, community health
                  workers, and preventive care programs, we ensure that distance
                  and poverty never become barriers to good health. Our focus
                  extends beyond treatment to prevention, education, and
                  building sustainable healthcare systems.
                </p>
                {/* Buttons removed per request
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-red-600 hover:bg-red-700">
                    Our Approach <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Download Report
                  </Button>
                </div>
                */}
              </div>
              <div className="relative">
                <img
                  src={healthHero}
                  alt="Health Program Activities"
                  className="rounded-lg shadow-lg w-full filter brightness-110 contrast-115 saturate-120"
                />
                <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold">1M+</div>
                    <div className="text-sm">Lives Impacted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Our Diagnostic & Healthcare Centres Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  number: "1M+",
                  label: "Patients Treated",
                  desc: "Through mobile clinics",
                },
                {
                  icon: Stethoscope,
                  number: "50+",
                  label: "Mobile Clinics",
                  desc: "Across rural areas",
                },
                {
                  icon: Heart,
                  number: "10,000+",
                  label: "Health Checkups",
                  desc: "Monthly screenings",
                },
                {
                  icon: Activity,
                  number: "95%",
                  label: "Recovery Rate",
                  desc: "Treatment success",
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

        {/* Programs Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Diagnostic & Healthcare Centres Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Mobile Health Clinics",
                  description:
                    "Bringing quality healthcare directly to remote villages and underserved communities through fully equipped mobile units.",
                  features: [
                    "Primary healthcare",
                    "Diagnostic services",
                    "Medicine distribution",
                    "Health screening",
                  ],
                },
                {
                  title: "Maternal & Child Health",
                  description:
                    "Comprehensive care for mothers and children including prenatal care, safe delivery, and immunization programs.",
                  features: [
                    "Prenatal checkups",
                    "Safe delivery support",
                    "Child immunization",
                    "Nutrition counseling",
                  ],
                },
                {
                  title: "Preventive Care",
                  description:
                    "Community-based programs focused on disease prevention and health promotion through education and screenings.",
                  features: [
                    "Health awareness",
                    "Regular screenings",
                    "Vaccination drives",
                    "Hygiene education",
                  ],
                },
                {
                  title: "Mental Health Support",
                  description:
                    "Addressing mental health needs through counseling, support groups, and community mental health programs.",
                  features: [
                    "Counseling services",
                    "Support groups",
                    "Awareness campaigns",
                    "Crisis intervention",
                  ],
                },
                {
                  title: "Emergency Response",
                  description:
                    "Rapid response medical teams for emergencies, disasters, and health crises in affected communities.",
                  features: [
                    "Emergency medical care",
                    "Disaster response",
                    "Ambulance services",
                    "First aid training",
                  ],
                },
                {
                  title: "Health Worker Training",
                  description:
                    "Building local capacity by training community health workers and healthcare providers.",
                  features: [
                    "Skill development",
                    "Certification programs",
                    "Continuing education",
                    "Equipment training",
                  ],
                },
              ].map((program, idx) => (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600 bg-white border border-slate-100"
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

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Diagnostic & Healthcare Centres Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="p-8 bg-emerald-50 border-emerald-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="text-emerald-600 font-semibold">Odisha</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Maternal Mortality Reduction
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    "In Kalahandi district, our maternal health program reduced maternal mortality by 60% over three years. Through skilled birth attendants, prenatal care, and emergency referral systems, we've saved countless lives and improved birth outcomes."
                  </p>
                  <div className="text-sm text-slate-500">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Project Duration: 2019-2023
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-emerald-50 border-emerald-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="text-emerald-600 font-semibold">Jharkhand</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    TB Elimination Success
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    "Our comprehensive TB program in mining communities achieved a 90% treatment success rate. Through early detection, DOTS therapy, and community support, we've helped over 2,000 patients complete their treatment successfully."
                  </p>
                  <div className="text-sm text-slate-500">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Project Duration: 2020-Ongoing
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600">
          <div className="max-w-4xl mx-auto text-center px-6 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Diagnostic & Healthcare Centres — Support Our Mission
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Every donation brings life-saving healthcare closer to those who need it most. Join us in building healthier communities across India.
            </p>
            {/* Bottom CTA buttons removed per request
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                Donate for Health
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Become a Health Volunteer
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Corporate Partnership
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

export default Health;

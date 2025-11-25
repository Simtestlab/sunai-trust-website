import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  Users,
  Target,
  Award,
  Tractor,
  ArrowRight,
  MapPin,
  Calendar,
  Wheat,
  Building,
} from "lucide-react";
import ruralHero from "@/assets/rural.jpg";

const RuralDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={ruralHero}
          alt="Rural Development Program"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
              Rural Development
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Supporting rural communities with infrastructure, training, and
              resources to boost agriculture and overall resilience
            </p>
            {/* Hero CTA commented out per request
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              Support Rural Growth <Tractor className="ml-2 w-5 h-5" />
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
                  Transforming Rural India Through Holistic Development
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Rural communities are the backbone of India's economy, yet
                  they face numerous challenges including inadequate
                  infrastructure, limited market access, and outdated farming
                  practices. Our comprehensive rural development programs
                  address these challenges through integrated solutions.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We work with farming communities, local institutions, and
                  government partners to improve agricultural productivity,
                  build infrastructure, strengthen market linkages, and create
                  sustainable livelihoods that keep rural communities thriving.
                </p>
                {/* Buttons removed per request
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Our Programs <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                    Impact Stories
                  </Button>
                </div>
                */}
              </div>
              <div className="relative">
                <img
                  src={ruralHero}
                  alt="Rural Development Activities"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold">2,000+</div>
                    <div className="text-sm">Villages Reached</div>
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
              Rural Development Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Home,
                  number: "2,000+",
                  label: "Villages Reached",
                  desc: "Across 15 states",
                },
                {
                  icon: Users,
                  number: "150K+",
                  label: "Farmers Supported",
                  desc: "Agricultural training",
                },
                {
                  icon: Wheat,
                  number: "40%",
                  label: "Yield Increase",
                  desc: "Average improvement",
                },
                {
                  icon: Building,
                  number: "500+",
                  label: "Infrastructure Projects",
                  desc: "Wells, roads, centers",
                },
              ].map((stat, idx) => (
                <Card
                  key={idx}
                  className="text-center p-6 bg-white hover:shadow-lg transition-shadow border border-slate-100"
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-teal-600 mb-1">
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
              Our Rural Development Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Sustainable Agriculture",
                  description:
                    "Promoting climate-smart farming practices, organic agriculture, and crop diversification for better yields.",
                  features: [
                    "Organic farming training",
                    "Seed distribution",
                    "Soil health management",
                    "Crop diversification",
                  ],
                },
                {
                  title: "Water Management",
                  description:
                    "Building water infrastructure and promoting conservation techniques for reliable irrigation and drinking water.",
                  features: [
                    "Borewell construction",
                    "Rainwater harvesting",
                    "Drip irrigation",
                    "Water conservation",
                  ],
                },
                {
                  title: "Market Linkages",
                  description:
                    "Connecting farmers directly to markets through farmer producer organizations and digital platforms.",
                  features: [
                    "FPO formation",
                    "Market facilitation",
                    "Price realization",
                    "Supply chain support",
                  ],
                },
                {
                  title: "Infrastructure Development",
                  description:
                    "Building essential rural infrastructure including roads, community centers, and storage facilities.",
                  features: [
                    "Rural roads",
                    "Community centers",
                    "Storage facilities",
                    "Connectivity projects",
                  ],
                },
                {
                  title: "Financial Inclusion",
                  description:
                    "Facilitating access to credit, insurance, and financial services for rural entrepreneurs and farmers.",
                  features: [
                    "Credit facilitation",
                    "Insurance enrollment",
                    "Digital payments",
                    "Financial literacy",
                  ],
                },
                {
                  title: "Livestock Development",
                  description:
                    "Supporting animal husbandry through veterinary care, breed improvement, and fodder development.",
                  features: [
                    "Veterinary services",
                    "Breed improvement",
                    "Fodder development",
                    "Dairy cooperatives",
                  ],
                },
              ].map((program, idx) => (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-teal-600 bg-white border border-slate-100"
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
                          <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
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
              Rural Transformation Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[ 
                {
                  location: "Madhya Pradesh",
                  title: "Drought-Proofing Initiative",
                  description: `"In Bundelkhand region, our water management program has made 50 villages drought-resilient. Through watershed development, rainwater harvesting, and efficient irrigation, farmers now have year-round water access and crop yields have doubled."`,
                  duration: "2018-2023",
                },
                {
                  location: "Tamil Nadu",
                  title: "Farmer Producer Organization Success",
                  description: `"Our FPO in Thanjavur district has aggregated 2,000 small farmers, eliminating middlemen and increasing farmer income by 60%. The collective now has ₹2 crore annual turnover and direct market access to major buyers."`,
                  duration: "2019-Ongoing",
                },
              ].map((story, idx) => (
                <Card
                  key={idx}
                  className="flex flex-col justify-between h-full p-8 bg-teal-50 border-teal-200"
                >
                  <CardContent className="flex flex-col flex-1 p-0">
                    <div>
                      <div className="flex items-center mb-4">
                        <MapPin className="w-5 h-5 text-teal-600 mr-2" />
                        <span className="text-teal-600 font-semibold">
                          {story.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">
                        {story.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {story.description}
                      </p>
                    </div>
                    <div className="mt-auto text-sm text-slate-500 flex items-center">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Project Duration: {story.duration}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Focus Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Wheat,
                  title: "Agricultural Productivity",
                  description:
                    "Improving crop yields through modern techniques, quality inputs, and scientific farming methods.",
                },
                {
                  icon: Tractor,
                  title: "Farm Mechanization",
                  description:
                    "Introducing appropriate technology and machinery to reduce labor costs and improve efficiency.",
                },
                {
                  icon: Building,
                  title: "Rural Infrastructure",
                  description:
                    "Building roads, irrigation systems, storage facilities, and communication networks.",
                },
                {
                  icon: Users,
                  title: "Community Organization",
                  description:
                    "Strengthening local institutions and building collective capacity for sustainable development.",
                },
              ].map((area, idx) => (
                <Card
                  key={idx}
                  className="text-center p-6 bg-white hover:shadow-lg transition-shadow border border-slate-100"
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                      <area.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      {area.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600">
          <div className="max-w-4xl mx-auto text-center px-6 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Build Thriving Rural Communities
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rural development creates a foundation for national prosperity. Join us in empowering farming communities and building sustainable rural economies across India.
            </p>
            {/* Bottom CTA buttons removed per request
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                Support Rural Development
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Partner with Farmers
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Infrastructure Partnership
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

export default RuralDevelopment;

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
  Building
} from 'lucide-react';
import ruralHero from '@/assets/rural.jpg';

const RuralDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={ruralHero} 
          alt="Rural Development Program" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Rural Development</h1>
            <p className="text-xl md:text-2xl mb-6">
              Supporting rural communities with infrastructure, training, and resources to boost agriculture and overall resilience
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
                  Rural communities are the backbone of India's economy, yet they face numerous challenges including 
                  inadequate infrastructure, limited market access, and outdated farming practices. Our comprehensive 
                  rural development programs address these challenges through integrated solutions.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We work with farming communities, local institutions, and government partners to improve 
                  agricultural productivity, build infrastructure, strengthen market linkages, and create 
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
                <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
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
        <section className="py-16 bg-amber-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Rural Development Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Home, number: "2,000+", label: "Villages Reached", desc: "Across 15 states" },
                { icon: Users, number: "150K+", label: "Farmers Supported", desc: "Agricultural training" },
                { icon: Wheat, number: "40%", label: "Yield Increase", desc: "Average improvement" },
                { icon: Building, number: "500+", label: "Infrastructure Projects", desc: "Wells, roads, centers" }
              ].map((stat, idx) => (
                <Card key={idx} className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-amber-600 mb-1">{stat.label}</div>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Rural Development Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Sustainable Agriculture",
                  description: "Promoting climate-smart farming practices, organic agriculture, and crop diversification for better yields.",
                  features: ["Organic farming training", "Seed distribution", "Soil health management", "Crop diversification"]
                },
                {
                  title: "Water Management",
                  description: "Building water infrastructure and promoting conservation techniques for reliable irrigation and drinking water.",
                  features: ["Borewell construction", "Rainwater harvesting", "Drip irrigation", "Water conservation"]
                },
                {
                  title: "Market Linkages",
                  description: "Connecting farmers directly to markets through farmer producer organizations and digital platforms.",
                  features: ["FPO formation", "Market facilitation", "Price realization", "Supply chain support"]
                },
                {
                  title: "Infrastructure Development",
                  description: "Building essential rural infrastructure including roads, community centers, and storage facilities.",
                  features: ["Rural roads", "Community centers", "Storage facilities", "Connectivity projects"]
                },
                {
                  title: "Financial Inclusion",
                  description: "Facilitating access to credit, insurance, and financial services for rural entrepreneurs and farmers.",
                  features: ["Credit facilitation", "Insurance enrollment", "Digital payments", "Financial literacy"]
                },
                {
                  title: "Livestock Development",
                  description: "Supporting animal husbandry through veterinary care, breed improvement, and fodder development.",
                  features: ["Veterinary services", "Breed improvement", "Fodder development", "Dairy cooperatives"]
                }
              ].map((program, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                    <div className="space-y-2">
                      {program.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Rural Transformation Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="p-8 bg-amber-50 border-amber-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-amber-600 mr-2" />
                    <span className="text-amber-600 font-semibold">Madhya Pradesh</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Drought-Proofing Initiative</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "In Bundelkhand region, our water management program has made 50 villages drought-resilient. 
                    Through watershed development, rainwater harvesting, and efficient irrigation, farmers now 
                    have year-round water access and crop yields have doubled."
                  </p>
                  <div className="text-sm text-gray-500">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Project Duration: 2018-2023
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-green-50 border-green-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-600 font-semibold">Tamil Nadu</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Farmer Producer Organization Success</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "Our FPO in Thanjavur district has aggregated 2,000 small farmers, eliminating middlemen 
                    and increasing farmer income by 60%. The collective now has ₹2 crore annual turnover and 
                    direct market access to major buyers."
                  </p>
                  <div className="text-sm text-gray-500">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Project Duration: 2019-Ongoing
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Focus Areas */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Wheat,
                  title: "Agricultural Productivity",
                  description: "Improving crop yields through modern techniques, quality inputs, and scientific farming methods."
                },
                {
                  icon: Tractor,
                  title: "Farm Mechanization",
                  description: "Introducing appropriate technology and machinery to reduce labor costs and improve efficiency."
                },
                {
                  icon: Building,
                  title: "Rural Infrastructure",
                  description: "Building roads, irrigation systems, storage facilities, and communication networks."
                },
                {
                  icon: Users,
                  title: "Community Organization",
                  description: "Strengthening local institutions and building collective capacity for sustainable development."
                }
              ].map((area, idx) => (
                <Card key={idx} className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                      <area.icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{area.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="max-w-4xl mx-auto text-center px-6 text-white">
            <h2 className="text-3xl font-bold mb-4">Build Thriving Rural Communities</h2>
            <p className="text-xl mb-8 opacity-90">
              Rural development creates a foundation for national prosperity. Join us in empowering 
              farming communities and building sustainable rural economies across India.
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

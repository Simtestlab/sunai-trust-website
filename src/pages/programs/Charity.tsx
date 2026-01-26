import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Target,
  Gift,
  MapPin,
  Calendar,
  Package,
  HandHeart,
} from "lucide-react";
import charityHero from "@/assets/charity.jpg";

const Charity = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={charityHero}
          alt="Charity Program"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Charity</h1>
            <p className="text-xl md:text-2xl mb-6 text-white/90">
              Providing direct aid and relief to families in need, including food distribution and emergency support
            </p>
            {/* Hero CTA commented out per request
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg">
              Give Support <Heart className="ml-2 w-5 h-5" />
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
                  Immediate Relief for Those Who Need It Most
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Sometimes, families face immediate crises that require urgent
                  intervention. Our charity programs provide direct aid,
                  emergency relief, and targeted support to vulnerable families
                  during their most difficult times, ensuring no one is left
                  behind.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  From food security and emergency shelter to medical assistance
                  and disaster relief, our comprehensive charity initiatives
                  serve as a safety net for the most vulnerable members of
                  society, providing hope and dignity when it's needed most.
                </p>
                {/* Buttons removed per request
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-pink-600 hover:bg-pink-700">
                    Our Impact <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                    Donate Now
                  </Button>
                </div>
                */}
              </div>
              <div className="relative">
                <img
                  src={charityHero}
                  alt="Charity Activities"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold">1M+</div>
                    <div className="text-sm">Lives Supported</div>
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
              Charity Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  number: "1M+",
                  label: "Beneficiaries Reached",
                  desc: "Direct aid recipients",
                },
                {
                  icon: Package,
                  number: "500K+",
                  label: "Food Packages",
                  desc: "Distributed annually",
                },
                {
                  icon: HandHeart,
                  number: "2,000+",
                  label: "Emergency Responses",
                  desc: "Crisis interventions",
                },
                {
                  icon: Gift,
                  number: "95%",
                  label: "Direct Impact",
                  desc: "Resources to beneficiaries",
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
              Our Charity Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Food Distribution",
                  description:
                    "Regular food distribution programs ensuring no family goes hungry, including cooked meals and dry ration supplies.",
                  features: [
                    "Daily meal programs",
                    "Monthly ration kits",
                    "Nutritious food packages",
                    "Community kitchens",
                  ],
                },
                {
                  title: "Emergency Relief",
                  description:
                    "Rapid response during natural disasters, medical emergencies, and other crises affecting vulnerable families.",
                  features: [
                    "Disaster response",
                    "Medical emergency aid",
                    "Temporary shelter",
                    "Essential supplies",
                  ],
                },
                {
                  title: "Child Support",
                  description:
                    "Comprehensive support for underprivileged children including nutrition, clothing, and educational materials.",
                  features: [
                    "Child nutrition",
                    "School supplies",
                    "Clothing distribution",
                    "Health checkups",
                  ],
                },
                {
                  title: "Elderly Care",
                  description:
                    "Special programs for elderly citizens including healthcare support, companionship, and daily living assistance.",
                  features: [
                    "Medical care",
                    "Daily living support",
                    "Social interaction",
                    "Dignity preservation",
                  ],
                },
                {
                  title: "Medical Assistance",
                  description:
                    "Financial and logistical support for families facing medical crises and unable to afford treatment.",
                  features: [
                    "Treatment funding",
                    "Medicine distribution",
                    "Hospital facilitation",
                    "Health insurance support",
                  ],
                },
                {
                  title: "Shelter Support",
                  description:
                    "Temporary and transitional housing assistance for homeless families and those affected by disasters.",
                  features: [
                    "Emergency shelter",
                    "Transitional housing",
                    "Housing rehabilitation",
                    "Rental assistance",
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
              Stories of Hope
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="p-8 bg-teal-50 border-teal-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-teal-600 mr-2" />
                    <span className="text-teal-600 font-semibold">Mumbai</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    COVID-19 Relief Operations
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    "During the pandemic, our emergency relief program supported
                    50,000 families in Mumbai slums with food, medicine, and
                    essential supplies. We distributed 2 lakh food packets and
                    provided medical assistance to 10,000+ patients during the
                    crisis."
                  </p>
                  <div className="text-sm text-slate-500">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Project Duration: March 2020 - December 2022
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-teal-50 border-teal-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-teal-600 mr-2" />
                    <span className="text-teal-600 font-semibold">Kerala</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Flood Relief and Rehabilitation
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    "After the devastating floods in Kerala, our charity team
                    provided immediate relief to 15,000 affected families. We
                    distributed emergency supplies, set up temporary shelters,
                    and supported long-term rehabilitation of 500 families."
                  </p>
                  <div className="text-sm text-slate-500">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Project Duration: August 2018 - March 2019
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              How We Help
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Package,
                  title: "Direct Distribution",
                  description:
                    "We ensure aid reaches beneficiaries directly through our community networks and volunteers.",
                },
                {
                  icon: HandHeart,
                  title: "Emergency Response",
                  description:
                    "24/7 emergency response system for immediate assistance during crises and disasters.",
                },
                {
                  icon: Users,
                  title: "Community Partnership",
                  description:
                    "Working with local communities to identify needs and ensure culturally appropriate support.",
                },
                {
                  icon: Target,
                  title: "Targeted Support",
                  description:
                    "Focused assistance for the most vulnerable including children, elderly, and disabled individuals.",
                },
              ].map((method, idx) => (
                  <Card
                    key={idx}
                    className="text-center p-6 bg-white hover:shadow-lg transition-shadow border border-slate-100"
                  >
                    <CardContent className="p-0">
                      <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                        <method.icon className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2">
                        {method.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {method.description}
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
              Every Act of Charity Matters
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Your support provides immediate relief to families in crisis. Join
              us in creating a safety net of compassion and care for those who
              need it most.
            </p>
            {/* Bottom CTA buttons removed per request
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                Make a Donation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Volunteer for Distribution
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Corporate Giving Program
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

export default Charity;

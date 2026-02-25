import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  TreePine,
  Users,
  Target,
  Award,
  Leaf,
  Wind,
  Droplets,
  BarChart2,
  Building2,
} from "lucide-react";
import treePlantationHero from "@/assets/tree.jpg";
import treePlantationProgram from "@/assets/tree plantation.jpeg";

const TreePlantation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900">
      <Header />

      <section className="relative h-96 overflow-hidden">
        <div className="hero-bg-layer" style={{ backgroundImage: `url(${treePlantationHero})` }} aria-hidden />
        <div className="absolute inset-0 bg-black/45 z-10 flex items-center justify-center" aria-hidden>
          <div className="text-center text-white max-w-4xl px-6">
              {/* <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">ENvironmental Balance</h1> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">VANAM</h1>
            <p className="text-xl md:text-2xl mb-6 text-green-300">Restoring Balance. Reviving Nature.</p>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Restoring Ecological Harmony Through Community Action
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Vanam is an environmental sustainability initiative dedicated to restoring ecological
                  harmony and promoting responsible environmental practices within communities.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Recognizing the urgent need for climate resilience and environmental stewardship, Vanam
                  implements structured tree plantation drives, environmental awareness programs, and
                  sustainable living campaigns designed to create long-term ecological impact. Beyond
                  planting trees, the program focuses on nurturing environmental responsibility — especially
                  among youth and local communities — ensuring that restoration efforts are sustainable and
                  measurable.
                </p>
                <p>
                  "Vanam provides corporates with a structured platform to contribute meaningfully to environmental sustainability and climate responsibility."
                </p>
              </div>
              <div className="relative">
                <img
                  src={treePlantationProgram}
                  alt="Environmental Balance Activities"
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

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Environmental Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: TreePine,
                  number: "500K+",
                  label: "Saplings Planted",
                  desc: "Across multiple regions",
                },
                {
                  icon: Leaf,
                  number: "85%",
                  label: "Survival Rate",
                  desc: "Tracked & verified",
                },
                {
                  icon: Users,
                  number: "50,000+",
                  label: "Community Members",
                  desc: "Engaged in drives",
                },
                {
                  icon: Wind,
                  number: "1,000+",
                  label: "Tonnes CO₂ Offset",
                  desc: "Estimated annually",
                },
              ].map((stat, idx) => (
                <Card key={idx} className="text-center p-6 bg-white hover:shadow-lg transition-shadow border border-slate-100">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-emerald-600 mb-1">{stat.label}</div>
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
              Key Focus Areas
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Vanam implements a structured multi-pronged approach to environmental restoration,
              combining ground-level action with awareness and corporate engagement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TreePine,
                  title: "Tree Plantation Drives",
                  description:
                    "Organizing large-scale and community-based tree plantation drives to restore green cover across urban and rural landscapes.",
                  features: [
                    "Mass plantation events",
                    "Community mobilization",
                    "Native species selection",
                    "Sapling survival tracking",
                  ],
                },
                {
                  icon: Leaf,
                  title: "Environmental Awareness Workshops",
                  description:
                    "Conducting structured awareness workshops in schools and colleges to foster a culture of environmental responsibility among youth.",
                  features: [
                    "School & college outreach",
                    "Interactive workshops",
                    "Environmental education",
                    "Youth ambassador programs",
                  ],
                },
                {
                  icon: Wind,
                  title: "Urban & Rural Green Cover",
                  description:
                    "Enhancing green cover in both urban and rural areas through targeted plantation drives and ecosystem restoration projects.",
                  features: [
                    "Urban greening projects",
                    "Rural landscape restoration",
                    "Roadside plantation",
                    "Green corridor creation",
                  ],
                },
                {
                  icon: Droplets,
                  title: "Sustainable Living Campaigns",
                  description:
                    "Promoting sustainable lifestyle practices and waste management awareness to reduce community-level environmental footprint.",
                  features: [
                    "Waste segregation drives",
                    "Plastic-free campaigns",
                    "Water conservation awareness",
                    "Sustainable habits promotion",
                  ],
                },
                {
                  icon: Building2,
                  title: "Corporate Employee Engagement",
                  description:
                    "Structured plantation programs for corporate teams, enabling meaningful employee engagement aligned with CSR and sustainability mandates.",
                  features: [
                    "Team plantation events",
                    "Corporate CSR reporting",
                    "Employee participation tracking",
                    "Certification & recognition",
                  ],
                },
                {
                  icon: BarChart2,
                  title: "Carbon Footprint Tracking",
                  description:
                    "Estimating and tracking carbon offset contributions from plantation drives to provide measurable climate impact data for partner organizations.",
                  features: [
                    "Carbon offset estimation",
                    "Plantation geo-tagging",
                    "Impact reporting dashboard",
                    "Verification protocols",
                  ],
                },
              ].map((program, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600 bg-white border border-slate-100">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{program.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{program.description}</p>
                    <div className="space-y-2">
                      {program.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center text-sm">
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
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">CSR Impact Focus</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Vanam delivers transparent, measurable environmental outcomes that align with corporate
              sustainability goals and ESG reporting requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: TreePine,
                  title: "Sapling Tracking",
                  description:
                    "Number of saplings planted and survival rate tracking with geo-tagged records and periodic field verification.",
                },
                {
                  icon: Users,
                  title: "Community Participation",
                  description:
                    "Metrics capturing community member engagement, volunteer hours, and local ownership of plantation drives.",
                },
                {
                  icon: Wind,
                  title: "Carbon Offset Estimation",
                  description:
                    "Scientific carbon footprint offset estimation based on species, age, and plantation scale for ESG reporting.",
                },
                {
                  icon: BarChart2,
                  title: "Awareness Outreach",
                  description:
                    "Environmental awareness outreach numbers tracking students, community members, and employees reached.",
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
            <h2 className="text-3xl font-bold mb-4">Restore Balance. Revive Nature.</h2>
            <p className="text-xl mb-8 opacity-90">Every sapling planted is a step toward climate resilience. Partner with Vanam to create lasting environmental impact for communities and the planet.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TreePlantation;

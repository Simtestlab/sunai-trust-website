import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Users,
  Activity,
  Droplets,
  HandHeart,
  ArrowRight,
  Shield,
  Clock,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import bloodHeroImg from "@/assets/charity.jpg";
import bloodImg from "@/assets/health.jpg";

const stats = [
  { icon: Droplets, value: "1,000+", label: "Donation Drives Organised" },
  { icon: Users, value: "5,000+", label: "Lives Touched" },
  { icon: Shield, value: "100%", label: "Safe & Screened Blood" },
  { icon: Clock, value: "24/7", label: "Emergency Support" },
];

const highlights = [
  {
    icon: Droplets,
    title: "Blood Donation Drives",
    description:
      "We organise regular community-wide donation camps in partnership with hospitals, corporates, and local groups to build a consistent supply of safe blood.",
  },
  {
    icon: HandHeart,
    title: "Donor Awareness Campaigns",
    description:
      "Through targeted awareness drives, we educate communities about the importance of voluntary blood donation and dispel common myths and fears.",
  },
  {
    icon: Activity,
    title: "Blood Bank Network Support",
    description:
      "Life actively strengthens existing blood bank networks by facilitating coordination, logistics, and timely access to safe blood for patients in need.",
  },
  {
    icon: Heart,
    title: "Emergency Blood Assistance",
    description:
      "For critical cases, our network ensures rapid mobilisation of donors and blood units to hospitals, ensuring no life is lost due to unavailability.",
  },
  {
    icon: Users,
    title: "Corporate & Institutional Tie-Ups",
    description:
      "We engage with corporations, colleges, and institutions for regular donation camps, creating a sustained pipeline of voluntary donors across the year.",
  },
  {
    icon: Star,
    title: "Donor Recognition Programme",
    description:
      "We celebrate our regular donors through recognition initiatives, building a culture of pride and community around voluntary blood donation.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Register as a Donor",
    description:
      "Sign up on our donor network. Get notified whenever your blood group is urgently needed in your region.",
  },
  {
    step: "02",
    title: "Attend a Camp",
    description:
      "Participate in our regularly scheduled donation camps or request a camp in your area or institution.",
  },
  {
    step: "03",
    title: "Save a Life",
    description:
      "Your donation is screened, processed, and delivered to patients in critical need — your one act can save up to three lives.",
  },
];

const BloodBank = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900">
      <Header />

      {/* Hero */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={bloodHeroImg}
          alt="Life – Blood Bank Initiative"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            {/* <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">Blood Bank Initiative</h1> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              LIFE
            </h1>
            <p className="text-xl md:text-2xl text-green-300">
              Saving lives by strengthening blood donation awareness and supporting blood bank networks.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1">

        {/* Stats */}
        <section className="py-14 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-100 mb-3">
                    <stat.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Life */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-red-500 mb-3">
                  About the Initiative
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  One Drop Can Change a Destiny
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Life — our Blood Bank Initiative — is built on a simple yet powerful belief:
                  no one should lose their life due to a shortage of safe blood. Across India, millions
                  of patients — from accident victims to those undergoing surgery, from mothers in
                  childbirth to children battling cancer — urgently require blood transfusions.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Despite India needing approximately 15 million units of blood annually, there remains
                  a critical gap driven by lack of awareness, myths around donation, and logistical
                  challenges in blood bank networks. Life is committed to bridging that gap.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through organised donation drives, community education, and network-building with
                  hospitals and blood banks, we ensure that safe, screened blood reaches those who
                  need it most — at the right time.
                </p>
              </div>
              <div className="relative">
                <img
                  src={bloodImg}
                  alt="Blood donation awareness"
                  className="rounded-2xl shadow-lg w-full object-cover h-80"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-red-500 text-white rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold">3 Lives</p>
                  <p className="text-sm text-white/90">saved by every donor</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                What Life Does
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A multi-pronged approach to building a robust, community-powered blood donation ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((item) => (
                <Card
                  key={item.title}
                  className="border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 rounded-2xl"
                >
                  <CardContent className="p-7">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Becoming part of Life is simple. Every step you take can save a life.
              </p>
            </div>
            <div className="space-y-8">
              {howItWorks.map((item, index) => (
                <div
                  key={item.step}
                  className="flex gap-6 items-start bg-red-50 rounded-2xl p-6 border border-red-100"
                >
                  <span className="text-4xl font-black text-red-400 flex-shrink-0">{item.step}</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-br from-red-500 to-pink-600 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="w-14 h-14 mx-auto mb-4 text-white/80" />
            <h2 className="text-4xl font-bold mb-4">Be a Life-Saver</h2>
            <p className="text-lg text-white/85 mb-8 leading-relaxed">
              Join the Life donor network. Partner with us to organise a donation camp.
              Your one act of generosity can give someone a second chance at life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/volunteer"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 font-bold px-10 py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Join the Mission <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-10 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default BloodBank;

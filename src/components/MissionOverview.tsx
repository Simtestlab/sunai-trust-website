import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import educationImg from "@/assets/education.jpg";
import healthImg from "@/assets/health.jpg";
import treeImg from "@/assets/tree.jpg";
import charityImg from "@/assets/charity.jpg";

const programs = [
	{
		image: educationImg,
		title: "Uplift",
		subtitle: "Mentorship Programme",
		description:
			"A transformative mentorship initiative designed to guide, educate, and empower students and young individuals. Through leadership training, career guidance, and personal development programs, Uplift aims to unlock potential and build confident future leaders.",
		link: "/programs/education",
	},
	{
		image: treeImg,
		title: "Vanam",
		subtitle: "Environmental Balance",
		description:
			"Dedicated to restoring ecological harmony, Vanam promotes tree plantation drives, environmental awareness campaigns, and sustainable living practices. Our goal is to contribute towards a greener, healthier planet for generations to come.",
		link: "/programs/tree-plantation",
	},
	{
		image: charityImg,
		title: "Life",
		subtitle: "Blood Bank Initiative",
		description:
			"Life focuses on saving lives by strengthening blood donation awareness and supporting blood bank networks. Through organized donation drives and partnerships, we strive to ensure timely access to safe blood for those in need.",
		link: "/programs/blood-bank",
	},
	{
		image: healthImg,
		title: "Health",
		subtitle: "Diagnostic & Healthcare Centres",
		description:
			"Committed to accessible and affordable healthcare, Health works towards establishing diagnostic and healthcare centres that provide quality medical support to underserved communities.",
		link: "/programs/health",
	},
];


const MissionOverview = () => {
  return (
    <section className="py-20 bg-soft-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 green-gradient-text leading-tight">
            Our Key Initiatives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Four focused pillars of impact — mentoring young leaders, restoring
            environmental balance, saving lives through blood donation, and making
            healthcare accessible for all.
          </p>
          <div className="green-divider mt-6"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 -mx-6 md:-mx-12 px-6 md:px-12">
            {programs.map((program) => (
              <div key={program.title} className="mission-card">
                <Card className="rounded-2xl overflow-hidden border border-emerald-100 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <Link to={program.link} className="group">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-80 opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />
                        <div className="absolute bottom-4 left-6">
                          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{program.title}</h3>
                          <p className="text-sm text-white/80 font-medium mt-0.5">{program.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                    <div className="p-8 flex-1 flex flex-col">
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 flex-1">
                        {program.description}
                      </p>
                      <div>
                        <Link
                          to={program.link}
                          className="text-emerald-600 hover:text-emerald-700 hover:underline font-semibold inline-flex items-center transition-colors"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionOverview;

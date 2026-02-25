import React, { useRef, useState } from "react";
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
	const carouselRef = useRef<HTMLDivElement | null>(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const scrollTo = (index: number) => {
		const el = carouselRef.current;
		if (!el) return;
		const card = el.querySelector<HTMLDivElement>(".mission-card");
		if (!card) return;
		const gap = parseInt(getComputedStyle(el).gap || "24") || 24;
		const cardWidth = Math.round(card.getBoundingClientRect().width) + gap;
		el.scrollTo({ left: index * cardWidth, behavior: "smooth" });
		setCurrentIndex(index);
	};

	const prev = () => scrollTo(Math.max(0, currentIndex - 1));
	const next = () => scrollTo(Math.min(programs.length - 1, currentIndex + 1));

	React.useEffect(() => {
		const interval = setInterval(() => {
			const el = carouselRef.current;
			if (!el) return;
			const card = el.querySelector<HTMLDivElement>(".mission-card");
			if (!card) return;
			const gap = parseInt(getComputedStyle(el).gap || "24") || 24;
			const cardWidth = Math.round(card.getBoundingClientRect().width) + gap;
			const visible = Math.max(1, Math.floor(el.getBoundingClientRect().width / cardWidth));
			const lastIndex = Math.max(0, programs.length - visible);

			if (currentIndex >= lastIndex) {
				scrollTo(0);
			} else {
				next();
			}
		}, 3000);
		return () => clearInterval(interval);
	}, [currentIndex]);

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

				<div className="relative max-w-6xl mx-auto">
					<button
						aria-label="Previous"
						onClick={prev}
						className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-md hidden md:inline-flex transition-colors"
						style={{ transform: "translateY(-50%) translateX(-100%)" }}
					>
						‹
					</button>

					<div className="relative -mx-6 md:-mx-12 px-6 md:px-12">
						<div
							ref={carouselRef}
							className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory flex gap-8 pt-4 pb-5"
							style={{
								scrollSnapType: "x mandatory",
								scrollbarGutter: "stable",
							}}
						>
							{programs.map((program) => (
								<div
									key={program.title}
									className="mission-card snap-start flex-shrink-0 w-full sm:w-1/2 lg:w-[31%]"
									style={{ minHeight: "520px" }}
								>
									<Card className="rounded-2xl overflow-hidden border border-emerald-100 shadow-lg hover:shadow-xl transition-shadow h-full">
										<CardContent className="p-0 h-full flex flex-col">
											<Link to={program.link} className="group">
												<div className="relative h-64 overflow-hidden">
													<img
														src={program.image}
														alt={program.title}
														className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-80 opacity-70"
													/>
													<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
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

					<button
						aria-label="Next"
						onClick={next}
						className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-md hidden md:inline-flex transition-colors"
						style={{ transform: "translateY(-50%) translateX(100%)" }}
					>
						›
					</button>
				</div>
			</div>
		</section>
	);
};

export default MissionOverview;

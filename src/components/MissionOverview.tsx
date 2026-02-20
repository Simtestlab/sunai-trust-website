import React, { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import educationImg from "@/assets/education.jpg";
import healthImg from "@/assets/health.jpg";
import empowermentImg from "@/assets/empowerment.jpg";
import treeImg from "@/assets/tree.jpg";
import ruralImg from "@/assets/rural.jpg";
import charityImg from "@/assets/charity.jpg";

const programs = [
	{
		image: educationImg,
		title: "Mentorship Programme",
		description:
			"Providing quality learning and mentorship opportunities to underserved communities, ensuring every child has access to knowledge, skills, and guidance for a brighter future.",
		link: "/programs/education",
	},
	{
		image: healthImg,
		title: "Diagnostic & Healthcare Centres",
		description:
			"Delivering essential healthcare services, medical training, and health awareness programs to improve the well-being of entire communities.",
		link: "/programs/health",
	},
	/* {
		image: empowermentImg,
		title: "Empowerment",
		description:
			"Building sustainable livelihoods through skill development, microfinance, and community-led initiatives that foster long-term independence.",
		link: "/programs/empowerment",
	}, */
	{
		image: treeImg,
		title: "Environmental Balance",
		description:
			"Organizing community-led tree plantation drives to restore local ecosystems, improve air quality, and create green spaces for future generations.",
		link: "/programs/tree-plantation",
	},
	/* {
		image: ruralImg,
		title: "Rural Development Programs",
		description:
			"Supporting rural communities with infrastructure, training, and resources to boost agriculture, market access, and overall resilience.",
		link: "/programs/rural-development",
	}, */
	/* {
		image: charityImg,
		title: "Charity",
		description:
			"Providing direct aid and relief to families in need, including food distribution, emergency support, and targeted charitable initiatives.",
		link: "/programs/charity",
	}, */
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
	const next = () => scrollTo(Math.min(programs.length - 2, currentIndex + 1));

	React.useEffect(() => {
		const interval = setInterval(() => {
			if (currentIndex >= programs.length - 2) {
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent leading-tight">
						Our Mission in Action
					</h1>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						We believe in sustainable change through education, health, and
						empowerment. Our integrated approach ensures communities thrive long
						after our programs conclude.
					</p>
				</div>

				<div className="relative max-w-6xl mx-auto">
					<button
						aria-label="Previous"
						onClick={prev}
						className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-3 shadow-md hidden md:inline-flex"
						style={{
							transform: "translateY(-50%) translateX(-100%)",
						}}
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
								style={{ minHeight: '520px' }}
							>
								<Card className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg h-full">
									<CardContent className="p-0 h-full flex flex-col">
										<Link to={program.link}>
											<div className="relative h-64 overflow-hidden">
												<img
													src={program.image}
													alt={program.title}
													className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-80 opacity-70"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
												<h3 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-white">
													{program.title}
												</h3>
											</div>
										</Link>
										<div className="p-8 flex-1 flex flex-col">
											<p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 flex-1">
												{program.description}
											</p>
											<div>
												<Link
													to={program.link}
													className="text-blue-600 hover:underline font-semibold inline-flex items-center"
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
						className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-3 shadow-md hidden md:inline-flex"
						style={{
							transform: "translateY(-50%) translateX(100%)",
						}}
					>
						›
					</button>
				</div>
			</div>
		</section>
	);
};

export default MissionOverview;

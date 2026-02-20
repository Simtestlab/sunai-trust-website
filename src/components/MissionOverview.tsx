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
		title: "Sunai Uplift",
		subtitle: "Mentorship Programme",
		description:
			"A transformative mentorship initiative designed to guide, educate, and empower students and young individuals. Through leadership training, career guidance, and personal development programs, Sunai Uplift aims to unlock potential and build confident future leaders.",
		link: "/programs/education",
	},
	{
		image: treeImg,
		title: "Sunai Vanam",
		subtitle: "Environmental Balance",
		description:
			"Dedicated to restoring ecological harmony, Sunai Vanam promotes tree plantation drives, environmental awareness campaigns, and sustainable living practices. Our goal is to contribute towards a greener, healthier planet for generations to come.",
		link: "/programs/tree-plantation",
	},
	{
		image: charityImg,
		title: "Sunai Life",
		subtitle: "Blood Bank Initiative",
		description:
			"Sunai Life focuses on saving lives by strengthening blood donation awareness and supporting blood bank networks. Through organized donation drives and partnerships, we strive to ensure timely access to safe blood for those in need.",
		link: "/programs/blood-bank",
	},
	{
		image: healthImg,
		title: "Sunai Health",
		subtitle: "Diagnostic & Healthcare Centres",
		description:
			"Committed to accessible and affordable healthcare, Sunai Health works towards establishing diagnostic and healthcare centres that provide quality medical support to underserved communities.",
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
			if (currentIndex >= programs.length - 2) {
				scrollTo(0);
			} else {
				next();
			}
		}, 3000);
		return () => clearInterval(interval);
	}, [currentIndex]);

	return (
		<section className="py-12 sm:py-16 md:py-20 bg-soft-gradient">
			<div className="container mx-auto px-4 sm:px-6">
				<div className="text-center mb-10 sm:mb-12 md:mb-16 scroll-reveal">
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent leading-tight">
						Our Key Initiatives
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						Four focused pillars of impact — mentoring young leaders, restoring
						environmental balance, saving lives through blood donation, and making
						healthcare accessible for all.
					</p>
				</div>
				<div className="relative max-w-6xl mx-auto">
					<button
						aria-label="Previous"
						onClick={prev}
						className="absolute -left-4 sm:-left-6 top-1/2 z-10 bg-white/90 rounded-full p-2 sm:p-3 shadow-md hidden md:inline-flex hover:bg-white transition-colors"
						style={{
							transform: "translateY(-50%)",
						}}
					>
						‹
					</button>
					<div className="relative -mx-2 sm:-mx-4 md:-mx-8 px-2 sm:px-4 md:px-8">
						<div
							ref={carouselRef}
							className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory flex gap-4 sm:gap-6 md:gap-8 pt-4 pb-5"
							style={{
								scrollSnapType: "x mandatory",
								scrollbarGutter: "stable",
							}}
						>
							{programs.map((program) => (
								<div
									key={program.title}
									className="mission-card snap-start flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[calc(50%-1rem)] lg:w-[31%]"
									style={{ minHeight: "480px" }}
								>
									<Card className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg h-full hover:shadow-xl transition-all duration-300">
										<CardContent className="p-0 h-full flex flex-col">
											<Link to={program.link} className="group">
												<div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
													<img
														src={program.image}
														alt={program.title}
														loading="lazy"
														className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-80 opacity-70"
													/>
													<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
													<div className="absolute bottom-4 left-4 sm:left-6">
														<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">{program.title}</h3>
														<p className="text-xs sm:text-sm text-white/80 font-medium mt-0.5">{program.subtitle}</p>
													</div>
												</div>
											</Link>
											<div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col">
												<p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6 flex-1">
													{program.description}
												</p>
												<div>
													<Link
														to={program.link}
														className="text-teal-600 hover:text-teal-700 hover:underline font-semibold inline-flex items-center text-sm sm:text-base"
													>
														Learn More
														<ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
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
						className="absolute -right-4 sm:-right-6 top-1/2 z-10 bg-white/90 rounded-full p-2 sm:p-3 shadow-md hidden md:inline-flex hover:bg-white transition-colors"
						style={{
							transform: "translateY(-50%)",
						}}
					>
						›
					</button>

					{/* Mobile dots */}
					<div className="flex justify-center mt-4 gap-2 md:hidden">
						{programs.map((_, idx) => (
							<button
								key={idx}
								onClick={() => scrollTo(idx)}
								className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex
										? "bg-teal-600 scale-125"
										: "bg-gray-300 hover:bg-gray-400"
									}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default MissionOverview;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
    Heart,
    ArrowRight,
    HandHeart,
    Users,
    Megaphone,
    CalendarClock,
    Globe,
    BookOpen,
    TreePine,
    Droplets,
    Stethoscope,
    Target,
    TrendingUp,
    Shield,
    BarChart3,
} from "lucide-react";

/* ─── SDG Initiatives ─── */
const sdgPrograms = [
    {
        program: "SUNAI Uplift",
        subtitle: "Mentorship Programme",
        icon: BookOpen,
        color: "from-blue-500 to-indigo-600",
        sdgs: [
            {
                number: 4,
                title: "Quality Education",
                desc: "Ensures inclusive and equitable quality education and promotes lifelong learning opportunities.",
            },
            {
                number: 8,
                title: "Decent Work & Economic Growth",
                desc: "Enhances employability, career readiness, and entrepreneurial skills among youth.",
            },
            {
                number: 10,
                title: "Reduced Inequalities",
                desc: "Supports equal access to guidance and opportunity for diverse student communities.",
            },
        ],
    },
    {
        program: "SUNAI Vanam",
        subtitle: "Environmental Balance",
        icon: TreePine,
        color: "from-green-500 to-emerald-600",
        sdgs: [
            {
                number: 13,
                title: "Climate Action",
                desc: "Promotes tree plantation and climate resilience initiatives.",
            },
            {
                number: 15,
                title: "Life on Land",
                desc: "Supports restoration of ecosystems and biodiversity.",
            },
            {
                number: 11,
                title: "Sustainable Cities & Communities",
                desc: "Encourages greener and healthier living environments.",
            },
        ],
    },
    {
        program: "SUNAI Life",
        subtitle: "Blood Bank Initiative",
        icon: Droplets,
        color: "from-red-500 to-rose-600",
        sdgs: [
            {
                number: 3,
                title: "Good Health & Well-Being",
                desc: "Ensures access to life-saving blood resources and emergency support systems.",
            },
            {
                number: 17,
                title: "Partnerships for the Goals",
                desc: "Strengthens collaboration between hospitals, donors, and communities.",
            },
        ],
    },
    {
        program: "SUNAI Health",
        subtitle: "Diagnostic & Healthcare Centres",
        icon: Stethoscope,
        color: "from-teal-500 to-cyan-600",
        sdgs: [
            {
                number: 3,
                title: "Good Health & Well-Being",
                desc: "Improves access to affordable and preventive healthcare services.",
            },
            {
                number: 1,
                title: "No Poverty",
                desc: "Reduces financial burden of healthcare in underserved communities.",
            },
            {
                number: 10,
                title: "Reduced Inequalities",
                desc: "Improves healthcare accessibility for marginalized populations.",
            },
        ],
    },
];

/* ─── Ways to get involved ─── */
const involvement = [
    {
        icon: Heart,
        title: "Donate",
        desc: "Your contribution directly supports mentorship programs, environmental initiatives, blood donation drives, and healthcare services. Every donation — big or small — creates measurable impact in communities that need it most.",
        color: "bg-rose-50 text-rose-600 border-rose-200",
        iconBg: "bg-rose-100",
    },
    {
        icon: HandHeart,
        title: "Partner with Us",
        desc: "Corporates, institutions, and foundations can collaborate with SUNAI through structured CSR initiatives. We offer transparent governance, impact reporting, and scalable project models aligned with sustainable development goals.",
        color: "bg-blue-50 text-blue-600 border-blue-200",
        iconBg: "bg-blue-100",
    },
    {
        icon: Users,
        title: "Ambassador / Volunteer",
        desc: "Become a part of our mission by contributing your time, skills, and expertise. Whether it's mentoring students, participating in plantation drives, supporting blood donation camps, or assisting healthcare outreach — your involvement matters.",
        color: "bg-emerald-50 text-emerald-600 border-emerald-200",
        iconBg: "bg-emerald-100",
    },
    {
        icon: Megaphone,
        title: "Spread the Word",
        desc: "Awareness creates momentum. Share our initiatives, encourage participation, and help us build a stronger network of compassionate change-makers.",
        color: "bg-amber-50 text-amber-600 border-amber-200",
        iconBg: "bg-amber-100",
    },
    {
        icon: CalendarClock,
        title: "Become a Long-Term Supporter",
        desc: "Join us as a recurring donor, impact ambassador, or advisory contributor to help SUNAI grow sustainably and consistently.",
        color: "bg-purple-50 text-purple-600 border-purple-200",
        iconBg: "bg-purple-100",
    },
];

/* ─── CSR Alignment Benefits ─── */
const csrBenefits = [
    { icon: Shield, text: "Strengthens its credibility in CSR proposals" },
    { icon: BarChart3, text: "Supports corporate ESG and sustainability reporting" },
    { icon: Globe, text: "Demonstrates global development relevance" },
    { icon: TrendingUp, text: "Enhances funding and partnership potential" },
];

const JoinUs = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            {/* ─── Hero ─── */}
            <section className="relative py-20 md:py-28 bg-gradient-to-br from-teal-700 via-teal-600 to-green-600 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                    }} />
                </div>
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <span className="inline-block text-sm font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            Together, We Can Create Lasting Impact
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Join With <span className="text-amber-300">SUNAI</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                            When individuals, communities, and corporates unite with purpose,
                            transformation becomes unstoppable.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/register"
                                className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-bold px-8 py-3.5 rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-lg text-base sm:text-lg"
                            >
                                Register Now <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 text-base sm:text-lg"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <main className="flex-1">
                {/* ─── SDG Mapping Section ─── */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12 md:mb-16">
                            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">
                                Global Alignment
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">
                                SDG Mapping — An Overview
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                                SDG Mapping aligns our initiatives with the United Nations Sustainable
                                Development Goals (SDGs) — 17 global goals adopted to achieve a better
                                and more sustainable future for all by 2030.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {sdgPrograms.map((program) => (
                                <div
                                    key={program.program}
                                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <div className={`bg-gradient-to-r ${program.color} p-5 sm:p-6 flex items-center gap-4`}>
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                            <program.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white">{program.program}</h3>
                                            <p className="text-sm text-white/80">{program.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className="p-5 sm:p-6 space-y-4">
                                        {program.sdgs.map((sdg) => (
                                            <div key={sdg.number + sdg.title} className="flex gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                                                    <Target className="w-5 h-5 text-teal-600" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-slate-800 text-sm sm:text-base">
                                                        SDG {sdg.number} — {sdg.title}
                                                    </p>
                                                    <p className="text-sm text-slate-600 leading-relaxed">{sdg.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Why It Matters for CSR ─── */}
                <section className="py-16 md:py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10 md:mb-14">
                                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-teal-400 mb-3">
                                    CSR Impact
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                                    Why This Matters for CSR
                                </h2>
                                <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
                                    By aligning with SDGs, SUNAI creates value for corporate partners and their sustainability goals.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {csrBenefits.map((benefit) => (
                                    <div
                                        key={benefit.text}
                                        className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                                            <benefit.icon className="w-6 h-6 text-teal-400" />
                                        </div>
                                        <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed">{benefit.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── How You Can Get Involved ─── */}
                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12 md:mb-16">
                            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-teal-600 mb-3">
                                Make A Difference
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">
                                How You Can Get Involved
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                                At SUNAI, every individual and organization has the power to create meaningful
                                change. Here's how you can be part of our journey.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {involvement.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`${item.color} border rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col`}
                                >
                                    <div className={`${item.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-5`}>
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-1">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Our Story CTA Section ─── */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                                {/* Story text */}
                                <div>
                                    <span className="inline-block text-sm font-semibold tracking-widest uppercase text-teal-600 mb-4">
                                        Our Story
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                                        When Responsibility<br className="hidden sm:block" /> Turned Into Action
                                    </h2>
                                    <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                                        <p className="italic text-slate-500">
                                            It began with a quiet realization —<br />
                                            the future we dream of will not build itself.
                                        </p>
                                        <p>
                                            We saw young minds full of potential but lacking direction.
                                            We saw nature asking for restoration. We saw families waiting
                                            for timely healthcare. And in those moments, we understood —{" "}
                                            <strong>change cannot be postponed.</strong>
                                        </p>
                                        <p>
                                            SUNAI was born not from abundance, but from{" "}
                                            <strong>responsibility</strong>. A responsibility to mentor
                                            the next generation. To restore environmental balance. To
                                            strengthen life-saving blood networks. To make healthcare
                                            more accessible and humane.
                                        </p>
                                        <p>
                                            What started as a thought became a movement. What began as
                                            concern became commitment.
                                        </p>
                                        <p className="text-slate-700 font-medium">
                                            Today, SUNAI stands as a growing force of compassion and
                                            structured action — uniting individuals, corporates, and
                                            communities under one shared purpose.
                                        </p>
                                        <p className="text-teal-600 font-semibold italic">
                                            Because when intention is courageous, impact becomes inevitable.
                                        </p>
                                    </div>
                                </div>

                                {/* CTA Cards */}
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-br from-teal-50 to-green-50 border border-teal-100 rounded-2xl p-6 sm:p-8">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Heart className="w-5 h-5 text-teal-600" />
                                            <span className="font-semibold text-teal-700">💛 Be the Change. Be the Strength. Be SUNAI.</span>
                                        </div>
                                        <div className="space-y-3 mb-6">
                                            {[
                                                { action: "Your support", impact: "can mentor a young dreamer." },
                                                { action: "Your partnership", impact: "can restore a forest." },
                                                { action: "Your contribution", impact: "can save a life." },
                                                { action: "Your collaboration", impact: "can strengthen community healthcare." },
                                            ].map((item) => (
                                                <div key={item.action} className="flex gap-2">
                                                    <ArrowRight className="w-4 h-4 text-teal-600 flex-shrink-0 mt-1" />
                                                    <p className="text-slate-700 text-sm sm:text-base">
                                                        <strong>{item.action}</strong> {item.impact}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                                            At SUNAI, we believe transformation happens when compassion turns into action.
                                            Whether you are an individual, a corporate partner, or a volunteer, your involvement
                                            becomes part of something greater — a collective effort to build a responsible and resilient future.
                                        </p>
                                        <p className="text-lg font-bold text-slate-800 mb-6">
                                            Do not just witness change. Be a part of it.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Link
                                                to="/register"
                                                className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-700 transition-colors text-sm sm:text-base"
                                            >
                                                Partner with SUNAI <ArrowRight className="w-4 h-4" />
                                            </Link>
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center justify-center gap-2 border-2 border-teal-600 text-teal-600 font-semibold px-6 py-3 rounded-full hover:bg-teal-50 transition-colors text-sm sm:text-base"
                                            >
                                                Shape Tomorrow
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default JoinUs;

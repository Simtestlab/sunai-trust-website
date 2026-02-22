import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    Users,
    Building2,
    ArrowRight,
    Shield,
    Globe,
    BarChart3,
    Heart,
    CheckCircle2,
} from "lucide-react";
import joinUsImg from "@/assets/join_us.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Register = () => {
    useScrollReveal();

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1">
                {/* ── Hero ────────────────────────────────────────── */}
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="hero-bg-layer" style={{ backgroundImage: `url(${joinUsImg})` }} aria-hidden />
                    {/* decorative blurred circles */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-emerald-400/10 blur-3xl" />
                        <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] rounded-full bg-amber-400/10 blur-3xl" />
                    </div>
                    <div className="absolute inset-0 bg-emerald-900/40 z-10" aria-hidden />

                    <div className="relative z-20 container mx-auto px-4 text-center max-w-4xl">
                        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-emerald-300 mb-4">
                            Join SUNAI
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                            Be a part of the <span className="text-amber-400">Movement</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                            Whether you're an individual ready to volunteer or an organisation
                            looking to collaborate, SUNAI has a pathway for you.
                        </p>
                    </div>
                </section>

                {/* ── Registration Cards ─────────────────────────── */}
                <section className="relative -mt-16 z-20 pb-20">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Volunteer Card */}
                            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-300 overflow-hidden flex flex-col">
                                {/* colour ribbon */}
                                <div className="h-1.5 bg-gradient-to-r from-emerald-500 to-green-500" />

                                <div className="p-10 flex flex-col flex-1">
                                    {/* icon */}
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Users className="w-7 h-7 text-emerald-600" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        Volunteer Registration
                                    </h3>
                                    <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-5">
                                        Become a SUNAI Ambassador
                                    </p>

                                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                                        Contribute your time, skills, and expertise — whether it's
                                        mentoring students, participating in plantation drives,
                                        supporting blood donation camps, or assisting healthcare
                                        outreach.
                                    </p>

                                    {/* highlights */}
                                    <ul className="space-y-3 mb-8 text-sm text-gray-600">
                                        {[
                                            "Flexible time commitment",
                                            "Field & remote opportunities",
                                            "Certificate of appreciation",
                                        ].map((t) => (
                                            <li key={t} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                                <span>{t}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to="/volunteer"
                                        className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold text-base hover:from-emerald-700 hover:to-green-700 transition-all shadow-md hover:shadow-lg"
                                    >
                                        Register as Volunteer
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* NGO / Partner Card */}
                            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-300 overflow-hidden flex flex-col">
                                <div className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-500" />

                                <div className="p-10 flex flex-col flex-1">
                                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Building2 className="w-7 h-7 text-green-600" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        NGO / Partner Registration
                                    </h3>
                                    <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-5">
                                        Collaborate for Impact
                                    </p>

                                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                                        Corporates, institutions, and foundations can collaborate
                                        through structured CSR initiatives. We offer transparent
                                        governance, impact reporting, and scalable project models
                                        aligned with SDGs.
                                    </p>

                                    <ul className="space-y-3 mb-8 text-sm text-gray-600">
                                        {[
                                            "Structured CSR alignment",
                                            "Transparent impact reporting",
                                            "Tax benefits under 12A / 80G",
                                        ].map((t) => (
                                            <li key={t} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>{t}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to="/register/ngo"
                                        className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold text-base hover:from-green-700 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg"
                                    >
                                        Register as Partner
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Why Partner with SUNAI ─────────────────────── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-14 scroll-reveal">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                Why Partner with SUNAI?
                            </h2>
                            <div className="green-divider mt-3" />
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal">
                            {[
                                {
                                    icon: Shield,
                                    title: "Governance & Trust",
                                    desc: "CSR-registered, 12A & 80G certified. Transparent audit-ready processes.",
                                },
                                {
                                    icon: Globe,
                                    title: "SDG Alignment",
                                    desc: "Programs mapped to SDG 3, 4, 13 & 15 — global credibility for your ESG reports.",
                                },
                                {
                                    icon: BarChart3,
                                    title: "Measurable Impact",
                                    desc: "Comprehensive impact reporting with real data and beneficiary stories.",
                                },
                                {
                                    icon: Heart,
                                    title: "Community Reach",
                                    desc: "On-ground presence across education, environment, and healthcare verticals.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5">
                                        <item.icon className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── SDG Alignment (compact) ────────────────────── */}
                <section className="py-16 bg-emerald-900 text-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="scroll-reveal text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">
                                Aligned with UN Sustainable Development Goals
                            </h2>
                            <p className="text-white/70 text-base max-w-2xl mx-auto">
                                Strengthening corporate ESG and sustainability reporting with
                                globally recognised development frameworks.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 scroll-reveal">
                            {[
                                { sdg: "SDG 3", label: "Good Health & Well-Being" },
                                { sdg: "SDG 4", label: "Quality Education" },
                                { sdg: "SDG 13", label: "Climate Action" },
                                { sdg: "SDG 15", label: "Life on Land" },
                            ].map((item) => (
                                <div
                                    key={item.sdg}
                                    className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/15 hover:bg-white/20 transition-colors text-center"
                                >
                                    <p className="text-amber-400 font-bold text-lg mb-1">
                                        {item.sdg}
                                    </p>
                                    <p className="text-white/85 text-sm">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Register;

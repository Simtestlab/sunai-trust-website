import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
    Users,
    Building2,
    ArrowRight,
    Heart,
    Shield,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

const registrationOptions = [
    {
        icon: Users,
        title: "Volunteer Registration",
        subtitle: "Individual / Ambassador",
        desc: "Become a part of our mission by contributing your time, skills, and expertise. Whether it's mentoring students, participating in plantation drives, supporting blood donation camps, or assisting healthcare outreach — your involvement matters.",
        features: [
            "Mentor students and young individuals",
            "Participate in environmental drives",
            "Support blood donation campaigns",
            "Assist healthcare outreach programs",
            "Become a SUNAI Impact Ambassador",
        ],
        link: "/volunteer",
        cta: "Register as Volunteer",
        gradient: "from-teal-500 to-green-500",
        bgLight: "bg-teal-50",
        borderColor: "border-teal-200",
        textColor: "text-teal-700",
        iconBg: "bg-teal-100",
    },
    {
        icon: Building2,
        title: "NGO Registration",
        subtitle: "Organization / Institution",
        desc: "Corporates, institutions, and foundations can collaborate with SUNAI through structured CSR initiatives. We offer transparent governance, impact reporting, and scalable project models aligned with sustainable development goals.",
        features: [
            "Structured CSR partnership models",
            "Transparent governance & reporting",
            "Impact assessment & measurement",
            "Scalable program alignment",
            "ESG and SDG integration support",
        ],
        link: "/register/ngo",
        cta: "Register as NGO",
        gradient: "from-blue-500 to-indigo-500",
        bgLight: "bg-blue-50",
        borderColor: "border-blue-200",
        textColor: "text-blue-700",
        iconBg: "bg-blue-100",
    },
];

const Register = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            {/* ─── Hero Section ─── */}
            <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 30% 70%, rgba(20,184,166,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(56,189,248,0.3) 0%, transparent 50%)",
                        }}
                    />
                </div>
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            Join the SUNAI Movement
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Choose Your Path to{" "}
                            <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                                Make an Impact
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Whether you want to volunteer your time or partner as an organization,
                            SUNAI offers structured, transparent, and impactful ways to contribute
                            to meaningful change.
                        </p>
                    </div>
                </div>
            </section>

            <main className="flex-1">
                {/* ─── Registration Options ─── */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {registrationOptions.map((option) => (
                                <div
                                    key={option.title}
                                    className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
                                >
                                    {/* Card Header */}
                                    <div
                                        className={`bg-gradient-to-r ${option.gradient} p-6 sm:p-8 text-white`}
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                <option.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl sm:text-2xl font-bold">{option.title}</h2>
                                                <p className="text-sm text-white/80">{option.subtitle}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                                            {option.desc}
                                        </p>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6 sm:p-8 flex-1 flex flex-col">
                                        <h3 className={`text-sm font-semibold tracking-widest uppercase ${option.textColor} mb-4`}>
                                            What You Can Do
                                        </h3>
                                        <div className="space-y-3 flex-1 mb-8">
                                            {option.features.map((feature) => (
                                                <div key={feature} className="flex items-start gap-3">
                                                    <CheckCircle2 className={`w-5 h-5 ${option.textColor} flex-shrink-0 mt-0.5`} />
                                                    <p className="text-sm sm:text-base text-slate-700">{feature}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            to={option.link}
                                            className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${option.gradient} text-white font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-lg text-sm sm:text-base`}
                                        >
                                            {option.cta} <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Why Register Section ─── */}
                <section className="py-16 md:py-20 bg-gradient-to-br from-teal-50 to-green-50">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                                Why Register with SUNAI?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                                {[
                                    {
                                        icon: Shield,
                                        title: "Transparent Governance",
                                        desc: "Every initiative is backed by structured compliance and accountable governance.",
                                    },
                                    {
                                        icon: Heart,
                                        title: "Measurable Impact",
                                        desc: "Clear metrics, periodic reports, and data-driven outcomes for all programs.",
                                    },
                                    {
                                        icon: Building2,
                                        title: "CSR Alignment",
                                        desc: "Programs aligned with SDGs, ESG frameworks, and corporate CSR mandates.",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-teal-600" />
                                        </div>
                                        <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <Link
                                to="/join-us"
                                className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors text-base sm:text-lg"
                            >
                                Learn more about our initiatives <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Register;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const officeAddress =
  "46, Ramar Kovil Street, Ram Nagar, Coimbatore – 641009, Tamil Nadu, India";
const officeMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 96669 84000",
    href: "tel:+919666984000",
    sub: "Mon – Sat, 9 AM – 6 PM IST",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "sunai2k3@gmail.com",
    href: "mailto:sunai2k3@gmail.com",
    sub: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "Coimbatore, Tamil Nadu",
    href: officeMapsUrl,
    sub: "46, Ramar Kovil St, Ram Nagar – 641009",
    external: true,
  },
];

const officeHours = [
  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Programs", to: "/projects" },
  { label: "Volunteer", to: "/volunteer" },
  { label: "NGO Registration", to: "/ngo-registration" },
  { label: "Our Team", to: "/team" },
  { label: "Blogs & News", to: "/blogs" },
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/sunaicbe",
    color: "hover:text-blue-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/sunaicbe",
    color: "hover:text-pink-600",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    href: "https://twitter.com/sunaicbe",
    color: "hover:text-sky-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sunai-trust",
    color: "hover:text-blue-700",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@sunaicbe",
    color: "hover:text-red-600",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-600 text-white py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,white_0%,transparent_60%)]" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Connect With SUNAI
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              Whether you want to volunteer, partner, donate, or simply learn more about our work — we would love to hear from you.
            </p>
          </div>
        </section>

        {/* ── Contact Cards ── */}
        <section className="container mx-auto px-6 -mt-10 relative z-10 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-5">
            {contactCards.map(({ icon: Icon, label, value, href, sub, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:bg-emerald-700 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-0.5">{label}</p>
                  <p className="text-slate-800 font-bold text-base">{value}</p>
                  <p className="text-slate-500 text-sm mt-0.5">{sub}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Main Content + Sidebar ── */}
        <section className="container mx-auto px-6 py-16 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* ── Map (main content) ── */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-1">Find Our Office</h2>
                <p className="text-slate-500 text-sm mb-5">
                  46, Ramar Kovil Street, Ram Nagar, Coimbatore – 641009, Tamil Nadu, India.{" "}
                  <a
                    href={officeMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 font-semibold hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </p>
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-72 md:h-96 bg-slate-100">
                  <iframe
                    title="SUNAI Office Location"
                    src="https://www.google.com/maps?q=46+Ramar+Kovil+Street+Ram+Nagar+Coimbatore+641009&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Reach out notice */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Prefer to write to us?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    For partnerships, CSR proposals, volunteer enquiries, or general questions, drop us an email at{" "}
                    <a href="mailto:sunai2k3@gmail.com" className="text-emerald-600 font-semibold hover:underline">
                      sunai2k3@gmail.com
                    </a>
                    . Our team typically responds within one business day.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside className="space-y-6">





              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="font-bold text-slate-800 text-base mb-4">Follow Us</h3>
                <div className="space-y-2">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 text-sm text-slate-600 ${color} px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors group`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="font-medium">{label}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="bg-gradient-to-br from-emerald-600 to-green-600 py-16 text-white text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Together, We Can Create Lasting Impact.
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              When individuals, communities, and corporates unite with purpose, transformation becomes unstoppable. Every step forward — big or small — strengthens the movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/volunteer"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Partner with SUNAI <ArrowRight className="w-4 h-4" />
              </Link>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;
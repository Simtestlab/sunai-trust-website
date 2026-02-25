import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Send,
} from "lucide-react";
import contactHero from "@/assets/connect_with_us.jpg";

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
        <section
          className="relative text-white py-20 md:py-28 overflow-hidden"
          style={{
            backgroundImage: `url(${contactHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
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
            </div>

            {/* ── Sidebar ── */}
            <aside className="space-y-6">
              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="font-bold text-slate-800 text-base mb-4 flex items-center gap-2">
                  <Send className="w-4 h-4 text-emerald-600" />
                  
                  Follow Our Journey
                </h3>
                <p className="text-slate-500 text-sm mb-5">
                  Stay updated with our latest initiatives and impact stories through our social channels.
                </p>
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

              {/* Quick Info Card */}

            </aside>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;
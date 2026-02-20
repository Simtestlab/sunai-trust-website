import logo from "@/assets/icon.png";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="py-10 sm:py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img
                src={logo}
                alt="Sunai Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-contain"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">SUNAI</h3>
                <p className="text-[10px] sm:text-xs text-white/60 leading-tight">
                  Support Uplift Nourish Aid Illuminate
                </p>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-xs">
              A purpose-driven NGO committed to nurturing lives, restoring balance,
              and creating a healthier, greener, empowered tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about-us" },
                { label: "Join Us", to: "/join-us" },
                { label: "Contact", to: "/contact" },
                { label: "Register", to: "/register" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white mb-3 sm:mb-4">Programs</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { label: "Sunai Uplift — Mentorship", to: "/programs/education" },
                { label: "Sunai Vanam — Environment", to: "/programs/tree-plantation" },
                { label: "Sunai Life — Blood Bank", to: "/programs/blood-bank" },
                { label: "Sunai Health — Healthcare", to: "/programs/health" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white mb-3 sm:mb-4">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:info@sunaitrust.org"
                className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>info@sunaitrust.org</span>
              </a>
              <a
                href="tel:+917010757275"
                className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>+91 70107 57275</span>
              </a>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[10px] sm:text-xs text-white/50">
            © {new Date().getFullYear()} SUNAI Trust. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-white/50">
            CSR Reg No: CSR00104523 | PAN: ABHTS4028A
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import logo from "@/assets/icon.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="container mx-auto px-4">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img
                src={logo}
                alt="Sunai Logo"
                className="w-14 h-14 rounded-lg object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Sunai</h3>
                <p className="text-white/70 text-sm">Support Uplift Nourish Aid Illuminate</p>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed mb-6 text-sm">
              Where young dreams are guided,
              where nature is restored,
              and where lives are protected —
              SUNAI grows as a movement of care and courage.
              A small step today. A stronger tomorrow.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/programs/education"
                  className="text-white/70 hover:text-emerald-400 transition-colors text-sm"
                >
                  Uplift – Mentorship
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/tree-plantation"
                  className="text-white/70 hover:text-emerald-400 transition-colors text-sm"
                >
                  Vanam – Environment
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/blood-bank"
                  className="text-white/70 hover:text-emerald-400 transition-colors text-sm"
                >
                  Life – Blood Bank
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/health"
                  className="text-white/70 hover:text-emerald-400 transition-colors text-sm"
                >
                  Health – Healthcare
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about-us" className="text-white/70 hover:text-emerald-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-white/70 hover:text-emerald-400 transition-colors text-sm">
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-white/70 hover:text-emerald-400 transition-colors text-sm">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-emerald-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/70 text-sm">sunai2k23@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/70 text-sm">+91 96669 84000</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/70 text-sm">
                  46, Ramar Kovil Street, Ram Nagar,
                  <br />
                  Coimbatore – 641009, Tamil Nadu,
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm text-center">
              © 2025 Sunai – Support Uplift Nourish Aid Illuminate. All rights reserved.
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

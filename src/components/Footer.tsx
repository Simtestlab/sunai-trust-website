import logo from "@/assets/icon.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={logo}
                alt="Sunai Logo"
                className="w-16 h-16 rounded-lg object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Sunai</h3>
                <p className="text-white/80 text-sm">Support Uplift Nourish Aid Illuminate</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Listening to needs, building futures. We empower communities
              through education, healthcare, and sustainable development
              programs that create lasting change.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Future Programs</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/programs/education"
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  Mentorship Programme
                </a>
              </li>
              <li>
                <a
                  href="/programs/health"
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  Diagnostic & Healthcare Centres
                </a>
              </li>
              {/* <li>
                <a
                  href="/programs/empowerment"
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  Empowerment
                </a>
              </li> */}
              <li>
                <a
                  href="/programs/tree-plantation"
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  Environmental Balance
                </a>
              </li>
              {/* <li>
                <a
                  href="/programs/rural-development"
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  Rural Development
                </a>
              </li> */}
              {/* <li>
                <a
                  href="/programs/charity"
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  Charity
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">support@sunai.org</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-white/80">+91 96669 84000</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-white/80">
                  Gandhipuram,
                  <br />
                  Coimbatore, Tamilnadu,
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 border-t border-white/20">
          <div className="flex justify-center items-center">
            <div className="text-white/80 text-sm text-center">
              © 2025 Sunai NGO. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

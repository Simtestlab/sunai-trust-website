import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
  <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo & Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sunai</h3>
                <p className="text-white/80 text-sm">Building Futures</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Listening to needs, building futures. We empower communities through education, 
              healthcare, and sustainable development programs that create lasting change.
            </p>
           {/* <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-smooth">
                <Youtube className="w-5 h-5" />
              </a>
            </div>*/}
          </div>

          {/* Quick Links */}


          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Future Programs</h4>
            <ul className="space-y-3">
              <li><a href="#education" className="text-white/80 hover:text-white transition-smooth">Education Initiative</a></li>
              <li><a href="#health" className="text-white/80 hover:text-white transition-smooth">Healthcare Access</a></li>
              <li><a href="#empowerment" className="text-white/80 hover:text-white transition-smooth">Community Empowerment</a></li>
              <li><a href="#scholarship" className="text-white/80 hover:text-white transition-smooth">Scholarship Program</a></li>
              <li><a href="#skills" className="text-white/80 hover:text-white transition-smooth">Skills Development</a></li>
              <li><a href="#women" className="text-white/80 hover:text-white transition-smooth">Women's Empowerment</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
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
                <p className="text-white/80">+91 98765 43210</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-white/80">
                  Gandhipuram<br />
                  Coimbatore Tamilnadu<br />
                  India
                </p>
              </div>
            </div>

            {/* Newsletter removed per request */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm text-center md:text-left">
              © 2025 Sunai NGO. All rights reserved. | 
              <a href="#privacy" className="hover:text-white transition-smooth ml-1">Privacy Policy</a> | 
              <a href="#terms" className="hover:text-white transition-smooth ml-1">Terms of Service</a> | 
              <a href="#refund" className="hover:text-white transition-smooth ml-1">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
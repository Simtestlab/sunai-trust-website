import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, X, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/icon.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const programsRef = useRef<HTMLDivElement>(null);
  const registerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (programsRef.current && !programsRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
      if (registerRef.current && !registerRef.current.contains(e.target as Node)) {
        setRegisterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm lg:text-base font-medium ${isActive ? "text-teal-600" : "text-foreground hover:text-teal-600"
    } transition-colors`;

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center">
              <img
                src={logo}
                alt="Sunai Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg object-contain"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-none">
                Sunai
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block leading-tight mt-0.5 truncate">
                Support Uplift Nourish Aid Illuminate
              </p>
            </div>
          </NavLink>

          {/* Navigation - desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavLink to="/" className={linkClass}>
              <span className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors block">Home</span>
            </NavLink>

            <NavLink to="/about-us" className={linkClass}>
              <span className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors block">About Us</span>
            </NavLink>

            {/* Programs dropdown */}
            <div className="relative" ref={programsRef}>
              <button
                onClick={() => setProgramsOpen((s) => !s)}
                className="text-sm lg:text-base font-medium text-foreground hover:text-teal-600 transition-colors flex items-center px-3 py-2 rounded-lg hover:bg-slate-50"
                aria-expanded={programsOpen}
              >
                Programs
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`} />
              </button>
              {programsOpen && (
                <div className="absolute left-0 mt-1 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl z-40 animate-fade-up">
                  <NavLink
                    to="/programs/education"
                    className="block p-3 rounded-lg hover:bg-teal-50 transition-colors"
                    onClick={() => setProgramsOpen(false)}
                  >
                    <span className="font-medium text-slate-800 text-sm">Sunai Uplift — Mentorship</span>
                    <span className="text-xs text-muted-foreground block mt-0.5">Quality learning opportunities</span>
                  </NavLink>
                  <NavLink
                    to="/programs/tree-plantation"
                    className="block p-3 rounded-lg hover:bg-teal-50 transition-colors"
                    onClick={() => setProgramsOpen(false)}
                  >
                    <span className="font-medium text-slate-800 text-sm">Sunai Vanam — Environment</span>
                    <span className="text-xs text-muted-foreground block mt-0.5">Environmental restoration</span>
                  </NavLink>
                  <NavLink
                    to="/programs/blood-bank"
                    className="block p-3 rounded-lg hover:bg-teal-50 transition-colors"
                    onClick={() => setProgramsOpen(false)}
                  >
                    <span className="font-medium text-slate-800 text-sm">Sunai Life — Blood Bank</span>
                    <span className="text-xs text-muted-foreground block mt-0.5">Life-saving donation network</span>
                  </NavLink>
                  <NavLink
                    to="/programs/health"
                    className="block p-3 rounded-lg hover:bg-teal-50 transition-colors"
                    onClick={() => setProgramsOpen(false)}
                  >
                    <span className="font-medium text-slate-800 text-sm">Sunai Health — Healthcare</span>
                    <span className="text-xs text-muted-foreground block mt-0.5">Accessible healthcare</span>
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/join-us" className={linkClass}>
              <span className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors block">Join Us</span>
            </NavLink>

            <NavLink to="/blogs" className={linkClass}>
              <span className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors block">Blogs</span>
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              <span className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors block">Contact</span>
            </NavLink>

            {/* Register CTA */}
            <NavLink
              to="/register"
              className="ml-2 inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-teal-600 to-green-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
            >
              Register
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden text-foreground p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {open ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {open && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />
            {/* Panel */}
            <div className="fixed inset-x-0 top-16 sm:top-[72px] bottom-0 bg-white z-50 lg:hidden overflow-y-auto">
              <nav className="flex flex-col p-4 sm:p-6 space-y-1">
                <NavLink
                  to="/"
                  onClick={() => setOpen(false)}
                  className="font-medium text-foreground px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-base"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about-us"
                  onClick={() => setOpen(false)}
                  className="font-medium text-foreground px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-base"
                >
                  About Us
                </NavLink>

                {/* Programs accordion */}
                <div>
                  <button
                    onClick={() => setProgramsOpen((s) => !s)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors"
                    aria-expanded={programsOpen}
                  >
                    <span className="font-medium text-foreground text-base">Programs</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${programsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {programsOpen && (
                    <div className="ml-4 pl-4 border-l-2 border-teal-200 space-y-1 mt-1 mb-2">
                      <NavLink
                        to="/programs/education"
                        onClick={() => { setOpen(false); setProgramsOpen(false); }}
                        className="block px-4 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                      >
                        Sunai Uplift — Mentorship
                      </NavLink>
                      <NavLink
                        to="/programs/tree-plantation"
                        onClick={() => { setOpen(false); setProgramsOpen(false); }}
                        className="block px-4 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                      >
                        Sunai Vanam — Environment
                      </NavLink>
                      <NavLink
                        to="/programs/blood-bank"
                        onClick={() => { setOpen(false); setProgramsOpen(false); }}
                        className="block px-4 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                      >
                        Sunai Life — Blood Bank
                      </NavLink>
                      <NavLink
                        to="/programs/health"
                        onClick={() => { setOpen(false); setProgramsOpen(false); }}
                        className="block px-4 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                      >
                        Sunai Health — Healthcare
                      </NavLink>
                    </div>
                  )}
                </div>

                <NavLink
                  to="/join-us"
                  onClick={() => setOpen(false)}
                  className="font-medium text-foreground px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-base"
                >
                  Join Us
                </NavLink>

                <NavLink
                  to="/blogs"
                  onClick={() => setOpen(false)}
                  className="font-medium text-foreground px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-base"
                >
                  Blogs
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="font-medium text-foreground px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-base"
                >
                  Contact
                </NavLink>

                {/* Register CTA in mobile */}
                <div className="pt-4 mt-2 border-t border-slate-200">
                  <NavLink
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-teal-600 to-green-600 text-white font-bold px-6 py-3.5 rounded-full text-base shadow-md"
                  >
                    Register Now
                  </NavLink>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

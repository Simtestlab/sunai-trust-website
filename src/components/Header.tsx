import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/icon.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const programsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (programsRef.current && !programsRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-base lg:text-lg font-medium ${isActive ? "text-emerald-600" : "text-foreground"} hover:text-emerald-600 transition-colors`;

  return (
    <header className="bg-background/100 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-smooth">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center">
              <img
                src={logo}
                alt="Sunai Logo"
                className="w-16 h-16 rounded-lg object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                Sunai
              </h1>
              <p className="text-sm lg:text-base text-muted-foreground hidden sm:block">
                Support Uplift Nourish Aid Illuminate
              </p>
            </div>
          </NavLink>

          {/* Navigation — desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about-us" className={navLinkClass}>About Us</NavLink>

            {/* Programs dropdown */}
            <div className="relative" ref={programsRef}>
              <button
                onClick={() => setProgramsOpen((s) => !s)}
                className="text-base lg:text-lg font-medium text-foreground hover:text-emerald-600 transition-colors flex items-center"
                aria-expanded={programsOpen}
              >
                Programs
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
              </button>
              {programsOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-xl border bg-white p-2 shadow-lg z-40 hidden md:block">
                  <NavLink to="/programs/education" className="block p-3 rounded-lg hover:bg-emerald-50 transition-colors" onClick={() => setProgramsOpen(false)}>
                    <span className="font-medium text-foreground">Uplift</span>
                    <span className="block text-sm text-muted-foreground">Mentorship Programme</span>
                  </NavLink>
                  <NavLink to="/programs/tree-plantation" className="block p-3 rounded-lg hover:bg-emerald-50 transition-colors" onClick={() => setProgramsOpen(false)}>
                    <span className="font-medium text-foreground">Vanam</span>
                    <span className="block text-sm text-muted-foreground">Environmental Balance</span>
                  </NavLink>
                  <NavLink to="/programs/blood-bank" className="block p-3 rounded-lg hover:bg-emerald-50 transition-colors" onClick={() => setProgramsOpen(false)}>
                    <span className="font-medium text-foreground">Life</span>
                    <span className="block text-sm text-muted-foreground">Blood Bank Initiative</span>
                  </NavLink>
                  <NavLink to="/programs/health" className="block p-3 rounded-lg hover:bg-emerald-50 transition-colors" onClick={() => setProgramsOpen(false)}>
                    <span className="font-medium text-foreground">Health</span>
                    <span className="block text-sm text-muted-foreground">Diagnostic & Healthcare</span>
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink>

            {/* Single "Register" link — no dropdown */}
            <NavLink to="/register" className={navLinkClass}>Register</NavLink>

            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="text-foreground p-2 rounded-md focus:outline-none"
            >
              {open ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="fixed inset-x-4 top-20 bg-white rounded-2xl shadow-2xl p-6 z-50 md:hidden border border-border">
              <nav className="flex flex-col space-y-3">
                <NavLink to="/" onClick={() => setOpen(false)} className="font-medium text-foreground py-2 hover:text-emerald-600 transition-colors">Home</NavLink>
                <NavLink to="/about-us" onClick={() => setOpen(false)} className="font-medium text-foreground py-2 hover:text-emerald-600 transition-colors">About Us</NavLink>

                <div>
                  <button
                    onClick={() => setProgramsOpen((s) => !s)}
                    className="flex items-center justify-between w-full py-2"
                    aria-expanded={programsOpen}
                  >
                    <span className="font-medium text-foreground">Programs</span>
                    <ChevronDown className={`w-4 h-4 text-emerald-600 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {programsOpen && (
                    <div className="grid grid-cols-1 gap-1 pl-3 mt-1">
                      <NavLink to="/programs/education" onClick={() => { setOpen(false); setProgramsOpen(false); }} className="text-sm text-muted-foreground py-2 hover:text-emerald-600">Uplift – Mentorship</NavLink>
                      <NavLink to="/programs/tree-plantation" onClick={() => { setOpen(false); setProgramsOpen(false); }} className="text-sm text-muted-foreground py-2 hover:text-emerald-600">Vanam – Environment</NavLink>
                      <NavLink to="/programs/blood-bank" onClick={() => { setOpen(false); setProgramsOpen(false); }} className="text-sm text-muted-foreground py-2 hover:text-emerald-600">Life – Blood Bank</NavLink>
                      <NavLink to="/programs/health" onClick={() => { setOpen(false); setProgramsOpen(false); }} className="text-sm text-muted-foreground py-2 hover:text-emerald-600">Health – Healthcare</NavLink>
                    </div>
                  )}
                </div>

                <NavLink to="/blogs" onClick={() => setOpen(false)} className="font-medium text-foreground py-2 hover:text-emerald-600 transition-colors">Blogs</NavLink>
                <NavLink to="/contact" onClick={() => setOpen(false)} className="font-medium text-foreground py-2 hover:text-emerald-600 transition-colors">Contact</NavLink>

                <div className="pt-3 border-t border-border">
                  <NavLink
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center py-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold hover:from-emerald-700 hover:to-green-700 transition-all"
                  >
                    Register
                  </NavLink>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

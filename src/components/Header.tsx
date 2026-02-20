import React, { useState } from "react";
// Inline submenu used instead of popup dropdown
// (removed Radix popup; rendering inline submenu panels)
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/icon.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <header className="bg-background/100 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-smooth">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo (clickable) */}
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

          {/* Navigation - desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base lg:text-lg font-medium ${isActive ? "text-emerald-600" : "text-foreground"} transition-colors`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `text-base lg:text-lg font-medium ${isActive ? "text-emerald-600" : "text-foreground"} transition-colors`
              }
            >
              About Us
            </NavLink>

            {/* Programs - inline submenu (desktop) */}
            <div className="relative">
              <button
                onClick={() => setProgramsOpen((s) => !s)}
                className="text-base lg:text-lg font-medium text-foreground transition-colors flex items-center"
                aria-expanded={programsOpen}
              >
                Programs
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {programsOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md border bg-white p-2 shadow-md z-40 hidden md:block">
                  <NavLink to="/programs/education" className="block p-2 rounded hover:bg-slate-50" onClick={() => setProgramsOpen(false)}>
                    <div className="flex flex-col">
                      <span className="font-medium">Mentorship Programme</span>
                      <span className="text-sm text-muted-foreground">Quality learning opportunities</span>
                    </div>
                  </NavLink>
                  <NavLink to="/programs/health" className="block p-2 rounded hover:bg-slate-50" onClick={() => setProgramsOpen(false)}>
                    <div className="flex flex-col">
                      <span className="font-medium">Health</span>
                      <span className="text-sm text-muted-foreground">Essential healthcare services</span>
                    </div>
                  </NavLink>
                  <NavLink to="/programs/empowerment" className="block p-2 rounded hover:bg-slate-50" onClick={() => setProgramsOpen(false)}>
                    <div className="flex flex-col">
                      <span className="font-medium">Empowerment</span>
                      <span className="text-sm text-muted-foreground">Sustainable livelihoods</span>
                    </div>
                  </NavLink>
                  <NavLink to="/programs/tree-plantation" className="block p-2 rounded hover:bg-slate-50" onClick={() => setProgramsOpen(false)}>
                    <div className="flex flex-col">
                      <span className="font-medium">Tree Plantation</span>
                      <span className="text-sm text-muted-foreground">Environmental restoration</span>
                    </div>
                  </NavLink>
                  <NavLink to="/programs/rural-development" className="block p-2 rounded hover:bg-slate-50" onClick={() => setProgramsOpen(false)}>
                    <div className="flex flex-col">
                      <span className="font-medium">Rural Development</span>
                      <span className="text-sm text-muted-foreground">Infrastructure & agriculture</span>
                    </div>
                  </NavLink>
                  <NavLink to="/programs/charity" className="block p-2 rounded hover:bg-slate-50" onClick={() => setProgramsOpen(false)}>
                    <div className="flex flex-col">
                      <span className="font-medium">Charity</span>
                      <span className="text-sm text-muted-foreground">Direct aid & relief</span>
                    </div>
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `text-base lg:text-lg font-medium ${isActive ? "text-emerald-600" : "text-foreground"} transition-colors`
              }
            >
              Blogs
            </NavLink>
            {/* Register - inline submenu (desktop) */}
            <div className="relative">
              <button
                onClick={() => setRegisterOpen((s) => !s)}
                className="text-base lg:text-lg font-medium text-foreground transition-colors flex items-center"
                aria-expanded={registerOpen}
              >
                Register
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {registerOpen && (
                <div className="absolute left-0 mt-2 w-40 rounded-md border bg-white p-2 space-y-2 shadow-md z-40 hidden md:block">
                  <NavLink to="/volunteer" className="block p-2 rounded hover:bg-slate-50" onClick={() => setRegisterOpen(false)}>Volunteer</NavLink>
                  <NavLink to="/register/ngo" className="block p-2 rounded hover:bg-slate-50" onClick={() => setRegisterOpen(false)}>NGO</NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-base lg:text-lg font-medium ${isActive ? "text-emerald-600" : "text-foreground"} transition-colors`
              }
            >
              Contact Us
            </NavLink>
          </nav>
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="text-foreground p-2 rounded-md focus:outline-none"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          {open && (
            <div className="fixed inset-x-4 top-20 bg-white rounded-lg shadow-lg p-4 z-50 md:hidden">
              <nav className="flex flex-col space-y-3">
                <NavLink to="/" onClick={() => setOpen(false)} className="font-medium text-foreground">Home</NavLink>
                <NavLink to="/about-us" onClick={() => setOpen(false)} className="font-medium text-foreground">About Us</NavLink>

                <div>
                  <button
                    onClick={() => setProgramsOpen((s) => !s)}
                    className="flex items-center justify-between w-full"
                    aria-expanded={programsOpen}
                  >
                    <span className="font-medium text-foreground text-left">Programs</span>
                    <svg
                      className={`w-4 h-4 text-slate-600 transform ${programsOpen ? "rotate-90" : "rotate-0"}`}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 5L14 10L6 15V5Z" fill="currentColor" />
                    </svg>
                  </button>
                  {programsOpen && (
                    <div className="grid grid-cols-1 gap-2 pl-2 mt-2">
                      <NavLink to="/programs/education" onClick={() => { setOpen(false); setProgramsOpen(false); }} className="text-sm text-slate-700">Mentorship Programme</NavLink>
                      <NavLink to="/programs/health" onClick={() => { setOpen(false); setProgramsOpen(false); }} className="text-sm text-slate-700">Health</NavLink>
                      <NavLink to="/programs/empowerment" onClick={() => { setOpen(false); setProgramsOpen(false); }} className="text-sm text-slate-700">Empowerment</NavLink>
                      <NavLink to="/programs/tree-plantation" onClick={() => { setOpen(false); setProgramsOpen(false); }} className="text-sm text-slate-700">Tree Plantation</NavLink>
                      <NavLink to="/programs/rural-development" onClick={() => { setOpen(false); setProgramsOpen(false); }} className="text-sm text-slate-700">Rural Development</NavLink>
                      <NavLink to="/programs/charity" onClick={() => { setOpen(false); setProgramsOpen(false); }} className="text-sm text-slate-700">Charity</NavLink>
                    </div>
                  )}
                </div>

                <NavLink to="/blogs" onClick={() => setOpen(false)} className="font-medium text-foreground">Blogs</NavLink>

                <div>
                  <button
                    onClick={() => setRegisterOpen((s) => !s)}
                    className="flex items-center justify-between w-full"
                    aria-expanded={registerOpen}
                  >
                    <span className="font-medium text-foreground text-left">Register</span>
                    <svg
                      className={`w-4 h-4 text-slate-600 transform ${registerOpen ? "rotate-90" : "rotate-0"}`}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 5L14 10L6 15V5Z" fill="currentColor" />
                    </svg>
                  </button>
                  {registerOpen && (
                    <div className="flex flex-col pl-2 mt-2 space-y-2">
                      <NavLink to="/volunteer" onClick={() => { setOpen(false); setRegisterOpen(false); }} className="text-sm text-slate-700">Volunteer</NavLink>
                      <NavLink to="/register/ngo" onClick={() => { setOpen(false); setRegisterOpen(false); }} className="text-sm text-slate-700">NGO</NavLink>
                    </div>
                  )}
                </div>

                <NavLink to="/contact" onClick={() => setOpen(false)} className="font-medium text-foreground">Contact Us</NavLink>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

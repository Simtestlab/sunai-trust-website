import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const ProgramsDropdownTrigger = () => {
  const { pathname } = useLocation();
  const active = pathname.startsWith('/programs');
  return (
    <DropdownMenuTrigger className={`text-base lg:text-lg font-medium ${active ? 'text-emerald-600' : 'text-foreground'} transition-colors flex items-center`}>
      Programs
      <ChevronDown className="ml-1 h-4 w-4" />
    </DropdownMenuTrigger>
  );
};

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-smooth">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-impact-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl lg:text-3xl">S</span>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Sunai</h1>
              <p className="text-sm lg:text-base text-muted-foreground hidden sm:block">Building Futures</p>
            </div>
          </div>

          {/* Navigation - desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => `text-base lg:text-lg font-medium ${isActive ? 'text-emerald-600' : 'text-foreground'} transition-colors`}>
              Home
            </NavLink>
            <NavLink to="/blogs" className={({ isActive }) => `text-base lg:text-lg font-medium ${isActive ? 'text-emerald-600' : 'text-foreground'} transition-colors`}>
              Blogs
            </NavLink>
            <NavLink to="/team" className={({ isActive }) => `text-base lg:text-lg font-medium ${isActive ? 'text-emerald-600' : 'text-foreground'} transition-colors`}>
              Team
            </NavLink>
            
            {/* Programs Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-base lg:text-lg font-medium text-foreground transition-colors flex items-center">
                Programs
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <NavLink to="/programs/education" className="w-full">
                    <div className="flex flex-col">
                      <span className="font-medium">Education</span>
                      <span className="text-sm text-muted-foreground">Quality learning opportunities</span>
                    </div>
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/programs/health" className="w-full">
                    <div className="flex flex-col">
                      <span className="font-medium">Health</span>
                      <span className="text-sm text-muted-foreground">Essential healthcare services</span>
                    </div>
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/programs/empowerment" className="w-full">
                    <div className="flex flex-col">
                      <span className="font-medium">Empowerment</span>
                      <span className="text-sm text-muted-foreground">Sustainable livelihoods</span>
                    </div>
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/programs/tree-plantation" className="w-full">
                    <div className="flex flex-col">
                      <span className="font-medium">Tree Plantation</span>
                      <span className="text-sm text-muted-foreground">Environmental restoration</span>
                    </div>
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/programs/rural-development" className="w-full">
                    <div className="flex flex-col">
                      <span className="font-medium">Rural Development</span>
                      <span className="text-sm text-muted-foreground">Infrastructure & agriculture</span>
                    </div>
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/programs/charity" className="w-full">
                    <div className="flex flex-col">
                      <span className="font-medium">Charity</span>
                      <span className="text-sm text-muted-foreground">Direct aid & relief</span>
                    </div>
                  </NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <NavLink to="/projects" className={({ isActive }) => `text-base lg:text-lg font-medium ${isActive ? 'text-emerald-600' : 'text-foreground'} transition-colors`}>
              Projects
            </NavLink>
            {/* Commented out per request: Achievements & Volunteer
            <NavLink to="/achievements" className={({ isActive }) => `text-base lg:text-lg font-medium ${isActive ? 'text-emerald-600 underline' : 'text-foreground hover:underline'} transition-colors`}>
              Achievements
            </NavLink>
            <NavLink to="/volunteer" className={({ isActive }) => `text-base lg:text-lg font-medium ${isActive ? 'text-emerald-600 underline' : 'text-foreground hover:underline'} transition-colors`}>
              Volunteer
            </NavLink>
            */}
            <NavLink to="/contact" className={({ isActive }) => `text-base lg:text-lg font-medium ${isActive ? 'text-emerald-600' : 'text-foreground'} transition-colors`}>
              Contact Us
            </NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Desktop Donate CTA removed per request
            <Button variant="hero" size="lg" className="text-base lg:text-lg px-6 py-3">
              Donate Now
            </Button>
            */}
          </div>

          {/* Mobile menu placeholder */}
          <div className="md:hidden">
            <NavLink to="/" className="text-base font-medium">Menu</NavLink>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="text-base lg:text-lg font-medium text-foreground hover:underline transition-colors">Home</Link>
            <Link to="/blogs" className="text-base lg:text-lg font-medium text-foreground hover:underline transition-colors">Blogs</Link>
            <Link to="/team" className="text-base lg:text-lg font-medium text-foreground hover:underline transition-colors">Team</Link>
            
            {/* Programs Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-base lg:text-lg font-medium text-foreground hover:underline transition-colors flex items-center">
                Programs
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/programs/education" className="w-full">
                    <div className="flex flex-col">
                      <span className="font-medium">Education</span>
                      <span className="text-sm text-muted-foreground">Quality learning opportunities</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/programs/health" className="w-full">
                    <div className="flex flex-col">
                      <span className="font-medium">Health</span>
                      <span className="text-sm text-muted-foreground">Essential healthcare services</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/programs/empowerment" className="w-full">
                    <div className="flex flex-col">
                      <span className="font-medium">Empowerment</span>
                      <span className="text-sm text-muted-foreground">Sustainable livelihoods</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/programs/tree-plantation" className="w-full">
                    <div className="flex flex-col">
                      <span className="font-medium">Tree Plantation</span>
                      <span className="text-sm text-muted-foreground">Environmental restoration</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/programs/rural-development" className="w-full">
                    <div className="flex flex-col">
                      <span className="font-medium">Rural Development</span>
                      <span className="text-sm text-muted-foreground">Infrastructure & agriculture</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/programs/charity" className="w-full">
                    <div className="flex flex-col">
                      <span className="font-medium">Charity</span>
                      <span className="text-sm text-muted-foreground">Direct aid & relief</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/projects" className="text-base lg:text-lg font-medium text-foreground hover:underline transition-colors">Projects</Link>
            <Link to="/achievements" className="text-base lg:text-lg font-medium text-foreground hover:underline transition-colors">Achievements</Link>
            <Link to="/volunteer" className="text-base lg:text-lg font-medium text-foreground hover:underline transition-colors">Volunteer</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="hero" size="lg" className="text-base lg:text-lg px-6 py-3">
              Donate Now
            </Button>
          </div>

          {/* Mobile menu placeholder */}
          <div className="md:hidden">
            <Link to="/" className="text-base font-medium">Menu</Link>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
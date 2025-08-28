import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-smooth">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-impact-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Sunai</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Building Futures</p>
            </div>
          </div>

          {/* Navigation - desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:underline">Home</Link>
            <Link to="/blogs" className="text-sm font-medium text-foreground hover:underline">Blogs</Link>
            <Link to="/team" className="text-sm font-medium text-foreground hover:underline">Team</Link>
            <Link to="/projects" className="text-sm font-medium text-foreground hover:underline">Projects</Link>
            <Link to="/achievements" className="text-sm font-medium text-foreground hover:underline">Achievements</Link>
            <Link to="/volunteer" className="text-sm font-medium text-foreground hover:underline">Volunteer</Link>
            <Link to="/contact" className="text-sm font-medium text-foreground hover:underline">Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="hero" size="lg">
              Donate Now
            </Button>
          </div>

          {/* Mobile menu placeholder */}
          <div className="md:hidden">
            <Link to="/" className="text-sm font-medium">Menu</Link>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
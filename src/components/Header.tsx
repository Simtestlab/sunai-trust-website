import { Button } from '@/components/ui/button';
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
import { Button } from '@/components/ui/button';

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

          {/* Navigation removed - keeping logo and CTA */}

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="hero" size="lg">
              Donate Now
            </Button>
          </div>

          {/* Mobile menu removed */}
        </div>

  {/* Mobile navigation removed */}
      </div>
    </header>
  );
};

export default Header;
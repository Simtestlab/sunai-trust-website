import { Button } from '@/components/ui/button';
import { Heart, Users, Calendar } from 'lucide-react';

const CTABar = () => {
  return (
    <section className="py-16 bg-impact-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join our community of changemakers and help us build a better future for all.
          </p>
        </div>

  <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {/* Donate CTA */}
          <div className="text-center group hover-lift">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-smooth">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Donate</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your donation directly funds education, healthcare, and empowerment programs that create lasting change.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-black hover:bg-white/20 backdrop-blur-sm w-full"
            >
              Donate Now
            </Button>
          </div>

          {/* Volunteer CTA */}
          <div className="text-center group hover-lift">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-smooth">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Volunteer</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Share your skills and time to directly impact communities. From teaching to healthcare, we need you.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-black hover:bg-white/20 backdrop-blur-sm w-full"
            >
              Join Us
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/80 text-lg mb-4">
            Have questions? We're here to help.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-black hover:bg-white/20 backdrop-blur-sm"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABar;
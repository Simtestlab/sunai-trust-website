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

          {/* CTAs removed per request */}
      </div>
    </section>
  );
};

export default CTABar;
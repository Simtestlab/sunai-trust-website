import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import iconImg from '@/assets/programs-icons.jpg';

const stats = [
  {
  image: iconImg,
  // when `name` is present we'll render the name instead of the animated number
  name: 'person',
  suffix: '',
  role: 'Program Director',
  label: 'Lives Transformed',
  description: 'Leads program strategy, partnerships, and overall implementation across regions.'
  },
  {
  image: iconImg,
  name: 'person',
  suffix: '',
  role: 'Field Coordinator',
  label: 'Communities Reached', 
  description: 'Coordinates community engagement and field operations to ensure program reach.'
  },
  {
  image: iconImg,
  name: 'person',
  suffix: '',
  role: 'Monitoring & Evaluation Lead',
  label: 'Success Rate',
  description: 'Oversees monitoring, evaluation and reporting to measure program impact.'
  },
  {
  image: iconImg,
  name: 'person',
  suffix: '',
  role: 'Senior Advisor',
  label: 'Years of Excellence',
  description: 'Provides strategic guidance and builds relationships with stakeholders.'
  }
];

const CounterNumber = ({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const increment = target / 100;
    const timer = setInterval(() => {
      setCurrent(prev => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(timer);
          return target;
        }
        return next;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-accent animate-counter">
      {Math.floor(current).toLocaleString()}{suffix}
    </span>
  );
};

const ImpactHighlights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Team – The Hearts Behind Our Mission
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
"Change is not built alone, it’s built together.
Our team blends vision, skill, and compassion to serve communities.
‘We turn purpose into action, and action into impact.’"
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="bg-white/10 border-white/20 backdrop-blur-sm hover-lift scroll-reveal">
              <CardContent className="p-8 text-center text-white">
                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                  <img src={stat.image} alt={stat.label} className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain" />
                </div>
                
                <div className="mb-2">
                  {stat.name ? (
                    <span className="text-2xl md:text-3xl font-bold text-accent">{stat.name}</span>
                  ) : (
                    typeof (stat as any).number === 'number' ? (
                      <CounterNumber 
                        target={(stat as any).number} 
                        suffix={stat.suffix} 
                        isVisible={isVisible} 
                      />
                    ) : null
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{stat.role ?? stat.label}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center scroll-reveal">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Growing Impact Every Day</h3>
            <p className="text-white/90 text-lg mb-6">
              Our work continues to expand, reaching new communities and creating sustainable change that lasts for generations.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                {/*<div className="text-2xl font-bold text-accent">+23%</div>*/}
                <div className="text-white/80 text-sm">Growth This Year</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                {/*<div className="text-2xl font-bold text-accent">New</div>*/} 
                <div className="text-white/80 text-sm">Programs Launching</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                {/*<div className="text-2xl font-bold text-accent">24/7</div>*/}
                <div className="text-white/80 text-sm">Community Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactHighlights;
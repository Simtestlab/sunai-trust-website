import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, Users, Trees, MapPin, Gift } from 'lucide-react';

const programs = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Providing quality education and learning opportunities to underserved communities, ensuring every child has access to knowledge and skills for a brighter future.',
  },
  {
    icon: Heart,
    title: 'Health',
    description: 'Delivering essential healthcare services, medical training, and health awareness programs to improve the well-being of entire communities.',
  },
  {
    icon: Users,
    title: 'Empowerment',
    description: 'Building sustainable livelihoods through skill development, microfinance, and community-led initiatives that foster long-term independence.',
  }
  ,
  {
    icon: Trees,
    title: 'Tree Plantation',
    description: 'Organizing community-led tree plantation drives to restore local ecosystems, improve air quality, and create green spaces for future generations.',
  },
  {
    icon: MapPin,
    title: 'Rural Development Programs',
    description: 'Supporting rural communities with infrastructure, training, and resources to boost agriculture, market access, and overall resilience.',
  },
  {
    icon: Gift,
    title: 'Charity',
    description: 'Providing direct aid and relief to families in need, including food distribution, emergency support, and targeted charitable initiatives.',
  }
];

const MissionOverview = () => {
  return (
    <section className="py-20 bg-soft-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Mission in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe in sustainable change through education, health, and empowerment. 
            Our integrated approach ensures communities thrive long after our programs conclude.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={program.title} className="hover-lift scroll-reveal border-0 shadow-card bg-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <program.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{program.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
              </CardContent>
            </Card>
          ))}
          {/* Removed Events box as requested */}
        </div>

        <div className="text-center scroll-reveal">
          
            
          </div>
        </div>
      
    </section>
  );
};

export default MissionOverview;
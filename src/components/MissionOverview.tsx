import { Card, CardContent } from '@/components/ui/card';
import educationImg from '@/assets/education.jpg';
import healthImg from '@/assets/health.jpg';
import empowermentImg from '@/assets/empowerment.jpg';
import treeImg from '@/assets/tree.jpg';
import ruralImg from '@/assets/rural.jpg';
import charityImg from '@/assets/charity.jpg';

const programs = [
  {
    image: educationImg,
    title: 'Education',
    description: 'Providing quality education and learning opportunities to underserved communities, ensuring every child has access to knowledge and skills for a brighter future.',
  },
  {
    image: healthImg,
    title: 'Health',
    description: 'Delivering essential healthcare services, medical training, and health awareness programs to improve the well-being of entire communities.',
  },
  {
    image: empowermentImg,
    title: 'Empowerment',
    description: 'Building sustainable livelihoods through skill development, microfinance, and community-led initiatives that foster long-term independence.',
  },
  {
    image: treeImg,
    title: 'Tree Plantation',
    description: 'Organizing community-led tree plantation drives to restore local ecosystems, improve air quality, and create green spaces for future generations.',
  },
  {
    image: ruralImg,
    title: 'Rural Development Programs',
    description: 'Supporting rural communities with infrastructure, training, and resources to boost agriculture, market access, and overall resilience.',
  },
  {
    image: charityImg,
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
            <Card key={program.title} className="hover-lift scroll-reveal border-0 shadow-card bg-card overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">{program.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </div>
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
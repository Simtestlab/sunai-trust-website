import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    link: '/programs/education'
  },
  {
    image: healthImg,
    title: 'Health',
    description: 'Delivering essential healthcare services, medical training, and health awareness programs to improve the well-being of entire communities.',
    link: '/programs/health'
  },
  {
    image: empowermentImg,
    title: 'Empowerment',
    description: 'Building sustainable livelihoods through skill development, microfinance, and community-led initiatives that foster long-term independence.',
    link: '/programs/empowerment'
  },
  {
    image: treeImg,
    title: 'Tree Plantation',
    description: 'Organizing community-led tree plantation drives to restore local ecosystems, improve air quality, and create green spaces for future generations.',
    link: '/programs/tree-plantation'
  },
  {
    image: ruralImg,
    title: 'Rural Development Programs',
    description: 'Supporting rural communities with infrastructure, training, and resources to boost agriculture, market access, and overall resilience.',
    link: '/programs/rural-development'
  },
  {
    image: charityImg,
    title: 'Charity',
    description: 'Providing direct aid and relief to families in need, including food distribution, emergency support, and targeted charitable initiatives.',
    link: '/programs/charity'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card key={program.title} className="hover-lift scroll-reveal border-0 shadow-card bg-card overflow-hidden group h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <Link to={program.link}>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">{program.title}</h3>
                  </div>
                </Link>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{program.description}</p>
                  <Link to={program.link}>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-700 to-teal-600 rounded-xl p-12 text-white text-center shadow-xl scroll-reveal">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Join us in creating lasting change and transforming communities across India. Whether through volunteering, donations, or strategic partnerships, 
            every contribution helps build stronger, more resilient communities for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/volunteer">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-white/90 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                Volunteer Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-700 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionOverview;
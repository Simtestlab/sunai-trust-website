import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Users, 
  Calendar, 
  Target, 
  Heart,
  Droplets,
  Leaf,
  GraduationCap,
  Stethoscope,
  Home,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import skillTraining from '@/assets/skill trainning.jpeg';
import skillDevelopment from '@/assets/skill development.jpeg';
import treePlantation from '@/assets/tree plantation.jpeg';
import waterImage from '@/assets/water.jpeg';
import mealImage from '@/assets/meal.jpeg';
import reliefImage from '@/assets/relief.jpeg';

type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'active' | 'completed' | 'planned';
  location: string;
  beneficiaries: number;
  startDate: string;
  endDate?: string;
  progress: number;
  budget: string;
  image: string;
  highlights: string[];
  sdgGoals: number[];
  impact: {
    primary: string;
    secondary: string[];
  };
};

const projects: Project[] = [
  {
    id: 'rural-education-enhancement',
    title: 'Rural Education Enhancement Program',
    description: 'Comprehensive education support including infrastructure development, teacher training, and digital learning resources for rural schools.',
    category: 'Education',
    status: 'active',
    location: 'Madhya Pradesh & Rajasthan',
    beneficiaries: 15000,
    startDate: 'January 2024',
    endDate: 'December 2026',
    progress: 65,
    budget: '₹2.5 Crores',
    image: skillDevelopment,
    highlights: [
      'Built 25 new classrooms',
      'Trained 150 teachers',
      'Provided digital tablets to 2,000 students',
      'Established 10 computer labs'
    ],
    sdgGoals: [4, 1, 5],
    impact: {
      primary: '15,000 students gaining better education',
      secondary: [
        'Improved literacy rates by 40%',
        'Reduced dropout rates by 30%',
        'Enhanced digital literacy in rural areas'
      ]
    }
  },
  {
    id: 'sustainable-water-solutions',
    title: 'Sustainable Water Solutions Initiative',
    description: 'Providing clean water access through borewell installation, water purification systems, and community-led water management programs.',
    category: 'Water & Sanitation',
    status: 'active',
    location: 'Gujarat, Rajasthan & Maharashtra',
    beneficiaries: 25000,
    startDate: 'March 2023',
    endDate: 'March 2025',
    progress: 80,
    budget: '₹4.2 Crores',
    image: waterImage,
    highlights: [
      'Installed 45 solar-powered borewells',
      'Set up 30 water purification plants',
      'Trained 200 community water managers',
      'Built rainwater harvesting systems'
    ],
    sdgGoals: [6, 3, 11],
    impact: {
      primary: '25,000 people with clean water access',
      secondary: [
        'Reduced waterborne diseases by 70%',
        'Saved 4 hours daily for women & children',
        'Improved school attendance by 25%'
      ]
    }
  },
  {
    id: 'women-entrepreneurship-program',
    title: 'Women Entrepreneurship & Livelihood Program',
    description: 'Empowering rural women through skill development, microfinance, and market linkage support for sustainable livelihoods.',
    category: 'Women Empowerment',
    status: 'active',
    location: 'Tamil Nadu, Kerala & Karnataka',
    beneficiaries: 8000,
    startDate: 'June 2023',
    endDate: 'June 2025',
    progress: 55,
    budget: '₹1.8 Crores',
    image: skillTraining,
    highlights: [
      'Trained 3,000 women in various skills',
      'Facilitated ₹50 lakhs in microloans',
      'Established 25 Self Help Groups',
      'Created 500 new businesses'
    ],
    sdgGoals: [5, 8, 1],
    impact: {
      primary: '8,000 women economically empowered',
      secondary: [
        'Average income increased by 300%',
        'Financial independence for families',
        'Leadership roles in communities'
      ]
    }
  },
  {
    id: 'healthcare-outreach-program',
    title: 'Rural Healthcare Outreach Program',
    description: 'Mobile health clinics, telemedicine services, and community health worker training to improve healthcare access in remote areas.',
    category: 'Healthcare',
    status: 'active',
    location: 'Odisha, Jharkhand & Chhattisgarh',
    beneficiaries: 30000,
    startDate: 'August 2023',
    endDate: 'August 2026',
    progress: 45,
    budget: '₹3.5 Crores',
    image: reliefImage,
    highlights: [
      'Deployed 15 mobile health units',
      'Trained 100 community health workers',
      'Conducted 5,000 health check-ups',
      'Established telemedicine centers'
    ],
    sdgGoals: [3, 1, 10],
    impact: {
      primary: '30,000 people with better healthcare',
      secondary: [
        'Reduced infant mortality by 40%',
        'Early detection of diseases increased',
        'Improved maternal health outcomes'
      ]
    }
  },
  {
    id: 'climate-resilient-agriculture',
    title: 'Climate Resilient Agriculture Project',
    description: 'Supporting farmers with drought-resistant crops, sustainable farming techniques, and climate adaptation strategies.',
    category: 'Agriculture & Environment',
    status: 'planned',
    location: 'Punjab, Haryana & Uttar Pradesh',
    beneficiaries: 12000,
    startDate: 'October 2025',
    endDate: 'October 2028',
    progress: 15,
    budget: '₹5.0 Crores',
    image: treePlantation,
    highlights: [
      'Research on drought-resistant varieties',
      'Partnership agreements signed',
      'Baseline surveys completed',
      'Training materials developed'
    ],
    sdgGoals: [2, 13, 15],
    impact: {
      primary: '12,000 farmers adopting sustainable practices',
      secondary: [
        'Increased crop yield by 25%',
        'Reduced water usage by 30%',
        'Enhanced soil health and biodiversity'
      ]
    }
  },
  {
    id: 'disaster-resilience-program',
    title: 'Community Disaster Resilience Program',
    description: 'Building disaster-resilient communities through early warning systems, emergency preparedness, and response capacity building.',
    category: 'Disaster Management',
    status: 'completed',
    location: 'West Bengal, Assam & Bihar',
    beneficiaries: 50000,
    startDate: 'January 2022',
    endDate: 'December 2024',
    progress: 100,
    budget: '₹3.8 Crores',
    image: reliefImage,
    highlights: [
      'Trained 500 community volunteers',
      'Installed early warning systems',
      'Built 20 community shelters',
      'Developed emergency response plans'
    ],
    sdgGoals: [11, 13, 1],
    impact: {
      primary: '50,000 people better prepared for disasters',
      secondary: [
        'Reduced disaster-related casualties by 60%',
        'Faster emergency response times',
        'Improved community resilience'
      ]
    }
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-green-100 text-green-800 border-green-200';
    case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'planned': return 'bg-orange-100 text-orange-800 border-orange-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Education': return <GraduationCap className="w-5 h-5" />;
    case 'Water & Sanitation': return <Droplets className="w-5 h-5" />;
    case 'Women Empowerment': return <Heart className="w-5 h-5" />;
    case 'Healthcare': return <Stethoscope className="w-5 h-5" />;
    case 'Agriculture & Environment': return <Leaf className="w-5 h-5" />;
    case 'Disaster Management': return <Home className="w-5 h-5" />;
    default: return <Target className="w-5 h-5" />;
  }
};

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute top-4 left-4">
        <Badge className={`${getStatusColor(project.status)} border`}>
          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
        </Badge>
      </div>
      <div className="absolute top-4 right-4">
        <div className="bg-white/90 rounded-full p-2">
          {getCategoryIcon(project.category)}
        </div>
      </div>
    </div>
    
    <CardHeader>
      <div className="flex items-start justify-between mb-2">
        <Badge variant="outline" className="text-xs">
          {project.category}
        </Badge>
        <span className="text-sm font-semibold text-teal-600">{project.budget}</span>
      </div>
      <CardTitle className="text-lg group-hover:text-teal-600 transition-colors duration-300">
        {project.title}
      </CardTitle>
    </CardHeader>
    
    <CardContent>
      <p className="text-sm text-slate-600 mb-4 line-clamp-3">
        {project.description}
      </p>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-slate-600">
          <MapPin className="w-4 h-4 mr-2 text-slate-400" />
          {project.location}
        </div>
        <div className="flex items-center text-sm text-slate-600">
          <Users className="w-4 h-4 mr-2 text-slate-400" />
          {project.beneficiaries.toLocaleString()} beneficiaries
        </div>
        <div className="flex items-center text-sm text-slate-600">
          <Calendar className="w-4 h-4 mr-2 text-slate-400" />
          {project.startDate} - {project.endDate || 'Ongoing'}
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-slate-600">Progress</span>
          <span className="font-semibold text-slate-800">{project.progress}%</span>
        </div>
        <Progress value={project.progress} className="h-2" />
      </div>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-slate-800 mb-2">Key Highlights:</p>
        <ul className="text-xs text-slate-600 space-y-1">
          {project.highlights.slice(0, 2).map((highlight, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        variant="outline" 
        className="w-full group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </CardContent>
  </Card>
);

const Projects = () => {
  const activeProjects = projects.filter(p => p.status === 'active');
  const completedProjects = projects.filter(p => p.status === 'completed');
  const plannedProjects = projects.filter(p => p.status === 'planned');

  const totalBeneficiaries = projects.reduce((sum, project) => sum + project.beneficiaries, 0);
  const totalBudget = projects.reduce((sum, project) => {
    const budget = parseFloat(project.budget.replace(/[₹,Crores]/g, ''));
    return sum + budget;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent leading-tight">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Driving sustainable change through comprehensive development projects across India. 
            Each initiative is designed to create lasting impact in rural communities.
          </p>
        </div>

        {/* Impact Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">{projects.length}</div>
              <div className="text-sm text-slate-600">Total Projects</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">{totalBeneficiaries.toLocaleString()}</div>
              <div className="text-sm text-slate-600">Lives Impacted</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹{totalBudget}Cr</div>
              <div className="text-sm text-slate-600">Total Investment</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-sm text-slate-600">States Covered</div>
            </CardContent>
          </Card>
        </div>

        {/* Active Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
            <div className="w-1 h-6 bg-green-500 mr-3 rounded"></div>
            Active Projects ({activeProjects.length})
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {activeProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Completed Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
            <div className="w-1 h-6 bg-blue-500 mr-3 rounded"></div>
            Completed Projects ({completedProjects.length})
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {completedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Planned Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
            <div className="w-1 h-6 bg-orange-500 mr-3 rounded"></div>
            Upcoming Projects ({plannedProjects.length})
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {plannedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-teal-600 to-green-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Partner with Us</h3>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Join our mission to create sustainable change. Whether through funding, volunteering, 
            or partnerships, your support can help us reach more communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer">
              <Button variant="secondary" className="bg-white text-teal-600 hover:bg-white/90">
                Become a Volunteer
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Partner with Us
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;

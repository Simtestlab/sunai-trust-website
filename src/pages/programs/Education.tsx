import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BookOpen, 
  Users, 
  Target, 
  Award, 
  Heart,
  ArrowRight,
  MapPin,
  Calendar,
  TrendingUp
} from 'lucide-react';
import educationHero from '@/assets/education.jpg';
import educationProgram from '@/assets/education-program.jpg';

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={educationHero} 
          alt="Education Program" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Education</h1>
            <p className="text-xl md:text-2xl mb-6">
              Providing quality education and learning opportunities to underserved communities
            </p>
            {/* Hero CTA commented out per request
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg">
              Support Education <Heart className="ml-2 w-5 h-5" />
            </Button>
            */}
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Overview Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Transforming Lives Through Education
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Education is the foundation of sustainable development and social change. Our comprehensive 
                  education programs focus on ensuring every child has access to quality learning opportunities, 
                  regardless of their socio-economic background.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We work with communities, schools, and local partners to create learning environments that 
                  foster critical thinking, creativity, and life skills development. Our holistic approach 
                  addresses not just academic learning but also nutritional support, infrastructure development, 
                  and teacher training.
                </p>
                {/* Buttons removed per request
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    Our Approach <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                    Download Brochure
                  </Button>
                </div>
                */}
              </div>
              <div className="relative">
                <img 
                  src={educationProgram} 
                  alt="Education Program Activities" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold">50,000+</div>
                    <div className="text-sm">Children Educated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 bg-teal-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, number: "50,000+", label: "Students Enrolled", desc: "Across all programs" },
                { icon: BookOpen, number: "500+", label: "Schools Supported", desc: "Rural and urban areas" },
                { icon: Award, number: "98%", label: "Pass Rate", desc: "Above national average" },
                { icon: TrendingUp, number: "85%", label: "Dropout Reduction", desc: "In target communities" }
              ].map((stat, idx) => (
                <Card key={idx} className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-teal-600 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Education Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Primary Education Support",
                  description: "Supporting children aged 6-11 with foundational learning, nutrition, and infrastructure development in government schools.",
                  features: ["Basic literacy and numeracy", "Mid-day meal programs", "Learning material distribution", "Parent engagement"]
                },
                {
                  title: "Secondary Education Enhancement",
                  description: "Comprehensive support for adolescents including academic support, life skills training, and career guidance.",
                  features: ["Subject-wise tutoring", "Science lab equipment", "Career counseling", "Scholarship programs"]
                },
                {
                  title: "Adult Literacy Programs",
                  description: "Empowering adults, especially women, with basic literacy and numeracy skills for better livelihood opportunities.",
                  features: ["Functional literacy", "Digital literacy", "Financial literacy", "Skill development"]
                },
                {
                  title: "Teacher Training",
                  description: "Capacity building programs for teachers to improve teaching methodologies and student engagement.",
                  features: ["Pedagogy training", "Technology integration", "Classroom management", "Assessment techniques"]
                },
                {
                  title: "Digital Learning",
                  description: "Leveraging technology to provide quality education content and bridge the digital divide.",
                  features: ["E-learning platforms", "Digital classrooms", "Educational apps", "Online assessments"]
                },
                {
                  title: "Special Needs Education",
                  description: "Inclusive education programs for children with disabilities and learning difficulties.",
                  features: ["Specialized curriculum", "Trained educators", "Assistive technology", "Parent counseling"]
                }
              ].map((program, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-teal-600">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                    <div className="space-y-2">
                      {program.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="p-8 bg-teal-50 border-teal-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-teal-600 mr-2" />
                    <span className="text-teal-600 font-semibold">Rajasthan</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Village School Transformation</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "In Khempur village, we transformed a struggling school with just 40 students into a thriving 
                    educational center with 200+ students. Through infrastructure development, teacher training, 
                    and community engagement, the school now boasts a 100% attendance rate."
                  </p>
                  <div className="text-sm text-gray-500">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Project Duration: 2020-2023
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-green-50 border-green-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-600 font-semibold">West Bengal</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Digital Literacy Initiative</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "Our digital learning centers in rural West Bengal have enabled 1,500+ students to access 
                    quality educational content. Many students have gone on to pursue higher education and 
                    secure good employment opportunities."
                  </p>
                  <div className="text-sm text-gray-500">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Project Duration: 2021-Ongoing
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600">
          <div className="max-w-4xl mx-auto text-center px-6 text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission to Transform Education</h2>
            <p className="text-xl mb-8 opacity-90">
              Every child deserves quality education. Your support can help us reach more communities 
              and create lasting change through the power of learning.
            </p>
            {/* Bottom CTA buttons removed per request
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                Donate Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Volunteer With Us
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Partner With Us
              </Button>
            </div>
            */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Education;

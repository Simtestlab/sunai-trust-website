import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import person1 from '@/assets/person1.jpg';
import person2 from '@/assets/person2.jpg';
import person3 from '@/assets/person3.jpg';
import person4 from '@/assets/person4.jpg';

const TeamCard = ({ img, name, title, desc }: { img: string; name: string; title: string; desc: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="w-36 h-36 mx-auto rounded-full overflow-hidden mb-4 relative ring-4 ring-teal-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-full"></div>
        )}
        <img 
          src={img} 
          alt={name} 
          loading="lazy" 
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-base font-semibold text-teal-600 mb-3">{title}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-800">
              The People Behind Our Mission
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              "Change is not built alone, it's built together. Our team blends vision, skill, and compassion to serve communities. We turn purpose into action, and action into impact."
            </p>
          </div>

          {/* Management Team Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
              Our Management Team
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Working together towards humanity - our dedicated leadership team brings decades of experience in social development, community engagement, and strategic planning.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <TeamCard 
                img={person1} 
                name="Mukesh Singh" 
                title="Program Director" 
                desc="Mukesh has a rich experience of over 25 years marked by remarkable achievements and impactful leadership in the fields of rural development, strategic planning, and community engagement. He has led organizations across multiple states, focusing on sustainable development programs that create lasting change." 
              />
              <TeamCard 
                img={person2} 
                name="Dr. Rajesh Kumar" 
                title="Field Coordinator" 
                desc="Dr. Rajesh comes with 15+ years of working experience at senior positions in large-scale operations, community mobilization, and field implementation. He has expertise in grassroots program delivery and has successfully coordinated programs across remote villages and urban settlements." 
              />
              <TeamCard 
                img={person3} 
                name="Anita Desai" 
                title="Monitoring & Evaluation Lead" 
                desc="Anita holds expertise in data analysis, impact evaluation, and program monitoring with 12+ years of experience. She specializes in developing comprehensive M&E frameworks and has been instrumental in measuring and demonstrating the impact of community development programs." 
              />
              <TeamCard 
                img={person4} 
                name="Vikram Patel" 
                title="Senior Advisor" 
                desc="Vikram is a seasoned professional with 20+ years of experience working on strategic partnerships, fundraising, and organizational development. He has expertise in building sustainable relationships with stakeholders and has been guiding the strategic direction of development initiatives." 
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;

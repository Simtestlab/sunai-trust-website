import Header from '@/components/Header';
import Footer from '@/components/Footer';
import person1 from '@/assets/person1.jpg';
import person2 from '@/assets/person2.jpg';
import person3 from '@/assets/person3.jpg';
import person4 from '@/assets/person4.jpg';

const TeamCard = ({ img, name, title, desc }: { img: string; name: string; title: string; desc: string }) => (
  <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.12)] rounded-lg p-8 text-center backdrop-blur-sm">
    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-[rgba(255,255,255,0.06)] mb-4">
      <img src={img} alt={name} loading="lazy" className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-semibold text-white">{name}</h3>
    <p className="text-sm font-medium text-white/90 mt-1">{title}</p>
    <p className="text-sm text-white/80 mt-4">{desc}</p>
  </div>
);

const Team = () => {
  return (
  <div className="min-h-screen text-white" style={{ background: 'linear-gradient(180deg, #127c8f 0%, #1fa1b3 100%)' }}>
      <Header />
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Our Team – The Hearts Behind Our Mission</h1>
          <p className="mt-6 text-sm text-white/90">"Change is not built alone, it's built together. Our team blends vision, skill, and compassion to serve communities. We turn purpose into action, and action into impact."</p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamCard img={person1} name="Person" title="Program Director" desc="Leads program strategy, partnerships, and overall implementation across regions." />
          <TeamCard img={person2} name="Person" title="Field Coordinator" desc="Coordinates community engagement and field operations to ensure program reach." />
          <TeamCard img={person3} name="Person" title="Monitoring & Evaluation Lead" desc="Oversees monitoring, evaluation and reporting to measure program impact." />
          <TeamCard img={person4} name="Person" title="Senior Advisor" desc="Provides strategic guidance and builds relationships with stakeholders." />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;

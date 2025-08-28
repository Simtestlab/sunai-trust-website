import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MissionOverview from '@/components/MissionOverview';
import FeaturedStory from '@/components/FeaturedStory';
import PartnerLogos from '@/components/PartnerLogos';
import CTABar from '@/components/CTABar';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
  <MissionOverview />
  <PartnerLogos />
  <FeaturedStory />
  <CTABar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

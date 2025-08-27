import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MissionOverview from '@/components/MissionOverview';
import ImpactHighlights from '@/components/ImpactHighlights';
import FeaturedStory from '@/components/FeaturedStory';
import PartnerLogos from '@/components/PartnerLogos';
import CTABar from '@/components/CTABar';
import NewsPreview from '@/components/NewsPreview';
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
    <ImpactHighlights />
  <PartnerLogos />
        <FeaturedStory />
        <CTABar />
        <NewsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

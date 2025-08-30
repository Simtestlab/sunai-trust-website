import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Achievements = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Achievements</h1>
        <p className="text-muted-foreground">Key milestones and impact numbers.</p>
        <ul className="mt-6 list-disc pl-6 space-y-2">
          <li>Reached 1,000 beneficiaries</li>
          <li>Completed X projects</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;

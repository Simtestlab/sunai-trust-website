import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Volunteer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Volunteer</h1>
        <p className="text-muted-foreground">Interested in volunteering? Please contact us or fill the volunteer form (placeholder).</p>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;

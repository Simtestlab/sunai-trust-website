import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-muted-foreground">Overview of our ongoing and completed projects.</p>
        <section className="mt-8 grid gap-6">
          <div className="p-6 border rounded-lg">Project A — brief description.</div>
          <div className="p-6 border rounded-lg">Project B — brief description.</div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;

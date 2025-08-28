import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-muted-foreground">Get in touch with us via email or phone. This is placeholder contact info.</p>
        <ul className="mt-6 space-y-2">
          <li>Email: info@sunai.org</li>
          <li>Phone: +91-XXXXXXXXXX</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

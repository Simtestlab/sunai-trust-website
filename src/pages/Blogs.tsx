import Header from '@/components/Header';
import Footer from '@/components/Footer';
import placeholder from '@/assets/partner-placeholder.svg';

type Blog = {
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
};

const blogs: Blog[] = [
  {
    tag: 'Women Empowerment',
    title: 'Skill Training Program for Women Launched in Tamil Nadu',
    excerpt:
      'A new initiative offering tailoring, digital literacy, and financial awareness workshops for rural women to become self-reliant.',
    date: 'April 20, 2025',
    readTime: '3 min read',
    image: placeholder
  },
  {
    tag: 'Environment',
    title: 'Tree Plantation Drive Plants 50,000 Saplings',
    excerpt:
      'Our community volunteers and school students came together to restore greenery and improve air quality in local villages.',
    date: 'March 28, 2025',
    readTime: '2 min read',
    image: placeholder
  },
  {
    tag: 'Livelihood',
    title: 'Youth Skill Development Workshop Helps 500 Find Jobs',
    excerpt:
      'Job-oriented training in IT, carpentry, and electrical work has successfully placed 500 young people in local industries.',
    date: 'May 2, 2025',
    readTime: '4 min read',
    image: placeholder
  },
  {
    tag: 'Water & Sanitation',
    title: 'Clean Water Project Brings Safe Drinking Water to 20 Villages',
    excerpt:
      'New borewells and water purification systems ensure access to safe and clean drinking water for more than 3,000 families.',
    date: 'April 10, 2025',
    readTime: '3 min read',
    image: placeholder
  },
  {
    tag: 'Nutrition',
    title: 'Midday Meal Program Reaches 2,000 Children',
    excerpt:
      'Our nutrition initiative provides healthy meals to school children daily, helping improve attendance and overall health.',
    date: 'March 25, 2025',
    readTime: '3 min read',
    image: placeholder
  },
  {
    tag: 'Disaster Relief',
    title: 'Emergency Relief Provided to Flood-Affected Families',
    excerpt:
      'Our volunteers distributed food, clothing, and medical kits to families impacted by the recent floods in Bihar.',
    date: 'May 15, 2025',
    readTime: '4 min read',
    image: placeholder
  }
];

const BlogCard = ({ blog }: { blog: Blog }) => (
  <article className="bg-white rounded-lg overflow-hidden shadow-sm">
    <div className="h-44 bg-slate-50 flex items-center justify-center">
      {/* top visual area */}
      <img src={blog.image} alt={blog.title} loading="lazy" className="h-full w-full object-cover opacity-40" />
      <div className="absolute">
        <div className="h-10 w-10 bg-white/80 rounded-full flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="#0ea5a4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>

    <div className="p-5 bg-white">
      <div className="mb-3">
        <span className="inline-block text-[11px] text-slate-600 bg-slate-100 px-2 py-1 rounded-full">{blog.tag}</span>
      </div>
      <h3 className="text-lg font-semibold text-slate-800 mb-2">{blog.title}</h3>
      <p className="text-sm text-slate-600 mb-4">{blog.excerpt}</p>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 8v8M17 8v8M3 12h18" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{blog.date}</span>
          </div>
          <div>{blog.readTime}</div>
        </div>

        <div className="text-slate-700">Read Article →</div>
      </div>
    </div>
  </article>
);

const Blogs = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Latest News & Events</h1>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">Stay updated with our latest initiatives, success stories, and upcoming events.</p>
        </div>

        <section className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {blogs.map((b, i) => (
            <BlogCard blog={b} key={i} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import skillTraining from "@/assets/skill trainning.jpeg";
import skillDevelopment from "@/assets/skill development.jpeg";
import treePlantation from "@/assets/tree plantation.jpeg";
import waterImage from "@/assets/water.jpeg";
import mealImage from "@/assets/meal.jpeg";
import reliefImage from "@/assets/relief.jpeg";

type Blog = {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

const blogs: Blog[] = [
  {
    id: "skill-training-women-tamil-nadu",
    tag: "Women Empowerment",
    title: "Skill Training Program for Women Launched in Tamil Nadu",
    excerpt:
      "A new initiative offering tailoring, digital literacy, and financial awareness workshops for rural women to become self-reliant.",
    date: "April 20, 2025",
    readTime: "3 min read",
    image: skillTraining,
    featured: true,
  },
  {
    id: "tree-plantation-drive-50000-saplings",
    tag: "Environment",
    title: "Tree Plantation Drive Plants 50,000 Saplings",
    excerpt:
      "Our community volunteers and school students came together to restore greenery and improve air quality in local villages.",
    date: "March 28, 2025",
    readTime: "2 min read",
    image: treePlantation,
  },
  {
    id: "youth-skill-development-500-jobs",
    tag: "Livelihood",
    title: "Youth Skill Development Workshop Helps 500 Find Jobs",
    excerpt:
      "Job-oriented training in IT, carpentry, and electrical work has successfully placed 500 young people in local industries.",
    date: "May 2, 2025",
    readTime: "4 min read",
    image: skillDevelopment,
    featured: true,
  },
  {
    id: "clean-water-project-20-villages",
    tag: "Water & Sanitation",
    title: "Clean Water Project Brings Safe Drinking Water to 20 Villages",
    excerpt:
      "New borewells and water purification systems ensure access to safe and clean drinking water for more than 3,000 families.",
    date: "April 10, 2025",
    readTime: "3 min read",
    image: waterImage,
  },
  {
    id: "midday-meal-program-2000-children",
    tag: "Nutrition",
    title: "Midday Meal Program Reaches 2,000 Children",
    excerpt:
      "Our nutrition initiative provides healthy meals to school children daily, helping improve attendance and overall health.",
    date: "March 25, 2025",
    readTime: "3 min read",
    image: mealImage,
  },
  {
    id: "emergency-relief-flood-affected-families",
    tag: "Disaster Relief",
    title: "Emergency Relief Provided to Flood-Affected Families",
    excerpt:
      "Our volunteers distributed food, clothing, and medical kits to families impacted by the recent floods in Bihar.",
    date: "May 15, 2025",
    readTime: "4 min read",
    image: reliefImage,
  },
  // Additional blog posts for more content
  {
    id: "digital-literacy-elderly-program",
    tag: "Digital Inclusion",
    title:
      "Digital Literacy Program for Senior Citizens Shows Remarkable Results",
    excerpt:
      "Over 200 elderly participants learned smartphone usage, online banking, and digital communication in our pioneering program.",
    date: "June 5, 2025",
    readTime: "3 min read",
    image: skillDevelopment,
  },
  {
    id: "solar-energy-rural-electrification",
    tag: "Renewable Energy",
    title: "Solar Power Initiative Brings Electricity to Remote Villages",
    excerpt:
      "Solar panel installations in 12 remote villages provide clean energy to 800 households, enabling evening education and small businesses.",
    date: "May 20, 2025",
    readTime: "5 min read",
    image: treePlantation,
  },
  {
    id: "community-health-workers-training",
    tag: "Healthcare",
    title: "Community Health Workers Program Improves Rural Healthcare Access",
    excerpt:
      "Training 150 local women as community health workers has improved healthcare delivery in remote areas with limited medical facilities.",
    date: "April 15, 2025",
    readTime: "4 min read",
    image: reliefImage,
  },
];

const BlogCard = ({ blog }: { blog: Blog }) => (
  <Link to={`/blog/${blog.id}`}>
    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-slate-100">
      <div className="relative h-48 bg-slate-50 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {blog.featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-teal-600 text-white text-xs">Featured</Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute bottom-3 right-3">
          <div className="h-10 w-10 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
            <ArrowRight className="w-4 h-4 text-teal-600 group-hover:translate-x-0.5 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3">
          <Badge variant="secondary" className="text-xs">
            {blog.tag}
          </Badge>
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors duration-300">
          {blog.title}
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{blog.readTime}</span>
            </div>
          </div>
          <div className="text-teal-600 font-medium group-hover:text-teal-700 transition-colors duration-300">
            Read More
          </div>
        </div>
      </div>
    </article>
  </Link>
);

const Blogs = () => {
  const featuredBlogs = blogs.filter((blog) => blog.featured);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent leading-tight">
            Latest News & Stories
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Stay updated with our latest initiatives, success stories, and
            impact across communities. Discover how we're making a difference
            together.
          </p>
        </div>

        {/* Featured Stories */}
        {featuredBlogs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 text-center">
              Featured Stories
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              {featuredBlogs.map((blog, i) => (
                <div key={i} className="relative">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Articles */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              All Articles
            </h2>
            <span className="text-base text-slate-500 font-medium">
              {blogs.length} article{blogs.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, i) => (
              <BlogCard blog={blog} key={i} />
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20 bg-gradient-to-r from-teal-600 to-green-600 rounded-xl p-10 lg:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h3>
          <p className="text-lg md:text-xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Subscribe to our newsletter to receive the latest updates about our
            projects, success stories, and opportunities to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 text-base"
            />
            <Button
              variant="secondary"
              className="bg-white text-teal-600 hover:bg-white/90 h-12 px-8 text-base font-semibold"
            >
              Subscribe
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;

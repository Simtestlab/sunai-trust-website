import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Heart,
  MessageCircle,
} from "lucide-react";
import skillTraining from "@/assets/skill trainning.jpeg";
import skillDevelopment from "@/assets/skill development.jpeg";
import treePlantation from "@/assets/tree plantation.jpeg";
import waterImage from "@/assets/water.jpeg";
import mealImage from "@/assets/meal.jpeg";
import reliefImage from "@/assets/relief.jpeg";

type BlogPost = {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  location: string;
  impact: {
    beneficiaries: string;
    villages: string;
    duration: string;
  };
  gallery: string[];
};

const blogPosts: Record<string, BlogPost> = {
  "skill-training-women-tamil-nadu": {
    id: "skill-training-women-tamil-nadu",
    tag: "Women Empowerment",
    title: "Skill Training Program for Women Launched in Tamil Nadu",
    excerpt:
      "A new initiative offering tailoring, digital literacy, and financial awareness workshops for rural women to become self-reliant.",
    content: `
      <h2>Empowering Rural Women Through Skills Development</h2>
      <p>Our comprehensive skill training program has reached over 300 women across 15 villages in Tamil Nadu, providing them with essential skills for economic independence.</p>
      
      <h3>Program Components</h3>
      <ul>
        <li><strong>Tailoring and Handicrafts:</strong> Traditional and modern stitching techniques, embroidery, and handicraft making</li>
        <li><strong>Digital Literacy:</strong> Basic computer skills, mobile banking, and online marketing</li>
        <li><strong>Financial Awareness:</strong> Banking, savings, micro-credit, and entrepreneurship basics</li>
        <li><strong>Health and Nutrition:</strong> Family health, nutrition awareness, and kitchen gardening</li>
      </ul>

      <h3>Success Stories</h3>
      <p>Meera, a 28-year-old mother from Thanjavur district, started her own tailoring business after completing our 3-month program. She now earns ₹15,000 monthly and has trained 5 other women in her village.</p>
      
      <p>"This program has changed my life completely. I never thought I could become financially independent and support my family. Now I have my own business and am teaching other women too," says Meera.</p>

      <h3>Community Impact</h3>
      <p>The program has not only empowered individual women but has also strengthened entire communities. Women are now participating more actively in village councils, starting self-help groups, and creating sustainable livelihood opportunities.</p>

      <h3>Future Plans</h3>
      <p>We plan to expand this program to 50 more villages by the end of 2025, targeting 1,000 women. We're also introducing advanced courses in organic farming and food processing.</p>
    `,
    date: "April 20, 2025",
    readTime: "6 min read",
    image: skillTraining,
    author: "Priya Sharma",
    location: "Tamil Nadu, India",
    impact: {
      beneficiaries: "300+ Women",
      villages: "15 Villages",
      duration: "6 Months",
    },
    gallery: [skillTraining, skillDevelopment],
  },
  "tree-plantation-drive-50000-saplings": {
    id: "tree-plantation-drive-50000-saplings",
    tag: "Environment",
    title: "Tree Plantation Drive Plants 50,000 Saplings",
    excerpt:
      "Our community volunteers and school students came together to restore greenery and improve air quality in local villages.",
    content: `
      <h2>Green Initiative for Climate Action</h2>
      <p>In collaboration with local schools and community groups, we successfully planted 50,000 saplings across 25 villages, contributing to environmental conservation and climate change mitigation.</p>
      
      <h3>Environmental Impact</h3>
      <ul>
        <li><strong>Carbon Sequestration:</strong> Expected to absorb 1,250 tons of CO₂ annually when mature</li>
        <li><strong>Biodiversity:</strong> Native species planted to support local wildlife</li>
        <li><strong>Soil Conservation:</strong> Preventing erosion in agricultural areas</li>
        <li><strong>Water Conservation:</strong> Improving groundwater recharge</li>
      </ul>

      <h3>Community Participation</h3>
      <p>Over 500 volunteers, including 200 students from 10 schools, participated in this massive plantation drive. Each participant received training on proper planting techniques and tree care.</p>
      
      <h3>Species Selection</h3>
      <p>We carefully selected native species including Neem, Banyan, Peepal, Mango, and Teak trees that are well-adapted to the local climate and provide multiple benefits to the community.</p>

      <h3>Monitoring and Care</h3>
      <p>A dedicated team of volunteers monitors the survival rate and growth of planted saplings. Currently, we have achieved an 85% survival rate, which is above the national average.</p>

      <h3>Educational Component</h3>
      <p>The program included environmental education sessions for students and community members, raising awareness about climate change, deforestation, and the importance of forest conservation.</p>
    `,
    date: "March 28, 2025",
    readTime: "5 min read",
    image: treePlantation,
    author: "Dr. Rajesh Kumar",
    location: "Rajasthan, India",
    impact: {
      beneficiaries: "10,000+ People",
      villages: "25 Villages",
      duration: "3 Months",
    },
    gallery: [treePlantation],
  },
  "youth-skill-development-500-jobs": {
    id: "youth-skill-development-500-jobs",
    tag: "Livelihood",
    title: "Youth Skill Development Workshop Helps 500 Find Jobs",
    excerpt:
      "Job-oriented training in IT, carpentry, and electrical work has successfully placed 500 young people in local industries.",
    content: `
      <h2>Bridging the Skills Gap for Rural Youth</h2>
      <p>Our comprehensive skill development program has successfully trained and placed 500 young people in sustainable employment, addressing unemployment challenges in rural areas.</p>
      
      <h3>Training Programs</h3>
      <ul>
        <li><strong>Information Technology:</strong> Basic computer skills, data entry, digital marketing (150 participants)</li>
        <li><strong>Carpentry and Woodwork:</strong> Furniture making, construction skills (120 participants)</li>
        <li><strong>Electrical Work:</strong> Home wiring, appliance repair, solar panel installation (130 participants)</li>
        <li><strong>Automotive:</strong> Two-wheeler and car maintenance (100 participants)</li>
      </ul>

      <h3>Industry Partnerships</h3>
      <p>We collaborated with over 50 local businesses and industries to ensure relevant training and guaranteed placement opportunities. Partner companies include local manufacturing units, IT service centers, and construction companies.</p>
      
      <h3>Success Rate</h3>
      <p>Out of 500 trained candidates, 485 (97%) have been successfully placed in jobs with an average starting salary of ₹18,000 per month. Many participants have reported significant improvement in their family's economic status.</p>

      <h3>Continuous Support</h3>
      <p>We provide 6-month post-placement support to ensure job retention and career growth. Our mentorship program connects new employees with experienced professionals in their field.</p>

      <h3>Women's Participation</h3>
      <p>35% of participants were women, breaking traditional gender barriers in technical fields. Special provisions were made for women's safety and convenience during training.</p>
    `,
    date: "May 2, 2025",
    readTime: "7 min read",
    image: skillDevelopment,
    author: "Anita Desai",
    location: "Karnataka, India",
    impact: {
      beneficiaries: "500 Youth",
      villages: "30 Villages",
      duration: "8 Months",
    },
    gallery: [skillDevelopment],
  },
  "clean-water-project-20-villages": {
    id: "clean-water-project-20-villages",
    tag: "Water & Sanitation",
    title: "Clean Water Project Brings Safe Drinking Water to 20 Villages",
    excerpt:
      "New borewells and water purification systems ensure access to safe and clean drinking water for more than 3,000 families.",
    content: `
      <h2>Ensuring Water Security for Rural Communities</h2>
      <p>Our comprehensive water project has transformed the lives of over 15,000 people across 20 villages by providing access to clean, safe drinking water through sustainable infrastructure development.</p>
      
      <h3>Infrastructure Development</h3>
      <ul>
        <li><strong>Borewell Installation:</strong> 25 new borewells with solar-powered pumps</li>
        <li><strong>Water Purification:</strong> Community-level RO plants and UV filtration systems</li>
        <li><strong>Storage Facilities:</strong> Overhead tanks and underground reservoirs</li>
        <li><strong>Distribution Network:</strong> Piped water supply to households and community taps</li>
      </ul>

      <h3>Water Quality Testing</h3>
      <p>Regular water quality testing ensures WHO standards compliance. We conduct monthly tests for pH, TDS, bacterial contamination, and heavy metals to maintain water safety standards.</p>
      
      <h3>Community Training</h3>
      <p>Local communities were trained in system maintenance, water conservation techniques, and hygiene practices. Village Water Committees were formed to ensure sustainable management.</p>

      <h3>Health Impact</h3>
      <p>Waterborne diseases in target villages have reduced by 75%. Child mortality rates have decreased, and school attendance has improved as children no longer need to travel long distances for water.</p>

      <h3>Women's Empowerment</h3>
      <p>Women and girls, who previously spent 3-4 hours daily collecting water, can now focus on education and income-generating activities. This has led to increased female literacy and economic participation.</p>

      <h3>Environmental Benefits</h3>
      <p>Solar-powered pumps reduce carbon footprint and operational costs. Rainwater harvesting systems were also installed to recharge groundwater and ensure sustainability.</p>
    `,
    date: "April 10, 2025",
    readTime: "6 min read",
    image: waterImage,
    author: "Vikram Patel",
    location: "Gujarat, India",
    impact: {
      beneficiaries: "15,000 People",
      villages: "20 Villages",
      duration: "12 Months",
    },
    gallery: [waterImage],
  },
  "midday-meal-program-2000-children": {
    id: "midday-meal-program-2000-children",
    tag: "Nutrition",
    title: "Midday Meal Program Reaches 2,000 Children",
    excerpt:
      "Our nutrition initiative provides healthy meals to school children daily, helping improve attendance and overall health.",
    content: `
      <h2>Nourishing Young Minds for Better Learning</h2>
      <p>Our midday meal program serves nutritious, hot meals to 2,000 children across 40 schools, addressing malnutrition and improving educational outcomes in rural areas.</p>
      
      <h3>Nutritional Standards</h3>
      <ul>
        <li><strong>Balanced Meals:</strong> Rice/wheat, dal, vegetables, and fruits providing 450 calories and 12g protein</li>
        <li><strong>Micronutrients:</strong> Fortified salt, oil, and specially designed recipes to address deficiencies</li>
        <li><strong>Local Sourcing:</strong> 80% ingredients sourced from local farmers and SHGs</li>
        <li><strong>Hygiene Standards:</strong> FSSAI-compliant kitchen facilities and food safety protocols</li>
      </ul>

      <h3>Educational Impact</h3>
      <p>School attendance has increased by 25% since the program's implementation. Children show improved concentration, better academic performance, and reduced dropout rates.</p>
      
      <h3>Health Outcomes</h3>
      <p>Regular health check-ups show significant improvement in children's nutritional status. Cases of anemia have reduced by 40%, and overall immunity has improved.</p>

      <h3>Community Involvement</h3>
      <p>Mothers and local women's groups are actively involved in meal preparation and monitoring. This has created employment opportunities for 120 women cooks and helpers.</p>

      <h3>Kitchen Gardens</h3>
      <p>Schools have established kitchen gardens to supplement the meal program with fresh vegetables. Children learn about nutrition, agriculture, and environmental conservation through hands-on experience.</p>

      <h3>Sustainability</h3>
      <p>The program is designed for long-term sustainability through community ownership, government partnerships, and local resource utilization. We're working toward making schools self-sufficient in vegetable production.</p>
    `,
    date: "March 25, 2025",
    readTime: "5 min read",
    image: mealImage,
    author: "Dr. Sunita Rao",
    location: "Odisha, India",
    impact: {
      beneficiaries: "2,000 Children",
      villages: "40 Schools",
      duration: "18 Months",
    },
    gallery: [mealImage],
  },
  "emergency-relief-flood-affected-families": {
    id: "emergency-relief-flood-affected-families",
    tag: "Disaster Relief",
    title: "Emergency Relief Provided to Flood-Affected Families",
    excerpt:
      "Our volunteers distributed food, clothing, and medical kits to families impacted by the recent floods in Bihar.",
    content: `
      <h2>Rapid Response to Natural Disaster</h2>
      <p>When devastating floods hit 15 districts in Bihar, our emergency response team mobilized within 24 hours to provide immediate relief to 5,000 affected families.</p>
      
      <h3>Immediate Relief Activities</h3>
      <ul>
        <li><strong>Emergency Shelters:</strong> Set up 25 temporary shelters accommodating 1,200 people</li>
        <li><strong>Food Distribution:</strong> Daily cooked meals and dry ration kits for 2 weeks</li>
        <li><strong>Medical Support:</strong> Mobile medical units and medicine distribution</li>
        <li><strong>Clean Water:</strong> Water purification tablets and temporary water supply systems</li>
      </ul>

      <h3>Coordination with Authorities</h3>
      <p>We worked closely with district administration, state disaster management authority, and other NGOs to ensure coordinated relief efforts and avoid duplication.</p>
      
      <h3>Volunteer Mobilization</h3>
      <p>Over 200 volunteers, including local youth, worked round-the-clock for rescue and relief operations. Our trained disaster response team led the coordination efforts.</p>

      <h3>Medical Emergency Response</h3>
      <p>Mobile medical teams treated over 2,500 patients for flood-related ailments including diarrhea, skin infections, and respiratory problems. Special attention was given to pregnant women and elderly people.</p>

      <h3>Rehabilitation Support</h3>
      <p>Beyond immediate relief, we're supporting long-term rehabilitation through house reconstruction, livelihood restoration, and psychological counseling for trauma-affected individuals.</p>

      <h3>Preparedness for Future</h3>
      <p>We're working with communities to develop disaster preparedness plans, train local volunteers, and pre-position emergency supplies for quick response to future disasters.</p>
    `,
    date: "May 15, 2025",
    readTime: "6 min read",
    image: reliefImage,
    author: "Rajesh Singh",
    location: "Bihar, India",
    impact: {
      beneficiaries: "5,000 Families",
      villages: "50 Villages",
      duration: "2 Months",
    },
    gallery: [reliefImage],
  },
  "digital-literacy-elderly-program": {
    id: "digital-literacy-elderly-program",
    tag: "Digital Inclusion",
    title:
      "Digital Literacy Program for Senior Citizens Shows Remarkable Results",
    excerpt:
      "Over 200 elderly participants learned smartphone usage, online banking, and digital communication in our pioneering program.",
    content: `
      <h2>Bridging the Digital Divide for Senior Citizens</h2>
      <p>Our innovative digital literacy program has successfully trained over 200 senior citizens across rural and urban areas, helping them navigate the digital world with confidence.</p>
      
      <h3>Program Components</h3>
      <ul>
        <li><strong>Smartphone Basics:</strong> Making calls, texting, using camera, and basic apps</li>
        <li><strong>Online Banking:</strong> Safe digital transactions, UPI payments, and account management</li>
        <li><strong>Social Connectivity:</strong> Video calling with family, social media basics</li>
        <li><strong>Government Services:</strong> Accessing pension, healthcare, and other digital services</li>
      </ul>

      <h3>Teaching Methodology</h3>
      <p>We developed a patient, step-by-step approach with large fonts, simple language, and hands-on practice. Each participant received a simplified instruction manual in their local language.</p>
      
      <h3>Community Impact</h3>
      <p>Participants report feeling more connected with their families, especially grandchildren living far away. Many can now access government services independently and feel more confident in the modern world.</p>

      <h3>Success Stories</h3>
      <p>Mrs. Kamala Devi, 72, from Delhi, now video calls her son in the US weekly and has learned to order groceries online. "I never thought I could use these gadgets, but now I feel so empowered," she says.</p>

      <h3>Health Benefits</h3>
      <p>The program has shown unexpected mental health benefits. Participants report feeling less isolated, more mentally active, and proud of learning new skills at their age.</p>

      <h3>Expansion Plans</h3>
      <p>Due to overwhelming success, we're expanding to 50 more locations and adding modules on online healthcare consultations and digital entertainment platforms.</p>
    `,
    date: "June 5, 2025",
    readTime: "4 min read",
    image: skillDevelopment,
    author: "Dr. Meera Sharma",
    location: "Delhi & NCR, India",
    impact: {
      beneficiaries: "200+ Senior Citizens",
      villages: "25 Centers",
      duration: "4 Months",
    },
    gallery: [skillDevelopment],
  },
  "solar-energy-rural-electrification": {
    id: "solar-energy-rural-electrification",
    tag: "Renewable Energy",
    title: "Solar Power Initiative Brings Electricity to Remote Villages",
    excerpt:
      "Solar panel installations in 12 remote villages provide clean energy to 800 households, enabling evening education and small businesses.",
    content: `
      <h2>Lighting Up Lives with Clean Energy</h2>
      <p>Our solar electrification project has transformed 12 remote villages in Rajasthan and Madhya Pradesh, bringing clean, reliable electricity to 800 households for the first time.</p>
      
      <h3>Infrastructure Development</h3>
      <ul>
        <li><strong>Solar Mini-Grids:</strong> 12 community-level solar power systems with battery storage</li>
        <li><strong>Household Connections:</strong> Individual connections to 800 homes with energy-efficient LED lighting</li>
        <li><strong>Community Facilities:</strong> Solar power for schools, health centers, and community halls</li>
        <li><strong>Maintenance Training:</strong> Local technicians trained for system upkeep</li>
      </ul>

      <h3>Economic Impact</h3>
      <p>Access to electricity has enabled new economic opportunities. Women have started small tailoring businesses, students can study after dark, and small shops can stay open longer.</p>
      
      <h3>Educational Benefits</h3>
      <p>Evening study hours have increased school performance. Children no longer strain their eyes with kerosene lamps, and schools can now use modern teaching aids.</p>

      <h3>Health Improvements</h3>
      <p>Elimination of kerosene lamps has reduced indoor air pollution. Health centers can now operate medical equipment and store vaccines properly with refrigeration.</p>

      <h3>Environmental Impact</h3>
      <p>The project prevents 50 tons of CO₂ emissions annually and eliminates the use of 2,000 liters of kerosene per month, significantly reducing air pollution.</p>

      <h3>Community Ownership</h3>
      <p>Village Energy Committees manage the systems, ensuring sustainability. Each household contributes a small monthly fee for maintenance, creating a self-sustaining model.</p>
    `,
    date: "May 20, 2025",
    readTime: "5 min read",
    image: treePlantation,
    author: "Eng. Suresh Kumar",
    location: "Rajasthan & MP, India",
    impact: {
      beneficiaries: "800 Households",
      villages: "12 Villages",
      duration: "8 Months",
    },
    gallery: [treePlantation],
  },
  "community-health-workers-training": {
    id: "community-health-workers-training",
    tag: "Healthcare",
    title: "Community Health Workers Program Improves Rural Healthcare Access",
    excerpt:
      "Training 150 local women as community health workers has improved healthcare delivery in remote areas with limited medical facilities.",
    content: `
      <h2>Building Healthcare Capacity at the Grassroots</h2>
      <p>Our Community Health Workers (CHW) program has trained 150 local women to provide basic healthcare services, reaching 25,000 people in remote areas with limited access to medical facilities.</p>
      
      <h3>Training Program</h3>
      <ul>
        <li><strong>Medical Basics:</strong> First aid, vital signs monitoring, and common illness recognition</li>
        <li><strong>Maternal Health:</strong> Prenatal care, safe delivery practices, and newborn care</li>
        <li><strong>Preventive Care:</strong> Vaccination schedules, nutrition counseling, and hygiene education</li>
        <li><strong>Health Records:</strong> Digital health records and telemedicine support</li>
      </ul>

      <h3>Community Impact</h3>
      <p>CHWs have conducted over 10,000 health consultations, identified 500 high-risk cases for referral, and significantly improved health awareness in their communities.</p>
      
      <h3>Technology Integration</h3>
      <p>Each CHW is equipped with a smartphone app for recording patient data, getting expert consultation via telemedicine, and ordering medical supplies.</p>

      <h3>Success Metrics</h3>
      <p>Infant mortality has reduced by 30%, institutional deliveries increased by 60%, and preventable diseases caught early increased by 80% in target areas.</p>

      <h3>Economic Empowerment</h3>
      <p>CHWs earn a monthly stipend and gain respect as healthcare providers in their communities. Many have become local leaders advocating for better health infrastructure.</p>

      <h3>Sustainability Model</h3>
      <p>The program is integrated with government health systems. CHWs are linked to Primary Health Centers and receive ongoing support from qualified medical professionals.</p>
    `,
    date: "April 15, 2025",
    readTime: "5 min read",
    image: reliefImage,
    author: "Dr. Anjali Verma",
    location: "Odisha & Jharkhand, India",
    impact: {
      beneficiaries: "25,000 People",
      villages: "75 Villages",
      duration: "12 Months",
    },
    gallery: [reliefImage],
  },
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blog = id ? blogPosts[id] : null;

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link to="/blogs">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link to="/blogs">
            <Button
              variant="ghost"
              className="text-teal-600 hover:text-teal-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <article className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-6 text-sm">
              {blog.tag}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              {blog.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-8 text-base text-slate-500 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">By {blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍 {blog.location}</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Comment
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Impact Highlights */}
          <div className="bg-teal-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-teal-800 mb-4">
              Project Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">
                  {blog.impact.beneficiaries}
                </div>
                <div className="text-sm text-teal-700">Beneficiaries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">
                  {blog.impact.villages}
                </div>
                <div className="text-sm text-teal-700">Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">
                  {blog.impact.duration}
                </div>
                <div className="text-sm text-teal-700">Duration</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Call to Action */}
          <div className="bg-slate-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">
              Want to make a difference?
            </h3>
            <p className="text-slate-600 mb-4">
              Join us in our mission to create positive change in communities
              across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/volunteer">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Become a Volunteer
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline">View All Projects</Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;

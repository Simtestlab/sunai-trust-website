import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import skillTraining from '@/assets/skill trainning.jpeg';
import skillDevelopment from '@/assets/skill development.jpeg';
import treePlantation from '@/assets/tree plantation.jpeg';
import waterImage from '@/assets/water.jpeg';
import mealImage from '@/assets/meal.jpeg';
import reliefImage from '@/assets/relief.jpeg';

const newsItems: any[] = [
  {
    type: 'news',
    title: 'Skill Training Program for Women Launched in Tamil Nadu',
    excerpt: 'A new initiative offering tailoring, digital literacy, and financial awareness workshops for rural women to become self-reliant.',
    date: 'April 20, 2025',
  readTime: '3 min read',
    category: 'Women Empowerment'
  },
  {
    type: 'news',
    title: 'Tree Plantation Drive Plants 50,000 Saplings',
    excerpt: 'Our community volunteers and school students came together to restore greenery and improve air quality in local villages.',
    date: 'March 28, 2025',
  readTime: '2 min read',
    category: 'Environment'
  },
  {
    type: 'news',
    title: 'Youth Skill Development Workshop Helps 500 Find Jobs',
    excerpt: 'Job-oriented training in IT, carpentry, and electrical work has successfully placed 500 young people in local industries.',
    date: 'May 2, 2025',
  readTime: '4 min read',
    category: 'Livelihood'
  },
  {
    type: 'news',
    title: 'Clean Water Project Brings Safe Drinking Water to 20 Villages',
    excerpt: 'New borewells and water purification systems ensure access to safe and clean drinking water for more than 3,000 families.',
    date: 'April 10, 2025',
  readTime: '3 min read',
    category: 'Water & Sanitation'
  },
  {
    type: 'news',
    title: 'Midday Meal Program Reaches 2,000 Children',
    excerpt: 'Our nutrition initiative provides healthy meals to school children daily, helping improve attendance and overall health.',
    date: 'March 25, 2025',
  readTime: '3 min read',
    category: 'Nutrition'
  },
  {
    type: 'news',
    title: 'Emergency Relief Provided to Flood-Affected Families',
    excerpt: 'Our volunteers distributed food, clothing, and medical kits to families impacted by the recent floods in Bihar.',
    date: 'May 15, 2025',
    readTime: '4 min read',
    category: 'Disaster Relief'
  }
];

// Associate images with the news items in the same order
const newsImages = [
  skillTraining,
  treePlantation,
  skillDevelopment,
  waterImage,
  mealImage,
  reliefImage
];

const NewsPreview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {newsItems.map((item, index) => (
        <Card
          key={index}
          className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
        >
          {/* Image */}
          <div className="relative bg-gradient-to-b from-blue-200 to-blue-300 rounded-t-2xl h-40 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-white shadow-lg border-4 border-white">
              <img
                src={newsImages[index]}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <CardContent className="flex flex-col h-full p-5">
            {/* Category + Date */}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span className="font-semibold text-indigo-600">{item.category}</span>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {item.date}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
              {item.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 text-sm flex-1 mb-4 line-clamp-3">
              {item.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{item.readTime}</span>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
              >
                Read More <ArrowRight size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NewsPreview;


import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "IoT Security in DC Microgrids",
      excerpt: "Exploring the latest approaches to securing IoT devices within DC microgrid environments.",
      date: "April 2, 2025",
      readTime: "8 min read",
      category: "Cybersecurity",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Machine Learning for Pain Prediction",
      excerpt: "How we're using machine learning algorithms to predict and measure pain levels in patients.",
      date: "March 15, 2025",
      readTime: "6 min read",
      category: "Healthcare",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 3,
      title: "The Future of Self-Balancing Robotics",
      excerpt: "Advancements in PID control systems for modern robotic applications.",
      date: "February 27, 2025",
      readTime: "5 min read",
      category: "Robotics",
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <div className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thoughts, insights, and research findings on mechatronics engineering, 
            IoT systems, cybersecurity, and machine learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden project-card">
              <div className="h-48 bg-gray-200">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <div className="flex mt-1">
                  <span className="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
                    <Tag size={12} className="mr-1" />
                    {post.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-portfolio-primary hover:text-portfolio-secondary flex items-center gap-2">
                  Read Article <ArrowRight size={16} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

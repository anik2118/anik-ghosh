
import React from 'react';
import ResearchCard from '@/components/ResearchCard';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Research = () => {
  const papers = [
    {
      title: "A Novel Event-Based False Data Injection Detection Strategy for DC Microgrids",
      journal: "IEEE Transactions on Smart Grid",
      description: "Proposed a novel event-based false data injection detection strategy for DC microgrids.",
      status: "Under Review",
    },
    {
      title: "Cybersecurity Analysis of DC Microgrids with Dynamic Watermarking",
      conference: "IEEE Power & Energy Society General Meeting 2023",
      description: "A comprehensive analysis of cybersecurity vulnerabilities in DC microgrids and countermeasures using dynamic watermarking techniques.",
      status: "Published",
      link: "#"
    },
    {
      title: "Machine Learning Based Approach for Pain Prediction in MRSA Patients",
      journal: "Journal of Medical Systems",
      description: "Development of a machine learning framework to predict pain levels in MRSA patients based on vital signs and environmental factors.",
      status: "Published",
      link: "#"
    }
  ];

  return (
    <div className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Research & Publications</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My research focuses on cybersecurity for DC microgrids, IoT systems, and machine learning applications in healthcare.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6 text-portfolio-primary">Research Papers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {papers.map((paper, index) => (
              <ResearchCard 
                key={index}
                title={paper.title}
                journal={paper.journal}
                conference={paper.conference}
                description={paper.description}
                status={paper.status}
                link={paper.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;

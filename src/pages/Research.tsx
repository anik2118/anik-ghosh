
import React from 'react';
import ResearchCard from '@/components/ResearchCard';

const Research = () => {
  const publications = [
    {
      title: "Cyber-Attack Detection with Dynamic Watermarking and Robust State Estimation in DC Microgrids",
      journal: "IEEE Transaction of Smart Grid",
      status: "Under Review",
      link: "#"
    },
    {
      title: "A Cost-Effective Real-Time Water Quality Monitoring System",
      conference: "PEIEACON 2024 Organised by Faculty of Electrical and Electronics Engineering, RUET",
      link: "#"
    },
    {
      title: "A Smart Approach to Control a Two-Wheeled Self-Balancing Robot Using a PID Controller with Two Degree of Freedom",
      conference: "ICMIME 2021 Organised by Faculty of Mechanical Engineering, RUET",
      link: "#research-gate-link"
    },
    {
      title: "The Categorization of Surface Irregularities Presents on the Hot-Rolled Steel Strip, Encompassing Six Distinct Types of Surface Anomalies, Achieved through the Implementation of Vision Transformer",
      conference: "6th Industrial Engineering and Operations Management Bangladesh Conference, Dhaka, Bangladesh",
      link: "#doi"
    }
  ];

  const conferences = [
    {
      title: "Conference presentation - IEEEPEACON",
      date: "Sep 2024"
    },
    {
      title: "IoT training certification",
      organization: "Bangabandhu Sheikh Mujib Hi-tech Park, Rajshahi (80% proficiency)",
      date: "Sep 2022"
    },
    {
      title: "Public Speaking: A Tactical Approach",
      organization: "Lovable, Dhaka",
      date: "Sep 2022"
    },
    {
      title: "Conference presentation",
      organization: "IEOM society",
      date: "Dec 2023"
    },
    {
      title: "Certification of voluntary program",
      organization: "Energy Club",
      date: "Jan 2022"
    }
  ];

  return (
    <div className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Research & Publications</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic research and publications in the fields of cybersecurity, 
            IoT applications, and control systems.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((publication, index) => (
              <ResearchCard 
                key={index}
                title={publication.title}
                journal={publication.journal}
                conference={publication.conference}
                status={publication.status}
                link={publication.link}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Conferences & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conferences.map((conference, index) => (
              <ResearchCard 
                key={index}
                title={conference.title}
                organization={conference.organization}
                description=""
                date={conference.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;

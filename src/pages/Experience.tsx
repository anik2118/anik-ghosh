
import React from 'react';
import ExperienceCard from '@/components/ExperienceCard';
import CertificationCard from '@/components/CertificationCard';

const Experience = () => {
  const experiences = [
    {
      title: "Visiting Research Assistant",
      company: "Department of Electrical Engineering, Qatar University",
      location: "Qatar University",
      period: "March 2025 - ongoing",
      supervisor: "Professor Dr. S M Muyeen",
      description: [
        "Developed and implemented cybersecurity strategies for DC microgrids, focusing on cyberattack detection, mitigation, and resilience to ensure secure and reliable power systems.",
        "Conducted research on secure state estimation and control techniques for DC microgrids, enhancing system observability, robustness, and defense against cyber threats."
      ]
    },
    {
      title: "Undergrad Research Student",
      company: "Department of Mechatronics Engineering, RUET",
      location: "Rajshahi, Bangladesh",
      period: "Jan 2023 - May 2024",
      supervisor: "Assistant professor Md. Hafiz ahmed",
      description: [
        "Developed and implemented an Internet of Things (IoT) system for continuous patient health monitoring, ensuring real-time data acquisition and analysis.",
        "Conducted research and developed methods for assessing and enhancing the thermal comfort patients, integrating sensors and data analysis.",
        "Utilized machine learning algorithms to monitor and predict patient pain levels, enhancing patient care through advanced data insights.",
        "Designed and developed a web application for real-time patient monitoring, featuring user-friendly interfaces and seamless integration with IoT devices for continuous health tracking."
      ]
    },
    {
      title: "Aspire Leadership Program",
      company: "Harvard Business School Faculty",
      location: "online",
      period: "Aug 2024 - Nov 2024",
      description: [
        "Completed a three-month prestigious leadership development program designed and delivered by Harvard Business School faculty to cultivate emerging leaders."
      ]
    },
    {
      title: "Web Automation Engineer",
      company: "Skyranko",
      location: "Rajshahi, Bangladesh",
      period: "February 2024 - January 2025",
      description: [
        "Developed and maintained backend systems for web scraping and automation tools, enhancing data retrieval and processing capabilities.",
        "Implemented web automation solutions using Selenium and Scrapy to streamline repetitive tasks and improve productivity."
      ]
    },
    {
      title: "Industrial Trainee",
      company: "Rupsha Tyre and Chemical Limited",
      location: "Khulna, Bangladesh",
      period: "April 2022 - May 2022",
      description: [
        "Gained practical insights and hands-on experience in power systems, tyre manufacturing processes, and PLC operations.",
        "Engaged in tasks such as monitoring and maintaining power distribution systems, ensuring efficient operation of manufacturing processes, and troubleshooting equipment failures."
      ]
    }
  ];

  const certifications = [
    {
      title: "Certificate of conference presentation, IEEEPIEACON",
      organization: "IEEE",
      date: "Sep 2024"
    },
    {
      title: "IoT training certification",
      organization: "Bangabandhu Sheikh Mujib Hi-tech Park, Rajshahi",
      date: "Sep 2022",
      description: "80% proficiency"
    },
    {
      title: "Public Speaking: A Tactical Approach",
      organization: "Udemy",
      date: "Sep 2022"
    },
    {
      title: "Certificate of conference presentation",
      organization: "IEOM society",
      date: "Dec 2023"
    },
    {
      title: "Certification of voluntary program",
      organization: "Energy of the Future",
      date: "Jun 2022"
    }
  ];

  return (
    <div className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey through academia, research, and industry roles.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
          <div className="ml-4">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={index}
                title={experience.title}
                company={experience.company}
                location={experience.location}
                period={experience.period}
                description={experience.description}
                supervisor={experience.supervisor}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((certification, index) => (
              <CertificationCard 
                key={index}
                title={certification.title}
                organization={certification.organization}
                date={certification.date}
                description={certification.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

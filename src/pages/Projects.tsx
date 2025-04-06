
import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Cyber attack detection and mitigation in DC microgrids",
      role: "Research Assistant",
      description: "The project focuses exclusively on addressing cyber threats in DC microgrids, with an emphasis on attack detection and testing control strategies. It specifically examines false data injection and replay attacks, including methods for detecting both types of attacks and implementing countermeasures to maintain microgrid stability.",
      technologies: [
        { name: "MATLAB" },
        { name: "Dynamic Watermarking" },
        { name: "State Estimation" }
      ]
    },
    {
      title: "Thermal comfort and pain measurement of an MRSA patient via machine learning using IoT connectivity",
      role: "Undergraduate student",
      description: "Successfully designed and implemented an IoT-based system to monitor and analyze thermal comfort and pain levels in MRSA patients. A machine learning based approach to predict pain levels.",
      technologies: [
        { name: "ESP8266" },
        { name: "Vital sign sensors" },
        { name: "Wireless data transmission" },
        { name: "Data analysis" },
        { name: "Machine learning" }
      ]
    },
    {
      title: "Self balancing Robot",
      role: "Lab student",
      description: "Developed a self-balancing robot capable of maintaining its upright position using a PID control algorithm.",
      technologies: [
        { name: "PID control algorithms" },
        { name: "Arduino microcontroller" },
        { name: "L298n motor driver" },
        { name: "Gyroscope sensor" }
      ]
    },
    {
      title: "IoT-Based Drinking Water Quality Monitoring System",
      role: "Lab student",
      description: "Created an IoT-based system for continuous monitoring and real-time reporting of drinking water quality, integrating multiple sensors and a notification system for immediate alerts under unsafe conditions.",
      technologies: [
        { name: "ESP8266" },
        { name: "Water quality sensors" },
        { name: "Webserver" },
        { name: "Wireless network" }
      ]
    }
  ];

  return (
    <div className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my research and engineering projects focused on cybersecurity for microgrids, 
            IoT applications, and control systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              role={project.role}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

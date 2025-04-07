
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Book, Code, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SkillBadge from '@/components/SkillBadge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  const programmingSkills = [
    { name: 'MATLAB' },
    { name: 'Python' },
  ];

  const toolSkills = [
    { name: 'MATLAB Simulink' },
    { name: 'Arduino' },
    { name: 'Proteus' },
    { name: 'VS Code' },
    { name: 'Google Colab' },
  ];

  const dataSkills = [
    { name: 'MS Excel' },
    { name: 'SPSS' },
  ];

  const documentationSkills = [
    { name: 'Google Docs' },
    { name: 'Google Slides' },
    { name: 'overleaf' },
    { name: 'Notion' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="flex justify-center md:justify-start mb-8">
                <Avatar className="h-48 w-48 border-4 border-white shadow-lg">
                  <AvatarImage src="/lovable-uploads/a8fa8b51-39b6-4500-b20a-876710bbe1cd.png" alt="Anik Ghosh" />
                  <AvatarFallback>AG</AvatarFallback>
                </Avatar>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-portfolio-secondary mb-6 text-center md:text-left">
                Anik Ghosh
              </h1>
              <h2 className="text-xl md:text-2xl text-portfolio-primary font-medium mb-6 text-center md:text-left">
                Mechatronics Engineer & IoT Researcher
              </h2>
              <p className="text-gray-700 mb-8 text-center md:text-left">
                Engineering graduate specializing in IoT systems, cybersecurity for DC microgrids, 
                and machine learning. Focusing on creating secure and innovative solutions in 
                electrical and mechatronics engineering.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button asChild>
                  <Link to="/projects" className="flex items-center gap-2">
                    View Projects <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                <a 
                  href="https://github.com/anik2118" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-secondary hover:text-portfolio-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/anik-ghosh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-secondary hover:text-portfolio-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:anik21.mte.ruet@gmail.com"
                  className="text-portfolio-secondary hover:text-portfolio-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                    <Book size={18} className="text-portfolio-primary" />
                    Education
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-medium">Rajshahi University of Engineering & Technology</h4>
                    <p className="text-sm text-gray-600">Bachelor of Science in Mechatronics Engineering</p>
                    <p className="text-sm text-gray-600">CGPA: 3.72/4.00 • May 2024</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                    <Briefcase size={18} className="text-portfolio-primary" />
                    Current Role
                  </h3>
                  <div>
                    <h4 className="font-medium">Visiting Research Assistant</h4>
                    <p className="text-sm text-gray-600">Department of Electrical Engineering, Qatar University</p>
                    <p className="text-sm text-gray-600">March 2025 - Present</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                    <FileText size={18} className="text-portfolio-primary" />
                    Research Focus
                  </h3>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>Cyber attack detection and mitigation in DC microgrids</li>
                    <li>IoT-based water quality monitoring systems</li>
                    <li>IoT-based patient thermal comfort and pain measurement</li>
                    <li>Self-balancing robotics with PID control</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Code size={18} className="text-portfolio-primary" />
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {programmingSkills.map((skill, index) => (
                  <SkillBadge key={index} name={skill.name} category="programming" />
                ))}
              </div>
              
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Code size={18} className="text-portfolio-primary" />
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {toolSkills.map((skill, index) => (
                  <SkillBadge key={index} name={skill.name} category="tools" />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Code size={18} className="text-portfolio-primary" />
                Data Analysis
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {dataSkills.map((skill, index) => (
                  <SkillBadge key={index} name={skill.name} category="data" />
                ))}
              </div>
              
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Code size={18} className="text-portfolio-primary" />
                Documentation
              </h3>
              <div className="flex flex-wrap gap-2">
                {documentationSkills.map((skill, index) => (
                  <SkillBadge key={index} name={skill.name} category="documentation" />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link to="/projects" className="flex items-center gap-2 mx-auto">
                Explore My Projects <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

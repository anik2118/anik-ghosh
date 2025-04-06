
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Anik Ghosh. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/anik2118" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/anik-ghosh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:anik21.mte.ruet@gmail.com"
              className="text-gray-600 hover:text-portfolio-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

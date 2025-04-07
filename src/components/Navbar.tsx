
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Research', path: '/research' },
    { name: 'Experience', path: '/experience' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-portfolio-secondary">
            Anik Ghosh
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium hover:text-portfolio-primary transition-colors ${
                  isActive(item.path) ? 'text-portfolio-primary' : 'text-portfolio-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/anik2118" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} className="text-portfolio-secondary hover:text-portfolio-primary transition-colors" />
            </a>
            <a href="https://linkedin.com/in/anik-ghosh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} className="text-portfolio-secondary hover:text-portfolio-primary transition-colors" />
            </a>
            <a href="mailto:anik21.mte.ruet@gmail.com" aria-label="Email">
              <Mail size={20} className="text-portfolio-secondary hover:text-portfolio-primary transition-colors" />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-portfolio-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium hover:text-portfolio-primary transition-colors ${
                    isActive(item.path) ? 'text-portfolio-primary' : 'text-portfolio-secondary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex gap-4 pt-4 border-t mt-2">
                <a href="https://github.com/anik2118" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={20} className="text-portfolio-secondary hover:text-portfolio-primary transition-colors" />
                </a>
                <a href="https://linkedin.com/in/anik-ghosh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} className="text-portfolio-secondary hover:text-portfolio-primary transition-colors" />
                </a>
                <a href="mailto:anik21.mte.ruet@gmail.com" aria-label="Email">
                  <Mail size={20} className="text-portfolio-secondary hover:text-portfolio-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to get in touch with me for collaboration, research opportunities, 
            or any questions you might have.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-portfolio-primary" size={20} />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a 
                      href="mailto:anik21.mte.ruet@gmail.com" 
                      className="text-portfolio-primary hover:underline"
                    >
                      anik21.mte.ruet@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Linkedin className="mt-1 text-portfolio-primary" size={20} />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/anik-ghosh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-primary hover:underline"
                    >
                      linkedin.com/in/anik-ghosh
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Github className="mt-1 text-portfolio-primary" size={20} />
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <a 
                      href="https://github.com/anik2118" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-primary hover:underline"
                    >
                      github.com/anik2118
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Current Location</h2>
              <p className="text-gray-700">
                Department of Electrical Engineering<br />
                Qatar University<br />
                Doha, Qatar
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Research Interests</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Cybersecurity in power systems and microgrids</li>
                <li>IoT applications in engineering and healthcare</li>
                <li>Machine learning for system monitoring and control</li>
                <li>Smart grid technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

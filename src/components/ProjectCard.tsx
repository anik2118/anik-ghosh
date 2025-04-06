
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Technology {
  name: string;
}

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  technologies: Technology[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  role, 
  description, 
  technologies 
}) => {
  return (
    <Card className="project-card h-full">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        <CardDescription className="font-medium text-portfolio-primary">{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100">
              {tech.name}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

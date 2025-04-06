
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  supervisor?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  location,
  period,
  description,
  supervisor
}) => {
  return (
    <div className="relative pl-8 pb-8 border-l border-gray-200 timeline-item">
      <Card className="border-l-4 border-l-portfolio-primary">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                <Briefcase size={18} className="text-portfolio-primary" />
                {title}
              </CardTitle>
              <CardDescription className="text-base font-medium">{company}</CardDescription>
              {supervisor && (
                <CardDescription className="text-sm">
                  Supervisor: {supervisor}
                </CardDescription>
              )}
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">{location}</p>
              <p className="text-xs font-medium text-portfolio-primary">{period}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-gray-700 text-sm">{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceCard;

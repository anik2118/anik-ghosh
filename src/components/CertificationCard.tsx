
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { File } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  organization: string;
  date: string;
  description?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  organization,
  date,
  description
}) => {
  return (
    <Card className="border-l-4 border-l-portfolio-accent">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base md:text-lg flex items-center gap-2">
              <File size={16} className="text-portfolio-accent" />
              {title}
            </CardTitle>
            <CardDescription className="text-sm font-medium">{organization}</CardDescription>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
      </CardHeader>
      {description && (
        <CardContent>
          <p className="text-sm text-gray-700">{description}</p>
        </CardContent>
      )}
    </Card>
  );
};

export default CertificationCard;

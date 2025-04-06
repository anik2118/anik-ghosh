
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ResearchCardProps {
  title: string;
  journal?: string;
  conference?: string;
  description?: string;
  status?: string;
  link?: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  journal,
  conference,
  description,
  status,
  link
}) => {
  return (
    <Card className="project-card h-full">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        {journal && (
          <CardDescription className="font-medium">
            Journal: {journal}
          </CardDescription>
        )}
        {conference && (
          <CardDescription className="font-medium">
            Conference: {conference}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {description && <p className="text-gray-700 mb-4">{description}</p>}
        {status && (
          <div className="mt-2">
            <Badge variant={status === "Under Review" ? "outline" : "default"}>
              {status}
            </Badge>
          </div>
        )}
      </CardContent>
      {link && (
        <CardFooter>
          <Button variant="outline" size="sm" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              View Paper <ExternalLink size={14} />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ResearchCard;


import React from 'react';
import { Badge } from '@/components/ui/badge';

interface SkillBadgeProps {
  name: string;
  category?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, category }) => {
  let badgeClass = 'bg-gray-100 hover:bg-gray-200 text-gray-800';
  
  if (category === 'programming') {
    badgeClass = 'bg-blue-100 hover:bg-blue-200 text-blue-800';
  } else if (category === 'tools') {
    badgeClass = 'bg-green-100 hover:bg-green-200 text-green-800';
  } else if (category === 'data') {
    badgeClass = 'bg-purple-100 hover:bg-purple-200 text-purple-800';
  } else if (category === 'documentation') {
    badgeClass = 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800';
  }
  
  return (
    <Badge className={`${badgeClass} font-medium text-xs py-1 px-2`}>
      {name}
    </Badge>
  );
};

export default SkillBadge;

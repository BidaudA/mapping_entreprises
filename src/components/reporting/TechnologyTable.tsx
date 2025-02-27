import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface TechnologyTableProps {
  title: string;
  icon: typeof LucideIcon;
  iconColor: string;
  technologies: [string, number][];
  companiesCount: number;
  onTechClick: (tech: string) => void;
}

export default function TechnologyTable({ 
  title, 
  icon: Icon, 
  iconColor, 
  technologies, 
  companiesCount,
  onTechClick
}: TechnologyTableProps) {
  return (
    <div>
      <h3 className="font-medium text-lg mb-3 flex items-center gap-2">
        <Icon className={`w-4 h-4 ${iconColor}`} />
        {title}
      </h3>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Technologie
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Entreprises
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                %
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {technologies.slice(0, 10).map(([tech, count]) => (
              <tr 
                key={tech} 
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => onTechClick(tech)}
              >
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                  {tech}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right">
                  {count}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right">
                  {companiesCount ? Math.round((count / companiesCount) * 100) : 0}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
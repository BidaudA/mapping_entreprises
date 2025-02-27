import React from 'react';
import { X, Database, Code2, Cloud, PieChart } from 'lucide-react';
import { Company } from '../../types';

interface CompanyListingModalProps {
  isOpen: boolean;
  onClose: () => void;
  companies: Company[];
  title: string;
  techType: 'backend' | 'frontend' | 'cloud' | 'distribution';
  techName: string;
}

export default function CompanyListingModal({
  isOpen,
  onClose,
  companies,
  title,
  techType,
  techName
}: CompanyListingModalProps) {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (techType) {
      case 'backend':
        return <Database className="w-5 h-5 text-green-600" />;
      case 'frontend':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-purple-600" />;
      case 'distribution':
        return <PieChart className="w-5 h-5 text-indigo-600" />;
    }
  };

  const getColorClass = () => {
    switch (techType) {
      case 'backend':
        return 'bg-green-100 text-green-800';
      case 'frontend':
        return 'bg-blue-100 text-blue-800';
      case 'cloud':
        return 'bg-purple-100 text-purple-800';
      case 'distribution':
        return 'bg-indigo-100 text-indigo-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            {getIcon()}
            {title} ({companies.length})
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {companies.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Aucune entreprise trouvée</p>
          </div>
        ) : (
          <div className="space-y-4">
            {companies.map((company) => (
              <div key={company.id} className="p-4 border rounded-lg">
                <h3 className="font-bold text-lg">{company.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{company.description}</p>
                <p className="text-gray-500 text-sm mb-3">{company.adress}</p>
                
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${getColorClass()}`}>
                    {techName}
                  </span>
                </div>
                
                {techType !== 'backend' && company.technologies_back.length > 0 && (
                  <div className="mb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Database className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium">Backend:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {company.technologies_back.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {techType !== 'frontend' && company.technologies_front.length > 0 && (
                  <div className="mb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Code2 className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium">Frontend:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {company.technologies_front.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {techType !== 'cloud' && company.technologies_cloud.length > 0 && (
                  <div className="mb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Cloud className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium">Cloud & Data:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {company.technologies_cloud.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
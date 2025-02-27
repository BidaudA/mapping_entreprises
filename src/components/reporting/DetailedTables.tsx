import React, { useState } from 'react';
import { Database, Code2, Cloud } from 'lucide-react';
import TechnologyTable from './TechnologyTable';
import { TechStats } from '../../hooks/useReportingData';
import { Company } from '../../types';
import CompanyListingModal from './CompanyListingModal';

interface DetailedTablesProps {
  techStats: TechStats;
  companiesCount: number;
  companies: Company[];
}

export default function DetailedTables({ 
  techStats, 
  companiesCount,
  companies 
}: DetailedTablesProps) {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedTechType, setSelectedTechType] = useState<'backend' | 'frontend' | 'cloud'>('backend');
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTechClick = (tech: string, type: 'backend' | 'frontend' | 'cloud') => {
    setSelectedTech(tech);
    setSelectedTechType(type);
    
    // Filtrer les entreprises en fonction de la technologie sélectionnée
    let filtered: Company[] = [];
    
    if (type === 'backend') {
      filtered = companies.filter(company => 
        company.technologies_back.includes(tech)
      );
    } else if (type === 'frontend') {
      filtered = companies.filter(company => 
        company.technologies_front.includes(tech)
      );
    } else if (type === 'cloud') {
      filtered = companies.filter(company => 
        company.technologies_cloud.includes(tech)
      );
    }
    
    setFilteredCompanies(filtered);
    setIsModalOpen(true);
  };

  return (
    <div className="mt-8 bg-gray-50 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Détail des technologies par catégorie</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TechnologyTable 
          title="Backend"
          icon={Database}
          iconColor="text-green-600"
          technologies={techStats.backend}
          companiesCount={companiesCount}
          onTechClick={(tech) => handleTechClick(tech, 'backend')}
        />
        
        <TechnologyTable 
          title="Frontend"
          icon={Code2}
          iconColor="text-blue-600"
          technologies={techStats.frontend}
          companiesCount={companiesCount}
          onTechClick={(tech) => handleTechClick(tech, 'frontend')}
        />
        
        <TechnologyTable 
          title="Cloud & Data"
          icon={Cloud}
          iconColor="text-purple-600"
          technologies={techStats.cloud}
          companiesCount={companiesCount}
          onTechClick={(tech) => handleTechClick(tech, 'cloud')}
        />
      </div>

      {isModalOpen && (
        <CompanyListingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          companies={filteredCompanies}
          title={`Entreprises utilisant ${selectedTech}`}
          techType={selectedTechType}
          techName={selectedTech || ''}
        />
      )}
    </div>
  );
}
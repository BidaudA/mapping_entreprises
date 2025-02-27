import React, { useState } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Company } from '../../types';
import CompanyListingModal from './CompanyListingModal';

interface ChartCardProps {
  title: string;
  icon: typeof LucideIcon;
  iconColor: string;
  chartType: 'bar' | 'pie' | 'doughnut';
  data: any;
  options: any;
  hasData: boolean;
  companies: Company[];
  techType: 'backend' | 'frontend' | 'cloud' | 'distribution';
}

export default function ChartCard({ 
  title, 
  icon: Icon, 
  iconColor, 
  chartType, 
  data, 
  options, 
  hasData,
  companies,
  techType
}: ChartCardProps) {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChartClick = (event: any, elements: any) => {
    if (elements.length === 0) return;
    
    const clickedIndex = elements[0].index;
    const selectedLabel = data.labels[clickedIndex];
    setSelectedTech(selectedLabel);
    
    // Filtrer les entreprises en fonction de la technologie sélectionnée
    let filtered: Company[] = [];
    
    if (techType === 'backend') {
      filtered = companies.filter(company => 
        company.technologies_back.includes(selectedLabel)
      );
    } else if (techType === 'frontend') {
      filtered = companies.filter(company => 
        company.technologies_front.includes(selectedLabel)
      );
    } else if (techType === 'cloud') {
      filtered = companies.filter(company => 
        company.technologies_cloud.includes(selectedLabel)
      );
    } else if (techType === 'distribution') {
      // Pour le graphique de distribution, on filtre par catégorie
      if (selectedLabel === 'Backend') {
        filtered = companies.filter(company => company.technologies_back.length > 0);
      } else if (selectedLabel === 'Frontend') {
        filtered = companies.filter(company => company.technologies_front.length > 0);
      } else if (selectedLabel === 'Cloud & Data') {
        filtered = companies.filter(company => company.technologies_cloud.length > 0);
      }
    }
    
    setFilteredCompanies(filtered);
    setIsModalOpen(true);
  };

  // Ajouter l'événement onClick aux options du graphique
  const chartOptions = {
    ...options,
    onClick: handleChartClick
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Icon className={`w-5 h-5 ${iconColor}`} />
        {title}
      </h2>
      <div className="h-64 cursor-pointer">
        {hasData ? (
          <>
            {chartType === 'bar' && <Bar data={data} options={chartOptions} />}
            {chartType === 'pie' && <Pie data={data} options={chartOptions} />}
            {chartType === 'doughnut' && <Doughnut data={data} options={chartOptions} />}
            <p className="text-xs text-center mt-2 text-gray-500">Cliquez sur un élément pour voir les entreprises</p>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Aucune donnée disponible</p>
          </div>
        )}
      </div>

      {isModalOpen && (
        <CompanyListingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          companies={filteredCompanies}
          title={`Entreprises utilisant ${selectedTech}`}
          techType={techType}
          techName={selectedTech || ''}
        />
      )}
    </div>
  );
}
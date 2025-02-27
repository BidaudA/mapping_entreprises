import React from 'react';
import StatisticsCard from './StatisticsCard';
import { TechStats } from '../../hooks/useReportingData';

interface GeneralStatsProps {
  companiesCount: number;
  techStats: TechStats;
  avgTechsPerCompany: number;
}

export default function GeneralStats({ 
  companiesCount, 
  techStats, 
  avgTechsPerCompany 
}: GeneralStatsProps) {
  const uniqueTechsCount = techStats.backend.length + techStats.frontend.length + techStats.cloud.length;
  
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Statistiques générales</h2>
      <div className="grid grid-cols-2 gap-4">
        <StatisticsCard title="Nombre d'entreprises" value={companiesCount} />
        <StatisticsCard title="Technologies uniques" value={uniqueTechsCount} />
        <StatisticsCard title="Technologies par entreprise" value={avgTechsPerCompany} />
      </div>
    </div>
  );
}
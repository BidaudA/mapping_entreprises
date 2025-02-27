import React from 'react';
import { Loader2, BarChart3, PieChart, Code2, Database, Cloud } from 'lucide-react';
import { useCompanies } from '../hooks/useCompanies';
import { useReportingData } from '../hooks/useReportingData';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Colors
} from 'chart.js';

// Components
import GeneralStats from '../components/reporting/GeneralStats';
import ChartCard from '../components/reporting/ChartCard';
import DetailedTables from '../components/reporting/DetailedTables';

// Enregistrer les composants Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Colors
);

export default function ReportingPage() {
  const { companies, loading, error } = useCompanies();
  const { 
    techStats, 
    chartData, 
    chartOptions, 
    barOptions, 
    avgTechsPerCompany 
  } = useReportingData(companies);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-red-50 text-red-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Erreur de chargement</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="flex items-center gap-2 text-blue-600">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Chargement des données...</span>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-indigo-600" />
          Reporting des technologies
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Statistiques générales */}
          <GeneralStats 
            companiesCount={companies.length}
            techStats={techStats}
            avgTechsPerCompany={avgTechsPerCompany}
          />

          {/* Répartition des technologies */}
          <ChartCard 
            title="Répartition des catégories de technologies"
            icon={PieChart}
            iconColor="text-indigo-600"
            chartType="doughnut"
            data={chartData.distribution}
            options={chartOptions}
            hasData={true}
            companies={companies}
            techType="distribution"
          />

          {/* Technologies Backend */}
          <ChartCard 
            title="Technologies Backend les plus utilisées"
            icon={Database}
            iconColor="text-green-600"
            chartType="bar"
            data={chartData.backend}
            options={barOptions}
            hasData={techStats.backend.length > 0}
            companies={companies}
            techType="backend"
          />

          {/* Technologies Frontend */}
          <ChartCard 
            title="Technologies Frontend les plus utilisées"
            icon={Code2}
            iconColor="text-blue-600"
            chartType="bar"
            data={chartData.frontend}
            options={barOptions}
            hasData={techStats.frontend.length > 0}
            companies={companies}
            techType="frontend"
          />

          {/* Technologies Cloud */}
          <ChartCard 
            title="Technologies Cloud les plus utilisées"
            icon={Cloud}
            iconColor="text-purple-600"
            chartType="pie"
            data={chartData.cloud}
            options={chartOptions}
            hasData={techStats.cloud.length > 0}
            companies={companies}
            techType="cloud"
          />
        </div>

        {/* Tableau détaillé des technologies */}
        <DetailedTables 
          techStats={techStats}
          companiesCount={companies.length}
          companies={companies}
        />
      </div>
    </main>
  );
}
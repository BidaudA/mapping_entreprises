import { useMemo } from 'react';
import { Company } from '../types';

export interface TechStats {
  backend: [string, number][];
  frontend: [string, number][];
  cloud: [string, number][];
  jobTypes: [string, number][];
}

export interface ChartData {
  backend: any;
  frontend: any;
  cloud: any;
  jobTypes: any;
  distribution: any;
}

export function useReportingData(companies: Company[]) {
  // Calculer les statistiques des technologies
  const techStats = useMemo<TechStats>(() => {
    if (!companies.length) return { backend: [], frontend: [], cloud: [], jobTypes: [] };

    // Compter les occurrences de chaque technologie
    const backendCount: Record<string, number> = {};
    const frontendCount: Record<string, number> = {};
    const cloudCount: Record<string, number> = {};
    const jobTypesCount: Record<string, number> = {};

    companies.forEach(company => {
      // Compter les technologies backend
      company.technologies_back.forEach(tech => {
        backendCount[tech] = (backendCount[tech] || 0) + 1;
      });

      // Compter les technologies frontend
      company.technologies_front.forEach(tech => {
        frontendCount[tech] = (frontendCount[tech] || 0) + 1;
      });

      // Compter les technologies cloud
      company.technologies_cloud.forEach(tech => {
        cloudCount[tech] = (cloudCount[tech] || 0) + 1;
      });

      // Compter les types de postes
      company.types_postes.forEach(type => {
        jobTypesCount[type] = (jobTypesCount[type] || 0) + 1;
      });
    });

    // Trier par nombre d'occurrences (du plus grand au plus petit)
    const sortByCount = (a: [string, number], b: [string, number]) => b[1] - a[1];

    const backendTechs = Object.entries(backendCount).sort(sortByCount);
    const frontendTechs = Object.entries(frontendCount).sort(sortByCount);
    const cloudTechs = Object.entries(cloudCount).sort(sortByCount);
    const jobTypes = Object.entries(jobTypesCount).sort(sortByCount);

    return {
      backend: backendTechs,
      frontend: frontendTechs,
      cloud: cloudTechs,
      jobTypes: jobTypes
    };
  }, [companies]);

  // Calculer le nombre d'entreprises par catégorie
  const companyCounts = useMemo(() => {
    const backendCompanies = companies.filter(company => company.technologies_back.length > 0).length;
    const frontendCompanies = companies.filter(company => company.technologies_front.length > 0).length;
    const cloudCompanies = companies.filter(company => company.technologies_cloud.length > 0).length;

    return {
      backend: backendCompanies,
      frontend: frontendCompanies,
      cloud: cloudCompanies
    };
  }, [companies]);

  // Préparer les données pour les graphiques
  const chartData = useMemo<ChartData>(() => {
    // Couleurs pour les graphiques
    const backendColors = ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'];
    const frontendColors = ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe'];
    const cloudColors = ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe'];
    const jobTypesColors = ['#f59e0b', '#fbbf24', '#fcd34d', '#fde68a', '#fef3c7'];

    // Graphique des technologies backend
    const backendData = {
      labels: techStats.backend.slice(0, 5).map(([tech]) => tech),
      datasets: [
        {
          label: 'Nombre d\'entreprises',
          data: techStats.backend.slice(0, 5).map(([, count]) => count),
          backgroundColor: backendColors,
          borderColor: backendColors.map(color => color),
          borderWidth: 1,
        },
      ],
    };

    // Graphique des technologies frontend
    const frontendData = {
      labels: techStats.frontend.slice(0, 5).map(([tech]) => tech),
      datasets: [
        {
          label: 'Nombre d\'entreprises',
          data: techStats.frontend.slice(0, 5).map(([, count]) => count),
          backgroundColor: frontendColors,
          borderColor: frontendColors.map(color => color),
          borderWidth: 1,
        },
      ],
    };

    // Graphique des technologies cloud
    const cloudData = {
      labels: techStats.cloud.slice(0, 5).map(([tech]) => tech),
      datasets: [
        {
          label: 'Nombre d\'entreprises',
          data: techStats.cloud.slice(0, 5).map(([, count]) => count),
          backgroundColor: cloudColors,
          borderColor: cloudColors.map(color => color),
          borderWidth: 1,
        },
      ],
    };

    // Graphique des types de postes
    const jobTypesData = {
      labels: techStats.jobTypes?.slice(0, 5).map(([type]) => type) || [],
      datasets: [
        {
          label: 'Nombre d\'entreprises',
          data: techStats.jobTypes?.slice(0, 5).map(([, count]) => count) || [],
          backgroundColor: jobTypesColors,
          borderColor: jobTypesColors.map(color => color),
          borderWidth: 1,
        },
      ],
    };

    // Graphique de répartition des catégories
    const distributionData = {
      labels: ['Backend', 'Frontend', 'Cloud & Data'],
      datasets: [{
        data: [
          companyCounts.backend,
          companyCounts.frontend,
          companyCounts.cloud
        ],
        backgroundColor: ['#10b981', '#3b82f6', '#8b5cf6'],
        borderColor: ['#10b981', '#3b82f6', '#8b5cf6'],
        borderWidth: 1
      }]
    };

    return {
      backend: backendData,
      frontend: frontendData,
      cloud: cloudData,
      jobTypes: jobTypesData,
      distribution: distributionData
    };
  }, [techStats, companyCounts]);

  // Calculer le nombre moyen de technologies par entreprise
  const avgTechsPerCompany = companies.length
    ? Math.round(
        (techStats.backend.reduce((acc, [, count]) => acc + count, 0) +
          techStats.frontend.reduce((acc, [, count]) => acc + count, 0) +
          techStats.cloud.reduce((acc, [, count]) => acc + count, 0)) /
          companies.length
      )
    : 0;

  // Options communes pour les graphiques
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw} entreprises`;
          }
        }
      }
    },
  };

  // Options spécifiques pour les graphiques en barres
  const barOptions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0
        }
      }
    }
  };

  return {
    techStats,
    chartData,
    chartOptions,
    barOptions,
    avgTechsPerCompany,
    companyCounts
  };
}
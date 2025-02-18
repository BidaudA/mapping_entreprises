import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import Map from '../components/Map';
import CompanyList from '../components/CompanyList';
import { Company } from '../types';
import { useCompanies } from '../hooks/useCompanies';

export default function HomePage() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const { companies, loading, error, refetch } = useCompanies();

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
          <span>Chargement des entreprises...</span>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
        <div className="md:col-span-1 overflow-hidden">
          <CompanyList
            companies={companies}
            onSelectCompany={setSelectedCompany}
          />
        </div>
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-4 h-full">
            <Map
              companies={companies}
              selectedCompany={selectedCompany}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
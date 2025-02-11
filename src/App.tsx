import React, { useState } from 'react';
import { MapPin, Loader2 } from 'lucide-react';
import Map from './components/Map';
import CompanyList from './components/CompanyList';
import { Company } from './types';
import { useCompanies } from './hooks/useCompanies';

function App() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const { companies, loading, error } = useCompanies();

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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <MapPin className="w-8 h-8 text-blue-600" />
            Entreprises Tech Bordeaux
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* On fixe la hauteur via un style inline (ou on peut aussi utiliser Tailwind : h-[calc(100vh-12rem)]) */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ height: 'calc(100vh - 12rem)' }}
        >
          <div className="md:col-span-1 overflow-y-auto">
            <CompanyList
              companies={companies}
              onSelectCompany={setSelectedCompany}
            />
          </div>

          <div className="md:col-span-2 h-full">
            {/* Remplacer h-1/6 par h-full pour remplir l’espace vertical restant */}
            <div className="bg-white rounded-lg shadow-lg p-4 h-full overflow-hidden">
              <Map companies={companies} selectedCompany={selectedCompany} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

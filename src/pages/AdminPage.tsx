import { Plus, Loader2 } from 'lucide-react';
import { useCompanies } from '../hooks/useCompanies';
import AdminCompanyList from '../components/AdminCompanyList.tsx';

export default function AdminPage() {
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
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Administration des entreprises</h1>
          <button
            onClick={() => {}} // Sera géré par AdminCompanyList
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Ajouter une entreprise
          </button>
        </div>
        <AdminCompanyList companies={companies} onRefresh={refetch}/>
      </div>
    </main>
  );
}
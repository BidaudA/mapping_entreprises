import { useState, useRef } from 'react';
import { Company } from '../types';
import { Building2, Code2, Cloud, Database, Briefcase, SlidersHorizontal } from 'lucide-react';

interface CompanyListProps {
  companies: Company[];
  onSelectCompany: (company: Company) => void;
}

export default function CompanyList({ companies, onSelectCompany }: CompanyListProps) {
  const [filters, setFilters] = useState({
    backend: '',
    frontend: '',
    cloud: ''
  });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Récupérer toutes les technologies uniques
  const allTechnologies = {
    backend: Array.from(new Set(companies.flatMap(c => c.technologies_back))).filter(Boolean).sort(),
    frontend: Array.from(new Set(companies.flatMap(c => c.technologies_front))).filter(Boolean).sort(),
    cloud: Array.from(new Set(companies.flatMap(c => c.technologies_cloud))).filter(Boolean).sort()
  };

  // Filtrer les entreprises en fonction des technologies sélectionnées
  const filteredCompanies = companies.filter(company => {
    const backendMatch = !filters.backend || company.technologies_back.includes(filters.backend);
    const frontendMatch = !filters.frontend || company.technologies_front.includes(filters.frontend);
    const cloudMatch = !filters.cloud || company.technologies_cloud.includes(filters.cloud);
    return backendMatch && frontendMatch && cloudMatch;
  });

  // Calculer le nombre de filtres actifs
  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 h-full overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Building2 className="w-6 h-6" />
          Entreprises ({filteredCompanies.length})
        </h2>
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className={`${isFiltersOpen ? 'bg-blue-200' : 'bg-gray-100'} flex items-center gap-1 px-3 py-1 text-sm font-medium text-gray-700 hover:text-gray-900  rounded-full transition-colors`}
        >          
          <SlidersHorizontal />
          Filtres {activeFiltersCount > 0 && `(${activeFiltersCount})`}
        </button>
      </div>

      {/* Conteneur des filtres avec animation */}
      <div 
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ 
          maxHeight: isFiltersOpen ? filterRef.current?.scrollHeight + 'px' : '0'
        }}
      >
        <div ref={filterRef} className="mb-6 space-y-3 p-3 bg-gray-50 rounded-lg">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Database className="w-4 h-4" />
              Backend
            </label>
            <select
              value={filters.backend}
              onChange={(e) => setFilters(prev => ({ ...prev, backend: e.target.value }))}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
            >
              <option value="">Tous</option>
              {allTechnologies.backend.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Code2 className="w-4 h-4" />
              Frontend
            </label>
            <select
              value={filters.frontend}
              onChange={(e) => setFilters(prev => ({ ...prev, frontend: e.target.value }))}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
            >
              <option value="">Tous</option>
              {allTechnologies.frontend.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Cloud className="w-4 h-4" />
              Cloud & Data
            </label>
            <select
              value={filters.cloud}
              onChange={(e) => setFilters(prev => ({ ...prev, cloud: e.target.value }))}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
            >
              <option value="">Tous</option>
              {allTechnologies.cloud.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Liste des entreprises */}
      <div className="space-y-4">
        {filteredCompanies.map((company) => (
          <div
            key={company.id}
            className="p-4 border rounded-lg hover:border-blue-500 cursor-pointer transition-colors"
            onClick={() => onSelectCompany(company)}
          >
            <h3 className="font-bold text-lg">{company.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{company.description}</p>
            <p className="text-gray-500 text-sm mb-3">{company.adress}</p>
            
            {company.types_postes.length > 0 && (
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium">Types de postes:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {company.types_postes.map((poste) => (
                    <span
                      key={poste}
                      className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full"
                    >
                      {poste}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {company.technologies_back.length > 0 && (
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

            {company.technologies_front.length > 0 && (
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

            {company.technologies_cloud.length > 0 && (
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
    </div>
  );
}
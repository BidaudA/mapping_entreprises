import { Company } from '../types';
import { Building2, Code2, Cloud, Database, Briefcase } from 'lucide-react';

interface CompanyListProps {
  companies: Company[];
  onSelectCompany: (company: Company) => void;
}

export default function CompanyList({ companies, onSelectCompany }: CompanyListProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 h-full overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Building2 className="w-6 h-6" />
        Entreprises
      </h2>
      <div className="space-y-4">
        {companies.map((company) => (
          <div
            key={company.id}
            className="p-4 border rounded-lg hover:border-blue-500 cursor-pointer transition-colors"
            onClick={() => onSelectCompany(company)}
          >
            <h3 className="font-bold text-lg">{company.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{company.description}</p>
            
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
                  <span className="text-sm font-medium">Cloud:</span>
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
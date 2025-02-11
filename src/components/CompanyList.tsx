import { Company } from '../types';
import { Building2, Code2 } from 'lucide-react';

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
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium">Technologies Back-End:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {company.technologies_back.map((tech_back) => (
                <span
                  key={tech_back}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  {tech_back}
                </span>
              ))}
            </div>    
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium">Technologies Front-End:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {company.technologies_front.map((tech_front) => (
                <span
                  key={tech_front}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  {tech_front}
                </span>
              ))}
            </div>        
          </div>
        ))}
      </div>
    </div>
  );
}
import { Company } from '../types';
import AdminMenu from './AdminMenu';

interface AdminCompanyListProps {
  companies: Company[];
  onRefresh: () => Promise<void>;
}

export default function AdminCompanyList({ companies, onRefresh }: AdminCompanyListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-1/6 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Entreprise
            </th>
            <th className="w-1/6 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Domaine
            </th>
            <th className="w-1/6 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Adresse
            </th>
            <th className="w-1/6 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Technologies
            </th>
            <th className="w-1/6 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Types de postes
            </th>
            <th className="w-1/6 px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {companies.map((company) => (
            <tr key={company.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{company.name}</div>
                <div className="text-sm text-gray-500">{company.description}</div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                <div className="text-sm text-gray-900">{company.domain}</div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                <div className="text-sm text-gray-900">{company.adress}</div>
              </td>
              <td className="px-4 py-2">
                <div className="flex flex-wrap gap-1">
                  {[...company.technologies_back, ...company.technologies_front, ...company.technologies_cloud]
                    .slice(0, 3)
                    .map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  {[...company.technologies_back, ...company.technologies_front, ...company.technologies_cloud].length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                      +{[...company.technologies_back, ...company.technologies_front, ...company.technologies_cloud].length - 3}
                    </span>
                  )}
                </div>
              </td>
              <td className="px-4 py-2">
                <div className="flex flex-wrap gap-1">
                  {company.types_postes.slice(0, 2).map((type) => (
                    <span
                      key={type}
                      className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800"
                    >
                      {type}
                    </span>
                  ))}
                  {company.types_postes.length > 2 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                      +{company.types_postes.length - 2}
                    </span>
                  )}
                </div>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-right text-sm font-medium">
                <AdminMenu company={company} onUpdate={onRefresh}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
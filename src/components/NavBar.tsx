import { BarChart3, MapPin, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';
  const isReportingPage = location.pathname === '/reporting';

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <MapPin className="w-8 h-8 text-blue-600" />
            Entreprises Tech Bordeaux
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/reporting"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isReportingPage 
                  ? 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <BarChart3 className={`w-5 h-5 ${isReportingPage ? 'text-indigo-600' : 'text-gray-500'}`} />
              <span className="font-medium">
                Reporting
              </span>
            </Link>
            <Link
              to="/admin"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isAdminPage 
                  ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Settings className={`w-5 h-5 ${isAdminPage ? 'text-blue-600' : 'text-gray-500'}`} />
              <span className="font-medium">
                Administration
              </span>
            </Link>
            {(isAdminPage || isReportingPage) && (
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="font-medium">
                  Retour à l'accueil
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
import { useState, useCallback } from 'react';
import { Settings, Plus, Edit, Trash2, Database, Code2, Cloud, Loader2 } from 'lucide-react';
import { Company } from '../types';
import { companiesApi } from '../services/api';

interface AdminMenuProps {
  company: Company | null;
  onUpdate: () => Promise<void>;
}

const availableTechnologies = {
  backend: ['Node.js', 'Python', 'Java', 'PHP', 'Ruby', 'Go', 'C#', '.NET'],
  frontend: ['React', 'Vue.js', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js'],
  cloud: ['AWS', 'Azure', 'GCP', 'Heroku', 'DigitalOcean', 'Vercel']
};

export default function AdminMenu({ company, onUpdate }: AdminMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState<Partial<Company>>(company || {
    technologies_back: [],
    technologies_front: [],
    technologies_cloud: []
  });

  const handleDelete = async () => {
    if (!company) return;
    
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette entreprise ?')) {
      try {
        setIsSaving(true);
        await companiesApi.delete(company.id);
        await onUpdate();
        setIsOpen(false);
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        alert('Erreur lors de la suppression de l\'entreprise');
      } finally {
        setIsSaving(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSaving(true);
      const dataToSend = {
        name: formData.name,
        description: formData.description,
        address: formData.address,
        latitude: formData.location?.lat,
        longitude: formData.location?.lng,
        technologies_back: formData.technologies_back || [],
        technologies_front: formData.technologies_front || [],
        technologies_cloud: formData.technologies_cloud || [],
      };
      console.log(dataToSend);
      if (company) {
        await companiesApi.update(company.id, dataToSend);
      } else {
        await companiesApi.create(dataToSend);
      }

      await onUpdate();
      setIsEditing(false);
      setIsOpen(false);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      alert('Erreur lors de la sauvegarde de l\'entreprise');
    } finally {
      setIsSaving(false);
    }
  };

  const handleTechnologyChange = useCallback((type: 'backend' | 'frontend' | 'cloud', tech: string) => {
    const techTypeMap = {
      backend: 'technologies_back',
      frontend: 'technologies_front',
      cloud: 'technologies_cloud'
    } as const;

    const key = techTypeMap[type];
    const currentTechs = formData[key] as string[] || [];
    
    setFormData(prev => ({
      ...prev,
      [key]: currentTechs.includes(tech)
        ? currentTechs.filter(t => t !== tech)
        : [...currentTechs, tech]
    }));
  }, [formData]);

  const initializeFormData = useCallback(() => {
    if (company) {
      // Si on modifie une entreprise existante, on initialise avec toutes ses données
      setFormData({
        name: company.name,
        description: company.description,
        address: company.address,
        location: company.location,
        technologies_back: [...company.technologies_back],
        technologies_front: [...company.technologies_front],
        technologies_cloud: [...company.technologies_cloud],
      });
    } else {
      // Si c'est une nouvelle entreprise, on initialise avec des tableaux vides
      setFormData({
        technologies_back: [],
        technologies_front: [],
        technologies_cloud: []
      });
    }
  }, [company]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        disabled={isSaving}
      >
        <Settings className="w-5 h-5 text-gray-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 py-2">
          <button
            onClick={() => {
              setIsEditing(true);
              initializeFormData();
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            disabled={isSaving}
          >
            <Edit className="w-4 h-4" />
            Modifier
          </button>
          <button
            onClick={handleDelete}
            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
            disabled={isSaving}
          >
            <Trash2 className="w-4 h-4" />
            Supprimer
          </button>
        </div>
      )}

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-6 text-left">
              {company ? 'Modifier l\'entreprise' : 'Nouvelle entreprise'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 text-left">
                  Nom de l'entreprise
                </label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 ease-in-out hover:border-blue-300"
                  required
                  placeholder="Entrez le nom de l'entreprise"
                  disabled={isSaving}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 text-left">
                  Description
                </label>
                <textarea
                  value={formData.description || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 ease-in-out hover:border-blue-300"
                  rows={3}
                  placeholder="Décrivez l'entreprise"
                  disabled={isSaving}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 text-left">
                  Adresse
                </label>
                <input
                  type="text"
                  value={formData.address || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 ease-in-out hover:border-blue-300"
                  placeholder="Adresse complète"
                  disabled={isSaving}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
              <div className='space-y-2'>
                  <label className="block text-sm font-semibold text-gray-700 text-left">Latitude</label>
                  <input
                    type="number"
                    step="any"
                    value={formData.location?.lat || ''}
                    onChange={(e) => setFormData(prev => ({
                        ...prev,
                        location: { ...prev.location, lat: parseFloat(e.target.value), lng: prev.location?.lng ?? 0 }
                    }))}
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 ease-in-out hover:border-blue-300"
                    disabled={isSaving}
                  />
                </div>
                <div className='space-y-2'>
                  <label className="block text-sm font-semibold text-gray-700 text-left">Longitude</label>
                  <input
                    type="number"
                    step="any"
                    value={formData.location?.lng || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      location: { ...prev.location, lng: parseFloat(e.target.value), lat: prev.location?.lat ?? 0 }
                    }))}
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 ease-in-out hover:border-blue-300"
                    disabled={isSaving} />
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-6">
                {/* Backend Technologies */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Database className="w-4 h-4" />
                    Technologies Backend
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableTechnologies.backend.map(tech => (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleTechnologyChange('backend', tech)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          formData.technologies_back?.includes(tech)
                            ? 'bg-green-100 text-green-800 hover:bg-green-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        disabled={isSaving}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Frontend Technologies */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Code2 className="w-4 h-4" />
                    Technologies Frontend
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableTechnologies.frontend.map(tech => (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleTechnologyChange('frontend', tech)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          formData.technologies_front?.includes(tech)
                            ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        disabled={isSaving}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cloud Technologies */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Cloud className="w-4 h-4" />
                    Technologies Cloud & Data
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableTechnologies.cloud.map(tech => (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleTechnologyChange('cloud', tech)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          formData.technologies_cloud?.includes(tech)
                            ? 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        disabled={isSaving}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  disabled={isSaving}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sauvegarde...
                    </>
                  ) : (
                    'Sauvegarder'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
import { useState, useCallback, useEffect } from 'react';
import { Settings, Edit, Trash2, Database, Code2, Cloud, Loader2 } from 'lucide-react';
import { Company } from '../types';
import { companiesApi, technologiesApi } from '../services/api';

interface AdminMenuProps {
  company: Company | null;
  onUpdate: () => Promise<void>;
}

interface Technology {
  id: number;
  name: string;
  type: string;
}

interface AvailableTechnologies {
  Backend: Technology[];
  Frontend: Technology[];
  Cloud: Technology[];
}

export default function AdminMenu({ company, onUpdate }: AdminMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(company === null);
  const [isSaving, setIsSaving] = useState(false);
  const [availableTechnologies, setAvailableTechnologies] = useState<AvailableTechnologies>({
    Backend: [],
    Frontend: [],
    Cloud: []
  });
  const [formData, setFormData] = useState<Partial<Company>>(company || {
    technologies_back: [],
    technologies_front: [],
    technologies_cloud: []
  });

  // Fetch available technologies
  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const technologies = await technologiesApi.getAll();
        const grouped: AvailableTechnologies = {
          Backend: [],
          Frontend: [],
          Cloud: []
        };

        technologies.forEach((tech: Technology) => {
          grouped[tech.type as keyof AvailableTechnologies].push(tech);
        });
        
        setAvailableTechnologies(grouped);
      } catch (error) {
        console.error('Error fetching technologies:', error);
      }
    };

    fetchTechnologies();
  }, []);

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
        adress: formData.adress,
        latitude: formData.location?.lat,
        longitude: formData.location?.lng,
        technologies_back: formData.technologies_back || [],
        technologies_front: formData.technologies_front || [],
        technologies_cloud: formData.technologies_cloud || [],
        domain : formData.domain
        
      };

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

  const handleTechnologyChange = useCallback((type: 'Backend' | 'Frontend' | 'Cloud', techId: string) => {
    const techTypeMap = {
      Backend: 'technologies_back',
      Frontend: 'technologies_front',
      Cloud: 'technologies_cloud'
    } as const;

    const key = techTypeMap[type];
    const currentTechs = formData[key] as string[] || [];
    
    setFormData(prev => ({
      ...prev,
      [key]: currentTechs.includes(techId)
        ? currentTechs.filter(t => t !== techId)
        : [...currentTechs, techId]
    }));
  }, [formData]);

  const initializeFormData = useCallback(() => {
    if (company) {
      setFormData({
        name: company.name,
        description: company.description,
        adress: company.adress,
        location: company.location,
        technologies_back: company.technologies_back.map(tech => 
          typeof tech === 'string' ? tech : ''
        ),
        technologies_front: company.technologies_front.map(tech => 
          typeof tech === 'string' ? tech : ''
        ),
        technologies_cloud: company.technologies_cloud.map(tech => 
          typeof tech === 'string' ? tech : ''
        ),
        domain: company.domain
      });
    } else {
      setFormData({
        name: '',
        description: '',
        adress: '',
        location: { lat: 44.837789, lng: -0.579180 }, // Coordonnées par défaut pour Bordeaux
        technologies_back: [],
        technologies_front: [],
        technologies_cloud: [],
        domain: ''
      });
    }
  }, [company]);

  useEffect(() => {
    initializeFormData();
  }, [initializeFormData]);

  return (
    <div className="relative">
      {company && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          disabled={isSaving}
        >
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      )}

      {isOpen && company && (
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
                  value={formData.adress || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, adress: e.target.value }))}
                  className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 ease-in-out hover:border-blue-300"
                  placeholder="Adresse complète"
                  disabled={isSaving}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 text-left">
                  Domaine
                </label>
                <input
                  type="text"
                  value={formData.domain || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                  className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 ease-in-out hover:border-blue-300"
                  placeholder="Domaine (IT/Industrie)"
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
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 ease-in-out hover:border-blue-300" />
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
                    {availableTechnologies.Backend.map(tech => (
                      <button
                        key={tech.id}
                        type="button"
                        onClick={() => handleTechnologyChange('Backend', tech.name)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          formData.technologies_back?.includes(tech.name)
                            ? 'bg-green-100 text-green-800 hover:bg-green-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        disabled={isSaving}
                      >
                        {tech.name}
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
                    {availableTechnologies.Frontend.map(tech => (
                      <button
                        key={tech.id}
                        type="button"
                        onClick={() => handleTechnologyChange('Frontend', tech.name)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          formData.technologies_front?.includes(tech.name)
                            ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        disabled={isSaving}
                      >
                        {tech.name}
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
                    {availableTechnologies.Cloud.map(tech => (
                      <button
                        key={tech.id}
                        type="button"
                        onClick={() => handleTechnologyChange('Cloud', tech.name)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          formData.technologies_cloud?.includes(tech.name)
                            ? 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        disabled={isSaving}
                      >
                        {tech.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    if (!company) {
                      onUpdate();
                    }
                  }}
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
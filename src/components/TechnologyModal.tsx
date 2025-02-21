import { useState } from 'react';
import { Database, Code2, Cloud, Loader2, X } from 'lucide-react';
import { technologiesApi } from '../services/api';

interface TechnologyModalProps {
  onClose: () => void;
  onUpdate: () => Promise<void>;
}

export default function TechnologyModal({ onClose, onUpdate }: TechnologyModalProps) {
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    type: 'backend' as 'backend' | 'frontend' | 'cloud'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSaving(true);
      await technologiesApi.create(formData);
      await onUpdate();
      onClose();
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      alert('Erreur lors de la sauvegarde de la technologie');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Ajouter une technologie</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Nom de la technologie
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 ease-in-out hover:border-blue-300"
              required
              placeholder="Ex: React, Node.js, AWS..."
              disabled={isSaving}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Type de technologie
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, type: 'backend' }))}
                className={`flex items-center justify-center gap-2 p-3 rounded-lg transition-colors ${
                  formData.type === 'backend'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Database className="w-4 h-4" />
                Backend
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, type: 'frontend' }))}
                className={`flex items-center justify-center gap-2 p-3 rounded-lg transition-colors ${
                  formData.type === 'frontend'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Code2 className="w-4 h-4" />
                Frontend
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, type: 'cloud' }))}
                className={`flex items-center justify-center gap-2 p-3 rounded-lg transition-colors ${
                  formData.type === 'cloud'
                    ? 'bg-purple-100 text-purple-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Cloud className="w-4 h-4" />
                Cloud
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
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
                'Ajouter'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
import { useState, useEffect, useCallback, useRef } from 'react';
import { Company } from '../types';
import { companiesApi } from '../services/api';

export function useCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchCompanies = useCallback(async () => {
    // Cancel any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller for this request
    abortControllerRef.current = new AbortController();

    try {
      setLoading(true);
      const response = await companiesApi.getAll();
      const parsedCompanies = response
        .filter((row: any) => row.id) // Filtrer les lignes invalides
        .map((row: any) => ({
          id: parseInt(row.id),
          name: row.name ? row.name.replace(',','é') : '',
          description: row.description || '',
          technologies_back: row.technologies_back ? row.technologies_back : [],
          technologies_front: row.technologies_front ? row.technologies_front : [],
          technologies_cloud: row.technologies_cloud ? row.technologies_cloud : [],
          types_postes: row.types_postes ? row.types_postes : [],
          location: {
            lat: parseFloat(row.latitude) || 0,
            lng: parseFloat(row.longitude) || 0
          },
            address: row.adress || ''
          }));
      setCompanies(parsedCompanies);
      setError(null);
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        return; // Ignore abort errors
      }
      console.error('Error fetching companies:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCompanies();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchCompanies]);

  const refetch = useCallback(async () => {
    await fetchCompanies();
  }, [fetchCompanies]);

  return { companies, loading, error, refetch };
}
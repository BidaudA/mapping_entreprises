import { useState, useEffect } from 'react';
//import Papa from 'papaparse';
import { Company } from '../types';
import axios from 'axios';

export function useCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    async function loadCompanies() {
      try {
      axios.get('http://localhost:3000/api/companies')
        .then(response => {
          console.log(response.data)
        const parsedCompanies = response.data
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
          setLoading(false);
          
        })
        .catch(err => {
          setError(err instanceof Error ? err.message : 'Une erreur est survenue');
          setLoading(false);
      });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        setLoading(false);
      }
    }

    loadCompanies();
  }, []);

  return { companies, loading, error };
}
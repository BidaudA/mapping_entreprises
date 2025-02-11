import { useState, useEffect, SetStateAction } from 'react';
import Papa from 'papaparse';
import { Company } from '../types';

export function useCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCompanies() {
      try {
        const response = await fetch('/src/data/companies.csv');
        const csvText = await response.text();
        Papa.parse(csvText, {
          header: true,
          delimiter: ';',
          complete: (results) => {
            const parsedCompanies = results.data.map((row: any) => ({
              id: parseInt(row.id),
              name: row.Entreprise || '',
              description: row.Secteur || '',
              address: row.Adresse || '',
              location: {
                lat: parseFloat(row.Latitude) || 0,
                lng: parseFloat(row.Longitude) || 0
              },
              technologies_back: row.Technologies_Backend ? row.Technologies_Backend.split(',') : [],
              technologies_front: row.Technologies_Frontend ? row.Technologies_Frontend.split(',') : [],
              technologies_cloud: row.Technologies_Cloud ? row.Technologies_Cloud.split(',') : [],
              type_poste : row.Types_Postes,
              
              
            }));
            setCompanies(parsedCompanies);
            setLoading(false);
          },
          error: (error: { message: SetStateAction<string | null>; }) => {
            setError(error.message);
            setLoading(false);
          }
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
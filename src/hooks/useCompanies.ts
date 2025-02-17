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
        // const response = await fetch('/src/data/companies.csv');
        // const csvText = await response.text();
        
        // Papa.parse(csvText, {
        //   header: true,
        //   delimiter: ';',
        //   skipEmptyLines: true,
        //   complete: (results) => {
        //     const parsedCompanies = results.data
        //       .filter((row: any) => row.Id) // Filtrer les lignes invalides
        //       .map((row: any) => ({
        //         id: parseInt(row.Id),
        //         name: row.Entreprise || '',
        //         description: row.Secteur || '',
        //         technologies_back: row.Technologies_Backend ? row.Technologies_Backend.split(',').map((t: string) => t.trim()) : [],
        //         technologies_front: row.Technologies_Frontend ? row.Technologies_Frontend.split(',').map((t: string) => t.trim()) : [],
        //         technologies_cloud: row.Technologies_Cloud_Data ? row.Technologies_Cloud_Data.split(',').map((t: string) => t.trim()) : [],
        //         types_postes: row.Types_Postes ? row.Types_Postes.split(',').map((t: string) => t.trim()) : [],
        //         location: {
        //           lat: parseFloat(row.Latitude) || 0,
        //           lng: parseFloat(row.Longitude) || 0
        //         },
        //         address: row.Adresse || ''
        //       }));
        //     setCompanies(parsedCompanies);
        //     setLoading(false);
        //   },
        //   error: (error) => {
        //     setError(error.message);
        //     setLoading(false);
        //   }
        // });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        setLoading(false);
      }
    }

    loadCompanies();
  }, []);

  return { companies, loading, error };
}
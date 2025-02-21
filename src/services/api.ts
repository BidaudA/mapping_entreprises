import axios from 'axios';
import { Company, Technology } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
});

export const companiesApi = {
  getAll: async () => {
    const response = await api.get<Company[]>('/companies');
    return response.data;
  },

  create: async (company: Partial<Company>) => {
    const response = await api.post<Company>('/companies', company);
    return response.data;
  },

  update: async (id: number, company: Partial<Company>) => {
    const response = await api.put<Company>(`/companies/${id}`, company);
    return response.data;
  },

  delete: async (id: number) => {
    await api.delete(`/companies/${id}`);
  },
};

export const technologiesApi = {
  getAll: async () => {
    const response = await api.get<Technology[]>('/technologies');
    return response.data;
  },

  create: async (technology: Partial<Technology>) => {
    const response = await api.post<Technology>('/technologies', technology);
    return response.data;
  },

  delete: async (technology: string) => {
    await api.delete(`/technologies/${technology}`);
  },

  update: async (oldTechnology: string, newTechnology: string) => {
    await api.put(`/technologies/${oldTechnology}`, { technology: newTechnology });
  },

  deleteAll: async () => {
    await api.delete('/technologies');
  },


  getByType: async (type: string) => {
    const response = await api.get<string[]>(`/technologies/${type}`);
    return response.data;
  },
}
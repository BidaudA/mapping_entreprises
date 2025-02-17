import axios from 'axios';
import { Company } from '../types';

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
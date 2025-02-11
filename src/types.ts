export interface Company {
  id: number;
  name: string;
  description: string;
  technologies_back: string[];  
  technologies_front: string[];  
  technologies_cloud: string[];
  type_poste: string[];
  location: {
    lat: number;
    lng: number;
  };
  address: string;
}
export interface Company {
  id: number;
  name: string;
  description: string;
  technologies_back: string[];
  technologies_front: string[];
  technologies_cloud: string[];
  types_postes: string[];
  location: {
    lat: number;
    lng: number;
  };
  adress: string;
  domain: string;
}

export interface Technology {
  id: number;
  name: string;
  type: string;
}

export interface AvailableTechnologies {
  backend: Technology[];
  frontend: Technology[];
  cloud: Technology[];
}
import { Company } from '../types';

export const companies: Company[] = [
  {
    id: 1,
    name: "Digital Solutions Bordeaux",
    description: "Agence de développement web et mobile",
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    location: {
      lat: 44.837789,
      lng: -0.579180
    },
    address: "12 Cours de l'Intendance, 33000 Bordeaux"
  },
  {
    id: 2,
    name: "BordeauxTech Innovation",
    description: "Studio de développement logiciel",
    technologies: ["Python", "Django", "React", "Docker"],
    location: {
      lat: 44.841225,
      lng: -0.573892
    },
    address: "45 Rue de Marseille, 33000 Bordeaux"
  },
  {
    id: 3,
    name: "WebAgency33",
    description: "Agence web full-service",
    technologies: ["Vue.js", "PHP", "Laravel", "MySQL"],
    location: {
      lat: 44.848684,
      lng: -0.571299
    },
    address: "87 Quai des Queyries, 33100 Bordeaux"
  }
];
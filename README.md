# Bordeaux Mapping Entreprises

## 📋 Description

**Bordeaux Mapping Entreprises** est une application web interactive qui cartographie et répertorie les entreprises technologiques de la région bordelaise. Elle permet de visualiser leur emplacement, les technologies qu'elles utilisent et les types de postes qu'elles proposent.

## 🚀 Fonctionnalités

### 🗺️ Carte interactive
- Visualisation des entreprises sur une carte de Bordeaux
- Marqueurs interactifs avec informations détaillées
- Sélection d'entreprise pour plus de détails

### 📊 Reporting et statistiques
- Visualisation des technologies les plus utilisées par catégorie (Backend, Frontend, Cloud & Data)
- Statistiques sur les types de postes
- Tableaux détaillés des technologies avec pourcentages d'adoption
- Graphiques interactifs (barres, camemberts, anneaux)

### ⚙️ Administration
- Ajout, modification et suppression d'entreprises
- Gestion des technologies par catégorie
- Interface intuitive pour la gestion des données

## 🛠️ Technologies utilisées

### Frontend
- **React** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **React Router** - Routage côté client
- **Leaflet/React-Leaflet** - Cartes interactives
- **Chart.js/React-Chartjs-2** - Visualisation de données
- **Lucide React** - Icônes SVG
- **Axios** - Client HTTP

## 📁 Structure du projet

```
├─ src/                    # Code frontend
│  ├── components/         # Composants React réutilisables
│  │   ├── AdminCompanyList.tsx
│  │   ├── AdminMenu.tsx
│  │   ├── CompanyList.tsx
│  │   ├── Map.tsx
│  │   ├── Navbar.tsx
│  │   ├── TechnologyModal.tsx
│  │   └── reporting/      # Composants spécifiques au reporting
│  │
│  ├── hooks/              # Hooks React personnalisés
│  │   ├── useCompanies.ts
│  │   └── useReportingData.ts
│  │
│  ├── pages/              # Pages de l'application
│  │   ├── AdminPage.tsx
│  │   ├── HomePage.tsx
│  │   └── ReportingPage.tsx
│  │
│  ├── services/           # Services et API
│  │   └── api.ts
│  │
│  ├── types.ts            # Types TypeScript
│  ├── App.tsx             # Composant racine
│  └── main.tsx            # Point d'entrée
│
├─ package.json            # Dépendances et scripts
└─ README.md               # Documentation
```

## 🚀 Installation et démarrage

### Prérequis
- Node.js (v16+)
- PostgreSQL

### Installation

1. Cloner le dépôt
```bash
git clone https://github.com/BidaudA/mapping_entreprises.git
cd mapping_entreprises
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer les variables d'environnement
Créez un fichier `.env` à la racine du projet avec les variables suivantes:
```
VITE_API_URL=http://localhost:3000/api
```
4. Démarrer l'application en mode développement
```bash
# Frontend
npm run dev
```

## 📝 Utilisation

### Page d'accueil
- Visualisez les entreprises sur la carte
- Filtrez les entreprises par technologies
- Cliquez sur une entreprise pour voir ses détails

### Page de reporting
- Consultez les statistiques générales
- Explorez les graphiques par catégorie de technologies
- Analysez les tableaux détaillés

### Page d'administration
- Ajoutez de nouvelles entreprises
- Modifiez les entreprises existantes
- Ajoutez de nouvelles technologies
- Supprimez des entreprises
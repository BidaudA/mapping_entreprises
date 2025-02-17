import { writeFileSync, createReadStream } from 'fs';
import csv from 'csv-parser';

const results = [];
const outputFilePath = './src/data/companies.sql'; // Remplacez par le chemin de votre fichier de sortie

// Fonction pour normaliser les clés des objets
const normalizeKeys = (obj) => {
  const normalizedObj = {};
  for (const key in obj) {
    const normalizedKey = key.replace(/'/g, '');
    normalizedObj[normalizedKey] = obj[key];
  }
  return normalizedObj;
};

// Fonction pour générer les requêtes d'insertion pour les technologies
const generateTechnologyQueries = (companyId, technologies, type) => {
  return technologies.split(',').map(tech => {
    tech = tech.trim().replace(/'/g, "''");
    return `
      INSERT INTO technologies (name, type) 
      VALUES ('${tech}', '${type}') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (${companyId}, (SELECT id FROM technologies WHERE name = '${tech}' AND type = '${type}'));
    `;
  }).join('\n');
};

// Fonction pour générer les requêtes d'insertion pour les types de postes
const generateJobTypeQueries = (companyId, jobTypes) => {
  return jobTypes.split(',').map(jobType => {
    jobType = jobType.trim().replace(/'/g, "''");
    return `
      INSERT INTO job_types (name) 
      VALUES ('${jobType}') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (${companyId}, (SELECT id FROM job_types WHERE name = '${jobType}'));
    `;
  }).join('\n');
};

// Fonction pour générer les requêtes d'insertion pour les domaines
const generateDomainQueries = (companyId, domain) => {
  domain = domain.trim().replace(/'/g, "''");
  return `
    INSERT INTO domain (name) 
    VALUES ('${domain}') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (${companyId}, (SELECT id FROM domain WHERE name = '${domain}'));
  `;
};

// Fonction pour écrire les requêtes dans un fichier
const writeQueriesToFile = (queries) => {
  writeFileSync(outputFilePath, queries.join('\n'), 'utf8');
};

createReadStream('./src/data/companies.csv') // Remplacez par le chemin de votre fichier CSV
  .pipe(csv({ separator: ';' })) // Utiliser le séparateur correct
  .on('data', (data) => {
    const normalizedData = normalizeKeys(data);
    results.push(normalizedData);
  })
  .on('end', () => {
    const queries = [];
    results.forEach((row, index) => {
      const companyId = index + 1; // Supposons que les IDs des entreprises sont séquentiels
      const name = row.name.replace(/'/g, "''");
      const description = row.domain.replace(/'/g, "''");
      const longitude = row.Longitude;
      const latitude = row.Latitude;
      const adress = row.adress.replace(/'/g, "''");
      const domain = row.domain.replace(/'/g, "''");

      const companyQuery = `
        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('${name}', '${description}', ${longitude}, ${latitude}, '${adress}', NULL, '${domain}');
      `;
      queries.push(companyQuery);

      const backendQueries = generateTechnologyQueries(companyId, row.Technologies_Backend, 'Backend');
      const frontendQueries = generateTechnologyQueries(companyId, row.Technologies_Frontend, 'Frontend');
      const cloudDataQueries = generateTechnologyQueries(companyId, row.Technologies_Cloud_Data, 'Cloud');
      const jobTypeQueries = generateJobTypeQueries(companyId, row.Types_Postes);
      const domainQueries = generateDomainQueries(companyId, row.domain);

      queries.push(backendQueries);
      queries.push(frontendQueries);
      queries.push(cloudDataQueries);
      queries.push(jobTypeQueries);
      queries.push(domainQueries);
    });

    writeQueriesToFile(queries);
    console.log(`Queries have been written to ${outputFilePath}`);
  });
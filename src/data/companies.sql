
        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Betclic', 'Paris sportifs en ligne', -0.550709, 44.863490, '117 Quai de Bacalan, 33300 Bordeaux', NULL, 'Paris sportifs en ligne');
      

      INSERT INTO technologies (name, type) 
      VALUES ('.NET Core', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (1, (SELECT id FROM technologies WHERE name = '.NET Core' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Node.js', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (1, (SELECT id FROM technologies WHERE name = 'Node.js' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('React', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (1, (SELECT id FROM technologies WHERE name = 'React' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('TypeScript', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (1, (SELECT id FROM technologies WHERE name = 'TypeScript' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('AWS', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (1, (SELECT id FROM technologies WHERE name = 'AWS' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (1, (SELECT id FROM job_types WHERE name = 'CDI'));
    

    INSERT INTO domain (name) 
    VALUES ('Paris sportifs en ligne') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (1, (SELECT id FROM domain WHERE name = 'Paris sportifs en ligne'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Cdiscount', 'E-commerce', -0.560925, 44.856867, '120-126 Quai de Bacalan, 33300 Bordeaux', NULL, 'E-commerce');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Java', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (2, (SELECT id FROM technologies WHERE name = 'Java' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Python', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (2, (SELECT id FROM technologies WHERE name = 'Python' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('React', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (2, (SELECT id FROM technologies WHERE name = 'React' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Angular', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (2, (SELECT id FROM technologies WHERE name = 'Angular' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('GCP', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (2, (SELECT id FROM technologies WHERE name = 'GCP' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Azure', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (2, (SELECT id FROM technologies WHERE name = 'Azure' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Hadoop', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (2, (SELECT id FROM technologies WHERE name = 'Hadoop' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Spark', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (2, (SELECT id FROM technologies WHERE name = 'Spark' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (2, (SELECT id FROM job_types WHERE name = 'CDI'));
    

      INSERT INTO job_types (name) 
      VALUES ('Alternance') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (2, (SELECT id FROM job_types WHERE name = 'Alternance'));
    

      INSERT INTO job_types (name) 
      VALUES ('Stage') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (2, (SELECT id FROM job_types WHERE name = 'Stage'));
    

    INSERT INTO domain (name) 
    VALUES ('E-commerce') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (2, (SELECT id FROM domain WHERE name = 'E-commerce'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Lectra', 'Solutions industrie textile', -0.687882, 44.750917, '23 Chemin de Marticot, 33610 Cestas', NULL, 'Solutions industrie textile');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Java', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (3, (SELECT id FROM technologies WHERE name = 'Java' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('C++', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (3, (SELECT id FROM technologies WHERE name = 'C++' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Angular', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (3, (SELECT id FROM technologies WHERE name = 'Angular' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Azure', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (3, (SELECT id FROM technologies WHERE name = 'Azure' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (3, (SELECT id FROM job_types WHERE name = 'CDI'));
    

      INSERT INTO job_types (name) 
      VALUES ('Stage') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (3, (SELECT id FROM job_types WHERE name = 'Stage'));
    

    INSERT INTO domain (name) 
    VALUES ('Solutions industrie textile') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (3, (SELECT id FROM domain WHERE name = 'Solutions industrie textile'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('OVHcloud', 'Cloud computing', -0.5598022599682128, 44.86400404503241, 'BASSINS A FLOT N 1 BAT G 4 QUAI LAWTON 33300 BORDEAUX', NULL, 'Cloud computing');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Go', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (4, (SELECT id FROM technologies WHERE name = 'Go' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Python', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (4, (SELECT id FROM technologies WHERE name = 'Python' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('-', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (4, (SELECT id FROM technologies WHERE name = '-' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Kubernetes', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (4, (SELECT id FROM technologies WHERE name = 'Kubernetes' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('OpenStack', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (4, (SELECT id FROM technologies WHERE name = 'OpenStack' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (4, (SELECT id FROM job_types WHERE name = 'CDI'));
    

      INSERT INTO job_types (name) 
      VALUES ('Stage') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (4, (SELECT id FROM job_types WHERE name = 'Stage'));
    

    INSERT INTO domain (name) 
    VALUES ('Cloud computing') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (4, (SELECT id FROM domain WHERE name = 'Cloud computing'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Ubisoft', 'Jeux vidéo', -0.563880, 44.837790, '15 Avenue Abadie, 33100 Bordeaux', NULL, 'Jeux vidéo');
      

      INSERT INTO technologies (name, type) 
      VALUES ('C++', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (5, (SELECT id FROM technologies WHERE name = 'C++' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('C#', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (5, (SELECT id FROM technologies WHERE name = 'C#' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Unreal Engine', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (5, (SELECT id FROM technologies WHERE name = 'Unreal Engine' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Unity', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (5, (SELECT id FROM technologies WHERE name = 'Unity' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('-', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (5, (SELECT id FROM technologies WHERE name = '-' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (5, (SELECT id FROM job_types WHERE name = 'CDI'));
    

      INSERT INTO job_types (name) 
      VALUES ('Stage') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (5, (SELECT id FROM job_types WHERE name = 'Stage'));
    

    INSERT INTO domain (name) 
    VALUES ('Jeux vidéo') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (5, (SELECT id FROM domain WHERE name = 'Jeux vidéo'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Deezer', 'Streaming musical', -0.568506377354394, 44.83447152479271, '20 Rue Saint-François, 33000 Bordeaux', NULL, 'Streaming musical');
      

      INSERT INTO technologies (name, type) 
      VALUES ('PHP', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (6, (SELECT id FROM technologies WHERE name = 'PHP' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Python', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (6, (SELECT id FROM technologies WHERE name = 'Python' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('React', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (6, (SELECT id FROM technologies WHERE name = 'React' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Spark', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (6, (SELECT id FROM technologies WHERE name = 'Spark' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Kafka', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (6, (SELECT id FROM technologies WHERE name = 'Kafka' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (6, (SELECT id FROM job_types WHERE name = 'CDI'));
    

    INSERT INTO domain (name) 
    VALUES ('Streaming musical') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (6, (SELECT id FROM domain WHERE name = 'Streaming musical'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Backmarket', 'E-commerce reconditionné', -0.571077, 44.836769, '12 Rue Bouquière, 33000 Bordeaux', NULL, 'E-commerce reconditionné');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Python', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (7, (SELECT id FROM technologies WHERE name = 'Python' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Django', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (7, (SELECT id FROM technologies WHERE name = 'Django' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('React', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (7, (SELECT id FROM technologies WHERE name = 'React' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('PostgreSQL', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (7, (SELECT id FROM technologies WHERE name = 'PostgreSQL' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Elasticsearch', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (7, (SELECT id FROM technologies WHERE name = 'Elasticsearch' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (7, (SELECT id FROM job_types WHERE name = 'CDI'));
    

    INSERT INTO domain (name) 
    VALUES ('E-commerce reconditionné') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (7, (SELECT id FROM domain WHERE name = 'E-commerce reconditionné'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('AT Internet', 'Analytics web', -0.6851924050541003, 44.83603977926842, '85 Av. John Fitzgerald Kennedy, 33700 Mérignac', NULL, 'Analytics web');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Java', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (8, (SELECT id FROM technologies WHERE name = 'Java' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Scala', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (8, (SELECT id FROM technologies WHERE name = 'Scala' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('React', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (8, (SELECT id FROM technologies WHERE name = 'React' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Hadoop', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (8, (SELECT id FROM technologies WHERE name = 'Hadoop' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Spark', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (8, (SELECT id FROM technologies WHERE name = 'Spark' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (8, (SELECT id FROM job_types WHERE name = 'CDI'));
    

      INSERT INTO job_types (name) 
      VALUES ('Stage') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (8, (SELECT id FROM job_types WHERE name = 'Stage'));
    

    INSERT INTO domain (name) 
    VALUES ('Analytics web') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (8, (SELECT id FROM domain WHERE name = 'Analytics web'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Synapse Medicine', 'Santé / IA', -0.5742509409969186, 44.848320857976084, '17 Rue Vauban, 33000 Bordeaux', NULL, 'Santé / IA');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Python', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (9, (SELECT id FROM technologies WHERE name = 'Python' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('FastAPI', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (9, (SELECT id FROM technologies WHERE name = 'FastAPI' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('React', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (9, (SELECT id FROM technologies WHERE name = 'React' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('PyTorch', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (9, (SELECT id FROM technologies WHERE name = 'PyTorch' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('scikit-learn', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (9, (SELECT id FROM technologies WHERE name = 'scikit-learn' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (9, (SELECT id FROM job_types WHERE name = 'CDI'));
    

    INSERT INTO domain (name) 
    VALUES ('Santé / IA') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (9, (SELECT id FROM domain WHERE name = 'Santé / IA'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Treefrog', 'IA / Computer Vision', -0.6528794033128216, 44.780713048902896, '30 Av. Gustave Eiffel Bâtiment A, 33600 Pessac', NULL, 'IA / Computer Vision');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Python', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (10, (SELECT id FROM technologies WHERE name = 'Python' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('FastAPI', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (10, (SELECT id FROM technologies WHERE name = 'FastAPI' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('-', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (10, (SELECT id FROM technologies WHERE name = '-' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('AWS', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (10, (SELECT id FROM technologies WHERE name = 'AWS' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('PyTorch', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (10, (SELECT id FROM technologies WHERE name = 'PyTorch' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('OpenCV', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (10, (SELECT id FROM technologies WHERE name = 'OpenCV' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (10, (SELECT id FROM job_types WHERE name = 'CDI'));
    

      INSERT INTO job_types (name) 
      VALUES ('Stage') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (10, (SELECT id FROM job_types WHERE name = 'Stage'));
    

    INSERT INTO domain (name) 
    VALUES ('IA / Computer Vision') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (10, (SELECT id FROM domain WHERE name = 'IA / Computer Vision'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Dydu', 'IA / Chatbots', -0.571256431006437, 44.84850904351653, '1 Pl. Lainé, 33000 Bordeaux', NULL, 'IA / Chatbots');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Python', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (11, (SELECT id FROM technologies WHERE name = 'Python' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Java', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (11, (SELECT id FROM technologies WHERE name = 'Java' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('-', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (11, (SELECT id FROM technologies WHERE name = '-' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('AWS', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (11, (SELECT id FROM technologies WHERE name = 'AWS' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('spaCy', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (11, (SELECT id FROM technologies WHERE name = 'spaCy' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('BERT', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (11, (SELECT id FROM technologies WHERE name = 'BERT' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (11, (SELECT id FROM job_types WHERE name = 'CDI'));
    

      INSERT INTO job_types (name) 
      VALUES ('Stage') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (11, (SELECT id FROM job_types WHERE name = 'Stage'));
    

    INSERT INTO domain (name) 
    VALUES ('IA / Chatbots') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (11, (SELECT id FROM domain WHERE name = 'IA / Chatbots'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Fieldbox.ai', 'IA Industrielle', -0.5554891747393104, 44.86327522798536, 'Quai Armand Lalande, 33300 Bordeaux', NULL, 'IA Industrielle');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Python', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (12, (SELECT id FROM technologies WHERE name = 'Python' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Go', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (12, (SELECT id FROM technologies WHERE name = 'Go' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('-', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (12, (SELECT id FROM technologies WHERE name = '-' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Azure', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (12, (SELECT id FROM technologies WHERE name = 'Azure' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Spark', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (12, (SELECT id FROM technologies WHERE name = 'Spark' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Kafka', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (12, (SELECT id FROM technologies WHERE name = 'Kafka' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (12, (SELECT id FROM job_types WHERE name = 'CDI'));
    

      INSERT INTO job_types (name) 
      VALUES ('Stage') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (12, (SELECT id FROM job_types WHERE name = 'Stage'));
    

    INSERT INTO domain (name) 
    VALUES ('IA Industrielle') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (12, (SELECT id FROM domain WHERE name = 'IA Industrielle'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Lucca', 'SaaS RH', -0.571096, 44.843077, '5 Place Jean Jaurès, 33000 Bordeaux', NULL, 'SaaS RH');
      

      INSERT INTO technologies (name, type) 
      VALUES ('.NET Core', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (13, (SELECT id FROM technologies WHERE name = '.NET Core' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Angular', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (13, (SELECT id FROM technologies WHERE name = 'Angular' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Azure', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (13, (SELECT id FROM technologies WHERE name = 'Azure' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (13, (SELECT id FROM job_types WHERE name = 'CDI'));
    

    INSERT INTO domain (name) 
    VALUES ('SaaS RH') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (13, (SELECT id FROM domain WHERE name = 'SaaS RH'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Wiidii', 'IA / Assistant personnel', -0.5487147021913998, 44.82640226945115, '208 Quai de Paludate, 33800 Bordeaux', NULL, 'IA / Assistant personnel');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Python', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (14, (SELECT id FROM technologies WHERE name = 'Python' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Node.js', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (14, (SELECT id FROM technologies WHERE name = 'Node.js' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('-', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (14, (SELECT id FROM technologies WHERE name = '-' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('spaCy', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (14, (SELECT id FROM technologies WHERE name = 'spaCy' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('BERT', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (14, (SELECT id FROM technologies WHERE name = 'BERT' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (14, (SELECT id FROM job_types WHERE name = 'CDI'));
    

      INSERT INTO job_types (name) 
      VALUES ('Stage') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (14, (SELECT id FROM job_types WHERE name = 'Stage'));
    

    INSERT INTO domain (name) 
    VALUES ('IA / Assistant personnel') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (14, (SELECT id FROM domain WHERE name = 'IA / Assistant personnel'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Hermès', 'Luxe / Maroquinerie', -0.581902, 44.852757, '20 Rue de Blanquefort, 33000 Bordeaux', NULL, 'Luxe / Maroquinerie');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Java', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (15, (SELECT id FROM technologies WHERE name = 'Java' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Spring Boot', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (15, (SELECT id FROM technologies WHERE name = 'Spring Boot' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Angular', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (15, (SELECT id FROM technologies WHERE name = 'Angular' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('SAP', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (15, (SELECT id FROM technologies WHERE name = 'SAP' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (15, (SELECT id FROM job_types WHERE name = 'CDI'));
    

    INSERT INTO domain (name) 
    VALUES ('Luxe / Maroquinerie') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (15, (SELECT id FROM domain WHERE name = 'Luxe / Maroquinerie'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Thales', 'Aéronautique / Défense', -0.7013786640067773, 44.84979738584846, '75-77 Av. Marcel Dassault, 33700 Mérignac', NULL, 'Aéronautique / Défense');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Java', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (16, (SELECT id FROM technologies WHERE name = 'Java' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('C++', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (16, (SELECT id FROM technologies WHERE name = 'C++' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('-', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (16, (SELECT id FROM technologies WHERE name = '-' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('AWS', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (16, (SELECT id FROM technologies WHERE name = 'AWS' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Azure', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (16, (SELECT id FROM technologies WHERE name = 'Azure' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (16, (SELECT id FROM job_types WHERE name = 'CDI'));
    

      INSERT INTO job_types (name) 
      VALUES ('Stage') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (16, (SELECT id FROM job_types WHERE name = 'Stage'));
    

    INSERT INTO domain (name) 
    VALUES ('Aéronautique / Défense') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (16, (SELECT id FROM domain WHERE name = 'Aéronautique / Défense'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Safran', 'Aéronautique', -0.5631879834309658, 44.84246893830646, '12 Quai des Queyries, 33100 Bordeaux', NULL, 'Aéronautique');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Java', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (17, (SELECT id FROM technologies WHERE name = 'Java' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('C++', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (17, (SELECT id FROM technologies WHERE name = 'C++' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('-', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (17, (SELECT id FROM technologies WHERE name = '-' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('MATLAB', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (17, (SELECT id FROM technologies WHERE name = 'MATLAB' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('TensorFlow', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (17, (SELECT id FROM technologies WHERE name = 'TensorFlow' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (17, (SELECT id FROM job_types WHERE name = 'CDI'));
    

      INSERT INTO job_types (name) 
      VALUES ('Stage') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (17, (SELECT id FROM job_types WHERE name = 'Stage'));
    

    INSERT INTO domain (name) 
    VALUES ('Aéronautique') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (17, (SELECT id FROM domain WHERE name = 'Aéronautique'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Dassault Aviation', 'Aéronautique', -0.6932481281393025, 44.84708879824108, '54 Av. Marcel Dassault, 33700 Mérignac', NULL, 'Aéronautique');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Java', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (18, (SELECT id FROM technologies WHERE name = 'Java' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('C++', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (18, (SELECT id FROM technologies WHERE name = 'C++' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('-', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (18, (SELECT id FROM technologies WHERE name = '-' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('MATLAB', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (18, (SELECT id FROM technologies WHERE name = 'MATLAB' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('CATIA', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (18, (SELECT id FROM technologies WHERE name = 'CATIA' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (18, (SELECT id FROM job_types WHERE name = 'CDI'));
    

      INSERT INTO job_types (name) 
      VALUES ('Stage') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (18, (SELECT id FROM job_types WHERE name = 'Stage'));
    

    INSERT INTO domain (name) 
    VALUES ('Aéronautique') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (18, (SELECT id FROM domain WHERE name = 'Aéronautique'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Bordeaux Métropole', 'Administration publique', -0.5854697368957901, 44.83662780744344, 'Cedex Esplanade Charles-de-Gaulle, 33045 Bordeaux', NULL, 'Administration publique');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Java', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (19, (SELECT id FROM technologies WHERE name = 'Java' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('PHP', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (19, (SELECT id FROM technologies WHERE name = 'PHP' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Angular', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (19, (SELECT id FROM technologies WHERE name = 'Angular' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('PostGIS', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (19, (SELECT id FROM technologies WHERE name = 'PostGIS' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (19, (SELECT id FROM job_types WHERE name = 'CDI'));
    

    INSERT INTO domain (name) 
    VALUES ('Administration publique') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (19, (SELECT id FROM domain WHERE name = 'Administration publique'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('CHU de Bordeaux', 'Santé', -0.6045065650054618, 44.82761181631253, 'Pl. Amélie Raba Léon, 33000 Bordeaux', NULL, 'Santé');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Java', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (20, (SELECT id FROM technologies WHERE name = 'Java' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('.NET', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (20, (SELECT id FROM technologies WHERE name = '.NET' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('-', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (20, (SELECT id FROM technologies WHERE name = '-' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Oracle', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (20, (SELECT id FROM technologies WHERE name = 'Oracle' AND type = 'Cloud'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Tableau', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (20, (SELECT id FROM technologies WHERE name = 'Tableau' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (20, (SELECT id FROM job_types WHERE name = 'CDI'));
    

    INSERT INTO domain (name) 
    VALUES ('Santé') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (20, (SELECT id FROM domain WHERE name = 'Santé'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Groupe CDiscount Energie', 'Énergie / Services', -0.552792, 44.860747, '120 Quai de Bacalan, 33300 Bordeaux', NULL, 'Énergie / Services');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Java', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (21, (SELECT id FROM technologies WHERE name = 'Java' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Python', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (21, (SELECT id FROM technologies WHERE name = 'Python' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('React', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (21, (SELECT id FROM technologies WHERE name = 'React' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('AWS', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (21, (SELECT id FROM technologies WHERE name = 'AWS' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (21, (SELECT id FROM job_types WHERE name = 'CDI'));
    

    INSERT INTO domain (name) 
    VALUES ('Énergie / Services') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (21, (SELECT id FROM domain WHERE name = 'Énergie / Services'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Crédit Agricole', 'Banque', -0.5523569107283983, 44.86149544820122, '106 Quai de Bacalan, 33300 Bordeaux', NULL, 'Banque');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Java', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (22, (SELECT id FROM technologies WHERE name = 'Java' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('.NET', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (22, (SELECT id FROM technologies WHERE name = '.NET' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Angular', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (22, (SELECT id FROM technologies WHERE name = 'Angular' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Hadoop', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (22, (SELECT id FROM technologies WHERE name = 'Hadoop' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (22, (SELECT id FROM job_types WHERE name = 'CDI'));
    

      INSERT INTO job_types (name) 
      VALUES ('Stage') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (22, (SELECT id FROM job_types WHERE name = 'Stage'));
    

    INSERT INTO domain (name) 
    VALUES ('Banque') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (22, (SELECT id FROM domain WHERE name = 'Banque'));
  

        INSERT INTO companies (name, description, longitude, latitude, adress, size, domain)
        VALUES ('Caisse d''Épargne', 'Banque', -0.5506270351958147, 44.827909810249785, '1 Parvis Corto Maltese, 33800 Bordeaux', NULL, 'Banque');
      

      INSERT INTO technologies (name, type) 
      VALUES ('Java', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (23, (SELECT id FROM technologies WHERE name = 'Java' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Spring', 'Backend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (23, (SELECT id FROM technologies WHERE name = 'Spring' AND type = 'Backend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('React', 'Frontend') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (23, (SELECT id FROM technologies WHERE name = 'React' AND type = 'Frontend'));
    

      INSERT INTO technologies (name, type) 
      VALUES ('Power BI', 'Cloud') 
      ON CONFLICT (name, type) DO NOTHING;
      INSERT INTO company_technologies (company_id, technology_id) 
      VALUES (23, (SELECT id FROM technologies WHERE name = 'Power BI' AND type = 'Cloud'));
    

      INSERT INTO job_types (name) 
      VALUES ('CDI') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (23, (SELECT id FROM job_types WHERE name = 'CDI'));
    

      INSERT INTO job_types (name) 
      VALUES ('Stage') 
      ON CONFLICT (name) DO NOTHING;
      INSERT INTO company_job_types (company_id, job_type_id) 
      VALUES (23, (SELECT id FROM job_types WHERE name = 'Stage'));
    

    INSERT INTO domain (name) 
    VALUES ('Banque') 
    ON CONFLICT (name) DO NOTHING;
    INSERT INTO company_domains (company_id, domain_id) 
    VALUES (23, (SELECT id FROM domain WHERE name = 'Banque'));
  
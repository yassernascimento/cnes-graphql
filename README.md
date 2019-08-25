# Development Flow

- run docker-compose up to init the backend server
- then run npm run start to init the frontend server

# Prepare Data Flow

- Remove empty fields with sed 's/""//g' originalFile.csv > refinedFile.csv
- Rename some fields on estabelecimento.csv header file to match datamodel.

# Database Flow

- enter on amazon server db with psql --host="amazon url here" --port=5432 --username=prisma --password
- update search_path with set search_path to default\$default;
- increase CO_UNIDADE string length with ALTER TABLE "Estabelecimento" ALTER COLUMN "CO_UNIDADE" TYPE varchar(40);
- then import the models data with e.g. \copy "Estabelecimento" (...fields on right order by the csv) from ./data/csv/estabelecimentos.csv with CSV HEADER DELIMITER ';' QUOTE '"';

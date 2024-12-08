const mysql = require('mysql2/promise');

async function main() {
  // Source database connection
  const sourceDb = await mysql.createConnection({
    host: 'jerryhobby.com',
    user: 'aviation',
    password: 'GtePUOVNkIIy4GM',
    database: 'aviation'
  });

  // Target database connection - using same credentials as Prisma
  const targetDb = await mysql.createConnection({
    host: 'jerryhobby.com',
    user: 'restools',
    password: '2pmxDTmRBounLLI',
    database: 'restools',
    port: 3306
  });

  try {
    // Import Countries first (required for foreign key constraints)
    console.log('Importing Countries...');
    const [countries] = await sourceDb.query('SELECT * FROM Countries');
    for (const country of countries) {
      try {
        await targetDb.query('INSERT INTO Countries SET ?', country);
      } catch (e) {
        console.error(`Error importing country ${country.code}:`, e.message);
      }
    }
    console.log(`Imported ${countries.length} countries`);

    // Import Regions next
    console.log('Importing Regions...');
    const [regions] = await sourceDb.query('SELECT * FROM Regions');
    for (const region of regions) {
      try {
        await targetDb.query('INSERT INTO Regions SET ?', region);
      } catch (e) {
        console.error(`Error importing region ${region.code}:`, e.message);
      }
    }
    console.log(`Imported ${regions.length} regions`);

    // Import Airlines
    console.log('Importing Airlines...');
    const [airlines] = await sourceDb.query('SELECT * FROM Airlines');
    for (const airline of airlines) {
      try {
        await targetDb.query('INSERT INTO Airlines SET ?', airline);
      } catch (e) {
        console.error(`Error importing airline ${airline.name}:`, e.message);
      }
    }
    console.log(`Imported ${airlines.length} airlines`);

    // Import Airports last (depends on Countries and Regions)
    console.log('Importing Airports...');
    const [airports] = await sourceDb.query('SELECT * FROM Airports');
    for (const airport of airports) {
      try {
        await targetDb.query('INSERT INTO Airports SET ?', airport);
      } catch (e) {
        console.error(`Error importing airport ${airport.name}:`, e.message);
      }
    }
    console.log(`Imported ${airports.length} airports`);

    console.log('Data import completed successfully');
  } catch (error) {
    console.error('Error importing data:', error);
  } finally {
    await sourceDb.end();
    await targetDb.end();
  }
}

main();

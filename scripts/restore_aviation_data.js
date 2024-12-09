const { PrismaClient } = require('@prisma/client');
const https = require('https');
const csv = require('csv-parse');

const prisma = new PrismaClient();

const BASE_URL = 'https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/';

async function fetchCSV(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function parseCSV(csvData) {
  return new Promise((resolve, reject) => {
    csv.parse(csvData, {
      columns: true,
      skip_empty_lines: true
    }, (err, records) => {
      if (err) reject(err);
      else resolve(records);
    });
  });
}

async function importCountries(data) {
  let count = 0;
  process.stdout.write('Importing countries... ');
  for (const row of data) {
    try {
      await prisma.country.upsert({
        where: { code: row.code },
        update: {
          name: row.name,
          continent: row.continent,
          wikipedia_link: row.wikipedia_link || null,
          keywords: row.keywords || null
        },
        create: {
          code: row.code,
          name: row.name,
          continent: row.continent,
          wikipedia_link: row.wikipedia_link || null,
          keywords: row.keywords || null
        }
      });
      count++;
    } catch (error) {
      process.stderr.write(`\nError importing country ${row.code}\n`);
    }
  }
  process.stdout.write(`done (${count})\n`);
}

async function importRegions(data) {
  let count = 0;
  process.stdout.write('Importing regions... ');
  for (const row of data) {
    try {
      await prisma.region.upsert({
        where: { code: row.code },
        update: {
          local_code: row.local_code || null,
          name: row.name,
          continent: row.continent,
          iso_country: row.iso_country,
          wikipedia_link: row.wikipedia_link || null,
          keywords: row.keywords || null
        },
        create: {
          code: row.code,
          local_code: row.local_code || null,
          name: row.name,
          continent: row.continent,
          iso_country: row.iso_country,
          wikipedia_link: row.wikipedia_link || null,
          keywords: row.keywords || null
        }
      });
      count++;
    } catch (error) {
      process.stderr.write(`\nError importing region ${row.code}\n`);
    }
  }
  process.stdout.write(`done (${count})\n`);
}

async function importAirports(data) {
  let count = 0, errors = 0;
  process.stdout.write('Importing airports... ');
  for (const row of data) {
    if (row.type === 'large_airport' || row.type === 'medium_airport') {
      try {
        const country = await prisma.country.findUnique({
          where: { code: row.iso_country }
        });
        
        if (!country) {
          errors++;
          continue;
        }

        if (row.iso_region) {
          const region = await prisma.region.findUnique({
            where: { code: row.iso_region }
          });
          
          if (!region) {
            errors++;
            continue;
          }
        }

        const existingAirport = await prisma.airport.findFirst({
          where: { 
            AND: [
              { ident: row.ident || '' },
              { iso_country: row.iso_country },
              { iso_region: row.iso_region || null }
            ]
          }
        });

        const airportData = {
          ident: row.ident || '',
          type: row.type,
          name: row.name,
          latitude_deg: row.latitude_deg ? parseFloat(row.latitude_deg) : null,
          longitude_deg: row.longitude_deg ? parseFloat(row.longitude_deg) : null,
          elevation_ft: row.elevation_ft ? parseInt(row.elevation_ft) : null,
          continent: row.continent,
          iso_country: row.iso_country,
          iso_region: row.iso_region,
          municipality: row.municipality || null,
          scheduled_service: row.scheduled_service || null,
          gps_code: row.gps_code || null,
          iata_code: row.iata_code || null,
          local_code: row.local_code || null,
          home_link: row.home_link || null,
          wikipedia_link: row.wikipedia_link || null,
          keywords: row.keywords || null
        };

        if (existingAirport) {
          await prisma.airport.update({
            where: { id: existingAirport.id },
            data: airportData
          });
        } else {
          await prisma.airport.create({
            data: airportData
          });
        }
        count++;
        if (count % 100 === 0) {
          process.stdout.write('.');
        }
      } catch (error) {
        errors++;
      }
    }
  }
  process.stdout.write(`done (${count} imported, ${errors} errors)\n`);
}

async function main() {
  try {
    const countriesData = await fetchCSV(BASE_URL + 'countries.csv');
    const countries = await parseCSV(countriesData);
    await importCountries(countries);

    const regionsData = await fetchCSV(BASE_URL + 'regions.csv');
    const regions = await parseCSV(regionsData);
    await importRegions(regions);

    const airportsData = await fetchCSV(BASE_URL + 'airports.csv');
    const airports = await parseCSV(airportsData);
    await importAirports(airports);

    console.log('Data import completed successfully');
  } catch (error) {
    console.error('Error importing data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

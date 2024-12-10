import { PrismaClient } from '@prisma/client';
import { parse } from 'csv-parse/sync';

const prisma = new PrismaClient();

const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/';
const FILES = {
  countries: 'countries.csv',
  regions: 'regions.csv',
  airports: 'airports.csv',
};

async function downloadFile(filename: string): Promise<string> {
  const response = await fetch(`${GITHUB_BASE_URL}${filename}`);
  return response.text();
}

async function parseCSV(csvContent: string) {
  return parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    cast: true,
  });
}

async function loadCountries(data: any[]) {
  console.log('Loading countries...');
  for (const row of data) {
    await prisma.country.upsert({
      where: { code: row.code },
      update: {
        name: row.name,
        continent: row.continent,
        wikipedia_link: row.wikipedia_link,
        keywords: row.keywords,
      },
      create: {
        code: row.code,
        name: row.name,
        continent: row.continent,
        wikipedia_link: row.wikipedia_link,
        keywords: row.keywords,
      },
    });
  }
  console.log('Countries loaded.');
}

async function loadRegions(data: any[]) {
  console.log('Loading regions...');
  for (const row of data) {
    await prisma.region.upsert({
      where: { code: row.code },
      update: {
        local_code: row.local_code ? row.local_code.toString() : null,
        name: row.name,
        continent: row.continent,
        iso_country: row.iso_country,
        wikipedia_link: row.wikipedia_link,
        keywords: row.keywords,
      },
      create: {
        code: row.code,
        local_code: row.local_code ? row.local_code.toString() : null,
        name: row.name,
        continent: row.continent,
        iso_country: row.iso_country,
        wikipedia_link: row.wikipedia_link,
        keywords: row.keywords,
      },
    });
  }
  console.log('Regions loaded.');
}

async function loadAirports(data: any[]) {
  console.log('Loading airports...');
  for (const row of data) {
    try {
      // Handle numeric fields
      const elevation = row.elevation_ft === '' ? null : Number(row.elevation_ft) || null;
      const latitude = Number(row.latitude_deg) || null;
      const longitude = Number(row.longitude_deg) || null;

      // Handle string fields that might be numbers
      const ident = row.ident?.toString() || null;
      const municipality = row.municipality === '' ? null : row.municipality?.toString() || null;
      const gps_code = row.gps_code === '' ? null : row.gps_code?.toString() || null;
      const local_code = row.local_code === '' ? null : row.local_code?.toString() || null;
      const keywords = row.keywords === '' ? null : row.keywords?.toString() || null;

      // Handle pure string fields
      const type = row.type?.toString() || null;
      const name = row.name?.toString() || null;
      const continent = row.continent?.toString() || null;
      const iso_country = row.iso_country?.toString(); // Required field, no null
      const iso_region = row.iso_region?.toString() || null;
      const scheduled_service = row.scheduled_service?.toString() || null;
      const iata_code = row.iata_code === '' ? null : row.iata_code?.toString() || null;
      const home_link = row.home_link === '' ? null : row.home_link?.toString() || null;
      const wikipedia_link = row.wikipedia_link === '' ? null : row.wikipedia_link?.toString() || null;

      await prisma.airport.upsert({
        where: {
          id: row.id,
        },
        update: {
          ident,
          type,
          name,
          latitude_deg: latitude,
          longitude_deg: longitude,
          elevation_ft: elevation,
          continent,
          iso_country,
          iso_region,
          municipality,
          scheduled_service,
          gps_code,
          iata_code,
          local_code,
          home_link,
          wikipedia_link,
          keywords,
        },
        create: {
          id: row.id,
          ident,
          type,
          name,
          latitude_deg: latitude,
          longitude_deg: longitude,
          elevation_ft: elevation,
          continent,
          iso_country,
          iso_region,
          municipality,
          scheduled_service,
          gps_code,
          iata_code,
          local_code,
          home_link,
          wikipedia_link,
          keywords,
        },
      });
    } catch (error) {
      console.error(`Error processing airport ${row.id}: ${error}`);
    }
  }
  console.log('Airports loaded.');
}

async function analyzeField(data: any[], fieldName: string) {
  const types = new Set();
  const examples = new Map();
  let nullCount = 0;
  let emptyCount = 0;
  let numberCount = 0;
  let stringCount = 0;
  let otherCount = 0;

  data.forEach((row: any) => {
    const value = row[fieldName];
    const type = typeof value;
    types.add(type);
    
    if (value === null) {
      nullCount++;
    } else if (value === '') {
      emptyCount++;
    } else if (!isNaN(Number(value))) {
      numberCount++;
      if (!examples.has('number')) {
        examples.set('number', value);
      }
    } else if (typeof value === 'string') {
      stringCount++;
      if (!examples.has('string')) {
        examples.set('string', value);
      }
    } else {
      otherCount++;
      if (!examples.has('other')) {
        examples.set('other', value);
      }
    }
  });

  return {
    fieldName,
    types: Array.from(types),
    nullCount,
    emptyCount,
    numberCount,
    stringCount,
    otherCount,
    examples: Object.fromEntries(examples)
  };
}

async function main() {
  try {
    // Download and parse countries
    const countriesData = await downloadFile(FILES.countries);
    const countries = await parseCSV(countriesData);
    await loadCountries(countries);

    // Download and parse regions
    const regionsData = await downloadFile(FILES.regions);
    const regions = await parseCSV(regionsData);
    await loadRegions(regions);

    // Download and parse airports
    const airportsData = await downloadFile(FILES.airports);
    const airports = await parseCSV(airportsData);
    await loadAirports(airports);

    console.log('Data loading completed successfully.');
  } catch (error) {
    console.error('Error loading data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

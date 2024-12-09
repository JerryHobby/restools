import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function main() {
  const hubsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../hubs.json'), 'utf-8')
  );

  console.log(`Found ${hubsData.length} hubs to import`);

  for (const hub of hubsData) {
    await prisma.hub.create({
      data: {
        airline: hub.airline,
        iata: hub.iata,
        airport: hub.airport,
        city: hub.city,
      },
    });
  }

  console.log('Hub data import completed');
}

main()
  .catch((e) => {
    console.error('Error importing hub data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

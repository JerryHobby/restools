const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const fileContent = fs.readFileSync(
    path.join(__dirname, '../scripts/hub.txt'),
    'utf-8'
  );

  // Split content into lines and filter out empty lines
  const lines = fileContent.split('\n').filter(line => line.trim());

  console.log(`Found ${lines.length} hubs to import`);

  for (const line of lines) {
    const [airline, city, iata, airport] = line.split('\t').map(s => s.trim());
    
    if (!airline || !city || !iata || !airport) {
      console.log('Skipping invalid line:', line);
      continue;
    }

    try {
      await prisma.hub.create({
        data: {
          airline,
          city,
          iata,
          airport
        },
      });
      console.log(`Imported hub: ${airline} - ${iata}`);
    } catch (error) {
      console.error(`Error importing hub ${airline} - ${iata}:`, error);
    }
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

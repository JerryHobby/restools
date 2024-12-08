const { PrismaClient: SourcePrisma } = require('../OLDPROJECTS/aviation/node_modules/.prisma/client');
const { PrismaClient: TargetPrisma } = require('@prisma/client');

const sourcePrisma = new SourcePrisma({
  datasourceUrl: "mysql://aviation:GtePUOVNkIIy4GM@jerryhobby.com:3306/aviation"
});

const targetPrisma = new TargetPrisma();

async function main() {
  try {
    // Import Airlines
    const airlines = await sourcePrisma.airlines.findMany();
    console.log(`Found ${airlines.length} airlines to import`);
    await targetPrisma.airlines.createMany({ data: airlines });

    // Import Countries
    const countries = await sourcePrisma.countries.findMany();
    console.log(`Found ${countries.length} countries to import`);
    await targetPrisma.countries.createMany({ data: countries });

    // Import Regions
    const regions = await sourcePrisma.regions.findMany();
    console.log(`Found ${regions.length} regions to import`);
    await targetPrisma.regions.createMany({ data: regions });

    // Import Airports
    const airports = await sourcePrisma.airports.findMany();
    console.log(`Found ${airports.length} airports to import`);
    await targetPrisma.airports.createMany({ data: airports });

    console.log('Data import completed successfully');
  } catch (error) {
    console.error('Error importing data:', error);
  } finally {
    await sourcePrisma.$disconnect();
    await targetPrisma.$disconnect();
  }
}

main();

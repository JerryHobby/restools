const { PrismaClient } = require('@prisma/client');
const fs = require('fs').promises;
const path = require('path');

const prisma = new PrismaClient();

const airlines = [
  {
    name: 'Aer Lingus',
    iata_code: 'EI',
    headquarters: 'Dublin, Ireland',
    hubs: 'Dublin Airport, Shannon Airport',
    country: 'Ireland',
    logo: 'aerlingus.png',
    website: 'https://www.aerlingus.com',
    continent: 'EU'
  },
  {
    name: 'Aeroméxico',
    iata_code: 'AM',
    headquarters: 'Mexico City, Mexico',
    hubs: 'Mexico City International Airport',
    country: 'Mexico',
    logo: 'aeromexico.svg',
    website: 'https://www.aeromexico.com',
    continent: 'NA'
  },
  {
    name: 'Air Asia',
    iata_code: 'AK',
    headquarters: 'Kuala Lumpur, Malaysia',
    hubs: 'Kuala Lumpur International Airport',
    country: 'Malaysia',
    logo: 'airasia.webp',
    website: 'https://www.airasia.com',
    continent: 'AS'
  },
  {
    name: 'Air Canada',
    iata_code: 'AC',
    headquarters: 'Montreal, Quebec, Canada',
    hubs: 'Toronto Pearson, Vancouver, Montreal',
    country: 'Canada',
    logo: 'aircanada.svg',
    website: 'https://www.aircanada.com',
    continent: 'NA'
  },
  {
    name: 'Air China',
    iata_code: 'CA',
    headquarters: 'Beijing, China',
    hubs: 'Beijing Capital International Airport',
    country: 'China',
    logo: 'airchina.webp',
    website: 'https://www.airchina.com',
    continent: 'AS'
  },
  {
    name: 'Air France',
    iata_code: 'AF',
    headquarters: 'Tremblay-en-France, France',
    hubs: 'Charles de Gaulle Airport, Orly Airport',
    country: 'France',
    logo: 'airfrance.svg',
    website: 'https://www.airfrance.com',
    continent: 'EU'
  },
  {
    name: 'Air India',
    iata_code: 'AI',
    headquarters: 'New Delhi, India',
    hubs: 'Indira Gandhi International Airport',
    country: 'India',
    logo: 'airindia.webp',
    website: 'https://www.airindia.in',
    continent: 'AS'
  },
  {
    name: 'Air New Zealand',
    iata_code: 'NZ',
    headquarters: 'Auckland, New Zealand',
    hubs: 'Auckland Airport',
    country: 'New Zealand',
    logo: 'airnewzealand.svg',
    website: 'https://www.airnewzealand.com',
    continent: 'OC'
  },
  {
    name: 'Alaska Airlines',
    iata_code: 'AS',
    headquarters: 'Seattle, Washington, USA',
    hubs: 'Seattle-Tacoma, Portland, Anchorage, San Francisco, Los Angeles',
    country: 'USA',
    logo: 'alaska.svg',
    website: 'https://www.alaskaair.com',
    continent: 'NA'
  },
  {
    name: 'All Nippon Airways',
    iata_code: 'NH',
    headquarters: 'Tokyo, Japan',
    hubs: 'Tokyo Narita, Tokyo Haneda',
    country: 'Japan',
    logo: 'allnippon.svg',
    website: 'https://www.ana.co.jp',
    continent: 'AS'
  },
  {
    name: 'American Airlines',
    iata_code: 'AA',
    headquarters: 'Fort Worth, Texas, USA',
    hubs: 'Dallas/Fort Worth, Charlotte, Chicago-O\'Hare, Los Angeles, Miami, New York-JFK, New York-LaGuardia, Philadelphia, Phoenix, Washington-National',
    country: 'USA',
    logo: 'american.webp',
    website: 'https://www.aa.com',
    continent: 'NA'
  },
  {
    name: 'Austrian Airlines',
    iata_code: 'OS',
    headquarters: 'Vienna, Austria',
    hubs: 'Vienna International Airport',
    country: 'Austria',
    logo: 'austrian.svg',
    website: 'https://www.austrian.com',
    continent: 'EU'
  },
  {
    name: 'British Airways',
    iata_code: 'BA',
    headquarters: 'London, England',
    hubs: 'London Heathrow, London Gatwick',
    country: 'United Kingdom',
    logo: 'british.svg',
    website: 'https://www.britishairways.com',
    continent: 'EU'
  },
  {
    name: 'Cathay Pacific',
    iata_code: 'CX',
    headquarters: 'Hong Kong',
    hubs: 'Hong Kong International Airport',
    country: 'Hong Kong',
    logo: 'cathay.svg',
    website: 'https://www.cathaypacific.com',
    continent: 'AS'
  },
  {
    name: 'China Eastern',
    iata_code: 'MU',
    headquarters: 'Shanghai, China',
    hubs: 'Shanghai Pudong, Shanghai Hongqiao',
    country: 'China',
    logo: 'chinaeastern.png',
    website: 'https://us.ceair.com',
    continent: 'AS'
  },
  {
    name: 'China Southern',
    iata_code: 'CZ',
    headquarters: 'Guangzhou, China',
    hubs: 'Guangzhou Baiyun International Airport',
    country: 'China',
    logo: 'chinasouthern.webp',
    website: 'https://www.csair.com',
    continent: 'AS'
  },
  {
    name: 'Delta Air Lines',
    iata_code: 'DL',
    headquarters: 'Atlanta, Georgia, USA',
    hubs: 'Atlanta, Boston, Detroit, Los Angeles, Minneapolis/St. Paul, New York-JFK, New York-LaGuardia, Salt Lake City, Seattle/Tacoma',
    country: 'USA',
    logo: 'delta.svg',
    website: 'https://www.delta.com',
    continent: 'NA'
  },
  {
    name: 'EasyJet',
    iata_code: 'U2',
    headquarters: 'Luton, England',
    hubs: 'London Gatwick, London Luton',
    country: 'United Kingdom',
    logo: 'easyjet.svg',
    website: 'https://www.easyjet.com',
    continent: 'EU'
  },
  {
    name: 'EgyptAir',
    iata_code: 'MS',
    headquarters: 'Cairo, Egypt',
    hubs: 'Cairo International Airport',
    country: 'Egypt',
    logo: 'egyptair.webp',
    website: 'https://www.egyptair.com',
    continent: 'AF'
  },
  {
    name: 'Emirates',
    iata_code: 'EK',
    headquarters: 'Dubai, UAE',
    hubs: 'Dubai International Airport',
    country: 'United Arab Emirates',
    logo: 'emirates.webp',
    website: 'https://www.emirates.com',
    continent: 'AS'
  },
  {
    name: 'Ethiopian Airlines',
    iata_code: 'ET',
    headquarters: 'Addis Ababa, Ethiopia',
    hubs: 'Bole International Airport',
    country: 'Ethiopia',
    logo: 'ethiopian.webp',
    website: 'https://www.ethiopianairlines.com',
    continent: 'AF'
  },
  {
    name: 'Eurowings',
    iata_code: 'EW',
    headquarters: 'Düsseldorf, Germany',
    hubs: 'Düsseldorf Airport, Hamburg Airport',
    country: 'Germany',
    logo: 'eurowings.webp',
    website: 'https://www.eurowings.com',
    continent: 'EU'
  },
  {
    name: 'EVA Air',
    iata_code: 'BR',
    headquarters: 'Taoyuan, Taiwan',
    hubs: 'Taoyuan International Airport',
    country: 'Taiwan',
    logo: 'evaair.png',
    website: 'https://www.evaair.com',
    continent: 'AS'
  },
  {
    name: 'Garuda Indonesia',
    iata_code: 'GA',
    headquarters: 'Jakarta, Indonesia',
    hubs: 'Soekarno-Hatta International Airport',
    country: 'Indonesia',
    logo: 'garuda.webp',
    website: 'https://www.garuda-indonesia.com',
    continent: 'AS'
  },
  {
    name: 'Go First',
    iata_code: 'G8',
    headquarters: 'Mumbai, India',
    hubs: 'Chhatrapati Shivaji Maharaj International Airport',
    country: 'India',
    logo: 'gofirst.webp',
    website: 'https://www.flygofirst.com',
    continent: 'AS'
  },
  {
    name: 'Hawaiian Airlines',
    iata_code: 'HA',
    headquarters: 'Honolulu, Hawaii, USA',
    hubs: 'Daniel K. Inouye International Airport',
    country: 'USA',
    logo: 'hawaiian.webp',
    website: 'https://www.hawaiianairlines.com',
    continent: 'NA'
  },
  {
    name: 'Iberia',
    iata_code: 'IB',
    headquarters: 'Madrid, Spain',
    hubs: 'Adolfo Suárez Madrid–Barajas Airport',
    country: 'Spain',
    logo: 'iberia.webp',
    website: 'https://www.iberia.com',
    continent: 'EU'
  },
  {
    name: 'IndiGo',
    iata_code: '6E',
    headquarters: 'Gurgaon, India',
    hubs: 'Indira Gandhi International Airport',
    country: 'India',
    logo: 'indigo.webp',
    website: 'https://www.goindigo.in',
    continent: 'AS'
  },
  {
    name: 'Japan Airlines',
    iata_code: 'JL',
    headquarters: 'Tokyo, Japan',
    hubs: 'Tokyo Narita, Tokyo Haneda',
    country: 'Japan',
    logo: 'japanair.webp',
    website: 'https://www.jal.com',
    continent: 'AS'
  },
  {
    name: 'Jet Airways',
    iata_code: '9W',
    headquarters: 'Mumbai, India',
    hubs: 'Chhatrapati Shivaji Maharaj International Airport',
    country: 'India',
    logo: 'jetairways.webp',
    website: 'https://www.jetairways.com',
    continent: 'AS'
  },
  {
    name: 'KLM',
    iata_code: 'KL',
    headquarters: 'Amstelveen, Netherlands',
    hubs: 'Amsterdam Airport Schiphol',
    country: 'Netherlands',
    logo: 'klm.webp',
    website: 'https://www.klm.com',
    continent: 'EU'
  },
  {
    name: 'Korean Air',
    iata_code: 'KE',
    headquarters: 'Seoul, South Korea',
    hubs: 'Incheon International Airport',
    country: 'South Korea',
    logo: 'korean.webp',
    website: 'https://www.koreanair.com',
    continent: 'AS'
  },
  {
    name: 'LEVEL',
    iata_code: 'LV',
    headquarters: 'Madrid, Spain',
    hubs: 'Barcelona–El Prat Airport',
    country: 'Spain',
    logo: 'level.svg',
    website: 'https://www.flylevel.com',
    continent: 'EU'
  },
  {
    name: 'Lufthansa',
    iata_code: 'LH',
    headquarters: 'Frankfurt, Germany',
    hubs: 'Frankfurt Airport, Munich Airport',
    country: 'Germany',
    logo: 'lufthansa.webp',
    website: 'https://www.lufthansa.com',
    continent: 'EU'
  },
  {
    name: 'Malaysia Airlines',
    iata_code: 'MH',
    headquarters: 'Kuala Lumpur, Malaysia',
    hubs: 'Kuala Lumpur International Airport',
    country: 'Malaysia',
    logo: 'malaysia.webp',
    website: 'https://www.malaysiaairlines.com',
    continent: 'AS'
  },
  {
    name: 'Mexicana',
    iata_code: 'MX',
    headquarters: 'Mexico City, Mexico',
    hubs: 'Mexico City International Airport',
    country: 'Mexico',
    logo: 'mexicana.webp',
    website: 'https://www.mexicana.com',
    continent: 'NA'
  },
  {
    name: 'Qantas',
    iata_code: 'QF',
    headquarters: 'Sydney, Australia',
    hubs: 'Sydney Airport, Melbourne Airport',
    country: 'Australia',
    logo: 'qantas.webp',
    website: 'https://www.qantas.com',
    continent: 'OC'
  },
  {
    name: 'Qatar Airways',
    iata_code: 'QR',
    headquarters: 'Doha, Qatar',
    hubs: 'Hamad International Airport',
    country: 'Qatar',
    logo: 'qatar.webp',
    website: 'https://www.qatarairways.com',
    continent: 'AS'
  },
  {
    name: 'Ryanair',
    iata_code: 'FR',
    headquarters: 'Dublin, Ireland',
    hubs: 'Dublin Airport, London Stansted Airport',
    country: 'Ireland',
    logo: 'ryanair.webp',
    website: 'https://www.ryanair.com',
    continent: 'EU'
  },
  {
    name: 'Scandinavian Airlines',
    iata_code: 'SK',
    headquarters: 'Stockholm, Sweden',
    hubs: 'Copenhagen Airport, Oslo Airport, Stockholm Arlanda Airport',
    country: 'Sweden',
    logo: 'sas.webp',
    website: 'https://www.flysas.com',
    continent: 'EU'
  },
  {
    name: 'Singapore Airlines',
    iata_code: 'SQ',
    headquarters: 'Singapore',
    hubs: 'Singapore Changi Airport',
    country: 'Singapore',
    logo: 'singapore.webp',
    website: 'https://www.singaporeair.com',
    continent: 'AS'
  },
  {
    name: 'Southwest Airlines',
    iata_code: 'WN',
    headquarters: 'Dallas, Texas, USA',
    hubs: 'Atlanta, Baltimore, Chicago-Midway, Dallas-Love, Denver, Houston-Hobby, Las Vegas, Los Angeles, Oakland, Orlando, Phoenix',
    country: 'USA',
    logo: 'southwest.webp',
    website: 'https://www.southwest.com',
    continent: 'NA'
  },
  {
    name: 'SpiceJet',
    iata_code: 'SG',
    headquarters: 'Gurgaon, India',
    hubs: 'Indira Gandhi International Airport',
    country: 'India',
    logo: 'spicejet.webp',
    website: 'https://www.spicejet.com',
    continent: 'AS'
  },
  {
    name: 'Swiss International Air Lines',
    iata_code: 'LX',
    headquarters: 'Basel, Switzerland',
    hubs: 'Zürich Airport',
    country: 'Switzerland',
    logo: 'swiss.webp',
    website: 'https://www.swiss.com',
    continent: 'EU'
  },
  {
    name: 'Turkish Airlines',
    iata_code: 'TK',
    headquarters: 'Istanbul, Turkey',
    hubs: 'Istanbul Airport',
    country: 'Turkey',
    logo: 'turkish.webp',
    website: 'https://www.turkishairlines.com',
    continent: 'EU'
  },
  {
    name: 'United Airlines',
    iata_code: 'UA',
    headquarters: 'Chicago, Illinois, USA',
    hubs: 'Chicago-O\'Hare, Denver, Guam, Houston-Intercontinental, Los Angeles, Newark, San Francisco, Washington-Dulles',
    country: 'USA',
    logo: 'united.svg',
    website: 'https://www.united.com',
    continent: 'NA'
  },
  {
    name: 'Vietnam Airlines',
    iata_code: 'VN',
    headquarters: 'Hanoi, Vietnam',
    hubs: 'Noi Bai International Airport',
    country: 'Vietnam',
    logo: 'vietnam.webp',
    website: 'https://www.vietnamairlines.com',
    continent: 'AS'
  },
  {
    name: 'Vistara',
    iata_code: 'UK',
    headquarters: 'Gurgaon, India',
    hubs: 'Indira Gandhi International Airport',
    country: 'India',
    logo: 'vistara.webp',
    website: 'https://www.airvistara.com',
    continent: 'AS'
  },
  {
    name: 'Wizz Air',
    iata_code: 'W6',
    headquarters: 'Budapest, Hungary',
    hubs: 'Budapest Ferenc Liszt International Airport',
    country: 'Hungary',
    logo: 'wizz.png',
    website: 'https://wizzair.com',
    continent: 'EU'
  }
];

async function importAirlines() {
  process.stdout.write('Importing airlines... ');
  let count = 0;
  
  for (const airline of airlines) {
    try {
      await prisma.airline.create({
        data: airline
      });
      count++;
    } catch (error) {
      process.stderr.write(`\nError importing airline ${airline.name}\n`);
    }
  }
  
  process.stdout.write(`done (${count})\n`);
}

async function main() {
  try {
    await importAirlines();
    console.log('Data import completed successfully');
  } catch (error) {
    console.error('Error importing data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();

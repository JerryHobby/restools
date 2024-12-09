import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const iataParam = searchParams.get('iata');

  if (!iataParam) {
    return NextResponse.json({ error: 'IATA codes are required' }, { status: 400 });
  }

  const iataList = iataParam.split(',').map(code => code.trim().toUpperCase());

  try {
    const timeZones = await prisma.time_Zone.findMany({
      where: {
        iata: {
          in: iataList
        }
      },
      select: {
        iata: true,
        time_zone: true
      }
    });

    // Get city names from Airport table
    const airports = await prisma.airport.findMany({
      where: {
        iata_code: {
          in: iataList
        }
      },
      select: {
        iata_code: true,
        municipality: true
      }
    });

    // Combine the data
    const result = timeZones.map(tz => ({
      iata: tz.iata,
      time_zone: tz.time_zone,
      city: airports.find(a => a.iata_code === tz.iata)?.municipality || tz.iata
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching timezone data:', error);
    return NextResponse.json(
      { error: 'Error fetching timezone data' },
      { status: 500 }
    );
  }
}

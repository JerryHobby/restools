import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';

    const airports = await prisma.airport.findMany({
      where: {
        AND: [
          {
            type: {
              in: ['large_airport', 'medium_airport'],
            },
          },
          {
            iata_code: {
              not: null,
            },
          },
          {
            OR: [
              { name: { contains: query } },
              { municipality: { contains: query } },
              { iata_code: { contains: query } },
              { iso_region: { contains: query } },
              { keywords: { contains: query } },
            ],
          },
        ],
      },
      orderBy: [
        { type: 'asc' }, // First sort by type (large -> medium -> small)
        { municipality: 'asc' }, // Then by city
        { iata_code: 'asc' }, // Then by IATA code
      ],
      take: 50,
    });

    // Filter for 3-character IATA codes in memory
    const filteredAirports = airports.filter(
      (airport) => airport.iata_code && airport.iata_code.length === 3
    );

    return NextResponse.json({ airports: filteredAirports });
  } catch (error) {
    console.error('Error fetching airports:', error);
    return NextResponse.json({ error: 'Failed to fetch airports', airports: [] }, { status: 500 });
  }
}

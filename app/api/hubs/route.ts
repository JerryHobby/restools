import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET() {
  try {
    const hubs = await prisma.hub.findMany({
      orderBy: [
        { airline: 'asc' },
        { city: 'asc' }
      ]
    });

    return NextResponse.json({ hubs });
  } catch (error) {
    console.error('Error fetching hubs:', error);
    return NextResponse.json({ error: 'Failed to fetch hubs', hubs: [] }, { status: 500 });
  }
}

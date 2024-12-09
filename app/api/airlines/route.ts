import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET() {
  try {
    const airlines = await prisma.airline.findMany();
    return NextResponse.json(airlines);
  } catch (error) {
    console.error('Error fetching airlines:', error);
    return NextResponse.json({ error: 'Failed to fetch airlines' }, { status: 500 });
  }
}

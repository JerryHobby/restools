import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('q') || '';
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '50');
        const offset = (page - 1) * limit;

        // Build where clause based on search query
        const where = query ? {
            OR: [
                { iata_code: { equals: query.toUpperCase() } },
                { name: { contains: query, mode: 'insensitive' } },
                { municipality: { contains: query, mode: 'insensitive' } },
                { iso_country: { equals: query.toUpperCase() } }
            ]
        } : undefined;

        // Get airports with search and pagination
        const [airports, total] = await Promise.all([
            prisma.Airports.findMany({
                where,
                orderBy: [
                    { type: 'desc' },  // Large airports first
                    { name: 'asc' }
                ],
                skip: offset,
                take: limit
            }),
            prisma.Airports.count({ where })
        ]);

        // Return with explicit headers
        return new NextResponse(
            JSON.stringify({
                airports,
                pagination: {
                    total,
                    page,
                    limit,
                    pages: Math.ceil(total / limit)
                }
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    } catch (error) {
        console.error('Error:', error);
        return new NextResponse(
            JSON.stringify({ 
                error: 'Failed to fetch airports',
                airports: [],
                pagination: { total: 0, page: 1, limit: 50, pages: 0 }
            }),
            { 
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    }
}

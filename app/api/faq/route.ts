import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET() {
  try {
    const faqs = await prisma.faq.findMany({
      orderBy: [{ category: 'asc' }, { orderInCategory: 'asc' }],
    });

    return NextResponse.json(faqs);
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return NextResponse.json({ error: 'Error fetching FAQs' }, { status: 500 });
  }
}

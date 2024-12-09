import React from 'react';
import prisma from '@/prisma/client';
import Image from 'next/image';

export default async function AirlinesPage() {
  const airlines = await prisma.airline.findMany({
    orderBy: [{ name: 'asc' }],
  });

  if (!airlines) {
    return (
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-6">Major Global Airlines</h1>
        <div>Something went wrong. Try again later.</div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Major Global Airlines</h1>

      <div className="overflow-x-auto">
        <table className="border rounded shadow mb-10 bg-white text-black w-full">
          <tbody>
            {airlines.map((airline) => (
              <tr key={airline.id} className="hover:bg-gray-50">
                <td className="p-4 w-[250px] text-black align-top">
                  {airline.logo ? (
                    <Image
                      src={`/images/airlines/${airline.logo}`}
                      alt={airline.name}
                      width={150}
                      height={50}
                      className="float-left mr-3 w-[150px] h-auto"
                      priority
                    />
                  ) : (
                    <div className="font-semibold text-md text-black">No Logo</div>
                  )}
                </td>
                <td className="p-4 text-black">
                  <div className="font-semibold whitespace-nowrap">
                    {airline.name} ({airline.iata_code})
                  </div>
                  <div className="text-sm">{airline.headquarters}</div>
                  <div className="text-sm">
                    {airline.website && (
                      <a
                        href={airline.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 mr-2"
                      >
                        [Website]
                      </a>
                    )}
                    {airline.phone && <span className="text-sm">{airline.phone}</span>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export const dynamic = 'force-dynamic';

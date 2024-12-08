'use client';
import React from 'react';
import Image from 'next/image';

interface Airline {
  id: number;
  name: string;
  logo: string | null;
  website: string | null;
  headquarters: string | null;
  hubs: string | null;
  continent: string | null;
  iata_code: string | null;
  phone: string | null;
}

export default function AirlinesTable({ initialAirlines }: { initialAirlines: Airline[] }) {
  if (!initialAirlines || initialAirlines.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No airlines found. Please check back later.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border rounded shadow mb-10 bg-white text-black">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Logo</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Headquarters</th>
            <th className="p-2 text-left">Contact</th>
          </tr>
        </thead>
        <tbody>
          {initialAirlines.map((airline) => (
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
              </td>
              <td className="p-4 text-black">
                <div className="font-semibold whitespace-nowrap">{airline.headquarters}</div>
              </td>
              <td className="p-4 text-black">
                <div className="font-semibold">
                  {airline.website && (
                    <a
                      href={airline.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 mr-2"
                    >
                      Website
                    </a>
                  )}
                  {airline.phone}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';

interface Airport {
  id: number;
  ident: string | null;
  type: string | null;
  name: string | null;
  latitude_deg: number | null;
  longitude_deg: number | null;
  elevation_ft: number | null;
  continent: string | null;
  iso_country: string;
  iso_region: string | null;
  municipality: string | null;
  scheduled_service: string | null;
  gps_code: string | null;
  iata_code: string | null;
  local_code: string | null;
  home_link: string | null;
  wikipedia_link: string | null;
  keywords: string | null;
}

export default function AirportsTable() {
  const [searchText, setSearchText] = useState('');
  const [airports, setAirports] = useState<Airport[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`/api/airports?q=${encodeURIComponent(searchText)}`);
      const data = await response.json();
      setAirports(data.airports);
    } catch (error) {
      console.error('Error fetching airports:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetch('/api/airports')
      .then((res) => res.json())
      .then((data) => setAirports(data.airports))
      .catch((error) => console.error('Error fetching airports:', error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search airports by code, name, or city..."
          className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>

      <table className="min-w-full border border-slate-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-slate-300">AAA</th>
            <th className="py-2 px-4 border border-slate-300">Name</th>
            <th className="py-2 px-4 border border-slate-300">City</th>
            <th className="py-2 px-4 border border-slate-300">Country</th>
          </tr>
        </thead>
        <tbody>
          {airports.map((airport) => (
            <tr key={airport.id}>
              <td className="text-3xl py-2 px-4 border border-slate-300 font-mono">
                {airport.iata_code ? (
                  <span className="font-semibold">{airport.iata_code}</span>
                ) : (
                  <span className="text-gray-400">{airport.ident}</span>
                )}
              </td>
              <td className="py-2 px-4 border border-slate-300">
                <div className="font-medium">
                  {airport.name}
                  {airport.home_link && (
                    <a
                      href={airport.home_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-500 hover:text-blue-700"
                    >
                      <span className="text-sm">[www]</span>
                    </a>
                  )}
                  {airport.wikipedia_link && (
                    <a
                      href={airport.wikipedia_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-500 hover:text-blue-700"
                    >
                      <span className="text-sm">[wiki]</span>
                    </a>
                  )}
                </div>
                <div className="text-sm text-gray-500">{airport.keywords}</div>
              </td>
              <td className="py-2 px-4 border border-slate-300">{airport.municipality || '-'}</td>
              <td className="py-2 px-4 border border-slate-300">{airport.iso_country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

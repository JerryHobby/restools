'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

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

interface AirportsResponse {
    airports: Airport[];
    pagination: {
        total: number;
        page: number;
        limit: number;
        pages: number;
    };
}

export default function AirportsTable() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentSearch, setCurrentSearch] = useState('');
    const [page, setPage] = useState(1);
    const limit = 50;

    const { data, isLoading, error } = useQuery<AirportsResponse>({
        queryKey: ['airports', currentSearch, page],
        queryFn: async () => {
            const params = new URLSearchParams({
                q: currentSearch,
                page: page.toString(),
                limit: limit.toString()
            });
            const response = await fetch(`/api/airports?${params}`);
            if (!response.ok) {
                throw new Error('Failed to fetch airports');
            }
            return response.json();
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentSearch(searchTerm);
        setPage(1);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-500 p-4">
                Error loading airports: {error instanceof Error ? error.message : 'Unknown error'}
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-between mb-4">
                <div className="text-sm text-gray-600">
                    {data?.pagination && (
                        <>
                            Showing {((page - 1) * limit) + 1} to {Math.min(page * limit, data.pagination.total)} of {data.pagination.total} airports
                        </>
                    )}
                </div>
                <form onSubmit={handleSubmit} className="flex">
                    <input
                        type="text"
                        placeholder="Search airports by code, name, or city..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Search
                    </button>
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border rounded shadow mb-4 bg-white text-black">
                    <thead>
                        <tr>
                            <th className="p-4 text-left">Code</th>
                            <th className="p-4 text-left">Name</th>
                            <th className="p-4 text-left">City</th>
                            <th className="p-4 text-left">Country</th>
                            <th className="p-4 text-left">Type</th>
                            <th className="p-4 text-left">Location</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {data?.airports.map((airport) => (
                            <tr key={airport.id} className="hover:bg-gray-50">
                                <td className="p-4 font-mono">
                                    {airport.iata_code ? (
                                        <span className="font-semibold">{airport.iata_code}</span>
                                    ) : (
                                        <span className="text-gray-400">{airport.ident}</span>
                                    )}
                                </td>
                                <td className="p-4">
                                    <div className="font-medium">
                                        {airport.name}
                                        {airport.wikipedia_link && (
                                            <a 
                                                href={airport.wikipedia_link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="ml-2 text-blue-500 hover:text-blue-700"
                                            >
                                                <span className="text-sm">📖</span>
                                            </a>
                                        )}
                                    </div>
                                </td>
                                <td className="p-4">{airport.municipality || '-'}</td>
                                <td className="p-4">{airport.iso_country}</td>
                                <td className="p-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        airport.type === 'large_airport' ? 'bg-green-100 text-green-800' :
                                        airport.type === 'medium_airport' ? 'bg-blue-100 text-blue-800' :
                                        'bg-gray-100 text-gray-800'
                                    }`}>
                                        {airport.type?.replace('_', ' ')}
                                    </span>
                                </td>
                                <td className="p-4">
                                    {airport.latitude_deg && airport.longitude_deg ? (
                                        <a
                                            href={`https://www.google.com/maps?q=${airport.latitude_deg},${airport.longitude_deg}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            {airport.latitude_deg.toFixed(2)}, {airport.longitude_deg.toFixed(2)}
                                        </a>
                                    ) : '-'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {data?.pagination && (
                <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-gray-600">
                        Page {page} of {Math.ceil(data.pagination.total / limit)}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => setPage(p => p + 1)}
                            disabled={!data.pagination || page >= Math.ceil(data.pagination.total / limit)}
                            className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

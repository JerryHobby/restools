import AirportsTable from '@/app/components/airports/AirportsTable';
import React from 'react';

export default function AirportsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div>
        <h1 className="text-3xl font-bold mb-6">Airports Search</h1>
        <p className="mb-4">
          Search and explore airports worldwide. Use the search box to filter by airport code, name,
          city, or country.
        </p>
        <AirportsTable />
      </div>
    </main>
  );
}

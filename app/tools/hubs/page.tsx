import React from 'react';
import HubsTable from '@/app/components/hubs/HubsTable';

export default function HubsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Airline Hubs</h1>
      <HubsTable />
    </div>
  );
}

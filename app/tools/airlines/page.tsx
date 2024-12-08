import React from 'react';
import AirlinesTable from '@/app/components/airlines/AirlinesTable';

export default function AirlinesPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Major Global Airlines</h1>
      <div className="mb-6">
        <p>
          This page provides information about major airlines worldwide, including their headquarters, 
          contact information, and hub locations.
        </p>
      </div>
      <AirlinesTable />
    </main>
  );
}

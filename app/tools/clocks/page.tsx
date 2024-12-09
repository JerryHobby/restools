'use client';

import { useState, useEffect } from 'react';
import ClockGrid from '@/app/components/clocks/ClockGrid';

const DEFAULT_IATAS = ['SFO', 'ORD', 'EWR', 'LHR'];
const STORAGE_KEY = 'restools-clock-iatas';

export default function WorldClocksPage() {
  const [iataInput, setIataInput] = useState('');
  const [activeIatas, setActiveIatas] = useState<string[]>([]);

  // Load saved IATA codes on initial render
  useEffect(() => {
    const savedIatas = localStorage.getItem(STORAGE_KEY);
    setActiveIatas(savedIatas ? JSON.parse(savedIatas) : DEFAULT_IATAS);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const codes = iataInput
      .split(/[\s,]+/)
      .map(code => code.trim().toUpperCase())
      .filter(code => code.length === 3);
    
    if (codes.length > 0) {
      setActiveIatas(codes);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(codes));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">World Clocks</h1>
      <div className="rounded-lg shadow p-6 bg-white dark:bg-gray-800">
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={iataInput}
              onChange={(e) => setIataInput(e.target.value)}
              placeholder="Enter IATA codes (e.g., SFO EWR NRT LHR)"
              className="flex-grow p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              aria-label="IATA Codes"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Show Clocks
            </button>
          </div>
        </form>
        
        <ClockGrid iataList={activeIatas} />
      </div>
    </div>
  );
}

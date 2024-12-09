'use client';

import { useState, useEffect, Fragment } from 'react';

interface Hub {
  id: number;
  airline: string;
  city: string;
  state: string;
  iata: string;
  airport: string;
}

interface GroupedHubs {
  [airline: string]: Hub[];
}

export default function HubsTable() {
  const [hubs, setHubs] = useState<GroupedHubs>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHubs = async () => {
      try {
        const response = await fetch('/api/hubs');
        const data = await response.json();

        // Group hubs by airline
        const grouped = data.hubs.reduce((acc: GroupedHubs, hub: Hub) => {
          if (!acc[hub.airline]) {
            acc[hub.airline] = [];
          }
          acc[hub.airline].push(hub);
          return acc;
        }, {});

        setHubs(grouped);
      } catch (error) {
        console.error('Error fetching hubs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHubs();
  }, []);

  if (loading) {
    return <div>Loading hub data...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-slate-300">
        <tbody>
          {Object.entries(hubs).map(([airline, airlineHubs]) => (
            <Fragment key={airline}>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <td colSpan={3} className="py-2 px-4 border border-slate-300 font-semibold">
                  {airline}
                </td>
              </tr>
              {airlineHubs.map((hub) => (
                <tr key={hub.id}>
                  <td className="text-3xl py-2 px-4 border border-slate-300 font-mono font-semibold">
                    {hub.iata}
                  </td>
                  <td className="py-2 px-4 border border-slate-300">
                    {hub.city}, {hub.state}
                  </td>
                  <td className="py-2 px-4 border border-slate-300">{hub.airport}</td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

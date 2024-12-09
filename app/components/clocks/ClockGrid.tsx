import { useState, useEffect } from 'react';
import Clock from './Clock';

interface TimeZoneInfo {
  iata: string;
  time_zone: string;
  city: string;
}

interface ClockGridProps {
  iataList: string[];
}

export default function ClockGrid({ iataList }: ClockGridProps) {
  const [timeZones, setTimeZones] = useState<TimeZoneInfo[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchTimeZones = async () => {
      try {
        const response = await fetch(`/api/timezones?iata=${iataList.join(',')}`);
        if (!response.ok) {
          throw new Error('Failed to fetch timezone data');
        }
        const data = await response.json();
        
        // Create a map for O(1) lookup of timezone data
        const tzMap = new Map(data.map((tz: TimeZoneInfo) => [tz.iata, tz]));
        
        // Preserve the order of iataList by mapping through it
        const orderedTimeZones = iataList
          .map(iata => tzMap.get(iata))
          .filter((tz): tz is TimeZoneInfo => tz !== undefined);
        
        setTimeZones(orderedTimeZones);
        setError('');
      } catch (err) {
        setError('Error fetching timezone data');
        console.error(err);
      }
    };

    if (iataList.length > 0) {
      fetchTimeZones();
    } else {
      setTimeZones([]);
    }
  }, [iataList]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {timeZones.map((tz) => (
        <Clock
          key={tz.iata}
          iata={tz.iata}
          timezone={tz.time_zone}
          city={tz.city}
        />
      ))}
    </div>
  );
}

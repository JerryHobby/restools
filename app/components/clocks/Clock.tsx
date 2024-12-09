import { useEffect, useState } from 'react';

interface ClockProps {
  iata: string;
  timezone: string;
  city: string;
}

export default function Clock({ iata, timezone, city }: ClockProps) {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const dateOptions: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      };

      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
      setDate(new Intl.DateTimeFormat('en-US', dateOptions).format(now));
    };

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="flex flex-col items-center justify-center p-4 m-2 bg-white dark:bg-gray-700 rounded-lg shadow-lg min-w-[200px]">
      <div className="text-lg font-bold text-gray-800 dark:text-white">{iata}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{city}</div>
      <div className="text-2xl font-mono font-bold text-gray-900 dark:text-white mt-2">{time}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{date}</div>
    </div>
  );
}

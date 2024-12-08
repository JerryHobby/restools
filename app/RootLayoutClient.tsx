'use client';

import { useRouter } from 'next/navigation';
import NavBar from './components/NavBar';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    router.push(route);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar onNavigate={handleNavigate} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}

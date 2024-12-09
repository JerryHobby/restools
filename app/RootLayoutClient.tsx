import NavBar from './components/NavBar';

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}

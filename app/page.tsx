export default function Home() {
  return (
    <div className="container  mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to ResTools</h1>
      <p className="text-xl mb-4">Your comprehensive toolkit for airline and travel management.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="p-6 dark:bg-slate-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Call Management</h2>
          <p>Track and manage call records, history, and daily activities.</p>
        </div>
        <div className="p-6 dark:bg-slate-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Time Management</h2>
          <p>Efficiently manage staffing and time tracking.</p>
        </div>
        <div className="p-6 dark:bg-slate-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Travel Tools</h2>
          <p>Access airline information, airport details, and world clocks.</p>
        </div>
      </div>
    </div>
  );
}

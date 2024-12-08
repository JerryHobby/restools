import Profile from '@/app/components/account/Profile';

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="rounded-lg shadow p-6">
        <Profile />
      </div>
    </div>
  );
}

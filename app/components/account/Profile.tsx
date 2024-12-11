'use client';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import EditableField from './EditableField';

export default function Profile() {
  const [error, setError] = useState<string | null>(null);
  const { data: session, update } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/account/login');
    },
  });

  const user = session?.user as any;

  const handleUpdateField = async (fieldName: string, value: string) => {
    setError(null);
    try {
      const response = await fetch('/api/auth/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [fieldName]: value || null }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update profile');
      }

      // Force a refresh of the session data
      await update();

    } catch (err: any) {
      console.error('Update error:', err);
      setError(err.message || 'Failed to update profile');
      throw err;
    }
  };

  if (error) {
    setTimeout(() => setError(null), 5000); // Clear error after 5 seconds
  }

  return (
    <div className="p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-start gap-4">
            {user?.image && (
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image
                    src={user.image}
                    alt={user.name || 'Profile picture'}
                    width={96}
                    height={96}
                  />
                </div>
              </div>
            )}
            <div className="flex-grow">
              <h2 className="card-title text-2xl mb-4">
                {user?.name || 'Anonymous User'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <EditableField
                    label="Email"
                    value={user?.email || ''}
                    fieldName="email"
                    onSave={handleUpdateField}
                  />
                  <div>
                    <label className="text-sm font-semibold text-gray-500 dark:text-gray-400">Role</label>
                    <p className="text-base-content">{user?.role || 'Normal'}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <EditableField
                    label="U-Number"
                    value={user?.unumber || ''}
                    fieldName="unumber"
                    onSave={handleUpdateField}
                  />
                  <EditableField
                    label="Function"
                    value={user?.function || ''}
                    fieldName="function"
                    onSave={handleUpdateField}
                  />
                  <EditableField
                    label="Location"
                    value={user?.location || ''}
                    fieldName="location"
                    onSave={handleUpdateField}
                  />
                </div>
              </div>

              {error && (
                <div className="alert alert-error mt-4">
                  <span>{error}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

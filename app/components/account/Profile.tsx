'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function Profile() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/account/login');
    },
  });

  return (
    <div className="p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-4">
            {session && session.user && session.user.image && (
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image
                    src={session.user.image}
                    alt={session.user.name || 'Profile picture'}
                    width={96}
                    height={96}
                  />
                </div>
              </div>
            )}
            <div>
              <h2 className="card-title">
                {(session?.user && session.user.name) || 'Anonymous User'}
              </h2>
              <p className="text-base-content/70">{session?.user && session.user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

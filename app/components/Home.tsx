'use client';
import React from 'react';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to ResTools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Quick Access</h2>
            <ul className="list-disc list-inside">
              <li>Record a new call</li>
              <li>View caller history</li>
              <li>Check daily stats</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Recent Updates</h2>
            <ul className="list-disc list-inside">
              <li>New airline routes added</li>
              <li>Updated airport information</li>
              <li>Enhanced time tracking</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Resources</h2>
            <ul className="list-disc list-inside">
              <li>Training materials</li>
              <li>Contact directory</li>
              <li>Help documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

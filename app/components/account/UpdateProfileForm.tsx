'use client';

import { useState } from 'react';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

const updateSchema = z.object({
  email: z.string().email().optional(),
  currentPassword: z.string().min(6).optional(),
  newPassword: z.string().min(6).optional(),
  confirmNewPassword: z.string().min(6).optional(),
  unumber: z.union([z.string(), z.null()]).optional(),
  function: z.union([z.string(), z.null()]).optional(),
  location: z.union([z.string(), z.null()]).optional(),
}).refine((data) => {
  if (data.newPassword || data.confirmNewPassword) {
    return data.currentPassword && data.newPassword === data.confirmNewPassword;
  }
  return true;
}, {
  message: "New passwords must match and current password is required to change password",
  path: ["newPassword"],
});

type UpdateProfileFormProps = {
  user: any;
  onClose: () => void;
};

export default function UpdateProfileForm({ user, onClose }: UpdateProfileFormProps) {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    // Helper function to handle empty strings
    const getFieldValue = (field: string) => {
      const value = formData.get(field) as string;
      return value?.trim() || null;
    };

    const data = {
      email: formData.get('email') as string || undefined,
      currentPassword: formData.get('currentPassword') as string || undefined,
      newPassword: formData.get('newPassword') as string || undefined,
      confirmNewPassword: formData.get('confirmNewPassword') as string || undefined,
      unumber: getFieldValue('unumber'),
      function: getFieldValue('function'),
      location: getFieldValue('location'),
    };

    try {
      // Validate the data
      updateSchema.parse(data);

      // Hash the new password if provided
      let hashedNewPassword;
      if (data.newPassword) {
        hashedNewPassword = await bcrypt.hash(data.newPassword, 10);
      }

      // Clean up the data before sending
      const updateData = {
        ...(data.email ? { email: data.email } : {}),
        ...(hashedNewPassword ? { newPassword: hashedNewPassword } : {}),
        ...(data.currentPassword ? { currentPassword: data.currentPassword } : {}),
        unumber: data.unumber,
        function: data.function,
        location: data.location,
      };

      console.log('Sending update data:', {
        ...updateData,
        currentPassword: updateData.currentPassword ? '[REDACTED]' : undefined,
        newPassword: updateData.newPassword ? '[REDACTED]' : undefined,
      });

      // Send update request
      const response = await fetch('/api/auth/update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to update profile');
      }

      setSuccess('Profile updated successfully');
      setTimeout(() => {
        onClose();
        window.location.reload(); // Refresh to show updated data
      }, 1500);
    } catch (err: any) {
      console.error('Update error:', err);
      setError(err.message || 'An error occurred while updating profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Update Profile</h2>
        <button onClick={onClose} className="btn btn-ghost">×</button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="alert alert-error">
            <span>{error}</span>
          </div>
        )}
        {success && (
          <div className="alert alert-success">
            <span>{success}</span>
          </div>
        )}

        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email || ''}
            className="input input-bordered w-full"
            placeholder="New email address"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">U-Number</span>
          </label>
          <input
            type="text"
            name="unumber"
            defaultValue={user?.unumber || ''}
            className="input input-bordered w-full"
            placeholder="Your U-Number"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Function</span>
          </label>
          <input
            type="text"
            name="function"
            defaultValue={user?.function || ''}
            className="input input-bordered w-full"
            placeholder="Your function/role"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            defaultValue={user?.location || ''}
            className="input input-bordered w-full"
            placeholder="Your location"
          />
        </div>

        <div className="divider">Change Password</div>

        <div>
          <label className="label">
            <span className="label-text">Current Password</span>
          </label>
          <input
            type="password"
            name="currentPassword"
            className="input input-bordered w-full"
            placeholder="Enter current password to change it"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">New Password</span>
          </label>
          <input
            type="password"
            name="newPassword"
            className="input input-bordered w-full"
            placeholder="Enter new password"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Confirm New Password</span>
          </label>
          <input
            type="password"
            name="confirmNewPassword"
            className="input input-bordered w-full"
            placeholder="Confirm new password"
          />
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-ghost"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </div>
      </form>
    </div>
  );
}

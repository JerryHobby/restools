'use client';

import { useState, useEffect } from 'react';

interface EditableFieldProps {
  label: string;
  value: string;
  fieldName: string;
  onSave: (fieldName: string, value: string) => Promise<void>;
}

export default function EditableField({ label, value, fieldName, onSave }: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [displayValue, setDisplayValue] = useState(value || '');
  const [editValue, setEditValue] = useState(value || '');

  // Update both display and edit values when prop changes
  useEffect(() => {
    setDisplayValue(value || '');
    setEditValue(value || '');
  }, [value]);

  const handleSave = async () => {
    setIsEditing(true);
    try {
      await onSave(fieldName, editValue);
      setDisplayValue(editValue); // Update display value
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save:', error);
    } finally {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditValue(value || ''); // Reset to current value
    setIsEditing(false);
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <label className="text-sm font-semibold text-gray-500 dark:text-gray-400">
        {label}
      </label>
      <div className="flex items-center gap-2">
        {isEditing ? (
          <>
            <form onSubmit={async (e) => {
              e.preventDefault();
              await handleSave();
            }} className="flex items-center gap-2 flex-grow">
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="input input-sm input-bordered flex-grow"
                disabled={isLoading}
                autoFocus
              />
              <div className="space-x-1 text-sm">
                <button 
                  type="submit"
                  className="text-primary hover:underline"
                  disabled={isLoading}
                >
                  save
                </button>
                <span>|</span>
                <button 
                  type="button"
                  onClick={handleCancel}
                  className="text-gray-500 hover:underline"
                  disabled={isLoading}
                >
                  cancel
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <p className="text-base-content flex-grow">{displayValue || 'Not set'}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="text-sm text-primary hover:underline"
            >
              edit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

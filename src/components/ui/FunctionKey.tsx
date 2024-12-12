import React from 'react';

interface FunctionKeyProps {
  label: string;
  shortcut: string;
  onClick: () => void;
  disabled?: boolean;
}

export function FunctionKey({ label, shortcut, onClick, disabled = false }: FunctionKeyProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        flex flex-col items-center justify-center
        px-4 py-1 min-w-[80px]
        border border-gray-300 rounded
        ${disabled
          ? 'bg-gray-100 text-gray-400'
          : 'bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100'
        }
        transition-colors duration-150
      `}
    >
      <span className="text-sm">{label}</span>
      <span className="text-xs text-gray-500">({shortcut})</span>
    </button>
  );
}
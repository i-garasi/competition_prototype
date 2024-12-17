import React from "react";

interface FunctionKeyProps {
  label: string;
  shortcut: string;
  onClick: () => void;
  disabled?: boolean;
}

export function FunctionKey({
  label,
  shortcut,
  onClick,
  disabled = false,
}: FunctionKeyProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        flex flex-col items-center justify-center
        px-4 py-1 min-w-[80px]
        border border-gray-300 rounded
        ${
          disabled
            ? "bg-gray-100 text-gray-400"
            : "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
        }
        transition-colors duration-150
      `}
    >
      <span className="text-sm">{label}</span>
      <span
        className={`
          text-xs
          ${
            disabled
              ? "bg-gray-100 text-gray-400"
              : "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
          }`}
      >
        ({shortcut})
      </span>
    </button>
  );
}

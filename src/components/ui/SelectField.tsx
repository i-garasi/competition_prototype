import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  name: string;
  options: Option[];
  required?: boolean;
  labelWidth?: string;
  hideLabel?: boolean;
}

export function SelectField({
  label,
  name,
  options,
  required,
  labelWidth = 'w-1/4',
  inputWidth = "w-full",
  hideLabel = false,
  className = '',
  ...props
}: SelectFieldProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {!hideLabel && label && (
        <label htmlFor={name} className={`text-sm font-medium text-gray-700 ${labelWidth}`}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        className={`block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${inputWidth}`}
        {...props}
      >
        <option value="">選択してください</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

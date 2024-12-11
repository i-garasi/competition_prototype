import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  name: string;
  required?: boolean;
  suffix?: React.ReactNode;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  hideLabel?: boolean;
}

export function InputField({
  label,
  name,
  required,
  suffix,
  helperText,
  multiline,
  rows = 3,
  hideLabel = false,
  ...props
}: InputFieldProps) {
  const inputClasses = "block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm";
  
  return (
    <div>
      {!hideLabel && label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {multiline ? (
          <textarea
            id={name}
            name={name}
            rows={rows}
            className={inputClasses}
            {...props}
          />
        ) : (
          <div className="flex">
            <input
              id={name}
              name={name}
              className={`${inputClasses} ${suffix ? 'rounded-r-none' : ''}`}
              {...props}
            />
            {suffix && (
              <div className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50">
                {suffix}
              </div>
            )}
          </div>
        )}
      </div>
      {helperText && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
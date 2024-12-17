import React from "react";

interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  name: string;
  required?: boolean;
  suffix?: React.ReactNode;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  labelWidth?: string;
  inputWidth?: string;
  textAlign?: string;
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
  labelWidth = "w-1/4",
  inputWidth = "w-full",
  textAlign = "text-left",
  hideLabel = false,
  ...props
}: InputFieldProps) {
  const inputClasses =
    "block w-full border-b border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm";

  return (
    <div>
      <div className="flex items-center">
        {!hideLabel && label && (
          <label
            htmlFor={name}
            className={`text-sm font-medium text-gray-700 ${labelWidth}`}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className={`relative pl-1 ${inputWidth}`}>
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
                className={`${inputClasses} ${suffix ? "rounded-r-none" : ""} ${textAlign}`}
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
      </div>
      {helperText && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
    </div>
  );
}

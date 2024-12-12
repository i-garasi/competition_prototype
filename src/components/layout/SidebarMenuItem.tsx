import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface SubItem {
  id: string;
  label: string;
  path: string;
}

interface MenuItemProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  menuPath: string;
  subItems: SubItem[];
}

export default function SidebarMenuItem({ id, label, icon, menuPath, subItems }: MenuItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span>{label}</span>
        </div>
        <ChevronRight
          className={`w-4 h-4 transition-transform ${
            isExpanded ? 'transform rotate-90' : ''
          }`}
        />
      </button>
      {isExpanded && (
        <div className="bg-gray-50 py-2">
          <NavLink
            to={menuPath}
            className={({ isActive }) =>
              `block px-12 py-2 text-sm ${
                isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            メニュー
          </NavLink>
          {subItems.map((subItem) => (
            <NavLink
              key={subItem.id}
              to={subItem.path}
              className={({ isActive }) =>
                `block px-12 py-2 text-sm ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              {subItem.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
import React from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { id: 'users', label: 'ユーザー管理', path: '/master/users' },
  { id: 'items', label: '品目管理', path: '/master/items' },
];

export default function MasterMenuPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">マスタメニュー</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className="p-4 text-left bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded shadow-sm transition-colors duration-150"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
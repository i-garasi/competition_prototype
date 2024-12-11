import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Package2, Box, Settings, Database, ChevronRight } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  menuPath: string;
  subItems: { id: string; label: string; path: string }[];
}

const menuItems: MenuItem[] = [
  {
    id: 'parts',
    label: '部品',
    icon: <Package2 className="w-5 h-5" />,
    menuPath: '/parts/menu',
    subItems: [
      { id: 'parts-order', label: '部品受注登録', path: '/parts/order' },
      { id: 'parts-inventory', label: '在庫管理', path: '/parts/inventory' },
    ],
  },
  {
    id: 'products',
    label: '製品',
    icon: <Box className="w-5 h-5" />,
    menuPath: '/products/menu',
    subItems: [
      { id: 'products-assembly', label: '製品組立', path: '/products/assembly' },
      { id: 'products-shipping', label: '出荷管理', path: '/products/shipping' },
    ],
  },
  {
    id: 'common',
    label: '共通',
    icon: <Settings className="w-5 h-5" />,
    menuPath: '/common/menu',
    subItems: [
      { id: 'common-reports', label: 'レポート', path: '/common/reports' },
      { id: 'common-settings', label: '設定', path: '/common/settings' },
    ],
  },
  {
    id: 'master',
    label: 'マスタ',
    icon: <Database className="w-5 h-5" />,
    menuPath: '/master/menu',
    subItems: [
      { id: 'master-users', label: 'ユーザー管理', path: '/master/users' },
      { id: 'master-items', label: '品目管理', path: '/master/items' },
    ],
  },
];

export default function Sidebar() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleMenuClick = (menuPath: string) => {
    navigate(menuPath);
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">販売管理システム</h1>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => {
                setExpandedItem(expandedItem === item.id ? null : item.id);
                handleMenuClick(item.menuPath);
              }}
              className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.label}</span>
              </div>
              <ChevronRight
                className={`w-4 h-4 transition-transform ${
                  expandedItem === item.id ? 'transform rotate-90' : ''
                }`}
              />
            </button>
            {expandedItem === item.id && (
              <div className="bg-gray-50 py-2">
                {item.subItems.map((subItem) => (
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
        ))}
      </nav>
      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
        <button
          onClick={logout}
          className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
        >
          ログアウト
        </button>
      </div>
    </div>
  );
}
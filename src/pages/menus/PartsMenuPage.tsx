import React from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { id: 'order', label: '部品受注登録', path: '/parts/order' },
  { id: 'return', label: '部品出荷登録', path: '/parts/return' },
  { id: 'correction', label: '部品売上修正登録', path: '/parts/correction' },
  { id: 'cancel', label: '部品売注登録', path: '/parts/cancel' },
  { id: 'purchase', label: '部品入庫登録', path: '/parts/purchase' },
  { id: 'transfer', label: '部品受注移動割当登録', path: '/parts/transfer' },
  { id: 'allocation', label: '部品受注移動割当処理', path: '/parts/allocation' },
  { id: 'shipping', label: '部品受注出荷照会', path: '/parts/shipping' },
  { id: 'inventory', label: '部品在庫照会', path: '/parts/inventory' },
  { id: 'status', label: '部品受注状況照会', path: '/parts/status' },
  { id: 'transfer-status', label: '部品在庫引当状況照会', path: '/parts/transfer-status' },
  { id: 'repair', label: '部品修送入庫登録', path: '/parts/repair' },
  { id: 'warehouse', label: '部品在庫修正登録', path: '/parts/warehouse' },
  { id: 'return-goods', label: '部品返品登録', path: '/parts/return-goods' },
  { id: 'shipping-instruction', label: '部品特出結果登録', path: '/parts/shipping-instruction' },
];

export default function PartsMenuPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">部品メニュー</h1>
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
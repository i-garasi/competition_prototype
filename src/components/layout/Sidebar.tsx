import React from "react";
import { Package2, Box, Settings, Database } from "lucide-react";
import { useAuthStore } from "../../stores/authStore";
import SidebarMenuItem from "./SidebarMenuItem";

const menuItems = [
  {
    id: "parts",
    label: "部品",
    icon: <Package2 className="w-5 h-5" />,
    menuPath: "/parts/menu",
    subItems: [
      { id: "parts-order", label: "部品受注登録", path: "/parts/order" },
      { id: "parts-inventory", label: "在庫管理", path: "/parts/inventory" },
      { id: "parts-shipping", label: "部品出荷登録", path: "/parts/shipping" },
      {
        id: "parts-correction",
        label: "部品売上修正登録",
        path: "/parts/correction",
      },
      { id: "parts-cancel", label: "部品売注登録", path: "/parts/cancel" },
      { id: "parts-purchase", label: "部品入庫登録", path: "/parts/purchase" },
      {
        id: "parts-transfer",
        label: "部品受注移動割当登録",
        path: "/parts/transfer",
      },
      {
        id: "parts-allocation",
        label: "部品受注移動割当処理",
        path: "/parts/allocation",
      },
      {
        id: "parts-shipping-inquiry",
        label: "部品受注出荷照会",
        path: "/parts/shipping-inquiry",
      },
      {
        id: "parts-inventory-inquiry",
        label: "部品在庫照会",
        path: "/parts/inventory-inquiry",
      },
      { id: "parts-status", label: "部品受注状況照会", path: "/parts/status" },
      {
        id: "parts-transfer-status",
        label: "部品在庫引当状況照会",
        path: "/parts/transfer-status",
      },
      { id: "parts-repair", label: "部品修送入庫登録", path: "/parts/repair" },
      {
        id: "parts-warehouse",
        label: "部品在庫修正登録",
        path: "/parts/warehouse",
      },
      { id: "parts-return", label: "部品返品登録", path: "/parts/return" },
      {
        id: "parts-shipping-instruction",
        label: "部品特出結果登録",
        path: "/parts/shipping-instruction",
      },
    ],
  },
  {
    id: "products",
    label: "製品",
    icon: <Box className="w-5 h-5" />,
    menuPath: "/products/menu",
    subItems: [
      {
        id: "products-assembly",
        label: "製品組立",
        path: "/products/assembly",
      },
      {
        id: "products-shipping",
        label: "出荷管理",
        path: "/products/shipping",
      },
    ],
  },
  {
    id: "common",
    label: "共通",
    icon: <Settings className="w-5 h-5" />,
    menuPath: "/common/menu",
    subItems: [
      { id: "common-reports", label: "レポート", path: "/common/reports" },
      { id: "common-settings", label: "設定", path: "/common/settings" },
    ],
  },
  {
    id: "master",
    label: "マスタ",
    icon: <Database className="w-5 h-5" />,
    menuPath: "/master/menu",
    subItems: [
      { id: "master-users", label: "ユーザー管理", path: "/master/users" },
      { id: "master-items", label: "品目管理", path: "/master/items" },
    ],
  },
];

export default function Sidebar() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">
          <div className="flex items-center">
            <img src="/logo_single.png" alt="ロゴ" className="h-8 w-8 mr-2" />
            販売管理システム
          </div>
        </h1>
      </div>
      <div className="pl-4 py-2 border-b border-gray-200">
        <div className="text-sm text-gray-500">2024/12/23</div>
        <div className="text-sm text-gray-500">999: テストユーザー</div>
      </div>
      <nav className="flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.id} {...item} />
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200">
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

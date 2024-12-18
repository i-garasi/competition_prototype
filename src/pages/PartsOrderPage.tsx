import React from "react";
import OrderFormHeader from "../components/parts/OrderFormHeader";
import OrderFormDetails from "../components/parts/OrderFormDetails";
import OrderFormDelivery from "../components/parts/OrderFormDelivery";
import OrderFormItems from "../components/parts/OrderFormItems";
import OrderFormFooter from "../components/parts/OrderFormFooter";
import OrderFormActions from "../components/parts/OrderFormActions";

export default function PartsOrderPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-2 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">部品受注登録</h1>
          <div>
            <div className="text-sm text-gray-500">登録: テストユーザー 2024/12/23</div>
            <div className="text-sm text-gray-500">更新: テストユーザー 2024/12/23</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-4 space-y-4">
          <OrderFormHeader />
          <OrderFormDetails />
          <OrderFormDelivery />
          <OrderFormItems />
          <OrderFormFooter />
          <OrderFormActions />
        </form>
      </div>
    </div>
  );
}

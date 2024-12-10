import React from 'react';
import OrderFormHeader from '../components/parts/OrderFormHeader';
import OrderFormDetails from '../components/parts/OrderFormDetails';
import OrderFormDelivery from '../components/parts/OrderFormDelivery';
import OrderFormItems from '../components/parts/OrderFormItems';
import OrderFormFooter from '../components/parts/OrderFormFooter';

export default function PartsOrderPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">部品受注登録</h1>
          <div className="text-sm text-gray-500">
            処理日: 2015/04/23
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <OrderFormHeader />
          <OrderFormDetails />
          <OrderFormDelivery />
          <OrderFormItems />
          <OrderFormFooter />
          
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              クリア
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              登録
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
import React from 'react';
import OrderFormHeader from '../components/parts/OrderFormHeader';
import OrderFormDetails from '../components/parts/OrderFormDetails';
import OrderFormDelivery from '../components/parts/OrderFormDelivery';
import OrderFormItems from '../components/parts/OrderFormItems';
import OrderFormFooter from '../components/parts/OrderFormFooter';
import OrderFormActions from '../components/parts/OrderFormActions';

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
          <OrderFormActions />
        </form>
      </div>
    </div>
  );
}
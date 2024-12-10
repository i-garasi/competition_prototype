import React from 'react';
import { InputField } from '../ui/InputField';

export default function OrderFormDetails() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="flex gap-2 items-end">
          <InputField
            label="納入先"
            name="deliveryDestination"
            required
            defaultValue="01660"
          />
          <button className="px-2 py-2 bg-gray-100 rounded text-sm h-[38px]">検索</button>
          <span className="py-2 text-sm">㈱サザキ硝材ラボ2</span>
        </div>
        <div className="flex gap-2 items-end">
          <InputField
            label="得意先"
            name="customer"
            required
            defaultValue="01660"
          />
          <button className="px-2 py-2 bg-gray-100 rounded text-sm h-[38px]">検索</button>
          <span className="py-2 text-sm">㈱サザキ硝材ラボ2</span>
        </div>
        <div className="flex gap-2 items-end">
          <InputField
            label="商流先"
            name="tradingPartner"
            required
            defaultValue="01660"
          />
          <button className="px-2 py-2 bg-gray-100 rounded text-sm h-[38px]">検索</button>
          <span className="py-2 text-sm">㈱サザキ硝材ラボ2</span>
        </div>
      </div>
    </div>
  );
}
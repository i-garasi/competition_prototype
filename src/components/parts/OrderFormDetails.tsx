import React from 'react';
import { InputField } from '../ui/InputField';

export default function OrderFormDetails() {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-1 gap-2">
        <div className="flex gap-2 items-end">
          <InputField
            label="納入先"
            name="deliveryDestination"
            labelWidth="w-[80px]"
            required
            defaultValue="01660"
          />
          <button className="px-2 py-1 bg-gray-100 rounded text-sm h-[26px]">検索</button>
          <span className="text-sm">㈱ササキ機械テスト2</span>
        </div>
        <div className="flex gap-2 items-end">
          <InputField
            label="得意先"
            name="customer"
            labelWidth="w-[80px]"
            required
            defaultValue="01660"
          />
          <button className="px-2 py-1 bg-gray-100 rounded text-sm h-[26px]">検索</button>
          <span className="text-sm">㈱ササキ機械テスト2</span>
        </div>
        <div className="flex gap-2 items-end">
          <InputField
            label="商流先"
            name="tradingPartner"
            labelWidth="w-[80px]"
            required
            defaultValue="01660"
          />
          <button className="px-2 py-1 bg-gray-100 rounded text-sm h-[26px]">検索</button>
          <span className="text-sm">㈱ササキ機械テスト2</span>
        </div>
      </div>
    </div>
  );
}
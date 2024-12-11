import React from 'react';
import { SelectField } from '../ui/SelectField';
import { InputField } from '../ui/InputField';

const orderMethods = [
  { value: '1', label: '電話' },
  { value: '2', label: 'FAX' },
  { value: '3', label: 'メール' },
];

const offices = [
  { value: '110', label: '110: 北海道営業所' },
  { value: '120', label: '120: 東北営業所' },
  { value: '130', label: '130: 関東営業所' },
];

const shippingPoints = [
  { value: '010', label: '010: 本社物流センター' },
  { value: '020', label: '020: 東日本物流センター' },
  { value: '030', label: '030: 西日本物流センター' },
];

export default function OrderFormHeader() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-2 text-sm font-medium text-gray-700">受注番号</div>
        <div className="col-span-4">
          <InputField
            name="orderNumber"
            defaultValue="5438-0342"
            required
            hideLabel
          />
        </div>
        <div className="col-span-2 text-sm font-medium text-gray-700">受注方法</div>
        <div className="col-span-4">
          <SelectField
            name="orderMethod"
            required
            options={orderMethods}
            defaultValue="1"
            hideLabel
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-2 text-sm font-medium text-gray-700">担当者コード</div>
        <div className="col-span-4 flex gap-2">
          <InputField
            name="representativeCode"
            required
            defaultValue="1408"
            hideLabel
          />
          <button className="px-2 py-2 bg-gray-100 rounded text-sm h-[38px]">検索</button>
          <span className="py-2 text-sm">八幡 圭祐</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-2 text-sm font-medium text-gray-700">営業所コード</div>
        <div className="col-span-4">
          <SelectField
            name="officeCode"
            required
            options={offices}
            defaultValue="110"
            hideLabel
          />
        </div>
        <div className="col-span-2 text-sm font-medium text-gray-700">地域コード</div>
        <div className="col-span-4">
          <SelectField
            name="regionCode"
            required
            options={offices}
            defaultValue="110"
            hideLabel
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-2 text-sm font-medium text-gray-700">出荷拠点</div>
        <div className="col-span-4">
          <SelectField
            name="shippingPoint"
            required
            options={shippingPoints}
            defaultValue="010"
            hideLabel
          />
        </div>
      </div>
    </div>
  );
}